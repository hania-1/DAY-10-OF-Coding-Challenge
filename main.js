let favorite_fruits: string[] = ["apples", "bananas", "cherries"];

if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}

let age: number = 50
if (age<2){
    console.log("hes a baby")
}else if (age< 10){
    console.log("hes a kid")
}else if (age< 16){
    console.log("hes a teenager")
}else if (age< 25){
    console.log("hes an adult")
}else if (age< 35){
    console.log("hes in middle Age")
}else{
    console.log("hes senior citizen")
}

var usernames = ["user1", "admin", "user3", "user4"];
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, your are plesed to come and attend the party");
    }
    else {
        console.log("Hello ".concat(username, ", your invited to the party."));
    }
});
