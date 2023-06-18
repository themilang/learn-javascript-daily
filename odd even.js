const y=prompt("Enter the number"); // always take a input in the string form 
console.log(typeof parseInt(y)); //change from string to number or by parseint
console.log(typeof y); // unchanged type


if (y<0 && y%2==0){
    alert(`the number ${y} is negative and even`)
}

else if  (y<0 &&  y%2 !=0){
    alert(` the given value ${y} is negative and odd`)

}
else if(y>0 && y%2==0){
    alert(`the given value ${y} is positive and even`)
}
else{
    alert( `the given value ${y} is positive and odd`)
}