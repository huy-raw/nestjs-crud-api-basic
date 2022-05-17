import { Module } from '@nestjs/common';
import { OnClassService } from './on-class.service';
import { OnClassController } from './on-class.controller';

@Module({
  controllers: [OnClassController],
  providers: [OnClassService]
})
export class OnClassModule {}
