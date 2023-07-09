import './Carousel.css'
import image1 from '../../../assets/images/Vector.png'
import Carousel from './Carousel'

const Slider = () => {
  return (
    <div className="wrapper">
        <Carousel className="carousel">
            <li className="card">
                <div className="img"><img src={image1} alt="img" draggable="false"/></div>
                <h2>sneak peeks1</h2>
            </li>
            <li className="card">
                <div className="img"><img src={image1} alt="img" draggable="false"/></div>
                <h2>sneak peeks2</h2>
            </li>
            <li className="card">
                <div className="img"><img src={image1} alt="img" draggable="false"/></div>
                <h2>sneak peeks3</h2>
            </li>
            <li className="card">
                <div className="img"><img src={image1} alt="img" draggable="false"/></div>
                <h2>sneak peeks4</h2>
            </li>
            <li className="card">
                <div className="img"><img src={image1} alt="img" draggable="false"/></div>
                <h2>sneak peeks5</h2>
            </li>
            <li className="card">
                <div className="img"><img src={image1} alt="img" draggable="false"/></div>
                <h2>sneak peeks6</h2>
            </li>
        </Carousel>
    </div>
  )
}

export default Slider