import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type TaskDocument = Task & mongoose.Document;

@Schema()
export class Task {
    
    @Prop({ required: true })
    id: string;

    @Prop({ required: true })
    title: string;

    @Prop()
    description?: string;

    @Prop()
    author?: String;

    @Prop({required: true})
    status?: String;

    @Prop({ required: true })
    createdAt?: Date;
  
    @Prop()
    deletedAt?: Date;

    @Prop()
    updatedAt?: Date
}

export const TaskSchema = SchemaFactory.createForClass(Task);
