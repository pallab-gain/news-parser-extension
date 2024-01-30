(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  var callbacks = [];
  var getTabs = function(tabId) {
    var tab = callbacks.find((function(item) {
      return item.tabId === tabId;
    }));
    callbacks = callbacks.filter((function(item) {
      return item.tabId !== tabId;
    }));
    return tab;
  };
  var append = function(payload) {
    callbacks.push(payload);
  };
  typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };
  var requestTimeoutInMs = 30 * 1e3;
  var SocketIO = function() {
    function SocketIO() {
      var _this = this;
      this.onConnect = function() {
        console.info("connected");
      };
      this.onDisconnect = function() {
        console.info("disconnected");
      };
      this.onCloseTab = function(data) {
        var url = data.url;
        chrome.tabs.query({}, (function(tabs) {
          var ids = tabs.filter((function(tab) {
            var _a;
            return (_a = tab.url) === null || _a === void 0 ? void 0 : _a.includes(url);
          })).map((function(tab) {
            return tab.id;
          }));
          ids.forEach((function(id) {
            return chrome.tabs.remove(id);
          }));
        }));
      };
      this.onAllURLS = function(callback) {
        var payload = {
          type: "scraper.request.all_urls"
        };
        chrome.tabs.create({
          url: "https://google.com"
        }, (function(tab) {
          var tabId = tab.id;
          var reqId = setTimeout((function() {
            chrome.tabs.remove(tabId);
          }), requestTimeoutInMs);
          append({
            tabId: tabId,
            payload: payload,
            reqId: reqId,
            callback: callback
          });
        }));
      };
      this.onAllURLSForPaper = function(data, callback) {
        var paper = data.paper;
        var payload = {
          type: "scraper.request.all_urls.paper",
          paper: paper
        };
        chrome.tabs.create({
          url: "https://google.com"
        }, (function(tab) {
          var tabId = tab.id;
          var reqId = setTimeout((function() {
            chrome.tabs.remove(tabId);
          }), requestTimeoutInMs);
          append({
            tabId: tabId,
            payload: payload,
            reqId: reqId,
            callback: callback
          });
        }));
      };
      this.onNewsLinks = function(data, callback) {
        var url = data.url;
        var payload = {
          type: "scraper.request.news_links",
          url: url
        };
        chrome.tabs.create({
          url: url
        }, (function(tab) {
          var tabId = tab.id;
          var reqId = setTimeout((function() {
            chrome.tabs.remove(tabId);
          }), requestTimeoutInMs);
          append({
            tabId: tabId,
            payload: payload,
            reqId: reqId,
            callback: callback
          });
        }));
      };
      this.onDomContent = function(data, callback) {
        var _a = data, url = _a.url, paper = _a.paper;
        var payload = {
          type: "scraper.request.dom_content",
          link: {
            paper: paper,
            url: url
          }
        };
        chrome.tabs.create({
          url: url
        }, (function(tab) {
          var tabId = tab.id;
          var reqId = setTimeout((function() {
            chrome.tabs.remove(tabId);
          }), requestTimeoutInMs);
          append({
            tabId: tabId,
            payload: payload,
            reqId: reqId,
            callback: callback
          });
        }));
      };
      this.connect = function() {
        _this.socket.connect();
        _this.socket.on("connect", _this.onConnect);
        _this.socket.on("disconnect", _this.onDisconnect);
        _this.socket.on("request.all_urls", _this.onAllURLS);
        _this.socket.on("request.all_urls.paper", _this.onAllURLSForPaper);
        _this.socket.on("request.news_links", _this.onNewsLinks);
        _this.socket.on("request.dom_content", _this.onDomContent);
        _this.socket.on("request.close_tab", _this.onCloseTab);
      };
      this.socket = io("http://localhost:3000", {
        autoConnect: false
      });
    }
    return SocketIO;
  }();
  var socketIO = new SocketIO;
  var handleTabUpdate = function(tabId, info) {
    if (info.status === "complete") {
      var tab_1 = getTabs(tabId);
      if (!Boolean(tab_1)) {
        return;
      }
      var reqId_1 = tab_1.payload.reqId;
      chrome.tabs.sendMessage(tabId, tab_1.payload, (function(response) {
        clearTimeout(reqId_1);
        chrome.tabs.remove(tabId);
        tab_1.callback(response);
      }));
    }
  };
  socketIO.connect();
  chrome.tabs.onUpdated.addListener(handleTabUpdate);
}));
