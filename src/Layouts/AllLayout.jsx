import { Link, Outlet } from "react-router-dom";

const AllLayout = () => {
  return (
    <>
      <section className="container">
        <div className="blog-img">
          <a href="#">
            <img
              src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-1536x236.png"
              width={"1000px"}
              height={"100%"}
            />
          </a>
        </div>
        <nav className="navigation">
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
      </section>
      <Outlet />
    </>
  );
};

export default AllLayout;
