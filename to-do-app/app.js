let isDarkMode = true;
let light = document.querySelector('.light-theme')
const topInput = document.querySelector('.top-input');
const wrapper = document.querySelector('.wrapper');
const lightTop = document.querySelector('.light-top');
const darkTop = document.querySelector('.dark-top');
const btnContainer = document.querySelector('.bottom-header')
let counter = document.getElementById('items-left')
const list = document.querySelector('ul');


// const input = document.getElementById('input');
// input.addEventListener('keypress', handleInput);
// function handleInput(e){
//   if(e.key === "Enter"){
//     const target = e.taget.value;
//   }
// }


submit.addEventListener('click', handleSubmitClick)
btnContainer.addEventListener('click', handleImgSwap)

//ENTER KEYPRESS!!!
create.addEventListener('keypress', enter)
function enter (e){
  if (e.key=== 'Enter'){
    handleSubmitClick()
  }
}

function switchMode(e) {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    e.target.src = './images/icon-moon.svg'
    wrapper.classList.add('light-theme');
    darkTop.classList.remove('dark-top');
    darkTop.classList.add('light-top');
  }
  else {

    e.target.src = './images/icon-sun.svg';
    darkTop.classList.add('dark-top');
    darkTop.classList.remove('light-top');
    wrapper.classList.remove('light-theme');

  }
}

// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
//completed btn
const completed = document.getElementById('completed');
completed.addEventListener('click', function (ev) {
  for (let i = 0; i < list.children.length; i++) {
    if (!list.children[i].classList.contains('checked')) {
      list.children[i].style.display = 'none';
    }
    else {
      list.children[i].style.display = 'block'
    }
  }
});
//Active Btn
const active = document.getElementById('active');
active.addEventListener('click', function (ev) {
  for (let i = 0; i < list.children.length; i++) {
    if (!list.children[i].classList.contains('checked')) {
      list.children[i].style.display = 'block';
    }
    else {
      list.children[i].style.display = 'none';
    }
  }
});
//clear completed
const clearCompleted = document.getElementById('clear');
clearCompleted.addEventListener('click', function (ev) {
  for (let i = 0; i < list.children.length; i++) {
    if (!list.children[i].classList.contains('checked')) {
      list.children[i].style.display = 'block';
    }
    else {
      list.children[i].style.display = 'none'
    }
  }
});

//all
const all = document.getElementById('all');
all.addEventListener('click', function (ev) {
  for (i = 0; i < list.children.length; i++) {
    list.children[i].style.display = 'block';
  }
})

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
function closeMe(ev) {
  this.parentElement.remove();
  counter.textContent = `${list.children.length} items left`;
}

// Add a "checked" symbol when clicking on a list item
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// Create a new list item when clicking on the "Add" button
function newElement(ev) {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = closeMe;

  console.dir(close);
  counter.textContent = `${list.children.length} items left`;
}
