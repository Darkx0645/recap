let phone = {
    brand: prompt("Ingrese la marca de su teléfono:"),
    model: prompt("Ingrese el modelo de su teléfono:"),
    isSmartphone: confirm("¿Es un smartphone? (OK para sí, Cancelar para no)")
  };
  alert(JSON.stringify(phone));
  