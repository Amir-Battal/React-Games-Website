import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
        <h1>let your mind <span className="exWord">explore</span> new world</h1>
        <h5>
            Playing electronic games, whether through consoles, computers,
            mobile phones or another medium altogether. Gaming is a nuanced
            term that suggests regular gameplay, possibly as a hobby.
        </h5>
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

export default Hero