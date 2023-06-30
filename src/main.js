{
  // const menuHTML = document.querySelector(".menu");
  // const padreHTML = document.querySelector("#padre");
  // const perroHTML = document.querySelector("span");
  // const lis = document.querySelectorAll("li");
  // const itemHTML = document.querySelector("#item");
  // const contentUserName = document.querySelector(".contentUser");

  // let name = "bsquiroz";

  // contentUserName.textContent = `<h1>${name}</h1>`;
  // contentUserName.innerHTML = `<h1>${name}</h1>`;

  {
    // una forma
    // console.log(itemHTML.parentElement.parentElement.id);
    // otra forma
    // console.log(itemHTML.closest("#padre"));
  }

  {
    // console.log(itemHTML.previousElementSibling);
    // console.log(itemHTML.nextElementSibling);
    // itemHTML.nextElementSibling.textContent =
    // 	itemHTML.nextElementSibling.textContent.toUpperCase();
    // itemHTML.nextElementSibling.remove();
  }

  {
    // console.log(menuHTML, padreHTML, perroHTML);
    // console.log(menuHTML.firstElementChild);
    // console.log(menuHTML.lastElementChild);
    // for (const li of menuHTML.children) {
    // 	console.log(li);
    // }
    // for (const li of lis) {
    // 	console.log(li);
    // }
  }
}

{
  // atributos y propiedades
  // const gatitoHTML = document.querySelector("#gatito");
  // console.log(gatitoHTML.hasAttribute("brayan"));
  // console.log(gatitoHTML.hasAttribute("src"));
  // console.log(gatitoHTML.getAttribute("src"));
  // console.log(gatitoHTML.getAttribute("alt"));
  // gatitoHTML.setAttribute(
  // 	"src",
  // 	"https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80"
  // );
  // gatitoHTML.removeAttribute("src");
  // console.log(gatitoHTML.attributes);
  // // console.log(gatitoHTML.dataset.brayan);
  // for (const key in gatitoHTML.dataset) {
  // 	console.log(key, gatitoHTML.dataset[key]);
  // }
}

{
  // const cajitaHTML = document.querySelector("#cajita");
  // const changeColorHTML = document.querySelector("#changeColor");
  // console.log(cajitaHTML.classList);
  // console.log(cajitaHTML.classList.contains("brayancajitaHTML"));
  // console.log(cajitaHTML.classList.contains("box"));
  // console.log(cajitaHTML.classList.remove("box--acitve"));
  // console.log(cajitaHTML.classList);
  // console.log(cajitaHTML.classList.remove("box--desactive"));
  // console.log(cajitaHTML.classList);
  // console.log(cajitaHTML.classList.add("box--acitve"));
  // console.log(cajitaHTML.classList.add("box--desactive"));
  // console.log(cajitaHTML.classList);
  // console.log(cajitaHTML.classList.toggle("box--desactive"));
  // console.log(cajitaHTML.classList.toggle("box--acitve"));
  // console.log(cajitaHTML.classList);
  // console.log(cajitaHTML.classList.toggle("box--desactive"));
  // console.log(cajitaHTML.classList.toggle("box--acitve"));
  // console.log(cajitaHTML.classList);
  // changeColorHTML.addEventListener("click", function () {
  // 	// if (cajitaHTML.style.backgroundColor === "blue") {
  // 	// 	cajitaHTML.style.backgroundColor = "red";
  // 	// 	cajitaHTML.style.width = "100px";
  // 	// 	cajitaHTML.style.height = "100px";
  // 	// } else {
  // 	// 	cajitaHTML.style.backgroundColor = "blue";
  // 	// 	cajitaHTML.style.width = "150px";
  // 	// 	cajitaHTML.style.height = "150px";
  // 	// 	cajitaHTML.style.transition =
  // 	// 		"background-color 0.5s, width 0.5s, height 0.5s";
  // 	// }
  // 	// cajitaHTML.classList.toggle("box--acitve");
  // });
}

const users = [
  {
    name: "brayan",
    age: 23,
    ocupation: "dev",
    motivation: "lorem lorem lorem dolares",
    hobbies: ["running", "coding", "eat", "soccer", "video games", "rodar"],
  },
  {
    name: "Edwar León",
    age: 33,
    ocupation: "dev in progress",
    motivation: "ella",
    hobbies: ["ella", "ella", "ella", "ella"],
  },
  {
    name: "Leonardo",
    age: 28,
    ocupation: "estudiar programacion",
    motivation: "el dinero",
    hobbies: ["impresion3d", "programar", "masprogramacion", "backend"],
  },
  {
    name: "Juan",
    age: 26,
    ocupation: "Dj",
    motivation: "Mi mama xd",
    hobbies: ["Mezclar", "Ir a raves", "futbol", "read"],
  },
  {
    name: "Danilo_Florez",
    age: 25,
    ocupation: "Estudiante y Depotista de alto rendimiento",
    motivation: "El dinero y el exito",
    hobbies: ["programar", "jugar futbol", "dormir", "ir a caminar"],
  },
  {
    name: "Daniel",
    age: 20,
    ocupation: "model",
    motivation: "la fiesta",
    hobbies: ["futbol", "musica", "pasión de gavilanes", "las mujeres"],
  },
  {
    name: "Juan Carcamo",
    age: 23,
    ocupation: "Estudiante",
    motivation: "Los dolares",
    hobbies: ["futbol", "gym", "paliculas", "programar"],
  },
  {
    name: "Yonkleiverson",
    age: 20,
    ocupation: "comerciante",
    motivation: "el tusi",
    hobbies: [
      "jugar free fire",
      "ir a misa",
      "estudiar arduamente",
      "comer perros de 0.5$",
    ],
  },
  {
    name: "Cistian Fabra Lar",
    age: 25,
    ocupation: "Diseño grafico",
    motivation: "Dolares",
    hobbies: ["fut", "box", "bike", "tenis"],
  },
  {
    name: "Sergio",
    age: 24,
    ocupation: "Studing",
    motivation: "$$$",
    hobbies: ["Calistenics", "Guitar", "comer", "pelear"],
  },
  {
    name: "Gustavo Alberto Molano Ruiz",
    age: 54,
    ocupation: "Licenciado en Informática",
    motivation: "motorbikes",
    hobbies: ["programming", "bikes", "databases", "cooking"],
  },
  {
    name: "Polo",
    age: 19,
    ocupation: "aprender a programar",
    motivation: "Euros",
    hobbies: ["ejercicio", "cocinar", "peliculas", "anime"],
  },
  {
    name: "Ariel",
    age: 25,
    ocupation: "joseador",
    motivation: "la plata",
    hobbies: ["fútbol", "River", "Lol", "tarde de plaza con los vagos"],
  },
  {
    name: "Angel Nieto",
    age: 29,
    ocupation: "Maestro de matematicas",
    motivation: "Estudiar",
    hobbies: ["Comer", "Bañarme", "dormir", "jugar parkes"],
  },
  {
    name: "Cristian Agudelo",
    age: 26,
    ocupation: "Papa de un hermoso hijo",
    motivation: "Mi Hijo",
    hobbies: ["Atlético Nacional", "Baloncesto", "Correr", "Billar Pool"],
  },
];

// const user = {
// 	name: "brayan",
// 	age: 23,
// 	ocupation: "dev",
// 	motivation: "lorem lorem lorem dolares",
// 	hobbies: ["running", "coding", "eat", "soccer", "video games", "rodar"],
// };

// function printHobbies(array) {
// 	let html = "";

// 	for (const hobbie of array) {
// 		html += `<li>${hobbie}</li>`;
// 	}

// 	return html;
// }

// function printUser() {
// 	const userHTML = document.querySelector(".user");

// 	let html = `
//     <h2>${user.name}</h2>
//     <p>edad: ${user.age} - profesion: ${user.ocupation}</p>
//     <p>
//         <i>${user.motivation}</i>
//     </p>
//     <ul>
//         ${printHobbies(user.hobbies)}
//     </ul>
// `;

// 	userHTML.innerHTML = html;
// }

// printUser();

function printUsuarios(array) {
  const usersHtml = document.querySelector(".user");
  for (const user of array) {
    let printIndiv = `<div>
	<h2> ${user.name}</h2>
<p>Tengo ${user.age} años</p>
<p>Mi profesión es ${user.ocupation}</p>
<p>Lo que me motiva en este curso es ${user.motivation}</p>
<p>Mis hobbies son</p>
<ul> ${pirntHobbiesUsers(user.hobbies)} </ul>
</div`;

    usersHtml.innerHTML += printIndiv;
  }
}

function pirntHobbiesUsers(array) {
	let arrayHobbies = "";
	for (const hobbie of array) {
		arrayHobbies += `<li>${hobbie}</li>`

	}

	return arrayHobbies
}

printUsuarios(users);
