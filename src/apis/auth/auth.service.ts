import {
  Injectable,
  UnauthorizedException,
  CACHE_MANAGER,
  Inject,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import * as jwt from 'jsonwebtoken';
import { Cache } from 'cache-manager';
import 'dotenv/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  getAccessToken({ user }) {
    const accessToken = this.jwtService.sign(
      { nickname: user.nickname },
      { secret: 'myAccesskey', expiresIn: '1s' },
    );

    return accessToken;
  }

  setRefreshToken({ user, req, res }) {
    const refreshToken = this.jwtService.sign(
      { nickname: user.nickname },
      { secret: 'myRefreshkey', expiresIn: '6h' },
    );

    console.log(refreshToken, 'dfajh');
    res.cookie('refreshToken', refreshToken);
  }

  async createSocialUser({ req, res }) {
    let userFound = await this.userRepository.findOne({
      where: {
        email: req.user.email,
      },
    });

    if (!userFound) {
      userFound = await this.userRepository.save({
        email: req.user.email,
        nickname: req.user.nickname,
      });
    }
    this.setRefreshToken({ user: userFound, req, res });
    res.redirect('http://localhost:3000');
    return userFound;
  }

  async logout({ req, res }) {
    const token = req.headers.cookie.replace('refreshToken=', '');
    try {
      jwt.verify(token, 'myRefreshkey');
      res.cookie('refreshToken', '');
      res.redirect('http://localhost:3000');
      return '로그아웃 성공';
    } catch {
      throw new UnauthorizedException();
    }
  }
}
