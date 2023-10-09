function toggleMode() {
  //criando função

  /*'document' é a representação da nossa pagina, em formato de objeto javascript
sempre que colocar o '.' eu estou acessando propriedades e funcionalidades.
Dentro do documento eu acesso a minha tag html, através do documentElement */
  const html = document.documentElement //variavel html
  // documentElement é um atributo do objeto 'document'.

  /*classlist é um objeto que vai ter algumas propriedades, como 'contains';
A lista de classe contem o light?
 Abaixo uma forma de fazer: */
  /*
if (html.classList.contains('light')){
  html.classList.remove('light')
}else{
      html.classList.add('light')
    }
  }
  */

  // ou fazer desta 2a forma com o toggle (função) faz sozinho essa condição acima:
  html.classList.toggle("light") // procura o atributo 'classlist', dentro do objeto documento. Neste atributo 'classlist' está procurando a função toggle. Nesta função, adiciona se não existe, se existir ele remove.

  //1-pegar a tag img
  const img = document.querySelector("#profile img")
  // query selector é uma função dentro do document que pesquisa pelo seletor.
  // no argumento usado é o mesmo seletor css

  //2 - substituir tema
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png") //adicionar, modificar um atributo
  } else {
    // se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
