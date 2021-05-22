let createButton = document.getElementById("createBtnM")
let welcome = document.getElementById("hidden1")
let wallet = document.getElementById("hidden2")
let balance = document.getElementById("balance")
let walletsNameDrop = document.getElementById("walletsNames")
let walletBalance = document.getElementById("walletBalance")
// removes welcome page when new wallet is added
createButton.addEventListener("click", (e)=>{
    e.preventDefault()
    welcome.classList.add("d-none")
    wallet.classList.remove("d-none")
    walletsNameDrop.classList.remove("d-none")
});

class Wallet {
    constructor(name, currency, balance = 0, desc) {
        this.name = name;
        this.currency = currency;
        this.balance = balance;
        this.desc = desc;
    }

    get balance(){
        return this.balance;
    }

    set balance(bal) {
        this.balance = bal;
    }

    render(){
        console.log(balance())
        walletBalance.innerHTML += balance()
    }
}



class Transaction {

}


class Expense {

}

class Income {

}

class Currency {
    
}
