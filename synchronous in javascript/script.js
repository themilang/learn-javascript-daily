// // // // // console.log('first')
// // // // // setTimeout(()=>{
// // // // //     console.log('second');

// // // // // },2000);
// // // // // console.log('third')

// // // // function sum(a,b){
// // // //     console.log(a+b);
// // // // }
// // // // sum(1,2);
// // // // // 


// // // // callback hell 


// // // function sum(a,b,callback){
// // //     console.log(a+b);
// // //     callback(a,b,mul);
// // // }


// // // //callback is process of calling the whole function 

// // // function sub(a,b,callback){
// // //     console.log(a-b);
// // //     callback(a,b,div)
// // // };
// // // function mul (a,b,callback)
// // // {
// // //     console.log(a*b);
// // //     callback(a,b);
// // // };
// // // function div(a,b) {
// // //     console.log(a/b);
// // // }

// // // sum(45,6,sub);
// // fetch('https://jsonplaceholder.typicode.com/todos').then((response)=>{
// //     // console.log(response.json);
// //     return response.json()
// // }).then((data)=>{
// //     console.log(data);
// // }).catch((err)=>{
// //     console.log('err');
// // })




// //axios ma chai ekai choti ma data return hunthyo 

// // fetch ma chai promise nai return huncha
// const concatestr = (a,b) =>{ 
//     return  new Promise((accept,reject)=>{
       
//        if(a !==undefined || b !==undefined){
//         accept(a+b);
//     }
//         else{
//         reject('error while concating the strings');
//         }
//     });}

// concatestr().then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// // fetch('https://dummyjson.com/docs/todos').then((response)=>{
// //     return response.json();
// // }).then((data)=>{
// //     console.log(data);
// // }).catch((err)=>{
// //     console('err');
// // })


// const gettododata = async (url) =>{
//    const response= await fetch(url);
//    const data = await response.json();
//    console.log(data);
// }
// gettododata('https://dummyjson.com/docs/todos');

















