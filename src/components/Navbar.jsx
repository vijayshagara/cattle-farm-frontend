import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Cattle Farm</Link>
      <div>
        <Link className="btn btn-outline-light me-2" to="/">Cows</Link>
        <Link className="btn btn-outline-light me-2" to="/health">Health</Link>
        <Link className="btn btn-outline-light" to="/heat-cycles">Heat Cycles</Link>
      </div>
    </nav>
  );
}
