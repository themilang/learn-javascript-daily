 y=1323;

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