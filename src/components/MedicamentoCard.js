export const MedicamentoCard = (med) => {
  return `
    <div class="card">
      <h3>${med.nombre}</h3>
      <p>$${med.precio}</p>
    </div>
  `;
};
