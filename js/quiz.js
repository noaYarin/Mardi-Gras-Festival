
let count = 0;
let stop =0;

let btn = document.getElementById("btn").addEventListener('click',function(){
let ans1 = document.getElementById("one");
let ans2 = document.getElementById("two");
let ans3 = document.getElementById("three");
let ans4 = document.getElementById("four");
let ans5 = document.getElementById("five");
let ans6 = document.getElementById("six");
let ans7 = document.getElementById("seven");
let ans8 = document.getElementById("eight");
let ans9 = document.getElementById("nine");
let ans10 = document.getElementById("ten");
let show = document.getElementById("show");

let flag = true;

if(flag == ans1.checked){
    count++
}
if(flag == ans2.checked){
    count++
}
if(flag == ans3.checked){
    count++
}
if(flag == ans4.checked){
    count++
}
if(flag == ans5.checked){
    count++
}
if(flag == ans6.checked){
    count++
}
if(flag == ans7.checked){
    count++
}
if(flag == ans8.checked){
    count++
}
if(flag == ans9.checked){
    count++
}
if(flag == ans10.checked){
    count++
}

/*Days until maedi gars*/
let datepast = new Date("2022-03-01");
let now = new Date();
let sec = (datepast.valueOf() / 1000) - (now.valueOf() / 1000);
let days = Math.floor(sec / (60 * 60 * 24));


if(count <8){
show.innerHTML = `Your score is: ${count} <br> Dont worry, you have ${days} days until the next Mardi-Gras. <br> So go and learn again!` 
}else{
show.innerHTML = `Your score is: ${count} <br> Amazing!!!`  
}

show.style.fontFamily = "Henny Penny";
show.style.fontSize = "1rem";
show.style.fontWeight = "bolder";

stop++

if(stop==1){
    document.getElementById("btn").disabled = true;
}
});






