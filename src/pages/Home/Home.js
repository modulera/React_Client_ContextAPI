import React from "react";
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <h1 className="display-4">React-Django Integration</h1>
        <p className="lead">
          It is a demonstration of how to integrate react/contextAPI with
          django/django_rest_framework(djoser library) to build a fully functional web
          application.
        </p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to="/login" role="button">
            Get Started
          </Link>
        </p>
      </div>

      <p></p>
    </div>
  );
}

export default Home;
