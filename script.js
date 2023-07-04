const text=document.querySelector("#sec");
const textload=()=>{
    setTimeout(()=>{
        text.textContent="Developer";
    },0);
    setTimeout(()=>{
        text.innerText="Freelancer";
    },6000);
    setTimeout(()=>{
        text.textContent="Designer";
    },12000);
    
}
textload();
setInterval(textload,18000);