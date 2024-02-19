import { UsersModule } from './features/users/users.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './features/auth/auth.module';
import { configService } from './shared/config/db.config.service';
import { FinanceUnityModule } from './features/finance-unity/finance-unity.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    FinanceUnityModule,
    AuthModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
