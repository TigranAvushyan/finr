import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FinanceUnityEntity } from './finnce-unity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FinanceUnityService {
  constructor(
    @InjectRepository(FinanceUnityEntity)
    private financeUnityRepository: Repository<FinanceUnityEntity>,
  ) {}

  findAll(): Promise<FinanceUnityEntity[]> {
    return this.financeUnityRepository.find();
  }

  createFinanceUnity(financeUnity: FinanceUnityEntity) {
    return this.financeUnityRepository.save(financeUnity);
  }
}
