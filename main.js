import { verifiedFetch } from 'https://esm.sh/@helia/verified-fetch?bundle-deps'

const hashString = window.location.hash.substring(1);
if (hashString) {
  const hashParams = new URLSearchParams(hashString);
  if (hashParams.has("html")) {
    console.log("HTML CID:", hashParams.get("html"));
    const response = await verifiedFetch('ipns://' + ipnsAddr)
    const html = await response.text()
    document.body.innerHTML = html
  }
}
