const car={
   name:'BMW',
   color:'black',
   extraBalon:5,
   speed:function(){
      console.log('100km/h');
   }
}

Object.prototype.sayHello=function(){
   console.log('Hello world');
}

const bus=Object.create(car)
bus.name='MAN'
bus.extraBalon=10