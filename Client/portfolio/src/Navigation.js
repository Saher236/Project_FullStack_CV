import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">PortfolioPage</Link> | 
      <Link to="/about">AboutPage</Link> | 
      <Link to="/skills">SkillsPage</Link> | 
      <Link to="/contact">ContactPage</Link> | 
      <Link to="/admin">AdminPage</Link>
    </nav>
  );
}

export default Navigation;