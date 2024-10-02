import { DataSource, Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
export declare class CoffeesService {
    private readonly coffeeRepository;
    private readonly flavorRepository;
    private readonly dataSource;
    constructor(coffeeRepository: Repository<Coffee>, flavorRepository: Repository<Flavor>, dataSource: DataSource, coffeesBrands: string[]);
    findAll(paginationQuery: PaginationQueryDto): any;
    findOne(id: string): Promise<any>;
    create(createCoffeeDto: CreateCoffeeDto): Promise<any>;
    recommendCoffee(coffee: Coffee): Promise<void>;
    update(id: string, updateCoffeeDto: UpdateCoffeeDto): Promise<any>;
    remove(id: string): Promise<any>;
    private preloadFlavorByName;
}
