import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({
  timestamps: true,
})
export class Task {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  title: string;

  @Prop({
    trim: true,
  })
  description: string;

  @Prop({
    default: false,
  })
  done: boolean;

  @Prop({
    required: true,
  })
  user: string;

  @Prop({
    required: true,
    enum: ["importante", "normal", "tranqui"],
  })
  priority: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
