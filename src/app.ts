import express from "express"
import { FC } from "./config"
import { IBulletin, IMinedBlock, INetwork, IPool, IWorker, MongoServer} from "./mongoServer"
import { getLogger, hashrateFormatter } from "./utils"

const logger = getLogger(__filename)

const app = express()
const mongoServer = new MongoServer()

app.all("/*", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*")
    next()
})

app.get("/getPool", async (req, res) => {
    const pool: IPool = await mongoServer.getPool()
    const network: INetwork = await mongoServer.getNetwork()
    if (pool === undefined || network === undefined) {
        const ret = {
            diff: 0,
            fee: 0,
            hashrate: "0 H/s",
            networkHashrate: "0 H/s",
            reward: 0,
        }
        res.json(ret)
    } else {
        const ret = {
            diff: pool.diff,
            fee: pool.fee,
            hashrate: hashrateFormatter(pool.hashrate),
            networkHashrate: hashrateFormatter(network.hashrate),
            reward: pool.reward / 1000000000,
        }
        res.json(ret)
    }
})

app.get("/getMinedBlocks", async (req, res) => {
    const blocks: IMinedBlock[] = await mongoServer.getMinedBlocks()
    res.json(blocks)
})

app.get("/getMinedBlockHistory", async (req, res) => {
    const blocks: IMinedBlock[] = await mongoServer.getMinedBlockHistory()
    res.json(blocks)
})

app.get("/getBulletin", async (req, res) => {
    const bulletin: IBulletin = await mongoServer.getBulletin()
    res.json(bulletin)
})

app.get("/findWorker/:address", async (req, res) => {
    const workers: IWorker[] = await mongoServer.findWorker(req.params.address)
    res.json(workers)
})

app.use(express.static(__dirname + "/public/"))
app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(3000, "localhost", () => logger.info("SPA for pool.hycon.io is running"))
