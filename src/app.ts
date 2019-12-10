import express from "express"
import { FC } from "./config"
import { IMinedBlock, INetwork, IPool, IWorker, MongoServer} from "./mongoServer"
import { getLogger } from "./utils"

const logger = getLogger(__filename)

const app = express()
const mongoServer = new MongoServer()

function decimalPlacesString(n: number, places: number) {
    const power = Math.pow(10, places)
    return (Math.round(n * power) / power).toLocaleString()
}

function hashrateFormatter(hashrate: number) {
    let hashrateStr: string
    if (hashrate > 20 * 1000 * 1000 * 1000) {
        hashrateStr = `${decimalPlacesString(hashrate / (1000 * 1000 * 1000), 2)} GH/s`
    } else if (hashrate > 20 * 1000 * 1000) {
        hashrateStr = `${decimalPlacesString(hashrate / (1000 * 1000), 2)} MH/s`
    } else if (hashrate > 20 * 1000) {
        hashrateStr = `${decimalPlacesString(hashrate / 1000, 2)} KH/s`
    } else {
        hashrateStr = `${decimalPlacesString(hashrate, 2)} H/s`
    }
    return hashrateStr
}

app.get("/getPool", async (req, res) => {
    const pool: IPool = await mongoServer.getPool()
    const network: INetwork = await mongoServer.getNetwork()
    const ret = {
        diff: FC.POOL_DIFF,
        fee: FC.POOL_DIFF,
        hashrate: pool === undefined ? "0" : hashrateFormatter(pool.hashrate),
        networkHashrate: network === undefined ? "0" : hashrateFormatter(network.hashrate),
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

app.get("/findWorker/:address", async (req, res) => {
    const workers: IWorker[] = await mongoServer.findWorker(req.params.address)
    res.json(workers)
})

app.listen(3000, "localhost", () => logger.info("SPA for pool.hycon.io is running"))
