import axios from "axios";

//  e91
const instance = axios.create({
     baseURL: "https://react2nd-9d0e2-default-rtdb.firebaseio.com/",
});

export default instance;
