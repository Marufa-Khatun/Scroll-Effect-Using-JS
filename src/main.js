// add scroll event 
const main=document.querySelector(".main");
const cat=document.querySelector(".cat");
const heading=document.querySelector(".main h1");
const catText=document.querySelector(".cat h2");
const forestText=document.querySelector(".forest h2");




document.onscroll=()=>{
    const scrollVal=window.scrollY;
    console.log(scrollVal);

    if(scrollVal<=250){
        heading.style.transform=`translate(0px,${scrollVal}px)`;
    }else{
        heading.style.transform=`translate(0px, 250px);`
        
    }

    if(scrollVal>=main.clientHeight && scrollVal < 900){
        catText.style.transform=`translate(0px,${scrollVal - main.clientHeight}px)`;
        console.log("Run Cat");
    }
    
    if(scrollVal>=1000){
        catText.style.transform=`translate(0px, ${900 - main.clientHeight}px);`
        console.log("Stop Cat");
    }


    if(scrollVal>=main.clientHeight + cat.clientHeight  && scrollVal < 1500){
        forestText.style.transform=`translate(0px,${scrollVal - (main.clientHeight + main.clientHeight)}px)`;
        console.log("Run Forest");
    }

    if(scrollVal>=1500){
        forestText.style.transform=`translate(0px, ${1500 - (main.clientHeight + main.clientHeight)}px);`
        console.log("Stop Forest");
    }

   


   //heading.style.transform=`translate(${scrollVal}px, 0px)`
   //heading.style.transform=`rotate(${scrollVal}deg)`;
}