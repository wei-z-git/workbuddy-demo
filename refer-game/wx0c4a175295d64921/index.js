window.screenOrientation = "sensor_portrait";
loadLib("./libs/min/laya.core.min.js");
loadLib("./libs/min/laya.ani.min.js");
loadLib("./libs/min/laya.ui.min.js");
loadLib("./libs/min/protobuf-library.min.js");
loadLib("./libs/min/protobuf-bundles.min.js");
var loadSubPackage = function loadSubPackage(url) {
  wx.loadSubpackage({
    name: url,
    success: function success(res) {
      console.log("分包加载成功");
      loadLib("js/bundle.js");
    },
    fail: function fail(res) {
      console.log("分包加载失败");
      loadSubPackage(url);
    }
  });
};
loadSubPackage("js");