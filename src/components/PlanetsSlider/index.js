import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div data-testid="planets">
      <Slider>
        {planetsList.map(planet => (
          <PlanetItem planetDetails={planet} key={planet.id} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
