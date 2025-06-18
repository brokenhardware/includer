import { verifiedFetch } from 'https://esm.sh/@helia/verified-fetch?bundle-deps'

const hashString = window.location.hash.substring(1);
if (hashString) {
  const hashParams = new URLSearchParams(hashString);
  if (hashParams.has("css")) {
    console.log("ipfs css:", hashParams.get("css"));
    const ipfsCSSAddr = hashParams.get("css");
    const response1 = await verifiedFetch('ipfs://' + ipfsCSSAddr)
    const cssBlob = await response1.blob();
    const cssBlobUrl = URL.createObjectURL(cssBlob);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssBlobUrl;
    document.head.appendChild(link);
  }
  if (hashParams.has("html")) {
    console.log("ipns html:", hashParams.get("html"));
    const ipnsAddr = hashParams.get("html");
    const response2 = await verifiedFetch('ipns://' + ipnsAddr)
    const html = await response2.text()
    document.body.innerHTML = html
  }
  if (hashParams.has("js")) {
    console.log("ipfs js:", hashParams.get("js"));
    const ipfsJSAddr = hashParams.get("js");
    const response3 = await verifiedFetch('ipfs://' + ipfsJSAddr)
    const blob = await response3.blob();
    const blobUrl = URL.createObjectURL(blob);
    const script = document.createElement('script');
    script.src = blobUrl;
    //script.onload = () => URL.revokeObjectURL(blobUrl);
    document.body.appendChild(script);
  }

}
else {
  console.log ("Missing hash string");
}
