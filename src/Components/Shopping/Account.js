import React, { Component } from "react";
import ButtonModal from "./../UIelement/ButtonModal";
import Input from "./../UIelement/Input";
import axios from "./../../axios";
import "./../componentCss/account.css";

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

     // e119
     //  maghadire update shodeye form va element haye dakhele form  moheman
     inputOnChangeHandler = (event, inputElement) => {
          // ye copy az state form migirim
          const upForm = { ...this.state.form };
          //  element khasi ke to form dare update mishe
          const updateElement = { ...upForm[inputElement] };
          //  value on element ro ham baresi mikonim
          updateElement.value = event.target.value;
          //  meghdare jadide form ro behesh midim
          upForm[inputElement] = updateElement;
          //  state ro update mikonim
          this.setState({ form: upForm });
     };

     //  e120
     submitHandler = (event) => {
          event.preventDefault();
          //  extract data nahaii
          const formData = {};
          // toye state peymayesh mikonim va maghdiro toye object formData gharar midim
          for (let item in this.state.form)
               formData[item] = this.state.form[item].value;
          //  e121
          axios.post("/userAccount.json", formData)
               .then((res) => console.log(res))
               .catch((err) => console.log(err));
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
                    <form onSubmit={this.submitHandler}>
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
