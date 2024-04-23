import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h3>404 - Page Not Found</h3>
        <Link to="/">Go Home</Link>
      </div>
    </>
  );
};
export default NotFound;
