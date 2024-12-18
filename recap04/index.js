let person = {
    name: prompt("Ingrese el nombre de la persona:"),
    age: prompt("Ingrese la edad de la persona:"),
    hobbies: []
  };
  for (let i = 0; i < 3; i++) {
    person.hobbies.push(prompt(`Ingrese el hobby ${i + 1}:`));
  }
  alert(JSON.stringify(person));
  