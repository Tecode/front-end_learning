import { Subject } from 'rxjs'

// 相当于广播
const subject = new Subject()


subject.subscribe({ next: (value) => console.log(value) })
subject.subscribe({ next: (value) => console.log(value) })

setTimeout(() => {
    subject.next("haoxuan")
}, 3000)

setTimeout(() => {
    subject.next("haoxuan001")
}, 5000)