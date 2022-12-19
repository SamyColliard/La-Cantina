import {useEffect, useState} from "react"
import { Cards, Cards1, Cards2 } from "../components/cards";
import Description from "../components/description";
import Header from "../components/header";

const Characters = () => {
    const [charactersInfo, setCharactersInfo] = useState([]);
	const [charactersInfo1, setCharactersInfo1] = useState([]);
	const [charactersInfo2, setCharactersInfo2] = useState([]);
    useEffect(() => {

        fetch("https://miadil.github.io/starwars-api/api/id/2.json")
			.then((res) => res.json())
			.then((res) => console.log(res) || setCharactersInfo(res))
		fetch("https://miadil.github.io/starwars-api/api/id/16.json")
			.then((res) => res.json())
			.then((res) => console.log(res) || setCharactersInfo1(res))
		fetch("https://miadil.github.io/starwars-api/api/id/1.json")
			.then((res) => res.json())
			.then((res) => console.log(res) || setCharactersInfo2(res))
	}, [])
    return (
		<div>
			<Header />
			<Description charactersInfo={charactersInfo}  charactersInfo1={charactersInfo1} charactersInfo2={charactersInfo2}/>
		</div>
		// <div className="charactersBlock">
 		// 	{charactersInfo
		// 	.map((elem, index) => {
				
		// 		return (
		// 			<div>
		// 				<Cards
		// 					key={elem.id}
		// 					src={elem.image}
							
							
		// 				/>
					
		// 			</div>
		// 		)
		// 		})}
		// </div>
	)
}
export default Characters