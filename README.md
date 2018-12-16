# Hydrobytes Dashboard

### Development
- To start the application in "dev" (development) mode

```
npm run start:dev

> hb-dashboard-react@0.0.1 start:dev /Users/dee/projects/hydrobytes/dashboard/hb-dashboard-react
> webpack-dev-server --mode development

ℹ ｢wds｣: Project is running at http://localhost:3000/
ℹ ｢wds｣: webpack output is served from http://localhost:3000/dist/
ℹ ｢wds｣: Content not from webpack is served from /Users/dee/projects/hydrobytes/dashboard/hb-dashboard-react/public/
```

Built files never show up in your dist directory. `webpack-dev-server` is actually serving the bundled files from 
memory — once the server stops, they’re gone.

### Build

- Production: `webpack --mode production`
Build files are in `/dist`

### Optional

Images aren’t set up to be processed by Webpack by default. There’s a loader for that:
[file-loader](https://webpack.js.org/loaders/file-loader/).
