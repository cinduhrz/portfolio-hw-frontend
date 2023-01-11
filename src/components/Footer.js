import { Link } from 'react-router-dom'

const Footer = (props) => {
    return (<>
        <footer>
            <div className="footer-text-area">
                <h2>Cindy Wong</h2>
                <p>This portfolio site was made by Cindy Wong. Check out Cindy's links! She will be very happy.</p>
            </div>
            <div className="footer-nav">
                <Link to="https://github.com/cinduhrz">
                    <div>Github</div>
                </Link>
                <Link to="https://www.linkedin.com/in/cindywongdev/">
                    <div>LinkedIn</div>
                </Link>
                <Link to="https://github.com/cinduhrz/portfolio-hw-frontend">
                    <div>This Portfolio's Repo</div>
                </Link>
            </div>
        </footer>
    </>)
}

export default Footer