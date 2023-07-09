import './Footer.css'
import logo from '../../assets/images/footer/website_logo.png';
import twitch from '../../assets/images/footer/twitch.png'
import roblox from '../../assets/images/footer/roblox.png'
import asus from '../../assets/images/footer/asus.png'
import canon from '../../assets/images/footer/canon.png'
import microsoft from '../../assets/images/footer/microsoft.png'
import background from '../../assets/images/footer/background.png'


const Footer = () => {
  return (
    <div className="footer">
        <div className="fSection">
            <div className="logo">
                <a className="logo" href="#home">
                    <img src={logo} alt="gaming-website-logo"/>
                    <h1>board</h1>
                </a>
                <p>
                    A well-designed gaming header often
                    incorporates elements such as game
                    characters, iconic symbols, vibrant
                    colors, and dynamic visuals .
                </p>
            </div>
            <div className="links">
                <a href="" className="object">Company</a>
                <a href="">Croducts</a>
                <a href="">Apps & Games</a>
                <a href="">Features</a>
            </div>
            <div className="links">
                <a href=""className="object">Help</a>
                <a href="">Support</a>
                <a href="">About</a>
                <a href="">Contact Us</a>
            </div>
            <div className="links">
                <a href=""className="object">Resources</a>
                <a href="">Youtube Playlist</a>
                <a href="">How To - Blog</a>
                <a href="">Terms & Conditions</a>
            </div>
        </div>
        <div className="partrenship">
            <a href=""><img className="normalSize" src={twitch} alt=""/></a>
            <a href=""><img src={roblox }alt=""/></a>
            <a href=""><img src={asus} alt=""/></a>
            <a href=""><img src={canon} alt=""/></a>
            <a href=""><img src={microsoft} alt=""/></a>
        </div>
        <div className="social">
            <div className="platforms">
                <div className="cir">
                    <a href=""><i className="fa-brands fa-twitter"></i></a>
                </div>
                <div className="cir">
                    <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                </div>
                <div className="cir">
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                </div>
                <div className="cir">
                    <a href=""><i className="fa-brands fa-github"></i></a>
                </div>
            </div>
            <div className="copyright">
                <p>
                    © Copyright 2023, All Rights Reserved by board
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer