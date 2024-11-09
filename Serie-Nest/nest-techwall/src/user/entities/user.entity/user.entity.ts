import { Column, OneToMany, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CvEntity } from "../../../cv/entities/cv.entity/cv.entity";
import { IsString, IsOptional } from "class-validator";
import { UserRoleEnum } from "src/user/enums/user.role.enum";
import { Timestamps } from "src/generique/timestamps";

@Entity("user")
export class UserEntity extends Timestamps {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    @IsString()
    password: string;

    @Column()
    salt:string

    @Column({
        type: "enum",
        enum: UserRoleEnum,
        default: UserRoleEnum.USER
    })
    role: string;
    
    @IsOptional()
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
