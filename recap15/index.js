let university = {
    name: prompt("Ingrese el nombre de la universidad:"),
    location: prompt("Ingrese la ubicación de la universidad:"),
    studentCount: prompt("Ingrese el número de estudiantes:"),
    offersOnlineClasses: confirm("¿Ofrece clases en línea? (OK para sí, Cancelar para no)"),
    careers: []
  };
  for (let i = 0; i < 4; i++) {
    university.careers.push(prompt(`Ingrese la carrera que oferta la universidad ${i + 1}:`));
  }
  alert(JSON.stringify(university));
  