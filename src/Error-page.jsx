import { useRouteError } from "react-router-dom";
import "./Error.css";
function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="body404">
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1 id="h1404">404</h1>
            <h2 id="h2404">Page not found</h2>
          </div>
          <a id="errorbutton" href="/">
            Return To Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
