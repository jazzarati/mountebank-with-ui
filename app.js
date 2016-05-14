import express from 'express'
let app = express()

import { exec } from 'child_process'

app.use(express.static('mountebank-UI/build/public_html'))

app.listen(2526, () => {
  console.log('UI listening on port 2526!')
  console.log('Mountebank listening on port 2525!')
})

exec('./node_modules/mountebank/bin/mb start --allowCORS --logfile logs/mb.log --pidfile logs/mb.pid', (err, stdout, stderr) => {
  console.log(err)
  console.log(stdout)
  console.log(stderr)
})
