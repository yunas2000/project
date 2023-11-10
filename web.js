 let typ1 = document.getElementById ("enter")
 let typ2= document. getElementById("addnow") 
 let typ3 = document.getElementById ("mahir")

function additams(){
    // alert("test");
    let datas =typ1.value;
    let li = document.createElement("li")
li.textContent =datas;
typ3.appendChild(li)
typ1.value="";
typ1.focus();
    console.log(li);
}

 typ2.addEventListener("click",additams)
 