// const number=8

// localStorage.removeItem('number')

// console.log(localStorage.getItem('number'));
// localStorage.setItem('number',number)
// console.log(localStorage.getItem('number'));

// localStorage.clear()


const persone={
   name:'Umidjon', 
   age:22
}

// localStorage.setItem('persone',persone.toString())

// const json=JSON.stringify(persone)
// console.log(json);

// const obj=JSON.parse(json)
// console.log(obj);

localStorage.setItem('persone',JSON.stringify(persone))//localda chiqadi

let localData=localStorage.getItem('persone')
// console.log(JSON.parse(localData)); //consoleda

// localData.name='Yusuf'//ozgartirib bomidi

const personInfo=JSON.parse(localData)//consoleda ozgartirish
personInfo.name="Yusuf"
console.log(personInfo);

localStorage.setItem('persone',JSON.stringify(personInfo))//localda ozgartirish 25-qatordagidek

