class Component{
   constructor(selector){
      this.$el=document.querySelector(selector)
   }

   showElement(){
      this.$el.style.display='block'
   }

   hideElement(){
      this.$el.style.display='none'
   }
}

class Square extends Component{
   constructor(options){;
      super(options.selector);
      this.$el.style.width = this.$el.style.height = options.size +'px';
      this.$el.style.background=options.color
   }
}

const square1=new Square({
   selector:"#square1",
   size:100,
   color:'crimson'
})

const square2=new Square({
   selector:"#square2",
   size:100,
   color:'coral'
})

class Circle extends Square{
   constructor(options){
      super(options)
      this.$el.style.borderRadius='50%'
   }
}

const cirle1=new Circle({
   selector:'#circle',
   size:100,
   color:'green'
})

const cirle2=new Circle({
   selector:'#circle2',
   size:100,
   color:'yellow'
})