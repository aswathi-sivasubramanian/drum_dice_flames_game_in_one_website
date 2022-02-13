let randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;

randomNumber1 = Math.floor(randomNumber1);
randomNumber1 = randomNumber1 + 1;
let randoimage1 = "dice" + randomNumber1 + ".png";

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randoimage1);
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randoimage2 = "dice" + randomNumber2 + ".png";
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randoimage2);
let head = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  head.innerHTML = "WOW!!! player1 is the winner ";
} else if (randomNumber1 < randomNumber2) {
  head.innerHTML = "WOW!!! player2 is the winner ";
} else {
  head.innerHTML =
    "WOW!!! the luck is same for you both so share your victory ";
}
