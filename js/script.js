function pageWall() {
  let novoCaminho = `pages/parede/index.html`;
  window.location.href = novoCaminho;
}

function pageLaje() {
  let novoCaminho = `pages/laje/index.html`;
  window.location.href = novoCaminho;
}

function pageTelhado() {
  let novoCaminho = `pages/telhado/index.html`;
  window.location.href = novoCaminho;
}

function pagePiso() {
  let novoCaminho = `pages/piso/index.html`;
  window.location.href = novoCaminho;
}

function back() {
  let caminhoAtual = window.location.pathname;
  let novoCaminho = caminhoAtual.replace(/pages\/.*$/, "");
  window.location.href = `${novoCaminho}index.html#menu`;
}

function formatNumber(number) {
  if (
    Number.isFinite(number) &&
    !Number.isInteger(number) &&
    number.toString().split(".")[1].length > 1
  ) {
    return number.toFixed(2);
  } else {
    return number;
  }
}

function formatTextCement(amount) {
  if (amount >= 50) {
    let total = amount / 50;
    let sacks = Math.floor(total);
    let result = `${sacks} saco(s) de cimento`;
    let kilos = total - sacks;
    if (kilos !== 0) {
      result =
        result +
        ` e ${formatNumber(
          kilos
        )} quilos de cimento, (cada saco de cimento com 50kg)`;
      return result;
    } else {
      result = result + ", (cada saco de cimento com 50kg)";
      return result;
    }
  } else {
    return `${formatNumber(amount)} kg de cimento`;
  }
}

function formatTextBrick(amount) {
  if (amount >= 1000) {
    let total = amount / 1000;
    let milheiro = Math.floor(total);
    let result = `${milheiro} milheiro(s) de tijolo(s)`;
    let units = total - milheiro;
    if (units !== 0) {
      result = result + ` e ${formatNumber(units)} unidade(s)`;
      return result;
    } else {
      return result;
    }
  } else {
    return `${formatNumber(amount)} unidade(s)`;
  }
}

function formatTextSandAndSkittish(amount) {
  if (amount >= 20) {
    let total = amount / 20;
    let metro = Math.floor(total);
    let result = `${metro} metro(s)`;
    let carros = (total - metro) * 20;

    if (carros !== 0) {
      result = result + ` e ${formatNumber(carros)} carro de mão`;
      return result;
    } else {
      return result;
    }
  } else {
    return `${formatNumber(amount)} carro de mão`;
  }
}
