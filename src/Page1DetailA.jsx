import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  const onClickBack = () => {
    history.goBack();
  };
  return (
    <div>
      <h1>Page1DetailAPage</h1>
      <button onClick={onClickBack}>GoBack</button>
    </div>
  );
};
