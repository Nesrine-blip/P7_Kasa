import { Link } from "react-router-dom";

// render 404 error page
function ErrorPage() {
  return (
    <div className="error-page">
      
      {/* error code */}
      <h1>404</h1>
      
      {/* error message */}
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      
      {/* link back to home */}
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
};

export default ErrorPage;
