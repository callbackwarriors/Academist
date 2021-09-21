import Image from 'next/image';
import Logo from '../../assets/images/academist-logo.svg';
const Banner = () => {
    return (
    <section className="banner">
        <div className="container">
            <div className="banner__left">
                <h2>The World's Leading Distance-Learning Provider</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                <a href="#" className="banner__left--button">Learn more</a>
            </div>

            <div className="banner__right">
                <Image src={Logo}/>
            </div>
        </div>
    </section>
    )
}

export default Banner
