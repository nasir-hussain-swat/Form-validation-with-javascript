const form = document.getElementById('form');
const Name = document.getElementById('Name');
const father_name=document.getElementById('father_name');
const department=document.getElementById('department');
const email = document.getElementById('email');
const semester = document.getElementById('semester');
const address = document.getElementById('address');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const NameValue = Name.value.trim();
    const father_nameValue=father_name.value.trim();
    const departmentValue=department.value.trim();
    const emailValue = email.value.trim();
    const semesterValue = semester.value.trim();
    const addressValue = address.value.trim();

    if(NameValue === '') {
        setError(Name, 'Name is required');
    } else {
        setSuccess(Name);
    }
    if(father_nameValue === ''){
        setError(father_name,'Father Name is required');
     
    }else{
        setSuccess(father_name);
    }
    if(departmentValue === ''){
        setError(department,'Department Name is required');

    }else{
        setSuccess(department)
    }

    

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(semesterValue === '') {
        setError(semester, 'Semester is required');
    }  else {
        setSuccess(semester);
    }

    if(addressValue === '') {
        setError(address, 'Address is required');
    }  else {
        setSuccess(address);
    }

};
