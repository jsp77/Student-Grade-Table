
var target_info_container;
var sName, sClass, sGrade, sNumber, contParent;
var gradeCount = 0;
var gradeTotal = 0;
var studentArray = [];


function load() {
     target_info_container = document.getElementById('info_container');
}

function record_info() {
    var createContainer = document.createElement('ol');
    var createGradeCont = document.createElement('ol');
    var createStudentName = document.createElement('li'); 
    var createStudentGrade = document.createElement('li');
    var createStudentClass = document.createElement('li');
    var createStudentNumber = document.createElement('li');
    var createStudentSelector = document.createElement('input');
    sName = document.getElementById('student_name').value;
    sClass = document.getElementById('student_class').value;
    sGrade = document.getElementById('student_grade').value;
        
    if(sName === '' || sGrade === '' || sClass === '') {
        alert('name is not filled out');
        return;
    }
    if(isNaN(sGrade)){
        alert('use numbers in the grade sections');
    }
    else
    {
        gradeTotal+=parseInt(sGrade);
        gradeCount++;
        createContainer.setAttribute('id', 'container_for_'+ sName);
        // student number
        createStudentNumber.setAttribute('id', sName + '_number');
        createStudentNumber.textContent = gradeCount; //displays the total number of students entered
        createContainer.appendChild(createStudentNumber);
        target_info_container.appendChild(createContainer);

        // student name
        createStudentName.setAttribute('id', 'fullName_' + sName);
        createStudentName.textContent = sName;
        createContainer.appendChild(createStudentName);
        target_info_container.appendChild(createContainer);

        // student class
        createStudentClass.setAttribute('id', sName + '_class');
        createStudentClass.textContent = sClass;
        //turn this on to calculate while submitting ------For student grade table 1.5
        /*document.getElementById('total').innerHTML = Math.round(gradeTotal / gradeCount) + "%";*/

        createContainer.appendChild(createStudentClass);
        target_info_container.appendChild(createContainer);

        // student grade
        createStudentGrade.setAttribute('id', sGrade);
        createStudentGrade.textContent = sGrade;
        createContainer.appendChild(createStudentGrade);
        target_info_container.appendChild(createContainer);
        
        // student selector
        createStudentSelector.setAttribute('id', sName + '_select');
        createStudentSelector.setAttribute('type', 'checkbox');
        createContainer.appendChild(createStudentSelector);
        target_info_container.appendChild(createContainer);
        
var student = {'container' : createContainer, 
               'number': createStudentNumber,
               'name': createStudentName, 
               'class': createStudentClass, 
               'grade': createStudentGrade, 
               'check': createStudentSelector};
     
                studentArray.push(student);
    }
}


// calculates the total grade when Add button is hit
// turn this on to calculate the student grade average with the button
// -----[ working for Student grade Table 2.0 ]-----//

function calc() {
    var totalEle = document.getElementById('total').innerHTML
    var answer = document.getElementById('total').innerHTML = Math.round(gradeTotal / gradeCount) + "%";
    
    
        if(answer === 'NaN%') {
            alert('please fill out all areas of the form');
            totalEle = 'error';
            return;
        }
        if(gradeCount <= 1) {
            alert('add more students');
            totalEle = 'error';
            return;
        }
        else {
            answer;
    }
 }

function removeLine() {
    
    if(studentArray.length < 1){
        return;
    }
        
    var keepArray = [];
    contParent = studentArray[0].container.parentElement;
    
    for(var i = 0; i < studentArray.length; i++) {
        if(studentArray[i].check.checked) { 
            contParent.removeChild(studentArray[i].container);
        }else{
            keepArray.push(studentArray[i]); 
        }
    }
    studentArray = keepArray;
}