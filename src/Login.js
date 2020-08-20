import React /* useState */ from "react";
import { Form } from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="logo">Med Educt</h1>
        <h4>Learning Simplified</h4>
      </div>
      <br />
      <Form
        className="form-inline justify-content-center"
        method="GET"
        action="/api/auth"
      >
        <Form.Group>
          <p>
            <a className="btn btn-outline-dark" href="/api/auth" role="button">
              <img
                width="25px"
                alt="Google sign-in"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              />
              &nbsp;&nbsp;&nbsp; Login with Google
            </a>
          </p>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
