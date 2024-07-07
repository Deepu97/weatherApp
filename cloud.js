async function cloud() {
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=33ee3c7cccab95f3137d520d76fe1624";


    const city=document.getElementById('inp').value;
    const hello=apiurl+`&q=${city}`;
    console.log(city);
    const data = await fetch(hello);
    const res = await data.json();
    console.log(await res);
    const a = document.getElementById('country');
    a.innerHTML = res.name;
    const tem=document.getElementById('temp');
    tem.innerHTML= res.main.temp;
    const win = document.getElementById('wind1');
    win.innerHTML = res.wind.speed;
    const humid=document.getElementById("hum");
    humid.innerHTML=res.main.humidity+`%`;

}


cloud();