// when you use new keyword , then 'this' refer to the  object that you created.


function Mayur(a,b,c){
   this.a=a;
   this.b=b;
   this.c=c;
   this.d = function(){
        console.log(this.a +this.b+this.c);
    };
};




var xyx=new Mayur(10,15,39);


xyx.d();// 64,here this refer to xyx object


var abc= new Mayur(5,5,5);

abc.d();// 15, here this refer to abc object.


//hope you get it



