import React from 'react'

const Result = ({temp, desc, icon, setTemp}) => {

    return (
        <div>
            <h1>Result</h1>
            <h3>{temp}</h3>
            <h3>{desc}</h3>
            <img src={icon} alt="logo" />
            <br />

            <button onClick ={()=>setTemp("")}>Back</button>
            
        </div>
    )
}

export default Result
