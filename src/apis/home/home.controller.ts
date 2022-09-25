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

  @Get('/about')
  @Render('about')
  async about(
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
}
