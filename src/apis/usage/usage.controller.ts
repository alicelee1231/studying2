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
import 'dotenv/config';

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

    let token = '';
    if (req.headers.cookie) {
      token = req.headers.cookie.split('token=')[1];
    } else {
      return { nickname: '', data: result, currentPage: query.page };
    }
    if (token === '') {
      return { nickname: '', data: result, currentPage: query.page };
    } else if (token !== undefined) {
      const checkToken = jwt.verify(token, process.env.KEY);
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
