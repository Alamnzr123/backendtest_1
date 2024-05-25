import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { LeaderboardEntity } from './app.entity';
import { LeaderboardValidator } from './app.validator';

@Injectable()
export class AppService {
  constructor(
    @Inject('LEADERBOARD_REPOSITORY')
    private leaderboardRepository: Repository<LeaderboardEntity>
  ) { this.leaderboardRepository = leaderboardRepository; }


  getHello(): string {
    return 'Hello World!';
  }

  getHai(): string {
    return 'Welcome to nest js!';
  }

  POSTscore(score: LeaderboardValidator): Promise<LeaderboardValidator> {
    return this.leaderboardRepository.save(score);
  }

  GETscore(): Promise<LeaderboardValidator[]> {
    return this.leaderboardRepository.find({
      order: {
        score: 'ASC'
      },
      take: 10
    })
  }

}
