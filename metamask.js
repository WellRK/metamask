import React, {useState} from 'react';
import {ethers} from 'ethers';


const Metamask = () => {


    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);


    const connectWallet = () => {

        if (window.ethereum){
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
                accountChanged([result[0]])
            })
        } else {
            setErrorMessage('Install Metamask please!')
        }
    }

    const accountChanged = (accountName) => {
        setDefaultAccount(accountName)

    }

    return(

        <div>

            <h1>Metamask Connenction </h1>
            
            <button onClick={connectWallet}>Connect Wallet Button</button>

            <h3>Address: {defaultAccount}</h3>
            <h3>Balance: $</h3>

            {errorMessage}
        </div>

    )   
}



export default Metamask;