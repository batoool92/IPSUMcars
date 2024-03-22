/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";


export const DataContext = createContext();

export const Context = (props) => {

    const reducer = (state, action) => {
        switch (action.type) {
            // add item to cart 
            case "ADD":
                const tempstate = state.filter((item) => action.payload.id === item.id)
                if (tempstate.length > 0) {

                    return state
                }
                else {
                    return [...state, action.payload];
                }

            case "REMOVE":
                const tempRemove = state.filter((item) => item.id !== action.payload.id)
                return tempRemove

            case "INCREASE":
                const tempIncrease = state.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, Quantity: item.Quantity + 1 }
                    }
                    else
                        return item
                })
                return tempIncrease

            case "DECREASE":
                const tempDecrease = state.map((item) => {
                    if (item.id === action.payload.id)
                        if (item.Quantity === 0) {

                            return { ...item, Quantity: 0 }
                        }
                        else
                            return { ...item, Quantity: item.Quantity - 1 }
                    else
                        return item
                })
                return tempDecrease
          case "TOTAL":
            let x=0;
            const TotalCost = state.map((item)=>{
                console.log(x)
                return x+= item.CarPrice;
            })
            return TotalCost

            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, [])
    const info = { state, dispatch }
    return (
        <DataContext.Provider value={info}>
            {props.children}
        </DataContext.Provider>
    )
}



