myFirstApp('Umidjon',22)
function myFirstApp(name,age){
   alert(`Hi, my name is ${name} and i am full-stack developer`);

   showSkills()
   function showSkills(){
      let skills=['Html','Css','JavaScript']

      for(let i=0;i<skills.length;i++){
         alert(`You have skills ${skills[i]}`)
      }
   }

   checkAge()
   function checkAge(){
      let age=prompt('How old are you?')

      if(age<18) alert('super data for learning IT');
      else alert('Exactly data for learning IT');
   }

   calcPow()
   function calcPow(number){
      return number*number
   }

   console.log(calcPow(7));
}
