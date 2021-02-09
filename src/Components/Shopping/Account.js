import React, { Component } from "react";
import "./../componentCss/account.css";

class Account extends Component {
     render() {
          return (
               <div className='account'>
                    <form>
                         <input type='text' placeholder='full name...' />
                         <input type='email' placeholder='email...' />
                         <input type='password' placeholder='password...' />
                         <button>submit</button>
                    </form>
               </div>
          );
     }
}

export default Account;
