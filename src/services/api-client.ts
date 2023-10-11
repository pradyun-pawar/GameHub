import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'fe8ab7676be3404ab1d64e6b7dfa0742',
    }
})
