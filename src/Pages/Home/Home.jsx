import FilterSearch from '../../Components/FilterSearch/FilterSearch'
import Hero from '../../Components/Hero/Hero'
import NavBar from '../../Components/NavBar/NavBar'
import TopCategories from '../../Components/TopCategories/TopCategories'
import CarsSlider from '../../Components/CarsSlider/CarsSlider'
import './HomeStyle.css'
import Footer from '../../Components/Footer/Footer'
import { useEffect, useState } from 'react'

const Home = () => {

  const [Data, setData] = useState([]);
  const [AllData, setAllData] = useState([])

  useEffect(() => {
    fetch('https://freetestapi.com/api/v1/cars')
      .then(res => res.json())
      .then(res => setAllData(res))
  }, [])

  useEffect(() => {
    fetch('https://freetestapi.com/api/v1/cars?limit=4')
      .then(res => res.json())
      .then(res => setData(res))
  }, [])

  const Names = AllData.map((item) => { return item.make })
  const Prices = AllData.map((item) => { return item.price })
  const EngineCapacities = AllData.map((item) => { return item.mileage })
  const Brands = AllData.map((item) => { return item.model })

  // returns all non repeated values to put them in the select and be able to search for each value in data set
  function NonReapeatd(array) {
    let NonReapeatdVlaues = [];
    for (let i = 0; i < Names.length; i++) {
      if (NonReapeatdVlaues.includes(array[i]) == false) {
        NonReapeatdVlaues.push(array[i])
      }
    }
    return NonReapeatdVlaues
  }

  const productsDataUpdated = Data.map((item) => { return { ...item, Quantity: 1, Code: "#45655", Rating: 4, image: "https://i.postimg.cc/NfkfyFq2/Audi-category.jpg"} })

  const NonRepeatedNames = NonReapeatd(Names);
  const NonRepeatedPrices = NonReapeatd(Prices)
  const NonRepeatedCapacity = NonReapeatd(EngineCapacities)
  const NonRepeatedBrands = NonReapeatd(Brands)
   console.log(productsDataUpdated)
  // console.log(productsDataUpdated)

  // const productsData = [
  //   {
  //     id: 1,
  //     title: 'AUDI',
  //     NumOfSeator: 4,
  //     DrivingType: 'Manual',
  //     CategoryCounter: "5KM/1-lt",
  //     CarCategoryImg: '/IPSUMcars/assets/Imgs/Audi-category.jpg',
  //     Quantity: 1,
  //     CarPrice: 500,
  //     Code: '#45655',
  //     EngineCapacity: '6000cc',
  //     Color: 'Black',
  //     Rating: 3,
  //     CarImages: [
  //       { img: '/IPSUMcars/assets/Imgs/Audi-category.jpg' },
  //       { img: '/IPSUMcars/assets/Imgs/Honda-Category.jpg' },
  //       { img: '/IPSUMcars/assets/Imgs/VOLVO-Category.jpg' },
  //       { img: '/IPSUMcars/assets/Imgs/BMW-Category.jpg' }
  //     ],
  //     Description: "The culmimination of comfort,luxury,and powerrul living is embodied in the First-Ever BMWX7 -the biggest BMW ever built."
  //   },
  //   {
  //     id: 2,
  //     title: 'Honda',
  //     NumOfSeator: 5,
  //     DrivingType: 'Manual',
  //     CategoryCounter: "5KM/1-lt",
  //     CarCategoryImg: '/IPSUMcars/assets/Imgs/Honda-Category.jpg',
  //     CarPrice: 500,
  //     Code: '#45655',
  //     EngineCapacity: '7000cc',
  //     Color: 'Black',
  //     Quantity: 1,
  //     Rating: 5,
  //     CarImages: [
  //       { img: '/IPSUMcars/assets/Imgs/Audi-category.jpg' },
  //       { img: '/IPSUMcars/assets/Imgs/Honda-Category.jpg' },
  //       { img: '/IPSUMcars/assets/Imgs/VOLVO-Category.jpg' },
  //       { img: '/IPSUMcars/assets/Imgs/BMW-Category.jpg' }
  //     ],
  //     Description: "The culmimination of comfort,luxury,and powerrul living is embodied in the First-Ever BMWX7 -the biggest BMW ever built."
  //   },
  //   {
  //     id: 3,
  //     title: 'VOLVO',
  //     NumOfSeator: 4,
  //     DrivingType: 'Manual',
  //     CategoryCounter: "5KM/1-lt",
  //     CarCategoryImg: '/IPSUMcars/assets/Imgs/VOLVO-Category.jpg',
  //     CarPrice: 500,
  //     Code: '#45655',
  //     EngineCapacity: '6000cc',
  //     Color: 'Black',
  //     Quantity: 1,
  //     Rating: 4,
  //     CarImages: [
  //       { img: '/IPSUMcars/assets/Imgs/Audi-category.jpg' },
  //       { img: '/IPSUMcars/assets/Imgs/Honda-Category.jpg' },
  //       { img: '/IPSUMcars/assets/Imgs/VOLVO-Category.jpg' },
  //       { img: '/IPSUMcars/assets/Imgs/BMW-Category.jpg' }
  //     ],
  //     Description: "The culmimination of comfort,luxury,and powerrul living is embodied in the First-Ever BMWX7 -the biggest BMW ever built."
  //   },
  //   {
  //     id: 4,
  //     title: 'BMW',
  //     NumOfSeator: 5,
  //     DrivingType: 'Manual',
  //     CategoryCounter: "5KM/1-lt",
  //     CarCategoryImg: '/IPSUMcars/assets/Imgs/BMW-Category.jpg',
  //     CarPrice: 750,
  //     Code: '#45655',
  //     EngineCapacity: '6000cc',
  //     Color: 'Black',
  //     Quantity: 1,
  //     Rating: 5,
  //     CarImages: [
  //       { img: '/IPSUMcars/assets/Imgs/Audi-category.jpg' },
  //       { img: '/IPSUMcars/assets/Imgs/Honda-Category.jpg' },
  //       { img: '/IPSUMcars/assets/Imgs/VOLVO-Category.jpg' },
  //       { img: '/IPSUMcars/assets/Imgs/BMW-Category.jpg' }
  //     ],
  //     Description: "The culmimination of comfort,luxury,and powerrul living is embodied in the First-Ever BMWX7 -the biggest BMW ever built."
  //   },
  // ]
  const FilterOptions = [
    {
      'Name': 'Name',
      FilterIcon: '/IPSUMcars/assets/Imgs/iconNameFilter.svg',
      Options: NonRepeatedNames,
    },
    {
      'Name': 'Price',
      'FilterIcon': '/IPSUMcars/assets/Imgs/iconPriceFilter.svg',
      Options: NonRepeatedPrices,
    },
    {
      'Name': 'Engine Capicity',
      'FilterIcon': '/IPSUMcars/assets/Imgs/iconEngineCapacityFilter.svg',
      Options: NonRepeatedCapacity,
    },
    {
      'Name': 'Brand',
      'FilterIcon': '/IPSUMcars/assets/Imgs/iconBrandFilter.svg',
      Options: NonRepeatedBrands,
    }
  ]
  return (
    <div className='Home'>
      <NavBar />
      <Hero />
      <FilterSearch FilterOptions={FilterOptions} />

      <h3 className='FindByCar'>Find By Car Type</h3>
      <CarsSlider />
      <h3 className='TopCategories'>Top Categories</h3>
      <TopCategories productsData={productsDataUpdated} />
      <Footer />
    </div>
  )
}

export default Home