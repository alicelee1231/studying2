import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Render,
  Req,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Request } from 'express';
import { WriteService } from './write.service';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

@Controller('write')
export class WriteController {
  constructor(private readonly writeService: WriteService) {}

  @Get('/write')
  @Render('write')
  async write(@Req() req: Request) {
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

  @Get('/write')
  @Render('write')
  async load(
    @Req() req: Request, //
  ) {
    let token = '';
    if (req.headers.cookie) {
      token = req.headers.cookie.split('token=')[1];
    } else {
      return { nickname: '' };
    }
    if (token === '') {
      return { nickname: '' };
    } else if (token !== undefined) {
      const checkToken = jwt.verify(token, process.env.KEY);
      return {
        nickname: checkToken['nickname'],
      };
    } else {
      return { nickname: '' };
    }
  }

  @Post('/write')
  async loginUser(
    @Body() data, //
    @Req() req: Request,
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
