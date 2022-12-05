import { IsNumber, IsString } from "class-validator";

export class CourseDto{
   @IsString()
   name : string;

   @IsString()
   description : string;

   @IsNumber()
   price : number;
}
