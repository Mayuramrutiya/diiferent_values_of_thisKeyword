//when you use this keyword inside object thrn, this refer to closest object. see the example
var mayur={
    
    a: "mayur",
    
    b:function(){
        return console.log("hello this is "+ this.a);
        
        // here this refer to mayur object 
    },
    c:{
        d:"xyz",
        
        e:function(){
            return console.log("hello this is "+ this.d);
            
            // here this refer to c object because this is the closest one not mayur object
        }
    }
    
    
}



mayur.b();


mayur.c.e();
