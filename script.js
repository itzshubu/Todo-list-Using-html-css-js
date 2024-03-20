function myFunction(){
    this.value="name"
    var a = key.value
    var b = text.value
    localStorage.setItem(a,b)
    document.getElementById("main").innerHTML +=` <div class="main-div">${b}
    <button class="button">Delete Todo</button>
</div>`

let s = document.querySelectorAll(".button")
let i =0
while(i<s.length){
    console.log("hello")
 s[i].onclick = function(){
  this.parentNode.remove();
  console.log(this.value)
 }
 i++
}
}



