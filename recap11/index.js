let pet = {
    name: prompt("Ingrese el nombre de la mascota:"),
    age: prompt("Ingrese la edad de la mascota:"),
    species: prompt("Ingrese la especie de la mascota:"),
    hasVaccines: confirm("¿Tiene vacunas al día? (OK para sí, Cancelar para no)")
  };
  alert(JSON.stringify(pet));
  