import { IncomingMessage, ServerResponse } from "http";
import { parse } from 'url'

const func = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url) {
    const url = parse(req.url)
    if (url.pathname && url.pathname.slice(-1) === '/') {
      res.writeHead(301, {
        Location: url.pathname.slice(0, -1) + (url.search ? url.search : '')
      })
      res.end()
    }
  }
}

export default func