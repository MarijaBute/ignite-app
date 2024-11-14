import './home.css'
import HeroImg from '../../assets/images/hero-img.png'

export default function Home() {
    return (
        <>
        <div className="site-home">
            <div className="home-wrapper">
                <div className="home-wrap-content">
                    <h4 className="home-subheading">2.0 Update is now live!</h4>
                    <h1 className="home-heading">Boost Your Project Efficiency with AI-Powered Management</h1>
                    <p className="home-paragraph">Ignite helps you predict deadlines, allocate resources smartly, and track team efficiency—so you always stay ahead.</p>
                    <div className="home-buttons">
                        <div className="home-orange-button">
                            <button className="template-btn">Get template</button>
                        </div>
                        <div className="home-transparent-button">
                            <button className="learn-more-btn">Learn more</button>
                        </div>
                    </div>
                    <div className="home-image-wrapper">
                        <img src={HeroImg} alt="Hero Img" className='hero-img' />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}