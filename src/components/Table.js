import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import useSort from "../hooks/useSort";

const Table = () => {

  const {state} = useContext(Context)

  const {isUp:nameIsUp, upHandler: nameUpHandler, downHandler: nameDownHandler} = useSort()
  const {isUp:ageIsUp, upHandler: ageUpHandler, downHandler: ageDownHandler} = useSort()
  const {isUp:genderIsUp, upHandler: genderUpHandler, downHandler: genderDownHandler} = useSort()
  const {isUp:cityIsUp, upHandler: cityUpHandler, downHandler: cityDownHandler} = useSort()

  return (
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
            <td>{user.name.first} {user.name.last}</td>
            <td>{user.dob.age}</td>
            <td>{user.gender}</td>
            <td>{user.location.city}</td>
            <td><img src={user.picture.thumbnail} width='32' alt={`${user.name.first} ${user.name.last}`} /></td>
            <td><i className="bi bi-pen-fill"></i></td>
          </tr>
        )}       
      </tbody>
    </table>
  );
};

export default Table;
