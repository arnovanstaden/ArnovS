import * as ProjectFunctions from "./projects";


test('returns correct filter functions', () => {
    const projects = [
        {
            category: "Web Applications",
        }
    ]

    const result = ["All", "Web Applications"]

    expect(
        ProjectFunctions.getProjectFilters(projects)
    ).toEqual(result)
})

test("returns correct project images path", () => {
    const project =
    {
        name: "The Mish Dish",
        type: "Development"

    }

    expect(ProjectFunctions.getProjectImagePath(project))
        .toBe("/images/projects/development/The-Mish-Dish")
})


