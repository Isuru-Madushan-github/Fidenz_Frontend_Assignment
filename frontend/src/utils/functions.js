import moment from 'moment'

const getSunData=(timestamp,timezone)=>{

    return moment.utc(timestamp,'X').add(timezone,'seconds').format('h:mma')

}

const getTime=(timestamp,timezone)=>{

    return moment(timestamp*1000).format('h.mma, MMM D')

}

const getBgColor=(description)=>{

    switch(description){
        case 'clear sky':
            return '#40b681'
        case 'broken clouds':
            return '#6249cc'
        case 'few clouds':
            return '#388ee7'
        case 'mist':
            return '#9c3a3a'
        case 'light rain':
            return '#de944e'
        default:
            return '#545558'
    }

}

export {getSunData,getTime,getBgColor}