import Database from "better-sqlite3";
const db = new Database('btc.db', { verbose: console.log });
db.pragma('journal_mode = WAL');
db.exec(`CREATE TABLE IF NOT EXISTS BTC (
    name TEXT,
    height INTEGER,
    hash TEXT,
    time TEXT,
    latest_url TEXT,
    previous_hash TEXT,
    previous_url TEXT,
    peer_count INTEGER,
    unconfirmed_count INTEGER,
    high_fee_per_kb INTEGER,
    medium_fee_per_kb INTEGER,
    low_fee_per_kb INTEGER,
    last_fork_height INTEGER,
    last_fork_hash TEXT,
    PRIMARY KEY (hash)
  )`);
export function insertRecord(btcData) {
    try {
        const stmt = db.prepare(`INSERT INTO BTC VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
        stmt.run(btcData.name, btcData.height, btcData.hash, btcData.time, btcData.latest_url, btcData.previous_hash, btcData.previous_url, btcData.peer_count, btcData.unconfirmed_count, btcData.high_fee_per_kb, btcData.medium_fee_per_kb, btcData.low_fee_per_kb, btcData.last_fork_height, btcData.last_fork_hash);
    }
    catch (error) {
        console.error('Error inserting data:', error);
        return false;
    }
    return true;
}
export function lastRecord() {
    try {
        const query = db.prepare('SELECT * FROM BTC ORDER BY time DESC LIMIT 1');
        const result = query.get();
        return result;
    }
    catch (error) {
        console.error('Error querying data:', error);
        return null;
    }
}
export function countRecord() {
    try {
        const query = db.prepare('SELECT COUNT(*) as count FROM BTC');
        const result = query.get();
        return result.count;
    }
    catch (error) {
        console.error('Error querying data:', error);
        return 0;
    }
}
process.on('SIGINT', () => {
    console.log('Closing database connection...');
    db.close();
    process.exit();
});
