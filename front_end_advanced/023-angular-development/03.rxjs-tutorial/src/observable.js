import { Observable } from "rxjs";

const observable = new Observable((observer) => {
  let index = 0;
  let timer = setInterval(() => {
    index += 1;
    observer.next(index);
    // if (index === 4) {
    //   observer.error("New Error")
    // }
    if (index === 5) {
      observer.complete();
      clearInterval(timer);
    }
  }, 1000);
});

observable.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.log("Complete"),
});
