import "./styles/Body.css"

import Summary from "../components/Summary";
import Information from "../components/Information";

function Body() {
  const titles = ["Information Security Engineer", "Full Stack Developer", "Cisco Certified CyberOps Associate"];
  const links = ["https://github.com/boxhezi", "https://www.linkedin.com/in/boxuan-lu/"];

  return (
    <div className="body">
      <Summary name="Boxuan Lu" titles={ titles } location="Melbourne, Australia" links={ links } />
      <Information />
    </div>
  )
}

export default Body;