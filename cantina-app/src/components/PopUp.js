import "./PopUp.css";

function PopUp() {
  let stateButtonPayez = false;
  function stateButton() {
    stateButtonPayez = true;
  }
  function hidePopUp() {
    const popUpBlock = document.querySelector(".popup");
    popUpBlock.classList.add("hide");
  }
  function showPopUp() {
    const popUpBlock = document.querySelector(".popup");
    popUpBlock.classList.remove("hide");
  }

  let sdegree = 0;
  if (document.addEventListener) {
    document.addEventListener("wheel", MouseWheelHandler);
  }

  function MouseWheelHandler() {
    let e = window.event;
    let delta = Math.max(-1, Math.min(1, e.wheelDelta));

    sdegree += 0.5 * delta;

    let o = animateText(sdegree);

    let crawl = document.querySelector(".crawl");
    let textO = `<div className="title">
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
</div>`;
    let scrollInfini = "PAYEZ PAYEZ PAYEZ";
    o.top < -4000 && stateButtonPayez === false
      ? showPopUp()
      : (crawl.innerHTML += "");
    o.top < -2350 && stateButtonPayez === false
      ? (crawl.innerHTML += scrollInfini)
      : (crawl.innerHTML = textO);
    o.top > -8600 ? (crawl.style.top = `${o.top}px`) : (crawl.innerHTML += "");
    o.top > -8600 && o.top
      ? (crawl.style.transform = `rotateX(${o.rotateX}deg) translateZ(${o.translateZ}px)`)
      : (crawl.innerHTML += "");
  }
  function animateText(step) {
    let limit = { min: 0, max: 100 };
    let top_l = { min: 0, max: -6000 };
    let rotateX_l = { min: 20, max: 25 };
    let translateZ_l = { min: 0, max: -2500 };

    //

    let m_top = (top_l.max - top_l.min) / (limit.max - limit.min);
    let m_rotateX = (rotateX_l.max - rotateX_l.min) / (limit.max - limit.min);
    let m_translateZ =
      (translateZ_l.max - translateZ_l.min) / (limit.max - limit.min);

    let top = m_top * step + top_l.min;
    let rotateX = m_rotateX * step + rotateX_l.min;
    let translateZ = m_translateZ * step + translateZ_l.min;

    let output = {
      top: top,
      rotateX: rotateX,
      translateZ: translateZ,
    };

    return output;
  }

  return (
    <div className="popup hide">
      <div className="popup_inner">
        PAYEZ TOUT DE SUITE
        <button onClick={() => (stateButton(), hidePopUp())}>PAYEZ</button>
        <button onClick={() => hidePopUp()}>Continuer sans Payer</button>
      </div>
    </div>
  );
}

export default PopUp;
