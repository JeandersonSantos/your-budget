function pageWall() {
  let caminhoAtual = window.location.pathname;
  let novoCaminho = caminhoAtual.replace("/home/", "/parede/");
  window.location.href = novoCaminho;
}

function pageLaje() {
  let caminhoAtual = window.location.pathname;
  let novoCaminho = caminhoAtual.replace("/home/", "/laje/");
  window.location.href = novoCaminho;
}

function pageTelhado() {
  let caminhoAtual = window.location.pathname;
  let novoCaminho = caminhoAtual.replace("/home/", "/telhado/");
  window.location.href = novoCaminho;
}

function pagePiso() {
  let caminhoAtual = window.location.pathname;
  let novoCaminho = caminhoAtual.replace("/home/", "/piso/");
  window.location.href = novoCaminho;
}

