/* eslint-disable react/prop-types */
import Category from '../Category/Category'
import './TopCategoriesStyle.css'
// import Seator from '/assets/Imgs/Seator.svg'
// import Manual from '/assets/Imgs/Manual.svg'
// import CarCounter from '/assets/Imgs/CarCounter.svg'
// import { useNavigate } from 'react-router-dom'
// import { useContext } from 'react'
// import { DataContext } from '../../Components/Context/Context'



const TopCategories = ({productsData}) => {
   
   

    return (
        <div className='TopCategories-Container'>
            {productsData.map((element, index) => {
            
                return (
                    <div key={index} className='CarCategoryContainer'>
                        <Category element={element} />
                    </div>
                )
            })}


        </div>
    )
}

export default TopCategories