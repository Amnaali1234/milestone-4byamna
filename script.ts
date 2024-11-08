 // listing element
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

// Get refrences to form elements using their IDs
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;


    //type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        
        const name = nameElement.value;
        const email =emailElement.value;
        const phone =phoneElement.value;
        const education =educationElement.value;
        const experience =experienceElement.value;
        const skills =skillsElement.value;


        // picture elements
const profilePictureFile = profilePictureInput.files?.[0];
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

   //Create Resume Output
const resumeOutput = `
<h2>Resume</h2>
${profilePictureURL ? `<img src="${profilePictureURL}" alt="profile Picture" class="profilePicture">` : ''}
<p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span> </p>
<p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span> </p>
<p><strong>Phone Number:</strong> <span id="edit-phone" class="editable"> ${phone} </span> </p>

<h3>Education</h3>
<p id="edit-education" class="editable">${education}</p>

<h3>Experience</h3>
<p id="edit-experience" class="editable">${experience}</p>

<h3>Skills</h3>
<p id="edit-skills" class="editable">${skills}</p>
`;


const resumeOutputElement = document.getElementById('resumeOutput');
if (resumeOutputElement) {
    resumeOutputElement.innerHTML = resumeOutput;
    makeEditable();
} else {
    console.error('The resume output element is missing');
}
       
} else {
    console.error('One or more form elements are missing');
}
});

// Make fields editable on click
function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
       element.addEventListener('click', function() {
        const currentElement = element as HTMLElement;
        const currentValue = currentElement.textContent || '';

        // Replace content
        if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
            const input = document.createElement('input')
            input.type = 'text'
            input.value = currentValue;
            input.classList.add('editing-input')

            input.addEventListener('blur', function() {
                currentElement.textContent = input.value;
                currentElement.style.display ='inline';
                input.remove();
            }); 



            currentElement.style.display = 'none';
            currentElement.parentNode?.insertBefore(input, currentElement);
            input.focus();

        }

       });

    });
}





































































