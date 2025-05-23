import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios";
import { BASE_URL } from "../utils.js";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and confirm password do not match!");
      return;
    }
    try {
      const response = await axios.post(
        `${BASE_URL}/register`,
        {
          username,
          password,
          confirm_password: confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.data) {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <section className="section is-fullheight">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-4-desktop">
            <div className="box">
              <h2 className="title is-4 has-text-centered">Register</h2>
              <form onSubmit={handleRegister}>
                <div className="field">
                  <label htmlFor="username" className="label">
                    Username
                  </label>
                  <div className="control">
                    <input
                      type="text"
                      id="username"
                      className="input"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="password" className="label">
                    Password
                  </label>
                  <div className="control">
                    <input
                      type="password"
                      id="password"
                      className="input"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="confirmPassword" className="label">
                    Confirm Password
                  </label>
                  <div className="control">
                    <input
                      type="password"
                      id="confirmPassword"
                      className="input"
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button type="submit" className="button is-primary is-fullwidth">
                      Register
                    </button>
                  </div>
                </div>
              </form>

              <p className="has-text-centered is-size-7 mt-3">
                Sudah Punya Akun?{" "}
                <Link to="/login" className="has-text-link">
                  Login Disini
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
