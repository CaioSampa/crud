import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({type:"double"})
    price: number;

    @CreateDateColumn({ type: "datetime", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @UpdateDateColumn({ type: "datetime", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;

    @DeleteDateColumn({ type: "datetime", nullable: true })
    deleted_at: Date;

    constructor(name: string, description: string, price: number) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
}
