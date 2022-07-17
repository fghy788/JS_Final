const timeset = () => {
  const hour = String(new Date().getHours()).padStart(2, "0");
  const minute = String(new Date().getMinutes()).padStart(2, "0");
  const second = String(new Date().getSeconds()).padStart(2, "0");

  document.querySelector("#clock").innerText = `${hour}:${minute}:${second}`;
};
const dateset = () => {
  const year = String(new Date().getFullYear()).padStart(4, "0");
  const month = String(new Date().getMonth()).padStart(2, "0");
  const day = String(new Date().getDay()).padStart(2, "0");

  document.querySelector("#date").innerText = `${year}년 ${month}월 ${day}일`;
};
timeset();
dateset();
setInterval(timeset, 1000);

const mylocation = (position) => {
  const str = document.querySelector("#weather");
  const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=37.481385&lon=126.9532208&appid=b331cc8614a2b55ec21e133971e76935&units=metric`;
  fetch(weather_url)
    .then((response) => response.json())
    .then((data) => {
      str.innerText = `${data.name}'s weather is ${data.weather[0].main} and ${data.main.temp} deg`;
    });
};
const mylocation_error = (position) => {
  document.querySelector("#weather").innerText = "오류로 인해 날씨를 표시할 수 없습니다.";
};

navigator.geolocation.getCurrentPosition(mylocation, mylocation_error);
