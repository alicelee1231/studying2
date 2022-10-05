import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeModule } from './apis/home/home.module';
import { MainModule } from './apis/main/main.module';
import { UsageModule } from './apis/usage/usage.module';
import { UpdateModule } from './apis/update/update.module';
import { DetailModule } from './apis/detail/detail.module';
import { UserModule } from './apis/user/user.module';
import { AuthModule } from './apis/auth/auth.module';
import { RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    HomeModule,
    MainModule,
    UsageModule,
    AuthModule,
    UpdateModule,
    UserModule,
    DetailModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mydatabase', //sql비공개주소
      //mydatabase /10.27.16.2
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mvc', //sql database mvc / myserver
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
      timezone: 'Asia / Seoul',
    }),
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      url: 'redis://my-redis:6379',
      // 10.27.17.3 / my-redis
      isGlobal: true,
    }),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
