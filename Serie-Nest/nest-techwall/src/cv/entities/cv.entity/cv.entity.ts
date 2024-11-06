import { Timestamps } from "src/generique/timestamps";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

}
