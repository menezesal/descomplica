import {createServer} from 'http';
import {parse} from 'url';
import { readFile } from 'fs';
import { NOTFOUND } from 'dns';

createServer(
  function(req,res) {
    let q = parse(req.url, true);
    let filename = "./" +  q.pathname;
    console.log(q);
    console.log(filename);

    readFile(filename, (err, data) => {
      console.log(err);
      if (err) {
        res.writeHead(404,{'Content-Type': 'text/html'});
        return res.end('404 NOTFOUND');
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }
).listen(8080);