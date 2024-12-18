let nums = [];
nums.push(prompt("Ingrese el valor en el índice 0:"));
nums.push(prompt("Ingrese el valor en el índice 1:"));
nums.push(prompt("Ingrese el valor en el índice 2:"));
nums.push(prompt("Ingrese el valor en el índice 3:"));
alert(nums.reduce((a, b) => parseInt(a) + parseInt(b), 0) > 20 ? "Sí" : "No");
