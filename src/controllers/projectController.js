const Project = require('../models/projects');

exports.find = async (req, res) => {
  const project = await Project.findOne({ _id: req.params.id });
  res.send({
    ok: true,
    data: project,
  });
};

exports.all = async (req, res) => {
  const projects = await Project.find(req.query).populate({
    path: 'tasks', // el path es el nombre del campo que tiene la referencia al modelo
    strictPopulate: false, // para que no se rompa si no encuentra el campo en el documento
  });
  res.send({
    ok: true,
    data: projects,
  });
};

exports.create = async (req, res) => {
  const project = await Project.create(JSON.parse(req.body)); // req.body es un string, por eso lo parseamos
  res.send({
    ok: true, // para que el cliente sepa que la respuesta es correcta
    data: project, // para que el cliente tenga acceso al documento creado
  });
};

exports.update = async (req, res) => {
  const project = await Project.updateOne({ _id: req.params.id }, JSON.parse(req.body));
  res.send({
    ok: true,
    message: 'Document updated successfully!',
    data: project,
  });
};

exports.del = async (req, res) => {
  await Project.deleteOne({ _id: req.params.id });
  res.send({
    ok: true,
    message: 'Document deleted successfully!',
  });
};
