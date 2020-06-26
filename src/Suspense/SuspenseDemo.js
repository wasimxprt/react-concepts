import React, {useState,useEffect} from 'react';

function SuspenseDemo(props) {
    const [name, setName] = useState("");

    useEffect( ()=>{

        const namePromise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Wasim")
            },3000)
        })

        namePromise.then((response)=>{
            setName(response);
        })

    },[])
    return (
        <div>
            Name is: {name}
        </div>
    );
}

export default SuspenseDemo;