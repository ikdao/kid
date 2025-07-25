export let kid=(l=11,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_")=>{let e=crypto.getRandomValues(new Uint8Array(l)),i="";for(let o=0;o<l;o++)i+=s[63&e[o]];return i};
