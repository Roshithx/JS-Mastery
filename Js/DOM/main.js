//getElementbyId()
const heading=document.getElementById('head')
console.log(heading);

//getElementbyClassName()
let listname=document.getElementsByClassName('list')
console.log(listname);

//getElementbyTagName()
let tagname=document.getElementsByTagName('div')
console.log(tagname);

//querySelector()

let container=document.querySelector('div')
console.log(container);

//querySelectorAll()

let containers=document.querySelectorAll('div')
console.log(container);


//Styling Elements
const title=document.querySelector('#head')
console.log(title);
// title.style.color="red"

//style multiple items
const listitems=document.querySelectorAll('.list')

for(i=0;i<listitems.length;i++){
    // listitems[i].style.color='green'
}


//Create Elements
const ul=document.querySelector('ul')
const li=document.createElement('li')

//Adding Eleemnt
ul.append(li)

//Modifing Text
li.innerText="Xmen"

//Modifying Attribute $ Classs
li.setAttribute('id','head')
li.removeAttribute('id')

const tit=document.querySelector('#head')

