export default{
    transformDate(str){
        const date = new Date(str)
        const month = date.getMonth() + 1
        const day = date.getDate()
        const time = month + '月' + day + '日'
        return time
    },
    transformFullDate(str){
        const date = new Date(str)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const time = year + '-' + (month<10 ? '0'+ month : month) + '-' + (day<10 ? '0' + day : day)
        return time
    },
　  secTotime(str) {
        var t = ''
        if(str > 0){
            var s = Math.floor(str / 1000)
            var min = Math.floor(s / 60)
            var sec = Math.floor(s % 60)
            if(min < 10){
            t += "0"
            } 
            t += min + ":"
            if(sec < 10){
            t += "0"
            } 
            t += sec
        } 
        return t
    },
    secToMinute(str){
        var t = ''
        if(str > 0){
            var s = Math.floor(str / 1000)
            var min = Math.floor(s / 60)
            var sec = Math.floor(s % 60)
            if(min < 10){
            t += "0"
            } 
            t += min + "分"
            if(sec < 10){
            t += "0"
            } 
            t += sec + "秒"
        } 
        return t
    },
    transformCount(count){
        if(count > 100000){
            const num = Math.floor(count / 10000)
            return num + '万'
        }
        return count
    },
    commentTime(str){
        const date = new Date(str)
        const month = date.getMonth() + 1
        const day = date.getDate()
        const hour = date.getHours()
        const min = date.getMinutes()
        const time = month + '月' + day + '日' + ' ' + (hour < 10 ? '0' + hour : hour) + ':' + (min < 10 ? '0' + min : min)
        return time
    }
}