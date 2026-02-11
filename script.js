
document.getElementById("name").addEventListener("input", function() {
    this.value = this.value.replace(/[^A-Za-z]/g, '');
    if (this.value.length > 20) this.value = this.value.slice(0, 20);

    if (this.value.length === 0) {
        this.classList.add("input-error");
        this.classList.remove("input-valid");
        document.getElementById("nameError").innerText = "Name is required";
    } else {
        this.classList.remove("input-error");
        this.classList.add("input-valid");
        document.getElementById("nameError").innerText = "";
    }
});


document.getElementById("email").addEventListener("input", function() {
    var parts = this.value.split("@");
    if (parts.length > 2) {
        this.value = parts[0] + "@" + parts.slice(1).join("");
    }
    if (this.value.length > 30) this.value = this.value.slice(0, 30);

    var atCount = (this.value.match(/@/g) || []).length;
    if (this.value.length < 5 || atCount !== 1) {
        this.classList.add("input-error");
        this.classList.remove("input-valid");
        document.getElementById("emailError").innerText = "Email must contain exactly one @ and max 30 chars";
    } else {
        this.classList.remove("input-error");
        this.classList.add("input-valid");
        document.getElementById("emailError").innerText = "";
    }
});

document.getElementById("department").addEventListener("change", function() {
    if (this.value === "") {
        this.classList.add("input-error");
        this.classList.remove("input-valid");
        document.getElementById("departmentError").innerText = "Select department";
    } else {
        this.classList.remove("input-error");
        this.classList.add("input-valid");
        document.getElementById("departmentError").innerText = "";
    }
});


document.getElementById("password").addEventListener("input", function() {
    if (this.value.length === 0) {
        this.classList.add("input-error");
        this.classList.remove("input-valid");
        document.getElementById("passwordError").innerText = "Enter password";
    } else {
        this.classList.remove("input-error");
        this.classList.add("input-valid");
        document.getElementById("passwordError").innerText = "";
    }
});


document.getElementById("confirmPassword").addEventListener("input", function() {
    var password = document.getElementById("password").value;
    if (this.value === "" || this.value !== password) {
        this.classList.add("input-error");
        this.classList.remove("input-valid");
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
    } else {
        this.classList.remove("input-error");
        this.classList.add("input-valid");
        document.getElementById("confirmPasswordError").innerText = "";
    }
});


function validateForm() {
    var fields = ["name","email","department","password","confirmPassword"];
    var valid = true;
    fields.forEach(function(id){
        var input = document.getElementById(id);
        if (!input.classList.contains("input-valid")) valid = false;
    });
    if (valid) {
        alert("Registration Successful!");
    }
    return valid;
}

