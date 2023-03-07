import './assets/App.css'
import gsap from 'gsap';
import SubElements from './Subtext.jsx';
import { useEffect, useRef, useState } from 'react';

function App() {

	let bgArray = [
		["white", "black"],
		["red", "black"],
		["black", "red"],
		["#FFFF33", "black"],
		["black", "#FFFF33"],
		["black", "#fd900f"],
		["#fd900f", "black"],
		["black", "#ccfe01"],
		["#ccfe01", "black"],
		["yellow", "blue"],
		["blue", "yellow"],
		["black", "white"],
	];

	const main = useRef(null)
	const [bg, setBg] = useState("black");
	const [col, setCol] = useState("white");
	const [switchClicked, setSwitchClicked] = useState(0);

	function handleSwitch() {
		setBg(x => x = bgArray[switchClicked][0]);
		setCol(x => x = bgArray[switchClicked][1]);
		if (switchClicked < bgArray.length - 1) setSwitchClicked(sw => sw + 1);
		if (switchClicked === bgArray.length - 1) setSwitchClicked(sw => sw = 0);
	}

	useEffect(() => {
		gsap.context(() => {
			gsap.to(".hero-character", {
				y: "0vw",
				duration: 1,
				stagger: .05,
				delay: 0.5
			})
			gsap.to("#abt", {
				opacity: 1,
				duration: 1,
				delay: 2
			})
			gsap.to("header", {
				opacity: 1,
				duration: 1,
				delay: 2.5
			})
			gsap.to("footer", {
				opacity: 1,
				duration: 1,
				delay: 2.5
			})
		}, main)

	}, [])

	return (
		<div ref={main} className='studio-container' style={{ backgroundColor: bg, color: col }}>

			<header>
				<p>EXPONENTIAL</p>
				<p onClick={handleSwitch}>MODES</p>
			</header>

			<main>
				<h1>
					<SubElements text="Web Digital" element="span" class_of_element="hero-character" /><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<SubElements text="Studio©" element="span" class_of_element="hero-character" />
					<span id='abt'>
						<p>
							<br />
							A creative digital studio specialized in the creation of
							interactive websites, customized and unique, adapted to the clients' needs,
							we make everything better than best.
						</p>
					</span>
				</h1>
				<p></p>
			</main>

			<footer>
				<a href='https://www.linkedin.com/company/exponential-digital-studios/?viewAsMember=true'><p>LinkedIn</p></a>
				<a href='mailto:expoHiring@gmail.com'><p>Careers</p></a>
				<a href='mailto:hkyakshitaxn@gmail.com'><p>Hire Us</p></a>
				<a href='#'><p>©2023</p></a>
			</footer>

		</div>
	)
}

export default App
