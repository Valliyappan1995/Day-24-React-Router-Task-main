import { Link, Outlet } from "react-router-dom";

const FSDLayout = () => {
  return (
    <>
      <header className="header">
        <h1>Full Stack Development</h1>
        <p className="first-para">
          Are you a curious geek with an unstoppable urge to develop? Then, your
          Full Stack Development knack would be <br />
          sun-glazed with an innovative and informative piece of knowledge that
          comes from Top industrialists and <br />
          Appreneurs!
        </p>
        <p className="second-para">
          The GUVI Blog’s Full Stack Development category is here to help you
          steer through a lot of opinions that float on <br />
          the internet. High-Quality content curated by experts!
        </p>
      </header>
      <nav className="FSD-navigation">
        <ul>
          <li>
            <Link to="/">ALL</Link>
          </li>
          <li>
            <Link to="/fullstack">FULLSTACK DEVELOPMENT</Link>
          </li>
          <li>
            <Link to="/data-science">DATA SCIENCE</Link>
          </li>
          <li>
            <Link to="/cyber-security">CYBER SECURITY</Link>
          </li>
          <li>
            <Link to="/career">CAREER</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default FSDLayout;
