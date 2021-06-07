
function contar(){
    let multi = document.getElementById("multi")
    let setab = document.getElementById("setab")
    
    if(multi.value.length == 0){
        alert("Por favor insira um número!")
        
        
    }else{
        let m = Number(multi.value)
        setab.innerHTML = ""                 
     
        for(let c = 1; c <= 10; c++){
            
            let item = document.createElement("option")
            item.text = `${m} x ${c} = ${m*c}`
            item.value = `tab${c}`

            setab.appendChild(item)
            
        }
    }    
}    
  
    
    
 
