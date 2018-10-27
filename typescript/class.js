//let is a global it is not supposed to used inside class
//dont use a key word function inside class
var Tailor = /** @class */ (function () {
    function Tailor() {
    }
    //function declaration
    Tailor.prototype.stitch = function (dimensions) {
        console.log(dimensions);
    };
    Tailor.prototype.chooseWorker = function (name) {
        console.log(name);
    };
    return Tailor;
}());
//creating object
//just a reference variable - which refer to class type
//reference variable will not have a memory so we make an object to access class members
// let tailor: Tailor;
var tailor = new Tailor();
tailor.stitch({
    length: 20,
    collar: 20,
    design: "Apple"
});
