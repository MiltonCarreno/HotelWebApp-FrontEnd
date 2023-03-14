import axios from "axios";

export default axios.create({
    baseURL: "https://557d-108-188-68-70.ngrok.io",
    headers: {
        "ngrok-skip-browser-warning": "true",
        "Access-Control-Allow-Origin": "*"
    }
});