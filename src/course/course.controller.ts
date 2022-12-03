import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseDto } from './dto/Course.dto';

@Controller('courses')
export class CourseController{
    constructor(private courseService : CourseService){}
   
    @Get('/all')
    all(){
     return this.courseService.GetAllCourse()
    }


    @Get('/:id')
    getbyId(@Param('id', ParseIntPipe) id : number){
        return this.courseService.GetById(id)
    }

    @Post()
    saveCourse(@Body() Course : CourseDto ){
      console.log(Course)
      return this.courseService.SaveCourse(Course)
    }

    @Delete('/:id')
    deleteCourse(@Param('id' , ParseIntPipe) id  : number){
        return this.courseService.DeleteCourse(id)
    }
};