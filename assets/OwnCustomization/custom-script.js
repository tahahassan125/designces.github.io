

function submissionForm(){
    //const submitButton = document.getElementById('submit-btn');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxRq9z-SMWIRMonsqP6TOXzIza1Far64T4OUk8tdlp1tRsAbDcHFjR2scs9nkKXnSWu/exec';
    const form = document.forms['submit-to-google-sheet'];
    const inputs = document.querySelectorAll('input'); 
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        swal("Your Request Submitted!", "We will contact you soon!", "success");
        inputs.forEach(input => input.value = '');
    });

}
submissionForm();
