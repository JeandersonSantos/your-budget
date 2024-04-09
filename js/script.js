function pageWall() {
  let caminhoAtual = window.location.pathname;
  let novoCaminho = `pages/parede${caminhoAtual}`;
  window.location.href = novoCaminho;
}

function pageLaje() {
  let caminhoAtual = window.location.pathname;
  let novoCaminho = `pages/laje${caminhoAtual}`;
  window.location.href = novoCaminho;
}

function pageTelhado() {
  let caminhoAtual = window.location.pathname;
  let novoCaminho = `pages/telhado${caminhoAtual}`;
  window.location.href = novoCaminho;
}

function pagePiso() {
  let caminhoAtual = window.location.pathname;
  let novoCaminho = `pages/piso${caminhoAtual}`;
  window.location.href = novoCaminho;
}

function back() {
  let novoCaminho = "/index.html";
  window.location.href = novoCaminho;
}
