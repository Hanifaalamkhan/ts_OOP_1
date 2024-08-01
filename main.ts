#!/usr/bin/bash

import inquirer from 'inquirer';

class Student {
    name: String
    constructor(n: string){
        this.name=n
    }
}

class Person{
    students:Student[]=[]
    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const persons = new Person()

const programStart = async(persons:Person)=>{
    do{
    console.log("welcome!");
    const ans = await inquirer.prompt({
        name: "select",
        type: "list",
        message:"whom would uor like to interact with?",
        choices: ["staff", "student", "exit"]
    })
if (ans.select == "staff"){
    console.log("you approach the satff room, Please feel free to ask any question")

   }
    else if (ans.select == "student"){
        const ans = await inquirer.prompt({
            name: "student",
            type: "input",
            message: "Enter the students name you wish to engage with:"

        })
        const student = persons.students.find(val => val.name == ans.student)
        if (!Student){
            const name = new Student(ans.student)
            persons.addStudent(name)
            console.log(`hello, I'm ${name.name}. Nice to meet u !`);
            console.log("New student added");
            console.log("Current student list:");
            console.log(persons.students);
    
        }else{
            console.log(`hello, I'm ${student.name}. Nice to meet u !`);
            console.log("Existing student list :");
            console.log(persons.students);
        }
    }else if (ans.select == "exit"){
        console.log("Exiting the programe...");
        process.exit()
    }

} while(true)

}
programStart(persons)
