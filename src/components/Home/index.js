import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="bg-container">
    <h1 className="heading">Add Adventures to your life....</h1>
    <p className="para">
      You must go on adventures to find out where you truly belong.
    </p>
    <Link to="/package">
      <button type="button" className="button">
        Go on
      </button>
    </Link>
  </div>
)
export default Home
