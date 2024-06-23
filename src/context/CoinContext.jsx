import { createContext, useEffect, useState } from "react";


export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    const [allCoin, setAllCoin] = useState([])
    /*we get data from api in form of array and it is stored here in allCoin state */
    const [currency, setCurrency] = useState({
        name: 'USD',
        symbol: '$'
    })
    /*by default currency and the symbol will be in Dollers so this state variable is created where we
    have initialised state variable with this object whith two propertise name and symbol*/

    const fetchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-tJfcvCMZt2sd2yGxTviymLn9' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response =>  setAllCoin(response))
            .catch(err => console.error(err));
    }
    useEffect(()=>{fetchAllCoin();},[currency])

    const ContextValue = {
allCoin, currency, setCurrency

    }
    return (
        <CoinContext.Provider value={ContextValue}>
            {props.children}
        </CoinContext.Provider>

    )

}

export default CoinContextProvider;