import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { HomeService } from './home.service';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

@Controller()
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('/')
  @Render('home')
  async home(
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
      return { nickname: checkToken['nickname'] };
    } else {
      return { nickname: '' };
    }
  }

  @Get('/about')
  @Render('about')
  async about(
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
      return { nickname: checkToken['nickname'] };
    } else {
      return { nickname: '' };
    }
  }
}
