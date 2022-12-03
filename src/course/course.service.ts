import { BadRequestException, Injectable } from '@nestjs/common';
import { CourseDto } from './dto/Course.dto';

@Injectable()
export class CourseService{
    Courses = [
        {
            "id": 1,
            "name" : "Computer Science",
            "description" : "CS Department",
            "price" : 2000
        },
        {
            "id": 2,
            "name" : "Data Science",
            "description" : "CS Department",
            "price" : 4500,
        },
        {
            "id": 3,
            "name" : "Artificial Intelligence",
            "description" : "CS Department",
            "price" : 6000,
        },
        {
            "id": 5,
            "name" : "Software Engineering",
            "description" : "CS Department",
            "price" : 3000
        }
    ]  

    GetAllCourse(){
     return { Course : this.Courses }
    }


    GetById(id : number){  
    let course ;
    for (let index = 0; index < this.Courses.length; index++) {
        const element = this.Courses[index];
        if(element.id == id){
           course = element
        }
        else{
         throw new BadRequestException('No Course was Found')
        }
     }
     return { Course : course }
    }

    SaveCourse(course : CourseDto){
      let newId = this.Courses.length
      this.Courses.map((c)=> {
         if(c.id != course.id){
            this.Courses.push(course)
        }
         else{
          throw new BadRequestException(`Course with ${course.id} is Already Present`)
        }
      })
      
      return {Course : this.Courses}
    }

    DeleteCourse(id : number){
     let deletedCourse;
     for (let index = 0; index < this.Courses.length; index++) {
        const element = this.Courses[index];
        if(element.id == id){
           this.Courses.splice(index,index+1)
           console.log(this.Courses.slice(index,index+1))
           deletedCourse = element
        }
        else {
            throw new BadRequestException(`No Course With ${id} is present`)
        } 
     }

     return { DeletedCourse : deletedCourse }
    }
}