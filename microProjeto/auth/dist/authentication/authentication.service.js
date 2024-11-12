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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const authentication_entity_1 = require("./entities/authentication.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const exception_1 = require("../HttpResponse/exception");
const Bcrypt_service_1 = require("../shared/encrypter/Bcrypt.service");
const jwt_service_1 = require("../shared/jwtToken/jwt.service");
let AuthenticationService = class AuthenticationService {
    constructor(jwtService, userRepository, bcrypt) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
        this.bcrypt = bcrypt;
    }
    async generateAcessToken(userId) {
        return await this.jwtService.generateToken(userId);
    }
    validateAcessToken(token) {
        return this.jwtService.validadeToken(token.token);
    }
    async login(loginDTO) {
        const user = await this.userRepository.findOneBy({
            email: loginDTO.email
        });
        if (!user) {
            throw new exception_1.ExceptionErrorDTO(common_1.HttpStatus.BAD_REQUEST, 'User not found');
        }
        const isMatch = await this.bcrypt.compare(loginDTO.password, user.password);
        if (!isMatch) {
            throw new exception_1.ExceptionErrorDTO(common_1.HttpStatus.UNAUTHORIZED, 'Email or Password invalid!');
        }
        console.log(isMatch);
        const acessToken = await this.generateAcessToken(user.id);
        console.log(acessToken);
        return {
            access_token: acessToken,
            token_type: 'Bearer',
        };
    }
    async createUser(userData) {
        userData.password = await this.bcrypt.hash(userData.password);
        return await this.userRepository.save(userData);
    }
    remove(id) {
        return `This action removes a #${id} authentication`;
    }
};
exports.AuthenticationService = AuthenticationService;
exports.AuthenticationService = AuthenticationService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(authentication_entity_1.UserEntity)),
    __metadata("design:paramtypes", [jwt_service_1.JWTtokenService,
        typeorm_2.Repository,
        Bcrypt_service_1.BcryptJs])
], AuthenticationService);
//# sourceMappingURL=authentication.service.js.map