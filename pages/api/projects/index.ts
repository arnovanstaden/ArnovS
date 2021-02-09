import projects from "../../../assets/data/projects.json";

export default (req, res) => {
    const {
        query: { name },
    } = req;
    res.status(200).json(projects)
}
