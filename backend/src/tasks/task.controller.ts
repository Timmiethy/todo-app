import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Post()
    create(@Body() createTaskDto: CreateTaskDto){
        return this.taskService.create(createTaskDto);
    }

    @Get()
    findAll() {
        return this.taskService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.taskService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateTaskDto: any) {
        return this.taskService.update(id, updateTaskDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.taskService.remove(id);
    }
}