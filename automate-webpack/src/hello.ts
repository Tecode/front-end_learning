const list: string[] = ["java", "Go", "Swift"];
const mergeList: string[] = ["Typescript", ...list];

const promise: Promise<string> = new Promise(() => {});
console.log(mergeList, promise, "mergeList");
