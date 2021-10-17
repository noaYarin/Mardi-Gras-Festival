/*popup on mouse hover- index page*/ 
let popwrap = document.getElementById("popwrap");
let text = document.getElementById("text");
let close = document.querySelector("button");

 text.addEventListener('mouseover', () => {
    popwrap.style.display = "block"
}); close.addEventListener('click', () => {   
    popwrap.style.display = "none"
});
 popwrap.addEventListener('click', (e) => {
popwrap.style.display = "none"
});

let send = document.getElementById("send").addEventListener('click',()=>{
    let umail = document.getElementById("umail");
    let mas = document.getElementById("mes");
    if(umail.value.indexOf("@") == -1 || umail.value.indexOf(".") == -1){
       mas.innerHTML = "please write valid email";
       mas.style.marginTop = "10px";
       mes.style.fontFamily = "Henny Penny";
       mes.style.fontSize = "1rem";
       mes.fontWeight = "bolder";
    }else{
       mas.innerHTML = "the message was sent successfully"
       mas.style.marginTop = "10px";
       mes.style.fontFamily = "Henny Penny";
       mes.style.fontSize = "1rem";
       mes.fontWeight = "bolder";
    }
});
