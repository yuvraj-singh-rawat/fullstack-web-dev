function saveData() {
    let name = document.getElementById("nameInput").value;
    let age = document.getElementById("ageInput").value;

    // convert to object
    let user = {
        name: name,
        age: age
    };

    // to save in localstorage
    sessionStorage.setItem("userData", JSON.stringify(user));
    alert("Data saved to session Storage!");
}

function loadData() {
    let stored = sessionStorage.getItem("userData");

    if (stored) {
        let user = JSON.parse(stored);
        document.getElementById("output").innerText =
            `Name: ${user.name}, Age: ${user.age}`;
    } else {
        document.getElementById("output").innerText = "No data found!";
    }
}

function clearData() {
    sessionStorage.removeItem("userData");
    // sessionStorage.clear();
    document.getElementById("output").innerText = "Data cleared!";
}