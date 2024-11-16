var usersData = [
  {
    username:  'Hassan Ahmed',
    rollno:    '101',
    classname: 'Matric',
  },
  {
    username:  'Jawwad Ahmed',
    rollno:    '102',
    classname: 'Seven',
  },
  {
    username:  'Azhan Ahmed',
    rollno:    '103',
    classname: 'Nine',
  },
  
]
var nameData = false;
var rollData = false;
var classData = false;

function inputValid(e)
{
  if(e.target.value.length < 5){
    e.target.nextElementSibling.innerText = 'name atleast 5 char required'
    e.target.nextElementSibling.style.display = 'block'
    return;
  }
  e.target.nextElementSibling.style.display = 'none';
  nameData = true;
}

function inputRoll(e)
{
  if(e.target.value < 100 || e.target.value > 120){
    e.target.nextElementSibling.innerText = 'Roll No. should be 101 to 120'
    e.target.nextElementSibling.style.display = 'block'
    return;
  }
  e.target.nextElementSibling.style.display = 'none';
  rollData = true;
}

function inputClass(e)
{
    if(e.target.value.length < 3){
      e.target.nextElementSibling.innerText = 'class name must have at least 3 character';
      e.target.nextElementSibling.style.display = 'block'
      return;
    }
    e.target.nextElementSibling.style.display = 'none';
    classData = true;
}

function submitData(e){
  e.preventDefault();

  var name = document.getElementById('name');
  var rollNo = document.getElementById('rollNo');
  var className = document.getElementById('class');
  var result = document.getElementById('result');
   
  var userExists=false;

var i= 0;
while(i < usersData.length){
  if(usersData[i].username === name.value && usersData[i].rollno === rollNo.value && usersData[i].classname === className.value){
     userExists = true
     break;
  }
  i++;
}

  
if (userExists){
    result.innerText = `Data found: Name - ${name.value}, Roll No. ${rollNo.value}, Class Name - ${className.value}`;
    result.style.color = "green"


} else {
    result.innerText = 'Data does not exist'
    result.style.color = "red"
}

  name.value = ''; // to empty input
  rollNo.value = '';
  className.value = '';
  
  
  nameData = false;
  rollData = false;
  classData = false;

}

