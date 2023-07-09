import './SlantedTickerWrapper.css'
import image1 from '../../assets/images/Star_icon.png'


const SlantedTickerWrapper = () => {
  return (
    <div className='slanted'>

      <div className="ticker-wrapper">
          <div className="text-update">
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

      <div className="duBtn">
          <button className="buy"><h2>buy now</h2></button>
          <button className="play"><h2>play now</h2></button>
      </div>
      <div className="numbers">
          <div className="number">
              <h3>300+</h3>
              <h6>Unique Style</h6>
          </div>
          <div className="number">
              <h3><span className="exWord">200+</span></h3>
              <h6>Project Finished</h6>
          </div>
          <div className="number">
              <h3>500+</h3>
              <h6>Happy Customer</h6>
          </div>
      </div>
    </div>
  )
}

export default SlantedTickerWrapper