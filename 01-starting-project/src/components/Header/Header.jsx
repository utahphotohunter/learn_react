/* *********************************************
* This imports styles for the header, though 
* these styles are not scoped to only this 
* header. Any html header element in the 
* project that is styled in this css file will 
* also be affected.
* ******************************************* */
import "./Header.css"

import reactImg from "../../assets/react-core-concepts.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

// get random int between a min and max int
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// create the header component
export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
