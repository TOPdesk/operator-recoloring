import rimraf from "rimraf";
import createUserstyle from "./src/scripts/create-userstyle";
import { version } from "./package.json";

rimraf.sync("public");

export default {
  input: "src/scripts/app.js",
  output: {
    dir: __dirname + "/public/"
  },
  plugins: [
    createUserstyle(version),
  ]
}