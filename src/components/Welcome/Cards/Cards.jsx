import './Cards.css'

import cardImage1 from '../../../assets/images/card-images/Card-image1.png'
import cardImage2 from '../../../assets/images/card-images/Card-image2.png'
import cardImage3 from '../../../assets/images/card-images/Card-image3.png'
import cardImage4 from '../../../assets/images/card-images/Card-image4.png'
import cardImage5 from '../../../assets/images/card-images/Card-image5.png'
import cardImage6 from '../../../assets/images/card-images/Card-image6.png'

import cardProfileImage1 from '../../../assets/images/card-profile-images/CardProfile-image1.png'
import cardProfileImage2 from '../../../assets/images/card-profile-images/CardProfile-image2.png'
import cardProfileImage3 from '../../../assets/images/card-profile-images/CardProfile-image3.png'
import cardProfileImage4 from '../../../assets/images/card-profile-images/CardProfile-image4.png'
import cardProfileImage5 from '../../../assets/images/card-profile-images/CardProfile-image5.png'
import cardProfileImage6 from '../../../assets/images/card-profile-images/CardProfile-image6.png'

const Cards = () => {
  return (
    <div className="cards">
        <div className="card">
            <img className="cardImages" src={cardImage1} alt=""/>
            <div className="gameName"><h2>core philosophies</h2></div>   
            <div className="creator">
                <div className="profileImg"><img className="cardProfileImages" src={cardProfileImage1} alt=""/></div>
                <div className="creatorName">
                    <h3>Cameron Williamson</h3>
                    <h6>Gillette</h6>
                </div>
            </div>
            <button><h2 className="buttonWord">live demo</h2></button>
        </div>

        <div className="card">
            <img className="cardImages" src={cardImage2} alt=""/>
            <div className="gameName"><h2>core philosophies</h2></div>   
            <div className="creator">
                <div className="profileImg"><img className="cardProfileImages" src={cardProfileImage2} alt=""/></div>
                <div className="creatorName">
                    <h3>Dianne Russell</h3>
                    <h6>Louis Vuitton</h6>
                </div>
            </div>
            <button><h2 className="buttonWord">live demo</h2></button>
        </div>

        <div className="card">
            <img className="cardImages" src={cardImage3} alt=""/>
            <div className="gameName"><h2>core philosophies</h2></div>   
            <div className="creator">
                <div className="profileImg"><img className="cardProfileImages" src={cardProfileImage3} alt=""/></div>
                <div className="creatorName">
                    <h3>Jane Cooper</h3>
                    <h6>MasterCard</h6>
                </div>
            </div>
            <button><h2 className="buttonWord">live demo</h2></button>
        </div>

        <div className="card">
            <img className="cardImages" src={cardImage4} alt=""/>
            <div className="gameName"><h2>core philosophies</h2></div>   
            <div className="creator">
                <div className="profileImg"><img className="cardProfileImages" src={cardProfileImage4} alt=""/></div>
                <div className="creatorName">
                    <h3>Cody Fisher</h3>
                    <h6>The Walt Disney Company</h6>
                </div>
            </div>
            <button><h2 className="buttonWord">live demo</h2></button>
        </div>

        <div className="card">
            <img className="cardImages" src={cardImage5} alt=""/>
            <div className="gameName"><h2>core philosophies</h2></div>   
            <div className="creator">
                <div className="profileImg"><img className="cardProfileImages" src={cardProfileImage5} alt=""/></div>
                <div className="creatorName">
                    <h3>Wade Warren</h3>
                    <h6>Gillette</h6>
                </div>
            </div>
            <button><h2 className="buttonWord">live demo</h2></button>
        </div>

        <div className="card">
            <img className="cardImages" src={cardImage6} alt=""/>
            <div className="gameName"><h2>core philosophies</h2></div>   
            <div className="creator">
                <div className="profileImg"><img className="cardProfileImages" src={cardProfileImage6} alt=""/></div>
                <div className="creatorName">
                    <h3>Robert Fox</h3>
                    <h6>L'Oréal</h6>
                </div>
            </div>
            <button><h2 className="buttonWord">live demo</h2></button>
        </div>
    </div>
  )
}

export default Cards