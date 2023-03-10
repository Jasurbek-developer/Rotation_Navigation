const menu=document.getElementById("open")
const iks=document.getElementById("close")
const container=document.querySelector(".container")

menu.addEventListener("click",()=>{
    container.classList.add("show-nav")
})
iks.addEventListener("click",()=>{
    container.classList.remove("show-nav")
})