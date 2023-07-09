import './FavGames.css'
import FirstSection from './FirstSection/FirstSection'
import Slider from './Slider/Slider'
import Buttons from './Buttons/Buttons'
import Frame from './Frame/Frame'

const FavGames = () => {
  return (
    <div className='favGames'>
        <FirstSection/>
        <Frame/>  
        <Slider/>   
        <Buttons/>
    </div>
  )
}

export default FavGames