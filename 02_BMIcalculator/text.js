const form = document.querySelector('form')
// This use case will give you empty value
// const height =  parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

   const height =  parseInt(document.querySelector('#height').value);
   const weight =  parseInt(document.querySelector('#weight').value);
   const results = document.querySelector('#results');
   const message = document.querySelector('#message');

   if(height === '' || height<0 || isNaN(height)){
    results.innerHTML = `Please Give a valid Height ${height}`; 
   }
   else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML = `Please Give a valid weight ${weight}`; 
   }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    // show the result
    results.innerHTML = `<span> ${bmi} </span>`
    const result = results.textContent

    if( result < 18.6){
        message.innerHTML = `<span> Under Weight </span>`
       
    }
    else if(result>=18.6 &&  result <= 24.9){
        message.textContent = `Normal Weight `
        
    }
    else if( result > 24.9){
        message.innerHTML = `<span>Overweight</span>`
        
    }
    
  }
})
