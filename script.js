document.addEventListener('DOMContentLoaded', function () {
    function validateForm() {
        var email = document.getElementById('email').value;
        var lastName = document.getElementById('lastname').value;
        var firstName = document.getElementById('name').value;
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var password2 = document.getElementById('password2').value;

        if (email.length < 3 || lastName.length < 3 || firstName.length < 3 || username.length < 3 || password.length < 3 || password2.length < 3) {
            alert('Minimum 3 characters.');
            return false;
        }
        if (password.length > 8 || password2.length > 8) {
            alert('Maximum length 8 characters.');
            return false;
        }
        if (password !== password2) {
            alert('Passwords do not match.');
            return false;
        }
        alert('Success!');
        return true;
    }
    document.getElementById('user').addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();
        if (validateForm()) {
        }
    });
});
