import axios from "axios";

import { BTC, instanceOfBTC } from "./btc.js";

async function get(url: string, params: object = {}): Promise<any> {
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
    BTC: async () : Promise<BTC> => {
        const res = await get("https://api.blockcypher.com/v1/btc/main");
        if (!instanceOfBTC(res))
            throw new Error("Invalid BTC response");

        return res as BTC;
    }
};

export default _;
