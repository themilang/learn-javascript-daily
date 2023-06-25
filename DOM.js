//dom is object that is use to acess all the html 
document.title='milan ghimire'


//5 ways


//getelementbyid
console.log(document.getElementById('container'));


//get element by classes  -->> returns html collection


console.log(document.getElementsByClassName('container'));


//get element by tag name

console.log(document.getElementsByTagName('h3'))

//query selector -->> returns single but only first 

console.log(document.querySelector('.container'));
console.log(document.querySelector('h3'));


//query selector all
console.log(document.querySelectorAll('.container'));



//acessing element
document.getElementById('container').innerHTML=`<h1>container22</h1>`