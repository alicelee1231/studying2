import { Controller, Get, Param, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { WriteService } from './write.service';
import * as jwt from 'jsonwebtoken';

@Controller('write')
export class WriteController {
  constructor(private readonly writeService: WriteService) {}

  @Get('/:id')
  @Render('write')
  async write(@Param('id') id: string) {
    const result = await this.writeService.findOne(id);
    return { data: result };
  }

  @Get('/')
  @Render('write')
  async load(
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
      return {
        nickname: checkToken['nickname'],
      };
    } else {
      return { nickname: '' };
    }
  }
}
