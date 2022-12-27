let codes = document.getElementById("cods");
let run = document.getElementById("run");
let delet = document.getElementById("delet");
let res = document.getElementById("res");

run.onclick = ()=>{
    res.innerHTML =codes.value;
    localStorage.setItem("Result",codes.value);
};
delet.onclick =()=>{
    res.innerHTML="";
};

