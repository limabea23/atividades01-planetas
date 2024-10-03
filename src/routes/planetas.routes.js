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

// rota para cadastrar um novo planeta 
planetaRoutes.post("/", (req, res) => {
  const { nome, 
    temperatura, 
    agua, 
    atm } = req.body;

if(!nome || !temperatura || !agua) {
    return res.status(400).send({
        message:"Os campos nome, temperatura e água são obrigatórios!"
    });
}

//validação de existência de água
if(agua != "sim" && agua != "não"){
    return res.status(400).send({
        message:"Digite 'sim' ou 'não' para o campo água, por favor!",
    });
}

  const novoPlaneta = {
    id: Number(Math.floor(Math.random()* 999999) +1),
    nome: "HarryWorld",
    temperatura: 1,
    agua: "sim",
    atm: ["music", "kidness", "ghost"]
  };

  planetas.push(novoPlaneta);
  return res.status(201).send({
    message: "Planeta cadastrado!", 
    novoPlaneta,
  });
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