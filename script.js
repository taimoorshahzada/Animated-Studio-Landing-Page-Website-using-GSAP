/** @format */
const tl = gsap.timeline();
tl.from(".left-side-container img", {
  y: "-100%",
  duration: 2.5,
  transform: "scale(1, .9)",
  delay: 1,
});
tl.from(
  ".right-side-container img",
  {
    y: 400,
    duration: 2.5,
    transform: "scale(1.5,1.3)",
    stagger: {
      amount: 1.4,
    },
  },
  "-=2.5"
);
tl.from(
  ".right-side-container h6",
  {
    y: 500,
    duration: 2,
  },
  "-=2.5"
);

let innerTextContent = document.getElementById("innerTextContent");
function contentChange(el) {
  if (el.id === "img1") {
    finalAnimation(el.id, "Le Oh Diva Impulse No1");
  } else if (el.id === "img2") {
    finalAnimation(el.id, "Le Oh Flash Beige");
  } else if (el.id === "img3") {
    finalAnimation(el.id, "Botanic Apache No2");
  } else if (el.id === "img4") {
    finalAnimation(el.id, "Jeroen De Ruddere No5");
  } else if (el.id === "img5") {
    finalAnimation(el.id, "Le Oh Botanic Bright White");
  }
}

function finalAnimation(id, text) {
  let imgspan = document.getElementById("left-side-img-span");
  innerTextContent.innerText = text;
  let img = document.createElement("img");
  img.src = `./images/${id}.jpg`;
  imgspan.appendChild(img);
  var imgTags = imgspan.querySelectorAll("img");
  var lastImgTag = imgTags[imgTags.length - 1];
  gsap.from(lastImgTag, {
    y: -800,
    duration: 2,
    transform: "scale(1,0.8)",
    ease: "Power3.easeOut",
  });
}
