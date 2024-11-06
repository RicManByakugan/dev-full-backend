import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cv")
export class CvEntity {
    @PrimaryGeneratedColumn()
    // @PrimaryGeneratedColumn("uuid")
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
