let chooseBtn=document.getElementById('choose')
let inputt=document.getElementsByClassName('clas')[0]
//pastdagilar ishlatiladi
let h22=document.getElementsByTagName('h2')[0]
let btn=document.querySelector('.clas')
let btnn=document.querySelectorAll('.clas')
let messageee=document.getElementsByName('messagee')[0]
console.log(btn);
console.log(btnn);

// textContent, addEventListener, mouseenter
function hoverr(){
   h22.textContent='Assalomu alaykum'
}

h22.addEventListener('mouseenter',hoverr)
h22.addEventListener('mouseleave',function(){
   h22.textContent='Hello1'
})

//input, messageee.value = btn.value
btn.addEventListener('input',function(){
   messageee.value=`My name is ${btn.value} and i want: `
})

//style
messageee.style.background='yellow'