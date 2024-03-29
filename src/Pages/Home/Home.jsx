import FilterSearch from '../../Components/FilterSearch/FilterSearch'
import Hero from '../../Components/Hero/Hero'
import NavBar from '../../Components/NavBar/NavBar'
import TopCategories from '../../Components/TopCategories/TopCategories'
import CarsSlider from '../../Components/CarsSlider/CarsSlider'
import './HomeStyle.css'
import Footer from '../../Components/Footer/Footer'

const Home = () => {


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
      Color: 'Black',
      Rating: 3,
      CarImages: [
        { img1: 'src/assets/Imgs/Audi-category.jpg' },
        { img2: 'src/assets/Imgs/Honda-Category.jpg' },
        { img3: 'src/assets/Imgs/VOLVO-Category.jpg' },
        { img4: 'src/assets/Imgs/BMW-Category.jpg' }
      ],
      Description: "The culmimination of comfort,luxury,and powerrul living is embodied in the First-Ever BMWX7 -the biggest BMW ever built."
    },
    {
      id: 2,
      title: 'Honda',
      NumOfSeator: 5,
      DrivingType: 'Manual',
      CategoryCounter: "5KM/1-lt",
      CarCategoryImg: 'src/assets/Imgs/Honda-Category.jpg',
      CarPrice: 500,
      Code: '#45655',
      EngineCapacity: '7000cc',
      Color: 'Black',
      Quantity: 1,
      Rating: 5,
      CarImages: [
        { img1: 'src/assets/Imgs/Audi-category.jpg' },
        { img2: 'src/assets/Imgs/Honda-Category.jpg' },
        { img3: 'src/assets/Imgs/VOLVO-Category.jpg' },
        { img4: 'src/assets/Imgs/BMW-Category.jpg' }
      ],
      Description: "The culmimination of comfort,luxury,and powerrul living is embodied in the First-Ever BMWX7 -the biggest BMW ever built."
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
      Quantity: 1,
      Rating: 4,
      CarImages: [
        { img1: 'src/assets/Imgs/Audi-category.jpg' },
        { img2: 'src/assets/Imgs/Honda-Category.jpg' },
        { img3: 'src/assets/Imgs/VOLVO-Category.jpg' },
        { img4: 'src/assets/Imgs/BMW-Category.jpg' }
      ],
      Description: "The culmimination of comfort,luxury,and powerrul living is embodied in the First-Ever BMWX7 -the biggest BMW ever built."
    },
    {
      id: 4,
      title: 'BMW',
      NumOfSeator: 5,
      DrivingType: 'Manual',
      CategoryCounter: "5KM/1-lt",
      CarCategoryImg: 'src/assets/Imgs/BMW-Category.jpg',
      CarPrice: 750,
      Code: '#45655',
      EngineCapacity: '6000cc',
      Color: 'Black',
      Quantity: 1,
      Rating: 5,
      CarImages: [
        { img1: 'src/assets/Imgs/Audi-category.jpg' },
        { img2: 'src/assets/Imgs/Honda-Category.jpg' },
        { img3: 'src/assets/Imgs/VOLVO-Category.jpg' },
        { img4: 'src/assets/Imgs/BMW-Category.jpg' }
      ],
      Description: "The culmimination of comfort,luxury,and powerrul living is embodied in the First-Ever BMWX7 -the biggest BMW ever built."
    },
  ]
  const FilterOptions = [
    {
      Name: 'Name',
      FilterIcon: 'src/assets/Imgs/iconNameFilter.svg',
      Options: [
        { value: 'a', label: 'a' },
        { value: 'a', label: 'a' },
        { value: 'a', label: 'a' },
      ],
    },
    {
      'Name': 'Price',
      'FilterIcon': 'src/assets/Imgs/iconPriceFilter.svg',
      Options: [
        { value: 'a', label: 'a' },
        { value: 'a', label: 'a' },
        { value: 'a', label: 'a' },
      ],
    },
    {
      'Name': 'Engine Capicity',
      'FilterIcon': 'src/assets/Imgs/iconEngineCapacityFilter.svg',
      Options: [
        { value: 'a', label: 'a' },
        { value: 'a', label: 'a' },
        { value: 'a', label: 'a' },
      ],
    },
    {
      'Name': 'Brand',
      'FilterIcon': 'src/assets/Imgs/iconBrandFilter.svg',
      Options: [
        { value: 'a', label: 'a' },
        { value: 'a', label: 'a' },
        { value: 'a', label: 'a' },
      ],
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
      <TopCategories productsData={productsData} />
      <Footer />
    </div>
  )
}

export default Home