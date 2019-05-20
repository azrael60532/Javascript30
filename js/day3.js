(function(){
  
  const inputs = document.querySelectorAll('.controls input');

  inputs.forEach((input)=>{
    input.addEventListener('change',changeHandler);
    input.addEventListener('mousemove',changeHandler);
  })

  function changeHandler(){
    let unit = this.dataset.sizing || '';
    console.log(this.value)
    document.querySelector(':root').style.setProperty('--'+this.name,this.value + unit)
  }


})()