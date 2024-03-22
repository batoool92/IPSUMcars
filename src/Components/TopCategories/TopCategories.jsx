import './TopCategoriesStyle.css'
import Seator from '../../assets/Imgs/Seator.svg'
import Manual from '../../assets/Imgs/Manual.svg'
import CarCounter from '../../assets/Imgs/CarCounter.svg'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../../Components/Context/Context'


const TopCategories = () => {
   
    const navigate = useNavigate();
    const CartProducts = useContext(DataContext);
    // console.log(CartProducts);
    const dispatch = CartProducts.dispatch;

    const productsData = [
        {
            id: 1,
            title: 'AUDI',
            NumOfSeator: 4,
            DrivingType: 'Manual',
            CategoryCounter: "5KM/1-lt",
            CarCategoryImg: 'src/assets/Imgs/Audi-category.jpg',
            Quantity: 1,
            CarPrice: 500,
            Code: '#45655',
            EngineCapacity: '6000cc',
            Color: 'green',
         
        },
        {
            id: 2,
            title: 'Honda',
            NumOfSeator: 4,
            DrivingType: 'Manual',
            CategoryCounter: "5KM/1-lt",
            CarCategoryImg: 'src/assets/Imgs/Honda-Category.jpg',
            CarPrice: 500,
            Code: '#45655',
            EngineCapacity: '7000cc',
            Color: 'Black',  
            Quantity: 1 
        },
        {
            id: 3,
            title: 'VOLVO',
            NumOfSeator: 4,
            DrivingType: 'Manual',
            CategoryCounter: "5KM/1-lt",
            CarCategoryImg: 'src/assets/Imgs/VOLVO-Category.jpg',
            CarPrice: 500,
            Code: '#45655',
            EngineCapacity: '6000cc',
            Color: 'Black',  
            Quantity: 1 
        },
        {
            id: 4,
            title: 'BMW',
            NumOfSeator: 5,
            DrivingType: 'Manual',
            CategoryCounter: "5KM/1-lt",
            CarCategoryImg: 'src/assets/Imgs/BMW-Category.jpg',
            CarPrice: 1000,
            Code: '#45655',
            EngineCapacity: '6000cc',
            Color: 'red',
            Quantity: 1 
        },

    ]

    return (
        <div className='TopCategories-Container'>
            {productsData.map((element, index) => {
                element.q
                return (
                    <div key={index} className='CarCategoryContainer'>
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
                            <button onClick={() => navigate('/CarDetails')} className='DetailsBtn'>Details &gt;</button>
                            <button onClick={() => dispatch({ type: "ADD", payload: element})} className='BuyNowBtn'>Buy Now</button>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default TopCategories