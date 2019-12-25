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
let Continent = class Continent {
};
__decorate([
    typeorm_1.Column({
        generated: true,
        nullable: false,
        primary: true,
        name: 'continent_id'
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], Continent.prototype, "continentId", void 0);
__decorate([
    typeorm_1.Column({
        name: 'continent_code',
        length: 2,
        unique: true,
        nullable: false
    }),
    __metadata("design:type", String)
], Continent.prototype, "continentCode", void 0);
__decorate([
    typeorm_1.Column({
        name: 'continent_name',
        length: 50,
        unique: true,
        nullable: false
    }),
    __metadata("design:type", String)
], Continent.prototype, "continentName", void 0);
Continent = __decorate([
    typeorm_1.Entity('continent', { schema: 'public' })
], Continent);
exports.default = Continent;
//# sourceMappingURL=Continent.js.map