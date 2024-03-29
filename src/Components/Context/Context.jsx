/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";


export const DataContext = createContext();

export const Context = (props) => {

    const reducer = (state, action) => {
        switch (action.type) {
            // add item to cart 
            case "ADD":
                console.log("state" + typeof (state))
                const tempstate = state.filter((item) => action.payload.id === item.id)
                console.log("tempstate" + tempstate)
                let newProduct = false
                if (tempstate.length >= 1) {
                    console.log(state.length)
                    state = state.map((item) => {
                        if (item.id === action.payload.id && item.Color === action.payload.Color) {
                            return { ...item, Quantity: item.Quantity + action.payload.Quantity }
                        }
                        else if (item.id === action.payload.id && item.Color !== action.payload.Color) {
                            newProduct = true;
                            return item
                        }
                    }
                    )
                    if (newProduct === false) {
                        console.log("false new product")
                        return state
                    }
                    else {
                        console.log("true new product")
                        return [...state, action.payload];
                    }
                }
                else if (tempstate.length == 0) {
                    return [...state, action.payload];
                }

                return state;

            case "REMOVE":
                {
                    state = state.filter((item) => 
                         (item.id !== action.payload.id) || (item.Color !== action.payload.Color)
                    )
                    return state
                }

           

            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, [], () => {
        const localData = localStorage.getItem('state');
        return localData ? JSON.parse(localData) : []
    });

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    }, [state])

    const info = { state, dispatch }
    return (
        <DataContext.Provider value={info}>
            {props.children}
        </DataContext.Provider>
    )
}



