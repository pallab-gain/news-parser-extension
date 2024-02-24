(function(t) {
  typeof define === "function" && define.amd ? define(t) : t();
})((function() {
  "use strict";
  var extendStatics = function(t, r) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(t, r) {
      t.__proto__ = r;
    } || function(t, r) {
      for (var e in r) if (Object.prototype.hasOwnProperty.call(r, e)) t[e] = r[e];
    };
    return extendStatics(t, r);
  };
  function __extends(t, r) {
    if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    extendStatics(t, r);
    function __() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (__.prototype = r.prototype, new __);
  }
  function __awaiter(t, r, e, n) {
    function adopt(t) {
      return t instanceof e ? t : new e((function(r) {
        r(t);
      }));
    }
    return new (e || (e = Promise))((function(e, a) {
      function fulfilled(t) {
        try {
          step(n.next(t));
        } catch (t) {
          a(t);
        }
      }
      function rejected(t) {
        try {
          step(n["throw"](t));
        } catch (t) {
          a(t);
        }
      }
      function step(t) {
        t.done ? e(t.value) : adopt(t.value).then(fulfilled, rejected);
      }
      step((n = n.apply(t, r || [])).next());
    }));
  }
  function __generator(t, r) {
    var e = {
      label: 0,
      sent: function() {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    }, n, a, o, u;
    return u = {
      next: verb(0),
      throw: verb(1),
      return: verb(2)
    }, typeof Symbol === "function" && (u[Symbol.iterator] = function() {
      return this;
    }), u;
    function verb(t) {
      return function(r) {
        return step([ t, r ]);
      };
    }
    function step(i) {
      if (n) throw new TypeError("Generator is already executing.");
      while (u && (u = 0, i[0] && (e = 0)), e) try {
        if (n = 1, a && (o = i[0] & 2 ? a["return"] : i[0] ? a["throw"] || ((o = a["return"]) && o.call(a), 
        0) : a.next) && !(o = o.call(a, i[1])).done) return o;
        if (a = 0, o) i = [ i[0] & 2, o.value ];
        switch (i[0]) {
         case 0:
         case 1:
          o = i;
          break;

         case 4:
          e.label++;
          return {
            value: i[1],
            done: false
          };

         case 5:
          e.label++;
          a = i[1];
          i = [ 0 ];
          continue;

         case 7:
          i = e.ops.pop();
          e.trys.pop();
          continue;

         default:
          if (!(o = e.trys, o = o.length > 0 && o[o.length - 1]) && (i[0] === 6 || i[0] === 2)) {
            e = 0;
            continue;
          }
          if (i[0] === 3 && (!o || i[1] > o[0] && i[1] < o[3])) {
            e.label = i[1];
            break;
          }
          if (i[0] === 6 && e.label < o[1]) {
            e.label = o[1];
            o = i;
            break;
          }
          if (o && e.label < o[2]) {
            e.label = o[2];
            e.ops.push(i);
            break;
          }
          if (o[2]) e.ops.pop();
          e.trys.pop();
          continue;
        }
        i = r.call(t, e);
      } catch (t) {
        i = [ 6, t ];
        a = 0;
      } finally {
        n = o = 0;
      }
      if (i[0] & 5) throw i[1];
      return {
        value: i[0] ? i[1] : void 0,
        done: true
      };
    }
  }
  function __spreadArray(t, r, e) {
    if (e || arguments.length === 2) for (var n = 0, a = r.length, o; n < a; n++) {
      if (o || !(n in r)) {
        if (!o) o = Array.prototype.slice.call(r, 0, n);
        o[n] = r[n];
      }
    }
    return t.concat(o || Array.prototype.slice.call(r));
  }
  typeof SuppressedError === "function" ? SuppressedError : function(t, r, e) {
    var n = new Error(e);
    return n.name = "SuppressedError", n.error = t, n.suppressed = r, n;
  };
  var wait = function(t) {
    return __awaiter(void 0, void 0, void 0, (function() {
      return __generator(this, (function(r) {
        switch (r.label) {
         case 0:
          return [ 4, new Promise((function(r) {
            return setTimeout(r, t);
          })) ];

         case 1:
          r.sent();
          return [ 2 ];
        }
      }));
    }));
  };
  var t = function() {
    function AbastractNewspaper(t, r, e, n) {
      if (n === void 0) {
        n = false;
      }
      this._paper = t;
      this._paperImage = r;
      this._urls = e;
      this._isLocal = n;
    }
    Object.defineProperty(AbastractNewspaper.prototype, "name", {
      get: function() {
        return this._paper;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(AbastractNewspaper.prototype, "paperImage", {
      get: function() {
        return this._paperImage;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(AbastractNewspaper.prototype, "urls", {
      get: function() {
        return this._urls;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(AbastractNewspaper.prototype, "isLocal", {
      get: function() {
        return this._isLocal;
      },
      enumerable: false,
      configurable: true
    });
    AbastractNewspaper.prototype.removeAds = function() {
      document.querySelectorAll('.googleNewsLink, script, [class*="ads"], #inline-related-post, noscript, .adv-img, .advertisement').forEach((function(t) {
        t.remove();
      }));
    };
    AbastractNewspaper.prototype.getTitle = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:title"]'), true).map((function(t) {
        return t.content;
      }));
      return t === null || t === void 0 ? void 0 : t[0];
    };
    AbastractNewspaper.prototype.getSummary = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:description"]'), true).map((function(t) {
        return t.content;
      }));
      return t === null || t === void 0 ? void 0 : t[0];
    };
    AbastractNewspaper.prototype.getTags = function() {
      return [];
    };
    AbastractNewspaper.prototype.getImages = function() {
      return [];
    };
    AbastractNewspaper.prototype.getLink = function() {
      throw new Error("Not implemented");
    };
    AbastractNewspaper.prototype.getContent = function() {
      throw new Error("Not implemented");
    };
    AbastractNewspaper.prototype.getNewsLinks = function() {
      return __awaiter(this, void 0, void 0, (function() {
        var t;
        return __generator(this, (function(r) {
          t = [];
          try {
            t = this.getLink();
          } catch (t) {
            console.info("error getting url", t);
          }
          return [ 2, t ];
        }));
      }));
    };
    AbastractNewspaper.prototype.getNewsContent = function(t) {
      var r, e, n, a, o, u, i;
      return __awaiter(this, void 0, void 0, (function() {
        var c, p, l, s, m, d, y;
        return __generator(this, (function(_) {
          switch (_.label) {
           case 0:
            c = {};
            _.label = 1;

           case 1:
            _.trys.push([ 1, 3, , 4 ]);
            this.removeAds();
            return [ 4, wait(5 * 1e3) ];

           case 2:
            _.sent();
            p = (r = this.getTitle()) !== null && r !== void 0 ? r : "";
            l = (e = this.getSummary()) !== null && e !== void 0 ? e : "";
            s = (a = (n = this.getTags()) === null || n === void 0 ? void 0 : n.filter((function(t) {
              return !!t;
            }))) !== null && a !== void 0 ? a : [];
            m = (u = (o = this.getImages()) === null || o === void 0 ? void 0 : o.filter((function(t) {
              return !!t;
            }))) !== null && u !== void 0 ? u : [];
            d = (i = this.getContent()) !== null && i !== void 0 ? i : "";
            c = {
              title: p,
              summary: l,
              content: d,
              link: t.link,
              tags: s,
              images: m,
              paper: this._paper,
              paperImage: this._paperImage,
              isLocal: this._isLocal
            };
            return [ 3, 4 ];

           case 3:
            y = _.sent();
            console.info("-> error getting content", y);
            return [ 3, 4 ];

           case 4:
            return [ 2, c ];
          }
        }));
      }));
    };
    return AbastractNewspaper;
  }();
  var r = "আলোকিত বাংলাদেশ";
  var e = "https://www.alokitobangladesh.com/templates/desktop-v1/images/logo.png";
  var n = [ "https://www.alokitobangladesh.com/all-news", "https://www.alokitobangladesh.com/country-news" ];
  var a = function(t) {
    __extends(AlokitoBangladesh, t);
    function AlokitoBangladesh() {
      return t.call(this, r, e, n) || this;
    }
    AlokitoBangladesh.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll("#tags_list a"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    AlokitoBangladesh.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".dtl_img_block img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    AlokitoBangladesh.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".allnews a, #latest_contents_block a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    AlokitoBangladesh.prototype.getContent = function() {
      return __spreadArray([], document.querySelectorAll(".dtl_content_block"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        var r = t.querySelectorAll("p");
        var e = __spreadArray([], r, true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
        return e;
      })).join("\n\n");
    };
    return AlokitoBangladesh;
  }(t);
  var o = "আমাদের সময়";
  var u = "https://flashn3ws-scraper.fly.dev/api/v1/dist/amader-shomoy-logo.jpg";
  var i = [ "https://dainikamadershomoy.com/latest/all", "https://dainikamadershomoy.com/category/sarades" ];
  var c = function(t) {
    __extends(AmatherSomoy, t);
    function AmatherSomoy() {
      return t.call(this, o, u, i) || this;
    }
    AmatherSomoy.prototype.getTitle = function() {
      var t = __spreadArray([], document.querySelectorAll("head > title"), true).map((function(t) {
        return t.textContent;
      }));
      return t === null || t === void 0 ? void 0 : t[0];
    };
    AmatherSomoy.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".btm-tags"), true).map((function(t) {
        return __spreadArray([], t.querySelectorAll("a"), true).map((function(t) {
          return t.textContent;
        }));
      })).flat(1);
      return t;
    };
    AmatherSomoy.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".sub-content"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("img"), true).map((function(t) {
          return t.src;
        }));
      })).flat(1);
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    AmatherSomoy.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".random-news a, h1 a, h2 a, h3 a, h4 a, h5 a, h6 a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    AmatherSomoy.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".sub-content"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll(".content p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return AmatherSomoy;
  }(t);
  var p = "দৈনিক আজাদী";
  var l = "https://dainikazadi.net/wp-content/uploads/logo/azadi_logo.png";
  var s = [ "https://dainikazadi.net/category/%e0%a6%b8%e0%a6%b0%e0%a7%8d%e0%a6%ac%e0%a6%b6%e0%a7%87%e0%a6%b7/" ];
  var m = function(t) {
    __extends(Azadi, t);
    function Azadi() {
      return t.call(this, p, l, s) || this;
    }
    Azadi.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".td-post-content img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    Azadi.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".td-module-title a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    Azadi.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".td-post-content"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return Azadi;
  }(t);
  var d = "বাংলানিউজ২৪";
  var y = "https://www.banglanews24.com/public/desktop/img/bn24_logo_3.jpg";
  var _ = [ "https://www.banglanews24.com/", "https://www.banglanews24.com/category/%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A7%80%E0%A7%9F/1" ];
  var f = function(t) {
    __extends(Banglanews24, t);
    function Banglanews24() {
      return t.call(this, d, y, _) || this;
    }
    Banglanews24.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".related_tag a"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    Banglanews24.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll([ ".news-article img" ]), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    Banglanews24.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".latest-readers-tab #latest a, .category-area a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    Banglanews24.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll("article"), true).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return Banglanews24;
  }(t);
  var g = "বণিক বার্তা";
  var A = "https://bonikbarta.net/uploads/logo_image/bonikbarta_logo.png";
  var h = [ "https://bonikbarta.net", "https://bonikbarta.net/home/desherbarta/10/0" ];
  var v = function(t) {
    __extends(BanikBarta, t);
    function BanikBarta() {
      return t.call(this, g, A, h) || this;
    }
    BanikBarta.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".post-body"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll(".btn-tag"), true).map((function(t) {
          return t.textContent;
        }));
      })).flat(1);
      return t;
    };
    BanikBarta.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".news_main_contents"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("img"), true).map((function(t) {
          return t.src;
        }));
      })).flat(1);
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    BanikBarta.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".recent-news .media-heading a, .news_content h4 a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    BanikBarta.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".news_main_contents"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return BanikBarta;
  }(t);
  var w = "বিবিসি ২৪ নিউজ";
  var S = "https://www.bbc24news.com/cloud/archives/fileman/bbc-logo.jpg";
  var q = [ "https://www.bbc24news.com/", "https://www.bbc24news.com/section/%e0%a6%9c%e0%a6%be%e0%a6%a4%e0%a7%80%e0%a7%9f" ];
  var b = function(t) {
    __extends(BBC24News, t);
    function BBC24News() {
      return t.call(this, w, S, q) || this;
    }
    BBC24News.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll('#content > .noprint > a[rel="category tag"]'), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    BBC24News.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll([ "#single img" ]), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    BBC24News.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".entry-content a, .category .catbox a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    BBC24News.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll("#single"), true).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return BBC24News;
  }(t);
  var k = "BBC News বাংলা";
  var C = "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/BBC_Bangla_logo.svg/440px-BBC_Bangla_logo.svg.png";
  var j = [ "https://www.bbc.com/bengali", "https://www.bbc.com/bengali/topics/c907347rezkt" ];
  var x = function(t) {
    __extends(BBCBangla, t);
    function BBCBangla() {
      return t.call(this, k, C, j) || this;
    }
    BBCBangla.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll('[aria-labelledby="related-topics"] a'), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    BBCBangla.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll("main img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    BBCBangla.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll('section[aria-labelledby="প্রধান-খবর"] a, div[data-testid="curation-grid-normal"] a'), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    BBCBangla.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll("main"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll('p[dir="ltr"]'), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return BBCBangla;
  }(t);
  var B = "বাংলাদেশ প্রতিদিন";
  var D = "https://www.bd-pratidin.com/assets/newDesktop/img/logo.png?v=2";
  var L = [ "https://www.bd-pratidin.com", "https://www.bd-pratidin.com/country" ];
  var I = function(t) {
    __extends(BDProtidin, t);
    function BDProtidin() {
      return t.call(this, B, D, L) || this;
    }
    BDProtidin.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".tagArea a"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    BDProtidin.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".news-img img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    BDProtidin.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".latest-news-top a, .cat-lead a, .cat-2nd-lead a, a.list-item"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    BDProtidin.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll("#bpsepnil p"), true).map((function(t) {
        return t.textContent;
      })).join("\n\n");
      return t;
    };
    return BDProtidin;
  }(t);
  var N = "বাংলাদেশ জার্নাল";
  var P = "https://www.bd-journal.com/templates/web-v1/images/logo.png?v=1.7";
  var T = [ "https://www.bd-journal.com/all-news", "https://www.bd-journal.com/bangladesh" ];
  var E = function(t) {
    __extends(BDJournal, t);
    function BDJournal() {
      return t.call(this, N, P, T) || this;
    }
    BDJournal.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll("#tags_list a"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    BDJournal.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".dtl_img_section img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    BDJournal.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".all_news_content_block a, .lead_top a, .lead_bottom a, .cat_summary_display_one a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    BDJournal.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll("#newsDtl"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return BDJournal;
  }(t);
  var J = "ভোরের কাগজ";
  var M = "https://bhorerkagoj.com/uploads/settings/logo-black.png";
  var z = [ "https://www.bhorerkagoj.com/", "https://www.bhorerkagoj.com/category/bangladesh/" ];
  var O = function(t) {
    __extends(Bhorerkagoj, t);
    function Bhorerkagoj() {
      return t.call(this, J, M, z) || this;
    }
    Bhorerkagoj.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".desktopDetailTag"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("a"), true).map((function(t) {
          return t.textContent;
        }));
      })).flat(1);
      return t;
    };
    Bhorerkagoj.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".desktopDetailPhoto"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("img"), true).map((function(t) {
          return t.src;
        }));
      })).flat(1);
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    Bhorerkagoj.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".desktopSectionListMedia, .cat-normal-news a"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("a"), true).map((function(t) {
          return t.href;
        }));
      })).flat(1);
      return t;
    };
    Bhorerkagoj.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".desktopDetailBody"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return Bhorerkagoj;
  }(t);
  var R = "চাঁদপুর টাইমস";
  var F = "https://chandpurtimes.com/wp-content/uploads/2019/09/Logo-Chandpur-Times-300x75.png";
  var G = [ "https://chandpurtimes.com/" ];
  var K = function(t) {
    __extends(ChadpurTimes, t);
    function ChadpurTimes() {
      return t.call(this, R, F, G, true) || this;
    }
    ChadpurTimes.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll("#crumbs a:not(:first-child)"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    ChadpurTimes.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".single-post-thumb img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    ChadpurTimes.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".posts-list .widget-container a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    ChadpurTimes.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".post-inner .entry"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return ChadpurTimes;
  }(t);
  var Z = "চকরিয়া নিউজ";
  var U = "https://chakarianews.com/wp-content/uploads/2021/05/CN2.jpg";
  var H = [ "https://chakarianews.com/" ];
  var Q = function(t) {
    __extends(ChakariaNews, t);
    function ChakariaNews() {
      return t.call(this, Z, U, H, true) || this;
    }
    ChakariaNews.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".breadcrumbs .item-cat a"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    ChakariaNews.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".entryimage-container img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    ChakariaNews.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".lead-latest a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    ChakariaNews.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".entry-content"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return ChakariaNews;
  }(t);
  var V = "কক্সবাজার নিউজ";
  var W = "https://www.coxsbazarnews.com/wp-content/uploads/2021/02/logo.png";
  var X = [ "https://www.coxsbazarnews.com" ];
  var Y = function(t) {
    __extends(CoxbazerNews, t);
    function CoxbazerNews() {
      return t.call(this, V, W, X, true) || this;
    }
    CoxbazerNews.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".entryimage-container img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    CoxbazerNews.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".list-latest a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    CoxbazerNews.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".entry-content"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return CoxbazerNews;
  }(t);
  var $ = "দৈনিক ইনকিলাব";
  var tt = "https://dailyinqilab.com/mediaStorage/common/logo1671282573.png";
  var rt = [ "https://dailyinqilab.com/archive" ];
  var et = function(t) {
    __extends(DailyInqilab, t);
    function DailyInqilab() {
      return t.call(this, $, tt, rt) || this;
    }
    DailyInqilab.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".breadcrumb a"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    DailyInqilab.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".new-details img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    DailyInqilab.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll("a.headline"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    DailyInqilab.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".new-details"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return DailyInqilab;
  }(t);
  var nt = "দৈনিক সংগ্রাম";
  var at = "https://www.dailysangram.com/logos/logo.jpg";
  var ot = [ "https://dailysangram.com/", "https://dailysangram.com/section/bangladesh/" ];
  var ut = function(t) {
    __extends(DainikSangram, t);
    function DainikSangram() {
      return t.call(this, nt, at, ot) || this;
    }
    DainikSangram.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".breadcrumb li:not(:first-child) a"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    DainikSangram.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".mediaContainer img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    DainikSangram.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".lastUpdate a, .homeContent h1 a, .homeContent h2 a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    DainikSangram.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".postBody p"), true).map((function(t) {
        return t.textContent;
      })).join("\n\n");
      return t;
    };
    return DainikSangram;
  }(t);
  var it = "দি ডেইলি স্টার বাংলা";
  var ct = "https://bangla.thedailystar.net/sites/all/themes/sloth/logo-bn.png";
  var pt = [ "https://bangla.thedailystar.net/todays-news", "https://bangla.thedailystar.net/news/bangladesh" ];
  var lt = function(t) {
    __extends(DailyStarbangla, t);
    function DailyStarbangla() {
      return t.call(this, it, ct, pt) || this;
    }
    DailyStarbangla.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".content-tags"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll(".tags > a"), true).map((function(t) {
          return t.textContent;
        }));
      })).flat(1);
      return t;
    };
    DailyStarbangla.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".block-content > div:first-child .article-section .section-media img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    DailyStarbangla.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".todays-news-table  a, .card-content a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    DailyStarbangla.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".block-content > div:first-child .article-section"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return DailyStarbangla;
  }(t);
  var st = "দৈনিক বাংলা";
  var mt = "https://flashn3ws-scraper.fly.dev/api/v1/dist/dainik_bangla.png";
  var dt = [ "https://www.dainikbangla.com.bd/allnews" ];
  var yt = function(t) {
    __extends(DainikBangla, t);
    function DainikBangla() {
      return t.call(this, st, mt, dt) || this;
    }
    DainikBangla.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".breadcrumb_container a"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    DainikBangla.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".news_item"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("img"), true).map((function(t) {
          return t.src;
        }));
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    DainikBangla.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".all-news-list a:nth-child(2)"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    DainikBangla.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".news_item"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll(".news_body p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return DainikBangla;
  }(t);
  var _t = "দেশে বিদেশে";
  var ft = "https://www.deshebideshe.com/wp-content/uploads/2023/02/news-logo-.png";
  var gt = [ "https://www.deshebideshe.com/", "https://www.deshebideshe.com/category/bangladesh/national/", "https://www.deshebideshe.com/category/bangladesh/dhaka-division/", "https://www.deshebideshe.com/category/bangladesh/chattogram-division/" ];
  var At = function(t) {
    __extends(DesheBideshe, t);
    function DesheBideshe() {
      return t.call(this, _t, ft, gt) || this;
    }
    DesheBideshe.prototype.removeAds = function() {
      t.prototype.removeAds.call(this);
      document.querySelectorAll('a[title="Deshe Bideshe"]').forEach((function(t) {
        t.remove();
      }));
    };
    DesheBideshe.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll("a.post-cat"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    DesheBideshe.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".entry-content img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    DesheBideshe.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll("a.all-over-thumb-link, h2.post-title a, h2.post-title a, h2.post-title a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    DesheBideshe.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".entry-content"), true).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return DesheBideshe;
  }(t);
  var ht = "গ্রামের কাগজ";
  var vt = "https://www.gramerkagoj.com/login/public/storage/about/logo-2023-08-21-64e2f191e8483.jpg";
  var wt = [ "https://gramerkagoj.com/last.php?type=%E0%A6%B8%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%B6%E0%A7%87%E0%A6%B7%20%E0%A6%B8%E0%A6%82%E0%A6%AC%E0%A6%BE%E0%A6%A6" ];
  var St = function(t) {
    __extends(GramerKagoj, t);
    function GramerKagoj() {
      return t.call(this, ht, vt, wt, true) || this;
    }
    GramerKagoj.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".details img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    GramerKagoj.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll("#body_news a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    GramerKagoj.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".details"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return GramerKagoj;
  }(t);
  var qt = "দৈনিক ইত্তেফাক";
  var bt = "https://flashn3ws-scraper.fly.dev/api/v1/dist/daily-ittefaq.jpg";
  var kt = [ "https://www.ittefaq.com.bd/latest-news", "https://www.ittefaq.com.bd/country" ];
  var Ct = function(t) {
    __extends(Ittefaq, t);
    function Ittefaq() {
      return t.call(this, qt, bt, kt) || this;
    }
    Ittefaq.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".topic_list a"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    Ittefaq.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll('.featured_image img, div[itemprop="articleBody"] img, .gallery-content img'), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    Ittefaq.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".tag_title_holder a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    Ittefaq.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll('p[class="alignfull"]'), true).map((function(t) {
        return t.textContent;
      })).join("\n\n");
      return t;
    };
    return Ittefaq;
  }(t);
  var jt = "জাগোনিউজ২৪";
  var xt = "https://cdn.jagonews24.com/media/common/logo.png";
  var Bt = [ "https://www.jagonews24.com/archive", "https://www.jagonews24.com/national" ];
  var Dt = function(t) {
    __extends(Jagonews24, t);
    function Jagonews24() {
      return t.call(this, jt, xt, Bt) || this;
    }
    Jagonews24.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".photo-tags a"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    Jagonews24.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".featured-image img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    Jagonews24.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll("h3 a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    Jagonews24.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".content-details"), true).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        }));
      })).join("\n\n");
      return t;
    };
    return Jagonews24;
  }(t);
  var Lt = "যায়যায়দিন";
  var It = "https://www.jaijaidinbd.com/templates/web-view/images/logo_new.png";
  var Nt = [ "https://www.jaijaidinbd.com/all-news", "https://www.jaijaidinbd.com/wholecountry", "https://www.jaijaidinbd.com/islam-and-religion" ];
  var Pt = function(t) {
    __extends(Jaijaidin, t);
    function Jaijaidin() {
      return t.call(this, Lt, It, Nt) || this;
    }
    Jaijaidin.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".breadcrumb a"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    Jaijaidin.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll("img.detailImg"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    Jaijaidin.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".latest-most-news a, .common-lead-content a, .catsubMoremedianews a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    Jaijaidin.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".dtl_content_section"), true).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        }));
      })).join("\n\n");
      return t;
    };
    return Jaijaidin;
  }(t);
  var Tt = "দৈনিক জনকণ্ঠ";
  var Et = "https://www.dailyjanakantha.com/media/common/janakantha-logo.png";
  var Jt = [ "https://www.dailyjanakantha.com/archives/", "https://www.dailyjanakantha.com/bangladesh/" ];
  var Mt = function(t) {
    __extends(Janakantha, t);
    function Janakantha() {
      return t.call(this, Tt, Et, Jt) || this;
    }
    Janakantha.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".list-inline a"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    Janakantha.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".DDetailsContent img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    Janakantha.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".DCategoryListNews a, .DCatTopNews a, .DCatTopNewsList a, .DCatNewsList3 a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    Janakantha.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll("#contentDetails"), true).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        }));
      })).join("\n\n");
      return t;
    };
    return Janakantha;
  }(t);
  var zt = "যুগান্তর";
  var Ot = "https://flashn3ws-scraper.fly.dev/api/v1/dist/jugantor.png";
  var Rt = [ "https://www.jugantor.com/all-news/", "https://www.jugantor.com/country-news" ];
  var Ft = function(t) {
    __extends(Jugantor, t);
    function Jugantor() {
      return t.call(this, zt, Ot, Rt) || this;
    }
    Jugantor.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".trending a"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    Jugantor.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".dtl-news-img img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    Jugantor.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll("#most-recent-news a, #lead-news a, #news-list a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    Jugantor.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".news-element-text p"), true).map((function(t) {
        return t.textContent;
      })).join("\n\n");
      return t;
    };
    return Jugantor;
  }(t);
  var Gt = "লক্ষ্মীপুর24.কম";
  var Kt = "https://lakshmipur24.news/wp-content/uploads/2023/12/Lakshmipur-24.png";
  var Zt = [ "https://lakshmipur24.news/?s&post_type=post" ];
  var Ut = function(t) {
    __extends(Lakshmiput24, t);
    function Lakshmiput24() {
      return t.call(this, Gt, Kt, Zt, true) || this;
    }
    Lakshmiput24.prototype.getTitle = function() {
      var t = __spreadArray([], document.querySelectorAll("head > title"), true).map((function(t) {
        return t.textContent;
      })).join("");
      return t;
    };
    Lakshmiput24.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".entry-taxonomies a"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    Lakshmiput24.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".entry-feature-box-media img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    Lakshmiput24.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".fn-archive-content h3.item-title a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    Lakshmiput24.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".entry-body"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return Lakshmiput24;
  }(t);
  var Ht = "মানবকণ্ঠ";
  var Qt = "https://manage.manobkantha.com.bd/files/uploads/SA-Logo-Re.png?v=1";
  var Vt = [ "https://www.manobkantha.com.bd/archive", "https://www.manobkantha.com.bd/country?division_id=1", "https://www.manobkantha.com.bd/country?division_id=2", "https://www.manobkantha.com.bd/country?division_id=5", "https://www.manobkantha.com.bd/country?division_id=3", "https://www.manobkantha.com.bd/country?division_id=7", "https://www.manobkantha.com.bd/country?division_id=8", "https://www.manobkantha.com.bd/country?division_id=6", "https://www.manobkantha.com.bd/country?division_id=4" ];
  var Wt = function(t) {
    __extends(Manabkantha, t);
    function Manabkantha() {
      return t.call(this, Ht, Qt, Vt) || this;
    }
    Manabkantha.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".category-title a"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    Manabkantha.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".post-content img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    Manabkantha.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".card-title a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    Manabkantha.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".post-content"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return Manabkantha;
  }(t);
  var Xt = "ময়মনসিংহ প্রতিদিন";
  var Yt = "https://mymensinghpratidin.com/wp-content/uploads/2023/08/MP.png";
  var $t = [ "https://mymensinghpratidin.com/" ];
  var tr = function(t) {
    __extends(MMProtidin, t);
    function MMProtidin() {
      return t.call(this, Xt, Yt, $t) || this;
    }
    MMProtidin.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".td-category a"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    MMProtidin.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll("img.wp-post-image"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    MMProtidin.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll("#home .tab_heading a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    MMProtidin.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".single_contant"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return MMProtidin;
  }(t);
  var rr = "মানবজমিন";
  var er = "https://mzamin.com/assets/images/logo.png";
  var nr = [ "https://mzamin.com/", "https://mzamin.com/category.php?cat=8/" ];
  var ar = function(t) {
    __extends(MZamin, t);
    function MZamin() {
      return t.call(this, rr, er, nr) || this;
    }
    MZamin.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll("img.img-fluid.img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    MZamin.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll("h1 a, h2 a, h3 a, h4 a, h5 a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    MZamin.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll("article > div:not(:first-child) > div:first-child"), true).map((function(t) {
        t.querySelectorAll(".card-body").forEach((function(t) {
          return t.remove();
        }));
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return MZamin;
  }(t);
  var or = "নয়া দিগন্ত";
  var ur = "https://www.dailynayadiganta.com/resources/img/sitesetup/1_2.png";
  var ir = [ "https://www.dailynayadiganta.com/", "https://www.dailynayadiganta.com/country/7" ];
  var cr = function(t) {
    __extends(NayaDiganta, t);
    function NayaDiganta() {
      return t.call(this, or, ur, ir) || this;
    }
    NayaDiganta.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".breadcrumb a"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    NayaDiganta.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".image-holder img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    NayaDiganta.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".archive-news-list a, .column-no-left-padding a, h3 a, h2 a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    NayaDiganta.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".news-content p"), true).map((function(t) {
        return t.textContent;
      })).join("\n\n");
      return t;
    };
    return NayaDiganta;
  }(t);
  var pr = "প্রথম আলো";
  var lr = "https://flashn3ws-scraper.fly.dev/api/v1/dist/prothom-alo.png";
  var sr = [ "https://www.prothomalo.com/collection/latest/", "https://www.prothomalo.com/bangladesh", "https://www.prothomalo.com/opinion" ];
  var mr = function(t) {
    __extends(ProthomAlo, t);
    function ProthomAlo() {
      return t.call(this, pr, lr, sr) || this;
    }
    ProthomAlo.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".tag-list a"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    ProthomAlo.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".story-content .qt-image"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    ProthomAlo.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".wide-story-card > a, .news_with_item > a, .left_image_right_news > a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    ProthomAlo.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".story-content"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        t.querySelectorAll("a, .also-read, .print-tags").forEach((function(t) {
          return t.remove();
        }));
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return ProthomAlo;
  }(t);
  var dr = "প্রথম-ফেনী.কম";
  var yr = "https://prothom-feni.com/wp-content/uploads/2022/04/Logo-prothom-fen-01.png";
  var _r = [ "https://prothom-feni.com/" ];
  var fr = function(t) {
    __extends(ProthomFeni, t);
    function ProthomFeni() {
      return t.call(this, dr, yr, _r, true) || this;
    }
    ProthomFeni.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".post-content img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    ProthomFeni.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll("li .single-tab.fix h4 a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    ProthomFeni.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".post-content"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return ProthomFeni;
  }(t);
  var gr = "দৈনিক পূর্বাঞ্চল";
  var Ar = "https://purbanchal.com/img/ratina_logo_544x180.png";
  var hr = [ "https://purbanchal.com/" ];
  var vr = function(t) {
    __extends(Purbanchal, t);
    function Purbanchal() {
      return t.call(this, gr, Ar, hr, true) || this;
    }
    Purbanchal.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".entry-category a"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    Purbanchal.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".td-post-content img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    Purbanchal.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".entry-title a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    Purbanchal.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".td-post-content"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return Purbanchal;
  }(t);
  var wr = "রাজশাহী নিউজ 24";
  var Sr = "https://rajshahinews24.com/public/templateimage/60ef5cebb8486.jpg";
  var qr = [ "https://rajshahinews24.com/" ];
  var br = function(t) {
    __extends(Rajshahinews24, t);
    function Rajshahinews24() {
      return t.call(this, wr, Sr, qr, true) || this;
    }
    Rajshahinews24.prototype.getSummary = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:description"]'), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    Rajshahinews24.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".single-image img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    Rajshahinews24.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll("#home .news-titletab a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    Rajshahinews24.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".single-page > div > div"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return Rajshahinews24;
  }(t);
  var kr = "সমকাল";
  var Cr = "https://samakal.com/frontend/media/common/logo.png";
  var jr = [ "https://samakal.com/", "https://samakal.com/bangladesh" ];
  var xr = function(t) {
    __extends(Samakal, t);
    function Samakal() {
      return t.call(this, kr, Cr, jr) || this;
    }
    Samakal.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".tagArea li:not(:first-child)"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    Samakal.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".DNewsImg img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    Samakal.prototype.getLink = function() {
      this.maybeSolveCapcha();
      var t = __spreadArray([], document.querySelectorAll(".DLatestNewsList a, .DCatLead a, .Catcards a, .CatListNews a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    Samakal.prototype.getContent = function() {
      this.maybeSolveCapcha();
      var t = __spreadArray([], document.querySelectorAll(".dNewsDesc"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    Samakal.prototype.maybeSolveCapcha = function() {
      console.info("todo solve capcha");
    };
    return Samakal;
  }(t);
  var Br = "সুপ্রভাত বাংলাদেশ";
  var Dr = "https://suprobhat.com/wp-content/uploads/2020/05/Logo.png";
  var Lr = [ "https://suprobhat.com/", "https://www.bd-journal.com/bangladesh" ];
  var Ir = function(t) {
    __extends(SuprovatBD, t);
    function SuprovatBD() {
      return t.call(this, Br, Dr, Lr) || this;
    }
    SuprovatBD.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll(".td-category a"), true).map((function(t) {
        return t.textContent;
      }));
      return t;
    };
    SuprovatBD.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".td-post-content img"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    SuprovatBD.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll(".entry-title.td-module-title a, .td-main-content .item-details a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    SuprovatBD.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".td-post-content"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return SuprovatBD;
  }(t);
  var Nr = "সিলেট এক্সপ্রেস";
  var Pr = "https://sylhetexpress.net/images/logo.jpg";
  var Tr = [ "https://sylhetexpress.net/" ];
  var Er = function(t) {
    __extends(SylhetExpress, t);
    function SylhetExpress() {
      return t.call(this, Nr, Pr, Tr, true) || this;
    }
    SylhetExpress.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll(".content img[class*=wp-image]"), true).map((function(t) {
        return t.src;
      }));
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    SylhetExpress.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll("#LatestNewsList .list-group:first-child a"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    SylhetExpress.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll(".content"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return SylhetExpress;
  }(t);
  var Jr = "ঢাকা পোস্ট";
  var Mr = "https://flashn3ws-scraper.fly.dev/api/v1/dist/dhaka-post.jpeg";
  var zr = [ "https://www.dhakapost.com/latest-news", "https://www.dhakapost.com/country" ];
  var Or = function(t) {
    __extends(DhakaPost, t);
    function DhakaPost() {
      return t.call(this, Jr, Mr, zr) || this;
    }
    DhakaPost.prototype.getTags = function() {
      var t = __spreadArray([], document.querySelectorAll("article"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        var r, e, n;
        return __spreadArray([], (n = (e = (r = t.nextSibling) === null || r === void 0 ? void 0 : r.nextSibling) === null || e === void 0 ? void 0 : e.querySelectorAll("a[class*=bg]")) !== null && n !== void 0 ? n : [], true).map((function(t) {
          return t.textContent;
        }));
      })).flat(1);
      return t;
    };
    DhakaPost.prototype.getImages = function() {
      var t = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(t) {
        return t.content;
      }));
      var r = __spreadArray([], document.querySelectorAll("article"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll("img"), true).map((function(t) {
          return t.src;
        })).filter((function(t) {
          return !t.includes("platform-cdn.sharethis.com") && !t.includes("icon.png");
        }));
      })).flat(1);
      return __spreadArray(__spreadArray([], t, true), r, true);
    };
    DhakaPost.prototype.getLink = function() {
      var t = __spreadArray([], document.querySelectorAll("a.group"), true).map((function(t) {
        return t.href;
      }));
      return t;
    };
    DhakaPost.prototype.getContent = function() {
      var t = __spreadArray([], document.querySelectorAll("article"), true).filter((function(t, r) {
        return r === 0;
      })).map((function(t) {
        return __spreadArray([], t.querySelectorAll(".news-details p"), true).map((function(t) {
          return t.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return t;
    };
    return DhakaPost;
  }(t);
  var Rr = [ new a, new c, new m, new f, new v, new b, new x, new I, new E, new O, new K, new Q, new Y, new et, new ut, new lt, new yt, new At, new St, new Ct, new Dt, new Pt, new Mt, new Ft, new Ut, new Wt, new tr, new ar, new cr, new mr, new fr, new vr, new br, new xr, new Ir, new Er, new Or ];
  var getAllUrls = function() {
    return Rr.map((function(t) {
      return t.urls;
    })).flat(1);
  };
  var getAllUrlsForPaper = function(t) {
    return Rr.filter((function(r) {
      return r.name === t;
    })).map((function(t) {
      return t.urls;
    })).flat(1);
  };
  var getContentUrls = function(t) {
    return __awaiter(void 0, void 0, void 0, (function() {
      var r, e, n;
      return __generator(this, (function(a) {
        switch (a.label) {
         case 0:
          r = Rr.find((function(r) {
            return r.urls.includes(t);
          }));
          if (r == null) {
            throw new Error("newspaper not found");
          }
          return [ 4, r.getNewsLinks() ];

         case 1:
          e = a.sent();
          n = e.map((function(t) {
            return {
              paper: r.name,
              url: t
            };
          }));
          return [ 2, n ];
        }
      }));
    }));
  };
  var getNewsContent = function(t) {
    return __awaiter(void 0, void 0, void 0, (function() {
      var r, e;
      return __generator(this, (function(n) {
        switch (n.label) {
         case 0:
          r = Rr.find((function(r) {
            return r.name === t.paper;
          }));
          if (r == null) {
            throw new Error("newspaper not found");
          }
          return [ 4, r.getNewsContent({
            link: t.url
          }) ];

         case 1:
          e = n.sent();
          return [ 2, e ];
        }
      }));
    }));
  };
  var onMessage = function(t, r, e) {
    if (t.type === "scraper.request.all_urls") {
      var n = getAllUrls();
      e(n);
      return true;
    }
    if (t.type === "scraper.request.all_urls.paper") {
      var a = t.paper;
      var o = getAllUrlsForPaper(a);
      e(o);
      return true;
    }
    if (t.type === "scraper.request.news_links") {
      var u = t.url;
      void getContentUrls(u).then((function(t) {
        e(t);
      }));
      return true;
    }
    if (t.type === "scraper.request.dom_content") {
      var i = t.link;
      void getNewsContent(i).then((function(t) {
        e(t);
      })).catch(null);
      return true;
    }
    return false;
  };
  chrome.runtime.onMessage.addListener(onMessage);
}));
