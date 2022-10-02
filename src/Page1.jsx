import { Link } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  return (
    <div>
      <h1>Page1Page</h1>
      <Link to={{ pathname: "/page1/page1detailA", state: arr }}>DetailA</Link>
      <Link to="/page1/page1detailB">DetailB</Link>
    </div>
  );
};
