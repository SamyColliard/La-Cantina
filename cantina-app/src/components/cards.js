import { useState } from 'react'
import 'cards.css';
import Modal from './modal';


function Cards() {

	const [openModal, setOpenModal] = useState(false)
	
	return (
		<div className="Cards">
			<h1>heyyyyyyyy salut a tous les amis</h1>
			<button className="openModalBtn" onClick={() => {setOpenModal(true);}}>Open</button>
			{openModal && <Modal closeModal={setOpenModal} />}
		</div>
	);
}

export default Cards;













// <p>Jabba Desilijic Tiure, plus couramment désigné comme Jabba le Hutt, était un seigneur du crime Hutt basé sur la planète Tatooine où il dirigeait l'une des plus puissantes organisations criminelles appelée le Clan Hutt. Il mourut étranglé par Leia Organa dans sa barge à voiles, la Khetanna en 4 ap.BY. </p>