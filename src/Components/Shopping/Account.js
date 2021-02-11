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

     inputOnChangeHandler = (event, inputElement) => {
          console.log(event.target.value);
     };

     render() {
          const elementArray = [];
          for (let item in this.state.form) {
               elementArray.push({
                    id: item,
                    config: this.state.form[item],
               });
          }

          return (
               <div className='account'>
                    <h2>user account!</h2>
                    <form>
                         {elementArray.map((item) => (
                              <Input
                                   key={item.id}
                                   elementType={item.config.elementType}
                                   elementConfig={item.config.elementConfig}
                                   change={(event) =>
                                        this.inputOnChangeHandler(
                                             event,
                                             item.id
                                        )
                                   }
                              />
                         ))}
                         <ButtonModal btnType='form'>submit</ButtonModal>
                    </form>
               </div>
          );
     }
}

export default Account;
