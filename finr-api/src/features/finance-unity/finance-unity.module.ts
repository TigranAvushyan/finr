import { Module } from '@nestjs/common';
import { FinanceUnityService } from './finance-unity.service';
import { FinanceUnityController } from './finance-unity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinanceUnityEntity } from './finnce-unity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FinanceUnityEntity])],
  controllers: [FinanceUnityController],
  providers: [FinanceUnityService],
  exports: [FinanceUnityService],
})
export class FinanceUnityModule {}
