const form = document.getElementById('addStudentForm');
const firstnameInput = document.getElementById('firstname');
const lastnameInput = document.getElementById('lastname');
const attendanceTable = document.getElementById('attendanceTable').querySelector('tbody');
const resetButton = document.getElementById('resetButton');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const firstname = firstnameInput.value.trim();
    const lastname = lastnameInput.value.trim();

    if (firstname && lastname) {
        addStudent(firstname, lastname);
        form.reset();
    }
});

resetButton.addEventListener('click', () => {
    attendanceTable.innerHTML = '';
});

function addStudent(firstname, lastname) {
    const row = document.createElement('tr');

    const firstnameCell = document.createElement('td');
    firstnameCell.textContent = firstname;
    row.appendChild(firstnameCell);

    const lastnameCell = document.createElement('td');
    lastnameCell.textContent = lastname;
    row.appendChild(lastnameCell);

    const presenceCell = document.createElement('td');
    const presentButton = document.createElement('button');
    presentButton.textContent = 'Présent';
    presentButton.addEventListener('click', () => {
        row.classList.add('present');
        row.classList.remove('absent');
    });

    const absentButton = document.createElement('button');
    absentButton.textContent = 'Absent';
    absentButton.addEventListener('click', () => {
        row.classList.add('absent');
        row.classList.remove('present');
    });

    // Ajouter un bouton de réinitialisation
    const resetPresenceButton = document.createElement('button');
    resetPresenceButton.textContent = 'Réinitialiser';
    resetPresenceButton.addEventListener('click', () => {
        row.classList.remove('present', 'absent');
    });

    presenceCell.appendChild(presentButton);
    presenceCell.appendChild(absentButton);
    presenceCell.appendChild(resetPresenceButton);
    row.appendChild(presenceCell);

    // Ajouter un bouton de suppression
    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.addEventListener('click', () => {
        attendanceTable.removeChild(row);
    });

    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    attendanceTable.appendChild(row);
};