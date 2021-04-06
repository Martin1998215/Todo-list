const check = document.querySelector('.check').value;
const submitBtn = document.querySelector('.sub1');
const ul = document.querySelector('.ul');
const li = document.querySelector('.li');
const btn = document.querySelector('.btn1');
const result = document.querySelector('.search');
const innermost = document.querySelector('.innermost');
const cont = document.querySelector('.counter');
let counter = 1;
submitBtn.addEventListener('click', addList);
ul.addEventListener('click', removeItem);
result.addEventListener('keyup', seek);

// function to add an item
function addList() {

  const check = document.querySelector('.check');
  if (check.value === '') {
    alert('Input box must be filled!');
  } else {
    let li = document.createElement('li');
    li.className = 'li';
    let text = document.createElement('i');
    text.className = 'text';
    text.innerHTML = check.value;
    // li.appendChild(document.createTextNode(check));
    let btn = document.createElement('img');
    btn.className = 'btn1';
    btn.src = 'del2.png';
    li.appendChild(text);
    li.appendChild(btn);
    ul.appendChild(li);

    check.value = '';
    cont.innerHTML = ++counter;

  }

}

// function to remove an item
function removeItem(e) {

  let item = e.target;
  if (item.classList.contains('btn1')) {
    if (confirm('Are You Sure?')) {
      let itemValue = e.target.parentElement;
      cont.innerHTML = --counter;
      ul.removeChild(itemValue);
    }
  }
}

// function to search for an item
function seek() {
  //get input value
  let result = document.querySelector('.search').value.toLowerCase();

  let li = ul.getElementsByTagName('li');

  for (let i = 0; i < li.length; i++) {

    let item = li[i].firstChild.textContent;
    //let item = li[i];
    if (item.toLowerCase().indexOf(result) != -1) {
      li[i].style.display = 'block';
    } else {
      li[i].style.display = 'none';
    }
  }
}