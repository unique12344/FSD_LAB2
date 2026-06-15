function openModal() {
    document.getElementById("myModal").showModal();
}

function closeModal() {
    document.getElementById("myModal").close();
}

function saveName() {
    let name = document.getElementById("studentName").value;
    localStorage.setItem("studentName", name);
    document.getElementById("nameOutput").innerHTML = "Name saved successfully.";
}

function showName() {
    let name = localStorage.getItem("studentName");
    document.getElementById("nameOutput").innerHTML = "Saved Name: " + name;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("locationOutput").innerHTML = "Geolocation is not supported.";
    }
}

function showPosition(position) {
    document.getElementById("locationOutput").innerHTML =
        "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}
