var a = document.querySelector(".header")
var b = ["1.webp","3.webp","4.webp","5.webp","6.webp","7.webp","8.webp"]



function displayHello() {
    var c = Math.floor(Math.random()*7) 
console.log(c)
a.style.backgroundImage = `url(${b[c]})`
  }
  setInterval(displayHello, 3000);




