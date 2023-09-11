import Button from "../components/shared/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back one step in the history stack
  };

  return (
    <div className="mobile">
      <h3>404 - Page Not Found</h3>
      <Button
        version="full"
        onClick={goBack}
        btnText="Go back previous page"
      ></Button>
    </div>
  );
};

export default NotFound;
