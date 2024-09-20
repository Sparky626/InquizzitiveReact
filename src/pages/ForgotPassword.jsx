import React from "react";
import axios from 'axios';
import "../App.css";
import InquizzNoBg from '../Images/Inquizzitive-nobg.jpg';
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { muteunmute } from "../main";
import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import { render } from '@react-email/components';
import { SES } from '@aws-sdk/client-ses';
//import { Email } from '../emails/Welcome';



function ForgotPassword () {
  const userRef = useRef();
  
  const [email, setEmail] = useState('');

  useEffect(() => {
      userRef.current.focus();
  }, [])

  const navigate = useNavigate();
  const home = () => navigate('/');
  const createaccountpage = () =>  navigate('/createaccount');
  const handleSubmit = async (e) =>{
      e.preventDefault();
      setEmail('');
      setPwd('');
      setEmail(email.toLowerCase());
      const instance = axios.create({
        baseURL: 'https://ocqgyz1dnd.execute-api.us-east-1.amazonaws.com/production/account',
        withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          }
      });
      instance.get('https://ocqgyz1dnd.execute-api.us-east-1.amazonaws.com/production/account?email='+ email)
      .then(function (response){
        if(response.status == 200 && response.data != null && response.data.email == email){
          /*const client = new SESClient(config);
            const input = { // SendEmailRequest
            Source: "", // required
            Destination: { // Destination
                ToAddresses: [ // AddressList
                "STRING_VALUE",
                ],
                CcAddresses: [
                "STRING_VALUE",
                ],
                BccAddresses: [
                "STRING_VALUE",
                ],
            },
            Message: { // Message
                Subject: { // Content
                Data: "STRING_VALUE", // required
                Charset: "STRING_VALUE",
                },
                Body: { // Body
                Text: {
                    Data: "STRING_VALUE", // required
                    Charset: "STRING_VALUE",
                },
                Html: {
                    Data: "STRING_VALUE", // required
                    Charset: "STRING_VALUE",
                },
                },
            },
            ReplyToAddresses: [
                "STRING_VALUE",
            ],
            ReturnPath: "STRING_VALUE",
            SourceArn: "STRING_VALUE",
            ReturnPathArn: "STRING_VALUE",
            Tags: [ // MessageTagList
                { // MessageTag
                Name: "STRING_VALUE", // required
                Value: "STRING_VALUE", // required
                },
            ],
            ConfigurationSetName: "STRING_VALUE",
            };
            const command = new SendEmailCommand(input);
            */
          navigate('/');
        }
        else{
          const err = document.getElementById('errormsg');
          err.style.display = "block";
          err.innerHTML = "This email is not registered with any account.";
        }
      })

  }
  
  return (
    <>
        <section>
          <img
              src={InquizzNoBg}
              height="300px"
              width="300px"
              className="splashimg"
              id="splashimg"
          />
          <h1 className="center" style={{animation: "fadeIn 2.0s"}}>Forgot Password</h1>
          <div className="center">
              <form onSubmit={handleSubmit} className="centerform">
                <label>
                    Email: 
                </label>
                <div className="center">
                  <input
                    type ="text"
                    name = "email"
                    ref = {userRef}
                    autoCapitalize="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value = {email}
                    placeholder="...enter email"
                    required
                  />
                </div>
                <div className="center">
                  <p id = "errormsg" style={{display: "none", color: "red"}}></p>
                </div>
                <div className="center" style={{marginTop: "15px"}}>
                  <input
                    className="formbutton"
                    type ="submit"
                    value = "Send Email"
                  />
                </div>
              </form>
          </div>
          <div className="center">
            
            <button className="icnbtns" id="sound" onClick={muteunmute}>
              <i className="material-icons">volume_up</i>
            </button>
            <button className="icnbtns" onClick={home}>
              <i className="material-icons">home</i>
            </button>
          </div>
        </section>
    </>
  );
}

export default ForgotPassword;