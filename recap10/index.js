let car = {
  brand: prompt("Ingrese la marca del automóvil:"),
  model: prompt("Ingrese el modelo del automóvil:"),
  year: prompt("Ingrese el año del automóvil:"),
  isAutomatic: confirm("¿Es automático? (OK para sí, Cancelar para no)"),
  previousOwners: []
};
for (let i = 0; i < 3; i++) {
  car.previousOwners.push(prompt(`Ingrese el nombre del dueño anterior ${i + 1}:`));
}
alert(JSON.stringify(car));
