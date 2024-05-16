/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DataContext = createContext();

export const Context = (props) => {

   const notify = () => {
    toast.success('item added succesfully', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
   }
    
    const reducer = (state, action) => {
        switch (action.type) {
            // add item to cart 
            case "ADD":
                const tempstate = state.filter((item) => action.payload.id === item.id)
                let newProduct = false
                if (tempstate.length >= 1) {
                    state = state.map((item) => {
                        if (item.id === action.payload.id && item.Color === action.payload.Color) {                  
                            notify()
                            return { ...item, Quantity: item.Quantity + action.payload.Quantity }
                        }
                        else if (item.id === action.payload.id && item.color !== action.payload.color) {
                            newProduct = true;
                            return item
                        }
                    }
                    )
                    if (newProduct === false) {
                        return state
                    }
                    else {
                        notify()
                        return [...state, action.payload];
                    }
                }
                else {
                    notify()
                    return [...state, action.payload];
                }
                
               

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
        return localData ? JSON.parse(localData) : [] //the default value of state
    });

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    }, [state])

    const info = { state, dispatch }
    return (
        <>
            <DataContext.Provider value={info}>
                {props.children}
            </DataContext.Provider>
            <ToastContainer />
        </>
    )
}



