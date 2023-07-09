import './HorizontalTickerWrapper1.css'
import image1 from '../../assets/images/Star_icon.png'


const HorizontalTickerWrapper1 = () => {
  return (
    <div className="ticker-wrapper2">
        <div className="text-update2">
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

export default HorizontalTickerWrapper1