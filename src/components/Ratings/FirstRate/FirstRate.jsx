import './FirstRate.css'
import angleRectangle from '../../../assets/images/AngleRectangle.png'
import ratingImage1 from '../../../assets/images/rating-images/rating-image1.png'
import verified from '../../../assets/images/rating-images/Verified.png'


const FirstRate = () => {
    return (
        <div className="firstRate">
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
                One of the standout features of this gaming website is its extensive
                library of game guides and tutorials. It has helped me level up my
                skills, conquer challenging quests, and discover hidden secrets
                within games. The guides are comprehensive, easy to follow, and
                have undoubtedly elevated my gaming performance.
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

export default FirstRate