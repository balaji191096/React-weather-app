import './App.css';
import InputField from './components/Input';
import {useState} from "react";
import axios from 'axios';
import Result from "./components/Result"

function App() {
  const [input, setInput] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");

  const findWeather = async() => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=39cf669633aa6a986148de6f63e54f40&units=metric`
     const res = await axios.get(url)
    const temp = await res.data.main.temp;
    const desc = await res.data.weather[0].description;
    const icon = await res.data.weather[0].icon;
     const imageUrl =`http://openweathermap.org/img/wn/${icon}@2x.png`
    setTemp(temp);
    setDesc(desc);
    setIcon(imageUrl)
   setInput("")
   
  }
  return (
    <div className="App">
     {temp ==="" ? <InputField setInput ={setInput} input ={input} findWeather={findWeather}/> :
      <Result temp={temp} desc={desc} icon={icon}/>}
    </div>
  );
}

export default App;
