// Login page javascript starts
const emailInput = document.getElementById('login-email');
const passwordInput = document.getElementById('login-password');
const LoginSubmitBtn = document.getElementById('login-submit');
LoginSubmitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    handleLogin();
})
function handleLogin() {
    const email = emailInput.value;
    const password = passwordInput.value;
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (email === storedEmail && password === storedPassword) {
        alert("Login Successfull");
    } else {
        alert("Invalid email or password. Please try again");
    }
}
// Login page javascript end

// SignUp page javascript starts
const registerEmailInput = document.getElementById('signUp-email');
const registerPasswordInput = document.getElementById('signUp-password');
const registerConfirmPasswordInput = document.getElementById('confimr-password');
const registerSubmitButton = document.getElementById('register-submit');
registerSubmitButton.addEventListener('click', function (event) {
    event.preventDefault();
    handleRegistration();
})
function handleRegistration() {
    const email = registerEmailInput.value;
    const password = registerPasswordInput.value;
    const confimrPassword = registerConfirmPasswordInput.value;
    if (password !== confimrPassword) {
        alert("Passwords do not match. Please re-enter.")
        return;
    }
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
}
// SignUp page javascript end