import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class LeaderboardEntity {
    @PrimaryColumn({ nullable: false, length: 500 })
    name: string;

    @Column({ nullable: false })
    score: number;
}
