import { Observable, Scheduler } from 'rxjs/Rx';

/**
const datas = [
    {name: '1'},
    {name: '2'},
    {name: '3'}
]

Observable.from(datas).mergeMap((item: any) => {
    if (item.name.indexOf('+') > 0) {
        const newArray: any[] = [];
        item.name.split('+').forEach((name) => {
            const co = {...item};
            co.name = name;
            newArray.push(co);
        });
        return Observable.from(newArray).map((item1) => item1);
    }
    return Observable.of(item);
}).subscribe((item) => {
    console.log(item);
});
 */

// async scheduler
Scheduler.async.schedule((state) => {
    console.log(state);
    // action.schedule(state + 1, 1000);
}, 2000, 1);

console.log(2);