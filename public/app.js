const API_URL = "http://localhost:3000/api/medicamentos";

const container = document.getElementById("medicamentos");
const form = document.getElementById("form");

// Load medicines
const loadMedicines = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();

  container.innerHTML = "";

  data.forEach(med => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${med.nombre}</h3>
      <p>$${med.precio}</p>
    `;
    container.appendChild(div);
  });
};

// Add medicine
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre, precio })
  });

  form.reset();
  loadMedicines();
});

// Init
loadMedicines();
