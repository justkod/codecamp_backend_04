import { Module } from '@nestjs/common';
import { MenuResolver } from './menus.resolver';
import { MenuService } from './menus.service';

@Module({
  //   imports: [],
  //   controllers: [AppController],
  providers: [MenuResolver, MenuService],
})
export class MenuModule {}
