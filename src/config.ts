export const FC = {
    // Pool Config
    CONNECTION_LIMIT: 70,
    MINER_ADDRESS: "HA11nMmuTgeyEtBDCJdCJ8oRHcJ6DwAx",
    NUM_TXS_CONFIRMATIONS: 200,
    POOL_DIFF: Number("1e-3"),
    TEST_BLOCK_DIFF: Number("1e-5"),

    // MongoDB
    MONGO_DB: "MiningPool",
    MONGO_MINED_BLOCKS: "MinedBlocks",
    MONGO_MINED_BLOCKS_HISTORY: "MinedBlocksHistory",
    MONGO_POOL: "Pool",
    MONGO_WORKERS: "Workers",
    URL_MONGO_SERVICE: "mongodb://127.0.0.1:27017",

    // Bannker
    BLOCK_REWARD: 12,
    POOL_FEE: 0,
}
