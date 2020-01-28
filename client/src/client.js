import { FC } from "./config"

const moment = require('moment')
const request = require('request')

const host = FC.API_SERVER

function decimalPlacesString(n, places) {
    const power = Math.pow(10, places)
    return (Math.round(n * power) / power).toLocaleString()
}

function hashrateFormatter(hashrate) {
    let hashrateStr
    if (hashrate > 1000 * 1000 * 1000) {
        hashrateStr = `${decimalPlacesString(hashrate / (1000 * 1000 * 1000), 2)} GH/s`
    } else if (hashrate > 1000 * 1000) {
        hashrateStr = `${decimalPlacesString(hashrate / (1000 * 1000), 2)} MH/s`
    } else if (hashrate > 1000) {
        hashrateStr = `${decimalPlacesString(hashrate / 1000, 2)} KH/s`
    } else {
        hashrateStr = `${decimalPlacesString(hashrate, 2)} H/s`
    }
    return hashrateStr
}

function timestampToLocalTimeString(tick) {
    const date = new Date(tick)
    return date.toLocaleString()
}

function elapsedTime(tick) {
    const elapsed = ( Date.now() - tick )
    const elapsedMoment =  moment.duration(elapsed, "milliseconds")
    const days = elapsedMoment.days()
    const hours = elapsedMoment.hours()
    const minutes = elapsedMoment.minutes()
    const seconds = elapsedMoment.seconds()
    if (days !== 0) {
        return `${days.toString()} days, ${hours.toString()}:${minutes.toString()}:${seconds.toString()}`
    }
    if (hours !== 0) {
        return `${hours.toString()}:${minutes.toString()}:${seconds.toString()}`
    }
    if (minutes !== 0) {
        return `${minutes.toString()}:${seconds.toString()}`
    }
    return `${seconds.toString()}`
}

export class Pool {
    static findWorkers(addr){
        const path = `findWorker/${addr}`
        return new Promise( (resolve, reject) => {
            request (host+path, (err, res, data) => {
                if (err) {
                    return reject(err)
                }
                const workers = JSON.parse(data)
                for (const worker of workers) {
                    worker.hashrate = hashrateFormatter(worker.hashrate)
                    worker.tick = elapsedTime(worker.tick)
                }
                resolve(workers)
            })
        })
    }
    static allWorkers(){
        const path = `allWorkers`
        return new Promise( (resolve, reject) => {
            request (host+path, (err, res, data) => {
                if (err) {
                    return reject(err)
                }
                const workers = JSON.parse(data)
                for (const worker of workers) {
                    worker.hashrate = hashrateFormatter(worker.hashrate)
                    worker.tick = elapsedTime(worker.tick)
                }
                resolve(workers)
            })
        })
    }
    static getPool(){
        const path = "getPool"
        return new Promise( (resolve, reject) => {
            request (host+path, (err, res, data) => {
                if (err) {
                    return reject(err)
                }
                const poolInfo = JSON.parse(data)
                poolInfo.hashrate = hashrateFormatter(poolInfo.hashrate)
                poolInfo.networkHashrate = hashrateFormatter(poolInfo.networkHashrate)
                poolInfo.reward = poolInfo.reward / 1000000000
                resolve(poolInfo)
            })
        })
    }
    static getMinedBlocks(){
        const path = "getMinedBlocks"
        return new Promise( (resolve, reject) => {
            request (host+path, (err, res, data) => {
                if (err) {
                    return reject(err)
                }
                const blocks = JSON.parse(data)
                for (const block of blocks) {
                    block.timestamp = elapsedTime(block.timestamp)
                }
                resolve(blocks)
            })
        })
    }
    static getMinedBlockHistory(){
        const path = "getMinedBlockHistory"
        return new Promise( (resolve, reject) => {
            request (host+path, (err, res, data) => {
                if (err) {
                    return reject(err)
                }
                const blocks = JSON.parse(data)
                for (const block of blocks) {
                    block.timestamp = elapsedTime(block.timestamp)
                }
                resolve(blocks)
            })
        })
    }
    static getBulletin(){
        const path = "getBulletin"
        return new Promise( (resolve, reject) => {
            request (host+path, (err, res, data) => {
                if (err) {
                    return reject(err)
                }
                const bulletins = JSON.parse(data)
                for (const bulletin of bulletins){
                    bulletin.tick = timestampToLocalTimeString(bulletin.tick)
                }
                resolve(bulletins)
            })
        })
    }
}
