function addOverlay() {
  var overlay = document.getElementById("connect-wallet-child");
  var body = document.getElementById("body");
  //body.style.opacity = "0.5";
  overlay.style.display = "block";
  overlay.style.opacity = "1";
}

function removeOverlay() {
  var overlay = document.getElementById("connect-wallet-child");
  var body = document.getElementById("body");
  //body.style.opacity = "1";
  overlay.style.display = "none";  
}



// dapp connection myalgo tries

//const accountsSharedByUser = await myAlgoConnect.connect();
//const accounts = await myAlgoConnect.connect({ shouldSelectOneAccount: true });

async function connectAlgorand() {
  const myAlgoWallet = new MyAlgoConnect();
  try {
    //const accounts = await myAlgoWallet.connect();
    const accounts = await myAlgoWallet.connect();
    const addresses = accounts.map(account => account.address);
    alert(accounts, addresses);
    
  } catch (err) {
    console.error(err);
    alert("i died!!");
  }
}  

async function connect() {
  const myAlgoWallet = new MyAlgoConnect();  
  myAlgoWallet.connect().then((accounts) => {  
  console.log(accounts);  
  })
  .catch((err) => {  
    console.error(err);
    alert("poof");    
  });
}

const connectToMyAlgo = async(myAlgoWallet) => {
    try {
        const accounts = await myAlgoWallet.connect();
        console.log(accounts);
    }
    catch (err) {
        console.error(err);
    }
}