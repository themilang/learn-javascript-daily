
// const data={
//     productname:"new iphone 15"
// }




// const postdata= async (url , postdata) =>{
//     const response=await fetch(url,{
//         headers:{
//             'content-type':"application/json"},
//             method:"POST",
//             body:json.stringify(postdata)});
//             const data= await response.json();
//             console.log(data);
//         }
    
// postdata ("https://jsonplaceholder.typicode.com/todos",data)






const data={
    productname:"iphone14"
}
const getdata=async (URL , datas) =>{
    const response=await fetch(URL,{
        headers:{
        'content-type':'webapplication/JSON',
        },
        method:"POST",
        body:JSON.stringify(datas)

    });
    const data=await response.json();
    console.log(data);

}
getdata("https://dummyjson.com/products/add",data)

























