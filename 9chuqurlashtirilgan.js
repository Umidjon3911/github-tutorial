//function constructor
function user(q,id){
   this.q=q
   this.id=id
   this.human=true
   this.hello=function(){
      console.log(`hello ${this.q}`);
   }
}

user.prototype.exitt=function(){
   console.log(`user ${this.q} exitt`);
}

let umidjon=new user('Umidjon','8')//constructor object
let umidjon11=new user('umidjon11',9)

umidjon.exitt()
umidjon11.exitt()

console.log (umidjon);
console.log(umidjon11);

let umidjon1={//oddiy oblect
   q: 'Umidjon',
   id:8,
   human: true
}

console.log(umidjon1);

//exucation context this
showThis(1,6);
function showThis(a,b){
   console.log(this);

   console.log(sum());
   function sum(){
      console.log(this);
      return a+b
   }
}
