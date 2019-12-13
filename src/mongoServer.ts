import { Db, MongoClient } from "mongodb"
import { FC } from "./config"
import { elapsedTime, getLogger, hashrateFormatter, timestampToLocalTimeString } from "./utils"

const logger = getLogger(__filename)

export interface IWorker {
    _id: string
    address: string
    shares: number
    ip: string
    tick: string
    hashrate: string
}

export interface IMinedBlock {
    _id: string
    mainchain: boolean
    prevHash: string
    timestamp: string
    addresses: string[]
    shares: number[]
    paied: boolean
    totalShares: number
}

export interface IPool {
    hashrate: number,
    tick: string
}

export interface INetwork {
    hashrate: number,
    tick: string
}

export interface IBulletin {
    msg: string,
    tick: string
}

export class MongoServer {
    public db: Db
    private url: string
    private client: MongoClient
    private dbName = FC.MONGO_DB

    constructor() {
        this.url = FC.URL_MONGO_SERVICE
        this.init()
    }
    public async init() {
        this.client = await MongoClient.connect(this.url, { useUnifiedTopology: true })
        this.db = this.client.db(this.dbName)
    }
    public async findWorker(address: string): Promise<IWorker[]> {
        const collection = this.db.collection(FC.MONGO_WORKERS)
        const rows = await collection.find({ address }).toArray()
        if (rows.length === 0 ) {
            return []
        } else {
            for (const row of rows) {
                row.hashrate = hashrateFormatter(row.hashrate)
                row.tick = elapsedTime(row.tick)
            }
        }
        return rows
    }
    public async getMinedBlocks(): Promise<IMinedBlock[]> {
        const collection = this.db.collection(FC.MONGO_MINED_BLOCKS)
        const rows = await collection.find().sort({timestamp: -1}).toArray()
        if (rows.length === 0 ) {
            return []
        } else {
            for (const row of rows) {
                row.timestamp = elapsedTime(row.timestamp)
            }
        }
        return rows
    }
    public async getMinedBlockHistory(): Promise<IMinedBlock[]> {
        const collection = this.db.collection(FC.MONGO_MINED_BLOCKS_HISTORY)
        const rows = await collection.find().sort({timestamp: -1}).limit(50).toArray()
        if (rows.length === 0 ) {
            return []
        } else {
            for (const row of rows) {
                row.timestamp = elapsedTime(row.timestamp)
            }
        }
        return rows
    }
    public async getPool(): Promise<IPool> {
        const collection = this.db.collection(FC.MONGO_POOL)
        const rows = await collection.find().toArray()
        if (rows.length === 1) {
            return rows[0]
        } else {
            return undefined
        }
    }
    public async getNetwork(): Promise<INetwork> {
        const collection = this.db.collection(FC.MONGO_MINED_BLOCKS)
        const rows = await collection.find().toArray()
        if (rows.length === 1) {
            return rows[0]
        } else {
            return undefined
        }
    }
    public async getBulletin(): Promise<IBulletin> {
        const collection = this.db.collection(FC.MONGO_BULLETIN)
        const rows = await collection.find().toArray()
        if (rows.length === 1) {
            rows[0].tick = timestampToLocalTimeString(rows[0].tick)
            return rows[0]
        } else {
            return undefined
        }
    }
}
