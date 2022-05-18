import { Module } from '@nestjs/common';
import { OnClassService } from './onclass.service';
import { OnClassController } from './onclass.controller';

@Module({
  controllers: [OnClassController],
  providers: [OnClassService]
})
export class OnClassModule {}
