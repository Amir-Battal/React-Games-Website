import './Discover.css'
import image1 from '../../assets/images/descover_background.png'

const Discover = () => {
  return (
    <div className="discover">
        <div className="virtual">
            <h1>Discover the <span className="exWord">Virtual</span> Reality Gaming</h1>
            <h5>
                A well-designed gaming header often incorporates elements
                such as game characters, iconic symbols, vibrant colors, and
                dynamic visuals to convey excitement, adventure, and the
                immersive nature of gaming.
            </h5>
            <div className="duBtn">
                <button className="view"><h2>play now </h2></button>
            </div>
            
        </div>
        <div className="image">
            <img src={image1} alt="descover_background"/>
        </div>
    </div>
  )
}

export default Discover