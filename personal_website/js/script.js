// Javascript for courses.html


function getInput(){
    let input = prompt("Please enter a 4-digit number: ");
    while ((!Number(input) && input != ("0000")) || (input.length != 4)){
        input = prompt("Invalid input. Please enter a 4-digit number: ");
    }
    return input;
}


function scanArray(input, array){
    for (let object of array){
        if (object.code.includes(input)){
            return true;
        }
    }
}


function createCourseArray(){
    const courseList = [];
    const classes = document.querySelectorAll(".class > a");
    const date = document.querySelectorAll(".semester");
    let index = 0;
    for (let entry of classes){
        let newObj = {code: entry.innerHTML, date: date[index].innerHTML};
        console.log(index);
        courseList.push(newObj);
        index++;
    }
    index = 0
    for (let entry of courseList){
        console.log(courseList[index].code + courseList[index].date);
        index++;
    }
    findCourse(courseList)
}


function findCourse(courseList){
    input = getInput();
    if (scanArray(input, courseList)){
        console.log("This means input was in array");
        document.getElementById(input).style.backgroundColor = "green";
    }
    else {
        console.log("New object successfully logged");
        console.log(input)
        const newCourse = document.querySelector("#ACIT1515");
        const newCode = document.createTextNode(input);
        newCourse.append(newCode)
        const newDesc = document.createTextNode("N/A");
        const newDate = document.createTextNode("Fall 2020")
    }
}

function main(){
    createCourseArray()
}

main()
