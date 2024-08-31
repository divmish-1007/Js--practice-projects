const clock = document.getElementById('clock')

// Use Any One either getElementById or querySeleector
// Both will work similar

// const clock = document.querySelector('#clock')


// Time is always given in miliseconds 1sec=1000ms
// Always remeber the syntax of setInterval. may be you confused
setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)