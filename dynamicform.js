 const inputType=document.querySelector('#inputType');
 const lablevalue=document.querySelector('#labelValue');
 const form=document.querySelector("#form");

 lablevalue.addEventListener('keyup',(event)=>{
    const keypress=event.key;
    console.log(keypress);
    if (keypress==='Enter'){
       const type=inputType.value
       const lable=lablevalue.value;
       console.log(type,lable)
    const lableinput=document.createElement('label');
    const div = document.createElement(div);

    let input;
    if(type=='textarea')
    {
        input=document.createElement('textarea');
    }
    else{
        input=document.createElement('input')
    }
    
    lableinput.innerHTML=lable;
    inputType.innerHTML=type;
    input.classList.add('form-control')

    lableinput.classList.add(form-lable);
    div.classList.add("mb-3");
    di



    }
    
    
 })