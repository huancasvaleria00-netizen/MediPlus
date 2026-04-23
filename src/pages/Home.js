import { getMedicamentos, createMedicamento } from "../services/api.js";
import { MedicamentoCard } from "../components/MedicamentoCard.js";

export const Home = async () => {
  const app = document.getElementById("app");

  const data = await getMedicamentos();

  app.innerHTML = `
    <h1>MediPlus 💊</h1>

    <div id="list"></div>

    <h2>Add Medicine</h2>
    <form id="form">
      <input id="nombre" placeholder="Name" required />
      <input id="precio" type="number" placeholder="Price" required />
      <button>Add</button>
    </form>
  `;

  const list = document.getElementById("list");
  list.innerHTML = data.map(MedicamentoCard).join("");

  document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;

    await createMedicamento({ nombre, precio });

    location.reload();
  });
};
