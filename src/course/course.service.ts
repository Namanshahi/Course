import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseDto } from './dto/Course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService{
    constructor(@InjectRepository(Course) private CourseRepo : Repository<Course>){}
    
    async GetAllCourse(){
     const courses = await this.CourseRepo.find()
     return { Course : courses }
    }

    
    async GetById(id : number){  
     const course = await this.CourseRepo.findOneBy({id})
     return { Course : course }
    }

    async SaveCourse(course : CourseDto){
      const newCourse = await this.CourseRepo.create(course)
      return this.CourseRepo.save(newCourse)
      
    }

    async DeleteCourse(id : number){
     const deletedCourse = await this.CourseRepo.findOneBy({ id })
  
     return await this.CourseRepo.remove(deletedCourse)
    }
}