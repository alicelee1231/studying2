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

  setToken({ user, req, res }) {
    const token = this.jwtService.sign(
      { nickname: user.nickname },
      { secret: process.env.KEY, expiresIn: '6h' },
    );
    res.cookie('token', token);
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
    this.setToken({ user: userFound, req, res });
    res.redirect('/');
    return userFound;
  }

  async logout({ req, res }) {
    const token = req.headers.cookie.replace('token=', '');
    try {
      jwt.verify(token, process.env.KEY);
      res.cookie('token', '');
      res.redirect('/login');
      return '로그아웃 성공';
    } catch {
      throw new UnauthorizedException();
    }
  }
}
