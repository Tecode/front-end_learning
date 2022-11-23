const EventEmitter = require('events')
// 事件驱动

const event = new EventEmitter()

event.on('load', (data) => {
    console.log(data);
})

event.on('load', (data) => {
    console.log(data);
})

event.emit('load', 'OK')