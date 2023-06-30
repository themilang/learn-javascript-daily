const arr=[{id:1},{id:2},{id:3},{id:4}]
arr.push({id:5});
console.log(arr);
arr.pop(arr);
console.log(arr)
arr.shift();
console.log('shifted',arr);
arr.unshift({id:0});
console.log('array is unshifted',arr)


const str='abc';
const data=[1, 2, 3, 4, 5 ];
const revdata=data.reverse();
console.log(revdata);


//any string to array form

const name='madam';
const arrayname=name.split('');
console.log('new array by data ', arrayname);
console.log(arrayname.reverse())
const joinedarraystr=arrayname.join('');
console.log(joinedarraystr);

if (joinedarraystr===name){
    console.log('palindrome')
}
else{
    console.log("not palindrome")
}
