class Timer {

    constructor() {
        this.start()
    }

    start() {
        this.startTime = new Date()
    }

    stop() {
        this.stopTime = new Date()
    }

    elapsedTime() {
        return this.stopTime.getMilliseconds() - this.startTime.getMilliseconds()
    }

}

module.exports = Timer
