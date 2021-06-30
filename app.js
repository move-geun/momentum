const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age<0){
    console.log("Please write positive number ")
} else if(age<=18){
    console.log("You are so young")
} else if(age>18 && age<=50){
    console.log("You can drink")
} else if(age>50 && age<=80){
    console.log("You need a exercise")
} else if(age===100){
    console.log("You are wise")
} else if(age>80){
    console.log("You can do it whatever you want")
}