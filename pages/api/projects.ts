import projects from "../../assets/data/projects-development.json";

export default (req, res) => {
  res.status(200).json(projects)
}
