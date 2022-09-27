import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { AuthService } from 'src/apis/auth/auth.service';
import 'dotenv/config';

@Injectable()
export class JwtKeyStrategy extends PassportStrategy(
  Strategy,
  process.env.KEY,
) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: (req) => {
        const cookies = req.headers.cookies;
        if (cookies) return cookies.replace('Token=', '');
      },
      secretOrKey: process.env.KEY,
      passReqToCallback: true,
    });
  }

  async validate(payload: any) {
    return {
      id: payload.nickname,
    };
  }
}
