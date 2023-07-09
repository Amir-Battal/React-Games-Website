import './HorizontalTickerWrapper.css'
import image1 from '../../assets/images/Star_icon.png'


const HorizontalTickerWrapper = () => {
  return (
    <div className="ticker-wrapper1">
        <div className="text-update1">
            <div className="content">
            <img src={image1} alt=""/>
                <h3>Gaming spaning</h3>
                <img src={image1} alt=""/>
                <h3>Action - packed</h3>
                <img src={image1} alt=""/>
                <h3>mind - bending</h3>
                <img src={image1} alt=""/>
                <h3>collection og games</h3>
                <img src={image1} alt=""/>
                <h3>anything - else</h3>
            </div>
        </div>
    </div>
  )
}

export default HorizontalTickerWrapper