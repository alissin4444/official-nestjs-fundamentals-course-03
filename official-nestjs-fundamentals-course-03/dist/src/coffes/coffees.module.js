"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeesModule = void 0;
const common_1 = require("@nestjs/common");
const coffees_constants_1 = require("./coffees.constants");
const coffee_entity_1 = require("./entities/coffee.entity");
const coffes_controller_1 = require("./coffes.controller");
const coffes_service_1 = require("./coffes.service");
const event_entity_1 = require("../events/entities/event.entity");
const flavor_entity_1 = require("./entities/flavor.entity");
const typeorm_1 = require("@nestjs/typeorm");
let CoffeesModule = class CoffeesModule {
};
exports.CoffeesModule = CoffeesModule;
exports.CoffeesModule = CoffeesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([coffee_entity_1.Coffee, flavor_entity_1.Flavor, event_entity_1.Event])],
        controllers: [coffes_controller_1.CoffeesController],
        providers: [
            coffes_service_1.CoffeesService,
            {
                provide: coffees_constants_1.COFFEE_BRANDS,
                useFactory: () => ['buddy brew', 'nescafe'],
                scope: common_1.Scope.TRANSIENT,
            },
        ],
        exports: [coffes_service_1.CoffeesService],
    })
], CoffeesModule);
//# sourceMappingURL=coffees.module.js.map