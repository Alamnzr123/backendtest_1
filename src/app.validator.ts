import { IsNumber, IsString } from 'class-validator';

export class LeaderboardValidator {
    @IsString()
    name: string;

    @IsNumber()
    score: number;
}