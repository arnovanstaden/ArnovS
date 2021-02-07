import projects from "../../../assets/data/projects-development.json";

export default (req, res) => {
  const {
    query: { name },
  } = req;
  const project = projects.find(project => project.name.replace(/ /g, "").toLowerCase() === name);
  res.status(200).json(project)
}
