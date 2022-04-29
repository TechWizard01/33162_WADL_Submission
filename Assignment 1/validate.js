function validate() {
        var name = document.forms["contact"]["name"];
        var email = document.forms["contact"]["email"];

        if (name.value == "") {
            window.alert("Please enter your name!");
            name.focus();
            return false;
        }

        if (email.value == "") {
            window.alert(
              "Please enter a valid e-mail address!");
            email.focus();
            return false;
        }

        return true;
    }

// function handleSubmit(event) {
//   event.preventDefault();
//
//   const data = new FormData(event.target);
//   const value = Object.fromEntries(data.entries());
//
//   console.log({ value });
// }
//
// form.addEventListener('submit', handleSubmit);
// const form = document.querySelector('form');
