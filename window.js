// when you are not inside declared object this key word refer global object


function mayur(){
    return console.log(this);
};
 
 
 mayur();
 
 // since above function is not inside object this keyword will return global object wwhich is global in node