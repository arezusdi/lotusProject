(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    1e3: function (e, t, n) {
      "use strict";
      n(7294), n(5675), n(4913), n(5893);
    },
    7571: function (e, t, n) {
      "use strict";
      var o = n(468),
        i = n(4349),
        l = n.n(i),
        a = n(7294),
        s = n(6919),
        r = n(5893);
      t.Z = function (e) {
        var t = e.icon,
          n = e.iconSrc,
          i = e.children,
          c = e.handleShowModal,
          d = e.title,
          u = e.extraContentInsideClass,
          v = void 0 === u ? "" : u,
          _ = e.contentStyle,
          h = void 0 === _ ? l().content : _,
          m = e.bottom,
          x = void 0 === m ? l().bottom : m,
          f = e.icon2,
          g = e.icon3,
          w = e.iconSrc2,
          p = e.iconSrc3,
          y = e.handleClickIconSpan,
          j = e.handleClickIconConfirm,
          N = e.headerStyle,
          S = e.span,
          C = e.continueButton,
          b = e.arrow,
          k = e.globalArrow,
          I = e.closeIcon,
          P = e.backFunction,
          M = e.titleStyle,
          H = e.showHeader,
          E = e.extraWrapperStyle,
          W = void 0 === E ? "" : E,
          Z = e.extraContentStyle,
          O = void 0 === Z ? "" : Z,
          T = (0, a.useContext)(s.u),
          F = T.videoUploaded,
          R = T.uploadLevel,
          A = T.setUploadLevel,
          B = T.uploadPageOneInfo,
          V = T.setUploadPageOneInfo,
          L = T.setCheckErrorUpload,
          U = T.themeColor,
          D = T.direction;
        T.isFullscreen;
        var q = (0, a.useRef)(null),
          checkIfClickedOutside = function (e) {
            q.current && !q.current.contains(e.target) && c();
          };
        return (
          (0, a.useEffect)(function () {
            return (
              document.addEventListener("mousedown", checkIfClickedOutside),
              function () {
                document.removeEventListener(
                  "mousedown",
                  checkIfClickedOutside
                );
              }
            );
          }, []),
          (0, r.jsx)("div", {
            className: ""
              .concat(l().wrapper, " modalOpaqueBackground ")
              .concat(W),
            children: (0, r.jsx)("div", {
              className: ""
                .concat(l().container, " ")
                .concat(x, " ", "bottomModalChart", " ")
                .concat(O, " "),
              children: (0, r.jsxs)("div", {
                className: ""
                  .concat(h, "  ")
                  .concat("white" != U ? "dark" : "light", " "),
                ref: q,
                children: [
                  (void 0 === H || H) &&
                    (0, r.jsxs)("div", {
                      className:
                        "flex flex-row justify-between items-center box-border "
                          .concat(l().header, "  ")
                          .concat("white" != U && "dark", " ")
                          .concat(N),
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "flex flex-row justify-start items-center box-border ",
                          children: [
                            !0 == b &&
                              !0 == F &&
                              (0, r.jsx)(o.Z, {
                                alt: "arrow",
                                src: "/imgs/videoUpload/arrow.svg",
                                width: 24,
                                height: 24,
                                containerclassName:
                                  "flex flex-row justify-center items-center h-auto ".concat(
                                    "ltr" == D ? "mr-2" : "ml-2"
                                  ),
                                onClick: function () {
                                  2 == R && A(1), 1 == R && (c(), V({}), L(!1));
                                },
                              }),
                            !0 == (void 0 !== k && k) &&
                              (0, r.jsx)(o.Z, {
                                alt: "arrow",
                                src: "/imgs/videoUpload/arrow.svg",
                                width: 24,
                                height: 24,
                                containerclassName:
                                  "flex flex-row justify-center items-center h-auto "
                                    .concat("ltr" == D ? "mr-2" : "ml-2", " ")
                                    .concat("white" != U && "makeWhite"),
                                onClick: function () {
                                  P();
                                },
                              }),
                            (0, r.jsx)("p", {
                              className: M,
                              children: d,
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "flex flex-row-reverse justify-end items-center",
                          children: [
                            void 0 !== I &&
                              I &&
                              (0, r.jsx)(o.Z, {
                                alt: "icon",
                                src: n,
                                width: 13,
                                height: 13,
                                containerclassName:
                                  "flex flex-row justify-center items-center h-auto ".concat(
                                    "white" != U && "makeWhite"
                                  ),
                                onClick: c,
                              }),
                            void 0 !== t &&
                              t &&
                              (0, r.jsx)(o.Z, {
                                alt: "icon",
                                src: n,
                                width: 24,
                                height: 24,
                                containerclassName:
                                  "flex flex-row justify-center items-center h-auto  ".concat(
                                    "white" != U && "makeWhite"
                                  ),
                                onClick: c,
                              }),
                            f &&
                              (0, r.jsx)(o.Z, {
                                alt: "icon",
                                src: w,
                                width: 24,
                                height: 24,
                                containerclassName:
                                  "flex flex-row justify-center items-center h-auto "
                                    .concat("ltr" == D ? "mr-2" : "ml-2", " ")
                                    .concat(!0 == S && "rotate-180", " ")
                                    .concat("white" != U && "makeWhite"),
                                onClick: y,
                              }),
                            g &&
                              (0, r.jsx)(o.Z, {
                                alt: "icon",
                                src: p,
                                width: 24,
                                height: 24,
                                containerclassName:
                                  "flex flex-row justify-center items-center h-auto "
                                    .concat("ltr" == D ? "mr-2" : "ml-2", " ")
                                    .concat("white" != U && "makeWhite"),
                                onClick: j,
                              }),
                            1 == R &&
                              F &&
                              C &&
                              (0, r.jsx)("p", {
                                className: ""
                                  .concat(l().continueButton, " ")
                                  .concat("ltr" == D && l().ltr),
                                onClick: function () {
                                  (null == B ? void 0 : B.name.trim().length) ==
                                    0 ||
                                  (null == B
                                    ? void 0
                                    : B.content.trim().length) == 0 ||
                                  (null == B ? void 0 : B.category_id.length) ==
                                    0
                                    ? L(!0)
                                    : (L(!1), A(2));
                                },
                                children: "ادامه",
                              }),
                          ],
                        }),
                      ],
                    }),
                  (0, r.jsx)("div", {
                    className: "".concat(l().contentInside, " ").concat(v),
                    children: i,
                  }),
                ],
              }),
            }),
          })
        );
      };
    },
    3641: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return Home;
          },
        });
      var o = n(116),
        i = n(6149),
        l = n(6718),
        a = n.n(l),
        s = n(2361),
        r = n(468);
      n(1e3);
      var c = n(8323),
        d = n(6919),
        u = n(8289),
        v = n(4007),
        _ = n(7294),
        h = n(2984),
        m = n.n(h),
        x = n(1664),
        f = n.n(x),
        g = n(5122),
        w = n(501),
        p = n.n(w),
        y = n(5893);
      function Triangle() {
        var e = (0, _.useContext)(d.u).direction;
        return (0, y.jsxs)("div", {
          className: "flex flex-row justify-start items-start "
            .concat(p().container, " ")
            .concat("rtl" == e && p().rtl, " "),
          children: [
            (0, y.jsx)("div", {
              className: ""
                .concat(p().box1, " triangle ")
                .concat("rtl" == e && "rtl ".concat(p().rtl)),
            }),
            (0, y.jsx)("div", {
              className: ""
                .concat(p().box2, " triangle $")
                .concat("rtl" == e && "rtl ".concat(p().rtl)),
            }),
          ],
        });
      }
      function Hero(e) {
        var t,
          n,
          i = e.icon,
          l =
            void 0 === i
              ? (0, y.jsx)(v.Z.enjoyIcon, {
                  width: "100%",
                })
              : i,
          a = e.extraIconStyle,
          s = e.extraTextPart,
          h = (e.extraContentPadding, e.className),
          x = e.image,
          w = void 0 === x ? "/imgs/hero/image.png" : x,
          p = e.children,
          j = e.text,
          N = (e.desc2, e.desc3),
          S = void 0 === N ? "" : N,
          C = (e.shadowLeft, e.extraTitleStyle),
          b = (e.extraImageStyle, e.showIcon),
          k = (e.left, e.right, e.androidLink, e.showTriangle),
          I = void 0 !== k && k,
          P = e.shadow,
          M = void 0 !== P && P,
          H = (0, _.useContext)(d.u),
          E = H.themeMode,
          W = H.direction,
          Z = (0, _.useState)(!0),
          O = (Z[0], Z[1]),
          T = (0, _.useState)([]),
          F = T[0],
          R = T[1];
        (0, _.useEffect)(function () {
          g.Z.getVersion()
            .then(function (e) {
              console.log("res", e.data.response), R((0, o.Z)(e.data.response));
            })
            .catch(function (e) {});
        }, []),
          (0, _.useEffect)(function () {
            O(
              "Firefox" !=
                (function () {
                  var e = navigator.userAgent;
                  // const isIE = /*@cc_on!@*/false || !!document.documentMode;
                  if (
                    (window.opr && opr.addons) ||
                    window.opera ||
                    navigator.userAgent.indexOf(" OPR/") >= 0
                  )
                    return "Opera";
                  if (e.match(/edg/i)) return "chromium-based-edge";
                  if (-1 != navigator.userAgent.indexOf("Chrome"))
                    return "Chrome";
                  if (-1 != navigator.userAgent.indexOf("Safari"))
                    return "Safari";
                  if (
                    navigator.userAgent.toLowerCase().indexOf("safari/") > -1 &&
                    0 > navigator.userAgent.toLowerCase().indexOf("chrome")
                  )
                    return "Safari";
                  if (-1 != navigator.userAgent.indexOf("Firefox"))
                    return "Firefox";
                  if (
                    -1 != navigator.userAgent.indexOf("MSIE") ||
                    !0 == !!document.documentMode
                  )
                    return "IE";
                  else return "Unknown";
                })()
            );
          }, []);
        var A = (0, _.useRef)(null),
          B = (0, u.Z)(A),
          V = (0, _.useState)(!1),
          L = V[0],
          U = V[1];
        return (
          console.log("vvvvv", B),
          (0, _.useEffect)(
            function () {
              B && U(B);
            },
            [B]
          ),
          console.log(
            "versions==",
            F,
            null == F
              ? void 0
              : null ===
                  (t = F.filter(function (e) {
                    return "android" == e.name;
                  })) || void 0 === t
              ? void 0
              : null === (n = t[0]) || void 0 === n
              ? void 0
              : n.link
          ),
          (0, y.jsx)("div", {
            className: "wholeContainer "
              .concat(I && "absoluteBack ", " pattern ")
              .concat("rtl" == W && "patternRtl", " "),
            ref: A,
            children: (0, y.jsx)("div", {
              className: "wholeContainer  pattern2 ".concat(
                "rtl" == W && "pattern2Rtl",
                " "
              ),
              children: (0, y.jsxs)("div", {
                className: "".concat(m().container, " container  ").concat(h),
                children: [
                  w &&
                    (0, y.jsxs)("div", {
                      className: ""
                        .concat(m().imagePart, " relative ")
                        .concat(M && m().extraImagePart),
                      children: [
                        M &&
                          (0, y.jsx)(y.Fragment, {
                            children: (0, y.jsx)("div", {
                              className: m().newShadow,
                              children: (0, y.jsx)("div", {
                                className: m().newShadowSmall,
                              }),
                            }),
                          }),
                        (0, y.jsx)(r.Z, {
                          src: w,
                          width: 270,
                          height: M ? 587 : 560,
                          className: ""
                            .concat(m().showImage, " mainImagePadding ")
                            .concat(M && m().showImageExtra, " ")
                            .concat("rtl" == W && m().rtl),
                        }),
                        I && (0, y.jsx)(Triangle, {}),
                      ],
                    }),
                  (0, y.jsxs)("div", {
                    className: ""
                      .concat(L ? m().textPartShow : m().textPart, " ")
                      .concat(s),
                    children: [
                      (void 0 === b || b) &&
                        (0, y.jsx)("div", {
                          className: "".concat(m().enjoy, " ").concat(a),
                          children: l,
                        }),
                      (0, y.jsxs)("div", {
                        className: "".concat(m().info),
                        children: [
                          (0, y.jsx)("h1", {
                            className: "".concat(m().title, " ").concat(C),
                            children: p,
                          }),
                          (0, y.jsx)("p", {
                            className: ""
                              .concat(m().description, " ")
                              .concat("dark" == E && "lightTextWhite"),
                            children: void 0 === j ? "" : j,
                          }),
                          S &&
                            (0, y.jsx)("p", {
                              className: ""
                                .concat(m().description, " ")
                                .concat("dark" == E && "lightTextWhite"),
                              children: S,
                            }),
                        ],
                      }),
                      (0, y.jsxs)("div", {
                        className: "flex flex-row items-center w-full h-auto  "
                          .concat(m().extraContentPadding, " ")
                          .concat("rtl" == W && m().rtl),
                        children: [
                          (0, y.jsx)(c.Z, {
                            src: "/imgs/hero/newGooglePlay.svg",
                            width: 220,
                            height: 56,
                            containerclassName: "".concat(
                              m().button,
                              "\n              "
                            ),
                          }),
                          (0, y.jsx)(f(), {
                            href: "/",
                            children: (0, y.jsx)(c.Z, {
                              src: "/imgs/hero/newApple.svg",
                              width: 220,
                              height: 56,
                              containerclassName: "".concat(m().button, " "),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      var j = n(5675),
        N = n.n(j),
        S = n(4082),
        C = n.n(S);
      function SingleFeature(e) {
        var t = e.item;
        return (
          (0, _.useContext)(d.u).themeMode,
          (0, y.jsxs)("div", {
            className: C().container,
            children: [
              (0, y.jsx)(N(), {
                src: null == t ? void 0 : t.src,
                width: 60,
                height: 60,
              }),
              (0, y.jsx)("p", {
                className: "".concat(C().title),
                children: null == t ? void 0 : t.title,
              }),
              (0, y.jsx)("p", {
                className: "".concat(C().description),
                children: null == t ? void 0 : t.text,
              }),
            ],
          })
        );
      }
      var b = n(1654),
        k = n.n(b);
      function Features(e) {
        var t,
          n,
          o,
          i = e.content,
          l = (0, _.useState)(
            null == i
              ? void 0
              : null === (t = i.features) || void 0 === t
              ? void 0
              : t.array
          ),
          a = l[0];
        return (
          l[1],
          (0, y.jsxs)("div", {
            className: "container ".concat(k().container),
            children: [
              (0, y.jsx)("p", {
                className: "".concat(k().title),
                children:
                  null == i
                    ? void 0
                    : null === (n = i.features) || void 0 === n
                    ? void 0
                    : n.title,
              }),
              (0, y.jsx)("p", {
                className: "".concat(k().description),
                children:
                  null == i
                    ? void 0
                    : null === (o = i.features) || void 0 === o
                    ? void 0
                    : o.text,
              }),
              (0, y.jsx)("div", {
                className:
                  "flex flex-row justify-between items-start w-full h-auto flex-wrap ".concat(
                    k().boxContainer
                  ),
                children:
                  null == a
                    ? void 0
                    : a.map(function (e, t) {
                        return (0, y.jsx)(
                          SingleFeature,
                          {
                            item: e,
                          },
                          t
                        );
                      }),
              }),
            ],
          })
        );
      }
      var I = n(8869);
      n(964);
      var P = n(1163);
      n(8619);
      var M = n(3192),
        H = n.n(M);
      function OverView2() {
        var e,
          t,
          n,
          o,
          i,
          l,
          a = (0, _.useContext)(d.u),
          s = a.content,
          c = a.direction,
          u = (0, _.useState)(
            null == s
              ? void 0
              : null === (e = s.overView) || void 0 === e
              ? void 0
              : null === (t = e.array) || void 0 === t
              ? void 0
              : t[0]
          ),
          v = u[0],
          h = u[1];
        return (
          console.log("contentis==", null == s ? void 0 : s.overView),
          console.log("active==", v),
          (0, _.useEffect)(
            function () {
              var e, t;
              h(
                null == s
                  ? void 0
                  : null === (e = s.overView) || void 0 === e
                  ? void 0
                  : null === (t = e.array) || void 0 === t
                  ? void 0
                  : t[0]
              );
            },
            [s]
          ),
          (0, y.jsxs)("div", {
            className: "".concat(H().wholeContainer, " relative"),
            children: [
              (0, y.jsx)("div", {
                className: ""
                  .concat(H().backPattern, " ")
                  .concat("ltr" == c && H().ltr),
              }),
              (0, y.jsxs)("div", {
                className: "container ".concat(H().container),
                children: [
                  (0, y.jsx)("p", {
                    className: "".concat(H().title),
                    children:
                      null == s
                        ? void 0
                        : null === (n = s.overView) || void 0 === n
                        ? void 0
                        : n.title,
                  }),
                  (0, y.jsx)("p", {
                    className: "".concat(H().description),
                    children:
                      null == s
                        ? void 0
                        : null === (o = s.overView) || void 0 === o
                        ? void 0
                        : o.text,
                  }),
                  (0, y.jsx)("div", {
                    className: "".concat(H().menu),
                    children:
                      null == s
                        ? void 0
                        : null === (i = s.overView) || void 0 === i
                        ? void 0
                        : null === (l = i.array) || void 0 === l
                        ? void 0
                        : l.map(function (e, t) {
                            var n;
                            return (0, y.jsxs)(
                              "div",
                              {
                                className: "".concat(H().singleMenu),
                                children: [
                                  (null == e ? void 0 : e.id) != 1
                                    ? (0, y.jsx)("div", {
                                        className: "".concat(
                                          H().singleMenuImage
                                        ),
                                        children: (0, y.jsx)(r.Z, {
                                          width: 270,
                                          height: 585,
                                          src: null == e ? void 0 : e.src,
                                        }),
                                      })
                                    : (0, y.jsx)("div", {
                                        className: "".concat(
                                          H().singleMenuImage
                                        ),
                                        children: (0, y.jsxs)("div", {
                                          className:
                                            "flex flex-col justify-center items-center w-full",
                                          children: [
                                            (0, y.jsx)("video", {
                                              src: "/video/sample.mp4",
                                              controls: !0,
                                              className: H().video,
                                            }),
                                            (0, y.jsx)("p", {
                                              className: "".concat(
                                                H().description
                                              ),
                                              children:
                                                null == e ? void 0 : e.text,
                                            }),
                                          ],
                                        }),
                                      }),
                                  (0, y.jsxs)("div", {
                                    className: ""
                                      .concat(H().singleMenuContent, " ")
                                      .concat("rtl" == c && H().rtl, " "),
                                    children: [
                                      (0, y.jsx)("p", {
                                        className: "".concat(H().title),
                                        children: null == e ? void 0 : e.title,
                                      }),
                                      (0, y.jsx)("p", {
                                        className: "".concat(H().description),
                                        children: null == e ? void 0 : e.text2,
                                      }),
                                      (0, y.jsx)("p", {
                                        className: "".concat(H().description),
                                        children: null == e ? void 0 : e.text3,
                                      }),
                                      null == e
                                        ? void 0
                                        : null === (n = e.items) || void 0 === n
                                        ? void 0
                                        : n.map(function (e, t) {
                                            return (0, y.jsxs)(
                                              "div",
                                              {
                                                className: "".concat(
                                                  H().single
                                                ),
                                                children: [
                                                  (0, y.jsx)(r.Z, {
                                                    src: "/imgs/overview/arrow-right.svg",
                                                    width: 24,
                                                    height: 24,
                                                    containerclassName:
                                                      "rtl" == c &&
                                                      "rotate-180",
                                                  }),
                                                  (0, y.jsx)("p", {
                                                    children:
                                                      null == e
                                                        ? void 0
                                                        : e.text,
                                                  }),
                                                ],
                                              },
                                              t
                                            );
                                          }),
                                    ],
                                  }),
                                ],
                              },
                              t
                            );
                          }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      var E = n(1518),
        W = n(7571),
        Z = n(1090);
      function Home() {
        var e,
          t,
          n,
          l,
          r,
          c,
          u,
          v,
          h,
          m,
          x,
          f,
          w,
          p,
          j,
          N,
          S,
          C,
          b,
          k,
          M,
          H,
          O,
          T,
          F,
          R,
          A,
          B,
          V,
          L,
          U,
          D,
          q,
          J,
          Y,
          G,
          z,
          Q,
          K = (0, _.useContext)(d.u),
          X = (K.themeMode, K.content),
          $ = (K.setScrollValue, K.direction),
          ee = (K.setLang, K.setContent, K.setDirection, K.openContactModal),
          et = K.setOpenContactModal;
        console.log("content", X);
        var en = (0, P.useRouter)(),
          eo =
            null == en
              ? void 0
              : null === (e = en.asPath) || void 0 === e
              ? void 0
              : null === (t = e.split("?")) || void 0 === t
              ? void 0
              : t[1],
          ei = (0, I.Z)({
            name: "New",
            description: " Welcome to New",
          });
        (0, _.useEffect)(function () {}, [eo]),
          (0, _.useEffect)(
            function () {
              console.log("routercc", null == en ? void 0 : en.asPath),
                ee &&
                  (window.history.pushState(null, null, window.location.href),
                  (window.onpopstate = function () {
                    "/" == en.asPath && ee && et(!1);
                  }));
            },
            [ee, en]
          );
        var el = (0, _.useState)([]),
          ea = el[0],
          es = el[1];
        return (
          (0, _.useEffect)(function () {
            g.Z.getVersion()
              .then(function (e) {
                console.log("res", e.data.response),
                  es((0, o.Z)(e.data.response)),
                  e.data.response,
                  (0, i.Z)("versions");
              })
              .catch(function (e) {});
          }, []),
          console.log(
            "versions2222222222==",
            ea,
            null == ea
              ? void 0
              : null ===
                  (n = ea.filter(function (e) {
                    return "android" == e.name;
                  })) || void 0 === n
              ? void 0
              : null === (l = n[0]) || void 0 === l
              ? void 0
              : l.link
          ),
          (0, y.jsxs)(s.Z, {
            seoObject: ei.seo,
            children: [
              (0, y.jsxs)(Hero, {
                text:
                  null == X
                    ? void 0
                    : null === (r = X.hero) || void 0 === r
                    ? void 0
                    : r.text,
                desc3:
                  null == X
                    ? void 0
                    : null === (c = X.hero) || void 0 === c
                    ? void 0
                    : c.text2,
                desc2:
                  null == X
                    ? void 0
                    : null === (u = X.hero) || void 0 === u
                    ? void 0
                    : null === (v = u.title) || void 0 === v
                    ? void 0
                    : null === (h = v.row1) || void 0 === h
                    ? void 0
                    : h.text3,
                image: "/imgs/hero/trade2.png",
                extraContentPadding: "extraContentPadding",
                shadowLeft: !1,
                showIcon: !1,
                left: "ltr" == $,
                right: "ltr" != $,
                showTriangle: !0,
                children: [
                  (0, y.jsxs)("p", {
                    className: "".concat(a().headerHead),
                    children: [
                      (0, y.jsx)("span", {
                        children:
                          null == X
                            ? void 0
                            : null === (m = X.hero) || void 0 === m
                            ? void 0
                            : null === (x = m.title) || void 0 === x
                            ? void 0
                            : null === (f = x.row1) || void 0 === f
                            ? void 0
                            : null === (w = f.text1) || void 0 === w
                            ? void 0
                            : w.one,
                      }),
                      (0, y.jsx)("span", {
                        className: "bold",
                        children:
                          null == X
                            ? void 0
                            : null === (p = X.hero) || void 0 === p
                            ? void 0
                            : null === (j = p.title) || void 0 === j
                            ? void 0
                            : null === (N = j.row1) || void 0 === N
                            ? void 0
                            : null === (S = N.text1) || void 0 === S
                            ? void 0
                            : S.two,
                      }),
                      (0, y.jsx)("span", {
                        children:
                          null == X
                            ? void 0
                            : null === (C = X.hero) || void 0 === C
                            ? void 0
                            : null === (b = C.title) || void 0 === b
                            ? void 0
                            : null === (k = b.row1) || void 0 === k
                            ? void 0
                            : null === (M = k.text1) || void 0 === M
                            ? void 0
                            : M.three,
                      }),
                      (0, y.jsx)("span", {
                        className: "bold",
                        children:
                          null == X
                            ? void 0
                            : null === (H = X.hero) || void 0 === H
                            ? void 0
                            : null === (O = H.title) || void 0 === O
                            ? void 0
                            : null === (T = O.row1) || void 0 === T
                            ? void 0
                            : null === (F = T.text1) || void 0 === F
                            ? void 0
                            : F.four,
                      }),
                      (0, y.jsx)("span", {
                        children:
                          null == X
                            ? void 0
                            : null === (R = X.hero) || void 0 === R
                            ? void 0
                            : null === (A = R.title) || void 0 === A
                            ? void 0
                            : null === (B = A.row1) || void 0 === B
                            ? void 0
                            : null === (V = B.text1) || void 0 === V
                            ? void 0
                            : V.five,
                      }),
                    ],
                  }),
                  (null == X
                    ? void 0
                    : null === (L = X.hero) || void 0 === L
                    ? void 0
                    : null === (U = L.title) || void 0 === U
                    ? void 0
                    : null === (D = U.row1) || void 0 === D
                    ? void 0
                    : D.text2) &&
                    (0, y.jsx)(y.Fragment, {
                      children: (0, y.jsx)("p", {
                        className: "text-center headerTitle ltr",
                        children: (0, y.jsx)("div", {
                          className: "relative ".concat(
                            a().waveContainer,
                            " flex flex-row justify-center items-center"
                          ),
                          children: (0, y.jsx)(E.Wave, {
                            text: ""
                              .concat(
                                null == X
                                  ? void 0
                                  : null === (q = X.hero) || void 0 === q
                                  ? void 0
                                  : null === (J = q.title) || void 0 === J
                                  ? void 0
                                  : null === (Y = J.row1) || void 0 === Y
                                  ? void 0
                                  : Y.text2,
                                " "
                              )
                              .concat(
                                null == X
                                  ? void 0
                                  : null === (G = X.hero) || void 0 === G
                                  ? void 0
                                  : null === (z = G.title) || void 0 === z
                                  ? void 0
                                  : null === (Q = z.row1) || void 0 === Q
                                  ? void 0
                                  : Q.animate
                              ),
                            effect: "verticalFadeIn",
                            effectDirection: "up",
                            iterations: "infinite",
                            speed: 15,
                            delay: 6,
                          }),
                        }),
                      }),
                    }),
                ],
              }),
              (0, y.jsx)(Features, {
                content: X,
              }),
              (0, y.jsx)(OverView2, {
                content: X,
              }),
              (0, y.jsx)("div", {
                style: {
                  marginBottom: "0px",
                },
              }),
              ee &&
                (0, y.jsx)(W.Z, {
                  handleShowModal: function () {
                    et(!1);
                  },
                  showHeader: !1,
                  extraWrapperStyle: a().BottomModalExtraStyle,
                  children: (0, y.jsx)(Z.Z, {
                    showBackButton: !1,
                  }),
                }),
            ],
          })
        );
      }
    },
    5557: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(3641);
        },
      ]);
    },
    501: function (e) {
      e.exports = {
        container: "styles_container__Yi_0W",
        rtl: "styles_rtl__b1Z4m",
        box1: "styles_box1__IjyWs",
        box2: "styles_box2__nU5Ev",
      };
    },
    4082: function (e) {
      e.exports = {
        container: "styles_container__4V3eM",
        containerShow: "styles_containerShow__DOnbm",
        title: "styles_title__ZoCz9",
        description: "styles_description__fsYMM",
      };
    },
    1654: function (e) {
      e.exports = {
        container: "styles_container__mAx46",
        title: "styles_title__HN8_1",
        description: "styles_description__xYZN9",
        boxContainer: "styles_boxContainer__Y2JsO",
      };
    },
    2984: function (e) {
      e.exports = {
        container: "styles_container__BCbfI",
        imagePart: "styles_imagePart__AgGzn",
        showImageExtra: "styles_showImageExtra__y4y4H",
        rtl: "styles_rtl__9vmYJ",
        image: "styles_image__RcwKN",
        showImage: "styles_showImage__hm9oN",
        imageLtr: "styles_imageLtr__3RZyz",
        imageRtl: "styles_imageRtl__Zgkns",
        extraContentPadding: "styles_extraContentPadding__bVp2F",
        disabled: "styles_disabled__wbBvM",
        thirdButton: "styles_thirdButton__WO_jc",
        extraImageStyleShow: "styles_extraImageStyleShow__Tmtuf",
        filterWhite: "styles_filterWhite__tRVrn",
        filterDark: "styles_filterDark__rTs4_",
        filterWhiteRight: "styles_filterWhiteRight__TeObt",
        filterDarkRight: "styles_filterDarkRight__qdh5h",
        dropShadow: "styles_dropShadow__0aUn5",
        dropShadowWhite: "styles_dropShadowWhite__g8fTq",
        dropShadowLighter: "styles_dropShadowLighter__nSklk",
        dropShadowLighterWhite: "styles_dropShadowLighterWhite__dVrXd",
        newShadow: "styles_newShadow__0sg06",
        newShadowSmall: "styles_newShadowSmall__VIvAq",
        enjoy: "styles_enjoy__7tv1K",
        textPart: "styles_textPart__7Mv_l",
        textPartShow: "styles_textPartShow__BTPT_",
        info: "styles_info__tJRM5",
        title: "styles_title__IjRp6",
        description: "styles_description__sh941",
        button: "styles_button__zNxjq",
        bold: "styles_bold__OQz6F",
        extraImagePart: "styles_extraImagePart__ElQ2E",
      };
    },
    3192: function (e) {
      e.exports = {
        container: "styles_container__YSkRN",
        backPattern: "styles_backPattern__9v7UJ",
        ltr: "styles_ltr___vrtx",
        wholeContainer: "styles_wholeContainer__5aO8A",
        title: "styles_title__c_EFg",
        description: "styles_description___Of9v",
        singleMenu: "styles_singleMenu__e17N4",
        singleMenuImage: "styles_singleMenuImage__tYsF2",
        singleMenuContent: "styles_singleMenuContent__dACnR",
        menu: "styles_menu__F5EDJ",
        rtl: "styles_rtl__b_ndP",
        single: "styles_single__uEOBI",
      };
    },
    4349: function (e) {
      e.exports = {
        wrapper: "styles_wrapper__O3_SV",
        container: "styles_container__VcN4o",
        bottom: "styles_bottom__G93UR",
        content: "styles_content__pBY6M",
        header: "styles_header__AVvfp",
        contentInside: "styles_contentInside__twaMd",
        continueButton: "styles_continueButton__jAt4Q",
        ltr: "styles_ltr__ebVoU",
      };
    },
    6718: function (e) {
      e.exports = {
        secure: "Home_secure___kQKJ",
        headerHead: "Home_headerHead__sUynT",
        waveContainer: "Home_waveContainer__4l_dW",
        description: "Home_description__W1Hx1",
        rtl: "Home_rtl__GAo_h",
        download: "Home_download__P_vMh",
        simple: "Home_simple__aCQB1",
        extraTextPart: "Home_extraTextPart__G3nH6",
        extraTitleStyle: "Home_extraTitleStyle__h3Zsn",
        backDrop: "Home_backDrop__tTWDG",
        backDropWhite: "Home_backDropWhite__o0ZA6",
        backFaq: "Home_backFaq__Fi74o",
        backFaqWhite: "Home_backFaqWhite__4MAp5",
        backTerms: "Home_backTerms__wP_my",
        backTermsWhite: "Home_backTermsWhite__JhCI1",
        extraImageStyle: "Home_extraImageStyle__93s5d",
        extraImageStyleShow: "Home_extraImageStyleShow__TbTES",
        extraImageStyleRlt: "Home_extraImageStyleRlt__GFMWg",
        BottomModalExtraStyle: "Home_BottomModalExtraStyle__rEZmq",
        extraContentPadding: "Home_extraContentPadding__8FRMU",
        title: "Home_title__CJM6I",
      };
    },
  },
  function (e) {
    e.O(0, [885, 579, 772, 778, 163, 90, 774, 888, 179], function () {
      return e((e.s = 5557));
    }),
      (_N_E = e.O());
  },
]);
