fetch("https://eloquentjavascript.net/author", {headers: {Type: "text/plain"}})
  .then(resp => resp.text())
  .then(console.log);
fetch("https://eloquentjavascript.net/author", {headers: {Type: "appplication/json"}})
  .then(resp => resp.text())
  .then(console.log);
fetch("https://eloquentjavascript.net/author", {headers: {Type: "appplication/html"}})
  .then(resp => resp.text())
  .then(console.log);
