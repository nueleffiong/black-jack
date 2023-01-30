
let countEl = document.getElementById("count-el")

let count = 0



let btn = document.getElementById("increment-btn")
btn.addEventListener("click",() =>{
   count++
   countEl.innerHTML = count
   console.log(countEl);
})

function save(){
    console.log(count);
}

 