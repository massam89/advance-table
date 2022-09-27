import { useContext, useState } from "react"
import { Context } from "../context/ContextProvider"

const useSort = () => {
  const [isUp, setIsUp] = useState(false)
  const {sortHandler} = useContext(Context)

  const upHandler = (e) => {
    setIsUp(false)
    sortHandler({column: e.target.parentElement.dataset.column, sort: 'ASC'})
  }

  const downHandler = (e) => {
    setIsUp(true)
    sortHandler({column: e.target.parentElement.dataset.column, sort: 'DESC'})
  }

  return {isUp, upHandler, downHandler}
}

export default useSort