import './description.css'
import {Cards, Cards1, Cards2 } from './cards'
import Characters from '../screens/charactersTatooine'
const Description = ({charactersInfo}) => {
console.log(charactersInfo)
    return (

<div id="description">   
    <div className='div1'>
        {/* <Cards src /> */}
        <p>
            <span className='letter-style'>T</span>atooine était un monde désertique situé dans le secteur Arkanis sur le Territoires de la Bordure Extérieure (pas à l’intérieur du coup).
            Des fossiles de diabétique laissaient penser aux scientifiques que Tatooine avait été recouverte par un océan de sucre glace à l'instar de Kamino. </p>
        
        </div>
        <div className='div1'>
        <p> 
            La planète fut colonisée par un certain Davido corpos miniers qui pensaient que la planète était riche en minerais. 
            Cependant, lorsqu'elles découvrirent que ce n'était pas le cas, ces sbires plièrent bagages et laissèrent leurs ouvriers Vinci sur la planète. Depuis, Tatooine est devenu le repaire de nombreuses racailles de la galaxie et le fief du Hutt Jabba Desilijic Tiure.</p>
        <Characters />
        </div>
        <div className='div1'>
        <Characters />
            <p>
            La planète est également devenue connue pour ses courses de machine à laver comme la Classique de Bosch Eve. Les Jawa, un peuple de ferrailleur, et les Tusken, un peuple de guerriers un peu cool, étaient des espèces originaires de la planète. 
            </p>
            </div>
            </div> 

    )
}

export default Description