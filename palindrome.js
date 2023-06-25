const userinput=prompt("Enter the number to check is palindrome or not")
let userinput1;

if (typeof userinput=='number'){
   
    userinput1=userinput.tostring();
}
else{
    userinput1=userinput;
}

let reverse='';
for(let i = userinput1.length-1 ; i>=0;i--){
   reverse=reverse+userinput1[i];
}
//if(reverse==userinput1) alert('palindrome')
//else alert('not palindrime')

reverse==userinput1?console.log(userinput1 , "palingrome"):console.log(userinput1,"not palindrome")

//arrow function
const sumtwonums = (num1 , num2) => {

   return num1+num2
}

sum=sumtwonums(5 ,5)
console.log(sum)


console.log(test)
var test;