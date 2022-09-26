import React, {useEffect, useReducer} from "react";
import {similarity} from '../lib/helper.js'

export const Context = React.createContext({
  users: [],
  filteredUsers: [],
});

const initialState = {
  users: [],
  filteredUsers: [],
  rowNumber: 10
}

const reducer = (state, action) => {
  if(action.type === 'ADD'){
    return {...state,filteredUsers: action.payload.slice(0, state.rowNumber) , users: action.payload}
  }
  if(action.type === 'UPDATE-LENGTH'){
    return {...state, filteredUsers: state.users.slice(0, action.payload), rowNumber: action.payload}
  }
  if(action.type === 'SEARCH'){

   const searchUsers = state.users.filter(user => similarity(user.name.first.toLowerCase(),action.payload.toLowerCase()) > 0.5 || similarity(user.name.last.toLowerCase(),action.payload.toLowerCase()) > 0.5)
    return {...state, filteredUsers: searchUsers}
  }
  return initialState
}

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://randomuser.me/api/?results=100')
      const data = await response.json()
      dispatch({type: 'ADD', payload: data.results})
    }
    getData()
  }, [])

  const listLengthHadler = (number) => {
    dispatch({type: 'UPDATE-LENGTH', payload: number})
  }

  const searchHandler = (input) => {
    if(input !== ''){
      dispatch({type: 'SEARCH', payload: input})
    } else {
      dispatch({type: 'UPDATE-LENGTH', payload: state.rowNumber})
    }
    
  }

  return <Context.Provider value={{ state, listLengthHadler, searchHandler }}>{props.children}</Context.Provider>;
};

export default ContextProvider;
