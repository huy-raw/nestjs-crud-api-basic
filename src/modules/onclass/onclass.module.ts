import { Module } from '@nestjs/common';
import { OnClassService } from './onclass.service';
import { OnClassController } from './onclass.controller';
import { OnClass } from './entities/onclass.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OnClass])],
  controllers: [OnClassController],
  providers: [OnClassService]
})
export class OnClassModule {}
