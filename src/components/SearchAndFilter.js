import { useRef, useContext } from "react";
import { Context } from "../context/ContextProvider";

const SearchAndFilter = () => {

  const selectInput = useRef()
  const {listLengthHadler, searchHandler} = useContext(Context)

  const selectChangeHandler = () => {
    listLengthHadler(+selectInput.current.value)
  }

  const searchInputHandler = (e) => {
    searchHandler(e.target.value)
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
