import { Timestamps } from "src/generique/timestamps";
import { Column, ManyToOne, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "../user.entity/user.entity";
@Entity("cv")
export class CvEntity extends Timestamps{
    // @PrimaryGeneratedColumn("uuid")
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: "name",
        length: 200,
        // update: true,
        // unique: true,
        // index: true,
        // nullable: false,
        // default: "Unknown"
    })
    name: string;

    @Column()
    firstname: string;
    
    @Column()
    age: number;
    
    @Column()
    cin: number;
    
    @Column()
    job: string;
    
    @Column()
    path: string;

    @ManyToOne(
        () => UserEntity, 
        user => user.cv,
        // {
        //     cascade: true,
        //     nullable: true,
        //     eager: true
        // }
    )
    user: UserEntity;

}
