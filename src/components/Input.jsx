import React from 'react'

const InputField = ({setInput,input,findWeather}) => {

const functionCall =() => {
    findWeather()
}
    return (
        <div>
            <h1>Weather App</h1>
            <p>Powered By Google</p>
            <input type= "text" onChange={(e) => setInput(e.target.value)} value ={input}/>
            <br />
            <button onClick={functionCall}>Search</button>
        </div>
    )
}

export default InputField;
