import { useContext, useEffect, useState } from "react";
import { Context } from "../context/ContextProvider";
import useSort from "../hooks/useSort";

const Table = () => {
  const [disableArray, setDisableArray] = useState([])
  const {state, changeInputHandler} = useContext(Context)

  const {isUp:nameIsUp, upHandler: nameUpHandler, downHandler: nameDownHandler} = useSort()
  const {isUp:ageIsUp, upHandler: ageUpHandler, downHandler: ageDownHandler} = useSort()
  const {isUp:genderIsUp, upHandler: genderUpHandler, downHandler: genderDownHandler} = useSort()
  const {isUp:cityIsUp, upHandler: cityUpHandler, downHandler: cityDownHandler} = useSort()

 useEffect(() => {
  const length = state.filteredUsers.length
  const test = []
  for(let i=0; i < length ; i++){
    test.push(true)
  }
  setDisableArray(test)
 },[state.filteredUsers])

  const editHandler = (e) => {
   const test = [...disableArray]
   test[+e.target.id] = !test[+e.target.id]
   setDisableArray(test)
  }

  const inputChangeHandler = (e) => {
    const value = e.target.value
    const idAndColumn = e.target.id.split('-')
    const id = +idAndColumn[0]
    const column = idAndColumn[1]
    
    changeInputHandler({value, id, column})
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th data-column="name">
              Name
              {nameIsUp ?
              <i onClick={nameUpHandler} className="bi bi-caret-up-fill"></i>
              :
              <i onClick={nameDownHandler} className="bi bi-caret-down-fill"></i>
              }           
            </th>
            <th data-column="age">
              Age
              {ageIsUp ?
              <i onClick={ageUpHandler} className="bi bi-caret-up-fill"></i>
              :
              <i onClick={ageDownHandler} className="bi bi-caret-down-fill"></i>
              }           
            </th>
            <th data-column="gender">
              Gender
              {genderIsUp ?
              <i onClick={genderUpHandler} className="bi bi-caret-up-fill"></i>
              :
              <i onClick={genderDownHandler} className="bi bi-caret-down-fill"></i>
              }           
            </th>
            <th data-column="city">
              City
              {cityIsUp ?
              <i onClick={cityUpHandler} className="bi bi-caret-up-fill"></i>
              :
              <i onClick={cityDownHandler} className="bi bi-caret-down-fill"></i>
              }           
            </th>   
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {state.filteredUsers && state.filteredUsers.map((user, index) => 
            <tr key={index}>
              <td><input type='text' value={`${user.name.first} ${user.name.last}`} disabled /></td>
              <td><input id={`${index}-age`} type='text' onChange={inputChangeHandler} value={`${user.dob.age}`} disabled={disableArray[index]} /></td>
              <td><input id={`${index}-gender`} type='text' onChange={inputChangeHandler} value={`${user.gender}`} disabled={disableArray[index]} /></td>
              <td><input id={`${index}-city`} type='text' onChange={inputChangeHandler} value={`${user.location.city}`} disabled={disableArray[index]} /></td>
              <td><img src={user.picture.thumbnail} width='32' alt={`${user.name.first} ${user.name.last}`} /></td>
              <td><i id={index} onClick={editHandler} className="bi bi-pen-fill"></i></td>
            </tr>
          )}       
        </tbody>
      </table>
    </div> 
  );
};

export default Table;