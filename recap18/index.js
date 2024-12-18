let movie = {
    title: prompt("Ingrese el título de la película favorita:"),
    director: prompt("Ingrese el director de la película:"),
    releaseYear: prompt("Ingrese el año de estreno de la película:"),
    genre: prompt("Ingrese el género de la película:")
  };
  alert(JSON.stringify(movie));
  