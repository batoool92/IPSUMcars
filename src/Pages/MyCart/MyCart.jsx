import './MyCartStyle.css'
import NavBar from '../../Components/NavBar/NavBar'
import MyCartBackground from '../../assets/Imgs/MyCartBackground.png'
import DeleteIcon from "../../assets/Imgs/Delete-Icon.svg"
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { useContext } from 'react'
import { DataContext } from '../../Components/Context/Context'
const MyCart = () => {

    const MyCartProducts = useContext(DataContext);
    const state = MyCartProducts.state;
    const dispatch = MyCartProducts.dispatch;
   
    const TotalPrice = state.reduce((TotalPrice, item) => {
        return TotalPrice + item.CarPrice * item.Quantity;
    },0)

    const Message = state.length === 0 ? "there are no items to show..." : ""
    
    return (
        <div className='MyCart'>
            <img src={MyCartBackground} className='MyCart-Background'></img>
            <NavBar />
            <div className='Title-Cost-Container'>
            <h1 className='MyCart-Title'>My Cart</h1>

            <h2 className='MyCart-Cost'>Total Cost: $ {TotalPrice}</h2>   
            </div>
            <div className={state.length === 0 ? "Hide-MyCart-Container" : "MyCart-Container"}>
                <div className='Empty'> </div>
                <div className='MyCartProduct'>Product</div>
                <div className='MyCartProduct-Price'>Price</div>
                <div className='MyCartProduct-Color'>Color</div>
                <div className='MyCartProduct-Count'>Count</div>
                <div className='MyCartProduct-Del'>Delete</div>
            </div>
            <div className={state.length === 0 ? "ShowMessage" : "HideMessage"}>
               {Message}
            </div>
           
            {state.map((element, index) => {
                return (
                    <div key={index} className="MyCart-Info">
                        <div className='MyCart-Car-Img-Container'><img className='MyCart-Car-Img' src={element.CarCategoryImg} alt="" /> </div>
                        <div className='MyCart-ProductInfo'>
                            <p className='MyCartProduct-Type'>{element.title}</p>
                            <p className='MyCartProduct-Code'>Code:{element.Code}</p>
                            <p className='MyCartProduct-Engine-Capacity'>Engine Capacity: {element.EngineCapacity}</p>
                        </div>
                        <div className='MyCartProduct-Price-Value'>$ {element.CarPrice * element.Quantity}</div>
                        <div className='MyCartProduct-Color-Value'>{element.Color}</div>
                        <div className="MyCartProduct-Count-Value"><FaCirclePlus onClick={()=> dispatch({type: 'INCREASE', payload: element})} className='FaCirclePlus' />{element.Quantity}<FaCircleMinus onClick={()=> dispatch({type: 'DECREASE', payload: element})} className='FaCircleMinus'/></div>
                        <div className='Delete-Icon-Container'><img onClick={()=> dispatch({type: 'REMOVE', payload: element })} className='Delete-Icon' src={DeleteIcon} alt="" /></div>
                    </div>
                )
            })}
     </div>
    )
}
export default MyCart