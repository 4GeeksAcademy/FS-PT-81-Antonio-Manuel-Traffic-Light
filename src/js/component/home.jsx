import React, {useEffect, useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

const [color, setColor] = useState('')
console.log(color)

const [purpleLight, setPurpleLight] = useState(false) 



	return (
		<>
		<div className="traffic-light">
			<div className={`light red ${color === 'red' ? 'glow' : ''}`} onClick={()=> setColor('red')} ></div>
			<div className={`light yellow ${color === 'yellow' ? 'glow' : ''}`} onClick={()=> setColor('yellow')} ></div>
			<div className={`light green ${color === 'green' ? 'glow' : ''}`} onClick={()=> setColor('green')} ></div>
			{purpleLight && (
				<div className={`light purple ${color === 'purple' ? 'glow' : ''}`} onClick={()=> setColor('purple')}
				 ></div>
			)} 
		</div>
		<div className="section">
			<button onClick={()=> setPurpleLight(!purpleLight)}>Button <i class="fa-solid fa-trash" style={{color: "#63E6BE"}}></i></button>
		</div>
		</>
	);
};

export default Home;
