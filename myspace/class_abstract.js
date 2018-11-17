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
var Coloring = /** @class */ (function () {
    function Coloring(coloring1, coloring2) {
        this.coloring1 = coloring1;
        this.coloring2 = coloring2;
    }
    return Coloring;
}());
var Pinku = /** @class */ (function (_super) {
    __extends(Pinku, _super);
    function Pinku(coloring1, coloring2, sheets) {
        var _this = _super.call(this, coloring1, coloring2) || this;
        _this.sheets = sheets;
        return _this;
    }
    Pinku.prototype.reuse = function (coloring1, coloring2) {
        console.log(this.coloring1 + "," + this.coloring2 + "," + this.sheets);
    };
    return Pinku;
}(Coloring));
var a = new Pinku('blue', "pink", 10);
console.log(a);
