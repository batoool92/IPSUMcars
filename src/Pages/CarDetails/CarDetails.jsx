/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import NavBar from '../../Components/NavBar/NavBar'
import './CarDetailsStyle.css'
import DetailsBackground from '/IPSUMcars/assets/Imgs/DetailsBackground.png'
import DetailsSlider from '../../Components/DetailsSlider/DetailsSlider'
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import Plus from '/assets/Imgs/plus.svg'
import min from '/assets/Imgs/min.svg'
import { useLocation } from 'react-router-dom'
import { useState } from 'react';
import { DataContext } from '../../Components/Context/Context';
import { useContext } from 'react';


const CarDetails = () => {
    const Location = useLocation()
    let data = Location.state;

    const OrderData = useContext(DataContext)
    const dispatch = OrderData.dispatch

    const [CarData, setCarData] = useState(data)

    const IncrementCount = () => {
        setCarData(Prev => ({ ...Prev, Quantity: Prev.Quantity + 1 }))
        console.log(CarData)

    }

    const DecrementCount = () => {
        setCarData(Prev => ({ ...Prev, Quantity: Prev.Quantity - 1 }))
        console.log(CarData)
    }

    const ChangeColor = (carColor) => {
        setCarData(Prev => ({ ...Prev, Color: carColor }))
        console.log(CarData)

    }




    //const OrderData = useContext(DataContext);
    // const state = OrderData.state;
    // const dispatch = OrderData.dispatch;

    // console.log("state "+state)
    // id: 4,
    // title: 'BMW',
    // NumOfSeator: 5,
    // DrivingType: 'Manual',
    // CategoryCounter: "5KM/1-lt",
    // CarCategoryImg: 'src/assets/Imgs/BMW-Category.jpg',
    // CarPrice: 1000,
    // Code: '#45655',
    // EngineCapacity: '6000cc',
    // Color: 'red',
    // Quantity: 1,
    //Civic Type 
    return (
        <div className='CarDetails-Container'>
            <img className='Details-Background' src={DetailsBackground} alt="" />
            <NavBar />
            <p className='Cart-Details'>Type &gt; Car &gt; <span className='Details'>Details</span></p>
            <div className='Details-Info-Container'>
                <div className='Details-Type-Container-First'>
                    <h1 className='Details-Type-Info'>{CarData.title} - Civic Type R</h1>
                    <h1 className='Details-Car-Capacity'>{CarData.EngineCapacity}</h1>
                    <div className='DetailsCarImg-Container'>
                        <img className='DetailsCarImg' src={CarData.CarCategoryImg} alt="" />
                    </div>
                    <DetailsSlider CarImages={CarData.CarImages} />
                </div>
                <div className='Details-Type-Container-Second'>
                    <h1 className='Details-Second-Details'>Details</h1>
                    <h1 className='Rating'>Rating And Review</h1>
                    <div className='Rating-Stars'>
                        {[...Array(5)].map((item, index) => {
                            if (index < CarData.Rating) {
                                return <FaStar key={index} className='Star-Color' />
                            }
                            else {
                                return <FaRegStar key={index} className='Star-Color' />
                            }
                        })}
                    </div>
                    <h1 className='Description'>Description</h1>
                    <p className='Description-Value'>{CarData.Description}</p>
                    <h1 className='Colors'>Colors</h1>
                    <div className='Color-Container'>
                        <FaCircle onClick={() => ChangeColor('white')} className='White-Car-Color' />
                        <FaCircle onClick={() => ChangeColor('Black')} className='Black-Car-Color' />
                        <FaCircle onClick={() => ChangeColor('Blue')} className='Blue-Car-Color' />
                    </div>
                    <div className='Price-Count-Container'>
                        <div className='Car-Count'>
                            <img onClick={() => DecrementCount()} className='Minus-Btn' src={min} alt="" />
                            <p>{CarData.Quantity}</p>
                            <img onClick={() => IncrementCount()} className='Plus-Btn' src={Plus} alt="" />
                        </div>
                        <p className='Price'>Price: <span className='Price-Value'>$ {CarData.CarPrice}</span></p>
                    </div>
                    <div className='BuyNow-AddToCart-Container'>
                        <button onClick={() => dispatch({ type: "ADD", payload: CarData})} className='AddToCart'>Add to Cart</button>
                        <button className='BuyNow'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarDetails