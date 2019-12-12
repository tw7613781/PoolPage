import { configure, getLogger} from "log4js"

configure({
    appenders: {
        console: {
            type: "stdout",
        },
        file: {
            filename: `./logs/${new Date().getFullYear()}-${(new Date().getMonth()) + 1}-${new Date().getDate()}/logFile.log`,
            keepFileExt: true,
            maxLogSize: 16777216,
            pattern: ".yyyy-MM-dd",
            type: "dateFile",
        },
    },
    categories: {
        default: { appenders: ["console", "file"], level: "debug" },
    },
})

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

function timestampToLocalTimeString(tick: number) {
    const date = new Date(tick * 1000)
    return date.toLocaleDateString()
}

export { getLogger, decimalPlacesString, hashrateFormatter, timestampToLocalTimeString }
