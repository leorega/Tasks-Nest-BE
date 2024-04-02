import { Module } from "@nestjs/common";
import { TasksModule } from "./tasks/tasks.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";

const connectionString = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}.z8jtlkz.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`;

//"mongodb://localhost/tasksdb"

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(connectionString),
    TasksModule,
  ],
})
export class AppModule {}
