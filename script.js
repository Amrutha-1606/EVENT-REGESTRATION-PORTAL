let participants = [];

function register() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let event = document.getElementById("event").value;

    if (name === "" || email === "" || phone === "" || event === "") {
        alert("Please fill all fields");
        return;
    }

    let participant = {
        name: name,
        email: email,
        phone: phone,
        event: event
    };

    participants.push(participant);

    displayParticipants();

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("event").value = "";

    alert("Registration Successful!");
}

function displayParticipants() {

    let list = document.getElementById("participantList");

    list.innerHTML = "";

    participants.forEach(function(participant, index) {

        list.innerHTML += `
            <tr>
                <td>${participant.name}</td>
                <td>${participant.email}</td>
                <td>${participant.phone}</td>
                <td>${participant.event}</td>
                <td>
                    <button class="delete"
                    onclick="deleteParticipant(${index})">
                    Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

function deleteParticipant(index) {

    participants.splice(index, 1);

    displayParticipants();
}