import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Render,
  Req,
  UnprocessableEntityException,
} from '@nestjs/common';
import { UsageService } from './usage.service';
import * as jwt from 'jsonwebtoken';
import { Request } from 'express';
import { CreateUsageInput } from './dto/create.usage.input';
import 'dotenv/config';

@Controller()
export class UsageController {
  constructor(private readonly usageService: UsageService) {}

  @Get('/usage')
  @Render('usage')
  async usage(
    @Query() query: string,
    @Req() req: Request, //
  ) {
    let token, nickname;
    if (req.headers.cookie) {
      try {
        token = req.headers.cookie.split('token=')[1];
        nickname = jwt.verify(token, process.env.KEY)['nickname'];
      } catch {
        nickname = '';
      }
    } else {
      nickname = '';
    }
    const count = await this.usageService.count();
    const page = await this.usageService.findPage({ page: query['id'] });
    return {
      pageCount: Math.ceil(count / 10),
      nickname,
      page,
      currentPage: query['id'],
    };
  }

  @Post('/usage')
  async click(@Body() createUsageInput: CreateUsageInput) {
    return await this.usageService.create(createUsageInput);
  }

  @Get('/write')
  @Render('write')
  async write(
    @Req() req: Request, //
  ) {
    if (req.headers.cookie === undefined || req.headers.cookie === 'token=') {
      req.res.redirect('/login');
    } else {
      const checkToken = jwt.verify(
        req.headers.cookie.split('token=')[1],
        process.env.KEY,
      );
      return { nickname: checkToken['nickname'] };
    }
  }

  @Post('/write')
  async loginUser(
    @Req() req: Request, //
  ) {
    if (req.headers.cookie === undefined || req.headers.cookie === 'token=') {
      throw new UnprocessableEntityException('로그인 후 이용 부탁드립니다. ');
    } else {
      const checkToken = jwt.verify(
        req.headers.cookie.split('token=')[1],
        process.env.KEY,
      );
      return { nickname: checkToken['nickname'] };
    }
  }
}
