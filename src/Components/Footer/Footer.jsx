import './FooterStyle.css'
import logo from '/assets/Imgs/Logo.svg'
import instagram from '/assets/Imgs/instagram.svg'
import lcation from '/assets/Imgs/lcation.svg'
import mail from '/assets/Imgs/mail.svg'
import twiter from '/assets/Imgs/twiter.svg'
import phone from '/assets/Imgs/phone.svg'
import facebook from '/assets/Imgs/facebook.svg'


const Footer = () => {
    return (
        <div className='Footer'>
            <div className="First-Section">
                <img className='footer-logo' src={logo} alt="" />
                <p className='Car-Company'>CAR COMPANY</p>
            </div>
            <div className="Second-Section">
                <h1 className='footer-Menu'>menu</h1>
                <p className='footer-Home'>Home</p>
                <p className='footer-Car-Catalogue'>Car Catalogue</p>
                <p className='footer-Services'>Services</p>
            </div>
            <div className="Third-Section">
                <h1 className='Further-Information'>Further Information</h1>
                <p className='Terms'>Terms & Conditions</p>
                <p className='Privacy-Policy'>Privacy Policy</p>
            </div>
            <div className="Fourth-Section">
                <h1 className='footer-contactUs'>Contact us</h1>
                <div className="location-container">
                    <img className='location-icon' src={lcation} alt="" />
                    <p className='location-value'>647P+4G5,Seif Al-Doleh, Aleppo, Syria</p>
                </div>
                <div className="contact-container">
                    <img className='phone-icon' src={phone} alt="" />
                    <p className='phone-value'>+96323456</p>
                </div>
                <div className="Email-container">
                    <img className='mail-icon' src={mail} alt="" />
                    <p className='mail-value'>+tagred@gmail.com</p>
                </div>
            </div>
            <div className="Fifth-Section">
                <h1 className='Follow-us'>Follow us</h1>
                <div className="Icons-container">
                    <img src={facebook} alt="" />
                    <img src={twiter} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer