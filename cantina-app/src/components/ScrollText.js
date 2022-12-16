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
            Aujourd’hui nous allons vous dévoiler les secrets de notre site et
            il y’a une chose dont vous devez vous souvenir : quand on vous dis
            de ne pas cliquer sur un lien ne le faites pas ou votre adresse
            email risque de sauter, comme Valter par exemple.
          </p>
          <p>
            Mesdames et Messieurs, accrochez vous à vos chaises de bureau (même
            si vous êtes déjà dessus de 9h à 17h30 tous les jours pour regarder
            Abdou créer des dossiers “poulet”) vous vous apprêtez à rencontrer
            le DARK VADOR des temps modernes.
          </p>
        </div>
      </section>
      <PopUp />
    </>
  );
}

export default ScrollText;
