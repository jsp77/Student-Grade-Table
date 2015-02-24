
var target_info_container; //targets the info container
var gradeCount = 0;
var gradeTotal = 0;
var studentArray = [];


function load() {
     target_info_container = document.getElementById('info_container');
}

function record_info() {
    var createContainer = document.createElement('ol'); 
    var createStudentName = document.createElement('li'); 
    var createStudentGrade = document.createElement('li');
    var createStudentClass = document.createElement('li');
    var createStudentNumber = document.createElement('li');
    var createStudentSelector = document.createElement('input');
    var studentgradevalue = document.getElementById('student_grade').value;
    var sName = document.getElementById('student_name').value;
    var sClass = document.getElementById('student_class').value;
    var sGrade = document.getElementById('student_grade').value;
    var students = {'name':'sName', 'class':'sClass', 'grade':'sGrade'};
        
    if( sName === '') {
            alert('please fill out all areas of the form');
            return;
        }else{
    gradeTotal+=parseInt(studentgradevalue);
    gradeCount++;
        // student number
            
    createStudentNumber.textContent = gradeCount; //displays the total number of students entered
    console.log(document.getElementById('student_number').value); //test
    createContainer.appendChild(createStudentNumber);
    target_info_container.appendChild(createContainer);
    
    
        // student first name
            
    createContainer.setAttribute('id', 'stored_'+ document.getElementById('student_name').value);
    createStudentName.textContent = document.getElementById('student_name').value;
    //createStudentName.textContent = students[].name = sName;
    //students.name = sName; 
    console.log(document.getElementById('student_name').value); //test
    createContainer.appendChild(createStudentName);
    target_info_container.appendChild(createContainer);
        
        // student class
            
    createStudentClass.textContent = document.getElementById('student_class').value;
//turn this on to calculate while submitting ------For student grade table 1.5
    /*
    document.getElementById('total').innerHTML = Math.round(gradeTotal / gradeCount) + "%";
    */
    console.log(document.getElementById('student_class').value); //test
    createContainer.appendChild(createStudentClass);
    target_info_container.appendChild(createContainer);

        // student grade
            
    createStudentGrade.textContent = document.getElementById('student_grade').value;
    //createStudentName.textContent = students.name = sGrade; 
    console.log(document.getElementById('student_grade').value); //test
    createContainer.appendChild(createStudentGrade);
    target_info_container.appendChild(createContainer);

        
        // student selector

    createStudentSelector.setAttribute('type', 'checkbox');
    console.log(document.getElementById('student_selector').value); //test
    createContainer.appendChild(createStudentSelector);
    target_info_container.appendChild(createContainer);
    }
}




// calculates the total grade when Add button is hit
// turn this on to calculate the student grade average with the button
// -----[ working for Student grade Table 2.0 ]-----//

function calc() {
    var answer = document.getElementById('total').innerHTML = Math.round(gradeTotal / gradeCount) + "%";
    
        if(answer === 'NaN%') {
            alert('please fill out all areas of the form');
            document.getElementById('total').innerHTML = 'error';
            return;
        }
        else
        {
            document.getElementById('total').innerHTML = Math.round(gradeTotal / gradeCount) + "%";
    }
 }


