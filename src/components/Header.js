import { Link } from 'react-router-dom'

const Header = (props) => {
    // inline style for the nav tag
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        borderRadius: "1rem",
        padding: "8px",
        width: "90%",
        margin: "auto"
    }

    return (<>
        <header>
            <nav style={navStyle}>
                <Link to="/">
                    <div>Home</div>
                </Link>
                <Link to="/about">
                    <div>About</div>
                </Link>
                <Link to="/projects">
                    <div>Projects</div>
                </Link>
            </nav>
        </header>
    </>)
}

export default Header