var user = "John";
function showData(name, msg) {
    return "Welcome to TypeScript " + name + "\n    And Message For You : " + msg;
}
showData(user, "Happy To See!");
var data = showData(user, "Happy To See");
console.log(data);
