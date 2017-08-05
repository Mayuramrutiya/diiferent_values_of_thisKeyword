// with the help of call ,apply,bind you can set the context of this , means you can explicitly define that what will this kryword refer,let's see example..


//call: you only can apply this method to function.
// syntax: somefun.call(context, a,b,c,d,...)
// here context is object that you want to refer by this keyword, and a,b,c,d is the arguments that you have passed to function that you are calling


var mayur={
     firstname:"mayur",
     
     whoYou: function(){
         return console.log("you are "+ this.firstname);
     }
    
};


var xyz={
    firstname:"xyz"
};

// now if i want to use whoYou method os mayur object without defining it in xyz object then i can call whoYou method,
//    of mayur object in the context of xyz object.


mayur.whoYou.call(xyz);

//lets pass the parameters

var mayur={
     firstname:"mayur",
     
     whoYou: function(a,b){
          console.log("you are "+ this.firstname);
           console.log(a+b);
           
     }
    
};
 
var xyz={
    firstname:"xyz",
    
}



mayur.whoYou.call(xyz,5,7);
// hope you get it


