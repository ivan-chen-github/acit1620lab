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
        courseList.push(newObj);
        index++;
    }
    findCourse(courseList)
}


function findCourse(courseList){
    input = getInput();
    if (scanArray(input, courseList)){
        document.querySelector(`[class$="${input}"]`).style.backgroundColor = "green";
    }
    else {
        const linebreak = document.createElement("br");
        const horizrule = document.createElement("hr");
        let newestCourse = document.querySelector("#newestCourse")
        let newCourse = document.createElement("div");  //Create container
        newCourse.classList.add("courses")
        newCourse.classList.add(input)
        let newCode = document.createElement("div");    //Create course code div
        newCode.innerHTML = input;
        newCode.classList.add("class")
        let newDesc = document.createElement("div");    //Create description div
        newDesc.innerHTML = "N/A";
        newDesc.classList.add("desc")
        let newDate = document.createElement("div");    //Create date div
        newDate.innerHTML = "Fall 2020";
        newDate.classList.add("semester")

        newCourse.appendChild(newCode)                  //Puts divs into container
        newCourse.appendChild(newDesc)
        newCourse.appendChild(newDate)

        newestCourse.after(newCourse)                   //Puts new container after other containers
        newestCourse.after(horizrule)
        newestCourse.after(linebreak)

        newestCourse.removeAttribute("id")              //Reassigns newestCourse id to new addition
        newCourse.id = "newestCourse"
    }
}


function main(){
    createCourseArray()
}


main()
