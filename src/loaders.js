// BASE URL OF OUR DEPLOYED API
// ALWAYS NEED THIS IN LOADERS FILE
const URL = "https://portfolio-hw.onrender.com"

export const projectsLoader = async () => {
    const response = await fetch(URL + "/projects")
    // .json() method turns json object back into JS object
    const projects = await response.json()
    return projects
}

export const aboutLoader = async () => {
    const response = await fetch(URL + "/about")
    const about = await response.json
    return about
}