import { useLoaderData } from 'react-router-dom'

const Projects = (props) => {
    const projects = useLoaderData()

    return projects.map((element) => element.name)
}

export default Projects