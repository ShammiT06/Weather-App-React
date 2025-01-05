import axios from "axios"
import { useState } from "react"
function Weather()
{
    const [userip,setuserip]=useState("")
    const [cloud,setcloud]=useState("")
    const [weather,setweather]=useState("")
    const [temperature,settemp]=useState("")
    const [speed,setspeed]=useState("")
    const [info,setinfo]=useState("")



    function citie(eve)
    {
        setuserip(eve.target.value)
    }

    function getweather()
    {
        var weatreport=axios(`https://api.openweathermap.org/data/2.5/weather?q=${userip}&appid=615831b6cdfc7969a931531089ebd849`)

        weatreport.then((wep)=>{
            setuserip("")
            setcloud(wep.data.name)
            setweather(wep.data.weather[0].main)
            settemp(wep.data.main.temp)
            setspeed(wep.data.wind.speed)
            setinfo(wep.data.weather[0].description)
        })
    }



    return(<div className="bg-red-100 flex justify-center items-center">
        <div className="m-20 p-10 bg-gray-600 w-[400px] h-[590px]  bg-opacity-25 border rounded-2xl">
            <h1 className="text-3xl font-serif text-center font-bold m-2 text-orange-400">Weather Report <p className="animate-bounce">⛅</p></h1>
            <p className="text-s font-mono text-center font-bold text-red-600">I can Give You Weather Report About Your City</p>
            <div className="flex flex-wrap justify-center items-center m-2">
            <input type='text' placeholder="Enter Your City" onChange={citie} value={userip} className="p-2 w-60 focus:outline-none text-black bg-white bg-opacity-30 border border-black rounded-md"/>
            <button onClick={getweather} className="bg-black text-white p-2 mt-4 rounded-lg animate-bounce">Search</button>
            </div>
            <div className="flex justify-center m-5  flex-wrap">
                <div className="bg-black text-white bg-opacity-25 p-2 rounded-md flex items-center">
                <img width="48" height="48" src="https://img.icons8.com/color/48/marker--v1.png" alt="marker--v1"/>
                <h1 className="text-2xl font-serif font-bold">{cloud}</h1>
                </div>
            </div>
            <div className="flex justify-between m-10">
            <div className="flex items-center gap-1  bg-black text-white bg-opacity-25 rounded-xl p-2">    
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/partly-cloudy-day.png" alt="partly-cloudy-day"/>
            <h1>{weather}</h1>
            </div>
            <div className="flex items-center gap-1  bg-black text-white bg-opacity-25 rounded-xl p-2">    
            <img width="50" height="50" src="https://img.icons8.com/stickers/50/temperature.png" alt="temperature"/>
            <h1>{temperature}</h1>
            </div>
            </div>
            <div className="flex justify-between gap-3 m-10 ">
            <div className="flex items-center  bg-black text-white p-2 rounded-xl bg-opacity-25">    
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/info-squared.png" alt="info-squared"/>
            <h1>{info}</h1>
            </div>
           
            <div className="flex items-center gap-1  bg-black text-white p-2 rounded-xl bg-opacity-25">    
            <img width="48" height="48" src="https://img.icons8.com/color/48/wind.png" alt="wind"/>
            <h1>{speed}</h1>
            </div>
            </div>

           

        </div>
    </div>)

}

export default Weather