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
            console.log(`Yes I am taking the course: ` + object.code + ` - `+ object.name);
            return true;
        }
    }
}


function createCourseArray(){
    let courseList = [];
    let classes = document.querySelectorAll(".class > a");
    let date = document.querySelectorAll(".semester");
    let index = 0;
    for (let entry of classes){
        let newObj = {code: entry.innerHTML, date: date[index].innerHTML};
//        console.log(newObj.code + newObj.date)
        console.log(index);
        courseList.push(newObj);
        index++;
    }
    console.log(courseList[0].code + courseList[0].date + courseList[1].code + courseList[1].date)
//    console.log(templist[0].code + templist[1].code)
//    findCourse(courseList)
}


function findCourse(array){
    input = getInput();
    if (!scanArray(input, array)){
        let newObj = {code: input, name: null};
        console.log("New object successfully logged");
        courseList.push(newObj);
    }
}

function main(){
    createCourseArray()
}

main()
