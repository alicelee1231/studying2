import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Render,
  Req,
} from '@nestjs/common';
import { UsageService } from './usage.service';
import * as jwt from 'jsonwebtoken';
import { Request } from 'express';
import { CreateUsageInput } from './dto/create.usage.input';

@Controller()
export class UsageController {
  constructor(private readonly usageService: UsageService) {}

  @Get('/usage')
  @Render('usage')
  async usage(
    @Query() query: { page: string; limit: string; maxPage: string },
    @Req() req: Request, //
  ) {
    const result = await this.usageService.find(query.page, query.limit);

    let accessToken = '';
    if (req.headers.cookie) {
      accessToken = req.headers.cookie.split('refreshToken=')[1];
    } else {
      return { nickname: '', data: result, currentPage: query.page };
    }
    if (accessToken === '') {
      return { nickname: '', data: result, currentPage: query.page };
    } else if (accessToken !== undefined) {
      const checkToken = jwt.verify(accessToken, 'myRefreshkey');
      return {
        nickname: checkToken['nickname'],
        data: result,
        currentPage: query.page,
      };
    } else {
      return { nickname: '', data: result, currentPage: query.page };
    }

    // const result = await this.usageService.find(query.page, query.limit);
    // return {
    // data: result,
    // currentPage: query.page,
    // };
  }

  @Post('/usage')
  async click(@Body() createUsageInput: CreateUsageInput) {
    return await this.usageService.create(createUsageInput);
  }
}
