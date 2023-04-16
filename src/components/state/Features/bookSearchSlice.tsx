import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
interface initState {
  nameKey: number;
  status: string;
  error: string;
  bookList: any[];
  pageNum: number;
  bookShowList: any[];
  searchKey: string;
  booksPerPage: number;
}
const initState: initState = {
  nameKey: 1,
  status: "",
  error: "",
  bookList: [],
  bookShowList: [],
  searchKey: "",
  pageNum: 0,
  booksPerPage: 10,
};

const url = "https://openlibrary.org/search.json?title=";

export const fetchAsyncBook = createAsyncThunk(
  "book/fetchBookData",
  async (key: string) => {
    const response = await fetch(url + key);
    const jsonData = await response.json();
    return [...jsonData.docs];
  }
);
export const fetchSlice = createSlice({
  name: "book",
  initialState: initState,
  reducers: {
    searchOnChange: (state, action: PayloadAction<string>) => {
      state.searchKey = action.payload;
    },
    pageFlip: (state, action: PayloadAction<number>) => {
      state.pageNum = action.payload;
      state.bookShowList = state.bookList.slice(
        state.pageNum * state.booksPerPage,
        (state.pageNum + 1) * state.booksPerPage
      );
      console.log("page flip", action.payload);
    },
    booksPerPageChange: (state, action: PayloadAction<number>) => {
      state.booksPerPage = action.payload;
      console.log("books perpage change", action.payload);
      state.pageNum = 0;

      state.bookShowList = state.bookList.slice(
        state.pageNum * state.booksPerPage,
        (state.pageNum + 1) * state.booksPerPage
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAsyncBook.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAsyncBook.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.bookList = action.payload ?? [""];
        state.bookShowList = state.bookList.slice(0, state.booksPerPage);
      })
      .addCase(fetchAsyncBook.rejected, (state, action) => {
        state.status = "failed";
        console.log(action.error.message, "err");
      });
  },
});

// export default bookSearchReducer;
export default fetchSlice.reducer;
export const { searchOnChange, pageFlip, booksPerPageChange } =
  fetchSlice.actions;
