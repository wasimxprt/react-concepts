import React, {useEffect, useState} from 'react';

function useFetch(url) {

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch(url)
        .then(response=>{
            setData(response.json())
        })
    },[])
    
    return data;
}

export default useFetch;