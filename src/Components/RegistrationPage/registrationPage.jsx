import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context";
import './registrationPage.css';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      setTimeout(() => {
        const userData = { username: "fat-tony", email: "fat-tony@example.com" };
        login(userData);
        setIsLoading(false);
        setSuccessMessage("Ура- Вы в системе!");
        setTimeout(() => {
          navigate("/products");
        }, 1500);
      }, 1500);
    } catch (error) {
      console.error("Login failed", error);
      setIsLoading(false);
    }
  };

  return (
    <div className='formContainer'>
      <h2 className='title'>Login</h2>
      <form>
        <label htmlFor="username" className='label'>
        Логин:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleInputChange}
          value={formData.username || ""}
          className='input'
        />

        <label htmlFor="password" className='label'>
          Пароль:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleInputChange}
          value={formData.password || ""}
          className='input'
        />

        <button type="button" onClick={handleLogin} className='button'>
          {isLoading ? "Logging in..." : "Login"}
        </button>

        {successMessage && (
          <p className="successMessage">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;