window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  let os = 300;
  let time = 500;
  
  function createWindow(mX, mY) {
    const text = `<!DOCTYPE html><html> <head> <title>keep</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://iguannalin.github.io/keep/index.css"/></head> <body><div id="container"><div id="cursor"></div></div></body><script>let c=document.getElementById("cursor");cTop=-75;setInterval(() => {c.style.top=cTop+'px';cTop=cTop<100?cTop+1:-75;},50);setInterval(() => window.moveTo(Math.random()*1000,Math.random()*1000), ${time});</script></html>`;
    const blob = new Blob([text], {type: "text/html"});
    const blobUrl = URL.createObjectURL(blob);
    const wTop = getRandomInt(window.innerWidth, window.innerWidth+os);
    const wLeft = getRandomInt(window.innerHeight, window.innerHeight+os);
    window.open(blobUrl, '_blank', `popup,width=${10},height=${10},left=${wLeft},top=${wTop}`);
    window.URL.revokeObjectURL(blobUrl);
  }
  
  // setInterval(() => {
    createWindow(window.screenLeft, window.screenTop)//, getRandomInt(0,1000));
    setInterval(() => {if (Math.random() > 0.8) location.reload()}, getRandomInt(100,1000));
  // }, time);
});