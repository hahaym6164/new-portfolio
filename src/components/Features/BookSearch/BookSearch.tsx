import React, { Component, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { State, AppDispatch } from "../../state";
import {
  fetchAsyncBook,
  searchOnChange,
  pageFlip,
  booksPerPageChange,
} from "../../state/Features/bookSearchSlice";
import "./style.css";
import TablePagination from "@mui/material/TablePagination";
import ClipLoader from "react-spinners/ClipLoader";

const postfixCover = "-L.jpg";
const coverUrl = "https://covers.openlibrary.org/b/id/";

const useAppDispatch = () => useDispatch<AppDispatch>();

const BookSearch = () => {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    console.log(newPage, "ip");

    dispatch(pageFlip(newPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let ip = parseInt(event.target.value, 10);

    dispatch(booksPerPageChange(ip));
  };
  const dispatch = useAppDispatch();

  const book = useSelector((state: State) => state.book);
  let [loading, setLoading] = React.useState(false);

  const searching = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    dispatch(fetchAsyncBook(book.searchKey));
  };
  // onchange handler
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchOnChange(e.target.value));
  };
  return (
    <>
      <div className="main-content">
        <h4>
          Resources from{" "}
          <a
            target="_blank"
            className="job-link "
            href="https://openlibrary.org"
          >
            https://openlibrary.org{" "}
          </a>
        </h4>
        <p>Please search the book title in the input box below</p>
        <div className="searchBar">
          <form onSubmit={searching}>
            <label>
              <input
                type="text"
                className="searchInput"
                placeholder="Enter Book Title Here"
                onChange={handleOnChange}
              />
              <input
                type="submit"
                className="searchInput"
                value="Search"
                id="submit"
              />
            </label>
            <br></br>
          </form>
        </div>
        {book.bookList.length > 0 ? (
          <TablePagination
            component="div"
            count={book.bookList.length ?? 0}
            page={book.pageNum}
            onPageChange={handleChangePage}
            rowsPerPage={book.booksPerPage}
            rowsPerPageOptions={
              book.bookList.length > 0 ? [10, 20, 40, 80] : []
            }
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        ) : (
          ""
        )}

        <ClipLoader
          color={"#fee715ff"}
          loading={loading && book.bookList.length == 0}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <div className="bookList">
          {book.bookShowList &&
            book.bookShowList.map((i) => (
              <div key={i.key} className="singleBook">
                <div className="bookCover">
                  <img
                    src={
                      i.cover_i
                        ? coverUrl + i.cover_i + postfixCover
                        : "https://cdn.icon-icons.com/icons2/3249/PNG/512/book_question_mark_filled_icon_199996.png"
                    }
                  />
                </div>
                <div className="info">
                  <h4>{i.title}</h4>

                  <p>
                    Published: <span>{i.first_publish_year}</span>
                  </p>
                  <p>
                    Authors:
                    {/* {i.author_name && i.author_name.map(name =>
                                        <span className="authors" key={book.nameKey++}> {name} <label>/</label></span>

                                    )} */}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default BookSearch;
