import { Router } from "express";

const filmesRoutes = Router();

let filmesMarcantes = [
  {
    id: Number(Math.floor(Math.random()* 99) +1),
    nome: "A Cinco Passos de Você",
    genero: "Drama",
    emCartaz: false,
  },
  {
    id: Number(Math.floor(Math.random()* 99) +1),
    nome: "Viva! A vida é uma festa",
    genero: "Infantil/Fantasia",
    emCartaz: false,
  },
  {
    id: Number(Math.floor(Math.random()* 99) +1),
    nome: "As Metas de Jessica Darling",
    genero: "Infantil/Comédia",
    emCartaz: false,
  },
];

// rota para buscar todos os elementos do array filmesMarcantes
filmesRoutes.get("/", (req, res) => {
  return res.status(200).send(filmesMarcantes);
});

// rota para criar nova filme marcante
filmesRoutes.post("/", (req, res) => {
  const { titulo, genero, emCartaz } = req.body;

  const novoFilme = {
    id: Number(Math.floor(Math.random()* 99) +1),
    titulo,
    genero,
    emCartaz,
  };

  filmesMarcantes.push(novoFilme);
  return res.status(201).send(filmesMarcantes);
});

// rota para buscar um elemento específico do array filmesMarcantes
filmesRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  console.log(id);

  const filmes = filmesMarcantes.find((movie) => movie.id === Number(id));

  //console.log(guloseima);

  if (!filmes) {
    return res.status(404).send({ message: "Filme não encontrada!" });
  }

  return res.status(200).send(filme);
});

// rota para editar um filme marcante
filmesRoutes.put("/:id", (req, res) => {
  const { id } = req.params;

  const filme = filmesMarcantes.find((movie) => movie.id === Number(id));

  //console.log(filme);

  if (!filme) {
    return res.status(404).send({ message: "Filme não encontrado!" });
  }

  const { titulo, genero, emCartaz } = req.body;
  //console.log(titulo);

  filme.titulo = titulo;
  filme.genero = genero;
  filme.emCartaz = emCartaz;

  return res.status(200).send({
    message: "Filme atualizado",
    filme,
  });
});

// rota para deletar um filme marcante
filmesRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  const filme = filmesMarcantes.find((movie) => movie.id === Number(id));

  if (!filme) {
    return res.status(404).send({ message: "filme não encontrado!" });
  }

  filmesMarcantes = filmesMarcantes.filter((movie) => movie.id !== Number(id));

  return res.status(200).send({
    message: "filme deletado!",
    filme
  });
});

export default filmesRoutes;