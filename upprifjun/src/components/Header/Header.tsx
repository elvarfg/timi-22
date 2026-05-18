import { Link } from "react-router-dom";
import "./styles.css";
export default function Header() {
  return (
    <div className="header">
      <img
        src="https://pics.craiyon.com/2023-11-07/49f6225e6ec741c8be1bd5cb2534c904.webp"
        alt=":)"
        height={80}
      />

      <nav>
        <Link className="link" to="/">
          Heim
        </Link>
        <Link className="link" to="/posts">
          Allir Postar
        </Link>
      </nav>
    </div>
  );
}
