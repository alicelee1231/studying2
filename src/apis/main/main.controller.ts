import { Controller, Get, Render, Req } from '@nestjs/common';
import { MainService } from './main.service';
import { Request, Response } from 'express';

@Controller()
export class MainController {
  constructor(private readonly mainService: MainService) {}

  @Get('/main')
  @Render('main')
  async board() {}
}
