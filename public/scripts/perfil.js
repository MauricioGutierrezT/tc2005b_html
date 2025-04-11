window.onload = () => {
    if (sessionStorage.name) {
        const name = document.getElementById(("name"));
        name.innerText = "Name: " + sessionStorage.name;

    } else {
        window.location = "../pages/login.html";
    }
   
    };

    const logout = document.getElementById("logout");
    logout.addEventListener("click", () => {
        sessionStorage.clear;
    });
