import { supabase } from "./supabase.js";

export const getMedicamentos = async () => {
  const { data, error } = await supabase
    .from("medicamentos")
    .select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};

export const createMedicamento = async (med) => {
  const { error } = await supabase
    .from("medicamentos")
    .insert([med]);

  if (error) {
    console.error(error);
  }
};
