const inputName = document.getElementById("nombre");
const inputEmail = document.getElementById("correo");


function validarObligatorios() {
    let isValid = true;

    if (inputName.value.trim() === "") {
        inputName.classList.add("is-invalid");
        isValid = false;
        console.log("El campo nombre es obligatorio.");
    } else {
        inputName.classList.remove("is-invalid");
        console.log("El campo nombre es válido.");
    }

    if (inputEmail.value.trim() === "") {
        inputEmail.classList.add("is-invalid");
        isValid = false;
    } else {
        inputEmail.classList.remove("is-invalid");
    }

    return isValid;
}

addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario");
    form.addEventListener("submit", (event) => {
        if (!validarObligatorios()) {
            event.preventDefault();
        }
    });

    inputName.addEventListener("input", () => {
        if (inputName.value.trim() !== "") {
            inputName.classList.remove("is-invalid");
        }
    });

    inputEmail.addEventListener("input", () => {
        if (inputEmail.value.trim() !== "") {
            inputEmail.classList.remove("is-invalid");
        }
    });
}
);