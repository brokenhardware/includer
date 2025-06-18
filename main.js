import { verifiedFetch } from 'https://esm.sh/@helia/verified-fetch?bundle-deps'

const hashString = window.location.hash.substring(1);
if (hashString) {
  const hashParams = new URLSearchParams(hashString);
  if (hashParams.has("html")) {
    console.log("ipns html:", hashParams.get("html"));
    const ipnsAddr = hashParams.get("html");
    const response = await verifiedFetch('ipns://' + ipnsAddr)
    const html = await response.text()
    document.body.innerHTML = html
  }
  if (hashParams.has("js")) {
    console.log("ipfs js:", hashParams.get("js"));
    const ipfsJSAddr = hashParams.get("js");
    const response2 = await verifiedFetch('ipns://' + ipfsJSAddr)
    const jscode = await response2.text()
    const script = document.createElement('script');
    script.src = jscode;
    document.body.appendChild(script);
  }

}
else {
  console.log ("Missing hash string");
}
