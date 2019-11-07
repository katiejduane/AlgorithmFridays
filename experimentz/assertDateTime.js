const moment = require('moment')

const dateTimes = ['M/D/YYYY', 'YYYY/M/D', 'M/D/YY', 'M-D-YYYY', 'YYYY-M-D', 'M-D-YY', 'M/D/YY - M/D/YY', 'M-D-YY - M-D-YY',
    'M-D-YYYY h:m:s a', 'M-D-YYYY h:m a', 'h:m a - M/D/YYYY', 'YYYY-MM-DD[T]HH:mm:ss[Z]', 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
]

const dateTimeZones = ['h:m a [EST] - MMMM D, YYYY', 'h:m a [EDT] - MMMM D, YYYY', 'h:m a [GMT] - MMMM D, YYYY',
    'h:m a [EDT] - M/D/YYYY', 'h:m a [EST] - M/D/YYYY', 'h:m a [GMT] - M/D/YYYY', 'h:m a [EDT] - M/D/YY', 'h:m a [EST] - M/D/YY', 'h:m a [GMT] - M/D/YY'
]

export const assertDateTime = (that, input, zone) => {
    if (input === "N/A" | input === "-" | input === "") {
        console.log(`***** NO ASSERTION MADE. Date time input: ( ${input} ) is not a time format, but potentially valid for this page *****`)
    } else {
        if (zone === false) {
            const dateToCheck = moment(input, dateTimes, 'en', true).isValid()
            that.assert.ok(dateToCheck, true ? `${input} is valid date/time format` : `${input} is NOT valid date/time format`)
        } else {
            const dateTimeZoneToCheck = moment(input, dateTimeZones, 'en', true).isValid()
            that.assert.ok(dateTimeZoneToCheck, true ? `${input} is valid date/time format` : `${input} is NOT valid date/time format`)
        }
    }
}