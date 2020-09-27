module.exports = {
  // default working directory (can be changed per 'cwd' in every asset option)
  context: __dirname,

  // path to the clientlib root folder (output)
  clientLibRoot: "../content-packages/ui.apps/jcr_root/apps/adaptto-cloud-demo/clientlibs",

  // define all clientlib options here as array... (multiple clientlibs)
  libs: [
    {
      name: "adaptto-cloud-demo.app",
      serializationFormat: "xml",
      allowProxy: true,
      assets: {
        js: ["dist/static/js/app.js", "dist/static/js/app.js.map"],
        css: ["dist/static/styles/app.css", "dist/static/styles/app.css.map"],
        resources: {
          cwd: "./public/",
          flatten: false,
          files: ["**/*.*"]
        }
      }
    },
    {
      name: "adaptto-cloud-demo.all",
      serializationFormat: "xml",
      embed: [
        "core.wcm.components.commons.datalayer.v1",
        "core.wcm.components.commons.site.container",
        "core.wcm.components.carousel.v1",
        "core.wcm.components.tabs.v1",
        "core.wcm.components.accordion.v1",
        "adaptto-cloud-demo.app"
      ],
      jsProcessor: ["default:none", "min:gcc;compilationLevel=whitespace"],
      allowProxy: true,
      assets: {
        js: [],
        css: []
      }
    }
  ]
};
