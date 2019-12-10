import express from "express"
import { FC } from "./config"
import { IMinedBlock, INetwork, IPool, IWorker, MongoServer} from "./mongoServer"
import { log4js } from "./utils"

const logger = log4js.getLoger(__filename)

const app = express()
const mongoServer = new MongoServer()

app.get("/getPool", async (req, res) => {
    const pool: IPool = await mongoServer.getPool()
    const network: INetwork = await mongoServer.getNetwork()
    const ret = {
        diff: FC.POOL_DIFF,
        fee: FC.POOL_DIFF,
        hashrate: pool.hashrate,
        networkHashrate: network.hashrate,
        reward: FC.BLOCK_REWARD,
    }
    res.json(ret)
})

app.get("/getMinedBlocks", async (req, res) => {
    const blocks: IMinedBlock[] = await mongoServer.getMinedBlocks()
    res.json(blocks)
})

app.get("/getMinedBlockHistory", async (req, res) => {
    const blocks: IMinedBlock[] = await mongoServer.getMinedBlockHistory()
    res.json(blocks)
})

app.get("/getWorkers", async (req, res) => {
    const workers: IWorker[] = await mongoServer.getWorkers()
    res.json(workers)
})

app.listen(3000, "localhost", () => logger.info("SPA for pool.hycon.io is running"))
