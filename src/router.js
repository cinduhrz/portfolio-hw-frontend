// Import Dependencies
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import { projectsLoader, aboutLoader } from './loaders'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Home/>}/>
            <Route
            path="about"
            loader={aboutLoader}
            element={<About/>}/>
            <Route
                path="projects"
                loader={projectsLoader}
                element={<Projects/>}/>
        </Route>
    )
)

export default router