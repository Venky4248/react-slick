// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {imageUrl, name, description} = planetDetails
  return (
    <div className="bg-container">
      <div>
        <h1 className="head">PLANETS</h1>
      </div>
      <div className="final">
        <img src={imageUrl} alt={`planet ${name}`} className="img" />
      </div>
      <h1 className="para">{name}</h1>
      <p className="des-para">{description}</p>
    </div>
  )
}

export default PlanetItem
