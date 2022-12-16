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
	}, [])
    return (
		<div>
			<Header />
			<Description charactersInfo={charactersInfo} />
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