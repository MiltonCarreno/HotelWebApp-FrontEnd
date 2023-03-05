import axios from "axios";

export default axios.create({
    baseURL: "https://b15d-97-104-231-134.ngrok.io",
    headers: {
        "ngrok-skip-browser-warning": "true",
        "Access-Control-Allow-Origin": "*"
    }
});