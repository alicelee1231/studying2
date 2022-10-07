import { Body, Controller, Get, Param, Put, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUsageInput } from './dto/update.usage.input';
import { UpdateService } from './update.service';
import * as jwt from 'jsonwebtoken';

@Controller('update')
export class UpdateController {
  constructor(
    private readonly updateService: UpdateService, //
  ) {}

  @Get('/:id')
  @Render('update')
  async updatePageOpen(
    @Param('id') id: string, //
    @Req() req: Request,
  ) {
    const result = await this.updateService.findOne(id);

    let token = '';
    if (req.headers.cookie) {
      token = req.headers.cookie.split('token=')[1];
    } else {
      return { nickname: '', data: result };
    }
    if (token === '') {
      return { nickname: '', data: result };
    } else if (token !== undefined) {
      const checkToken = jwt.verify(token, process.env.KEY);
      return { nickname: checkToken['nickname'], data: result };
    } else {
      return { nickname: '', data: result };
    }
  }

  @Put('/')
  async update(
    @Body() updateUsageInput: UpdateUsageInput, //
    @Req() req,
  ) {
    return await this.updateService.update({ req, updateUsageInput });
  }
}
