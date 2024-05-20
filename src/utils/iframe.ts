/**
 * Reload iframe
 * @param type
 * @param data
 * @returns
 */
export const reloadIframe = (type: string, data: { [key: string]: any }) => {
  const iframe = document.getElementById("preview-page") as HTMLIFrameElement;

  if (!iframe) return;

  iframe.contentWindow?.postMessage(
    {
      type,
      ...data,
    },
    "*"
  );
};
