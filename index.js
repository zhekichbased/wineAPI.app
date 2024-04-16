



let zaz = document.querySelector("#last");

zaz.addEventListener("click", () => {
  axios.get("https://api.sampleapis.com/wines/port")
    .then(response => {

      const data = response.data;
      const container = document.getElementById("container");

      for (let i = 0; i < 200; i++) {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const pis = document.createElement("p");
        const add1 = document.createElement("span");
        const add = document.createElement("span");
        const button = document.createElement("button");

        img.src = data[i].image;
        add1.textContent = data[i].wine;
        add.textContent = data[i].rating.reviews;

  data.sort((a, b) => a.wine.localeCompare(b.wine));

        button.textContent = "Add to cart";

        pis.appendChild(add1);
        pis.appendChild(img);
        pis.appendChild(add);
        pis.appendChild(button);

        button.addEventListener("click", () => {
let elementId = data[i].id;
console.log(elementId);
        })
         
        div.appendChild(pis);
        container.appendChild(div);

      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});


let buttonChange = document.querySelector("#lastButtons");
buttonChange.addEventListener("click", () => {
  buttonChange.style.display = "none";
})