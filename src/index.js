import App from '../containers/App.svelte';

const app = new App({
    target: document.querySelector('main')
});

export default app;

var i = 2;
var x = 0;
var b = 1;
while (x < 128) {
    x = i ** 2;
    console.log.log(`${i} * 2 = ${x} (2^${i})  ${b}`)
    i++;   
    b++;
}

Math.grados = function(radianes) {
    return radianes * 180 / Math.PI;
  };
  
  Math.radianes = function(grados) {
    return grados * Math.PI / 180;
  };

function X (number) {
    number = number / 180
    console.log("mach 1: " + number)
    
    number = Math.radianes(number)
    console.log("mach 2: " + number)

    number = Math.sin(number)
    console.log("mach 3: " + number)

    number = Math.grados(number)
    console.log("mach 4: " + number)

    return number;
}