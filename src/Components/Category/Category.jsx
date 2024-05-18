/* eslint-disable react/prop-types */
import Seator from '/assets/Imgs/Seator.svg'
import Manual from '/assets/Imgs/Manual.svg'
import CarCounter from '/assets/Imgs/CarCounter.svg'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../../Components/Context/Context'

const Category = ({ element }) => {
    const navigate = useNavigate();
    const CartProducts = useContext(DataContext);
    // console.log(CartProducts);
    const dispatch = CartProducts.dispatch;
    const GoToDetails = (element) => {
        navigate('/CarDetails', { state: element })
    }

    return (
        <>
            <img className='CarCategoryImg' src={element.CarCategoryImg} alt="" />
            <h3 className='CarCategory'>{element.title}</h3>
            <div className="CategoryInfo">
                <div className='CategorySeator'>
                    <img className='CategorySeatorIcon' src={Seator} alt="" />
                    <p>{element.NumOfSeator} Seator</p>
                </div>
                <div className='CategoryManual'>
                    <img className='CategoryManualIcon' src={Manual} alt="" />
                    <p>{element.DrivingType}</p>
                </div>
                <div className='CategoryCounter'>
                    <img className='CategoryCounterIcon' src={CarCounter} alt="" />
                    <p>{element.CategoryCounter}</p>
                </div>
            </div>
            <p className='CarCost'>Starting at {element.CarPrice}/Day</p>
            <div className='CarCategoryBtns'>
                <button onClick={() => GoToDetails(element)} className='DetailsBtn'>Details &gt;</button>
                <button onClick={() => dispatch({ type: "ADD", payload: element })} className='BuyNowBtn'>Buy Now</button>
            </div>
        </>
    )
}

export default Category