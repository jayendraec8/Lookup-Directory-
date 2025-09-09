function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user && pass) {
    document.getElementById('loginPage').classList.remove('active');
    document.getElementById('mainPage').classList.add('active');
  } else {
    alert('Enter username and password');
  }
}

function logout() {
  document.getElementById('mainPage').classList.remove('active');
  document.getElementById('loginPage').classList.add('active');
}

function toggleDropdown() {
  const dropdown = document.getElementById('dropdownMenu');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function selectState(state) {
  document.getElementById('stateTitle').textContent = state.toUpperCase();
  document.getElementById('dropdownMenu').style.display = 'none';
}

function updatePlaceholder() {
  const select = document.getElementById("filterSelect");
  const input = document.getElementById("filterInput");
  input.placeholder = "Enter " + select.options[select.selectedIndex].text;
}

// Sample Data
const csvData = [
  { "MANDAL_NAME": "AGALI", "SECRETARIAT_NAME": "AGALI", "RICE_CARD_NO": "2813920724", "POLICY_HOLDER_NAME": "Krishna Gari Krishna", "POLICY_HOLDER_GENDER": "MALE", "POLICY_HOLDER_MOBILE": "8886246198", "Nominee_Name": "Krishna Gari Kavita", "Nominee_Relation": "Wife" },
  { "MANDAL_NAME": "AGALI", "SECRETARIAT_NAME": "AGALI", "RICE_CARD_NO": "2800094201", "POLICY_HOLDER_NAME": "Eedigara Thimarayappa", "POLICY_HOLDER_GENDER": "MALE", "POLICY_HOLDER_MOBILE": "9951210962", "Nominee_Name": "Eedigara Shivamma", "Nominee_Relation": "Wife" }
];

function searchCSV() {
  const filterType = document.getElementById("filterSelect").value;
  const filterValue = document.getElementById("filterInput").value.trim().toUpperCase();

  const matches = csvData.filter(row =>
    String(row[filterType]).toUpperCase().includes(filterValue)
  );

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // clear old results

  if (matches.length > 0) {
    let table = "<table><tr>";
    Object.keys(matches[0]).forEach(col => {
      table += `<th>${col}</th>`;
    });
    table += "</tr>";

    matches.forEach(row => {
      table += "<tr>";
      Object.values(row).forEach(val => {
        table += `<td>${val}</td>`;
      });
      table += "</tr>";
    });

    table += "</table>";
    resultsDiv.innerHTML = table;
  } else {
    resultsDiv.innerHTML = "<p style='text-align:center;color:red;'>No matching record found.</p>";
  }
}

// Hide dropdown when clicking outside
window.addEventListener("click", (e) => {
  const dropdown = document.getElementById("dropdownMenu");
  if (!e.target.closest(".menu-button") && !e.target.closest("#dropdownMenu")) {
    dropdown.style.display = "none";
  }
});
