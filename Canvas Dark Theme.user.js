// ==UserScript==
// @name         Canvas Dark Theme
// @version      1.0.0
// @description  Dark theme for Canvas
// @author       Ohlin Arellano
// @match        *://*.instructure.com/*
// @icon         https://www.google.com/s2/favicons?domain=instructure.com
// @grant        none
// ==/UserScript==

function addStyle(css){
    var node = document.createElement("style");
    node.appendChild(document.createTextNode(css));
    var heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
        heads[0].appendChild(node);
    } else {
        document.documentElement.appendChild(node);
    }
}

fetch("https://raw.githubusercontent.com/murphy28/Canvas-Dark-Theme/main/canvasdark.theme.css").then((r)=>{r.text().then((d)=>{addStyle(d)})})
