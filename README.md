## What?

This is a quick test project that uses NGL (https://github.com/arose/ngl) with the changes to module building proposed in 
https://github.com/arose/ngl/issues/737

## What to do?

```bash
# Clone it
git clone https://github.com/fredludlow/ngl-module-test

# Install
npm install 

# Build
npm run build

# Serve the files
python -m http.server 8080
```

Click here: (http://localhost:8080/index.html)

## So what?

You can then inspect the files and see that:

    1. three was brought in by npm
    2. The built version (dist/index.js) contains NGL and three


## What I haven't tried

    * Yarn
    * Making a meaningful export from this package and consuming it somewhere else (in which case make ngl a normal dependency and build an es6 module)

## What I haven't thought enough about:

    * What to name the different build targets in ngl/dist


