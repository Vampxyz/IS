const btn = document.getElementById("clica");
btn.addEventListener("click", () => {
    const opt = Number(
    prompt(
        "1 - Adição \n2 - Subtração \n3 - Multiplicação \n4 - Divisão \n5 - Potenciação"
    )
    );
    n1 = parseFloat(prompt("Digite seu primeiro número"));
    n2 = parseFloat(prompt("Digite seu segundo número"));

  switch (opt) {
    case 1:
      alert("Você escolheu adição");

      alert(add());

      break;

    case 2:
      alert("Você escolheu subtração");

      alert(sub());

      break;

    case 3:
      alert("Você escolheu multiplicação");

      alert(mult());

      break;

    case 4:
      alert("Você escolheu divisão");

      alert(div());

      break;

    case 5:
      alert("Você escolheu potenciação");

      alert(pot());

      break;

    default:
      break;
  }
});

function add() {
  return n1 + n2;
}

function sub() {
  return n1 - n2;
}

function mult() {
  return n1 * n2;
}

function div() {
  return n1 / n2;
}

function pot() {
  return n1 ** n2;
}
