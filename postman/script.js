
const data={
    productname:"new iphone 15"
}




const postdata= async (url , postdata) =>{
    const response=await fetch(url,{
        headers:{
            'content-type':"application/json"},
            method:"POST",
            body:json.stringify(postdata)});
            const data= await response.json();
            console.log(data);
        }
    
postdata ("https://jsonplaceholder.typicode.com/todos",data)