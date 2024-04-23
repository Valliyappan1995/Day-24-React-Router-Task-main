import { Link, Outlet } from "react-router-dom";

const CSLayout = () => {
  return (
    <>
      <header className="cs-container">
        <div className="img">
          <a href="#">
            <img
              src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-1536x340.webp"
              width={"100%"}
              height={"100%"}
            />
          </a>
        </div>
        <nav className="cs-navigation">
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
      </header>
      <Outlet />
    </>
  );
};

export default CSLayout;
