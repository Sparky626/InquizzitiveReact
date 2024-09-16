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
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) =>{
    const payload = {
      email: data.email,
      password: data.password,
    };

  }
  return (
    <div
      className={"center"}
    >
      <div className={"center"}>
        <div
          className={"center"}
        >
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
               
                <h1 className={"center"}>Login</h1>
              </div>
              <div className={"center"}>
                <input
                  className={"center"}
                  {...register("name", { required: true })}
                  placeholder="First name"
                />
                {errors.name?.type === "required" && (
                  <span>This field is required</span>
                )}
              </div>
              <div className={"center"}>
                <input
                  className={
                    "center"
                  }
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
                className={"button"}
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