import React from 'react';
import Carousel from './carousel';
import a1 from './../assets/minsk.jpg';
import a2 from './../assets/sky.png';
import a3 from './../assets/sky2.png';
import a4 from './../assets/sky3.png';
import a5 from './../assets/sky4.png';

const WIDTH = 650
const HEIGHT = 200
const Func0 = () => <div style={{ height: "200px", fontSize: "20px" ,color: "blue", padding: "50px", background: "#ccc"}}>
	<img src={a1} width={WIDTH} height={HEIGHT}  alt=""/>
	func1 func</div>
const Func1 = () => <div style={{ height: "200px", fontSize: "20px" ,color: "red", padding: "50px", background: "goldenrod"}}> <img src={a2} width={WIDTH} height={HEIGHT} alt=""/>func2 func</div>
const Func2 = () => <div style={{ height: "200px", fontSize: "20px" ,color: "green", padding: "50px", background: "#ededed"}}><img src={a3} width={WIDTH} height={HEIGHT} alt=""/> func3 func</div>
const Func3 = () => <div style={{ height: "200px", fontSize: "20px" ,color: "gold", padding: "50px", background: "blue"}}><img src={a4} width={WIDTH} height={HEIGHT} alt=""/> func4 func</div>
const Func4 = () => <div style={{ height: "200px", fontSize: "20px" ,color: "blue", padding: "50px", background: "green"}}><img src={a5} width={WIDTH} height={HEIGHT} alt=""/> func5 func</div>
/*
think about optimization app use usecallback usememo or React.memo +
think about compress files and code
img compress ???
js emited 160 kib minimized 10.1kib first
js emited 656 kib minimized 13.1kib last

*/
const App = () => {

	return (
		<Carousel
			animationType={"scale"}
			dots={true}
			controls={true}
			dotTheme={"rgba(0, 0, 0, .5)"}
			activeDotTheme={"goldenrod"}
			buttonTheme={"goldenrod"}
		>
			<div >
				<Func0/>
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
				<Func2/>
			</div>
			<div>
				<Func3/>
			</div>
			<div >
				<Func0/>
			</div>
			<div>
				<Func1/>
			</div>
			<div>
				<Func2/>
			</div>
			<div >
				<Func0/>
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
				<Func2/>
			</div>
			<div>
				<Func3/>
			</div>
			<div >
				<Func0/>
			</div>
			<div>
				<Func1/>
			</div>
			<div>
				<Func2/>
			</div>
		</Carousel>
	
	);
}
export default App;
