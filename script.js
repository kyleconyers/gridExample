// const leftSide = document.querySelector('#leftSide');




// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);
const leftDiv = document.getElementById('leftSidebar'); 
const centerWindow = document.getElementById('centerWindow') 
// const btn = document.querySelector('#sandwichPng');
// btn.onclick = () => alert("Hello World");
// btn.onclick = () => leftDiv.classList.toggle('sandwichTarget')
document.getElementById("sandwichPng").addEventListener("click", myFunctionOne);
// document.addEventListener("click", myFunction);
function myFunction(){
    console.log("inTarget")
}
function myFunctionOne() {
    console.log("intarget")
    console.log(leftDiv)
    console.log(leftDiv.classList)
  // leftDiv.classList.toggle('sandwichTarget')
  // leftDiv.classList.toggle('sandwhichTargetClicked')
  leftDiv.classList.toggle('sidebarDisplay')
  centerWindow.classList.toggle('centerDisplay')
  centerWindow.classList.toggle('centerDisplayClicked')
  
//   document.getElementById("demo").innerHTML = "Hello World";
}

// document.getElementById("test").addEventListener("click", twoFunction);

// function twoFunction(){
//     console.log("twofunc")
// }