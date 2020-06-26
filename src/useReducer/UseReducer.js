import React, {useState, useEffect, useReducer} from 'react';

function UseReducer(props) {

    const initialState = {
        isLoading:false,
        iserror:false,
        data:[]
    }

    const reducer = (state = initialState, action) => {

        switch (action.type) {
            case "loading":
                return {...state, isLoading:true}
                break;
            case "success":
                return {...state, isLoading:false,data:action.payload}
                break
            default:
                return state;
                break;
        }

    }

    const [todos, dispatch] = useReducer(reducer,initialState);

    useEffect(()=>{

        dispatch({
            type:'loading'
        })

        
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => 
            setTimeout(()=>{
                dispatch({
                    type:'success',
                    payload:json
                })
            },3000)
        )
        .catch((error)=>{

        })
      
    },[])
    return (
        <div>
            <h1>UseReducer Demo</h1>
            {todos.isLoading && <div>Loading please wait...</div>}
            {todos.data && 
            <ul>
            {todos.data.map((todo, index) => (
        <p key={todo.id}>{todo.title} </p>
    ))}
            </ul>
}
        </div>
    );
}

export default UseReducer;