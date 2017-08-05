// this is little bit different from call apply ,

// call and apply direct executes the method you call, but bind does not executes it immidiately it returns the method , so that you can use it later on time,lets see



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



var store= mayur.whoYou.bind(xyz);// just  defines method on store varibale which you can use latter

// in bind you don't need to pass parameters immidiately because it returns fun  not executes.



store(10,26);

// hope you get it