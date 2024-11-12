"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationModule = void 0;
const common_1 = require("@nestjs/common");
const authentication_service_1 = require("./authentication.service");
const authentication_controller_1 = require("./authentication.controller");
const jwt_module_1 = require("../shared/jwtToken/jwt.module");
const typeorm_module_1 = require("../shared/infra/datasource/typeorm.module");
const Bcrypt_module_1 = require("../shared/encrypter/Bcrypt.module");
const typeorm_1 = require("@nestjs/typeorm");
const authentication_entity_1 = require("./entities/authentication.entity");
let AuthenticationModule = class AuthenticationModule {
};
exports.AuthenticationModule = AuthenticationModule;
exports.AuthenticationModule = AuthenticationModule = __decorate([
    (0, common_1.Module)({
        imports: [jwt_module_1.JwtTokenModule, typeorm_module_1.RestBaseModule, Bcrypt_module_1.BcryptModule,
            typeorm_1.TypeOrmModule.forFeature([authentication_entity_1.UserEntity]),
        ],
        controllers: [authentication_controller_1.AuthenticationController],
        providers: [authentication_service_1.AuthenticationService],
    })
], AuthenticationModule);
//# sourceMappingURL=authentication.module.js.map