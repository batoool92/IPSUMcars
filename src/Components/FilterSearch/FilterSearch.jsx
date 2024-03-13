/* eslint-disable react/prop-types */
import './FilterSearchStyle.css'
import Select from 'react-select'

const FilterSearch = ({FilterOptions}) => {
    console.log(FilterOptions)
    return (
        <div className='FilterSearchContainer'>
            <div className='FilterSearch'>
                {FilterOptions?.map((element, index) => {
                    return (
                        <div key={index} className='FilterElement'>
                            <p className='FilterTilte'>{element.Name}</p>
                            <div className='SelectIcon'>
                                <img className='FilterIcon' src={element.FilterIcon} alt="" />
                                <Select options={FilterOptions.Options} />
                            </div>
                        </div>
                    )
                })}
                <button className='SearchButton'>Search</button>
            </div>
        </div>
    )
}

export default FilterSearch