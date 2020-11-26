//



function getInput(){
    let input = prompt("Please enter a 4-digit number: ");
    while ((!Number(input)) || (input.length != 4)){
        input = prompt("Invalid input. Please enter a 4-digit number: ")
    }
    return input
}


function scanArray(input, array){
    for (let object of array){
        alert(object.code + input)
        alert(object.code.includes(input))
        if (object.code.includes(input)){
            console.log(`Yes I am taking the course: ` + object.code + ` - `+ object.name)
            alert(`Yes I am taking the course: ` + object.code + ` - `+ object.name)
            return true
        }
    }
}


function main(){
    const courseList = [ 
        {code: "ACIT 1620",  name: "Web Fundamental Technologies"},
        {code: "ACIT 1630",  name: "Database Systems"},
        {code: "ACIT 1515",  name: "Scripting for IT"},
    ]
    input = getInput()
    if (!scanArray(input, courseList)){
        let newObj = {code: input, name: null}
        alert(newObj.code + newObj.name)
        console.log("New object successfully logged")
        courseList.push(newObj)
        alert(courseList[3].code)
    }
}

main()
