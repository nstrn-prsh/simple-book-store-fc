import React, { Component } from "react";
import Input from "./../UIelement/Input";
import "./../componentCss/account.css";
import ButtonModal from "./../UIelement/ButtonModal";

class Account extends Component {
     state = {
          form: {
               name: {
                    elementType: "input",
                    value: "",
                    elementConfig: {
                         type: "text",
                         placeholder: "name...",
                    },
               },
               email: {
                    elementType: "input",
                    value: "",
                    elementConfig: {
                         type: "email",
                         placeholder: "email...",
                    },
               },
               password: {
                    elementType: "input",
                    value: "",
                    elementConfig: {
                         type: "password",
                         placeholder: "password...",
                    },
               },
          },
     };
     render() {
          return (
               <div className='account'>
                    <h2>user account!</h2>
                    <form>
                         <Input type='text' placeholder='full name...' />
                         <Input type='email' placeholder='email...' />
                         <Input type='password' placeholder='password...' />
                         <ButtonModal btnType='form'>submit</ButtonModal>
                    </form>
               </div>
          );
     }
}

export default Account;
