import { getFileCount } from "./utils";

test("project images count return is number && >1", () => {
    const project = {
        name: "Tickity Tackity",
        type: "Development"
    }
    const result = getFileCount(project)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(typeof result).toBe("number")
})