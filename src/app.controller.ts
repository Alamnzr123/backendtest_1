import { Controller, Get, Post, UseGuards, Body } from '@nestjs/common';
import { AppService } from './app.service';

import { Throttle } from '@nestjs/throttler';
import { LeaderboardValidator } from './app.validator';
import { AuthGuard } from '../src/auth/auth';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hai')
  getHai(): string {
    return this.appService.getHai();
  }

  @UseGuards(AuthGuard)
  @Throttle({ default: { limit: 3, ttl: 60000 } })
  @Post('score')
  sendScore(@Body() body: LeaderboardValidator): Promise<LeaderboardValidator> {
    return this.appService.POSTscore(body);
  }

  @Get('rank')
  getAll(): Promise<LeaderboardValidator[]> {
    return this.appService.GETscore()
  }
}
