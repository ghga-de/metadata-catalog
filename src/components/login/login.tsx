import { Container } from "react-bootstrap";
import lsLogin from "../../assets/loginLS/ls-login.png";
import lsRegister from "../../assets/loginLS/ls-register.png";

const Login = () => {
  return (
    <Container className="px-5 d-flex justify-content-center mb-5 pb-5">
      <div className="w-75 my-5 pb-5">
        <div className="bg-light-alternative p-4 my-5 rounded text-center mb-5 pb-5">
          <p className="mb-4">
            To upload/download data to the{" "}
            <strong>German Human Genome-Phenome Archive</strong>, you need to
            sign in via a <strong>Life Science</strong> account.
          </p>
          <a href="https://profile.aai.lifescience-ri.eu/">
            <img src={lsLogin} alt="LS Login" width="200px" />
          </a>
        </div>
        <hr className="bg-secondary text-center" />
        <div className="bg-light-alternative p-4 my-5 rounded text-center mb-5">
          <p className="mb-4">
            If you do not have a <strong>Life Science</strong> account, you can
            register here.
          </p>
          <a href="https://signup.aai.lifescience-ri.eu/">
            <img
              src={lsRegister}
              alt="LS Register"
              width="200px"
              className="mb-5"
            />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Login;
