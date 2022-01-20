// import { userApi, productListApi, recommendedListApi } from "./mergeRequest";

const exchangeTokenApi = () =>
  new Promise((resolve, reject) => {
    resolve({ data: { token: "7EH9E6EJ6LL-@QW" } });
  });
console.log("Api");
exchangeTokenApi();
