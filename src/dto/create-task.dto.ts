import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";

export enum TaskPriority {
  IMPORTANTE = "importante",
  NORMAL = "normal",
  TRANQUI = "tranqui",
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  done?: boolean;

  @IsString()
  @IsNotEmpty()
  user: string;

  @IsEnum(TaskPriority)
  @IsNotEmpty()
  priority: TaskPriority;
}
