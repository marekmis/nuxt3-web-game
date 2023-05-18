// Manipulate meta viewport element to (user-scalable=no)
export const useViewport = (options) => {
  const metaViewport = document.querySelector("meta[name=viewport]");
  let content = "width=device-width, initial-scale=1";
  if (options?.scalable === false) {
    content = "width=device-width, initial-scale=1, user-scalable=no";
  }
  metaViewport.setAttribute("content", content);
};
