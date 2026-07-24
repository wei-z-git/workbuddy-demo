"undefined" != typeof swan && "undefined" != typeof swanGlobal ? (require("swan-game-adapter.js"), require("libs/laya.bdmini.js")) : "undefined" != typeof wx && (require("weapp-adapter.js"), require("libs/min/laya.wxmini.min.js"));

if ("undefined" != typeof wx) {
  var originCreateRewardedVideoAd = wx.createRewardedVideoAd ? wx.createRewardedVideoAd.bind(wx) : null;

  wx.createRewardedVideoAd = function createRewardedVideoAdPatched(options) {
    var ad = originCreateRewardedVideoAd ? originCreateRewardedVideoAd(options) : {};
    var closeHandlers = [];

    var rawOnClose = "function" == typeof ad.onClose ? ad.onClose.bind(ad) : null;
    var rawShow = "function" == typeof ad.show ? ad.show.bind(ad) : null;

    if (rawOnClose) {
      rawOnClose(function() {
        for (var i = 0; i < closeHandlers.length; i++) {
          try {
            closeHandlers[i]({ isEnded: true });
          } catch (e) {}
        }
      });
    }

    ad.onClose = function(fn) {
      "function" == typeof fn && closeHandlers.push(fn);
      return ad;
    };

    ad.offClose = function(fn) {
      if (!fn) {
        closeHandlers.length = 0;
      } else {
        closeHandlers = closeHandlers.filter(function(handler) {
          return handler !== fn;
        });
      }
      return ad;
    };

    ad.show = function() {
      if (rawShow) {
        return Promise.resolve(rawShow()).catch(function() {
          for (var i = 0; i < closeHandlers.length; i++) {
            try {
              closeHandlers[i]({ isEnded: true });
            } catch (e) {}
          }
        });
      }

      for (var i = 0; i < closeHandlers.length; i++) {
        try {
          closeHandlers[i]({ isEnded: true });
        } catch (e) {}
      }
      return Promise.resolve();
    };

    return ad;
  };
}

window.loadLib = require, wx.loadSubpackage({
  name: "js",
  success: function success(e) {
    require("index.js");
  },
  fail: function fail(e) {
    console.log("加载bundle分包失败", e);
  }
});