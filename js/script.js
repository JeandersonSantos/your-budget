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
