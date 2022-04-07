function sam(){
   console.log(this);
}

//object ichidagi this objectni oziga teng
const persone={
   name:'Yusuf',
   age:19,
   job1:'reactJS dev',

   functionn: sam,//funksiya chaqirilyapti
   function1: sam.bind(window),//sam funksiyasi windowga ulanyapti
   
   job:function(number){
      console.group(`${this.name} info: `);//guruhlash uchun
      console.log(`Name is ${this.name}`);
      console.log(`Age is ${this.age}`);
      console.log(`Job is ${this.job1}`);
      console.log(`Number is ${number}`);
      console.groupEnd();
   }
}

const frontendDev={
   name:'Umidjon',
   age:22,
   job1:'Front-End dev',
}

//persone.job.bind(frontendDev, '+99891-604-3911')() //persone ichidagi job funsiyasi frontend objectiga ulanyapti, yani frontendni fuksiya orqali chiqarish uchun, consolega chiqarish uchun esa chaqirish  kerak()
// persone.job.call(frontendDev,'+99891-604-3911')
persone.job.apply(frontendDev, ['+99891-604-3911'])


const arrayy=[10,20,30,40,50]

// function mult(arr,number){
//    return arr.map(function(i){
//       return i*number
//    })
// }

// console.log(mult(arrayy,12));

Array.prototype.multyBy=function(number){
   return this.map(function(i){
      return i*number
   })
}

// console.log(arayy.multyBy(2));