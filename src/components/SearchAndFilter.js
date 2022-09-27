import { useRef, useContext } from "react";
import { Context } from "../context/ContextProvider";

const SearchAndFilter = () => {

  const selectInput = useRef()
  const {listLengthHandler, searchHandler} = useContext(Context)

  const selectChangeHandler = () => {
    listLengthHandler(+selectInput.current.value)
  }

  const searchInputHandler = (e) => {
    searchHandler(e.target.value.trim())
  }

  return (
    <div className="search-filter">
      <form>
        <div>
          <i className="bi bi-search"></i>
          <input
            type="text"
            id="search"
            placeholder="Search..."
            autoComplete="off"
            autoFocus
            onChange={searchInputHandler}
            onBlur={searchInputHandler}
            onFocus={searchInputHandler}
          />
        </div>

        <select ref={selectInput} onChange={selectChangeHandler}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </form>
    </div>
  );
};

export default SearchAndFilter;
