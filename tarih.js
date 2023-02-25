function timeWrite()
{
var nowTime=new Date().toLocaleString();
var footer=document.getElementById("time");
console.log(nowTime);
footer.innerText=nowTime;
}