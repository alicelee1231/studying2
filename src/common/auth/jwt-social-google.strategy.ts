import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import 'dotenv/config';

@Injectable()
export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'https://mymvc.shop/login/google',
      scope: ['email', 'profile'],
    });
  }

  validate(_, __, profile) {
    console.log(profile);
    return {
      email: profile.emails[0].value,
      nickname: profile.displayName,
    };
  }
}
