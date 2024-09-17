import React from "react";
import "../App.css";
import InquizzNoBg from '../Images/Inquizzitive-nobg.jpg';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Leaderboard from "./Leaderboard";

function Login () {
  const navigate = useNavigate();
  const home = () =>  navigate('/');
  const [result, setResult] = useState("");
  const handleSubmit = (event) =>{
    event.preventDefault();
    alert('You entered: ${email} + ${password} + ${message}')
  }
  return (
    <div className={"center"}>
      <div className={"center"}>
        <div className={"center"}>
          <div>
          <img
                src = {InquizzNoBg}
                className="mainsplashimg"
                style={{ margin: "auto" }}
                alt = "not loading"
            />
            <form className = {"centerform"} onSubmit={handleSubmit(onSubmit)}>
              <div className={"center"}>
                <h1 className={"center"}>Login</h1>
              </div>
              <div className={"center"}>
                <input
                  className={"center"}
                  {...register("email", {
                    required: true,
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  placeholder="Email"
                />
                {errors.email?.type === "required" && (
                  <span>This field is required</span>
                )}
                {errors.email?.message && <span>{errors.email?.message}</span>}
              </div>
              <div className={"center"}>
                <input
                  className={
                    "center"
                  }
                  {...register("password", {required: true})}
                  placeholder="Password"
                />
                {errors.password?.type === "required" && (
                  <span>This field is required</span>
                )}
              </div>
              <div className={"center"}>
                <textarea
                  className={"center"}
                  {...register("message", { required: true })}
                  placeholder="Message"
                />
                {errors.message?.type === "required" && (
                  <span>This field is required</span>
                )}
              </div>
              <p>{result}</p>
              <button
                className={"formbutton"}
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;