import Sidebar from "../../components/sidebar/Sidebar"
import "./home.scss"

const home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">Container Home</div>
    </div>
  )
}

export default home