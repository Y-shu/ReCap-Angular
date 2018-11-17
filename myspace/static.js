var Company1 = /** @class */ (function () {
    function Company1(cName, cAddress) {
        this.cName = cName;
        this.cAddress = cAddress;
    }
    Company1.getDetails = function () {
        var a = 10;
        console.log(a);
        console.log("get ");
        // console.log(`${this.cName} & ${cAddress}`)
    };
    return Company1;
}());
var company1 = new Company1("Shell", "USA");
// company1.getDetails();
Company1.getDetails();
