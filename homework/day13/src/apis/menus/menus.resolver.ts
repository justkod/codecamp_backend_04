import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MenuService } from './menus.service';
import { CreateStarbuckInput } from './dto/createMenu.input';
import { Menu } from './entities/menu.entity';

@Resolver()
export class MenuResolver {
  constructor(private readonly starbucksService: MenuService) {}
  @Query(() => [Menu])
  fetchStarbucks() {
    return this.starbucksService.findAll();
  }

  @Mutation(() => String)
  createStarbucks(
    @Args({ name: 'createStarbuckInput', nullable: true })
    createStarbuckInput: CreateStarbuckInput,
  ) {
    return this.starbucksService.create({ createStarbuckInput });
  }
}
