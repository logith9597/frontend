<script>

const $ = id => document.getElementById(id);
const setState = (el, ok, msg) => {
    el.className = ok ? "input-valid" : "input-error";
    $(el.id + "Error").innerText = ok ? "" : msg;
};

// Name
$("name").oninput = e => {
    e.target.value = e.target.value.replace(/[^A-Za-z]/g,'').slice(0,20);
    setState(e.target, e.target.value.length, "Name is required");
};

// Email (only ONE @ allowed)
$("email").oninput = e => {
    let v = e.target.value.replace(/(.*@.*)@+/,'$1').slice(0,30);
    e.target.value = v;
    setState(e.target, v.length >= 5 && (v.match(/@/g)||[]).length === 1,
        "Email must contain exactly one @ and max 30 chars");
};

// Department
$("department").onchange = e =>
    setState(e.target, e.target.value, "Select department");

// Password
$("password").oninput = e =>
    setState(e.target, e.target.value.length, "Enter password");

// Confirm Password
$("confirmPassword").oninput = e =>
    setState(e.target, e.target.value && e.target.value === $("password").value,
        "Passwords do not match");

// Final Submit
function validateForm(){
    const valid = ["name","email","department","password","confirmPassword"]
        .every(id => $(id).classList.contains("input-valid"));
    valid && alert("Registration Successful!");
    return valid;
}


</script>
