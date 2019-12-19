const request = require('request')
const FC = require('./config')
 
const host = FC.API_SERVER

export class Pool {
    static findWorkers(addr){
        const path = `findWorker/${addr}`
        return new Promise( (resolve, reject) => {
            request (host+path, (err, res, data) => {
                if (err) {
                    return reject(err)
                }
                resolve(JSON.parse(data))
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
                resolve(JSON.parse(data))
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
                resolve(JSON.parse(data))
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
                resolve(JSON.parse(data))
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
                resolve(JSON.parse(data))
            })
        })
    }
}
