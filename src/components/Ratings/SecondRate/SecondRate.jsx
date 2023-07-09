import './SecondRate.css'
import angleRectangle from '../../../assets/images/AngleRectangle.png'
import ratingImage1 from '../../../assets/images/rating-images/rating-image2.png'
import verified from '../../../assets/images/rating-images/Verified.png'

const SecondRate = () => {
  return (
    <div className="secondRate">
        <div className="angle">
            <img src={angleRectangle} alt=""/>
        </div>
        <div className="stars">
            <a href=""><i className="fa-solid fa-star"></i></a>
            <a href=""><i className="fa-solid fa-star"></i></a>
            <a href=""><i className="fa-solid fa-star"></i></a>
            <a href=""><i className="fa-solid fa-star"></i></a>
            <a href=""><i className="fa-solid fa-star"></i></a>
        </div>
        <p className="opinion">
            Another aspect that sets this website apart is its vibrant and
            passionate community. The forum section provides a platform for 
            gamers from all walks of life to connect, share their experiences, and
            discuss their favorite titles. I've made valuable friendships and found
            like-minded individuals who share my enthusiasm for gaming.
        </p>
        <div className="line"></div>
        <div className="ratingWriter">
            <div className="client">
                <div className="profileImg"><img className="cardProfileImages" src={ratingImage1} alt=""/></div>
                <div className="creatorName">
                    <h3>Wade Warren</h3>
                    <h6>Gillette</h6>
                </div>
            </div>
            <div className="verified">
                <img src={verified} alt=""/>
                <h4>Verified</h4>
            </div>
        </div>
    </div>
  )
}

export default SecondRate