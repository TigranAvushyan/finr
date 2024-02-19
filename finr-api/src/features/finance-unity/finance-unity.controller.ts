import { FinanceUnityService } from './finance-unity.service';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { FinanceUnityEntity } from './finnce-unity.entity';

@Controller('finance-unity')
@ApiTags('finance-unity')
@ApiSecurity('bearer')
@UseGuards(AuthGuard)
export class FinanceUnityController {
  constructor(private financeUnityService: FinanceUnityService) {}

  @Get()
  findAll() {
    return this.financeUnityService.findAll();
  }

  @Post()
  create(@Body() financeUnity: FinanceUnityEntity) {
    return this.financeUnityService.createFinanceUnity(financeUnity);
  }
}
