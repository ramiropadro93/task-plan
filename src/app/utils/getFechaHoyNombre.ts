export function getFechaHoyNombre() : string {
  const fechaHoy = new Date();

  // Días de la semana en formato corto
  const diasSemana = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];

  // Obtener el nombre del día de hoy
  const nombreDia = diasSemana[fechaHoy.getDay()];

  // Formatear la fecha en formato dd/MM/yyyy
  const dia = fechaHoy.getDate().toString().padStart(2, '0'); // Obtener el día del mes (con ceros a la izquierda si es necesario)
  const mes = (fechaHoy.getMonth() + 1).toString().padStart(2, '0'); // Obtener el mes (se suma 1 porque los meses van de 0 a 11)
  const anio = fechaHoy.getFullYear(); // Obtener el año

  // Construir la cadena con el nombre del día y la fecha formateada
  const fechaFormateada = `${nombreDia} ${dia}/${mes}/${anio}`
    return fechaFormateada;
}
