// apply work same as call only different is that apply accept only two argument first is context and second is array of parameters passed in function




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



mayur.whoYou.apply(xyz,[5,7]);
// hope you get it
