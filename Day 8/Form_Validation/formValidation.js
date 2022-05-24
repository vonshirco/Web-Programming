function formValidator() {
    if(document.getElementById('fname').value.length == 0){
        alert("First name is required");
    }

    if(document.getElementById('sname').value.length == 0){
        alert("Surname name is required");
    }

    if(document.getElementById('uemail').value.length == 0){
        alert("Email is required");
    }

    if(!(document.getElementById('male').checked) && !(document.getElementById('female').checked) ){
        alert("Sex is required");
    }

    if(!(document.getElementById('is181').checked) && !(document.getElementById('cs175').checked) ){
        alert("Select atleast one Course");
    }

}