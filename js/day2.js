(function(){
  
  const second = document.querySelector('.second');
  const minute = document.querySelector('.minute');
  const hour = document.querySelector('.hour');

  function setClock(){
    let data = new Date();
    let secondDeg = data.getSeconds() * 6;
    let minuteDeg = data.getMinutes() * 6 + data.getSeconds() * 6 / 60;
    let hourDeg = data.getHours() * 30 + data.getMinutes() * 30 / 60;

    second.style.transform = `rotate(${secondDeg}deg)`
    minute.style.transform = `rotate(${minuteDeg}deg)`
    hour.style.transform = `rotate(${hourDeg}deg)`

  }

  function animateHandler(){
    setClock();
    window.requestAnimationFrame(animateHandler);
  }

  window.requestAnimationFrame(animateHandler);


})()