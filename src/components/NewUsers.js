import { useContext, useState } from "react"
import { Context } from '../context/ContextProvider'

const NewUsers = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {getData} = useContext(Context)


  const getDataHandler = async() => {
    setIsLoading(true)
    await getData()
    setIsLoading(false)
  }

  return (
      <button onClick={getDataHandler}>{isLoading ? 'Loading...' : 'Get New Users'}</button>
  )
}

export default NewUsers