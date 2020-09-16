import { interval, Subject, Subscription } from "rxjs";
import { mapTo, buffer, take, scan } from "rxjs/operators";

/**
 * 模拟 Loading
 */
export default function () {
  // 容器
  const subject: Subject<number> = new Subject();
  // 每秒触发一起，触发10次
  interval(100)
    .pipe(take(10))
    .subscribe(() => subject.next());
  // 每5秒触发一次buffer，清除一次
  const dismiss = interval(500);

  const subscription: Subscription = subject
    .pipe(
      mapTo(1),
      buffer(dismiss),
      scan((acc: number, curr: number[]) => acc + curr.length - 1, 0)
      // filter((t: number) => t === 0)
    )
    .subscribe(
      (value) => {
        console.log("buffer -> " + value);
        if (value === 0) {
          console.log("buffer complete");
          subscription.unsubscribe();
        }
      },
      () => {},
      () => {
        console.log("buffer complete");
      }
    );
}
