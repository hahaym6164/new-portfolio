import { BOOK_SEARCH_ACTION_TYPE } from "../actions-types";
import { Dispatch } from "redux";
import { BookSearchReducerAction } from "../actions/index";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://openlibrary.org/search.json?title=";
const coverUrl = "https://covers.openlibrary.org/b/id/";

// interface ApiResponse {
//   status: string;
//   data: Book[];
// }
const getData = createAsyncThunk('data/fetchData',async (key:string) => {
    const response = await fetch(url+key)
    const jsonData= await response.json();
    return jsonData.docs
})
const getBookList = async (key: string) => {
  console.log("getbl");

  try {
    console.log(key);

    const response = await fetch(key);
    const jsonData = await response.json();

    console.log(response, "bk", jsonData.docs, typeof jsonData.docs);
    return await jsonData.docs;
  } catch (e) {
    console.log(e);
  }
};
export const searchBook = (key: string) => {
  let res = getBookList(url + key);
  console.log(res, "res");

  // const response = await fetch(url + key);
  // const jsonData = await response.json();
  // console.log(response, "bk", jsonData.docs);
  return (dispatch: Dispatch<BookSearchReducerAction>) => {
    dispatch({
      type: BOOK_SEARCH_ACTION_TYPE.SEARCHBOOK,
      payload: {
        // searchKey: key,
        // bookList: res
      },
    });
  };
};
export const searchOnChange = (key: string) => {
  return (dispatch: Dispatch<BookSearchReducerAction>) => {
    dispatch({
      type: BOOK_SEARCH_ACTION_TYPE.SEARCHONCHANGE,
      payload: {
        searchKey: key,
      },
    });
  };
};
export const sortByTitle = () => {
  return (dispatch: Dispatch<BookSearchReducerAction>) => {
    dispatch({
      type: BOOK_SEARCH_ACTION_TYPE.SORTBYTITLE,
      payload: {
        // searchKey: '',
      },
    });
  };
};
export const sortByYear = () => {
  return (dispatch: Dispatch<BookSearchReducerAction>) => {
    dispatch({
      type: BOOK_SEARCH_ACTION_TYPE.SORTBYYEAR,
      payload: {
        // searchKey: '',
      },
    });
  };
};
export const pageFlip = (num: number) => {
  return (dispatch: Dispatch<BookSearchReducerAction>) => {
    dispatch({
      type: BOOK_SEARCH_ACTION_TYPE.SORTBYYEAR,
      payload: {
        pageNumber: num,
        // searchKey: '',
      },
    });
  };
};
