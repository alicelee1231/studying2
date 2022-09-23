import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Render,
  Req,
} from '@nestjs/common';
import { DetailService } from './detail.service';
import * as jwt from 'jsonwebtoken';
import { Request } from 'express';

@Controller('detail')
export class DetailController {
  constructor(
    private readonly detailService: DetailService, //
  ) {}

  @Get('/')
  @Render('detail')
  async home(
    @Req() req: Request, //
  ) {
    let accessToken = '';
    if (req.headers.cookie) {
      accessToken = req.headers.cookie.split('refreshToken=')[1];
    } else {
      return { nickname: '' };
    }
    if (accessToken === '') {
      return { nickname: '' };
    } else if (accessToken !== undefined) {
      const checkToken = jwt.verify(accessToken, 'myRefreshkey');
      return { nickname: checkToken['nickname'] };
    } else {
      return { nickname: '' };
    }
  }

  @Get('/:id')
  @Render('detail')
  async detail(@Param('id') id: string) {
    const result = await this.detailService.findOne(id);
    return { data: result };
  }

  @Delete('/')
  async delete(
    @Body() data, //
  ) {
    return await this.detailService.delete(data);
  }
}
