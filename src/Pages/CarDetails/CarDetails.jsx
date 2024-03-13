import NavBar from '../../Components/NavBar/NavBar'
import './CarDetailsStyle.css'
import DetailsBackground from '../../assets/Imgs/DetailsBackground.png'
import HeroCar3 from '../../assets/Imgs/HeroCar3.png'
import DetailsSlider from '../../Components/DetailsSlider/DetailsSlider'
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import Plus from '../../assets/Imgs/plus.svg'
import min from '../../assets/Imgs/min.svg'
import { useState } from 'react'


const CarDetails = () => {
    const [Count, setCount] = useState(1)
    function incrementCount() {
        setCount(Count + 1)
    }
    function DecrementCount() {
        setCount(Count - 1)
    }

    return (
        <div className='CarDetails-Container'>
            <img className='Details-Background' src={DetailsBackground} alt="" />
            <NavBar />
            <p className='Cart-Details'>Type &gt; Car &gt; <span className='Details'>Details</span></p>
            <div className='Details-Info-Container'>
                <div className='Details-Type-Container-First'>
                    <h1 className='Details-Type-Info'>Honda - Civic Type R</h1>
                    <h1 className='Details-Car-Capacity'>6000 cc</h1>
                    <img className='DetailsCarImg' src={HeroCar3} alt="" />
                    <DetailsSlider />
                </div>
                <div className='Details-Type-Container-Second'>
                    <h1 className='Details-Second-Details'>Details</h1>
                    <h1 className='Rating'>Rating And Review</h1>
                    <div className='Rating-Stars'>
                        <FaStar className='Star-Color' />
                        <FaStar className='Star-Color' />
                        <FaStar className='Star-Color' />
                        <FaStar className='Star-Color' />
                        <FaRegStar className='Star-Color' />
                    </div>
                    <h1 className='Description'>Description</h1>
                    <p className='Description-Value'>The culmimination of comfort,luxury,and powerrul living is embodied in the First-Ever BMWX7 -the biggest BMW ever built.</p>
                    <h1 className='Colors'>Colors</h1>
                    <div className='Color-Container'>
                        <FaCircle className='White-Car-Color' />
                        <FaCircle className='Black-Car-Color' />
                        <FaCircle className='Blue-Car-Color' />
                    </div>
                    <div className='Price-Count-Container'>
                        <div className='Car-Count'>
                            <img onClick={() => DecrementCount()} className='Minus-Btn' src={min} alt="" />
                            <p>{Count}</p>
                            <img onClick={() => incrementCount()} className='Plus-Btn' src={Plus} alt="" />
                        </div>
                        <p className='Price'>Price: <span className='Price-Value'>250$</span></p>
                    </div>
                    <div className='BuyNow-AddToCart-Container'>
                    <button className='AddToCart'>Add to Cart</button>
                    <button className='BuyNow'>Buy Now</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CarDetails