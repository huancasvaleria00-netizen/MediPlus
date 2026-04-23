const API_URL = "http://localhost:3000/api/medicamentos";

export const getMedicamentos = async () => {
  try {
    const res = await fetch(API_URL);
    return await res.json();
  } catch (error) {
    console.error("Error fetching medicines:", error);
    return [];
  }
};

export const createMedicamento = async (data) => {
  try {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  } catch (error) {
    console.error("Error creating medicine:", error);
  }
};
