import express from "express"
import { IBulletin, IMinedBlock, INetwork, IPool, IWorker, MongoServer} from "./mongoServer"
import { getLogger } from "./utils"

const logger = getLogger(__filename)

const app = express()
const mongoServer = new MongoServer()

app.all("/*", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*")
    next()
})

app.get("/getPool", async (req, res) => {
    const pool: IPool = await mongoServer.getPool()
    let network: INetwork = await mongoServer.getNetwork()
    const poolHashrate = pool === undefined ? 0 : pool.hashrate
    if (network === undefined) {
        network = {
            fee: 0,
            hashrate: 0,
            poolDiff: 1,
            reward: 0,
            tick: "0",
        }
    }
    const ret = {
        diff: network.poolDiff,
        fee: network.fee,
        hashrate: poolHashrate,
        networkHashrate: network.hashrate,
        reward: network.reward,
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

app.get("/getBulletin", async (req, res) => {
    const bulletins: IBulletin[] = await mongoServer.getBulletin()
    res.json(bulletins)
})

app.get("/findWorker/:address", async (req, res) => {
    const workers: IWorker[] = await mongoServer.findWorker(req.params.address)
    res.json(workers)
})

app.get("/allWorkers", async (req, res) => {
    const workers: IWorker[] = await mongoServer.allWorkers()
    res.json(workers)
})

app.use(express.static(__dirname + "/public/"))
app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(3000, () => logger.info("SPA for pool.hycon.io is running"))
