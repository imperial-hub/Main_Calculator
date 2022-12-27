function fun(ch){
    var str=document.getElementById("outputs").value;
    str=str+ch;
    document.getElementById('outputs').value = str;
}
function funclear() {
    document.getElementById('outputs').value = '';
    str="";
}
function funeq() {
    var str=document.getElementById("outputs").value;
    var res=eval(str);
    document.getElementById('outputs').value = res;
    console.log(res);
}
