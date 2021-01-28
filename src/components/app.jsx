import React from 'react';
import Carousel from './carousel';
import a1 from './../assets/minsk.jpg';
import a2 from './../assets/sky.png';
import a3 from './../assets/sky2.png';
import a4 from './../assets/sky3.png';
import a5 from './../assets/sky4.png';
import left from './../arrows/left-arrow.svg';
import right from './../arrows/right-arrow.svg';
import next from './../arrows/next.png';
import prew from './../arrows/back.png';

let url = "http://localhost:3004/data"
const WIDTH = 250
const HEIGHT = 250
const Func0 = () => <div style={{color: "blue", padding: "50px", backgroundColor: "#ccc"}}>
	<img src={a1} width={WIDTH} height={HEIGHT}  alt=""/>
	func4 func</div>
const Func1 = () => <div style={{color: "red", padding: "50px", background: "goldenrod"}}> <img src={a2} width={WIDTH} height={HEIGHT} alt=""/>func1 func</div>
const Func2 = () => <div style={{color: "green", padding: "50px", background: "#ededed"}}><img src={a3} width={WIDTH} height={HEIGHT} alt=""/> func2 func</div>
const Func3 = () => <div style={{color: "gold", padding: "50px", background: "blue"}}><img src={a4} width={WIDTH} height={HEIGHT} alt=""/> func3 func</div>
const Func4 = () => <div style={{color: "blue", padding: "50px", background: "green"}}><img src={a5} width={WIDTH} height={HEIGHT} alt=""/> func4 func</div>

class Class5 extends React.Component {
	state = {
		name: "ivan",
		lastName: "",
		index: 0
	}
	render() {
		return (
			<div style={{color: "pink"}}><img src="https://via.placeholder.com/350/FF0000/FFFFFF" alt=""/>class</div>
		)
	}
}

const App = () => {

	return (
	
		<Carousel
			embed={true}
			animation={true}
			dots={true}
			controls={true}
			swiper={true}
			//url={url}
			dotTheme={"rgba(0, 0, 0, .5)"}
			activeDotTheme={"gold"}
			buttonTheme={"red"}
			buttonIco={{
				prew: () => "\u21C7", // сделать универсальными для погдгрузки картинок
				next: () => "\u21C9"
			}}
		>
			<div >
				<Func0 />
			</div>
			<div>
				<Func1/>
			</div>
			<div>
				<Func2/>
			</div>
			<div>
				<Func3/>
			</div>
			<div>
				<Func4/>
			</div>
		</Carousel>
	
	);
}
export default App;

/*
			<div >
				<Func0/>
			</div>
			<span>
				<Func1/>
			</span>
			<strong>
				<Func2/>
			</strong>
			<div>
				<Func3/>
			</div>
			<div>
				<Func4/>
			</div>
			<div>
				<Func1/>
			</div>
			<div>
				<Func2/>
			</div>
			<div>
				<Func3/>
			</div>
			<div>
				<Func4/>
			</div>
			<div>
				<Func2/>
			</div>
		
*/