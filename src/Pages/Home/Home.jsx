import FilterSearch from '../../Components/FilterSearch/FilterSearch'
import Hero from '../../Components/Hero/Hero'
import NavBar from '../../Components/NavBar/NavBar'
import TopCategories from '../../Components/TopCategories/TopCategories'
import CarsSlider from '../../Components/CarsSlider/CarsSlider'
import './HomeStyle.css'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
   
    
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
      <TopCategories />
      <Footer />
    </div>
  )
}

export default Home