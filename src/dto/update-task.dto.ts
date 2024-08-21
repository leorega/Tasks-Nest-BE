import { IsBoolean, IsEnum, IsOptional, IsString } from "class-validator";
import { TaskPriority } from "./create-task.dto";

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  done?: boolean;

  @IsEnum(TaskPriority)
  @IsOptional()
  priority?: TaskPriority;
}
