const weatherbtn = document.querySelector('.weatherbtn');
const historybtn = document.querySelector('.historybtn');
const forecastbtn = document.querySelector('.forecastbtn');
const weathercode = document.querySelector('.weather_code');
const historycode = document.querySelector('.history_code');
const forecastcode = document.querySelector('.forecast_code');

weatherbtn.addEventListener('click', function (event) {
    event.preventDefault();
    weathercode.style.display = 'block';
    historycode.style.display = 'none';
    forecastcode.style.display = 'none';

    // 添加 'active' 类到当前按钮，移除其他按钮的 'active' 类
    weatherbtn.classList.add('active');
    historybtn.classList.remove('active');
    forecastbtn.classList.remove('active');
});

historybtn.addEventListener('click', function (event) {
    event.preventDefault();
    weathercode.style.display = 'none';
    historycode.style.display = 'block';
    forecastcode.style.display = 'none';

    // 添加 'active' 类到当前按钮，移除其他按钮的 'active' 类
    weatherbtn.classList.remove('active');
    historybtn.classList.add('active');
    forecastbtn.classList.remove('active');
});

forecastbtn.addEventListener('click', function (event) {
    event.preventDefault();
    weathercode.style.display = 'none';
    historycode.style.display = 'none';
    forecastcode.style.display = 'block';

    // 添加 'active' 类到当前按钮，移除其他按钮的 'active' 类
    weatherbtn.classList.remove('active');
    historybtn.classList.remove('active');
    forecastbtn.classList.add('active');
});
