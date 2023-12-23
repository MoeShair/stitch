const nobutton = document.getElementById("noButton")
const yesButton = document.getElementById("yesButton")
const question = document.getElementById("texto")
const body = document.getElementById("body")

nobutton.addEventListener("mouseenter", function(){
    nobutton.style.position = "absolute"
    nobutton.style.left = `${Math.ceil(Math.random() * 90)}%`;
    nobutton.style.top = `${Math.ceil(Math.random() * 90)}%`;
})

yesButton.addEventListener("click", function(){
    question.innerHTML= "😎 I knew it, Who dont 😎"
    body.style.backgroundImage = "url('stito.gif')"
    nobutton.style.visibility = "hidden"

})