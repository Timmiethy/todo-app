import { Injectable } from "@nestjs/common";
import { Task, TaskDocument } from "./task.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CreateTaskDto } from "./dto/create-task.dto";

@Injectable()
export class TaskService {
    constructor(
        @InjectModel(Task.name)
        private taskModel: Model<TaskDocument>
    ){}

    async create(createTaskDto: CreateTaskDto): Promise<Task> {
        const createdTask = new this.taskModel(createTaskDto);
        return createdTask.save();
    }

    async findAll(): Promise<Task[]> {
        return this.taskModel.find().exec();
    }

    async findOne(id: string): Promise<Task | null> {
        return this.taskModel.findById(id).exec();
    }

    async update(id: string, updateTaskDto: any): Promise<Task | null> {
        return this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true }).exec();
    } 

    async remove(id: string): Promise<Task | null> {
        return this.taskModel.findByIdAndDelete(id).exec();
    }
}