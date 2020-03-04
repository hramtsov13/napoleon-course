let table = document.getElementById("table");
let text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis totam nemo dolores, voluptatum enim voluptatibus accusamus fugit explicabo odit laborum et vero nisi nostrum optio aliquid dolor, itaque corporis laboriosam!";

let textArray = text.split(" ");

textArray.forEach((element, index) => {
  let tr = document.createElement("tr");
  let tdNum = document.createElement("td");
  let td = document.createElement("td");
  td.innerText = element;
  tdNum.innerText = index;
  tr.appendChild(tdNum);
  tr.appendChild(td);
  table.appendChild(tr);
});
