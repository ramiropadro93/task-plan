export function getFechaHoy() : string {
  const fechaHoy = new Date();
  const dia = fechaHoy.getDate().toString().padStart(2, '0');
  const mes = (fechaHoy.getMonth() + 1).toString().padStart(2, '0');
  const anio = fechaHoy.getFullYear().toString().slice(-2);
  return `${dia}/${mes}/${anio}`;
}

