import { Column, OneToMany, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CvEntity } from "../cv.entity/cv.entity";

@Entity("user")
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;
    
    @OneToMany(
        () => CvEntity,
        cv => cv.user,
        // {
        //     cascade: true,
        //     nullable: true,
        //     eager: true
        // }
    )
    cv: CvEntity;

}
