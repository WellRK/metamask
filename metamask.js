import React, {useState} from 'react';
import {ethers} from 'ethers';


const Metamask = () => {


    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);


    return(
        <div>

            <h1>Metamask Connenction </h1>
            
            <button onClick={}></button>

            <h3>Address:</h3>
            <h3>Balance:</h3>

        </div>





    )




}



export default Metamask;