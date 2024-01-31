(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d, b) {
      d.__proto__ = b;
    } || function(d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };
  var AbastractNewspaper = function() {
    function AbastractNewspaper(_paper, _paperImage, _urls, _isLocal) {
      if (_isLocal === void 0) {
        _isLocal = false;
      }
      this._paper = _paper;
      this._paperImage = _paperImage;
      this._urls = _urls;
      this._isLocal = _isLocal;
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
      document.querySelectorAll('.googleNewsLink, script, [class*="ads"], #inline-related-post, noscript, .adv-img, .advertisement').forEach((function(element) {
        element.remove();
      }));
    };
    AbastractNewspaper.prototype.getTitle = function() {
      var titles = __spreadArray([], document.querySelectorAll('meta[property="og:title"]'), true).map((function(element) {
        return element.content;
      }));
      return titles === null || titles === void 0 ? void 0 : titles[0];
    };
    AbastractNewspaper.prototype.getSummary = function() {
      var summaries = __spreadArray([], document.querySelectorAll('meta[property="og:description"]'), true).map((function(element) {
        return element.content;
      }));
      return summaries === null || summaries === void 0 ? void 0 : summaries[0];
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
      var links = [];
      try {
        links = this.getLink();
      } catch (e) {
        console.info("error getting url", e);
      }
      return links;
    };
    AbastractNewspaper.prototype.getNewsContent = function(props) {
      var _a, _b, _c, _d, _e, _f, _g;
      var details = {};
      try {
        this.removeAds();
        var title = (_a = this.getTitle()) !== null && _a !== void 0 ? _a : "";
        var summary = (_b = this.getSummary()) !== null && _b !== void 0 ? _b : "";
        var tags = (_d = (_c = this.getTags()) === null || _c === void 0 ? void 0 : _c.filter((function(item) {
          return !!item;
        }))) !== null && _d !== void 0 ? _d : [];
        var images = (_f = (_e = this.getImages()) === null || _e === void 0 ? void 0 : _e.filter((function(item) {
          return !!item;
        }))) !== null && _f !== void 0 ? _f : [];
        var content = (_g = this.getContent()) !== null && _g !== void 0 ? _g : "";
        details = {
          title: title,
          summary: summary,
          content: content,
          link: props.link,
          tags: tags,
          images: images,
          paper: this._paper,
          paperImage: this._paperImage,
          isLocal: this._isLocal
        };
      } catch (e) {
        console.info("-> error getting content", e);
      }
      return details;
    };
    return AbastractNewspaper;
  }();
  var paperName$A = "আলোকিত বাংলাদেশ";
  var paperImage$A = "https://www.alokitobangladesh.com/templates/desktop-v1/images/logo.png";
  var urls$A = [ "https://www.alokitobangladesh.com/all-news", "https://www.alokitobangladesh.com/country-news" ];
  var AlokitoBangladesh = function(_super) {
    __extends(AlokitoBangladesh, _super);
    function AlokitoBangladesh() {
      return _super.call(this, paperName$A, paperImage$A, urls$A) || this;
    }
    AlokitoBangladesh.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll("#tags_list a"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    AlokitoBangladesh.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".dtl_img_block img"), true).map((function(item) {
        return item.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    AlokitoBangladesh.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".allnews a, #latest_contents_block a"), true).map((function(item) {
        return item.href;
      }));
      return result;
    };
    AlokitoBangladesh.prototype.getContent = function() {
      return __spreadArray([], document.querySelectorAll(".dtl_content_block"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        var paragraphElements = element.querySelectorAll("p");
        var result = __spreadArray([], paragraphElements, true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
        return result;
      })).join("\n\n");
    };
    return AlokitoBangladesh;
  }(AbastractNewspaper);
  var paperName$z = "আমাদের সময়";
  var paperImage$z = "https://flashn3ws-scraper.fly.dev/api/v1/dist/amader-shomoy-logo.jpg";
  var urls$z = [ "https://dainikamadershomoy.com/latest/all", "https://dainikamadershomoy.com/category/sarades" ];
  var AmatherSomoy = function(_super) {
    __extends(AmatherSomoy, _super);
    function AmatherSomoy() {
      return _super.call(this, paperName$z, paperImage$z, urls$z) || this;
    }
    AmatherSomoy.prototype.getTitle = function() {
      var title = __spreadArray([], document.querySelectorAll("head > title"), true).map((function(element) {
        return element.textContent;
      }));
      return title === null || title === void 0 ? void 0 : title[0];
    };
    AmatherSomoy.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".btm-tags"), true).map((function(element) {
        return __spreadArray([], element.querySelectorAll("a"), true).map((function(item) {
          return item.textContent;
        }));
      })).flat(1);
      return result;
    };
    AmatherSomoy.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".sub-content"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("img"), true).map((function(item) {
          return item.src;
        }));
      })).flat(1);
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    AmatherSomoy.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".random-news a, h1 a, h2 a, h3 a, h4 a, h5 a, h6 a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    AmatherSomoy.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".sub-content"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll(".content p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return AmatherSomoy;
  }(AbastractNewspaper);
  var paperName$y = "দৈনিক আজাদী";
  var paperImage$y = "https://dainikazadi.net/wp-content/uploads/logo/azadi_logo.png";
  var urls$y = [ "https://dainikazadi.net/category/%e0%a6%b8%e0%a6%b0%e0%a7%8d%e0%a6%ac%e0%a6%b6%e0%a7%87%e0%a6%b7/" ];
  var Azadi = function(_super) {
    __extends(Azadi, _super);
    function Azadi() {
      return _super.call(this, paperName$y, paperImage$y, urls$y) || this;
    }
    Azadi.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".td-post-content img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    Azadi.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".td-module-title a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    Azadi.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".td-post-content"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return Azadi;
  }(AbastractNewspaper);
  var paperName$x = "বাংলানিউজ২৪";
  var paperImage$x = "https://www.banglanews24.com/public/desktop/img/bn24_logo_3.jpg";
  var urls$x = [ "https://www.banglanews24.com/", "https://www.banglanews24.com/category/%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A7%80%E0%A7%9F/1" ];
  var Banglanews24 = function(_super) {
    __extends(Banglanews24, _super);
    function Banglanews24() {
      return _super.call(this, paperName$x, paperImage$x, urls$x) || this;
    }
    Banglanews24.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".related_tag a"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    Banglanews24.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll([ ".news-article img" ]), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    Banglanews24.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".latest-readers-tab #latest a, .category-area a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    Banglanews24.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll("article"), true).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return Banglanews24;
  }(AbastractNewspaper);
  var paperName$w = "বণিক বার্তা";
  var paperImage$w = "https://bonikbarta.net/uploads/logo_image/bonikbarta_logo.png";
  var urls$w = [ "https://bonikbarta.net", "https://bonikbarta.net/home/desherbarta/10/0" ];
  var BanikBarta = function(_super) {
    __extends(BanikBarta, _super);
    function BanikBarta() {
      return _super.call(this, paperName$w, paperImage$w, urls$w) || this;
    }
    BanikBarta.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".post-body"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll(".btn-tag"), true).map((function(item) {
          return item.textContent;
        }));
      })).flat(1);
      return result;
    };
    BanikBarta.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".news_main_contents"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("img"), true).map((function(item) {
          return item.src;
        }));
      })).flat(1);
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    BanikBarta.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".recent-news .media-heading a, .news_content h4 a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    BanikBarta.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".news_main_contents"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return BanikBarta;
  }(AbastractNewspaper);
  var paperName$v = "বিবিসি ২৪ নিউজ";
  var paperImage$v = "https://www.bbc24news.com/cloud/archives/fileman/bbc-logo.jpg";
  var urls$v = [ "https://www.bbc24news.com/", "https://www.bbc24news.com/section/%e0%a6%9c%e0%a6%be%e0%a6%a4%e0%a7%80%e0%a7%9f" ];
  var BBC24News = function(_super) {
    __extends(BBC24News, _super);
    function BBC24News() {
      return _super.call(this, paperName$v, paperImage$v, urls$v) || this;
    }
    BBC24News.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll('#content > .noprint > a[rel="category tag"]'), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    BBC24News.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll([ "#single img" ]), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    BBC24News.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".entry-content a, .category .catbox a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    BBC24News.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll("#single"), true).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return BBC24News;
  }(AbastractNewspaper);
  var paperName$u = "BBC News বাংলা";
  var paperImage$u = "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/BBC_Bangla_logo.svg/440px-BBC_Bangla_logo.svg.png";
  var urls$u = [ "https://www.bbc.com/bengali", "https://www.bbc.com/bengali/topics/c907347rezkt" ];
  var BBCBangla = function(_super) {
    __extends(BBCBangla, _super);
    function BBCBangla() {
      return _super.call(this, paperName$u, paperImage$u, urls$u) || this;
    }
    BBCBangla.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll('[aria-labelledby="related-topics"] a'), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    BBCBangla.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll("main img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    BBCBangla.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll('section[aria-labelledby="প্রধান-খবর"] a, div[data-testid="curation-grid-normal"] a'), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    BBCBangla.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll("main"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll('p[dir="ltr"]'), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return BBCBangla;
  }(AbastractNewspaper);
  var paperName$t = "বাংলাদেশ প্রতিদিন";
  var paperImage$t = "https://www.bd-pratidin.com/assets/newDesktop/img/logo.png?v=2";
  var urls$t = [ "https://www.bd-pratidin.com", "https://www.bd-pratidin.com/country" ];
  var BDProtidin = function(_super) {
    __extends(BDProtidin, _super);
    function BDProtidin() {
      return _super.call(this, paperName$t, paperImage$t, urls$t) || this;
    }
    BDProtidin.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".tagArea a"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    BDProtidin.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".news-img img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    BDProtidin.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".latest-news-top a, .cat-lead a, .cat-2nd-lead a, a.list-item"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    BDProtidin.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll("#bpsepnil p"), true).map((function(element) {
        return element.textContent;
      })).join("\n\n");
      return result;
    };
    return BDProtidin;
  }(AbastractNewspaper);
  var paperName$s = "বাংলাদেশ জার্নাল";
  var paperImage$s = "https://www.bd-journal.com/templates/web-v1/images/logo.png?v=1.7";
  var urls$s = [ "https://www.bd-journal.com/all-news", "https://www.bd-journal.com/bangladesh" ];
  var BDJournal = function(_super) {
    __extends(BDJournal, _super);
    function BDJournal() {
      return _super.call(this, paperName$s, paperImage$s, urls$s) || this;
    }
    BDJournal.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll("#tags_list a"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    BDJournal.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".dtl_img_section img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    BDJournal.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".all_news_content_block a, .lead_top a, .lead_bottom a, .cat_summary_display_one a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    BDJournal.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll("#newsDtl"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return BDJournal;
  }(AbastractNewspaper);
  var paperName$r = "ভোরের কাগজ";
  var paperImage$r = "https://bhorerkagoj.com/uploads/settings/logo-black.png";
  var urls$r = [ "https://www.bhorerkagoj.com/", "https://www.bhorerkagoj.com/category/bangladesh/" ];
  var Bhorerkagoj = function(_super) {
    __extends(Bhorerkagoj, _super);
    function Bhorerkagoj() {
      return _super.call(this, paperName$r, paperImage$r, urls$r) || this;
    }
    Bhorerkagoj.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".desktopDetailTag"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("a"), true).map((function(item) {
          return item.textContent;
        }));
      })).flat(1);
      return result;
    };
    Bhorerkagoj.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".desktopDetailPhoto"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("img"), true).map((function(item) {
          return item.src;
        }));
      })).flat(1);
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    Bhorerkagoj.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".desktopSectionListMedia, .cat-normal-news a"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("a"), true).map((function(item) {
          return item.href;
        }));
      })).flat(1);
      return result;
    };
    Bhorerkagoj.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".desktopDetailBody"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return Bhorerkagoj;
  }(AbastractNewspaper);
  var paperName$q = "চাঁদপুর টাইমস";
  var paperImage$q = "https://chandpurtimes.com/wp-content/uploads/2019/09/Logo-Chandpur-Times-300x75.png";
  var urls$q = [ "https://chandpurtimes.com/" ];
  var ChadpurTimes = function(_super) {
    __extends(ChadpurTimes, _super);
    function ChadpurTimes() {
      return _super.call(this, paperName$q, paperImage$q, urls$q, true) || this;
    }
    ChadpurTimes.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll("#crumbs a:not(:first-child)"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    ChadpurTimes.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".single-post-thumb img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    ChadpurTimes.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".posts-list .widget-container a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    ChadpurTimes.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".post-inner .entry"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return ChadpurTimes;
  }(AbastractNewspaper);
  var paperName$p = "চকরিয়া নিউজ";
  var paperImage$p = "https://chakarianews.com/wp-content/uploads/2021/05/CN2.jpg";
  var urls$p = [ "https://chakarianews.com/" ];
  var ChakariaNews = function(_super) {
    __extends(ChakariaNews, _super);
    function ChakariaNews() {
      return _super.call(this, paperName$p, paperImage$p, urls$p, true) || this;
    }
    ChakariaNews.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".breadcrumbs .item-cat a"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    ChakariaNews.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".entryimage-container img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    ChakariaNews.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".lead-latest a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    ChakariaNews.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".entry-content"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return ChakariaNews;
  }(AbastractNewspaper);
  var paperName$o = "কক্সবাজার নিউজ";
  var paperImage$o = "https://www.coxsbazarnews.com/wp-content/uploads/2021/02/logo.png";
  var urls$o = [ "https://www.coxsbazarnews.com" ];
  var CoxbazerNews = function(_super) {
    __extends(CoxbazerNews, _super);
    function CoxbazerNews() {
      return _super.call(this, paperName$o, paperImage$o, urls$o, true) || this;
    }
    CoxbazerNews.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".entryimage-container img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    CoxbazerNews.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".list-latest a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    CoxbazerNews.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".entry-content"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return CoxbazerNews;
  }(AbastractNewspaper);
  var paperName$n = "দৈনিক ইনকিলাব";
  var paperImage$n = "https://dailyinqilab.com/mediaStorage/common/logo1671282573.png";
  var urls$n = [ "https://dailyinqilab.com/archive" ];
  var DailyInqilab = function(_super) {
    __extends(DailyInqilab, _super);
    function DailyInqilab() {
      return _super.call(this, paperName$n, paperImage$n, urls$n) || this;
    }
    DailyInqilab.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".breadcrumb a"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    DailyInqilab.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".new-details img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    DailyInqilab.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll("a.headline"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    DailyInqilab.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".new-details"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return DailyInqilab;
  }(AbastractNewspaper);
  var paperName$m = "দৈনিক সংগ্রাম";
  var paperImage$m = "https://www.dailysangram.com/logos/logo.jpg";
  var urls$m = [ "https://dailysangram.com/", "https://dailysangram.com/section/bangladesh/" ];
  var DainikSangram = function(_super) {
    __extends(DainikSangram, _super);
    function DainikSangram() {
      return _super.call(this, paperName$m, paperImage$m, urls$m) || this;
    }
    DainikSangram.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".breadcrumb li:not(:first-child) a"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    DainikSangram.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".mediaContainer img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    DainikSangram.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".lastUpdate a, .homeContent h1 a, .homeContent h2 a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    DainikSangram.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".postBody p"), true).map((function(element) {
        return element.textContent;
      })).join("\n\n");
      return result;
    };
    return DainikSangram;
  }(AbastractNewspaper);
  var paperName$l = "দি ডেইলি স্টার বাংলা";
  var paperImage$l = "https://bangla.thedailystar.net/sites/all/themes/sloth/logo-bn.png";
  var urls$l = [ "https://bangla.thedailystar.net/todays-news", "https://bangla.thedailystar.net/news/bangladesh" ];
  var DailyStarbangla = function(_super) {
    __extends(DailyStarbangla, _super);
    function DailyStarbangla() {
      return _super.call(this, paperName$l, paperImage$l, urls$l) || this;
    }
    DailyStarbangla.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".content-tags"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll(".tags > a"), true).map((function(item) {
          return item.textContent;
        }));
      })).flat(1);
      return result;
    };
    DailyStarbangla.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".block-content > div:first-child .article-section .section-media img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    DailyStarbangla.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".todays-news-table  a, .card-content a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    DailyStarbangla.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".block-content > div:first-child .article-section"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return DailyStarbangla;
  }(AbastractNewspaper);
  var paperName$k = "দৈনিক বাংলা";
  var paperImage$k = "https://flashn3ws-scraper.fly.dev/api/v1/dist/dainik_bangla.png";
  var urls$k = [ "https://www.dainikbangla.com.bd/allnews" ];
  var DainikBangla = function(_super) {
    __extends(DainikBangla, _super);
    function DainikBangla() {
      return _super.call(this, paperName$k, paperImage$k, urls$k) || this;
    }
    DainikBangla.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".breadcrumb_container a"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    DainikBangla.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".news_item"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("img"), true).map((function(item) {
          return item.src;
        }));
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    DainikBangla.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".all-news-list a:nth-child(2)"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    DainikBangla.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".news_item"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll(".news_body p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return DainikBangla;
  }(AbastractNewspaper);
  var paperName$j = "দেশে বিদেশে";
  var paperImage$j = "https://www.deshebideshe.com/wp-content/uploads/2023/02/news-logo-.png";
  var urls$j = [ "https://www.deshebideshe.com/", "https://www.deshebideshe.com/category/bangladesh/national/", "https://www.deshebideshe.com/category/bangladesh/dhaka-division/", "https://www.deshebideshe.com/category/bangladesh/chattogram-division/" ];
  var DesheBideshe = function(_super) {
    __extends(DesheBideshe, _super);
    function DesheBideshe() {
      return _super.call(this, paperName$j, paperImage$j, urls$j) || this;
    }
    DesheBideshe.prototype.removeAds = function() {
      _super.prototype.removeAds.call(this);
      document.querySelectorAll('a[title="Deshe Bideshe"]').forEach((function(element) {
        element.remove();
      }));
    };
    DesheBideshe.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll("a.post-cat"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    DesheBideshe.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".entry-content img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    DesheBideshe.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll("a.all-over-thumb-link, h2.post-title a, h2.post-title a, h2.post-title a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    DesheBideshe.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".entry-content"), true).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return DesheBideshe;
  }(AbastractNewspaper);
  var paperName$i = "গ্রামের কাগজ";
  var paperImage$i = "https://www.gramerkagoj.com/login/public/storage/about/logo-2023-08-21-64e2f191e8483.jpg";
  var urls$i = [ "https://gramerkagoj.com/last.php?type=%E0%A6%B8%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%B6%E0%A7%87%E0%A6%B7%20%E0%A6%B8%E0%A6%82%E0%A6%AC%E0%A6%BE%E0%A6%A6" ];
  var GramerKagoj = function(_super) {
    __extends(GramerKagoj, _super);
    function GramerKagoj() {
      return _super.call(this, paperName$i, paperImage$i, urls$i, true) || this;
    }
    GramerKagoj.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".details img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    GramerKagoj.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll("#body_news a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    GramerKagoj.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".details"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return GramerKagoj;
  }(AbastractNewspaper);
  var paperName$h = "দৈনিক ইত্তেফাক";
  var paperImage$h = "https://flashn3ws-scraper.fly.dev/api/v1/dist/daily-ittefaq.jpg";
  var urls$h = [ "https://www.ittefaq.com.bd/latest-news", "https://www.ittefaq.com.bd/country" ];
  var Ittefaq = function(_super) {
    __extends(Ittefaq, _super);
    function Ittefaq() {
      return _super.call(this, paperName$h, paperImage$h, urls$h) || this;
    }
    Ittefaq.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".topic_list a"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    Ittefaq.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll('.featured_image img, div[itemprop="articleBody"] img, .gallery-content img'), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    Ittefaq.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".tag_title_holder a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    Ittefaq.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll('p[class="alignfull"]'), true).map((function(element) {
        return element.textContent;
      })).join("\n\n");
      return result;
    };
    return Ittefaq;
  }(AbastractNewspaper);
  var paperName$g = "জাগোনিউজ২৪";
  var paperImage$g = "https://cdn.jagonews24.com/media/common/logo.png";
  var urls$g = [ "https://www.jagonews24.com/archive", "https://www.jagonews24.com/national" ];
  var Jagonews24 = function(_super) {
    __extends(Jagonews24, _super);
    function Jagonews24() {
      return _super.call(this, paperName$g, paperImage$g, urls$g) || this;
    }
    Jagonews24.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".photo-tags a"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    Jagonews24.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".featured-image img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    Jagonews24.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll("h3 a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    Jagonews24.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".content-details"), true).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        }));
      })).join("\n\n");
      return result;
    };
    return Jagonews24;
  }(AbastractNewspaper);
  var paperName$f = "যায়যায়দিন";
  var paperImage$f = "https://www.jaijaidinbd.com/templates/web-view/images/logo_new.png";
  var urls$f = [ "https://www.jaijaidinbd.com/all-news", "https://www.jaijaidinbd.com/wholecountry" ];
  var Jaijaidin = function(_super) {
    __extends(Jaijaidin, _super);
    function Jaijaidin() {
      return _super.call(this, paperName$f, paperImage$f, urls$f) || this;
    }
    Jaijaidin.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".breadcrumb a"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    Jaijaidin.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll("img.detailImg"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    Jaijaidin.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".latest-most-news a, .common-lead-content a, .catsubMoremedianews a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    Jaijaidin.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".dtl_content_section"), true).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        }));
      })).join("\n\n");
      return result;
    };
    return Jaijaidin;
  }(AbastractNewspaper);
  var paperName$e = "দৈনিক জনকণ্ঠ";
  var paperImage$e = "https://www.dailyjanakantha.com/media/common/janakantha-logo.png";
  var urls$e = [ "https://www.dailyjanakantha.com/archives/", "https://www.dailyjanakantha.com/bangladesh/" ];
  var Janakantha = function(_super) {
    __extends(Janakantha, _super);
    function Janakantha() {
      return _super.call(this, paperName$e, paperImage$e, urls$e) || this;
    }
    Janakantha.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".list-inline a"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    Janakantha.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".DDetailsContent img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    Janakantha.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".DCategoryListNews a, .DCatTopNews a, .DCatTopNewsList a, .DCatNewsList3 a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    Janakantha.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll("#contentDetails"), true).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        }));
      })).join("\n\n");
      return result;
    };
    return Janakantha;
  }(AbastractNewspaper);
  var paperName$d = "যুগান্তর";
  var paperImage$d = "https://flashn3ws-scraper.fly.dev/api/v1/dist/jugantor.png";
  var urls$d = [ "https://www.jugantor.com/all-news/", "https://www.jugantor.com/country-news" ];
  var Jugantor = function(_super) {
    __extends(Jugantor, _super);
    function Jugantor() {
      return _super.call(this, paperName$d, paperImage$d, urls$d) || this;
    }
    Jugantor.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".trending a"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    Jugantor.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".dtl-news-img img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    Jugantor.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll("#most-recent-news a, #lead-news a, #news-list a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    Jugantor.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".news-element-text p"), true).map((function(element) {
        return element.textContent;
      })).join("\n\n");
      return result;
    };
    return Jugantor;
  }(AbastractNewspaper);
  var paperName$c = "লক্ষ্মীপুর24.কম";
  var paperImage$c = "https://lakshmipur24.news/wp-content/uploads/2023/12/Lakshmipur-24.png";
  var urls$c = [ "https://lakshmipur24.news/?s&post_type=post" ];
  var Lakshmiput24 = function(_super) {
    __extends(Lakshmiput24, _super);
    function Lakshmiput24() {
      return _super.call(this, paperName$c, paperImage$c, urls$c, true) || this;
    }
    Lakshmiput24.prototype.getTitle = function() {
      var title = __spreadArray([], document.querySelectorAll("head > title"), true).map((function(element) {
        return element.textContent;
      })).join("");
      return title;
    };
    Lakshmiput24.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".entry-taxonomies a"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    Lakshmiput24.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".entry-feature-box-media img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    Lakshmiput24.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".fn-archive-content h3.item-title a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    Lakshmiput24.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".entry-body"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return Lakshmiput24;
  }(AbastractNewspaper);
  var paperName$b = "মানবকণ্ঠ";
  var paperImage$b = "https://manage.manobkantha.com.bd/files/uploads/SA-Logo-Re.png?v=1";
  var urls$b = [ "https://www.manobkantha.com.bd/archive", "https://www.manobkantha.com.bd/country?division_id=1", "https://www.manobkantha.com.bd/country?division_id=2", "https://www.manobkantha.com.bd/country?division_id=5", "https://www.manobkantha.com.bd/country?division_id=3", "https://www.manobkantha.com.bd/country?division_id=7", "https://www.manobkantha.com.bd/country?division_id=8", "https://www.manobkantha.com.bd/country?division_id=6", "https://www.manobkantha.com.bd/country?division_id=4" ];
  var Manabkantha = function(_super) {
    __extends(Manabkantha, _super);
    function Manabkantha() {
      return _super.call(this, paperName$b, paperImage$b, urls$b) || this;
    }
    Manabkantha.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".category-title a"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    Manabkantha.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".post-content img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    Manabkantha.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".card-title a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    Manabkantha.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".post-content"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return Manabkantha;
  }(AbastractNewspaper);
  var paperName$a = "ময়মনসিংহ প্রতিদিন";
  var paperImage$a = "https://mymensinghpratidin.com/wp-content/uploads/2023/08/MP.png";
  var urls$a = [ "https://mymensinghpratidin.com/" ];
  var MMProtidin = function(_super) {
    __extends(MMProtidin, _super);
    function MMProtidin() {
      return _super.call(this, paperName$a, paperImage$a, urls$a) || this;
    }
    MMProtidin.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".td-category a"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    MMProtidin.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll("img.wp-post-image"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    MMProtidin.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll("#home .tab_heading a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    MMProtidin.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".single_contant"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return MMProtidin;
  }(AbastractNewspaper);
  var paperName$9 = "মানবজমিন";
  var paperImage$9 = "https://mzamin.com/assets/images/logo.png";
  var urls$9 = [ "https://mzamin.com/", "https://mzamin.com/category.php?cat=8/" ];
  var MZamin = function(_super) {
    __extends(MZamin, _super);
    function MZamin() {
      return _super.call(this, paperName$9, paperImage$9, urls$9) || this;
    }
    MZamin.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll("img.img-fluid.img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    MZamin.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll("h1 a, h2 a, h3 a, h4 a, h5 a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    MZamin.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll("article > div:not(:first-child) > div:first-child"), true).map((function(element) {
        element.querySelectorAll(".card-body").forEach((function(item) {
          return item.remove();
        }));
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return MZamin;
  }(AbastractNewspaper);
  var paperName$8 = "নয়া দিগন্ত";
  var paperImage$8 = "https://www.dailynayadiganta.com/resources/img/sitesetup/1_2.png";
  var urls$8 = [ "https://www.dailynayadiganta.com/", "https://www.dailynayadiganta.com/country/7" ];
  var NayaDiganta = function(_super) {
    __extends(NayaDiganta, _super);
    function NayaDiganta() {
      return _super.call(this, paperName$8, paperImage$8, urls$8) || this;
    }
    NayaDiganta.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".breadcrumb a"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    NayaDiganta.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".image-holder img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    NayaDiganta.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".archive-news-list a, .column-no-left-padding a, h3 a, h2 a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    NayaDiganta.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".news-content p"), true).map((function(element) {
        return element.textContent;
      })).join("\n\n");
      return result;
    };
    return NayaDiganta;
  }(AbastractNewspaper);
  var paperName$7 = "প্রথম আলো";
  var paperImage$7 = "https://flashn3ws-scraper.fly.dev/api/v1/dist/prothom-alo.png";
  var urls$7 = [ "https://www.prothomalo.com/collection/latest/", "https://www.prothomalo.com/bangladesh", "https://www.prothomalo.com/opinion" ];
  var ProthomAlo = function(_super) {
    __extends(ProthomAlo, _super);
    function ProthomAlo() {
      return _super.call(this, paperName$7, paperImage$7, urls$7) || this;
    }
    ProthomAlo.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".tag-list a"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    ProthomAlo.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".story-content .qt-image"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    ProthomAlo.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".wide-story-card > a, .news_with_item > a, .left_image_right_news > a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    ProthomAlo.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".story-content"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        element.querySelectorAll("a, .also-read, .print-tags").forEach((function(item) {
          return item.remove();
        }));
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return ProthomAlo;
  }(AbastractNewspaper);
  var paperName$6 = "প্রথম-ফেনী.কম";
  var paperImage$6 = "https://prothom-feni.com/wp-content/uploads/2022/04/Logo-prothom-fen-01.png";
  var urls$6 = [ "https://prothom-feni.com/" ];
  var ProthomFeni = function(_super) {
    __extends(ProthomFeni, _super);
    function ProthomFeni() {
      return _super.call(this, paperName$6, paperImage$6, urls$6, true) || this;
    }
    ProthomFeni.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".post-content img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    ProthomFeni.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll("li .single-tab.fix h4 a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    ProthomFeni.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".post-content"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return ProthomFeni;
  }(AbastractNewspaper);
  var paperName$5 = "দৈনিক পূর্বাঞ্চল";
  var paperImage$5 = "https://purbanchal.com/img/ratina_logo_544x180.png";
  var urls$5 = [ "https://purbanchal.com/" ];
  var Purbanchal = function(_super) {
    __extends(Purbanchal, _super);
    function Purbanchal() {
      return _super.call(this, paperName$5, paperImage$5, urls$5, true) || this;
    }
    Purbanchal.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".entry-category a"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    Purbanchal.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".td-post-content img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    Purbanchal.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".entry-title a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    Purbanchal.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".td-post-content"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return Purbanchal;
  }(AbastractNewspaper);
  var paperName$4 = "রাজশাহী নিউজ 24";
  var paperImage$4 = "https://rajshahinews24.com/public/templateimage/60ef5cebb8486.jpg";
  var urls$4 = [ "https://rajshahinews24.com/" ];
  var Rajshahinews24 = function(_super) {
    __extends(Rajshahinews24, _super);
    function Rajshahinews24() {
      return _super.call(this, paperName$4, paperImage$4, urls$4, true) || this;
    }
    Rajshahinews24.prototype.getSummary = function() {
      var summaries = __spreadArray([], document.querySelectorAll('meta[property="og:description"]'), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return summaries;
    };
    Rajshahinews24.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".single-image img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    Rajshahinews24.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll("#home .news-titletab a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    Rajshahinews24.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".single-page > div > div"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return Rajshahinews24;
  }(AbastractNewspaper);
  var paperName$3 = "সমকাল";
  var paperImage$3 = "https://samakal.com/frontend/media/common/logo.png";
  var urls$3 = [ "https://samakal.com/", "https://samakal.com/bangladesh" ];
  var Samakal = function(_super) {
    __extends(Samakal, _super);
    function Samakal() {
      return _super.call(this, paperName$3, paperImage$3, urls$3) || this;
    }
    Samakal.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".tagArea li:not(:first-child)"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    Samakal.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".DNewsImg img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    Samakal.prototype.getLink = function() {
      this.maybeSolveCapcha();
      var result = __spreadArray([], document.querySelectorAll(".DLatestNewsList a, .DCatLead a, .Catcards a, .CatListNews a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    Samakal.prototype.getContent = function() {
      this.maybeSolveCapcha();
      var result = __spreadArray([], document.querySelectorAll(".dNewsDesc"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    Samakal.prototype.maybeSolveCapcha = function() {
      console.info("todo solve capcha");
    };
    return Samakal;
  }(AbastractNewspaper);
  var paperName$2 = "সুপ্রভাত বাংলাদেশ";
  var paperImage$2 = "https://suprobhat.com/wp-content/uploads/2020/05/Logo.png";
  var urls$2 = [ "https://suprobhat.com/", "https://www.bd-journal.com/bangladesh" ];
  var SuprovatBD = function(_super) {
    __extends(SuprovatBD, _super);
    function SuprovatBD() {
      return _super.call(this, paperName$2, paperImage$2, urls$2) || this;
    }
    SuprovatBD.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll(".td-category a"), true).map((function(element) {
        return element.textContent;
      }));
      return result;
    };
    SuprovatBD.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".td-post-content img"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    SuprovatBD.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll(".entry-title.td-module-title a, .td-main-content .item-details a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    SuprovatBD.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".td-post-content"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return SuprovatBD;
  }(AbastractNewspaper);
  var paperName$1 = "সিলেট এক্সপ্রেস";
  var paperImage$1 = "https://sylhetexpress.net/images/logo.jpg";
  var urls$1 = [ "https://sylhetexpress.net/" ];
  var SylhetExpress = function(_super) {
    __extends(SylhetExpress, _super);
    function SylhetExpress() {
      return _super.call(this, paperName$1, paperImage$1, urls$1, true) || this;
    }
    SylhetExpress.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll(".content img[class*=wp-image]"), true).map((function(element) {
        return element.src;
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    SylhetExpress.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll("#LatestNewsList .list-group:first-child a"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    SylhetExpress.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll(".content"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return SylhetExpress;
  }(AbastractNewspaper);
  var paperName = "ঢাকা পোস্ট";
  var paperImage = "https://flashn3ws-scraper.fly.dev/api/v1/dist/dhaka-post.jpeg";
  var urls = [ "https://www.dhakapost.com/latest-news", "https://www.dhakapost.com/country" ];
  var DhakaPost = function(_super) {
    __extends(DhakaPost, _super);
    function DhakaPost() {
      return _super.call(this, paperName, paperImage, urls) || this;
    }
    DhakaPost.prototype.getTags = function() {
      var result = __spreadArray([], document.querySelectorAll("article"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        var _a, _b, _c;
        return __spreadArray([], (_c = (_b = (_a = element.nextSibling) === null || _a === void 0 ? void 0 : _a.nextSibling) === null || _b === void 0 ? void 0 : _b.querySelectorAll("a[class*=bg]")) !== null && _c !== void 0 ? _c : [], true).map((function(element) {
          return element.textContent;
        }));
      })).flat(1);
      return result;
    };
    DhakaPost.prototype.getImages = function() {
      var mainImage = __spreadArray([], document.querySelectorAll('meta[property="og:image"]'), true).map((function(element) {
        return element.content;
      }));
      var otherImages = __spreadArray([], document.querySelectorAll("article"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll("img"), true).map((function(element) {
          return element.src;
        })).filter((function(element) {
          return !element.includes("platform-cdn.sharethis.com") && !element.includes("icon.png");
        }));
      }));
      return __spreadArray(__spreadArray([], mainImage, true), otherImages, true);
    };
    DhakaPost.prototype.getLink = function() {
      var result = __spreadArray([], document.querySelectorAll("a.group"), true).map((function(element) {
        return element.href;
      }));
      return result;
    };
    DhakaPost.prototype.getContent = function() {
      var result = __spreadArray([], document.querySelectorAll("article"), true).filter((function(element, index) {
        return index === 0;
      })).map((function(element) {
        return __spreadArray([], element.querySelectorAll(".news-details p"), true).map((function(item) {
          return item.textContent;
        })).join("\n\n");
      })).join("\n\n");
      return result;
    };
    return DhakaPost;
  }(AbastractNewspaper);
  var newspapers = [ new AlokitoBangladesh, new AmatherSomoy, new Azadi, new Banglanews24, new BanikBarta, new BBC24News, new BBCBangla, new BDProtidin, new BDJournal, new Bhorerkagoj, new ChadpurTimes, new ChakariaNews, new CoxbazerNews, new DailyInqilab, new DainikSangram, new DailyStarbangla, new DainikBangla, new DesheBideshe, new GramerKagoj, new Ittefaq, new Jagonews24, new Jaijaidin, new Janakantha, new Jugantor, new Lakshmiput24, new Manabkantha, new MMProtidin, new MZamin, new NayaDiganta, new ProthomAlo, new ProthomFeni, new Purbanchal, new Rajshahinews24, new Samakal, new SuprovatBD, new SylhetExpress, new DhakaPost ];
  var getAllUrls = function() {
    return newspapers.map((function(newspaper) {
      return newspaper.urls;
    })).flat(1);
  };
  var getAllUrlsForPaper = function(paper) {
    return newspapers.filter((function(newspaper) {
      return newspaper.name === paper;
    })).map((function(newspaper) {
      return newspaper.urls;
    })).flat(1);
  };
  var getContentUrls = function(url) {
    var newspaper = newspapers.find((function(newspaper) {
      return newspaper.urls.includes(url);
    }));
    if (newspaper == null) {
      throw new Error("newspaper not found");
    }
    var links = newspaper.getNewsLinks();
    var retval = links.map((function(link) {
      return {
        paper: newspaper.name,
        url: link
      };
    }));
    return retval;
  };
  var getNewsContent = function(link) {
    var newspaper = newspapers.find((function(newspaper) {
      return newspaper.name === link.paper;
    }));
    if (newspaper == null) {
      throw new Error("newspaper not found");
    }
    var content = newspaper.getNewsContent({
      link: link.url
    });
    return content;
  };
  var onMessage = function(message, sender, sendResponse) {
    message.type;
    switch (message.type) {
     case "scraper.request.all_urls":
      var urls = getAllUrls();
      sendResponse(urls);
      break;

     case "scraper.request.all_urls.paper":
      var paper = message.paper;
      var urlsForPaper = getAllUrlsForPaper(paper);
      sendResponse(urlsForPaper);
      break;

     case "scraper.request.news_links":
      var url = message.url;
      var links = getContentUrls(url);
      sendResponse(links);
      break;

     case "scraper.request.dom_content":
      var link = message.link;
      var content = getNewsContent(link);
      sendResponse(content);
      break;

     default:
      console.info("unknown message: ", message);
      break;
    }
  };
  chrome.runtime.onMessage.addListener(onMessage);
}));
