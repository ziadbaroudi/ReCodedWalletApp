let createButton = document.getElementById("createBtnM")
let walletName = document.getElementById("walletName")
let balance = document.getElementById("balance")
let desc = document.getElementById("desc")
let container1 = document.getElementById("hidden1")
let container2 = document.getElementById("hidden2")
let walletsNameDrop = document.getElementById("walletsNames")
createButton.addEventListener('click', (e)=>{
    e.preventDefault()
    container1.classList.add("d-none")
    container2.classList.remove("d-none")
    walletsNameDrop.classList.remove("d-none")
    console.log(desc.value);
})

