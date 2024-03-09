function pageWall() {
  let caminhoAtual = window.location.pathname;
  let novoCaminho = caminhoAtual.replace("/home/", "/parede/");
  window.location.href = novoCaminho;
}
