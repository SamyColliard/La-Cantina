import banner from "../assets/banner.png"
import './header.css'

const Header = (props) => {

	return (
		<header className="App-header">
			 <link href="https://fr.allfont.net/allfont.css?fonts=star-jedi" rel="stylesheet" type="text/css" />

			<div className="Title">
				<h1> La Cantina
				</h1>
			</div>



  {/* SMOKES EFFECTS */}

			 <div className="fumée" id="fumée1"></div>
                  <div className="fumée" id="fumée2"></div>
                   <div className="fumée" id="fumée3"></div>
                  <div className="fumée" id="fumée4"></div>


{/* LUCIOLES EFFECTS */}
 <div className="box"> 
 <div className="luciole nth1"></div>
<div className="luciole nth2"></div>
<div className="luciole nth3"></div>
<div className="luciole nth4"></div>
<div className="luciole nth5"></div>
<div className="luciole nth6"></div>
</div>


                
        
			
			{/* <a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a> */}

		</header>
	)
}

export default Header
