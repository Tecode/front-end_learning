let iframeContainer = null;
export const bootstrap = async function () {
  console.log("应用正在启动");
};
export const mount = async function () {
  console.log("应用正在挂载");
  iframeContainer = document.createElement("div");
  iframeContainer.innerHTML = "Hello iframe";
  iframeContainer.id = "iframeContainer";
  document.body.appendChild(iframeContainer);
};
export const unmount = async function () {
  console.log("应用正在卸载");
  document.body.removeChild(iframeContainer);
};
