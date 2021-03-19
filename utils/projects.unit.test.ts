import * as FilterFunctions from "./projects";


test('returns correct filter functions', () => {
    const project = [
        {
            category: "Web Applications",
        }
    ]

    const result = ["All", "Web Applications"]

    expect(
        FilterFunctions.getProjectFilters(project)
    ).toEqual(result)
})
