var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    //  public name;
    //  public division;
    //  private marks:number;
    function Student(name, division, marks) {
        this.name = name;
        this.division = division;
        this.marks = marks;
    }
    //method with implemmentation
    Student.prototype.getMarks = function () {
        return this.marks;
    };
    Student.prototype.setMarks = function (marks) {
        this.marks = marks;
    };
    return Student;
}());
var John = /** @class */ (function (_super) {
    __extends(John, _super);
    function John(name, division, marks, parents) {
        var _this = _super.call(this, name, division, marks) || this;
        _this.parents = parents;
        return _this;
    }
    John.prototype.arrangeParentMeet = function () {
        console.log("Meeting with Parents : :");
        console.log("Parents Data\n        Father: " + this.parents.father + "\n        Mother: " + this.parents.mother);
    };
    John.prototype.showResults = function () {
        return "Pass";
    };
    //child own method
    John.prototype.wantReward = function () {
        return "Make me Property Owner!";
    };
    return John;
}(Student));
var john = new John("Yashu", "A", 99, {
    father: "Hema Sundar",
    mother: "Supuu Darling"
});
john.arrangeParentMeet();
john.showResults();
john.wantReward();
