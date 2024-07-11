document.addEventListener("DOMContentLoaded", function () {
    fetch('suits.json')
        .then(response => response.json())
        .then(data => {
            suitList = document.getElementById("suitList");

            nameSingular = document.createElement("p");
            nameSingular.textContent = "Suit Name: " + data.name_singular;
            suitList.appendChild(nameSingular);
        });
});