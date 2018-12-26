document.getElementsByClassName("click")[0].hidden = true;

document.getElementsByClassName("button")[0].onclick = e => {
  document.querySelector(".button div:nth-child(2)").style.animation =
    "buttonfly .5s linear 0s forwards";

  document.querySelector(".button div:nth-child(1)").style.animation =
    "buttonfly .5s linear 0.4s forwards";

  document.querySelector(".button div:nth-child(3)").style.animation =
    "buttonfly .5s linear 0.4s forwards";

  setTimeout(function() {
    document.getElementsByClassName("ux")[0].hidden = true;

    document.getElementsByClassName("click")[0].hidden = false;

    document.querySelector(".but div:nth-child(2)").style.animation =
      "butmov 0.5s linear";

    document.querySelector(".but div:nth-child(1)").style.animation = "";
  }, 450);
};

document.getElementsByClassName("but")[0].onclick = e => {
  document.querySelector(".but div:nth-child(1)").style.animation =
    "butfly .5s linear 0.1s forwards";

  setTimeout(function() {
    document.getElementsByClassName("click")[0].hidden = true;

    document.getElementsByClassName("ux")[0].hidden = false;

    document.querySelector(".button div:nth-child(2)").style.animation =
      "buttonmov .5s linear";

    document.querySelector(".button div:nth-child(1)").style.animation = "";

    document.querySelector(".button div:nth-child(3)").style.animation = "";
  }, 450);
};
