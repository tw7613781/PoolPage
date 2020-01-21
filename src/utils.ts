import { configure, getLogger} from "log4js"
import * as moment from "moment"

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

function timestampToLocalTimeString(tick: number): string {
    const date = new Date(tick)
    return date.toLocaleString()
}

function elapsedTime(tick: number): string {
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

export { getLogger, decimalPlacesString, elapsedTime, hashrateFormatter, timestampToLocalTimeString }
