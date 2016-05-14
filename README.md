# Mountebank with UI
----

#### All in one webserver (with UI) for managing a local [mountebank](http://www.mbtest.org/).

## Build it
```
npm install
git submodule update --init
npm run build-ui
```

## Run it
`node index.js`

This will run a mountebank instance on http://localhost:2525 and the UI for configuring it on http://localhost:2526

## UI
The UI is compiled from a fork of [mountebank-UI](https://github.com/donhenton/mountebank-UI) which I'm really grateful for existing.
