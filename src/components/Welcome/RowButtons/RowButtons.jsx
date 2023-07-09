import './RowButtons.css'

const RowButtons = () => {
    return (
        <div className="duBtn">
            <button className="newest"><h2>newest games</h2></button>
            <button className="latest"><h2>latest games</h2></button>
            <button className="fight"><h2>fight games</h2></button>
            <button className="sport"><h2>sport games</h2></button>
        </div>
    )
}

export default RowButtons