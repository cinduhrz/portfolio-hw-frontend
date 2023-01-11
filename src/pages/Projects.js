import { useLoaderData } from 'react-router-dom'

const Projects = (props) => {
    const projects = useLoaderData()

    const imageStyling = {
        width: "90%"
    }

    return projects.map((project) => (
        <div>
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name} style={imageStyling}/>
            <a href={project.git}>
                <button>Github</button>
            </a>
            <a href={project.live}>
                <button>Live Site</button>
            </a>
        </div>
        ))
}

export default Projects