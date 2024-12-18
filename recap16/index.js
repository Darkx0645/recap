let bike = {
    brand: prompt("Ingrese la marca de la bicicleta:"),
    model: prompt("Ingrese el modelo de la bicicleta:"),
    brakeType: prompt("Ingrese el tipo de freno de la bicicleta:"),
    hasGears: confirm("¿Tiene cambios de marcha? (OK para sí, Cancelar para no)")
  };
  alert(JSON.stringify(bike));
  