let nums = [];
nums.push(prompt("Ingrese el valor en el índice 0:"));
nums.push(prompt("Ingrese el valor en el índice 2:"));
nums.push(prompt("Ingrese el valor en el índice 4:"));
alert((parseInt(nums[0]) + parseInt(nums[1]) + parseInt(nums[2])) % 2 === 0 ? "Sí" : "No");
