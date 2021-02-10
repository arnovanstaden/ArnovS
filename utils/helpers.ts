export function getProjectImagePath(project): string {
    const path = `/images/projects/${project.type.toLowerCase()}/${project.name.replace(/ /g, "-")}`
    return path
}