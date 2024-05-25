import { DataSource } from 'typeorm';
import { LeaderboardEntity } from './app.entity';

export const leaderboardProviders = [
    {
        provide: 'LEADERBOARD_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(LeaderboardEntity),
        inject: ['DATA_SOURCE'],
    },
];