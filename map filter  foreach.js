let students = ['milan' ,'Ram Ghimire','hari ghimire'];

students.forEach((value,index,arr) => {
console.log(value,index,arr);
})
students.map((value, index,arr) => {
    console.log(value,index);
})

const stud=students.map((value,index,arr) => {
  if (value==='milan'){
    return 'milan ghimire'
  }
  else{
    return value;
  }

})
console.log(stud)
console.log(students)
// slice method

let discription=['This is the best selling product in the market . The storage capacity is 256 GB and the RAM is 16 GB . The display is liquid retina display '];
console.log(discription[0].length);

 const summerized = discription.map((value,index,arr) => {
    if (discription[0].length > 50)
    {
        return(discription[0].slice(0,50))
    }
    else{
        return (value)
    }
})
console.log(summerized)