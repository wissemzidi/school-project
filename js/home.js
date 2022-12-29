function toggleAside() {
  let aside = document.getElementById("aside");
  let asideBtn = document.getElementById("toggle-aside");

  if (aside.className === "") {
    aside.style.animation = "slideOut-left .6s ease forwards";
    setTimeout(() => {
      aside.className = "close";
    }, 600);
    asideBtn.style.transform = "rotateY(0deg)";
  } else {
    aside.className = "";
    aside.style.animation = "slideIn-right .7s ease forwards";
    asideBtn.style.transform = "rotateY(180deg)";
  }
}

function hideLoader() {
  setTimeout(() => {
    let loader = document.getElementById("spinner-container");
    loader.style.opacity = 0;
    document.documentElement.style.overflow = "auto";
    setTimeout(() => {
      loader.style.display = "none";
    }, 800);
  }, 1000);
}
