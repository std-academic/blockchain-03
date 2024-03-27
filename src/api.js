import axios from "axios";
import { instanceOfBTC } from "./btc.js";
async function get(url, params = {}) {
    return await axios.get(url, { params })
        .then(res => {
        if (!res.data)
            throw new Error(`${res.statusText} ${res}`);
        return res.data;
    })
        .catch(error => {
        console.error("GET error:", url, error);
        return {};
    });
}
const _ = {
    BTC: async () => {
        const res = await get("https://api.blockcypher.com/v1/btc/main");
        if (!instanceOfBTC(res))
            throw new Error("Invalid BTC response");
        return res;
    }
};
export default _;
