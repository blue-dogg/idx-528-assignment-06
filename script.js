var first_name=prompt("What's your first name?");
var last_name=prompt("What's your last name?");

function full_name(first_name, last_name){
    let answer=first_name+" "+last_name;
    return answer;
}

let name=full_name(first_name, last_name);

function last_first(first_name, last_name){
    console.log(last_name+","+first_name);
}

let your_name=last_first(first_name, last_name);

var age=prompt("How old are you?");
age=parseInt(age, 10);

function over18(x){
    if(x>=18){
        return true;
    } else if (isNaN(x)){
        return false;
    } else{
        return false;
    }
}

age=over18(age);

console.log(age);

function to_celcius(x=parseFloat(x)){
    let answer=(x-32)/1.8;
    return answer;
}
console.log(to_celcius(32));

function to_fahrenhet(y=parseFloat(y)){
    let answer=y+1.8+32;
    return answer;
}
console.log(to_fahrenhet(32));