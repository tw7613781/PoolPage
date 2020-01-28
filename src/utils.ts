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

export { getLogger }
