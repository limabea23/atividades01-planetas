import { Router } from "express";

const planetaRoutes = Router();

let planetas = [
{
    id: Number(Math.floor(Math.random()* 999999) +1),
    nome: "Dev",
    temperatura: 13.3,
    agua: false, //indicação de existência de água
    atm: ["JS", "NODE", "VS", "Code"],
},
];
// rota para buscar todos os elementos do array planetas
planetaRoutes.get("/", (req, res) => {
  return res.status(200).send(planetas);
});

// rota para criar nova filme marcante
planetaRoutes.post("/", (req, res) => {
  const { titulo, genero, emCartaz } = req.body;

  const novoFilme = {
    id: Number(Math.floor(Math.random()* 99) +1),
    titulo,
    genero,
    emCartaz,
  };

  planetas.push(novoFilme);
  return res.status(201).send(planetas);
});

// rota para buscar um elemento específico do array planetas
planetaRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  console.log(id);

  const filmes = planetas.find((movie) => movie.id === Number(id));

  //console.log(guloseima);

  if (!filmes) {
    return res.status(404).send({ message: "Filme não encontrada!" });
  }

  return res.status(200).send(filme);
});

// rota para editar um filme marcante
planetaRoutes.put("/:id", (req, res) => {
  const { id } = req.params;

  const filme = planetas.find((movie) => movie.id === Number(id));

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
planetaRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  const filme = planetas.find((movie) => movie.id === Number(id));

  if (!filme) {
    return res.status(404).send({ message: "filme não encontrado!" });
  }

  planetas = planetas.filter((movie) => movie.id !== Number(id));

  return res.status(200).send({
    message: "filme deletado!",
    filme
  });
});


export default planetaRoutes;