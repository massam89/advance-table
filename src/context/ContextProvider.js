import React, {useEffect, useReducer, useCallback} from "react";
import {similarity} from '../lib/helper.js'
import {sortArray} from '../lib/helper.js'

export const Context = React.createContext();

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
    const userByFilter = state.users.slice(0, state.rowNumber);
    const searchUsers = userByFilter.filter(user => similarity(user.name.first.toLowerCase(),action.payload.toLowerCase()) > 0.5 || similarity(user.name.last.toLowerCase(),action.payload.toLowerCase()) > 0.5)
    return {...state, filteredUsers: searchUsers}
  }
  if(action.type === 'SORT'){
    let sortUsers = state.users.slice(0, state.rowNumber)
    sortUsers = sortArray(sortUsers, action.payload.column, action.payload.sort)
    return {...state, filteredUsers: sortUsers}
  }
  if(action.type === 'CHANGE-VALUE'){
    const {value, id, column} = action.payload
    let array = [...state.users]
    if(column === 'age'){
      array[id].dob.age = value
    }
    if(column === 'gender'){
      array[id].gender = value
    }
    if(column === 'city'){
      array[id].location.city = value
    }
    return {...state, users: array}
  }
  return initialState
}

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getData = useCallback(async () => {
    const response = await fetch('https://randomuser.me/api/?results=100')
    const data = await response.json()
    dispatch({type: 'ADD', payload: data.results})
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  const listLengthHandler = (number) => {
    dispatch({type: 'UPDATE-LENGTH', payload: number})
  }

  const searchHandler = (input) => {
    if(input !== ''){
      dispatch({type: 'SEARCH', payload: input})
    } else {
      dispatch({type: 'UPDATE-LENGTH', payload: state.rowNumber})
    } 
  }

  const sortHandler = (data) => {
    dispatch({type: 'SORT', payload: data})
  }

  const changeInputHandler = (data) => {
    dispatch({type: 'CHANGE-VALUE', payload: data})
  }

  const contextItem = {
    state,
    listLengthHandler,
    searchHandler,
    getData,
    sortHandler,
    changeInputHandler
  }

  return <Context.Provider value={contextItem}>{props.children}</Context.Provider>;
};

export default ContextProvider;
