import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

export class TimesTampEntity{


    @CreateDateColumn()
    createdAt: Date
    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date


}