const paragraphe_lorem = document.getElementById("lorem2");

console.log(paragraphe_lorem);
console.dir(paragraphe_lorem); // Présente l'ensemble des attributs du DOM par rapport à un élément (ici, "lorem")

paragraphe_lorem.id = "LoremUpdate";
paragraphe_lorem.innerHTML = "<script>alert('Aloha')</script>";
paragraphe_lorem.textContent = "<strong>Coucou</strong>";