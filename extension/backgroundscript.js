(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P((function(resolve) {
        resolve(value);
      }));
    }
    return new (P || (P = Promise))((function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    }));
  }
  function __generator(thisArg, body) {
    var _ = {
      label: 0,
      sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    }, f, y, t, g;
    return g = {
      next: verb(0),
      throw: verb(1),
      return: verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([ n, v ]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
        0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [ op[0] & 2, t.value ];
        switch (op[0]) {
         case 0:
         case 1:
          t = op;
          break;

         case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

         case 5:
          _.label++;
          y = op[1];
          op = [ 0 ];
          continue;

         case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;

         default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [ 6, e ];
        y = 0;
      } finally {
        f = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  }
  typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };
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
  var wait = function(ms) {
    return __awaiter(void 0, void 0, void 0, (function() {
      return __generator(this, (function(_a) {
        switch (_a.label) {
         case 0:
          return [ 4, new Promise((function(resolve) {
            return setTimeout(resolve, ms);
          })) ];

         case 1:
          _a.sent();
          return [ 2 ];
        }
      }));
    }));
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
    return __awaiter(void 0, void 0, void 0, (function() {
      var tab_1, reqId_1;
      return __generator(this, (function(_a) {
        switch (_a.label) {
         case 0:
          if (!(info.status === "complete")) return [ 3, 2 ];
          tab_1 = getTabs(tabId);
          if (!Boolean(tab_1)) {
            return [ 2 ];
          }
          return [ 4, wait(3 * 1e3) ];

         case 1:
          _a.sent();
          reqId_1 = tab_1.payload.reqId;
          chrome.tabs.sendMessage(tabId, tab_1.payload, (function(response) {
            clearTimeout(reqId_1);
            chrome.tabs.remove(tabId);
            tab_1.callback(response);
          }));
          _a.label = 2;

         case 2:
          return [ 2 ];
        }
      }));
    }));
  };
  socketIO.connect();
  chrome.tabs.onUpdated.addListener(handleTabUpdate);
}));
