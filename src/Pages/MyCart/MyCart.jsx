import './MyCartStyle.css'
import NavBar from '../../Components/NavBar/NavBar'
import MyCartBackground from '../../assets/Imgs/MyCartBackground.png'
import DeleteIcon from "../../assets/Imgs/Delete-Icon.svg"
const MyCart = () => {

    const MyCartProducts = [
        {
            type: 'Audi',
            Code: '#45655',
            EngineCapacity: '6000cc',
            price: '$240.55',
            Color: 'Black',
            img: "src/assets/Imgs/Audi-category.jpg"
        },
        {
            type: 'Honda',
            Code: '#45655',
            EngineCapacity: '6000cc',
            price: '$240.55',
            Color: 'Black',
            img: "src/assets/Imgs/Honda-Category.jpg"
        },
        {
            type: 'BMW',
            Code: '#45655',
            EngineCapacity: '6000cc',
            price: '$240.55',
            Color: 'Black',
            img: "src/assets/Imgs/BMW-Category.jpg"
        },
        {
            type: 'Volvo',
            Code: '#45655',
            EngineCapacity: '6000cc',
            price: '$240.55',
            Color: 'Black',
            img: "src/assets/Imgs/VOLVO-Category.jpg"
        },
    ]

    return (
        <div className='MyCart'>
            <img src={MyCartBackground} className='MyCart-Background'></img>
            <NavBar />
            <h1 className='MyCart-Title'>My Cart</h1>
            <div className="MyCart-Container">
                <div className='Empty'> </div>
                <div className='MyCartProduct'>Product</div>
                <div className='MyCartProduct-Price'>Price</div>
                <div className='MyCartProduct-Color'>Color</div>
                <div>Delete</div>
            </div>
            {MyCartProducts.map((element, index) => {

                return (
                    <div key={index} className="MyCart-Info">
                        <div className='MyCart-Car-Img-Container'><img className='MyCart-Car-Img' src={element.img} alt="" /> </div>
                        <div className='MyCart-ProductInfo'>
                            <p className='MyCartProduct-Type'>{element.type}</p>
                            <p className='MyCartProduct-Code'>Code:{element.Code}</p>
                            <p className='MyCartProduct-Engine-Capacity'>Engine Capacity: {element.EngineCapacity}</p>
                        </div>
                        <div className='MyCartProduct-Price-Value'>{element.price}</div>
                        <div className='MyCartProduct-Color-Value'>{element.Color}</div>
                        <div><img className='Delete-Icon' src={DeleteIcon} alt="" /></div>
                    </div>
                )
            })}























            {/* <div>
                <div className="MyCartTitles">
                    <p className='ProductMyCart'>Product</p>
                    <p className='PriceMyCart'>Price</p>
                    <p className='ColorMyCart'>Color</p>
                    <p className='DeleteMyCart'>Delete</p>
                </div>

                <div className='MyCartShoppingLine'>
                    <img className='CarMyCartShopingLine' src={Audicategory} alt="" />
                    <div className='CarShopingLineContainer'>
                            <div className="Product-Info">
                                <p className='ProductInfo-CarType'>Audi</p>
                                <p className='ProductInfo-CarCode'>Code: #752153</p>
                                <p className='ProductInfo-CarEngine'>Engine Capacity: 6000cc</p>
                            </div>
                            <div className="Price-Info">
                                <p>$250</p>
                            </div>
                            <div className="Color-Info">
                               <p>black</p>
                            </div>
                            <div className="DeleteFromMy-Cart">
                                <p>X</p>
                            </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default MyCart