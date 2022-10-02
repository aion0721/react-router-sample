import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const history = useHistory();
  const onClickDetailA = () => {
    history.push("/page1/page1detailA");
  };
  return (
    <div>
      <h1>Page1Page</h1>
      <Link to={{ pathname: "/page1/page1detailA", state: arr }}>DetailA</Link>
      <Link to="/page1/page1detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
