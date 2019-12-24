"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Country = class Country {
};
__decorate([
    typeorm_1.Column({
        generated: true,
        nullable: false,
        primary: true
    }),
    typeorm_1.Generated("uuid"),
    __metadata("design:type", String)
], Country.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], Country.prototype, "countryName", void 0);
__decorate([
    typeorm_1.Column({
        length: 2
    }),
    __metadata("design:type", String)
], Country.prototype, "countryCode", void 0);
__decorate([
    typeorm_1.Column({
        length: 3
    }),
    __metadata("design:type", String)
], Country.prototype, "countryCode3", void 0);
__decorate([
    typeorm_1.Column({
        length: 100
    }),
    __metadata("design:type", String)
], Country.prototype, "capital", void 0);
__decorate([
    typeorm_1.Column({
        length: 2
    }),
    __metadata("design:type", String)
], Country.prototype, "continentCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Country.prototype, "area", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Country.prototype, "population", void 0);
__decorate([
    typeorm_1.Column({
        precision: 10, scale: 6
    }),
    __metadata("design:type", Number)
], Country.prototype, "lat", void 0);
__decorate([
    typeorm_1.Column({
        precision: 10, scale: 6
    }),
    __metadata("design:type", Number)
], Country.prototype, "lng", void 0);
__decorate([
    typeorm_1.Column({
        length: 3
    }),
    __metadata("design:type", String)
], Country.prototype, "currencyCode", void 0);
__decorate([
    typeorm_1.Column({
        length: 50
    }),
    __metadata("design:type", String)
], Country.prototype, "currencyName", void 0);
__decorate([
    typeorm_1.Column({
        length: 255
    }),
    __metadata("design:type", String)
], Country.prototype, "languages", void 0);
Country = __decorate([
    typeorm_1.Entity("country", { schema: "public" })
], Country);
exports.default = Country;
//# sourceMappingURL=Country.js.map