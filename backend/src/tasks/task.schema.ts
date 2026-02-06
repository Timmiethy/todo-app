import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema({ timestamps: true })

export class Task {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop({ default: 'TODO' })
    status: string;

    @Prop({ default: 'LOW' })
    priority: string;

    @Prop([String])
    tags: string[];

    @Prop()
    dueDate: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);