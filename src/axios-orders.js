import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://react-burger-604f3-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default instance;
