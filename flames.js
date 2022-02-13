// function submitbtn() {
//   let grlname = document.getElementsByClassName("t1")[0].value;
//   let boyname = document.getElementsByClassName("t2")[0].value;

//   let t1 = (document.querySelector("h1").textContent = "loading❤️");
//   // setTimeout(submitbtn(), 10);
//   calculate();
// }
function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}
function flames() {
  var res = document.getElementById("output");
  let a = document.getElementsByClassName("t1")[0].value;
  let b = document.getElementsByClassName("t2")[0].value;
  let gn = document.getElementsByClassName("t1")[0].value;
  let bn = document.getElementsByClassName("t2")[0].value;

  if (a != "" && b != "") {
    for (i = 0; i < a.length; i++) {
      for (j = 0; j < b.length; j++) {
        if (a[i] == b[j]) {
          a = replaceAt(a, i, "*");
          b = replaceAt(b, j, "*");
        }
      }
    }
    var countLetters = 0;
    for (i = 0; i < a.length; i++) {
      if (a[i] != "*") {
        countLetters++;
      }
    }
    for (i = 0; i < b.length; i++) {
      if (b[i] != "*") {
        countLetters++;
      }
    }
    if (countLetters > 1) {
      var flames = "FLAMES";
      c = 0;
      l = 1;
      for (i = 0; flames.length != 1; i++) {
        if (l == countLetters) {
          if (c >= flames.length) {
            c = 0;
          }
          flames = replaceAt(flames, c, "");
          l = 1;
        }
        if (c >= flames.length) {
          c = 0;
        }
        l++;
        c++;
      }

      switch (flames) {
        case "F":
          flames = "Friend";
          break;
        case "L":
          flames = "Love";
          break;
        case "A":
          flames = "Affection";
          break;
        case "M":
          flames = "Marriage";
          break;
        case "E":
          flames = "Enemies";
          break;
        case "S":
          flames = "Sibling";
          break;
      }
    }
    if (countLetters === 1) {
      flames = "Sibling";
    }
    if (countLetters === 0) {
      flames = "Its Same Name";
    }
    return (res.innerHTML =
      "Hey " + gn + " and " + bn + "'s" + " result is " + flames);
  } else {
    return (res.innerHTML = "Please Enter Name");
  }
}
