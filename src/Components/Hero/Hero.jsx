import './HeroStyle.css'
import HeroCar from '../../assets/Imgs/HeroCar3.png'

const Hero = () => {
    return (
        <div className='Hero'>
            <div className='HeroFirstHalf'>
                <p className='HeroTitle'>Arriving Summer 2019</p>
                <p className='HeroText1'>MAKE EVERY DAY LEGENDARY.</p>
                <p className='HeroText2'>The culmimination of comfort,luxury,and powerrul living is embodied in the First-Ever BMWX7 -the biggest BMW ever built.</p>
                <button className='ExploreButton'>EXPLORE</button>
            </div>
            <div className='HeroSecondHalf'>
                <img className='HeroCar' src={HeroCar} alt="" />
            </div>
        </div>
    )
}

export default Hero