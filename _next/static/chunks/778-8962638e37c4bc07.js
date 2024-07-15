(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [778],
  {
    832: function (e, t, o) {
      "use strict";
      var i = o(8619),
        n = o(5121);
      o(1955);
      var a = {
        baseURL: "https://api.new-marketanalysis.com/",
        udata: (0, i.Z)("get", "newToken"),
        language: (0, i.Z)("get", "tradeLang"),
        axiosHandle: function () {
          return n.Z.create({
            baseURL: "".concat(a.baseURL, "api/v1"),
            headers: a.udata
              ? {
                  Authorization: "Bearer " + a.udata,
                  "GATEWAY-ID": "30",
                  Accept: "application/json",
                  mode: "no-cors",
                  "Access-Control-Allow-Origin": "*",
                  withCredentials: !1,
                  cache: "default",
                  language: "".concat(null == a ? void 0 : a.language),
                }
              : {
                  "GATEWAY-ID": "30",
                  Accept: "application/json",
                  mode: "no-cors",
                  "Access-Control-Allow-Origin": "*",
                  withCredentials: !1,
                  cache: "default",
                  language: "".concat(null == a ? void 0 : a.language),
                },
          });
        },
      };
      t.Z = a;
    },
    5122: function (e, t, o) {
      "use strict";
      var i = o(832);
      t.Z = {
        getVersion: function (e) {
          return i.Z.axiosHandle().get("v0/get-version", e);
        },
        productList: function (e) {
          return i.Z.axiosHandle().get("/user/product/list", e);
        },
        products: function (e) {
          return i.Z.axiosHandle().get("/product/list", e);
        },
        userPackageList: function (e) {
          return i.Z.axiosHandle().get("/user/package/list", e);
        },
        userLogin: function (e) {
          return i.Z.axiosHandle().post("/user/login", e);
        },
        userSendCode: function (e) {
          return i.Z.axiosHandle().post("/user/send-code", e);
        },
        signup: function (e) {
          return i.Z.axiosHandle().post("/user/sign-up", e);
        },
        userConfirmCode: function (e) {
          return i.Z.axiosHandle().post("/user/confirm-code", e);
        },
        userSendForgetCode: function (e) {
          return i.Z.axiosHandle().post("/user/forgot-password/send-code", e);
        },
        userForgetPassword: function (e) {
          return i.Z.axiosHandle().post("/user/forgot-password", e);
        },
        userShowProfile: function () {
          return i.Z.axiosHandle().get("/user/profile");
        },
        payment: function (e) {
          return i.Z.axiosHandle().post("/user/order/create", e);
        },
        payOrder: function (e) {
          return i.Z.axiosHandle().post("/user/pay-order/", e);
        },
        countryList: function () {
          return i.Z.axiosHandle().get("/admin/country-list");
        },
        changePassword: function (e) {
          return i.Z.axiosHandle().put("/user/edit-password", e);
        },
        orderItemList: function (e) {
          return i.Z.axiosHandle().get("/user/order-item/list", e);
        },
        orderList: function (e) {
          return i.Z.axiosHandle().get("/user/order/list", e);
        },
        deleteAccount: function (e) {
          return i.Z.axiosHandle().post("/user/delete-account", e);
        },
        contactUs: function (e) {
          return i.Z.axiosHandle().post("/contact-us/insert", e);
        },
        messageTypes: function (e) {
          return i.Z.axiosHandle().get("/messageType/list", e);
        },
        editProfile: function (e) {
          return i.Z.axiosHandle().put("/user/update", e);
        },
        analytics: function (e) {
          return i.Z.axiosHandle().get("/user/active/order-item/list", e);
        },
        emptyPackage: function (e) {
          return i.Z.axiosHandle().get("/user/plan/list", e);
        },
        checkLogin: function (e) {
          return i.Z.axiosHandle().get("/check-login", e);
        },
        getDiscount: function (e) {
          return i.Z.axiosHandle().get("/user/order/apply-discount", e);
        },
        logOutFunction: function (e) {
          return i.Z.axiosHandle().get("/logout", e);
        },
      };
    },
    468: function (e, t, o) {
      "use strict";
      var i = o(9499),
        n = o(4730),
        a = o(7294),
        s = o(5675),
        r = o.n(s),
        l = o(5624),
        c = o.n(l),
        d = o(4913),
        u = o(6919),
        p = o(5893),
        h = [
          "blurDataURL",
          "placeholder",
          "src",
          "alt",
          "height",
          "width",
          "unoptimized",
          "layout",
          "onClick",
          "className",
          "containerclassName",
          "text",
          "toolTipClassName",
          "toolTip",
          "textStyle",
          "title",
          "titleStyle",
          "large",
        ];
      function ownKeys(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, i);
        }
        return o;
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys(Object(o), !0).forEach(function (t) {
                (0, i.Z)(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : ownKeys(Object(o)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(o, t)
                );
              });
        }
        return e;
      }
      var myLoader = function (e) {
          var t = e.src;
          return t.startsWith("/imgs/")
            ? "".concat(t)
            : "".concat(d.Z.IMAGE_URL, "th_".concat(t.replace("opt_", "")));
        },
        myLoader2 = function (e) {
          var t = e.src;
          return t.startsWith("/imgs/")
            ? "".concat(t)
            : "".concat(d.Z.IMAGE_URL).concat(t);
        };
      t.Z = function (e) {
        var t = e.blurDataURL,
          o = e.placeholder,
          i = e.src,
          s = e.alt,
          l = e.height,
          d = e.width,
          m = (e.unoptimized, e.layout),
          g = e.onClick,
          f = e.className,
          x = e.containerclassName,
          v = e.text,
          w = void 0 === v ? "" : v,
          C = e.toolTipClassName,
          y = e.toolTip,
          k = void 0 === y ? "" : y,
          b = e.textStyle,
          _ = e.title,
          N = void 0 === _ ? "" : _,
          j = e.titleStyle,
          Z = e.large,
          L = (0, n.Z)(e, h),
          E = (0, a.useContext)(u.u).themeColor;
        return (0, p.jsxs)("div", {
          className: "".concat(void 0 === x ? "" : x),
          children: [
            (0, p.jsx)(
              r(),
              _objectSpread(
                _objectSpread({}, L),
                {},
                {
                  placeholder: void 0 === o ? "blur" : o,
                  blurDataURL: void 0 === t ? "/imgs/blur.webp" : t,
                  loader: !1 == (void 0 !== Z && Z) ? myLoader : myLoader2,
                  alt: void 0 === s ? "image" : s,
                  height: void 0 === l ? "300" : l,
                  width: void 0 === d ? "300" : d,
                  layout: m,
                  src: void 0 === i ? "/imgs/blur.webp" : i,
                  className: void 0 === f ? "" : f,
                  onClick: g,
                }
              )
            ),
            N &&
              (0, p.jsx)("span", {
                className: ""
                  .concat(j, "  ")
                  .concat(c().text, " ")
                  .concat("white" != E && "makeWhite"),
                children: N,
              }),
            k &&
              (0, p.jsx)("span", {
                className: void 0 === C ? "" : C,
                children: k,
              }),
            w &&
              (0, p.jsx)("span", {
                className: "  "
                  .concat(c().text, " ")
                  .concat(b, "  ")
                  .concat("white" != E && "makeWhite"),
                children: w,
              }),
          ],
        });
      };
    },
    5768: function (e, t, o) {
      "use strict";
      o(7294);
      var i = o(2578),
        n = o(9207),
        a = o.n(n),
        s = o(5893);
      t.Z = function (e) {
        var t = e.onClick,
          o = e.children,
          n = e.className,
          r = void 0 === n ? "" : n,
          l = e.tabIndex;
        return (0, s.jsx)("div", {
          tabIndex: l,
          onClick: t,
          className: "".concat(a().container, " ").concat(r),
          children: (0, s.jsx)("div", {
            className: a().wrapper,
            children: (0, s.jsx)(i.Z, {
              className: a().text,
              children: o,
            }),
          }),
        });
      };
    },
    8323: function (e, t, o) {
      "use strict";
      var i = o(468),
        n = o(5893);
      t.Z = function (e) {
        var t = e.src,
          o = e.alt,
          a = e.containerclassName,
          s = e.width,
          r = e.height,
          l = e.onClick,
          c = e.className;
        return (0, n.jsx)(i.Z, {
          src: t,
          alt: o,
          onClick: l,
          width: s,
          height: r,
          className: c,
          containerclassName:
            "flex flex-col justify-center items-center cursor-pointer ".concat(
              a
            ),
        });
      };
    },
    7878: function (e, t, o) {
      "use strict";
      o.d(t, {
        Z: function () {
          return common_Select;
        },
      });
      var i = o(116),
        n = o(7294),
        a = o(6831),
        s = o.n(a),
        r = o(3094),
        l = o.n(r),
        c = o(197),
        d = o.n(c),
        u = o(5893),
        p = (0, n.forwardRef)(function (e, t) {
          return (0, u.jsx)("div", {
            className: ""
              .concat(d().container, " ")
              .concat(null == e ? void 0 : e.className, " selectButton"),
            onClick: null == e ? void 0 : e.onClick,
            children: (0, u.jsxs)("div", {
              className: ""
                .concat(d().wrapper, "  ")
                .concat(null == e ? void 0 : e.wrapper),
              children: [
                (null == e ? void 0 : e.prefix) &&
                  (0, u.jsx)("div", {
                    className: null == e ? void 0 : e.prefixClass,
                    children: null == e ? void 0 : e.prefix,
                  }),
                (0, u.jsx)("input", {
                  onChange: null == e ? void 0 : e.onChange,
                  placeholder: null == e ? void 0 : e.placeholder,
                  value: null == e ? void 0 : e.value,
                  onKeyDown: null == e ? void 0 : e.onKeyDown,
                  disabled: null == e ? void 0 : e.disabled,
                  ref: t,
                  id: null == e ? void 0 : e.id,
                  onClick: null == e ? void 0 : e.onClickInput,
                  type: null == e ? void 0 : e.type,
                  inputclassname: null == e ? void 0 : e.inputclassname,
                  onFocus:
                    null != e && e.onFocus
                      ? null == e
                        ? void 0
                        : e.onFocus
                      : console.log("h"),
                  onBlur:
                    null != e && e.onBlur
                      ? null == e
                        ? void 0
                        : e.onBlur
                      : console.log("b"),
                  autoFocus: null != e && !!e.autoFocus,
                }),
                (null == e ? void 0 : e.affix) &&
                  (0, u.jsx)("div", {
                    className: "".concat(d().affix, " "),
                    children: null == e ? void 0 : e.affix,
                  }),
                (null == e ? void 0 : e.affix3) &&
                  (0, u.jsx)("div", {
                    className: "".concat(d().affix, " "),
                    children: null == e ? void 0 : e.affix3,
                  }),
                (null == e ? void 0 : e.affix2) &&
                  (0, u.jsx)("div", {
                    className: "".concat(d().affix),
                    children: null == e ? void 0 : e.affix2,
                  }),
              ],
            }),
          });
        });
      p.displayName = "AppInput";
      var h = o(468),
        common_AppSearch = function (e) {
          var t = e.searchValue,
            o = e.setSearchValue,
            i = e.autoFocus,
            a = (0, n.useState)(""),
            s = a[0],
            r = a[1],
            changeInput = function (e) {
              r(e.target.value);
            },
            pressKey = function (e) {
              13 === e.keyCode && o(s);
            };
          return (
            console.log("search", s, t),
            (0, u.jsx)(u.Fragment, {
              children: (0, u.jsx)("div", {
                className: "".concat(l().className, " relative"),
                children: (0, u.jsx)(p, {
                  autoFocus: void 0 !== i && i,
                  affix:
                    "" !== s &&
                    (0, u.jsx)("span", {
                      className:
                        "flex flex-row justify-center item-center px-1",
                      onClick: function () {
                        r(""), o("");
                      },
                      children: (0, u.jsx)(h.Z, {
                        width: 13,
                        height: 13,
                        src: "/imgs/dashboard/close.svg",
                        className: "cursor-pointer",
                      }),
                    }),
                  affix2: (0, u.jsx)("span", {
                    className:
                      "flex flex-row justify-center item-center cursor-pointer",
                    children: (0, u.jsx)(h.Z, {
                      src: "/imgs/dashboard/search.svg",
                      width: 18,
                      height: 18,
                      onClick: function () {
                        o(s);
                      },
                    }),
                  }),
                  placeholder: "جستجو",
                  className: "message p-0 ",
                  onChange: function (e) {
                    changeInput(e);
                  },
                  value: s,
                  onKeyDown: function (e) {
                    pressKey(e);
                  },
                }),
              }),
            })
          );
        },
        m = o(6919),
        common_Select = function (e) {
          var t,
            o,
            a,
            r,
            l,
            c,
            d = e.list,
            p = e.title,
            h = (e.state, e.setState, e.fillFormFunction),
            g = e.chooseItem,
            f = e.error,
            x = e.showError,
            v = e.value,
            w = void 0 === v ? "" : v,
            C = e.children,
            y = e.showDescription,
            k = e.topPlaceholder,
            b = e.className,
            _ = void 0 === b ? "nothing" : b,
            N = e.topPlaceholderStyle,
            j = void 0 === N ? "nothing" : N,
            Z = e.placeholder,
            L = e.placeHolderStyle,
            E = e.extraButtonStyle,
            T = e.disabled,
            M = void 0 !== T && T,
            I = e.showRemove,
            P = void 0 !== I && I,
            D = e.removeFunction,
            S = e.removeIcon,
            W = e.removeStyle,
            A = e.showSearch,
            H = e.searchValue,
            B = e.setSearchValue,
            F = e.openBox,
            V = void 0 === F ? null : F,
            U = e.boxColor;
          e.showTitle, e.inputTitleClass;
          var O = (0, n.useState)(!1),
            R = O[0],
            Y = O[1],
            z = (0, n.useState)(0),
            G = z[0],
            q = z[1],
            K = (0, n.useState)([]),
            J = K[0];
          K[1];
          var Q = (0, n.useState)(),
            X = Q[0],
            $ = Q[1],
            ee = (0, n.useContext)(m.u),
            et = ee.themeMode,
            eo = ee.direction,
            ei = (0, n.useRef)(),
            checkIfClickedOutside = function (e) {
              R &&
                ei.current &&
                !ei.current.contains(e.target) &&
                (Y(!1), console.log("firstdepen"));
            };
          (0, n.useEffect)(
            function () {
              return (
                document.addEventListener("mousedown", checkIfClickedOutside),
                function () {
                  document.removeEventListener(
                    "mousedown",
                    checkIfClickedOutside
                  );
                }
              );
            },
            [R]
          ),
            (0, n.useEffect)(
              function () {
                null != V && Y(V);
              },
              [V]
            ),
            (0, n.useEffect)(
              function () {
                $(
                  (0, i.Z)(
                    [
                      {
                        id: "",
                        title: "".concat(Z),
                      },
                    ].concat(d)
                  )
                );
              },
              [d]
            ),
            console.log("option==", X),
            (0, n.useEffect)(
              function () {
                if (
                  (null == w ? void 0 : w.length) !== 0 &&
                  (null == X ? void 0 : X.length) !== 0
                ) {
                  var e =
                    null == X
                      ? void 0
                      : X.findIndex(function (e) {
                          return (null == e ? void 0 : e.id) == w;
                        });
                  console.log("initalIndex", e, w), q(e);
                }
              },
              [X, w]
            ),
            (0, n.useEffect)(function () {}, [G]),
            console.log("selectedOption", J, X, d, G, w);
          var setSelectedThenCloseDropdown = function (e) {
              if ((console.log("bob", e), 0 !== e)) {
                var t;
                q(e),
                  h(
                    null == X
                      ? void 0
                      : null === (t = X[e]) || void 0 === t
                      ? void 0
                      : t.id
                  ),
                  g && g(null == X ? void 0 : X[e]),
                  Y(!1);
              }
            },
            handleListKeyDown = function (e) {
              switch (e.key) {
                case "Escape":
                  e.preventDefault(), Y(!1);
                  break;
                case "ArrowUp":
                  e.preventDefault(), q(G - 1 >= 0 ? G - 1 : X.length - 1);
                  break;
                case "ArrowDown":
                  e.preventDefault(), q(G == X.length - 1 ? 0 : G + 1);
              }
            };
          return (0, u.jsx)("div", {
            className: ""
              .concat(s().wrapper, " ")
              .concat(_, " ")
              .concat(M && s().disabled, " ltr"),
            ref: ei,
            children: (0, u.jsxs)("div", {
              className: s().container,
              children: [
                C &&
                  (0, u.jsxs)("div", {
                    className:
                      "flex flex-row justify-between items-center w-full h-full mb-[4px]",
                    children: [
                      (0, u.jsx)("p", {
                        className: s().titleStyle,
                        children: p,
                      }),
                      !0 == (void 0 !== y && y) &&
                        (0, u.jsx)("div", {
                          children: C,
                        }),
                    ],
                  }),
                (0, u.jsxs)("div", {
                  className:
                    "flex flex-col justify-start items-start w-full h-full",
                  children: [
                    k &&
                      (0, u.jsx)("span", {
                        className: "".concat(s().placeholder, " ").concat(j),
                        children: k,
                      }),
                    (0, u.jsxs)("div", {
                      className:
                        "flex flex-row justify-between items-center w-full h-full",
                      children: [
                        (0, u.jsx)("button", {
                          type: "button",
                          disabled: M,
                          "aria-haspopup": "listbox",
                          "aria-expanded": R,
                          className: ""
                            .concat(s().button, "  selectButton ")
                            .concat("rtl" == eo && s().rtl, "  ")
                            .concat(E, " ")
                            .concat(R ? s().expanded : "", " ")
                            .concat(
                              (null == X
                                ? void 0
                                : null === (t = X[G]) || void 0 === t
                                ? void 0
                                : t.id) == 0 && L,
                              " h-full "
                            )
                            .concat(P && "" != w && s().borderSelectButton, " ")
                            .concat("dark" == et && "textWhite"),
                          onClick: function () {
                            Y(!R);
                          },
                          onKeyDown: handleListKeyDown,
                          title:
                            null == X
                              ? void 0
                              : null === (o = X[G]) || void 0 === o
                              ? void 0
                              : o.title,
                          placeholder: Z,
                          children:
                            null != X &&
                            null !== (a = X[G]) &&
                            void 0 !== a &&
                            a.title
                              ? null == X
                                ? void 0
                                : null === (r = X[G]) || void 0 === r
                                ? void 0
                                : r.title
                              : null == X
                              ? void 0
                              : null === (l = X[G]) || void 0 === l
                              ? void 0
                              : l.uuName,
                        }),
                        P &&
                          "" != w &&
                          (0, u.jsx)("div", {
                            className:
                              "flex flex-row justify-center items-center ".concat(
                                void 0 === W ? "nothing" : W
                              ),
                            onClick: function () {
                              D(), Y(!1), q(0);
                            },
                            children: S,
                          }),
                      ],
                    }),
                  ],
                }),
                (0, u.jsxs)("ul", {
                  className: ""
                    .concat(s().options, " ")
                    .concat(s().ul, " ")
                    .concat("rtl" == eo && s().rtl, " selectedOption ")
                    .concat(
                      R ? "".concat(s().show) : "",
                      " ",
                      "".concat(void 0 === U ? "boxColor" : U)
                    ),
                  role: "listbox",
                  "aria-activedescendant":
                    null == X
                      ? void 0
                      : null === (c = X[G]) || void 0 === c
                      ? void 0
                      : c.title,
                  tabIndex: -1,
                  onKeyDown: handleListKeyDown,
                  children: [
                    void 0 !== A &&
                      A &&
                      (0, u.jsx)(common_AppSearch, {
                        searchValue: H,
                        setSearchValue: B,
                      }),
                    null == X
                      ? void 0
                      : X.map(function (e, t) {
                          return (0, u.jsx)(
                            "li",
                            {
                              className:
                                0 == t
                                  ? s().disabled
                                  : ""
                                      .concat(s().li, " ")
                                      .concat(
                                        w == (null == e ? void 0 : e.id) &&
                                          s().activeStyle
                                      ),
                              id: t,
                              role: "option",
                              "aria-selected": G == t,
                              tabIndex: 0,
                              onKeyDown: function () {
                                return function (e) {
                                  if (0 !== t)
                                    switch (e.key) {
                                      case " ":
                                      case "SpaceBar":
                                      case "Enter":
                                        e.preventDefault(),
                                          setSelectedThenCloseDropdown(t);
                                    }
                                };
                              },
                              onClick: function () {
                                setSelectedThenCloseDropdown(t);
                              },
                              children: null == e ? void 0 : e.title,
                            },
                            t
                          );
                        }),
                    (null == d ? void 0 : d.length) == 0 &&
                      (0, u.jsx)("p", {
                        className: s().empty,
                        children: "خالی",
                      }),
                  ],
                }),
                !0 == x &&
                  (0, u.jsx)("p", {
                    className: s().inputError,
                    children: f,
                  }),
              ],
            }),
          });
        };
    },
    2578: function (e, t, o) {
      "use strict";
      var i = o(9527),
        n = o.n(i),
        a = o(5893);
      t.Z = function (e) {
        var t = e.children,
          o = e.className,
          i = void 0 === o ? "" : o,
          s = e.onClick;
        return (0, a.jsx)("div", {
          className: "".concat(n().container, " ").concat(i),
          onClick: s,
          children: t,
        });
      };
    },
    2361: function (e, t, o) {
      "use strict";
      o.d(t, {
        Z: function () {
          return Layout;
        },
      });
      var i = o(5122),
        n = o(832),
        a = o(6919);
      o(7794);
      var s = o(964),
        r = o(8619),
        l = o(8289),
        c = o(381),
        d = o.n(c),
        u = o(1163),
        p = o(7294),
        h = o(2720),
        m = o.n(h),
        g = o(5768),
        f = o(8323),
        x = o(7878),
        v = o(4975),
        w = o(1664),
        C = o.n(w),
        y = o(454),
        k = o.n(y),
        b = o(5893);
      function Header() {
        var e,
          t,
          o,
          i,
          s,
          l,
          c = (0, p.useContext)(a.u),
          d = c.content,
          h = c.lang,
          m = c.setLang,
          w = (c.setThemeMode, c.themeMode),
          y = (c.direction, c.isLogin),
          _ = (0, p.useState)(!1),
          N = _[0],
          j = _[1],
          Z = (0, u.useRouter)(),
          L = (0, p.useState)(
            null === (e = (0, v.Z)(h)) || void 0 === e ? void 0 : e.array
          ),
          E = L[0],
          T = L[1],
          M = (0, p.useState)([
            {
              id: 1,
              name: "Products",
              href: "/products",
            },
            {
              id: 1,
              name: "About us",
              href: "/about",
            },
          ]);
        M[0], M[1];
        var chooseLangFunction = function (e) {
          var t,
            o,
            i =
              null ===
                (t =
                  E[
                    null == E
                      ? void 0
                      : E.findIndex(function (t) {
                          return (null == t ? void 0 : t.id) == e;
                        })
                  ]) || void 0 === t
                ? void 0
                : t.code;
          console.log("router", Z),
            "/" == Z.pathname &&
              Z.push("/", "", {
                scroll: !1,
                shallow: !0,
              }),
            (0, r.Z)("set", "tradeLang", i, function () {
              m((0, r.Z)("get", "tradeLang")), (n.Z.language = i);
            });
          var a = null === (o = (0, v.Z)(i)) || void 0 === o ? void 0 : o.array;
          T(a), m(i), console.log("x==", a, i), window.location.reload();
        };
        return (
          console.log("mode", w),
          console.log("languages", E),
          console.log("mode==", (0, r.Z)("get", "tradeMode"), w),
          (0, b.jsx)("div", {
            className:
              "flex flex-row justify-center items-center w-auto h-auto absoluteBack",
            children: (0, b.jsxs)("div", {
              className: "".concat(k().container, " w-full h-auto container"),
              children: [
                (0, b.jsx)(C(), {
                  className: "".concat(
                    k().logoPart,
                    " flex flex-row justify-start items-center w-auto h-auto"
                  ),
                  href: "/",
                  children: (0, b.jsx)(f.Z, {
                    src: "/imgs/logo.svg",
                    width: 140,
                    height: 64,
                  }),
                }),
                (0, b.jsxs)("div", {
                  className: ""
                    .concat(k().buttonPart, " flex ")
                    .concat(
                      "flex-row-reverse",
                      " justify-start items-center w-auto h-auto "
                    ),
                  children: [
                    y
                      ? (0, b.jsx)(g.Z, {
                          className: k().webButton,
                          children: (0, b.jsx)(C(), {
                            href: "/pwa",
                            title:
                              null == d
                                ? void 0
                                : null === (t = d.pwa) || void 0 === t
                                ? void 0
                                : t.title,
                            children:
                              null == d
                                ? void 0
                                : null === (o = d.pwa) || void 0 === o
                                ? void 0
                                : o.title,
                          }),
                        })
                      : (0, b.jsxs)(b.Fragment, {
                          children: [
                            (0, b.jsx)(g.Z, {
                              className: k().webButton,
                              children: (0, b.jsx)(C(), {
                                href: "/pwa/signup",
                                title: null == d ? void 0 : d.signupText,
                                children: null == d ? void 0 : d.signupText,
                              }),
                            }),
                            (0, b.jsx)(g.Z, {
                              className: "".concat(
                                k().webButton,
                                " secondButton"
                              ),
                              children: (0, b.jsx)(C(), {
                                href: "/pwa/login",
                                title:
                                  null == d
                                    ? void 0
                                    : null === (i = d.login) || void 0 === i
                                    ? void 0
                                    : i.title,
                                children:
                                  null == d
                                    ? void 0
                                    : null === (s = d.login) || void 0 === s
                                    ? void 0
                                    : s.title,
                              }),
                            }),
                          ],
                        }),
                    (0, b.jsxs)("div", {
                      className:
                        "flex flex-row justify-start items-center w-auto h-auto rtl",
                      onClick: function () {
                        j(!N);
                      },
                      children: [
                        (0, b.jsx)(x.Z, {
                          list: E,
                          fillFormFunction: function (e) {
                            return chooseLangFunction(e);
                          },
                          value:
                            null == E
                              ? void 0
                              : null ===
                                  (l =
                                    E[
                                      null == E
                                        ? void 0
                                        : E.findIndex(function (e) {
                                            return e.code == h;
                                          })
                                    ]) || void 0 === l
                              ? void 0
                              : l.code,
                          placeholder: "",
                          className: k().select,
                          openBox: N,
                        }),
                        (0, b.jsx)("p", {
                          className: "".concat(
                            "fa" == h ? k().langFa : k().langEn,
                            " cursor-pointer"
                          ),
                          children: h.charAt(0).toUpperCase() + h.slice(1),
                        }),
                        (0, b.jsx)(f.Z, {
                          src: "/imgs/global.svg",
                          width: 28,
                          height: 28,
                          containerclassName: ""
                            .concat(k().globalIcon, " ")
                            .concat("dark" == w && "makeWhite"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var _ = o(3367),
        N = o.n(_),
        j = o(468),
        structure_Footer = function (e) {
          var t,
            o,
            i,
            n,
            s,
            r,
            l,
            c = e.data,
            d = (0, p.useContext)(a.u),
            u = d.themeMode,
            h = (d.lang, d.direction),
            m = (d.content, d.setOpenContactModal);
          return (0, b.jsxs)("div", {
            className:
              "flex flex-col justify-start items-center w-full h-auto absoluteBack",
            children: [
              (0, b.jsx)("div", {
                className: ""
                  .concat(N().container, " ")
                  .concat("dark" == u && N().dark),
                children: (0, b.jsxs)("div", {
                  className: "".concat(N().second_conatiner, " container"),
                  children: [
                    (0, b.jsxs)("div", {
                      className: ""
                        .concat(N().details_part, " ")
                        .concat("rtl" == h && N().rtl),
                      children: [
                        (0, b.jsx)(j.Z, {
                          src: "/imgs/logo.svg",
                          width: 140,
                          height: 64,
                          containerclassName: ""
                            .concat(N().containerclassName, " ")
                            .concat("rtl" == h && N().rtl),
                        }),
                        (0, b.jsx)("p", {
                          className: " ".concat(
                            "dark" == u && "lightTextWhite"
                          ),
                          children: null == c ? void 0 : c.text,
                        }),
                        (0, b.jsxs)("div", {
                          className: N().second_contact_us,
                          children: [
                            (0, b.jsx)("span", {
                              children:
                                null == c
                                  ? void 0
                                  : null === (t = c.col3) || void 0 === t
                                  ? void 0
                                  : t.title,
                            }),
                            (0, b.jsx)("div", {
                              className: ""
                                .concat(N().social_media_container, " ")
                                .concat(N().desktop),
                              children: (0, b.jsx)("div", {
                                className: N().carts_container,
                                children:
                                  null == c
                                    ? void 0
                                    : null === (o = c.socialMedia) ||
                                      void 0 === o
                                    ? void 0
                                    : o.map(function (e, t) {
                                        return (0, b.jsx)(b.Fragment, {
                                          children:
                                            (null == e ? void 0 : e.id) != 2
                                              ? (0, b.jsx)(
                                                  "a",
                                                  {
                                                    title:
                                                      null == e
                                                        ? void 0
                                                        : e.urlTitle,
                                                    href:
                                                      null == e
                                                        ? void 0
                                                        : e.url,
                                                    children: (0, b.jsx)(j.Z, {
                                                      src: e.image,
                                                      width: 40,
                                                      height: 40,
                                                      alt: e.imageAlt,
                                                      containerclassName:
                                                        "makeWhite",
                                                    }),
                                                  },
                                                  t
                                                )
                                              : (0, b.jsx)(
                                                  "div",
                                                  {
                                                    title:
                                                      null == e
                                                        ? void 0
                                                        : e.urlTitle,
                                                    onClick: function () {
                                                      m(!0);
                                                    },
                                                    className: "cursor-pointer",
                                                    children: (0, b.jsx)(j.Z, {
                                                      src: e.image,
                                                      width: 40,
                                                      height: 40,
                                                      alt: e.imageAlt,
                                                      containerclassName:
                                                        "makeWhite",
                                                    }),
                                                  },
                                                  t
                                                ),
                                        });
                                      }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsx)("div", {
                      className: N().links_container,
                      children: (0, b.jsxs)("div", {
                        className: N().second_col,
                        children: [
                          (0, b.jsx)("span", {
                            children:
                              null == c
                                ? void 0
                                : null === (i = c.col2) || void 0 === i
                                ? void 0
                                : i.title,
                          }),
                          null == c
                            ? void 0
                            : null === (n = c.col2) || void 0 === n
                            ? void 0
                            : null === (s = n.links) || void 0 === s
                            ? void 0
                            : s.map(function (e, t) {
                                return (0, b.jsx)(
                                  "div",
                                  {
                                    className: " ".concat(
                                      "dark" == u && "lightTextWhite"
                                    ),
                                    children: (0, b.jsx)(
                                      C(),
                                      {
                                        href: null == e ? void 0 : e.aLink,
                                        legacyBehavior: !0,
                                        target: "_blank",
                                        children: (0, b.jsx)("a", {
                                          title: null == e ? void 0 : e.aTitle,
                                          target: "_blank",
                                          children: null == e ? void 0 : e.text,
                                        }),
                                      },
                                      t
                                    ),
                                  },
                                  t
                                );
                              }),
                        ],
                      }),
                    }),
                    (0, b.jsxs)("div", {
                      className: N().contact_us,
                      children: [
                        (0, b.jsx)("div", {
                          className: "flex flex-col justify-start items-start",
                          children: (0, b.jsx)("span", {
                            children:
                              null == c
                                ? void 0
                                : null === (r = c.col3) || void 0 === r
                                ? void 0
                                : r.title,
                          }),
                        }),
                        (0, b.jsx)("div", {
                          className: "".concat(N().social_media_container),
                          children: (0, b.jsx)("div", {
                            className: N().carts_container,
                            children:
                              null == c
                                ? void 0
                                : null === (l = c.socialMedia) || void 0 === l
                                ? void 0
                                : l.map(function (e, t) {
                                    return (0, b.jsx)(b.Fragment, {
                                      children:
                                        (null == e ? void 0 : e.id) != 2
                                          ? (0, b.jsx)(
                                              "a",
                                              {
                                                title:
                                                  null == e
                                                    ? void 0
                                                    : e.urlTitle,
                                                href:
                                                  null == e ? void 0 : e.url,
                                                children: (0, b.jsx)(j.Z, {
                                                  src: e.image,
                                                  width: 40,
                                                  height: 40,
                                                  alt: e.imageAlt,
                                                  containerclassName:
                                                    "makeWhite",
                                                }),
                                              },
                                              t
                                            )
                                          : (0, b.jsx)(
                                              "div",
                                              {
                                                title:
                                                  null == e
                                                    ? void 0
                                                    : e.urlTitle,
                                                onClick: function () {
                                                  m(!0);
                                                },
                                                className: "cursor-pointer",
                                                children: (0, b.jsx)(j.Z, {
                                                  src: e.image,
                                                  width: 40,
                                                  height: 40,
                                                  alt: e.imageAlt,
                                                  containerclassName:
                                                    "makeWhite",
                                                }),
                                              },
                                              t
                                            ),
                                    });
                                  }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, b.jsxs)("div", {
                className:
                  "flex flex-row-reverse justify-between items-center w-full h-auto container flex-wrap ".concat(
                    N().bottomPart
                  ),
                children: [
                  (0, b.jsxs)("div", {
                    className: "flex flex-row items-end w-auto h-auto  "
                      .concat(N().extraContentPadding, " ")
                      .concat("rtl" == h && N().rtl),
                    children: [
                      (0, b.jsx)(f.Z, {
                        src: "/imgs/hero/newGooglePlay.svg",
                        width: 180,
                        height: 56,
                        containerclassName: ""
                          .concat(N().button, " mx-20px ")
                          .concat(
                            "ltr" == h ? "ml-0" : "mr-0",
                            "\n              "
                          ),
                      }),
                      (0, b.jsx)(C(), {
                        href: "/",
                        children: (0, b.jsx)(f.Z, {
                          src: "/imgs/hero/newApple.svg",
                          width: 180,
                          height: 56,
                          containerclassName: "".concat(N().button, " "),
                        }),
                      }),
                    ],
                  }),
                  (0, b.jsxs)("p", {
                    className: " ".concat("dark" == u && "lightTextWhite", " "),
                    children: [" ", null == c ? void 0 : c.rights],
                  }),
                ],
              }),
            ],
          });
        },
        structure_Main = function (e) {
          var t = e.children,
            o = e.className,
            i = void 0 === o ? "" : o,
            n = e.onClick,
            s = e.onScroll,
            r = (0, p.useContext)(a.u),
            l = r.themeColor,
            c = r.themeMode,
            d = r.content;
          return (0, b.jsxs)("div", {
            className: ""
              .concat(m().wholeContainer, " ochatt_mode_")
              .concat(c, " relative"),
            children: [
              (0, b.jsxs)("div", {
                children: [
                  (0, b.jsx)(Header, {}),
                  (0, b.jsx)("div", {
                    className: ""
                      .concat(m().container, " ")
                      .concat(i, " ", "ochatt_theme_".concat(l), " "),
                    onClick: n,
                    id: "layout",
                    onScroll: s,
                    children: t,
                  }),
                ],
              }),
              "dark" == c &&
                (0, b.jsx)("div", {
                  className: ""
                    .concat(m().absoluteBackground, " ")
                    .concat(m().bgDark),
                }),
              "white" == c &&
                (0, b.jsx)("div", {
                  className: ""
                    .concat(m().absoluteBackground, " ")
                    .concat(m().bgWhite),
                }),
              (0, b.jsx)(structure_Footer, {
                data: null == d ? void 0 : d.footer,
              }),
            ],
          });
        },
        Z = o(5302),
        L = o.n(Z),
        structure_PwaMain = function (e) {
          var t = e.children,
            o = e.className,
            i = void 0 === o ? "" : o,
            n = e.onClick,
            s = e.onScroll,
            r = e.containerPwa,
            l = (0, p.useContext)(a.u),
            c = l.themeColor,
            d = l.themeMode,
            h = (l.content, l.direction),
            m = (0, u.useRouter)();
          return (0, b.jsxs)("div", {
            className: ""
              .concat(
                L().wholeContainer,
                " containerPwaWrapper mx-auto ochatt_mode_"
              )
              .concat(d, " relative ")
              .concat(L().newBackground),
            children: [
              (0, b.jsx)(C(), {
                href: "/",
                title: "Home",
                children: (0, b.jsx)(f.Z, {
                  src: "/imgs/logo.svg",
                  width: 100,
                  height: 45,
                  containerclassName: ""
                    .concat(L().containerclassName, " ")
                    .concat("rtl" == h && L().rtl, " ")
                    .concat("/pwa" != m.asPath && L().topMargin),
                  className: "",
                }),
              }),
              (0, b.jsx)("div", {
                className: "".concat(void 0 === r ? "containerPwa" : r),
                children: (0, b.jsx)("div", {
                  className: ""
                    .concat(L().container, " ")
                    .concat(i, " ", "ochatt_theme_".concat(c, " "), "  "),
                  onClick: n,
                  id: "layout",
                  onScroll: s,
                  children: t,
                }),
              }),
              "dark" == d &&
                (0, b.jsx)("div", {
                  className: ""
                    .concat(L().absoluteBackground, " ")
                    .concat(L().bgDark),
                }),
              "white" == d &&
                (0, b.jsx)("div", {
                  className: ""
                    .concat(L().absoluteBackground, " ")
                    .concat(L().bgWhite),
                }),
            ],
          });
        },
        E = o(9008),
        T = o.n(E);
      function SeoHead(e) {
        var t = e.seoObject;
        return (
          console.log("seoObject==", t),
          (0, b.jsxs)(T(), {
            children: [
              (0, b.jsx)("title", {
                children: null == t ? void 0 : t.name,
              }),
              (0, b.jsx)("meta", {
                name: "description",
                content: "".concat(null == t ? void 0 : t.description),
              }),
              (0, b.jsx)("meta", {
                name: "viewport",
                content:
                  "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
              }),
              (0, b.jsx)("link", {
                rel: "icon",
                href: "/icons/icon-72.png",
              }),
            ],
          })
        );
      }
      var M = o(6343),
        I = o.n(M);
      function Layout(e) {
        var t = e.children,
          o = e.onScroll,
          c = e.seoObject,
          h = e.containerPwa,
          m = (0, p.useContext)(a.u),
          g = m.setThemeColor,
          f = (m.themeMode, m.setThemeMode),
          x = m.content,
          v = m.setContent,
          w = m.direction,
          C = m.setDirection,
          y = m.setLang,
          k = m.lang,
          _ = m.setBg,
          N = (m.scrollValue, m.setScrollValue, m.priceType, m.setPriceType);
        m.showGuide, m.setShowGuide;
        var j = (0, u.useRouter)();
        console.log("config==", n.Z.language),
          (0, p.useEffect)(function () {
            if (
              (void 0 != (0, r.Z)("get", "tradeColorLanding")
                ? g((0, r.Z)("get", "tradeColorLanding"))
                : (0, r.Z)("set", "tradeColorLanding", "green", function () {
                    g((0, r.Z)("get", "tradeColorLanding"));
                  }),
              void 0 != (0, r.Z)("get", "tradeMode")
                ? (console.log("nnn", (0, r.Z)("get", "tradeMode")),
                  f((0, r.Z)("get", "tradeMode")))
                : (0, r.Z)("set", "tradeMode", "dark", function () {
                    f((0, r.Z)("get", "tradeMode"));
                  }),
              void 0 != (0, r.Z)("get", "tradeLang"))
            ) {
              v(
                null === (e = (0, s.Z)((0, r.Z)("get", "tradeLang"))) ||
                  void 0 === e
                  ? void 0
                  : e.content
              ),
                C(
                  null === (t = (0, s.Z)((0, r.Z)("get", "tradeLang"))) ||
                    void 0 === t
                    ? void 0
                    : t.dir
                ),
                y((0, r.Z)("get", "tradeLang")),
                console.log("cooooooooooooooo", (0, r.Z)("get", "tradeLang"));
              var e,
                t,
                o = (0, s.Z)((0, r.Z)("get", "tradeLang"));
              d().locale("".concat(o));
            } else
              (0, r.Z)("set", "tradeLang", "en", function () {
                var e, t;
                v(
                  null === (e = (0, s.Z)((0, r.Z)("get", "tradeLang"))) ||
                    void 0 === e
                    ? void 0
                    : e.content
                ),
                  C(
                    null === (t = (0, s.Z)((0, r.Z)("get", "tradeLang"))) ||
                      void 0 === t
                      ? void 0
                      : t.dir
                  ),
                  y("en"),
                  (0, s.Z)("en");
              });
            void 0 != (0, r.Z)("get", "tradeBgLanding")
              ? _((0, r.Z)("get", "tradeBgLanding"))
              : (0, r.Z)("set", "tradeBgLanding", "0", function () {
                  _("0");
                }),
              ifLogin();
          }, []),
          (0, p.useEffect)(
            function () {
              console.log(
                "priceType==",
                (0, r.Z)("get", "priceTypeNew"),
                "T" == (0, r.Z)("get", "priceTypeNew")
              ),
                void 0 != (0, r.Z)("get", "priceTypeNew") &&
                  ("T" == (0, r.Z)("get", "priceTypeNew")
                    ? N(" " + (null == x ? void 0 : x.toman))
                    : N((0, r.Z)("get", "priceTypeNew")));
            },
            [x]
          );
        var ifLogin = function () {
          if (
            ((n.Z.udata = (0, r.Z)("get", "newToken")),
            console.log("token==", (0, r.Z)("get", "newToken"), n.Z.udata),
            "undefined" != typeof document)
          ) {
            var e,
              t =
                "undefined" !== (e = (0, r.Z)("get", "newToken")) &&
                void 0 !== e;
            t &&
              i.Z.checkLogin().then(function (e) {
                403 == e.data.response.status && t && exitFunction();
              });
          }
        };
        (0, p.useEffect)(
          function () {
            var e, t;
            v(null === (e = (0, s.Z)(k)) || void 0 === e ? void 0 : e.content),
              C(null === (t = (0, s.Z)(k)) || void 0 === t ? void 0 : t.dir);
          },
          [k]
        );
        var exitFunction = function () {
            var e, t;
            (0, r.Z)("remove", "newToken"),
              null === (e = window) ||
                void 0 === e ||
                null === (t = e.location) ||
                void 0 === t ||
                t.reload();
          },
          Z = (0, p.useRef)(null),
          L = (0, l.Z)(Z),
          E = (0, p.useState)(!1);
        E[0], E[1], console.log("vvvvv", L);
        var T = (0, p.useState)(!1),
          M = T[0],
          P = T[1];
        return (
          (0, p.useEffect)(
            function () {
              L && P(!0);
            },
            [L]
          ),
          console.log("mmmmmm===", (0, r.Z)("get", "tradeMode")),
          console.log("content====", x),
          (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsx)(SeoHead, {
                seoObject: c,
              }),
              (0, b.jsx)("div", {
                className: ""
                  .concat(w, " relative ")
                  .concat(M ? I().containerShow : I().container, " ")
                  .concat("/" != j.asPath && I().newBackground),
                onScroll: o,
                ref: Z,
                children:
                  M &&
                  (0, b.jsx)(b.Fragment, {
                    children: j.asPath.includes("/pwa")
                      ? (0, b.jsx)(structure_PwaMain, {
                          containerPwa: h,
                          children: t,
                        })
                      : (0, b.jsx)(structure_Main, {
                          children: t,
                        }),
                  }),
              }),
            ],
          })
        );
      }
    },
    4913: function (e, t) {
      "use strict";
      t.Z = {
        IMAGE_URL: "https://images.new-marketanalysis.com/images/",
        IMAGE_URL_COPY: "https://images.new-marketanalysis.com",
        IMAGE_URL_API: "https://api.new-marketanalysis.com/images/",
        FILE_URL: "https://api.new-marketanalysis.com/files/",
        IMAGE_URL_COPY_API: "https://api.new-marketanalysis.com",
        VIDEO_URL: "https://www.new-marketanalysis.com/videos/",
        VIDEO_URL_NEW: "https://www.new-marketanalysis.com",
        MUSIC_URL: "https://www.new-marketanalysis.com/musics/",
        MUSIC_URL_NEW: "https://www.new-marketanalysis.com/mp3/",
        url: "https://api.new-marketanalysis.com",
        copy_URL: "https://www.new-marketanalysis.com",
        socketServer: "https://api.new-marketanalysis.com/",
        socketServerImage: "https://api.new-marketanalysis.com/images/",
        socketServerVideo: "https://api.new-marketanalysis.com/videos/",
        socketServerMusic: "https://api.new-marketanalysis.com/musics/",
        socketServerFile: "https://api.new-marketanalysis.com/files/",
        maxBgScale: 10,
      };
    },
    8869: function (e, t, o) {
      "use strict";
      var i = o(4913);
      t.Z = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                name: "",
                keywords: "",
                description: "",
                url: "",
                query: "",
                videoUrl: "",
                imageUrl: "",
                pageNumber: "",
                uuid: "",
                createDate: "",
                duration: "",
                viewNum: 0,
              };
        return {
          seo: {
            name: e.name,
            keywords: e.keywords,
            description: e.description,
            url: "".concat(i.Z.url, "/").concat(e.query),
            imageUrl: e.imageUrl,
            videoUrl: e.videoUrl,
            query: e.query,
            pageNumber: e.pageNumber,
            uuid: e.uuid,
            duration: null == e ? void 0 : e.duration,
            createDate: e.createDate,
            viewNum: e.viewNum,
          },
        };
      };
    },
    8289: function (e, t, o) {
      "use strict";
      o.d(t, {
        Z: function () {
          return useIsVisible;
        },
      });
      var i = o(7674),
        n = o(7294);
      function useIsVisible(e) {
        var t = (0, n.useState)(!1),
          o = t[0],
          a = t[1];
        return (
          (0, n.useEffect)(
            function () {
              var t = new IntersectionObserver(function (e) {
                return a((0, i.Z)(e, 1)[0].isIntersecting);
              });
              return (
                t.observe(e.current),
                function () {
                  t.disconnect();
                }
              );
            },
            [e]
          ),
          o
        );
      }
    },
    964: function (e, t, o) {
      "use strict";
      o.d(t, {
        Z: function () {
          return chooseLanguage;
        },
      });
      var i,
        n = o(9499);
      function dateToYMD(e) {
        var t = e.getFullYear(),
          o = e.getDate(),
          i = e.getMonth() + 1;
        return (
          console.log(
            "hhhhhhhhh",
            "" + t + "-" + (i <= 9 ? "0" + i : i) + "-" + (o <= 9 ? "0" + o : o)
          ),
          "" + t + "-" + (i <= 9 ? "0" + i : i) + "-" + (o <= 9 ? "0" + o : o)
        );
      }
      var a = o(4007),
        s = o(5893),
        r =
          ((i = {
            chartprice: "قیمت",
            chartPredictedPrice: " قیمت پیش‌بینی شده",
            mave: "میانگین سه روز",
            today: "today",
            signupText: "ثبت‌نام",
            view: "مشاهده",
            subscribe: "عضویت",
            toman: "تومان",
            totalAmount: "قیمت کل",
            amount: "قیمت ",
            totalDiscount: "تخفیف",
            deleteAccount: {
              title: "",
              description:
                "آیا مطمئن هستید می‌خواهید حساب کاربری خود را حذف کنید؟",
              confirmText: "بله",
              rejectText: "خیر",
              reason: "علت حذف حساب کاربری",
              reasonTitle: "علت حذف حساب کاربری",
            },
            discount: {
              name: "کد تخفیف",
              placeholder: "کد تخفیف را وارد کنید",
            },
            login: {
              description: "برای ورود به حساب کاربری اطلاعات خود را وارد کنید.",
              toSignup: {
                description: "حساب کاربری ندارید؟",
                button: " ثبت‌نام کنید. ",
              },
              title: "ورود",
              text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و تکنولوژی موردگ",
              formButton: "ورود",
              mobile: "شماره موبایل",
              mobileError: "شماره موبایل نادرست است.",
              mobilePlaceHolder: "مثال: ۹xxxxxxxx",
              password: "گذرواژه",
              passwordError: "گذرواژه نادرست است.",
              forgetButton: "رمزعبور خود را فراموش کردید؟",
              createAccount: {
                description:
                  "Register in OChatt to use OChatt facilities such as uploading videos, leaving comments, etc.",
                title: "enter OChatt",
                button: "create Account",
              },
            },
            countryCode: {
              error: "کشور مورد نظر شما پشتیبانی نمی‌شود.",
              code: "پیش شماره",
              placeholder: "۹۸",
            },
            signup: {
              title: "ثبت‌نام ",
              text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و تکنولوژی موردگ",
              mobile: {
                title: "Step 1 / 2: enter mobile number",
                description: "Enter your mobile phone number to register.",
                button: "ارسال کد تایید",
                input: {
                  placeholder: "مثال: ۹xxxxxxxx",
                  title: "شماره موبایل",
                  error: "شماره موبایل نادرست است.",
                },
              },
              code: {
                title: "رمز یکبار مصرف",
                description:
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و تکنولوژی موردگ",
                button: "تایید و ادامه",
                input: {
                  placeholder: "مثال: ۹xxxxxxxx",
                  title: "کد تایید ",
                  error: "کد ارسالی را به صورت عدد چهاررقمی وارد کنید.",
                },
                resend: "ارسال مجدد",
                preResend: "کد را دریافت نکرده‌اید؟",
              },
              success: {
                title: "ثبت‌نام",
                description:
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و تکنولوژی موردگ",
                button: "ثبت‌نام",
                nameInput: {
                  placeholder: "نام کاربری خود را وارد کنید.",
                  title: "نام کاربری",
                  error: "نام کاربری خود را وارد کنید.",
                },
                passwordInput: {
                  placeholder: "گذرواژه خود را وارد کنید.",
                  title: "گذرواژه",
                  error: "گذرواژه خود را وارد کنید.",
                },
              },
            },
            forgetpassword: {
              mobile: {
                title: "فراموشی رمزعبور",
                description:
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و تکنولوژی موردگ",
                button: "ارسال کد تایید",
                input: {
                  placeholder: "مثال: ۹xxxxxxxx",
                  title: " شماره موبایل ",
                  error: "شماره موبایل نادرست است.",
                },
              },
              code: {
                title: "رمز یکبار مصرف",
                description:
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و تکنولوژی موردگ",
                button: "تایید و ادامه",
                input: {
                  placeholder: "مثال: ۹xxxxxxxx",
                  title: "کد تایید",
                  error: "کد ارسالی را به صورت عدد چهاررقمی وارد کنید.",
                },
              },
              success: {
                title: "ایجاد گذرواژه جدید",
                description:
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و تکنولوژی موردگ",
                button: "ثبت ",
                passwordInput: {
                  placeholder: "گذرواژه را وارد کنید",
                  title: "گذرواژه",
                  error: "گذرواژه را وارد کنید.",
                },
                confirmPasswordInput: {
                  placeholder: "گذرواژه را مجدد وارد کنید",
                  title: "تکرار گذرواژه ",
                  error: "گذرواژه را مجدد وارد کنید",
                },
              },
            },
            changePassword: {
              prePass: {
                title: "Previous password",
                error: "Enter the previous password.",
              },
              newPass: {
                title: "New password",
                error: "Enter the new password.",
              },
              reNewPass: {
                title: "Repeat the new password",
                error: "Re-enter the new password.",
              },
              notMatch: "Password and Confirm password does not match.",
              submit: "submit",
            },
            haveAccount: {
              title: "حساب کاربری دارید؟ ",
              button: "وارد شوید",
            },
            hero: {
              title: {
                row1: {
                  text1: {
                    one: "",
                    two: "آینده ",
                    three: "",
                    four: "بازار مواد معدنی",
                    five: " اینجا با ",
                  },
                  animate: "is NEW",
                  text2: "NEW",
                  text3: {
                    one: "همکار",
                    two: " هوش مصنوعی ",
                    three: " شما",
                  },
                },
              },
              text2: "همین الان شروع کنید!",
              text: "با NEW روند بازار پیش روی شماست، از آن برای بهبود تجارت خود استفاده کنید. NEW به طور پیوسته داده های بازار  را مورد تحلیل قرار می دهد تا نتایج به روز در اختیار شما قرارگیرد.",
            },
            features: {
              title: "NEW همه آن چیزی که شما در جست و جوی آنید ",
              text: "",
              array: [
                {
                  id: 1,
                  title: "تحلیل روند بازار ",
                  src: "/imgs/features/business.svg",
                  text: "بررسی روند بازار یک ابزار مهم برای هر تجارت و کسب و کاری است. نظارت مستمر بر تغییرات  بازار، فرصتهای پیش رو را برای شما نمایان میکند.",
                },
                {
                  id: 2,
                  title: "مدیریت ریسک",
                  src: "/imgs/features/predict.svg",
                  text: "با NEW در محیط کسب و کار پیچیده و متغیر امروز از دارایی و اعتبار خود محافظت کنید. ",
                },
                {
                  id: 3,
                  title: " استفاده از به روزترین مدلهای یادگیری ماشین ",
                  src: "/imgs/features/ml.svg",
                  text: "NEW، یک پلتفرم هوش مصنوعی است که با استفاده از روش های به روز یادگیری ماشین، تجارت مواد معدنی را متحول میکند. ",
                },
              ],
            },
            overView: {
              title: "با دیدن فیلم NEW را تجربه کند.",
              text: "",
              array: [
                {
                  id: 1,
                  title: "",
                  src: "/imgs/overview/simple.png",
                  text: "لطفا بر روی فیلم کلید نمایید. ",
                  text2:
                    "NEW ، یک مدل نوین هوش مصنوعی است که از روش های به روز یادگیری ماشین برای پیش بینی قیمت سنگ آهن و تحلیل بازار استفاده می کند.NEW ، همکار هوش مصنوعی شما است تا در توسعه و تغییر کسب و کارتان یاریتان کند. ",
                  text3: "با مزایای استفاده از NEW آشنا شوید!",
                  items: [
                    {
                      id: 1,
                      text: "در این پروژه علاوه بر اینکه از روش های هوش مصنوعی، یادگیری ماشین و داده های پیشین قیمت سنگ    آهن، در مدلسازی، از بیشن از 30 سال تجربه آقای دکتر کیوان جعفری طهرانی در تحلیل بازار و تجارت سنگ آهن برای پیش بینی رفتار بازار استفاده شد. ",
                    },
                    {
                      id: 2,
                      text: "NEW خود را با تغییرات بازار به روز میکند تا شما را در مدیریت ریسک و یافتن فرصتهای تجاری یاری کند.",
                    },
                    {
                      id: 3,
                      text: "NEW احتمال هرگونه تغییرات ناگهانی بازار را به شما اطالع میدهد.",
                    },
                  ],
                },
              ],
            },
            download: {
              title: {
                text1: "نرم‌افزار NEW را دانلود کنید ",
              },
              text: "NEW در پلتفرم های play Google و Store App در دسترس است. با دانلود NEW کسب و کار خود را تغییر دهید",
            },
            footer: {
              title: "Ochatt",
              text: "با NEW روند بازار پیش روی شماست، از آن برای بهبود تجارت خود استفاده کنید. NEW بهطور پیوسته داده های بازار را  مورد تحلیل قرار میدهد تا نتایج به روز در اختیار شما قرارگیرد.  همین الان شروع کنید! ",
              rights: "All Rights Reserve",
              rightsLink: "Lotus Pioneers",
              rights2: "",
              col2: {
                title: "صفحات",
                links: [
                  {
                    aLink: "/faqs",
                    aTitle: "سوالات شما ",
                    text: "سوالات شما ",
                  },
                  {
                    aLink: "/about-us",
                    aTitle: "درباره ما",
                    text: "درباره ما",
                  },
                ],
              },
              col3: {
                title: "ارتباط با ما ",
                links: [
                  {
                    aLink: "/",
                    text: "Hair Transplant Costs",
                    aTitle: "MedoTopia Hair Transplant Costs",
                  },
                  {
                    aLink: "/",
                    text: "Rhinoplasty Costs",
                    aTitle: "MedoTopia Rhinoplasty Costs",
                  },
                  {
                    aLink: "/",
                    text: "Liposuction Costs",
                    aTitle: "MedoTopia Liposuction Costs",
                  },
                  {
                    aLink: "/",
                    text: "Liposuction Costs",
                    aTitle: "MedoTopia Liposuction Costs",
                  },
                  {
                    aLink: "/",
                    text: "Liposuction Costs",
                    aTitle: "MedoTopia Liposuction Costs",
                  },
                  {
                    aLink: "/",
                    text: "Liposuction Costs",
                    aTitle: "MedoTopia Liposuction Costs",
                  },
                  {
                    aLink: "/",
                    text: "Liposuction Costs",
                    aTitle: "MedoTopia Liposuction Costs",
                  },
                ],
              },
              contactUs: {
                location: {
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  image: "/imgs/home/footer/medoTopia-location.svg",
                  imageAlt:
                    "Unit 506, 5th Floor, Samarghand Complex, Jannat Abad, Tehran",
                  icon: (0, s.jsx)(a.Z.locationIcon, {
                    width: 24,
                    height: 24,
                  }),
                },
                phone: {
                  text: "7782278771",
                  image: "/imgs/home/footer/medoTopia-mobile.svg",
                  imageAlt: "021-46135517",
                  icon: (0, s.jsx)(a.Z.mobileIcon, {
                    width: 22,
                    height: 22,
                  }),
                },
              },
              socialMedia: [
                {
                  id: 1,
                  image: "/imgs/home/footer/linkedin.svg",
                  imageAlt: "لینکدین",
                  url: "/",
                  urlTitle: "لینکدین",
                },
                {
                  id: 2,
                  image: "/imgs/home/footer/contactus.svg",
                  imageAlt: "تماس با ما",
                  url: "",
                  urlTitle: "تماس با ما",
                },
              ],
              bottomPart: {
                text: "با دانلود NEW کسب و کار خود را تغییر دهید! ",
              },
            },
            privacy: [
              {
                id: 1,
                title: "Introduction",
                text: "<p>Welcome to Ochatt! This Privacy Policy is designed to help you understand how we collect, use, share, and protect your personal information when you use our chat application. By using Ochatt, you agree to the practices described in this Privacy Policy.</p>",
              },
              {
                id: 2,
                title: "Information We Collect",
                text: "<p>We may collect the following types of information when you use our chat app</p><p>User-Provided Information: When you create an account or use our app, you may provide us with personal information such as your name, email address, profile picture, and phone number.</p><p>Chat Content: We collect and store your chat messages, images, videos, and other content you share through our app.</p><p>Usage Information: We collect information about how you interact with our app, including device information, IP address, browser type, and operating system.</p><p>Location Information: With your consent, we may collect your device's precise location information to provide location-based features.</p><p>Contacts: We may access your device's contacts with your permission to help you find and connect with friends on our app.</p><p>Payment Information: If you make in-app purchases, we may collect payment information to process transactions.</p>",
              },
              {
                id: 3,
                title: "How We Use Your Information",
                text: "<p>We use the collected information for various purposes, including:</p><p>Providing and improving our services.</p><p>Personalizing your experience and customizing content.</p><p>Communicating with you, including notifications and updates.</p><p>Analyzing app usage and performance.</p><p>Enforcing our terms and policies.</p><p>Protecting our users and preventing fraud or illegal activities.</p><p>Complying with legal obligations.</p>",
              },
              {
                id: 4,
                title: "Information Sharing",
                text: "<p>We do not sell, trade, or rent your personal information to third parties. However, we may share your information with:</p><p>Service providers who assist us in delivering our services.</p><p>Law enforcement or legal authorities in response to a legal request.</p><p>Business partners for joint promotions or features, with your consent.</p>",
              },
              {
                id: 5,
                title: "Your Choices",
                text: "<p>You can access, correct, or delete your personal information by adjusting your account settings or contacting us. You can also opt out of certain communications and location services.</p>",
              },
              {
                id: 6,
                title: "Security",
                text: "<p>We take reasonable measures to protect your information from unauthorized access, disclosure, or alteration.</p>",
              },
              {
                id: 7,
                title: "Changes to this Privacy Policy",
                text: '<p>We may update this Privacy Policy from time to time. When we make changes, we will revise the "Effective Date" at the beginning of this policy.</p>',
              },
              {
                id: 8,
                title: "Contact Us",
                text: '<p>If you have questions or concerns about this Privacy Policy, please contact us at Tel : 7782278771.</p><p>By using Ochatt, you consent to the terms of this Privacy Policy.</p><p>Ochatt</p> <a class="linkStyle" target="_parent" href="mailto:info@ochatt.com">info@ochatt.com</a>',
              },
            ],
            termsTitle: "قوانین و مقررات",
            terms: [
              {
                id: 1,
                title: "User Agreement: ",
                text: "<p>By downloading and using the app, users agree to abide by the terms and conditions outlined herein.</p>",
              },
              {
                id: 2,
                title: "Intellectual Property: ",
                text: "<p>All content, including but not limited to text, graphics, logos, and images, are the property of “NEW” and protected by applicable copyright and trademark laws.</p>",
              },
              {
                id: 3,
                title: "Usage Restrictions: ",
                text: "<p>Users agree not to misuse the app, engage in illegal activities, or violate the rights of others while using the app.</p>",
              },
              {
                id: 4,
                title: "Privacy Policy: ",
                text: "<p>Users' privacy is important to us. Our privacy policy outlines how we collect, use, and disclose personal information. By using the app, users consent to the collection and use of their information as outlined in the privacy policy.</p>",
              },
              {
                id: 5,
                title: "Disclaimer of Warranties: ",
                text: '<p>The app is provided "as is" without warranties of any kind, whether express or implied. “NEW” makes no representations or warranties about the accuracy, reliability, completeness, or timeliness of the app</p>',
              },
              {
                id: 6,
                title: "Limitation of Liability: ",
                text: "<p>“NEW” shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use or inability to use the app.</p>",
              },
              {
                id: 7,
                title: "Updates and Modifications: ",
                text: "<p>“NEW” reserves the right to update, modify, or discontinue the app at any time without prior notice.</p>",
              },
              {
                id: 8,
                title: "Governing Law: ",
                text: "<p>These terms and conditions shall be governed by and construed in accordance with the laws of “NEW”, without regard to its conflict of law provisions.</p>",
              },
              {
                id: 9,
                title: "Severability: ",
                text: "<p>If any provision of these terms and conditions is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>",
              },
              {
                id: 10,
                title: "Changes to Terms and Conditions: ",
                text: "<p>“NEW” reserves the right to modify these terms and conditions at any time. Users will be notified of any changes, and continued use of the app after such modifications constitutes acceptance of the updated terms and conditions.</p>",
              },
            ],
            faqsTitle: "سوالات شما",
            home: "خانه",
          }),
          (0, n.Z)(i, "termsTitle", "قوانین و مقررات"),
          (0, n.Z)(i, "terms", [
            {
              id: 1,
              title: "User Agreement: ",
              text: "<p>By downloading and using the app, users agree to abide by the terms and conditions outlined herein.</p>",
            },
            {
              id: 2,
              title: "Intellectual Property: ",
              text: "<p>All content, including but not limited to text, graphics, logos, and images, are the property of “NEW” and protected by applicable copyright and trademark laws.</p>",
            },
            {
              id: 3,
              title: "Usage Restrictions: ",
              text: "<p>Users agree not to misuse the app, engage in illegal activities, or violate the rights of others while using the app.</p>",
            },
            {
              id: 4,
              title: "Privacy Policy: ",
              text: "<p>Users' privacy is important to us. Our privacy policy outlines how we collect, use, and disclose personal information. By using the app, users consent to the collection and use of their information as outlined in the privacy policy.</p>",
            },
            {
              id: 5,
              title: "Disclaimer of Warranties: ",
              text: '<p>The app is provided "as is" without warranties of any kind, whether express or implied. “NEW” makes no representations or warranties about the accuracy, reliability, completeness, or timeliness of the app</p>',
            },
            {
              id: 6,
              title: "Limitation of Liability: ",
              text: "<p>“NEW” shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use or inability to use the app.</p>",
            },
            {
              id: 7,
              title: "Updates and Modifications: ",
              text: "<p>“NEW” reserves the right to update, modify, or discontinue the app at any time without prior notice.</p>",
            },
            {
              id: 8,
              title: "Governing Law: ",
              text: "<p>These terms and conditions shall be governed by and construed in accordance with the laws of “NEW”, without regard to its conflict of law provisions.</p>",
            },
            {
              id: 9,
              title: "Severability: ",
              text: "<p>If any provision of these terms and conditions is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>",
            },
            {
              id: 10,
              title: "Changes to Terms and Conditions: ",
              text: "<p>“NEW” reserves the right to modify these terms and conditions at any time. Users will be notified of any changes, and continued use of the app after such modifications constitutes acceptance of the updated terms and conditions.</p>",
            },
          ]),
          (0, n.Z)(i, "faqs", [
            {
              id: 1,
              title: "NEW چیست؟",
              text: "<p>NEW یک مدل نوین هوش مصنوعی است که از روشهای به روز یادگیری ماشین برای پیش بینی قیمت سنگ آهن و تحلیل بازار استفاده میکند. با NEW روند بازار پیش روی شماست، از آن برای بهبود تجارت خود استفاده کنید. NEW به طور  پیوسته داده های بازار را مورد تحلیل قرار میدهد تا نتایج به روز در اختیار شما قرارگیرد.</p>",
            },
            {
              id: 2,
              title: "چه طور میتوانم از NEW استفاده کنم؟",
              text: "<p>با عضویت در نیو میتواند از NEW استفاده کنید</p>",
            },
            {
              id: 3,
              title:
                "آیا می توانم درخواست بازپرداخت هزینه عضویت را داشته باشم؟ ",
              text: "<p>خیر. بازپرداخت وجه امکان پذیر نخواهد بود.</p>",
            },
            {
              id: 4,
              title: "چطور میتوانم با NEW همکاری کنیم؟ ",
              text: "<p>ما در NEW به چرخش اطالعات و همکاری با متخصصان معتقدیم. پس برای همکاری با ما تماس حاصل نمایید. </p>",
            },
          ]),
          (0, n.Z)(i, "pwa", {
            pointData: {
              date: "تاریخ",
              price: "قیمت",
              description: "توضیحات",
            },
            title: "پروفایل",
            notLogin: {
              title: "به نیو خوش آمدید",
              text: "لورم ایپسوم متن ساختگی است،",
              menu: [
                {
                  id: 1,
                  name: "ورود با حساب کاربری  ",
                  text: "قبلا ثبت نام کرده‌ام.",
                  href: "/pwa/login",
                },
                {
                  id: 2,
                  name: "ثبت‌نام ",
                  text: "ایجاد حساب کابری",
                  href: "/pwa/signup",
                },
              ],
            },
            isLogin: {
              guide: {
                title: "راهنمای نمودار",
                noticedButton: "متوجه شدم",
                closeButton: "بستن",
                next: "بعدی",
                prev: "قبلی",
                levels: [
                  {
                    id: 1,
                    title: "level1",
                    text: "با کلیک بر روی این دکمه نمودار را به صورت تمام صفحه مشاهده می‌کنید.",
                    src: "/imgs/pwa/1.png",
                  },
                  {
                    id: 2,
                    title: "level2",
                    text: " با کلیک بر روی پرچم اطلاعات بیشتری از نقطه موردنظر مشاهده می‌کنید. ",
                    src: "/imgs/pwa/2.png",
                  },
                  {
                    id: 3,
                    title: "level3",
                    text: "با کشیدن نوار بزرگنمایی نمودار تغییر می‌کند. ",
                    src: "/imgs/pwa/3.png",
                  },
                ],
              },
              show: "نمایش:",
              periodList: [
                {
                  id: 1,
                  title: "یک ماه",
                  faName: "یک ماه",
                  startDate: dateToYMD(new Date()),
                  endDate: dateToYMD(
                    new Date(new Date().setMonth(new Date().getMonth() + 1))
                  ),
                },
                {
                  id: 3,
                  title: "۶ ماه",
                  faName: "۶ ماه",
                  startDate: dateToYMD(new Date()),
                  endDate: dateToYMD(
                    new Date(new Date().setMonth(new Date().getMonth() + 6))
                  ),
                },
                {
                  id: 5,
                  title: "یک سال",
                  faName: "یک سال",
                  startDate: dateToYMD(new Date()),
                  endDate: dateToYMD(
                    new Date(
                      new Date().setFullYear(new Date().getFullYear() + 1)
                    )
                  ),
                },
                {
                  id: 6,
                  title: "همه",
                  faName: "همه",
                  startDate: dateToYMD(new Date()),
                  endDate: dateToYMD(
                    new Date(
                      new Date().setFullYear(new Date().getFullYear() + 20)
                    )
                  ),
                },
              ],
              menu: [
                {
                  id: 1,
                  text: "خانه",
                  href: "/pwa",
                  icon: (0, s.jsx)(a.Z.homeIcon, {
                    fill: "rgba(28, 57, 187, 1)",
                    className: "noFilterSvg",
                  }),
                  iconUnactive: (0, s.jsx)(a.Z.homeIcon, {
                    fill: "rgba(103, 109, 117, 1)",
                    className: "noFilterSvg",
                  }),
                },
                {
                  id: 2,
                  text: "تحلیل",
                  href: "/pwa/analytics",
                  icon: (0, s.jsx)(a.Z.analyticsIcon, {
                    fill: "rgba(28, 57, 187, 1)",
                    className: "noFilterSvg",
                  }),
                  iconUnactive: (0, s.jsx)(a.Z.analyticsIcon, {
                    fill: "rgba(103, 109, 117, 1)",
                    className: "noFilterSvg",
                  }),
                },
                {
                  id: 3,
                  text: "بسته‌ها",
                  href: "/pwa/packages",
                  icon: (0, s.jsx)(a.Z.packagesIcon, {
                    fill: "rgba(28, 57, 187, 1)",
                    className: "noFilterSvg",
                  }),
                  iconUnactive: (0, s.jsx)(a.Z.packagesIcon, {
                    fill: "rgba(103, 109, 117, 1)",
                    className: "noFilterSvg",
                  }),
                },
                {
                  id: 4,
                  text: "پروفایل",
                  href: "/pwa/profile",
                  icon: (0, s.jsx)(a.Z.profileIcon, {
                    fill: "rgba(28, 57, 187, 1)",
                    className: "noFilterSvg",
                  }),
                  iconUnactive: (0, s.jsx)(a.Z.profileIcon, {
                    fill: "rgba(103, 109, 117, 1)",
                    className: "noFilterSvg",
                  }),
                },
              ],
              sources: "منابع",
              mostFav: "نمودار‌های مورد علاقه",
              timeLine: "نمودار زمانی",
              profileManagement: " مدیریت پروفایل ",
              profile: {
                menu: [
                  {
                    id: 1,
                    title: "زبان",
                    icon: (0, s.jsx)(a.Z.globalIcon, {}),
                    href: "",
                  },
                  {
                    id: 4,
                    title: "ویرایش پروفایل",
                    icon: (0, s.jsx)(a.Z.editIcon, {}),
                    href: "/pwa/edit-profile",
                  },
                  {
                    id: 5,
                    title: "ویرایش گذر واژه",
                    icon: (0, s.jsx)(a.Z.lockIcon, {}),
                    href: "/pwa/edit-password",
                  },
                  {
                    id: 6,
                    title: "تاریخچه",
                    icon: (0, s.jsx)(a.Z.clockIcon, {}),
                    href: "/pwa/your-history",
                  },
                  {
                    id: 2,
                    title: "تماس با ما",
                    icon: (0, s.jsx)(a.Z.mobileIcon, {}),
                    href: "/pwa/contact",
                  },
                  {
                    id: 7,
                    title: "خروج",
                    icon: (0, s.jsx)(a.Z.logoutIcon, {}),
                    href: "",
                  },
                  {
                    id: 8,
                    title: "حذف حساب کاربری",
                    icon: (0, s.jsx)(a.Z.DeleteAccount, {}),
                    href: "",
                  },
                ],
              },
              about: {
                aboutTitle: "درباره ما",
                title: "درباره ما:",
                text: [
                  {
                    id: 1,
                    title: "",
                    text: "<p>NEW یک عامل هوش مصنوعی است که با مشارک یک تیم مهندسی با رهبری آقای دکتر کیوان جعفری طرانی در اردیبهشت ماه سال 1402 مصادف با 20 امین سالگرد تاسیس شرکت جامع تجارت فعالیت خود را آغاز نمود. </p>",
                  },
                  {
                    id: 2,
                    title: "",
                    text: "<p>NEW از روشهای نوین هوش مصنوعی و یادگیری ماشین و داده های تاریخی سنگ آهن برای مدلسازی بازار و پیش بینی قیمت سنگ   آهن استفاده میکند.</p>",
                  },
                  {
                    id: 3,
                    title: "",
                    text: "<p>در حال حاضر اولین ویرایش NEW در خرداد ماه 1403 عرضه اشت. هدف ما ارائه یک مدل برای تصمیم گیری بر مبنای داده در بازار تجارت مواد معدنی است. با این هدف، تیم ما معتقد است که NEW در تجارت مواد معدنی با افزایش تعامل تجاران و بازار تاثیر مثبی در این سیستم ایجاد نماید. ما بر این باوریم که هوش مصنوعی میتواند به شرکت ها برای مدیریت همه جانبههای کسب و کار آنها  کمک نماید</p>",
                  },
                  {
                    id: 4,
                    title: "",
                    text: "<p>تیم NEW</p>",
                  },
                ],
              },
              contact: {
                title: "تماس با ما",
                description:
                  "لطفا سوالات، ایده ها و پیشنهادهای خود را با ما درمیان بگذارید.",
                form: {
                  fullName: {
                    name: "نام و نام خانودگی ",
                    placeholder: " نام و نام خانودگی خود را وارد کنید.",
                  },
                  email: {
                    name: "ایمیل",
                    placeholder: "ایمیل خود را وارد کنید.",
                    notValid: "ایمیل معتبر نیست.",
                  },
                  phoneNumber: {
                    name: "شماره موبایل",
                    placeholder: "شماره موبایل خود را وارد کنید.",
                    notValid: "شماره موبایل معتبر نیست.",
                  },
                  messageType: {
                    name: "نوع پیام",
                    placeholder: "نوع پیام را مشخص کنید.",
                    error: "نوع پیام را مشخص کنید.",
                  },
                  company: {
                    name: "نام شرکت",
                    placeholder: "نام شرکت را وارد کنید",
                  },
                  text: {
                    name: "متن پیام",
                    placeholder: "پیام خود را وارد کنید.",
                  },
                  button: "ارسال پیام",
                  messageTypes: [
                    {
                      id: 1,
                      title: "مدیریت",
                      name: "مدیریت",
                    },
                    {
                      id: 2,
                      title: "پشتیبانی",
                      name: "پشتیبانی",
                    },
                  ],
                },
              },
              product: {
                title: "محصولات ",
                packages: " بسته‌ها",
                add: "افزودن",
                remove: "حذف",
                pay: "پرداخت",
                continue: "ادامه",
                error: "محصول را انتخاب کنید.",
                errorPayment: "محصول و بسته را انتخاب کنید",
              },
              changePassword: {
                title: "ویرایش رمز عبور",
                description:
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و تکنولوژی موردگ",
                form: {
                  prevPass: {
                    name: "رمز عبور قبلی",
                    placeholder: "رمز عبور قبلی خود را وارد کنید",
                  },
                  newPass: {
                    name: "رمز عبور جدید",
                    placeholder: "رمز عبور جدید خود را وارد کنید",
                  },
                  reNewPass: {
                    name: "تکرار رمز عبور",
                    placeholder: "رمز عبور جدید را مجدد وارد کنید",
                    notValid: "عدم تطابق پسورد‌ها",
                  },
                  button: "تغییر رمز عبور",
                },
              },
              editProfile: {
                title: "ویرایش پروفایل",
                description:
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و تکنولوژی موردگ",
                form: {
                  fullName: {
                    name: "نام ",
                    placeholder: "نام کاربری خود را وارد کنید",
                  },
                  email: {
                    name: "ایمیل",
                    placeholder: "ایمیل خود را وارد کنید",
                    notValid: "ایمیل نامعتبر است",
                  },
                  company: {
                    name: "نام شرکت",
                    placeholder: "نام شرکت را وارد کنید",
                  },
                  field: {
                    name: "حوزه کاری",
                    placeholder: "حوزه کاری خود را مشخص کنید",
                  },
                  education: {
                    name: "تحصیلات",
                    placeholder: "تحصیلات خود را وارد کنید",
                  },
                  country: {
                    name: "نام کشور",
                    placeholder: "کشور را انتخاب کنید",
                  },
                  button: "ویرایش پروفایل",
                },
              },
              history: {
                title: "تراکنش‌ها",
                startDate: "تاریخ شروع",
                endDate: "تاریخ پایان",
                productName: "محصول",
                invoiceNumber: "شماره تراکنش",
                success: "موفق",
                fail: "ناموفق",
                notFound: "فاکتور یافت نشد.",
                filters: [
                  {
                    id: 1,
                    title: "همه",
                    statusId: "",
                    sort: "",
                  },
                  {
                    id: 2,
                    title: "موفق",
                    statusId: 1,
                    sort: "",
                  },
                  {
                    id: 3,
                    title: "ناموفق",
                    statusId: 2,
                    sort: "",
                  },
                  {
                    id: 4,
                    title: "جدیدترین",
                    statusId: "",
                    sort: "desc",
                  },
                  {
                    id: 5,
                    title: "قدیمی‌ترین",
                    statusId: "",
                    sort: "asc",
                  },
                ],
              },
              invoice: {
                title: "فاکتور",
                pay: "پرداخت",
                singlePay: "پرداخت",
                paypalPay: "پرداخت با پیپل",
                regularPay: "پرداخت معمولی",
              },
            },
          }),
          i),
        l = {
          chartprice: "price",
          chartPredictedPrice: "Predicted price",
          mave: "Mave",
          today: "today",
          signupText: "Sign up",
          view: "View",
          subscribe: "Subscribe",
          toman: "T",
          totalAmount: "Total Amount",
          amount: "Amount",
          totalDiscount: " Total Discount",
          deleteAccount: {
            title: "",
            description: "Are you sure you want to delete your account?",
            confirmText: "Yes",
            rejectText: "No",
            reason: "The reason to delete your account",
            reasonTitle: "Could you please tell us why?",
          },
          discount: {
            name: "Discount Code",
            placeholder: "Enter Discount code",
          },
          login: {
            description: "Enter your user Information to enter",
            toSignup: {
              description: "Haven’t registered yet? ",
              button: " Register ",
            },
            title: "Login",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing.",
            formButton: "Sign in",
            mobile: "Phone Number",
            mobileError: "phone number is wrong",
            mobilePlaceHolder: "example: 9xxxxxxxx",
            password: "Password",
            passwordError: "password is wrong",
            forgetButton: " Forget password? ",
            createAccount: {
              description:
                "Register in OChatt to use OChatt facilities such as uploading videos, leaving comments, etc.",
              title: "enter OChatt",
              button: "create Account",
            },
          },
          countryCode: {
            error: "your country is not supported",
            code: "Code",
            placeholder: "98",
          },
          signup: {
            title: "Sign up",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing.",
            mobile: {
              title: "Step 1 / 2: enter mobile number",
              description: "Enter your mobile phone number to register.",
              button: "Send verification code",
              input: {
                placeholder: "Example: 9xxxxxxxxx",
                title: " Phone number ",
                error: "The mobile phone is incorrect",
              },
            },
            code: {
              title: "OTP authentication",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing.",
              button: "Confirm and continue",
              input: {
                placeholder: "Example: 9xxxxxxxxx",
                title: "Verification code",
                error: "Enter the received code as a four-digit number.",
              },
              resend: " Resend code",
              preResend: "Didn’t receive the code?",
            },
            success: {
              title: "Sign up",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing.",
              button: "Sign up",
              nameInput: {
                placeholder: "Enter your you full name",
                title: "Full name",
                error: "Enter your you full name",
              },
              passwordInput: {
                placeholder: "Enter your password",
                title: "Password",
                error: "Enter your password",
              },
            },
          },
          forgetpassword: {
            mobile: {
              title: "Forget password",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing.",
              button: "Send verification code",
              input: {
                placeholder: "Example: 9xxxxxxxxx",
                title: " Phone number ",
                error: "The mobile phone is incorrect",
              },
            },
            code: {
              title: "OTP authentication",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing.",
              button: "Confirm and continue",
              input: {
                placeholder: "Example: 9xxxxxxxxx",
                title: "Verification code",
                error: "Enter the received code as a four-digit number.",
              },
            },
            success: {
              title: "Create new password",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing.",
              button: "Submit ",
              passwordInput: {
                placeholder: "Enter your password",
                title: "Password",
                error: "Enter your password",
              },
              confirmPasswordInput: {
                placeholder: "Enter your password",
                title: "Confirm Password",
                error: "Enter your password",
              },
            },
          },
          changePassword: {
            prePass: {
              title: "Previous password",
              error: "Enter the previous password.",
            },
            newPass: {
              title: "New password",
              error: "Enter the new password.",
            },
            reNewPass: {
              title: "Repeat the new password",
              error: "Re-enter the new password.",
            },
            notMatch: "Password and Confirm password does not match.",
            submit: "submit",
          },
          haveAccount: {
            title: "Already have an account? ",
            button: "Sign in",
          },
          hero: {
            title: {
              row1: {
                text1: {
                  one: "THE ",
                  two: "FUTURE ",
                  three: "OF ",
                  four: "MINERAL MARKET ",
                  five: "IS HERE WITH",
                },
                text2: "NEW",
                animate: "is NEW",
                text3: {
                  one: "Your",
                  two: " AI ",
                  three: " partner",
                },
              },
            },
            text2: "Try it now!",
            text: "NEW, an innovative and user-friendly AI model that uses cutting-edge machine learning techniques to predict Iron ore prices and analyze the market. NEW is revolutionizing AI technology in business at all levels. Your AI partner!",
          },
          features: {
            title: "NEW knows what you are looking for",
            text: "",
            array: [
              {
                id: 1,
                title: "Market Trends Analysis",
                src: "/imgs/features/business.svg",
                text: "Mapping market trends can be a game-changer for any business. Monitoring changes in the market will help you to identify patterns and opportunities. ",
              },
              {
                id: 2,
                title: "Risk Management",
                src: "/imgs/features/predict.svg",
                text: "With NEW, Protect your asset and reputation in the increasing complexities of the business environment.",
              },
              {
                id: 3,
                title: "Advanced Machine learning in market and business",
                src: "/imgs/features/ml.svg",
                text: "NEW is a platform leverages machine learning and statistical models to make changes in the mineral trade industry.",
              },
            ],
          },
          overView: {
            title: "Video on NEW",
            text: "",
            array: [
              {
                id: 1,
                title: "",
                src: "/imgs/overview/simple.png",
                text: "Please click on this video to see more.",
                text2:
                  "NEW, a novel AI model that uses cutting-edge machine learning techniques to predict Iron ore  prices. NEW is revolutionizing AI technology in business at all levels. Your AI partner that  predicts Iron ore prices for develop and transfer your business.",
                text3:
                  " Here are some advantages choosing NEW as your AI partner:",
                items: [
                  {
                    id: 1,
                    text: "Alongside AL, ML statistical learning and historical data, we used the strong background of Dr. Keyvan Jafari Tehrani in mineral trade and business to model the market behaviors.",
                  },
                  {
                    id: 2,
                    text: "NEW is adjusted to the market movements, therefore, it will help you grow your business by finding opportunities and managing risks.",
                  },
                  {
                    id: 3,
                    text: "NEW will warn you if there is a risk of sudden fluctuation.",
                  },
                ],
              },
            ],
          },
          download: {
            title: {
              text1: "Get this APP now ",
            },
            text: "NEW is available on both Google play and App Store. To change your business download it now",
          },
          footer: {
            title: "New",
            text: "Track market trends and manage your workflow across all your business systems with NEW continuously analyzing the market data for what matters to every business. Start with NEW now!",
            rights: "All Rights Reserve",
            rightsLink: "Lotus Pioneers",
            rights2: "",
            col2: {
              title: "Pages",
              links: [
                {
                  aLink: "/faqs",
                  aTitle: "FAQs",
                  text: "FAQs",
                },
                {
                  aLink: "/about-us",
                  aTitle: "About us",
                  text: "About us",
                },
                {
                  aLink: "/terms-conditions",
                  aTitle: "Terms & Conditions",
                  text: "Terms & Conditions",
                },
              ],
            },
            col3: {
              title: "Contact us",
              links: [
                {
                  aLink: "/",
                  text: "Hair Transplant Costs",
                  aTitle: "MedoTopia Hair Transplant Costs",
                },
                {
                  aLink: "/",
                  text: "Rhinoplasty Costs",
                  aTitle: "MedoTopia Rhinoplasty Costs",
                },
                {
                  aLink: "/",
                  text: "Liposuction Costs",
                  aTitle: "MedoTopia Liposuction Costs",
                },
                {
                  aLink: "/",
                  text: "Liposuction Costs",
                  aTitle: "MedoTopia Liposuction Costs",
                },
                {
                  aLink: "/",
                  text: "Liposuction Costs",
                  aTitle: "MedoTopia Liposuction Costs",
                },
                {
                  aLink: "/",
                  text: "Liposuction Costs",
                  aTitle: "MedoTopia Liposuction Costs",
                },
                {
                  aLink: "/",
                  text: "Liposuction Costs",
                  aTitle: "MedoTopia Liposuction Costs",
                },
              ],
            },
            contactUs: {
              location: {
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                image: "/imgs/home/footer/medoTopia-location.svg",
                imageAlt:
                  "Unit 506, 5th Floor, Samarghand Complex, Jannat Abad, Tehran",
                icon: (0, s.jsx)(a.Z.locationIcon, {
                  width: 24,
                  height: 24,
                }),
              },
              phone: {
                text: "7782278771",
                image: "/imgs/home/footer/medoTopia-mobile.svg",
                imageAlt: "021-46135517",
                icon: (0, s.jsx)(a.Z.mobileIcon, {
                  width: 22,
                  height: 22,
                }),
              },
            },
            socialMedia: [
              {
                id: 1,
                image: "/imgs/home/footer/linkedin.svg",
                imageAlt: "linkedIn",
                url: "/",
                urlTitle: "linkedIn",
              },
              {
                id: 2,
                image: "/imgs/home/footer/contactus.svg",
                imageAlt: "contact us",
                url: "",
                urlTitle: "contact us",
              },
            ],
            bottomPart: {
              text: "NEW is available on both Google play and App Store. To change your business download it now!",
            },
          },
          termsTitle: "Terms & conditions",
          terms: [
            {
              id: 1,
              title: "User Agreement: ",
              text: "<p>By downloading and using the app, users agree to abide by the terms and conditions outlined herein.</p>",
            },
            {
              id: 2,
              title: "Intellectual Property: ",
              text: "<p>All content, including but not limited to text, graphics, logos, and images, are the property of “NEW” and protected by applicable copyright and trademark laws.</p>",
            },
            {
              id: 3,
              title: "Usage Restrictions: ",
              text: "<p>Users agree not to misuse the app, engage in illegal activities, or violate the rights of others while using the app.</p>",
            },
            {
              id: 4,
              title: "Privacy Policy: ",
              text: "<p>Users' privacy is important to us. Our privacy policy outlines how we collect, use, and disclose personal information. By using the app, users consent to the collection and use of their information as outlined in the privacy policy.</p>",
            },
            {
              id: 5,
              title: "Disclaimer of Warranties: ",
              text: '<p>The app is provided "as is" without warranties of any kind, whether express or implied. “NEW” makes no representations or warranties about the accuracy, reliability, completeness, or timeliness of the app</p>',
            },
            {
              id: 6,
              title: "Limitation of Liability: ",
              text: "<p>“NEW” shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use or inability to use the app.</p>",
            },
            {
              id: 7,
              title: "Updates and Modifications: ",
              text: "<p>“NEW” reserves the right to update, modify, or discontinue the app at any time without prior notice.</p>",
            },
            {
              id: 8,
              title: "Governing Law: ",
              text: "<p>These terms and conditions shall be governed by and construed in accordance with the laws of “NEW”, without regard to its conflict of law provisions.</p>",
            },
            {
              id: 9,
              title: "Severability: ",
              text: "<p>If any provision of these terms and conditions is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>",
            },
            {
              id: 10,
              title: "Changes to Terms and Conditions: ",
              text: "<p>“NEW” reserves the right to modify these terms and conditions at any time. Users will be notified of any changes, and continued use of the app after such modifications constitutes acceptance of the updated terms and conditions.</p>",
            },
          ],
          faqsTitle: "FAQs",
          home: "Home",
          faqs: [
            {
              id: 1,
              title: "What is NEW?",
              text: "<p>NEW, a novel AI model that uses cutting-edge machine learning techniques to predict Iron ore prices and analyze the market.</p><p>Track market trends and manage your workflow across all your business systems with NEW continuously analyzing the market data for what matters to every business</p>",
            },
            {
              id: 2,
              title: "How can be a member?",
              text: "<p>Sign in to become a member and enjoy your free trial</p>",
            },
            {
              id: 3,
              title: "Can I withdraw my payment?",
              text: "<p>No, payment withdrawal is not possible.</p>",
            },
            {
              id: 4,
              title: "How we can cooperate?",
              text: "<p>We believe in the circulation of information and cooperation. Therefore, we welcome any suggestion of cooperation. Please do not hesitate to contact us!</p>",
            },
          ],
          pwa: {
            pointData: {
              date: "Date",
              price: "Price",
              description: "Description",
            },
            title: "Profile",
            notLogin: {
              title: "Welcome to New!",
              text: "This will take just a few minutes.",
              menu: [
                {
                  id: 1,
                  name: "Continue with my account! ",
                  text: "I started before and want to continue.",
                  href: "/pwa/login",
                },
                {
                  id: 2,
                  name: "Get Started! ",
                  text: "Use our various data for your business.",
                  href: "/pwa/signup",
                },
              ],
            },
            isLogin: {
              guide: {
                title: "Table Guide",
                noticedButton: "I've noticed",
                closeButton: "Close",
                next: "Next",
                prev: "Previous",
                levels: [
                  {
                    id: 1,
                    title: "level1",
                    text: "Click this button to fullscreen the chart.",
                    src: "/imgs/pwa/1.png",
                  },
                  {
                    id: 2,
                    title: "level2",
                    text: "Click the flag to see more information about this point",
                    src: "/imgs/pwa/2.png",
                  },
                  {
                    id: 3,
                    title: "level3",
                    text: "drag the navigation bar to zoom in/out the chart",
                    src: "/imgs/pwa/3.png",
                  },
                ],
              },
              show: "Show:",
              periodList: [
                {
                  id: 1,
                  title: "1 month",
                  faName: "1 month",
                  startDate: dateToYMD(new Date()),
                  endDate: dateToYMD(
                    new Date(new Date().setMonth(new Date().getMonth() + 1))
                  ),
                },
                {
                  id: 3,
                  title: "6 months",
                  faName: "6 months",
                  startDate: dateToYMD(new Date()),
                  endDate: dateToYMD(
                    new Date(new Date().setMonth(new Date().getMonth() + 6))
                  ),
                },
                {
                  id: 5,
                  title: "1 year",
                  faName: "1 year",
                  startDate: dateToYMD(new Date()),
                  endDate: dateToYMD(
                    new Date(
                      new Date().setFullYear(new Date().getFullYear() + 1)
                    )
                  ),
                },
                {
                  id: 6,
                  title: "all",
                  faName: "all",
                  startDate: dateToYMD(new Date()),
                  endDate: dateToYMD(
                    new Date(
                      new Date().setFullYear(new Date().getFullYear() + 20)
                    )
                  ),
                },
              ],
              menu: [
                {
                  id: 1,
                  text: "Home",
                  href: "/pwa",
                  icon: (0, s.jsx)(a.Z.homeIcon, {
                    fill: "rgba(28, 57, 187, 1)",
                    className: "noFilterSvg",
                  }),
                  iconUnactive: (0, s.jsx)(a.Z.homeIcon, {
                    fill: "rgba(103, 109, 117, 1)",
                    className: "noFilterSvg",
                  }),
                },
                {
                  id: 2,
                  text: "Analytics",
                  href: "/pwa/analytics",
                  icon: (0, s.jsx)(a.Z.analyticsIcon, {
                    fill: "rgba(28, 57, 187, 1)",
                    className: "noFilterSvg",
                  }),
                  iconUnactive: (0, s.jsx)(a.Z.analyticsIcon, {
                    fill: "rgba(103, 109, 117, 1)",
                    className: "noFilterSvg",
                  }),
                },
                {
                  id: 3,
                  text: "Packages",
                  href: "/pwa/packages",
                  icon: (0, s.jsx)(a.Z.packagesIcon, {
                    fill: "rgba(28, 57, 187, 1)",
                    className: "noFilterSvg",
                  }),
                  iconUnactive: (0, s.jsx)(a.Z.packagesIcon, {
                    fill: "rgba(103, 109, 117, 1)",
                    className: "noFilterSvg",
                  }),
                },
                {
                  id: 4,
                  text: "Profile",
                  href: "/pwa/profile",
                  icon: (0, s.jsx)(a.Z.profileIcon, {
                    fill: "rgba(28, 57, 187, 1)",
                    className: "noFilterSvg",
                  }),
                  iconUnactive: (0, s.jsx)(a.Z.profileIcon, {
                    fill: "rgba(103, 109, 117, 1)",
                    className: "noFilterSvg",
                  }),
                },
              ],
              sources: "Sources",
              mostFav: "Most Favorite Charts",
              timeLine: "TimeLine",
              profileManagement: "Profile Management",
              profile: {
                menu: [
                  {
                    id: 1,
                    title: "Language",
                    icon: (0, s.jsx)(a.Z.globalIcon, {}),
                    href: "",
                  },
                  {
                    id: 4,
                    title: "Edit Profile",
                    icon: (0, s.jsx)(a.Z.editIcon, {}),
                    href: "/pwa/edit-profile",
                  },
                  {
                    id: 5,
                    title: "Edit Password",
                    icon: (0, s.jsx)(a.Z.lockIcon, {}),
                    href: "/pwa/edit-password",
                  },
                  {
                    id: 6,
                    title: "Your History",
                    icon: (0, s.jsx)(a.Z.clockIcon, {}),
                    href: "/pwa/your-history",
                  },
                  {
                    id: 2,
                    title: "Contact us",
                    icon: (0, s.jsx)(a.Z.mobileIcon, {}),
                    href: "/pwa/contact",
                  },
                  {
                    id: 7,
                    title: "Log out",
                    icon: (0, s.jsx)(a.Z.logoutIcon, {}),
                    href: "",
                  },
                  {
                    id: 8,
                    title: "Delete Account",
                    icon: (0, s.jsx)(a.Z.DeleteAccount, {}),
                    href: "",
                  },
                ],
              },
              about: {
                aboutTitle: "About us:",
                title: "درباره ما:",
                text: [
                  {
                    id: 1,
                    title: "",
                    text: "<p>NEW is an AI agent created by a team of engineers under the supervision of Dr. Keyvan Jafari Tehrani started on May 2023, on the 20th birthday of the JTC Company.</p>",
                  },
                  {
                    id: 2,
                    title: "",
                    text: "<p>NEW uses cutting-edge AI, ML, statistical methods, and historical data on Iron ore for modeling the Market and predicting Iron ore prices. </p>",
                  },
                  {
                    id: 3,
                    title: "",
                    text: "<p>This is our first release of NEW, on May 2024, to develop the market analysis using AI. Our goal  is to offer a method for data-driven decision-making for the mineral trade industry. With that in   mind, the team behind NEW is confident that we can make a positive impact on improving the   mineral trade business by increasing human-market interaction. We believe that AI will help every company thrive and manage every aspect of mineral trade business.</p>",
                  },
                  {
                    id: 4,
                    title: "",
                    text: "<p>Stay tuned for more of our model and application launches coming up!</p>",
                  },
                  {
                    id: 5,
                    title: "",
                    text: "<p>NEW Team</p>",
                  },
                ],
              },
              contact: {
                title: "Contact us",
                description:
                  "If you have any questions or any innovative ideas, please contact us.",
                form: {
                  fullName: {
                    name: "Full Name",
                    placeholder: "Enter your full name",
                  },
                  email: {
                    name: "Email",
                    placeholder: "Enter your Email",
                    notValid: "Email address is not valid.",
                  },
                  phoneNumber: {
                    name: "Phone Number",
                    placeholder: "Enter your phone number",
                    notValid: "Phone Number is not valid.",
                  },
                  messageType: {
                    name: "Type of Message",
                    placeholder: "Select your type of message",
                    error: "Select your type of message",
                  },
                  company: {
                    name: "Company’s name",
                    placeholder: "Enter company’s name",
                  },
                  text: {
                    name: "Text box",
                    placeholder: "Enter your message",
                  },
                  button: "Send the message",
                  messageTypes: [
                    {
                      id: 1,
                      title: "Management",
                      name: "Management",
                    },
                    {
                      id: 2,
                      title: "Support",
                      name: "Support",
                    },
                  ],
                },
              },
              product: {
                title: "Our Products",
                packages: "Our Packages",
                add: "Add",
                remove: "Remove",
                pay: "Pay",
                continue: "Continue the process",
                error: "No product is Chosen",
                errorPayment: "Choose product and package",
              },
              changePassword: {
                title: "Edit password",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing.",
                form: {
                  prevPass: {
                    name: "Your previous password",
                    placeholder: "Enter your previous password",
                  },
                  newPass: {
                    name: "New password",
                    placeholder: "Enter your new password",
                  },
                  reNewPass: {
                    name: "Confirm password",
                    placeholder: "Enter your new password",
                    notValid: "New Passwords does not match.",
                  },
                  button: "Change password",
                },
              },
              editProfile: {
                title: "Edit profile",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing.",
                form: {
                  fullName: {
                    name: "Full Name",
                    placeholder: "Enter your full name",
                  },
                  email: {
                    name: "Email",
                    placeholder: "Enter your Email",
                    notValid: "Email address is not valid.",
                  },
                  company: {
                    name: "Company’s name",
                    placeholder: "Enter company’s name",
                  },
                  field: {
                    name: "Field of work",
                    placeholder: "Enter your Field of work",
                  },
                  education: {
                    name: "Education",
                    placeholder: "Enter your education",
                  },
                  country: {
                    name: "Country’s name",
                    placeholder: "Select your country",
                  },
                  button: "Edit profile",
                },
              },
              history: {
                title: "Invoices",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing.",
                startDate: "Started date",
                endDate: "Expired date",
                productName: "Product",
                invoiceNumber: "invoice Number",
                success: "successful",
                fail: "unsuccessful",
                notFound: "No invoice found.",
                filters: [
                  {
                    id: 1,
                    title: "All histories",
                    statusId: "",
                    sort: "",
                  },
                  {
                    id: 2,
                    title: "successfull",
                    statusId: 1,
                    sort: "",
                  },
                  {
                    id: 3,
                    title: "unSuccessfull",
                    statusId: 2,
                    sort: "",
                  },
                  {
                    id: 4,
                    title: "latest",
                    statusId: "",
                    sort: "desc",
                  },
                  {
                    id: 5,
                    title: "oldest",
                    statusId: "",
                    sort: "asc",
                  },
                ],
              },
              invoice: {
                title: "Invoice",
                pay: "Pay now",
                singlePay: "Pay",
                paypalPay: "Pay with Paypal",
                regularPay: "Pay regularly",
              },
            },
          },
        },
        c = {},
        chooseLanguage = function () {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "fa";
          return null ===
            (e = [
              {
                id: 1,
                content: r,
                name: "fa",
                dir: "rtl",
              },
              {
                id: 2,
                content: l,
                name: "en",
                dir: "ltr",
              },
              {
                id: 2,
                content: c,
                name: "ar",
                dir: "rtl",
              },
            ].filter(function (e) {
              return e.name == t;
            })) || void 0 === e
            ? void 0
            : e[0];
        };
    },
    4007: function (e, t, o) {
      "use strict";
      var i,
        n = o(9499);
      o(7294);
      var a = o(5893),
        s =
          ((i = {
            enjoyIcon: function (e) {
              var t = e.width,
                o = e.height,
                i = (e.className, e.onClick, e.fill);
              return (0, a.jsx)("svg", {
                width: void 0 === t ? "568px" : t,
                height: void 0 === o ? "215px" : o,
                viewBox: "0 0 568 215",
                fill: void 0 === i ? "#5357B9" : i,
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, a.jsx)("path", {
                  d: "M34.6 48V76.4H80.4V102.8H34.6V133.6H86.4V161H0.400001V20.6H86.4V48H34.6ZM182.603 48.2C195.67 48.2 206.07 52.4667 213.803 61C221.67 69.4 225.603 81 225.603 95.8V161H191.603V100.4C191.603 92.9333 189.67 87.1333 185.803 83C181.936 78.8667 176.736 76.8 170.203 76.8C163.67 76.8 158.47 78.8667 154.603 83C150.736 87.1333 148.803 92.9333 148.803 100.4V161H114.603V49.4H148.803V64.2C152.27 59.2667 156.936 55.4 162.803 52.6C168.67 49.6667 175.27 48.2 182.603 48.2ZM272.369 37.8C266.369 37.8 261.435 36.0667 257.569 32.6C253.835 29 251.969 24.6 251.969 19.4C251.969 14.0667 253.835 9.66666 257.569 6.19999C261.435 2.59999 266.369 0.799988 272.369 0.799988C278.235 0.799988 283.035 2.59999 286.769 6.19999C290.635 9.66666 292.569 14.0667 292.569 19.4C292.569 24.6 290.635 29 286.769 32.6C283.035 36.0667 278.235 37.8 272.369 37.8ZM289.569 175.4C289.569 189.133 286.102 199 279.169 205C272.235 211.133 262.569 214.2 250.169 214.2H236.769V185.2H244.969C248.702 185.2 251.369 184.467 252.969 183C254.569 181.533 255.369 179.133 255.369 175.8V49.4H289.569V175.4ZM370.958 162.6C360.024 162.6 350.158 160.267 341.358 155.6C332.691 150.933 325.824 144.267 320.758 135.6C315.824 126.933 313.358 116.8 313.358 105.2C313.358 93.7333 315.891 83.6667 320.958 75C326.024 66.2 332.958 59.4667 341.758 54.8C350.558 50.1333 360.424 47.8 371.358 47.8C382.291 47.8 392.158 50.1333 400.958 54.8C409.758 59.4667 416.691 66.2 421.758 75C426.824 83.6667 429.358 93.7333 429.358 105.2C429.358 116.667 426.758 126.8 421.558 135.6C416.491 144.267 409.491 150.933 400.558 155.6C391.758 160.267 381.891 162.6 370.958 162.6ZM370.958 133C377.491 133 383.024 130.6 387.558 125.8C392.224 121 394.558 114.133 394.558 105.2C394.558 96.2667 392.291 89.4 387.758 84.6C383.358 79.8 377.891 77.4 371.358 77.4C364.691 77.4 359.158 79.8 354.758 84.6C350.358 89.2667 348.158 96.1333 348.158 105.2C348.158 114.133 350.291 121 354.558 125.8C358.958 130.6 364.424 133 370.958 133ZM567.502 49.4L497.502 214H460.702L486.302 157.2L440.902 49.4H479.102L504.902 119.2L530.502 49.4H567.502Z",
                  "fill-opacity": "0.04",
                }),
              });
            },
            simpleIcon: function (e) {
              var t = e.width,
                o = e.height,
                i = (e.className, e.onClick, e.fill);
              return (0, a.jsx)("svg", {
                width: void 0 === t ? "568px" : t,
                height: void 0 === o ? "215px" : o,
                fill: void 0 === i ? "#5357B9" : i,
                viewBox: "0 0 729 215",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, a.jsx)("path", {
                  d: "M55.2 162.4C44.9333 162.4 35.7333 160.733 27.6 157.4C19.4667 154.067 12.9333 149.133 8 142.6C3.2 136.067 0.666667 128.2 0.400001 119H36.8C37.3333 124.2 39.1333 128.2 42.2 131C45.2667 133.667 49.2667 135 54.2 135C59.2667 135 63.2667 133.867 66.2 131.6C69.1333 129.2 70.6 125.933 70.6 121.8C70.6 118.333 69.4 115.467 67 113.2C64.7333 110.933 61.8667 109.067 58.4 107.6C55.0667 106.133 50.2667 104.467 44 102.6C34.9333 99.8 27.5333 97 21.8 94.2C16.0667 91.4 11.1333 87.2667 7 81.8C2.86667 76.3333 0.800001 69.2 0.800001 60.4C0.800001 47.3333 5.53333 37.1333 15 29.8C24.4667 22.3333 36.8 18.6 52 18.6C67.4667 18.6 79.9333 22.3333 89.4 29.8C98.8667 37.1333 103.933 47.4 104.6 60.6H67.6C67.3333 56.0667 65.6667 52.5333 62.6 50C59.5333 47.3333 55.6 46 50.8 46C46.6667 46 43.3333 47.1333 40.8 49.4C38.2667 51.5333 37 54.6667 37 58.8C37 63.3333 39.1333 66.8667 43.4 69.4C47.6667 71.9333 54.3333 74.6667 63.4 77.6C72.4667 80.6667 79.8 83.6 85.4 86.4C91.1333 89.2 96.0667 93.2667 100.2 98.6C104.333 103.933 106.4 110.8 106.4 119.2C106.4 127.2 104.333 134.467 100.2 141C96.2 147.533 90.3333 152.733 82.6 156.6C74.8667 160.467 65.7333 162.4 55.2 162.4ZM150.647 37.8C144.647 37.8 139.714 36.0667 135.847 32.6C132.114 29 130.247 24.6 130.247 19.4C130.247 14.0667 132.114 9.66666 135.847 6.19999C139.714 2.59999 144.647 0.799988 150.647 0.799988C156.514 0.799988 161.314 2.59999 165.047 6.19999C168.914 9.66666 170.847 14.0667 170.847 19.4C170.847 24.6 168.914 29 165.047 32.6C161.314 36.0667 156.514 37.8 150.647 37.8ZM167.647 49.4V161H133.447V49.4H167.647ZM340.831 48.2C354.698 48.2 365.698 52.4 373.831 60.8C382.098 69.2 386.231 80.8667 386.231 95.8V161H352.231V100.4C352.231 93.2 350.298 87.6667 346.431 83.8C342.698 79.8 337.498 77.8 330.831 77.8C324.165 77.8 318.898 79.8 315.031 83.8C311.298 87.6667 309.431 93.2 309.431 100.4V161H275.431V100.4C275.431 93.2 273.498 87.6667 269.631 83.8C265.898 79.8 260.698 77.8 254.031 77.8C247.365 77.8 242.098 79.8 238.231 83.8C234.498 87.6667 232.631 93.2 232.631 100.4V161H198.431V49.4H232.631V63.4C236.098 58.7333 240.631 55.0667 246.231 52.4C251.831 49.6 258.165 48.2 265.231 48.2C273.631 48.2 281.098 50 287.631 53.6C294.298 57.2 299.498 62.3333 303.231 69C307.098 62.8667 312.365 57.8667 319.031 54C325.698 50.1333 332.965 48.2 340.831 48.2ZM450.35 65.2C453.683 60 458.283 55.8 464.15 52.6C470.017 49.4 476.883 47.8 484.75 47.8C493.95 47.8 502.283 50.1333 509.75 54.8C517.217 59.4667 523.083 66.1333 527.35 74.8C531.75 83.4667 533.95 93.5333 533.95 105C533.95 116.467 531.75 126.6 527.35 135.4C523.083 144.067 517.217 150.8 509.75 155.6C502.283 160.267 493.95 162.6 484.75 162.6C477.017 162.6 470.15 161 464.15 157.8C458.283 154.6 453.683 150.467 450.35 145.4V214.2H416.15V49.4H450.35V65.2ZM499.15 105C499.15 96.4667 496.75 89.8 491.95 85C487.283 80.0667 481.483 77.6 474.55 77.6C467.75 77.6 461.95 80.0667 457.15 85C452.483 89.9333 450.15 96.6667 450.15 105.2C450.15 113.733 452.483 120.467 457.15 125.4C461.95 130.333 467.75 132.8 474.55 132.8C481.35 132.8 487.15 130.333 491.95 125.4C496.75 120.333 499.15 113.533 499.15 105ZM592.092 13V161H557.892V13H592.092ZM728.077 103.4C728.077 106.6 727.877 109.933 727.477 113.4H650.077C650.61 120.333 652.81 125.667 656.677 129.4C660.677 133 665.543 134.8 671.277 134.8C679.81 134.8 685.743 131.2 689.077 124H725.477C723.61 131.333 720.21 137.933 715.277 143.8C710.477 149.667 704.41 154.267 697.077 157.6C689.743 160.933 681.543 162.6 672.477 162.6C661.543 162.6 651.81 160.267 643.277 155.6C634.743 150.933 628.077 144.267 623.277 135.6C618.477 126.933 616.077 116.8 616.077 105.2C616.077 93.6 618.41 83.4667 623.077 74.8C627.877 66.1333 634.543 59.4667 643.077 54.8C651.61 50.1333 661.41 47.8 672.477 47.8C683.277 47.8 692.877 50.0667 701.277 54.6C709.677 59.1333 716.21 65.6 720.877 74C725.677 82.4 728.077 92.2 728.077 103.4ZM693.077 94.4C693.077 88.5333 691.077 83.8667 687.077 80.4C683.077 76.9333 678.077 75.2 672.077 75.2C666.343 75.2 661.477 76.8667 657.477 80.2C653.61 83.5333 651.21 88.2667 650.277 94.4H693.077Z",
                  "fill-opacity": "0.04",
                }),
              });
            },
            locationIcon: function (e) {
              var t = e.width,
                o = e.height,
                i = e.className,
                n = (e.onClick, e.fill),
                s = void 0 === n ? "#0E0F2ACC" : n;
              return (0, a.jsxs)("svg", {
                width: void 0 === t ? "568px" : t,
                height: void 0 === o ? "215px" : o,
                fill: "none",
                viewBox: "0 0 32 32",
                xmlns: "http://www.w3.org/2000/svg",
                className: i,
                children: [
                  (0, a.jsx)("path", {
                    d: "M16.0001 17.9067C18.2976 17.9067 20.1601 16.0442 20.1601 13.7467C20.1601 11.4492 18.2976 9.58667 16.0001 9.58667C13.7026 9.58667 11.8401 11.4492 11.8401 13.7467C11.8401 16.0442 13.7026 17.9067 16.0001 17.9067Z",
                    stroke: s,
                    "stroke-width": "3",
                  }),
                  (0, a.jsx)("path", {
                    d: "M4.8266 11.32C7.45327 -0.226704 24.5599 -0.213371 27.1733 11.3333C28.7066 18.1066 24.4933 23.84 20.7999 27.3866C18.1199 29.9733 13.8799 29.9733 11.1866 27.3866C7.5066 23.84 3.29327 18.0933 4.8266 11.32Z",
                    stroke: s,
                    "stroke-width": "3",
                  }),
                ],
              });
            },
            mobileIcon: function (e) {
              var t = e.width,
                o = e.height,
                i = e.className,
                n = (e.onClick, e.fill);
              return (0, a.jsx)("svg", {
                viewBox: "0 0 30 30",
                width: void 0 === t ? "568px" : t,
                height: void 0 === o ? "215px" : o,
                className: i,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, a.jsx)("path", {
                  d: "M28.2934 23.44C28.2934 23.92 28.1867 24.4133 27.9601 24.8933C27.7334 25.3733 27.4401 25.8266 27.0534 26.2533C26.4001 26.9733 25.6801 27.4933 24.8667 27.8266C24.0667 28.16 23.2001 28.3333 22.2667 28.3333C20.9067 28.3333 19.4534 28.0133 17.9201 27.36C16.3867 26.7066 14.8534 25.8266 13.3334 24.72C11.8001 23.6 10.3467 22.36 8.96008 20.9866C7.58675 19.6 6.34675 18.1466 5.24008 16.6266C4.14675 15.1066 3.26675 13.5866 2.62675 12.08C1.98675 10.56 1.66675 9.10663 1.66675 7.71996C1.66675 6.81329 1.82675 5.94663 2.14675 5.14663C2.46675 4.33329 2.97341 3.58663 3.68008 2.91996C4.53341 2.07996 5.46675 1.66663 6.45342 1.66663C6.82675 1.66663 7.20008 1.74663 7.53342 1.90663C7.88008 2.06663 8.18675 2.30663 8.42675 2.65329L11.5201 7.01329C11.7601 7.34663 11.9334 7.65329 12.0534 7.94663C12.1734 8.22663 12.2401 8.50663 12.2401 8.75996C12.2401 9.07996 12.1467 9.39996 11.9601 9.70663C11.7867 10.0133 11.5334 10.3333 11.2134 10.6533L10.2001 11.7066C10.0534 11.8533 9.98675 12.0266 9.98675 12.24C9.98675 12.3466 10.0001 12.44 10.0267 12.5466C10.0667 12.6533 10.1067 12.7333 10.1334 12.8133C10.3734 13.2533 10.7867 13.8266 11.3734 14.52C11.9734 15.2133 12.6134 15.92 13.3067 16.6266C14.0267 17.3333 14.7201 17.9866 15.4267 18.5866C16.1201 19.1733 16.6934 19.5733 17.1467 19.8133C17.2134 19.84 17.2934 19.88 17.3867 19.92C17.4934 19.96 17.6001 19.9733 17.7201 19.9733C17.9467 19.9733 18.1201 19.8933 18.2667 19.7466L19.2801 18.7466C19.6134 18.4133 19.9334 18.16 20.2401 18C20.5467 17.8133 20.8534 17.72 21.1867 17.72C21.4401 17.72 21.7067 17.7733 22.0001 17.8933C22.2934 18.0133 22.6001 18.1866 22.9334 18.4133L27.3467 21.5466C27.6934 21.7866 27.9334 22.0666 28.0801 22.4C28.2134 22.7333 28.2934 23.0666 28.2934 23.44Z",
                  stroke: void 0 === n ? "#0E0F2ACC" : n,
                  "stroke-opacity": "0.6",
                  "stroke-width": "3",
                  "stroke-miterlimit": "10",
                }),
              });
            },
            homeIcon: function (e) {
              var t = e.width,
                o = e.height,
                i = e.className,
                n = e.onClick,
                s = e.fill,
                r = void 0 === s ? "#1C39BB" : s;
              return (0, a.jsxs)("svg", {
                viewBox: "0 0 25 24",
                width: void 0 === t ? "25px" : t,
                height: void 0 === o ? "24px" : o,
                className: i,
                onClick: n,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, a.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M12.2611 1.21065C12.6222 0.929784 13.1278 0.929784 13.4889 1.21065L22.4889 8.21065C22.7325 8.4001 22.875 8.69141 22.875 9V20C22.875 20.7957 22.5589 21.5587 21.9963 22.1213C21.4337 22.6839 20.6707 23 19.875 23H5.875C5.07935 23 4.31629 22.6839 3.75368 22.1213C3.19107 21.5587 2.875 20.7957 2.875 20V9C2.875 8.69141 3.01747 8.4001 3.26106 8.21065L12.2611 1.21065ZM4.875 9.48908V20C4.875 20.2652 4.98036 20.5196 5.16789 20.7071C5.35543 20.8946 5.60978 21 5.875 21H19.875C20.1402 21 20.3946 20.8946 20.5821 20.7071C20.7696 20.5196 20.875 20.2652 20.875 20V9.48908L12.875 3.26686L4.875 9.48908Z",
                    fill: r,
                  }),
                  (0, a.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M8.875 12C8.875 11.4477 9.32272 11 9.875 11H15.875C16.4273 11 16.875 11.4477 16.875 12V22C16.875 22.5523 16.4273 23 15.875 23C15.3227 23 14.875 22.5523 14.875 22V13H10.875V22C10.875 22.5523 10.4273 23 9.875 23C9.32272 23 8.875 22.5523 8.875 22V12Z",
                    fill: r,
                  }),
                ],
              });
            },
            analyticsIcon: function (e) {
              var t = e.width,
                o = e.height,
                i = e.className,
                n = e.onClick,
                s = e.fill,
                r = void 0 === s ? "#676D75" : s;
              return (0, a.jsxs)("svg", {
                viewBox: "0 0 25 24",
                width: void 0 === t ? "24px" : t,
                height: void 0 === o ? "24px" : o,
                className: i,
                onClick: n,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, a.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M9.54145 2.43004C9.76234 2.93622 9.53106 3.52564 9.02488 3.74653C7.67747 4.33451 6.49461 5.24362 5.57972 6.39435C4.66482 7.54509 4.04575 8.90243 3.77661 10.3477C3.50748 11.793 3.59649 13.2822 4.03585 14.6851C4.47521 16.088 5.25155 17.3619 6.29699 18.3955C7.34244 19.4291 8.62516 20.1908 10.033 20.6141C11.4409 21.0375 12.931 21.1095 14.3731 20.8238C15.8152 20.5382 17.1653 19.9037 18.3056 18.9757C19.4458 18.0477 20.3413 16.8546 20.9139 15.5005C21.129 14.9919 21.7157 14.7539 22.2244 14.969C22.7331 15.1841 22.9711 15.7708 22.756 16.2795C22.0562 17.9344 20.9616 19.3927 19.568 20.5269C18.1744 21.6611 16.5242 22.4366 14.7616 22.7857C12.9991 23.1348 11.1778 23.0468 9.45712 22.5294C7.73641 22.0121 6.16864 21.081 4.89088 19.8178C3.61311 18.5545 2.66425 16.9975 2.12725 15.2828C1.59026 13.5681 1.48147 11.748 1.81041 9.98156C2.13935 8.21512 2.896 6.55615 4.01421 5.1497C5.13241 3.74324 6.57813 2.63211 8.22496 1.91346C8.73114 1.69257 9.32056 1.92385 9.54145 2.43004Z",
                    fill: r,
                  }),
                  (0, a.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M11.9179 1.29289C12.1054 1.10536 12.3598 1 12.625 1C14.0695 1 15.4999 1.28452 16.8345 1.83733C18.1691 2.39013 19.3817 3.20038 20.4032 4.22183C21.4246 5.24327 22.2349 6.4559 22.7877 7.79048C23.3405 9.12506 23.625 10.5555 23.625 12C23.625 12.5523 23.1773 13 22.625 13H12.625C12.0727 13 11.625 12.5523 11.625 12V2C11.625 1.73478 11.7304 1.48043 11.9179 1.29289ZM13.625 3.05573V11H21.5693C21.4755 10.1614 21.2641 9.33849 20.9399 8.55585C20.4876 7.46392 19.8247 6.47177 18.989 5.63604C18.1532 4.80031 17.1611 4.13738 16.0692 3.68508C15.2865 3.3609 14.4636 3.14949 13.625 3.05573Z",
                    fill: r,
                  }),
                ],
              });
            },
            packagesIcon: function (e) {
              var t = e.width,
                o = e.height,
                i = e.className,
                n = e.onClick,
                s = e.fill,
                r = void 0 === s ? "#676D75" : s;
              return (0, a.jsxs)("svg", {
                viewBox: "0 0 25 24",
                width: void 0 === t ? "24px" : t,
                height: void 0 === o ? "24px" : o,
                className: i,
                onClick: n,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, a.jsx)("path", {
                    d: "M9.375 22H15.375C20.375 22 22.375 20 22.375 15V9C22.375 4 20.375 2 15.375 2H9.375C4.375 2 2.375 4 2.375 9V15C2.375 20 4.375 22 9.375 22Z",
                    stroke: r,
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  }),
                  (0, a.jsx)("path", {
                    d: "M12.375 2V22",
                    stroke: r,
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  }),
                  (0, a.jsx)("path", {
                    d: "M2.375 12H22.375",
                    stroke: r,
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  }),
                ],
              });
            },
            profileIcon: function (e) {
              var t = e.width,
                o = e.height,
                i = e.className,
                n = e.onClick,
                s = e.fill,
                r = void 0 === s ? "#676D75" : s;
              return (0, a.jsxs)("svg", {
                viewBox: "0 0 25 24",
                width: void 0 === t ? "24px" : t,
                height: void 0 === o ? "24px" : o,
                className: i,
                onClick: n,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, a.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M4.58947 15.4645C5.52715 14.5268 6.79892 14 8.125 14H16.125C17.4511 14 18.7229 14.5268 19.6605 15.4645C20.5982 16.4021 21.125 17.6739 21.125 19V21C21.125 21.5523 20.6773 22 20.125 22C19.5727 22 19.125 21.5523 19.125 21V19C19.125 18.2044 18.8089 17.4413 18.2463 16.8787C17.6837 16.3161 16.9206 16 16.125 16H8.125C7.32935 16 6.56629 16.3161 6.00368 16.8787C5.44107 17.4413 5.125 18.2044 5.125 19V21C5.125 21.5523 4.67728 22 4.125 22C3.57272 22 3.125 21.5523 3.125 21V19C3.125 17.6739 3.65178 16.4021 4.58947 15.4645Z",
                    fill: r,
                  }),
                  (0, a.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M12.125 4C10.4681 4 9.125 5.34315 9.125 7C9.125 8.65685 10.4681 10 12.125 10C13.7819 10 15.125 8.65685 15.125 7C15.125 5.34315 13.7819 4 12.125 4ZM7.125 7C7.125 4.23858 9.36358 2 12.125 2C14.8864 2 17.125 4.23858 17.125 7C17.125 9.76142 14.8864 12 12.125 12C9.36358 12 7.125 9.76142 7.125 7Z",
                    fill: r,
                  }),
                ],
              });
            },
            badgeIcon: function (e) {
              var t = e.width,
                o = e.height,
                i = e.className,
                n = (e.onClick, e.fill),
                s = void 0 === n ? " rgba(28, 57, 187, 1)" : n;
              return (0, a.jsxs)("svg", {
                width: void 0 === t ? "20px" : t,
                height: void 0 === o ? "20px" : o,
                fill: "none",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                className: i,
                children: [
                  (0, a.jsx)("path", {
                    d: "M10 12.5C13.1066 12.5 15.625 10.0749 15.625 7.08335C15.625 4.09181 13.1066 1.66669 10 1.66669C6.8934 1.66669 4.375 4.09181 4.375 7.08335C4.375 10.0749 6.8934 12.5 10 12.5Z",
                    fill: s,
                  }),
                  (0, a.jsx)("path", {
                    d: "M13.1583 13.0084C13.4333 12.8667 13.75 13.075 13.75 13.3834V17.425C13.75 18.175 13.225 18.5417 12.575 18.2334L10.3417 17.175C10.15 17.0917 9.85 17.0917 9.65833 17.175L7.425 18.2334C6.775 18.5334 6.25 18.1667 6.25 17.4167L6.26667 13.3834C6.26667 13.075 6.59167 12.875 6.85833 13.0084C7.8 13.4834 8.86667 13.75 10 13.75C11.1333 13.75 12.2083 13.4834 13.1583 13.0084Z",
                    fill: s,
                  }),
                ],
              });
            },
            clockIcon: function (e) {
              var t = e.width,
                o = e.height,
                i = e.className,
                n = (e.onClick, e.fill),
                s = void 0 === n ? "#000000" : n;
              return (0, a.jsxs)("svg", {
                className: i,
                width: void 0 === t ? "16px" : t,
                height: void 0 === o ? "17px" : o,
                viewBox: "0 0 16 17",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, a.jsx)("path", {
                    d: "M14.6666 8.49998C14.6666 12.18 11.6799 15.1666 7.99992 15.1666C4.31992 15.1666 1.33325 12.18 1.33325 8.49998C1.33325 4.81998 4.31992 1.83331 7.99992 1.83331C11.6799 1.83331 14.6666 4.81998 14.6666 8.49998Z",
                    stroke: s,
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  }),
                  (0, a.jsx)("path", {
                    d: "M10.4734 10.62L8.40675 9.38665C8.04675 9.17332 7.75342 8.65999 7.75342 8.23999V5.50665",
                    stroke: s,
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  }),
                ],
              });
            },
            globalIcon: function (e) {
              var t = e.width,
                o = e.height,
                i = e.className,
                n = e.onClick,
                s = e.fill,
                r = void 0 === s ? "#000000" : s;
              return (0, a.jsxs)("svg", {
                className: i,
                width: void 0 === t ? "16px" : t,
                height: void 0 === o ? "17px" : o,
                onClick: n,
                viewBox: "0 0 16 17",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, a.jsx)("path", {
                    d: "M8 15.1666C11.6819 15.1666 14.6667 12.1819 14.6667 8.49998C14.6667 4.81808 11.6819 1.83331 8 1.83331C4.3181 1.83331 1.33333 4.81808 1.33333 8.49998C1.33333 12.1819 4.3181 15.1666 8 15.1666Z",
                    stroke: "#EBEBEB",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  }),
                  (0, a.jsx)("path", {
                    d: "M5.33333 2.5H5.99999C4.69999 6.39333 4.69999 10.6067 5.99999 14.5H5.33333",
                    stroke: r,
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  }),
                  (0, a.jsx)("path", {
                    d: "M10 2.5C11.3 6.39333 11.3 10.6067 10 14.5",
                    stroke: r,
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  }),
                  (0, a.jsx)("path", {
                    d: "M2 11.1667V10.5C5.89333 11.8 10.1067 11.8 14 10.5V11.1667",
                    stroke: r,
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  }),
                  (0, a.jsx)("path", {
                    d: "M2 6.50002C5.89333 5.20002 10.1067 5.20002 14 6.50002",
                    stroke: r,
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  }),
                ],
              });
            },
          }),
          (0, n.Z)(i, "mobileIcon", function (e) {
            var t = e.width,
              o = e.height,
              i = e.className,
              n = e.onClick,
              s = e.fill;
            return (0, a.jsx)("svg", {
              className: i,
              width: void 0 === t ? "16px" : t,
              height: void 0 === o ? "17px" : o,
              onClick: n,
              viewBox: "0 0 16 17",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, a.jsx)("path", {
                d: "M14.6467 12.72C14.6467 12.96 14.5933 13.2066 14.48 13.4466C14.3667 13.6866 14.22 13.9133 14.0267 14.1266C13.7 14.4866 13.34 14.7466 12.9333 14.9133C12.5333 15.08 12.1 15.1666 11.6333 15.1666C10.9533 15.1666 10.2267 15.0066 9.45999 14.68C8.69333 14.3533 7.92666 13.9133 7.16666 13.36C6.39999 12.8 5.67333 12.18 4.97999 11.4933C4.29333 10.8 3.67333 10.0733 3.11999 9.31331C2.57333 8.55331 2.13333 7.79331 1.81333 7.03998C1.49333 6.27998 1.33333 5.55331 1.33333 4.85998C1.33333 4.40665 1.41333 3.97331 1.57333 3.57331C1.73333 3.16665 1.98666 2.79331 2.33999 2.45998C2.76666 2.03998 3.23333 1.83331 3.72666 1.83331C3.91333 1.83331 4.09999 1.87331 4.26666 1.95331C4.43999 2.03331 4.59333 2.15331 4.71333 2.32665L6.25999 4.50665C6.37999 4.67331 6.46666 4.82665 6.52666 4.97331C6.58666 5.11331 6.61999 5.25331 6.61999 5.37998C6.61999 5.53998 6.57333 5.69998 6.47999 5.85331C6.39333 6.00665 6.26666 6.16665 6.10666 6.32665L5.59999 6.85331C5.52666 6.92665 5.49333 7.01331 5.49333 7.11998C5.49333 7.17331 5.49999 7.21998 5.51333 7.27331C5.53333 7.32665 5.55333 7.36665 5.56666 7.40665C5.68666 7.62665 5.89333 7.91331 6.18666 8.25998C6.48666 8.60665 6.80666 8.95998 7.15333 9.31331C7.51333 9.66665 7.85999 9.99331 8.21333 10.2933C8.55999 10.5866 8.84666 10.7866 9.07333 10.9066C9.10666 10.92 9.14666 10.94 9.19333 10.96C9.24666 10.98 9.29999 10.9866 9.35999 10.9866C9.47333 10.9866 9.55999 10.9466 9.63333 10.8733L10.14 10.3733C10.3067 10.2066 10.4667 10.08 10.62 9.99998C10.7733 9.90665 10.9267 9.85998 11.0933 9.85998C11.22 9.85998 11.3533 9.88665 11.5 9.94665C11.6467 10.0066 11.8 10.0933 11.9667 10.2066L14.1733 11.7733C14.3467 11.8933 14.4667 12.0333 14.54 12.2C14.6067 12.3666 14.6467 12.5333 14.6467 12.72Z",
                stroke: void 0 === s ? "#000000" : s,
                "stroke-miterlimit": "10",
              }),
            });
          }),
          (0, n.Z)(i, "aboutIcon", function (e) {
            var t = e.width,
              o = e.height,
              i = e.className,
              n = e.onClick,
              s = e.fill,
              r = void 0 === s ? "#000000" : s;
            return (0, a.jsxs)("svg", {
              className: i,
              width: void 0 === t ? "16px" : t,
              height: void 0 === o ? "17px" : o,
              onClick: n,
              viewBox: "0 0 16 17",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, a.jsx)("path", {
                  d: "M8.00001 15.1666C11.6667 15.1666 14.6667 12.1666 14.6667 8.49998C14.6667 4.83331 11.6667 1.83331 8.00001 1.83331C4.33334 1.83331 1.33334 4.83331 1.33334 8.49998C1.33334 12.1666 4.33334 15.1666 8.00001 15.1666Z",
                  stroke: r,
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
                (0, a.jsx)("path", {
                  d: "M8 5.83331V9.16665",
                  stroke: r,
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
                (0, a.jsx)("path", {
                  d: "M7.99634 11.1667H8.00233",
                  stroke: r,
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
              ],
            });
          }),
          (0, n.Z)(i, "editIcon", function (e) {
            var t = e.width,
              o = e.height,
              i = e.className,
              n = e.onClick,
              s = e.fill,
              r = void 0 === s ? "#000000" : s;
            return (0, a.jsxs)("svg", {
              className: i,
              width: void 0 === t ? "16px" : t,
              height: void 0 === o ? "17px" : o,
              onClick: n,
              viewBox: "0 0 16 17",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, a.jsx)("path", {
                  d: "M8.84 2.9L3.36667 8.69334C3.16 8.91334 2.96 9.34667 2.92 9.64667L2.67334 11.8067C2.58667 12.5867 3.14667 13.12 3.92 12.9867L6.06667 12.62C6.36667 12.5667 6.78667 12.3467 6.99334 12.12L12.4667 6.32667C13.4133 5.32667 13.84 4.18667 12.3667 2.79334C10.9 1.41334 9.78667 1.9 8.84 2.9Z",
                  stroke: r,
                  "stroke-miterlimit": "10",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
                (0, a.jsx)("path", {
                  d: "M7.92667 3.86667C8.21333 5.70667 9.70667 7.11334 11.56 7.3",
                  stroke: r,
                  "stroke-miterlimit": "10",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
                (0, a.jsx)("path", {
                  d: "M2 15.1667H14",
                  stroke: r,
                  "stroke-miterlimit": "10",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
              ],
            });
          }),
          (0, n.Z)(i, "lockIcon", function (e) {
            var t = e.width,
              o = e.height,
              i = e.className,
              n = e.onClick,
              s = e.fill,
              r = void 0 === s ? "#000000" : s;
            return (0, a.jsxs)("svg", {
              className: i,
              width: void 0 === t ? "16px" : t,
              height: void 0 === o ? "17px" : o,
              onClick: n,
              viewBox: "0 0 16 17",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, a.jsx)("path", {
                  d: "M4 7.16668V5.83334C4 3.62668 4.66667 1.83334 8 1.83334C11.3333 1.83334 12 3.62668 12 5.83334V7.16668",
                  stroke: r,
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
                (0, a.jsx)("path", {
                  d: "M8.00001 12.8333C8.92048 12.8333 9.66668 12.0871 9.66668 11.1667C9.66668 10.2462 8.92048 9.5 8.00001 9.5C7.07954 9.5 6.33334 10.2462 6.33334 11.1667C6.33334 12.0871 7.07954 12.8333 8.00001 12.8333Z",
                  stroke: r,
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
                (0, a.jsx)("path", {
                  d: "M11.3333 15.1667H4.66668C2.00001 15.1667 1.33334 14.5 1.33334 11.8333V10.5C1.33334 7.83332 2.00001 7.16666 4.66668 7.16666H11.3333C14 7.16666 14.6667 7.83332 14.6667 10.5V11.8333C14.6667 14.5 14 15.1667 11.3333 15.1667Z",
                  stroke: r,
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
              ],
            });
          }),
          (0, n.Z)(i, "logoutIcon", function (e) {
            var t = e.width,
              o = e.height,
              i = e.className,
              n = e.onClick,
              s = e.fill,
              r = void 0 === s ? "#000000" : s;
            return (0, a.jsxs)("svg", {
              className: i,
              width: void 0 === t ? "16px" : t,
              height: void 0 === o ? "17px" : o,
              onClick: n,
              viewBox: "0 0 16 17",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, a.jsx)("path", {
                  d: "M5.93332 5.54C6.13999 3.14 7.37332 2.16 10.0733 2.16H10.16C13.14 2.16 14.3333 3.35334 14.3333 6.33334V10.68C14.3333 13.66 13.14 14.8533 10.16 14.8533H10.0733C7.39332 14.8533 6.15999 13.8867 5.93999 11.5267",
                  stroke: r,
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
                (0, a.jsx)("path", {
                  d: "M10 8.5H2.41333",
                  stroke: r,
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
                (0, a.jsx)("path", {
                  d: "M3.89999 6.26666L1.66666 8.5L3.89999 10.7333",
                  stroke: r,
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
              ],
            });
          }),
          (0, n.Z)(i, "DeleteAccount", function (e) {
            var t = e.width,
              o = e.height,
              i = e.fill,
              n = e.onClick,
              s = e.className;
            return (0, a.jsxs)("svg", {
              version: "1.1",
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              width: void 0 === t ? "20px" : t,
              height: void 0 === o ? "20px" : o,
              fill: void 0 === i ? "rgba(0,0,0,0.54)" : i,
              onClick: n,
              className: s,
              viewBox: "0 0 32 32",
              children: [
                (0, a.jsx)("circle", {
                  fill: "none",
                  stroke: "#000000",
                  "stroke-width": "2",
                  "stroke-miterlimit": "10",
                  cx: "14",
                  cy: "11",
                  r: "6",
                }),
                (0, a.jsx)("path", {
                  fill: "none",
                  stroke: "#000000",
                  "stroke-width": "2",
                  "stroke-miterlimit": "10",
                  d: "M5,26c0-4.971,4.029-9,9-9 c1.864,0,3.596,0.567,5.032,1.537",
                }),
                (0, a.jsx)("circle", {
                  fill: "none",
                  stroke: "#000000",
                  "stroke-width": "2",
                  "stroke-miterlimit": "10",
                  cx: "24",
                  cy: "24",
                  r: "7",
                }),
                (0, a.jsx)("line", {
                  fill: "none",
                  stroke: "#000000",
                  "stroke-width": "2",
                  "stroke-miterlimit": "10",
                  x1: "21",
                  y1: "27",
                  x2: "27",
                  y2: "21",
                }),
                (0, a.jsx)("line", {
                  fill: "none",
                  stroke: "#000000",
                  "stroke-width": "2",
                  "stroke-miterlimit": "10",
                  x1: "21",
                  y1: "21",
                  x2: "27",
                  y2: "27",
                }),
              ],
            });
          }),
          (0, n.Z)(i, "FullScreenIcon", function (e) {
            var t = e.width,
              o = e.height,
              i = e.fill,
              n = e.onClick;
            return (0, a.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: void 0 === t ? "20px" : t,
              height: void 0 === o ? "20px" : o,
              version: "1.1",
              viewBox: "0 0 529.44 530.13",
              fill: void 0 === i ? "#BCBCBC" : i,
              onClick: n,
              children: (0, a.jsxs)("g", {
                id: "Layer_x0020_1",
                children: [
                  (0, a.jsx)("metadata", {
                    id: "CorelCorpID_0Corel-Layer",
                  }),
                  (0, a.jsx)("path", {
                    className: "fil0",
                    d: "M446.75 82.33c-30.77,0.13 -56.17,0.06 -78.83,0.02 -56.61,-0.12 -57.75,-82.33 -8.52,-82.24 54.29,0.04 109.16,-0.01 149.85,-0.1 10,-0.02 20.13,10.84 20.19,21.59 0,51.08 0,94.06 0,145.14 0.01,49.61 -83.11,57.65 -82.77,-0.43 0.1,-17.39 0.07,-58.47 0.07,-83.97z",
                  }),
                  (0, a.jsx)("path", {
                    className: "fil0",
                    d: "M82.7 82.33c30.77,0.13 56.17,0.06 78.83,0.02 56.61,-0.12 57.75,-82.33 8.52,-82.24 -54.29,0.04 -109.16,-0.01 -149.85,-0.1 -10,-0.02 -20.13,10.84 -20.19,21.59 0,51.08 0,94.06 0,145.14 -0.01,49.61 83.11,57.65 82.77,-0.43 -0.1,-17.39 -0.07,-58.47 -0.07,-83.97z",
                  }),
                  (0, a.jsx)("path", {
                    className: "fil0",
                    d: "M82.7 447.8c30.77,-0.13 56.17,-0.06 78.83,-0.02 56.61,0.12 57.75,82.33 8.52,82.24 -54.29,-0.04 -109.16,0.01 -149.85,0.1 -10,0.02 -20.13,-10.84 -20.19,-21.59 0,-51.08 0,-94.06 0,-145.14 -0.01,-49.61 83.11,-57.65 82.77,0.43 -0.1,17.39 -0.07,58.47 -0.07,83.97z",
                  }),
                  (0, a.jsx)("path", {
                    className: "fil0",
                    d: "M446.73 447.54c-30.77,-0.13 -56.17,-0.06 -78.83,-0.02 -56.61,0.12 -57.75,82.33 -8.52,82.24 54.29,-0.04 109.16,0.01 149.85,0.1 10,0.02 20.13,-10.84 20.19,-21.59 0,-51.08 0,-94.06 0,-145.14 0.01,-49.61 -83.11,-57.65 -82.77,0.43 0.1,17.39 0.07,58.47 0.07,83.97z",
                  }),
                ],
              }),
            });
          }),
          (0, n.Z)(i, "ExitFullScreenIcon", function (e) {
            var t = e.width,
              o = e.height,
              i = e.fill,
              n = e.onClick;
            return (0, a.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: void 0 === t ? "20px" : t,
              height: void 0 === o ? "20px" : o,
              version: "1.1",
              viewBox: "0 0 563.58 566.55",
              fill: void 0 === i ? "#BCBCBC" : i,
              onClick: n,
              children: (0, a.jsxs)("g", {
                id: "Layer_x0020_1",
                children: [
                  (0, a.jsx)("metadata", {
                    id: "CorelCorpID_0Corel-Layer",
                  }),
                  (0, a.jsx)("path", {
                    className: "fil0",
                    d: "M120.97 443.85c-30.29,0.13 -55.3,0.06 -77.61,0.02 -55.73,-0.12 -56.86,-81.07 -8.39,-80.97 53.45,0.04 107.49,-0.02 147.54,-0.1 9.84,-0.02 19.82,10.68 19.88,21.26 0,50.29 0,92.61 0,142.9 0.01,48.84 -81.83,56.76 -81.49,-0.43 0.1,-17.12 0.07,-57.57 0.07,-82.67z",
                  }),
                  (0, a.jsx)("path", {
                    className: "fil0",
                    d: "M442.6 443.09c30.29,0.13 55.3,0.06 77.61,0.02 55.73,-0.12 56.86,-81.07 8.39,-80.97 -53.45,0.04 -107.48,-0.02 -147.54,-0.1 -9.84,-0.02 -19.82,10.68 -19.88,21.26 0,50.29 0,92.61 0,142.9 -0.01,48.84 81.83,56.76 81.49,-0.43 -0.1,-17.12 -0.07,-57.57 -0.07,-82.67z",
                  }),
                  (0, a.jsx)("path", {
                    className: "fil0",
                    d: "M442.62 122.95c30.29,-0.13 55.3,-0.06 77.61,-0.02 55.73,0.12 56.86,81.06 8.39,80.97 -53.45,-0.04 -107.49,0.01 -147.54,0.1 -9.84,0.02 -19.82,-10.68 -19.88,-21.26 0,-50.29 0,-92.61 0,-142.9 -0.01,-48.84 81.83,-56.76 81.49,0.42 -0.1,17.13 -0.07,57.57 -0.07,82.68z",
                  }),
                  (0, a.jsx)("path", {
                    className: "fil0",
                    d: "M121.01 122.7c-30.29,-0.13 -55.3,-0.06 -77.61,-0.02 -55.73,0.12 -56.86,81.07 -8.39,80.97 53.45,-0.04 107.48,0.02 147.54,0.1 9.84,0.02 19.82,-10.68 19.88,-21.26 0,-50.29 0,-92.61 0,-142.9 0.01,-48.84 -81.83,-56.76 -81.49,0.43 0.1,17.12 0.07,57.57 0.07,82.67z",
                  }),
                ],
              }),
            });
          }),
          i);
      t.Z = s;
    },
    4975: function (e, t) {
      "use strict";
      t.Z = function (e) {
        var t = {};
        return (
          "fa" == e &&
            (t = {
              code: "fa",
              array: [
                {
                  text: "فارسی",
                  code: "fa",
                  title: "Fa",
                  id: 1,
                },
                {
                  text: "انگلیسی",
                  code: "en",
                  title: "En",
                  id: 2,
                },
              ],
            }),
          "en" == e &&
            (t = {
              code: "en",
              array: [
                {
                  text: "Farsi",
                  code: "fa",
                  title: "Fa",
                  id: 1,
                },
                {
                  text: "English",
                  code: "en",
                  title: "En",
                  id: 2,
                },
              ],
            }),
          t
        );
      };
    },
    5624: function (e) {
      e.exports = {
        container: "styles_container__daKqN",
        text: "styles_text__86XB_",
      };
    },
    197: function (e) {
      e.exports = {
        container: "styles_container__21JDb",
        wrapper: "styles_wrapper__IfQJF",
        prefix: "styles_prefix__5fDEc",
        affix: "styles_affix__ZwvKf",
      };
    },
    3094: function (e) {
      e.exports = {
        className: "styles_className__0XLu4",
      };
    },
    6831: function (e) {
      e.exports = {
        wrapper: "styles_wrapper__af4e_",
        placeholder: "styles_placeholder__994kS",
        container: "styles_container__R45z3",
        disabled: "styles_disabled__Cx6Pt",
        inputError: "styles_inputError__L_t4z",
        button: "styles_button__UTsy2",
        expanded: "styles_expanded__WddDy",
        rtl: "styles_rtl__WJqtN",
        ul: "styles_ul__9Mdlj",
        options: "styles_options___jY_p",
        activeStyle: "styles_activeStyle__C6FOV",
        show: "styles_show__a3Ycz",
        titleStyle: "styles_titleStyle__Aqozs",
        empty: "styles_empty__yZdF3",
        borderSelectButton: "styles_borderSelectButton__3ijwF",
      };
    },
    3367: function (e) {
      e.exports = {
        container: "footer_container__fx1C1",
        containerclassName: "footer_containerclassName__tMDaz",
        rtl: "footer_rtl___4IiC",
        dark: "footer_dark__gMBSp",
        desktop: "footer_desktop__tbKTx",
        mobile: "footer_mobile__V65cO",
        locationText: "footer_locationText__Y_aoE",
        rights: "footer_rights__8UbML",
        circle: "footer_circle__0nPc5",
        second_conatiner: "footer_second_conatiner__iAnff",
        bottomPart: "footer_bottomPart__u8_FJ",
        details_part: "footer_details_part__LNh3a",
        rightMobile: "footer_rightMobile__OaovR",
        links_container: "footer_links_container__gTkh7",
        first_col: "footer_first_col__A6C15",
        second_col: "footer_second_col__8sk32",
        contact_us: "footer_contact_us__p9_fC",
        location_container: "footer_location_container__Tk8Ig",
        phone_container: "footer_phone_container__AXCc_",
        email_container: "footer_email_container__T5lTp",
        social_media_container: "footer_social_media_container__DS_F3",
        carts_container: "footer_carts_container__BYdRe",
        second_contact_us: "footer_second_contact_us__GCi_c",
        extraContentPadding: "footer_extraContentPadding__ObFxP",
      };
    },
    454: function (e) {
      e.exports = {
        container: "styles_container__dxypR",
        logoPart: "styles_logoPart__N395Q",
        buttonPart: "styles_buttonPart__f_59p",
        globalIcon: "styles_globalIcon__KGDnL",
        themeIcon: "styles_themeIcon__AaUeH",
        menuItem: "styles_menuItem__NDf57",
        lang: "styles_lang__Vaxzp",
        langEn: "styles_langEn__e26uE",
        langFa: "styles_langFa__j6Gwl",
        webButton: "styles_webButton__kZuEs",
        text: "styles_text__8oNVA",
      };
    },
    9207: function (e) {
      e.exports = {
        container: "styles_container__mF873",
        wrapper: "styles_wrapper__2GW1N",
        text: "styles_text__ffLS2",
      };
    },
    9527: function (e) {
      e.exports = {
        container: "styles_container__nzmjT",
      };
    },
    6343: function (e) {
      e.exports = {
        container: "styles_container__miBc6",
        containerShow: "styles_containerShow__fl4bh",
        newBackground: "styles_newBackground__uq7pM",
      };
    },
    2720: function (e) {
      e.exports = {
        container: "styles_container__gCyx2",
        paddingTop: "styles_paddingTop__tHLeS",
        wholeContainer: "styles_wholeContainer__OVZaE",
        bgDark: "styles_bgDark__78fNE",
        bgWhite: "styles_bgWhite__36O7q",
      };
    },
    5302: function (e) {
      e.exports = {
        container: "styles_container__rWrDY",
        paddingTop: "styles_paddingTop__VyzCL",
        wholeContainer: "styles_wholeContainer__rM65l",
        newBackground: "styles_newBackground__U4ije",
        bgDark: "styles_bgDark__sDYBN",
        bgWhite: "styles_bgWhite__VGBAx",
        containerclassName: "styles_containerclassName__AAdV6",
        rtl: "styles_rtl__1ptGv",
        topMargin: "styles_topMargin__i12XQ",
      };
    },
  },
]);
