"use strict";



function showMoreInfo(id) {
	const info = document.getElementById(id);
	if (info.style.display === "none") {
		info.style.display = "block";
	} else {
		info.style.display = "none";
	}
}


document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    
    document.getElementById("modalName").textContent = name;
    document.getElementById("modalEmail").textContent = email;
    document.getElementById("modalMessage").textContent = message;

    const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();
});



document.getElementById("modalSubmitButton").addEventListener("click", function () {
    
    setTimeout(() => {
        // Cierra el modal manualmente
        const modal = bootstrap.Modal.getInstance(document.getElementById("exampleModal"));
        modal.hide();

        location.reload();
    }, 3000);
});