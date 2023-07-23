// // // // const getdata = async (URL) =>{
// // // // const response = await fetch(URL);
// // // // const data = await response.json();
// // // // console.log(data);
// // // // }
// // // // getdata ('https://dummyjson.com/docs/todos');



// // // async function getdata(){
// // //     const response= await fetch('https://dummyjson.com/docs/todos');
// // //     const data = await response.json();
// // //     console.log(response.json);
// // //     console.log(data);
// // // }
// // // getdata();

// // const getdata = async (URL) =>{
// //   const response= await fetch(URL);
// //   const data = await response.json();
// //   console.log(response)
// //   console.log(data);
// // }
// // getdata('https://jsonplaceholder.typicode.com/todos');


// const getdata = async(url)=>{
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('err')
//     }
// }

// getdata('https://jsonplaceholder.typicode.com/todos')



const fetchdata=(url,callback)=>{
 fetch(url).then((response) => response.json()).then((data)=>callback(data));
}
    const getdata =(data)=>{
        console.log(data);
    }

fetchdata('https://jsonplaceholder.typicode.com/todos',getdata);












