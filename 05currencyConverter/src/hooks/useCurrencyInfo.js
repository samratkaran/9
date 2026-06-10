import { useEffect, useState } from 'react'

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({})
 useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=>res.json())
    .then((res)=>setData(res[currency]))
   
 },[currency])
 console.log(data , 'this is value')
 return data 
 
}

export default useCurrencyInfo
