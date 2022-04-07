//Car
class Car {
   constructor(options){
      this.name=options=options.name
      this.isAirBag=options.isAirBag
      this.extraBalon=options.extraBalon
   }

   speed(){
      console.log('100km/h');
   }
}

const BMW=new Car({
   name:'BMW',
   isAirBag:true,
   extraBalon:2
})

//Buss
class Buss extends Car{ //Cardagidan meros olish uchun
   constructor(options){//weightni ham chiqarish uchun
      super(options)
      this.weight=options.weight
   }

   speed(){
      super.speed()//Cardagi speedni chiqarish
      console.log('50 km/h');
   }

   get extraBalonInfo(){//getters objectdagi qiymatga nimadir qoshish uchun
      return this.extraBalon*3
   }

   set extraBalonInfo(newValue){//setters objectdagi qiymatni ozgartirish uchun
      this.extraBalon=newValue
   }
}

const MAN=new Buss({
   name: 'MAN',
   isAirBag:false,
   extraBalon:3,
   weight:'4000kg'
})