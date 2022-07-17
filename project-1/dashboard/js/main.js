const closeAside = document.querySelector("#close-aside"),
  aside = document.querySelector("#aside"),
  buttonAside = document.querySelector("#button-aside"),
  toggleTheme = document.querySelector("#toggle-theme");

// Open Aside
buttonAside.onclick = () => {
  aside.style.display = `block`;
};

// Close Aside
closeAside.onclick = () => {
  aside.style.display = `none`;
};

// Change theme color
toggleTheme.onclick = () => {
  document.body.classList.toggle("light-color");
  toggleTheme.querySelector("span:nth-child(1)").classList.toggle("active");
  toggleTheme.querySelector("span:nth-child(2)").classList.toggle("active");
};

// Order API
orders.forEach((order) => {
  let tr = document.createElement("tr");
  let dada = `
                <td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td>${order.paymentStatus}</td>
                <td class="${order.shipping === "Recusado" ? "danger" : order.shipping === "Pendente" ? "warning" : "primary"}">${order.shipping}</td>
                <td class="primary">Detalhes</td>
  `;
  tr.innerHTML = dada;
  document.querySelector("table tbody").appendChild(tr);
});
