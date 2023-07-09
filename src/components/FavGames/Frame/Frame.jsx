import './Frame.css'
import background from '../../../assets/images/frame/background.png'
import leftSide from '../../../assets/images/frame/leftSide.png'
import rightSide from '../../../assets/images/frame/rightSide.png'
import top from '../../../assets/images/frame/top.png'
import wordBackground from '../../../assets/images/frame/wordBackground.png'
import logoBackground from '../../../assets/images/frame/logoBackground.png'
import logo from '../../../assets/images/frame/logo.png'
import innerFrame from '../../../assets/images/frame/innerFrame.png'
import innerLeftSide from '../../../assets/images/frame/innerLeftSide.png'
import innerRightSide from '../../../assets/images/frame/innerRightSide.png'

const Frame = () => {
  return (
    <div className="frame">
        <img src={background} className="background" alt="background" />


        <img src={leftSide} className="leftSide" alt="leftSide"/>  
        <img src={rightSide} className="rightSide" alt="rightSide"/> 

        <img src={top} className="top" alt="top"/> 
        <img src={wordBackground} className="wordBackground" alt="wordBackground"/>                
        
        <img src={logoBackground} className="logoBackground" alt="logoBackground"/>    
        <img src={logo} className="logo" alt="logo"/>  

        

        <img src={innerFrame} className="innerFrame" alt="innerFrame"/>    
        <img src={innerLeftSide} className="innerLeftSide" alt="innerLeftSide"/>   
        <img src={innerRightSide} className="innerRightSide" alt="innerRightSide"/>  
    </div>
  )
}

export default Frame