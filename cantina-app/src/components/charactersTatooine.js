import {useEffect, useState} from "react"
import './description.css'


const Characters = () => {
    const [charactersInfo, setCharactersInfo] = useState([]);
    useEffect(() => {

        fetch("https://miadil.github.io/starwars-api/api/all.json")
			.then((res) => res.json())
			.then((res) => console.log(res) || setCharactersInfo(res))
	}, [])

    return (
		<div className="charactersBlock">
 			{charactersInfo.filter((elem) => elem.homeworld === "tatooine")
			.map((elem, index) => {
				
				return (
					<div>
						<img
							className={`charac-img planetLetter${index}`}
							src={elem.image}
							alt={elem.name}
						/>
						<p>{elem.name}</p>
					</div>
				)
				})}
		</div>
	)
}
export default Characters