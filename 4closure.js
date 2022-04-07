// function calcFunction(number){
//    return function(){
//       console.log(1000*number);
//    }
// }

// // console.log(calcFunction(4)); //bomidi bunda
// const calc=calcFunction(3);
// calc() //ichki funksiyni caqirish
// // console.log(calc()); //yoki bu


// function calcFunction(number){
//    return function(n){
//       return n*number
//    }
// }

// const calc=calcFunction(10)
// console.log(calc(3)); 
// console.log(calc(4));


// function urlGenerator(domain){
//    return function(host){
//       return `https://${host}.${domain}`
//    }
// }  

// const comUrl=urlGenerator('com')
// console.log(comUrl('google'));
// console.log(comUrl('netflix'));

// const ruUrl=urlGenerator('ru')
// console.log(ruUrl('yandex'));
// console.log(ruUrl('ok'));

function personInfo(){
   console.log(`Name: ${this.name},age: ${this.age},job:${this.job}`);
}

const umidjon={
   name:'Umidjon',
   age:22,
   job:'Freelancer'
}

const yusuf={
   name:'Yusuf',
   age:19,
   job:'Front-End'
}

function bind(context,fn){
   return function(...args){
      fn.apply(context,args)
   }
}

// personInfo.call(umidjon)