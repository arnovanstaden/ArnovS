type TStyles = {
    readonly [key: string]: string
}

export const handleClasses = (styles: TStyles, index: number) => {
    const filters = document.querySelector(`.${styles.filters}`)
    const filterButtons = Array.from(filters.children);
    filterButtons.forEach((button) => {
        button.classList.add(`${styles.hollow}`);
    })
    filterButtons[index].classList.remove(`${styles.hollow}`)
}

type TProject = {
    [key: string]: any
}

export const getProjectFilters = (projects: TProject[]) => {
    const projectFilters = ["All"];
    projects.forEach((project) => {
        projectFilters.includes(project.category) ? null : projectFilters.push(project.category);
    })
    return projectFilters
}