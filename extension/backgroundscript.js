(function(e) {
    typeof define === "function" && define.amd ? define(e) : e();
})((function() {
    "use strict";
    function __awaiter(e, t, n, r) {
        function adopt(e) {
            return e instanceof n ? e : new n((function(t) {
                t(e);
            }));
        }
        return new (n || (n = Promise))((function(n, o) {
            function fulfilled(e) {
                try {
                    step(r.next(e));
                } catch (e) {
                    o(e);
                }
            }
            function rejected(e) {
                try {
                    step(r["throw"](e));
                } catch (e) {
                    o(e);
                }
            }
            function step(e) {
                e.done ? n(e.value) : adopt(e.value).then(fulfilled, rejected);
            }
            step((r = r.apply(e, t || [])).next());
        }));
    }
    function __generator(e, t) {
        var n = {
            label: 0,
            sent: function() {
                if (a[0] & 1) throw a[1];
                return a[1];
            },
            trys: [],
            ops: []
        }, r, o, a, c;
        return c = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        }, typeof Symbol === "function" && (c[Symbol.iterator] = function() {
            return this;
        }), c;
        function verb(e) {
            return function(t) {
                return step([ e, t ]);
            };
        }
        function step(u) {
            if (r) throw new TypeError("Generator is already executing.");
            while (c && (c = 0, u[0] && (n = 0)), n) try {
                if (r = 1, o && (a = u[0] & 2 ? o["return"] : u[0] ? o["throw"] || ((a = o["return"]) && a.call(o), 
                0) : o.next) && !(a = a.call(o, u[1])).done) return a;
                if (o = 0, a) u = [ u[0] & 2, a.value ];
                switch (u[0]) {
                  case 0:
                  case 1:
                    a = u;
                    break;

                  case 4:
                    n.label++;
                    return {
                        value: u[1],
                        done: false
                    };

                  case 5:
                    n.label++;
                    o = u[1];
                    u = [ 0 ];
                    continue;

                  case 7:
                    u = n.ops.pop();
                    n.trys.pop();
                    continue;

                  default:
                    if (!(a = n.trys, a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                        n = 0;
                        continue;
                    }
                    if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
                        n.label = u[1];
                        break;
                    }
                    if (u[0] === 6 && n.label < a[1]) {
                        n.label = a[1];
                        a = u;
                        break;
                    }
                    if (a && n.label < a[2]) {
                        n.label = a[2];
                        n.ops.push(u);
                        break;
                    }
                    if (a[2]) n.ops.pop();
                    n.trys.pop();
                    continue;
                }
                u = t.call(e, n);
            } catch (e) {
                u = [ 6, e ];
                o = 0;
            } finally {
                r = a = 0;
            }
            if (u[0] & 5) throw u[1];
            return {
                value: u[0] ? u[1] : void 0,
                done: true
            };
        }
    }
    typeof SuppressedError === "function" ? SuppressedError : function(e, t, n) {
        var r = new Error(n);
        return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
    };
    var e = [];
    var getTabs = function(t) {
        var n = e.find((function(e) {
            return e.tabId === t;
        }));
        e = e.filter((function(e) {
            return e.tabId !== t;
        }));
        return n;
    };
    var append = function(t) {
        e.push(t);
    };
    var t = 30 * 1e3;
    var n = function() {
        function SocketIO() {
            var e = this;
            this.onConnect = function() {
                console.info("connected");
            };
            this.onDisconnect = function() {
                console.info("disconnected");
            };
            this.onCloseTab = function(e) {
                var t = e.url;
                chrome.tabs.query({}, (function(e) {
                    var n = e.filter((function(e) {
                        var n;
                        return (n = e.url) === null || n === void 0 ? void 0 : n.includes(t);
                    })).map((function(e) {
                        return e.id;
                    }));
                    n.forEach((function(e) {
                        return chrome.tabs.remove(e);
                    }));
                }));
            };
            this.onAllURLS = function(e) {
                var n = {
                    type: "scraper.request.all_urls"
                };
                chrome.tabs.create({
                    url: "https://google.com"
                }, (function(r) {
                    var o = r.id;
                    var a = setTimeout((function() {
                        chrome.tabs.remove(o);
                    }), t);
                    append({
                        tabId: o,
                        payload: n,
                        reqId: a,
                        callback: e
                    });
                }));
            };
            this.onAllURLSForPaper = function(e, n) {
                var r = e.paper;
                var o = {
                    type: "scraper.request.all_urls.paper",
                    paper: r
                };
                chrome.tabs.create({
                    url: "https://google.com"
                }, (function(e) {
                    var r = e.id;
                    var a = setTimeout((function() {
                        chrome.tabs.remove(r);
                    }), t);
                    append({
                        tabId: r,
                        payload: o,
                        reqId: a,
                        callback: n
                    });
                }));
            };
            this.onNewsLinks = function(e, n) {
                var r = e.url;
                var o = {
                    type: "scraper.request.news_links",
                    url: r
                };
                chrome.tabs.create({
                    url: r
                }, (function(e) {
                    var r = e.id;
                    var a = setTimeout((function() {
                        chrome.tabs.remove(r);
                    }), t);
                    append({
                        tabId: r,
                        payload: o,
                        reqId: a,
                        callback: n
                    });
                }));
            };
            this.onDomContent = function(e, n) {
                var r = e, o = r.url, a = r.paper;
                var c = {
                    type: "scraper.request.dom_content",
                    link: {
                        paper: a,
                        url: o
                    }
                };
                chrome.tabs.create({
                    url: o
                }, (function(e) {
                    var r = e.id;
                    var o = setTimeout((function() {
                        chrome.tabs.remove(r);
                    }), t);
                    append({
                        tabId: r,
                        payload: c,
                        reqId: o,
                        callback: n
                    });
                }));
            };
            this.connect = function() {
                e.socket.connect();
                e.socket.on("connect", e.onConnect);
                e.socket.on("disconnect", e.onDisconnect);
                e.socket.on("request.all_urls", e.onAllURLS);
                e.socket.on("request.all_urls.paper", e.onAllURLSForPaper);
                e.socket.on("request.news_links", e.onNewsLinks);
                e.socket.on("request.dom_content", e.onDomContent);
                e.socket.on("request.close_tab", e.onCloseTab);
            };
            this.socket = io("http://localhost:3000", {
                autoConnect: false
            });
        }
        return SocketIO;
    }();
    var r = new n;
    var handleTabUpdate = function(e, t) {
        return __awaiter(void 0, void 0, void 0, (function() {
            var n, r;
            return __generator(this, (function(o) {
                if (t.status === "complete") {
                    n = getTabs(e);
                    if (!Boolean(n)) {
                        return [ 2 ];
                    }
                    r = n.payload.reqId;
                    chrome.tabs.sendMessage(e, n.payload, (function(e) {
                        clearTimeout(r);
                        n.callback(e);
                    }));
                }
                return [ 2 ];
            }));
        }));
    };
    r.connect();
    chrome.tabs.onUpdated.addListener(handleTabUpdate);
}));
