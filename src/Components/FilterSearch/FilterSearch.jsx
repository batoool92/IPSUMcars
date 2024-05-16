/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './FilterSearchStyle.css'
import Category from '../Category/Category'
const FilterSearch = ({ FilterOptions }) => {

    // const FilterOptions = [
    //     {
    //         Name: 'make',
    //         Vlaue: ''
    //     },
    //     {
    //         Name: 'model',
    //         Vlaue: ''
    //     },
    //     {
    //         Name: 'price',
    //         Vlaue: 0
    //     },
    //     {
    //         Name: 'mileage',
    //         Vlaue: ''
    //     },
    // ]

    const [FilterOption, setFilterOption] = useState(FilterOptions)
    const [Data, setData] = useState([])
    const [selectedData, setSelectedData] = useState([])
    const [selectedOption, setSelectedOption] = useState('')

    useEffect(() => {
        fetch('https://freetestapi.com/api/v1/cars')
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    const productsData = Data.map((item) => { return { ...item, Quantity: 1, Code: "#45655", Rating: 4, image: "https://i.postimg.cc/NfkfyFq2/Audi-category.jpg"} })
    
    const filter = () => {
        let FilteredData;

        if (FilterOption == 'Name') {
            FilteredData = productsData.filter((item) => item.make == selectedOption)
            setSelectedData([...selectedData, ...FilteredData])
            console.log(selectedData)
        }
        if (FilterOption == 'Price') {
            FilteredData = productsData.filter((item) => item.price == selectedOption)
            console.log(selectedOption)
            console.log(FilterOption)
            setSelectedData([...selectedData, ...FilteredData])
            console.log(selectedData)
        }
        if (FilterOption == 'Engine Capicity') {
            FilteredData = productsData.filter((item) => item.mileage == selectedOption)
            setSelectedData([...selectedData, ...FilteredData])
            console.log(selectedData)
        }
        if (FilterOption == 'Brand')
        fetch(`https://freetestapi.com/api/v1/cars?search=${selectedOption}`)
            .then(res => res.json())
            .then(res => setSelectedData(res))
            // FilteredData = productsData.filter((item) => item.model == selectedOption)
            // setSelectedData([...selectedData, ...FilteredData])
            // console.log(selectedData)
    }
    return (
        <div className='FilterSearchContainer'>
            <div className='FilterSearch'>
                {FilterOptions?.map((element, index) => {
                    return (
                        <div key={index} className='FilterElement'>
                            <p className='FilterTilte'>{element.Name}</p>
                            <div className='SelectIcon'>
                                <img className='FilterIcon' src={element.FilterIcon} alt="" />
                                <div className='custom-select'>
                                    <select onClick={() => setFilterOption(element.Name)} onChange={(event) => setSelectedOption(event.target.value)}>
                                        <option>choose {element.Name}</option>
                                        {element.Options.map((option, index) => {
                                            return (
                                                <option key={index}>
                                                    {option}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <button onClick={filter} className='SearchButton'>Search</button>
            </div>
            <div className='Filtered-Cars-Container'>
                {selectedData?.map((item, index) => {
                    return (
                        <div key={index} className='CarCategoryContainer'>
                            <Category element={item} />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default FilterSearch