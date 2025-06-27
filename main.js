//import { verifiedFetch } from 'https://esm.sh/@helia/verified-fetch?bundle-deps'
//import { verifiedFetch } from './libs/verified-fetch.js'
import { verifiedFetch } from 'https://cdn.jsdelivr.net/npm/@helia/verified-fetch@3.2.0/+esm';


const hashString = window.location.hash.substring(1);
if (hashString) {
  const hashParams = new URLSearchParams(hashString);
  if (hashParams.has("css")) {
    console.log("ipfs css:", hashParams.get("css"));
    const ipfsCSSAddr = hashParams.get("css");

    const response1 = await verifiedFetch('ipfs://' + ipfsCSSAddr);
    const cssBlob = new Blob([await response1.text()], { type: 'text/css' });
    const cssBlobUrl = URL.createObjectURL(cssBlob);
    
    //const response1 = await verifiedFetch('ipfs://' + ipfsCSSAddr)
    //const cssBlob = await response1.blob();
    //const cssBlobUrl = URL.createObjectURL(cssBlob);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssBlobUrl;
    link.type = 'text/css';
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
else {console.log ("Missing hash string");}

const searchString = window.location.search;
if (searchString) {
  const searchParams = new URLSearchParams(searchString);
  if (searchParams.has("css")) {
    console.log("ipfs css:", searchParams.get("css"));
    const ipfsCSSAddr = searchParams.get("css");

    const response1 = await verifiedFetch('ipfs://' + ipfsCSSAddr);
    const cssBlob = new Blob([await response1.text()], { type: 'text/css' });
    const cssBlobUrl = URL.createObjectURL(cssBlob);
    
    //const response1 = await verifiedFetch('ipfs://' + ipfsCSSAddr)
    //const cssBlob = await response1.blob();
    //const cssBlobUrl = URL.createObjectURL(cssBlob);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssBlobUrl;
    link.type = 'text/css';
    document.head.appendChild(link);
  }
  if (searchParams.has("html")) {
    console.log("ipns html:", searchParams.get("html"));
    const ipnsAddr = searchParams.get("html");
    const response2 = await verifiedFetch('ipns://' + ipnsAddr)
    const html = await response2.text()
    document.body.innerHTML = html
  }
  if (searchParams.has("js")) {
    console.log("ipfs js:", searchParams.get("js"));
    const ipfsJSAddr = searchParams.get("js");
    const response3 = await verifiedFetch('ipfs://' + ipfsJSAddr)
    const blob = await response3.blob();
    const blobUrl = URL.createObjectURL(blob);
    const script = document.createElement('script');
    script.src = blobUrl;
    //script.onload = () => URL.revokeObjectURL(blobUrl);
    document.body.appendChild(script);
  }
}
else {console.log ("Missing search string");}

