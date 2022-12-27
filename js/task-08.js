const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSumbit);

function onFormSumbit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  formElements.email.value === "" || formElements.password.value === ""
    ? alert("Всі поля мають бути заповненні")
    : console.log({
        email: formElements.email.value,
        password: formElements.password.value,
      });
  event.currentTarget.reset();
}
