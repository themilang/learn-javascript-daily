//event handler

//mouse handler : onclick ,  scroll , double click , mouse hover , mouse up down
// keyword : key press , key up and down (can work with both at a time )
//form event : focus and blur .........change and submit
// onfocus  

// const button = document.getElementById("Submitbtn");
// button.addEventListener('click',(event)=>{
//     console.log("clicked")
// })


// const clickbtn=document.getElementById('Submitbtn');




const clickbtn2=document.querySelector('#Submitbtn');

const handlesubmit = (event) =>{
    console.log("clicked");
    
}

clickbtn2.addEventListener('click',(event)=>{
    const naeme=document.querySelector('#name');
    console.log(naeme);
   
    
});

