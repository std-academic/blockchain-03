/*
{
  "name": "BTC.main",
  "height": 836513,
  "hash": "00000000000000000001eb032d6681e46da2240ec87b018f6eea220c972c5007",
  "time": "2024-03-27T11:59:12.922048211Z",
  "latest_url": "https://api.blockcypher.com/v1/btc/main/blocks/00000000000000000001eb032d6681e46da2240ec87b018f6eea220c972c5007",
  "previous_hash": "00000000000000000002b6a14398ad1bf120510bdd4bee94fce91888d97dd4cb",
  "previous_url": "https://api.blockcypher.com/v1/btc/main/blocks/00000000000000000002b6a14398ad1bf120510bdd4bee94fce91888d97dd4cb",
  "peer_count": 324,
  "unconfirmed_count": 7279,
  "high_fee_per_kb": 23572,
  "medium_fee_per_kb": 18621,
  "low_fee_per_kb": 15500,
  "last_fork_height": 826152,
  "last_fork_hash": "00000000000000000000d4e6d4c176163b6c0608aee462ada8dd95b2e694dea1"
}
*/
;
function instanceOfBTC(object) {
    let res = true;
    res && (res = typeof object.name === "string");
    res && (res = typeof object.height === "number");
    res && (res = typeof object.hash === "string");
    return res;
}
export { instanceOfBTC };
