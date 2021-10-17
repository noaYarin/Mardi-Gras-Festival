// contact page

let button=document.getElementById("btn").addEventListener('click',function(){

 let uname = document.getElementById("myname");
 let luname = document.getElementById("mylast");
 let uemail = document.getElementById("myemail");
 let check = document.getElementById("mycheck");
 let newwin = window.open("","submit","width=400,height=200");

if(uname.value.length < 2 || luname.value.length < 2 ){
alert("Your full name is too short! please write again");
return;
}

if(uemail.value.indexOf("@") == -1 || uemail.value.indexOf(".") == -1){
alert("Please enter valid email!");
return;

}
if(check.checked == false){
alert("You must agree before submitting ");
return;
}

else{
newwin.document.write("Hello " + " " + uname.value + "," +  "<br>" + " The form was submitted successfully ");
}

});




