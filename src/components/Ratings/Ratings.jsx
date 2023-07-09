import './Ratings.css'
import Slider from './Slider/Slider'
import Rates from './Rates/Rates'
import './FirstRate/FirstRate.css'





const Ratings = () => {

  const slides = [
    <Rates/>,
    <Rates/>,
    <Rates/>,
    <Rates/>,
    <Rates/>,
  ];

  return (
    <div className="ratings">
        <Slider slides={slides} />
      </div>
  )
}

export default Ratings