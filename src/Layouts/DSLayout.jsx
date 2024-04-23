import { Link, Outlet } from "react-router-dom";

const DSLayout = () => {
  return (
    <>
      <header className="header">
        <h1>Data Science</h1>
        <p className="first-para">
          One of the most propelling careers on the planet today, Data Science
          is a vast arena of diverse technologies and <br />
          techniques. Are you ready to step into the world of Data? Then you
          probably should not miss this corner of <br />
          articles that is an assorted curation out of tedious research &
          exploration.
        </p>
        <p className="second-para">
          The GUVI Blog’s Data Science category is here to help you steer
          through a lot of opinions that float on the internet. <br />
          High-Quality content curated by experts!
        </p>
      </header>
      <nav className="DS-navigation">
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
export default DSLayout;
