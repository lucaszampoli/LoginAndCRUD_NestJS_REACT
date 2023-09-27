import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './authMiddleware/auth.module';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
