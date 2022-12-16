import PopUp from "./PopUp";
import "./ScrollText.css";

function ScrollText() {
  return (
    <>
      <div className="fade"></div>
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>
              A long time ago, after years of coding and trying to comprendre
              comment le CSS fonctionne bordel...
            </p>
            <p> Episode III</p>
            <h1>LA CANTINA</h1>
          </div>

          <p>
            L’équipe de la Cantina a l’honneur de vous présenter son site web
            officiel. Après des heures de coding, deux écrans de balancer par la
            fenêtre et un arrêt maladie pour dépression sévère nous sommes
            arrivés à nos fins.
          </p>
          <p>
            During the battle, Rebel spies managed to steal secret plans to the
            Empire’s ultimate weapon, the DEATH STAR, an armored space station
            with enough power to destroy an entire planet.
          </p>
          <p>
            Pursued by the Empire’s sinister agents, Princess Leia races home
            aboard her starship, custodian of the stolen plans that can save her
            people and restore freedom to the galaxy…
          </p>
        </div>
      </section>
      <PopUp />
    </>
  );
}

export default ScrollText;
