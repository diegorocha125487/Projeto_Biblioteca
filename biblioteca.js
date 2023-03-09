<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/style.css">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&display=swap" rel="stylesheet">
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

  <title>Biblioteca</title>
</head>

<body>
  <header>Biblioteca Virtual</header>
  <section>
    <form id="register">
      <h3>Cadastre um livro</h3>
      <label for="bookName">Insira o nome do livro:</label>
      <input type="text" name="bookName" id="bookName">
      <label for="bookAuthor">Insira o autor do livro:</label>
      <input type="text" name="bookAuthor" id="bookAuthor">
      <label for="bookPublisher">Insira a editora do livro:</label>
      <input type="text" name="bookPublisher" id="bookPublisher">
      <label for="numberOfPages">Insira a quantidade de p�ginas:</label>
      <input type="number" name="numberOfPages" id="numberOfPages">
      <label for="bookCover">Insira o link da capa:</label>
      <input type="text" name="bookCover" id="bookCover">
      <label for="synopsis">Insira a sinopse:</label>
      <textarea name="synopsis" id="synopsis" cols="50" rows="10"></textarea>
      <button id="btnRegister">Cadastre</button>
    </form>

    <div id="myModal" class="modal">
      <div id="contentModel" class="modal-content">
        <span id="btnCloseModal">&times;</span>
        <h3 id="modalTitle"></h3>
        <p id="txtSynopsis"></p>
      </div>
    </div>

    <div id="listOfBooksSearch">
      <h3>Busque um livro</h3>
      <label for="bookNameSearch">Digite o livro que deseja procurar:</label>
      <input type="text" name="bookNameSearch" id="bookNameSearch">
      <button id="btnSearch">Buscar</button>
      <div id="foundBooks"></div>
    </div>

    <div id="AllBooks">
      <h3 id="titleAllBooks">Todos os Livros</h3>
      <div id="listOfAllBooks">
        <p  id="emptyBookList">Nenhum livro cadastrado</p>
      </div>
    </div>
  </section>

  <script src="/biblioteca.js"></script>
</body>

</html>