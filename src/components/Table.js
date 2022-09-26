import { useContext } from "react";
import { Context } from "../context/ContextProvider";

const Table = () => {

  const {state} = useContext(Context)

  return (
    <table>
      <thead>
        <tr>
          <th>Name <i className="bi bi-caret-down-fill"></i><i className="bi bi-caret-up-fill"></i></th>
          <th>Age<i className="bi bi-caret-down-fill"></i><i className="bi bi-caret-up-fill"></i></th>
          <th>Gender<i className="bi bi-caret-down-fill"></i><i className="bi bi-caret-up-fill"></i></th>
          <th>City<i className="bi bi-caret-down-fill"></i><i className="bi bi-caret-up-fill"></i></th>
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
            <td><img src={user.picture.thumbnail} width= '32' alt={`${user.name.first} ${user.name.last}`} /></td>
            <td><i className="bi bi-pen-fill"></i></td>
          </tr>
        )}       
      </tbody>
    </table>
  );
};

export default Table;
