import './Welcome.css'
import Title from './Title/Title'
import RowButtons from './RowButtons/RowButtons'
import Cards from './Cards/Cards'

const Welcome = () => {
  return (
    <div className="welcome">
      <Title/>
      <RowButtons/>
      <Cards/>
    </div>
    
  )
}

export default Welcome