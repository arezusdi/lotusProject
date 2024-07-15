(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [205],
  {
    8099: function (e, t, o) {
      "use strict";
      o(7294);
      var n = o(2012),
        r = o(1213),
        l = o(7712),
        i = o.n(l),
        s = o(5893);
      t.Z = function (e) {
        var t = e.type,
          o = e.onChange,
          l = e.className,
          a = void 0 === l ? "" : l,
          c = e.placeholder,
          u = e.value,
          d = e.title,
          v = e.error,
          p = e.showError,
          f = void 0 === p || p,
          m = e.showProfileError,
          _ = void 0 !== m && m,
          h = e.showTitle,
          g = e.targetType,
          x = e.maxLength,
          y = e.inputStyle,
          w = void 0 === y ? i().inputStyle : y,
          j = (void 0 === e.prefixClass && i().prefix, e.affixClass),
          b = void 0 === j ? i().affix : j,
          C = e.prefix,
          N = e.wraperClassName,
          S = void 0 === N ? "norhing" : N,
          Z = e.inputTitleClass,
          T = e.onFocus,
          k = e.onBlur,
          E = e.errorProfile,
          B = e.wrapperStyle,
          I = void 0 === B ? i().wrapper : B,
          P = e.loading,
          O = void 0 !== P && P,
          M = e.showDescription,
          D = e.children,
          H = e.affix,
          L = e.disabled,
          z = e.prefix0,
          F = e.showExtraInfo,
          R = e.extraInfo,
          U = e.extraInfoStyle,
          W = void 0 === U ? i().extraInfoStyle : U,
          K = e.showInput,
          X = e.id,
          q = e.extraButtonStyle,
          A = void 0 === q ? "nothing" : q,
          Q = e.onKeyDown,
          V =
            void 0 === Q
              ? function () {
                  return console.log("keydown");
                }
              : Q;
        return (0, s.jsxs)("div", {
          className: "".concat(i().container, " ").concat(a),
          children: [
            (0, s.jsxs)("div", {
              className: "flex flex-row justify-between items-center w-full",
              children: [
                !0 == (void 0 === h || h) &&
                  (0, s.jsxs)("p", {
                    className: Z || i().inputTitle,
                    children: [
                      d,
                      !0 == (void 0 !== F && F) &&
                        (0, s.jsx)("span", {
                          className: W,
                          children: R,
                        }),
                    ],
                  }),
                !0 == (void 0 !== M && M) &&
                  (0, s.jsx)("div", {
                    children: D,
                  }),
                !0 == _ &&
                  !0 == O &&
                  (0, s.jsxs)("div", {
                    className:
                      "flex flex-row justify-start align-center w-auto h-auto",
                    children: [
                      (0, s.jsx)("p", {
                        className: "".concat(
                          i().inputErrorProfile,
                          " preserveWhiteThemeColor"
                        ),
                        children: "در حال بررسی نام",
                      }),
                      (0, s.jsx)(r.Z, {
                        className: i().lds_ring,
                        width: "w-[20px]",
                        height: "h-[20px]",
                      }),
                    ],
                  }),
                !0 == _ &&
                  !1 == O &&
                  (0, s.jsx)("div", {
                    className:
                      "flex flex-row justify-start align-center w-auto h-auto",
                    children: (0, s.jsx)("p", {
                      className: "".concat(
                        i().inputErrorProfile,
                        " preserveWhiteThemeColor"
                      ),
                      children: E,
                    }),
                  }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: ""
                .concat(i().wrapper, " ")
                .concat(I, " ")
                .concat(A, " ")
                .concat(S, " selectButton wrapperActive ")
                .concat(!0 == f && i().yellowBorder, " ")
                .concat(!0 == _ && i().redBorder),
              children: [
                z &&
                  (0, s.jsx)("div", {
                    children: z,
                  }),
                (void 0 === K || K) &&
                  (0, s.jsx)("input", {
                    type: void 0 === t ? "text" : t,
                    inputmode: "num" == g && "numeric",
                    className: w || i().inputStyle,
                    onChange: function (e) {
                      if ("num" == g) {
                        var t, r;
                        console.log(
                          "hhhhh",
                          e.target.value,
                          !0 == (0, n.Z)(e.target.value) ||
                            (null === (t = e.target.value.trim()) ||
                            void 0 === t
                              ? void 0
                              : t.length) == 0
                        ),
                          (!0 == (0, n.Z)(e.target.value) ||
                            (null === (r = e.target.value.trim()) ||
                            void 0 === r
                              ? void 0
                              : r.length) == 0) &&
                            o(e);
                      } else o(e);
                    },
                    placeholder: c,
                    value: u,
                    onFocus: T,
                    onBlur: k,
                    maxLength: x,
                    disabled: void 0 !== L && L,
                    onKeyDown: function (e) {
                      e.keyCode, V(e);
                    },
                    autoComplete: "on",
                    id: X,
                    name: X,
                  }),
                C &&
                  (0, s.jsx)("div", {
                    children: C,
                  }),
                H &&
                  (0, s.jsx)("div", {
                    className: "".concat(b, " \n           \n\n            "),
                    children: H,
                  }),
              ],
            }),
            !0 == f &&
              v &&
              (0, s.jsx)("p", {
                className: " ".concat(
                  i().inputError,
                  " preserveWhiteThemeColor"
                ),
                children: v,
              }),
          ],
        });
      };
    },
    4958: function (e, t, o) {
      "use strict";
      o.d(t, {
        Z: function () {
          return BackButtonContainer;
        },
      });
      var n = o(6919),
        r = o(7294),
        l = o(8323),
        i = o(4903),
        s = o.n(i),
        a = o(5893);
      function BackButtonContainer(e) {
        var t = e.title,
          o = e.onClick,
          i = e.className,
          c = (0, r.useContext)(n.u).direction;
        return (0, a.jsxs)("div", {
          className:
            "flex flex-row justify-start items-center w-full h-auto ".concat(i),
          children: [
            (0, a.jsx)(l.Z, {
              src: "/imgs/icons/arrow-right.svg",
              width: 24,
              height: 24,
              onClick: function () {
                o();
              },
              containerclassName: "rtl" == c && "rotate-180",
            }),
            (0, a.jsx)("p", {
              className: " ".concat(s().formHeader),
              children: t,
            }),
          ],
        });
      }
    },
    6066: function (e, t, o) {
      "use strict";
      o(7294);
      var n = o(1213),
        r = o(8404),
        l = o.n(r),
        i = o(5893);
      t.Z = function (e) {
        var t = e.onSubmit,
          o = e.children,
          r = e.buttonText,
          s = e.closeText,
          a = e.closeFunction,
          c = e.extraClassName,
          u = void 0 === c ? "" : c,
          d = e.extraStyleButton,
          v = e.onDragEnter,
          p = e.className,
          f = void 0 === p ? l().container : p,
          m = e.disabled,
          _ = e.id,
          h = e.loadingU,
          g = e.loadingStyle,
          x = void 0 === g ? l().lds_ring : g;
        return (
          e.width,
          e.height,
          (0, i.jsxs)("form", {
            onSubmit: t,
            autoComplete: "on",
            id: _,
            className: "".concat(f, " ").concat(u),
            onDragEnter: v,
            children: [
              o,
              (0, i.jsxs)("div", {
                className: l().formRoot,
                children: [
                  r &&
                    (0, i.jsx)("button", {
                      className: "".concat(l().submitItem),
                      style: d,
                      disabled: m,
                      children: (0, i.jsx)("p", {
                        className: "relative",
                        children:
                          !0 == h
                            ? (0, i.jsx)(n.Z, {
                                className: x,
                                width: "w-20px",
                                height: "h-20px",
                              })
                            : "".concat(r),
                      }),
                    }),
                  s &&
                    (0, i.jsx)("button", {
                      className: "".concat(l().closeItem),
                      onClick: a,
                      style: d,
                      disabled: m,
                      children: s,
                    }),
                ],
              }),
            ],
          })
        );
      };
    },
    9965: function (e, t, o) {
      "use strict";
      o.d(t, {
        U: function () {
          return FormSubHead;
        },
      }),
        o(7294);
      var n = o(468),
        r = o(4415),
        l = o.n(r),
        i = o(5893),
        FormSubHead = function (e) {
          var t = e.serverError,
            o = e.title,
            r = e.description;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              "" !== t &&
                (0, i.jsxs)("div", {
                  className: l().serverError,
                  children: [
                    (0, i.jsx)(n.Z, {
                      src: "/imgs/icons/warning.svg",
                      alt: "warning",
                      width: 20,
                      height: 20,
                      containerclassName:
                        "flex flex-row justify-center items-center",
                    }),
                    (0, i.jsx)("div", {
                      className: "flex flex-col justify-start items-start",
                      children:
                        null == t
                          ? void 0
                          : t.map(function (e, t) {
                              return (0, i.jsx)(
                                "span",
                                {
                                  className: "w-full",
                                  children: e,
                                },
                                t
                              );
                            }),
                    }),
                  ],
                }),
              o &&
                (0, i.jsx)("p", {
                  className: l().title,
                  children: o,
                }),
              r &&
                (0, i.jsxs)("p", {
                  className: l().text,
                  children: [" ", r],
                }),
            ],
          });
        };
    },
    1213: function (e, t, o) {
      "use strict";
      o(7294);
      var n = o(5115),
        r = o.n(n),
        l = o(5893);
      t.Z = function (e) {
        e.onClick, e.children;
        var t = e.className,
          o = void 0 === t ? r().lds_ring : t,
          n = (e.tabIndex, e.width),
          i = e.height,
          s = void 0 === i ? "h-[100vh]" : i,
          a = e.extraClassName,
          c = void 0 === a ? "" : a,
          u = e.containerClassName,
          d = void 0 === u ? "" : u;
        return (0, l.jsx)("div", {
          className: "flex flex-row justify-center items-center "
            .concat(void 0 === n ? "w-[100vw]" : n, " ")
            .concat(s, " ")
            .concat(d),
          children: (0, l.jsx)("span", {
            className: "loader ".concat(o, " ").concat(c),
          }),
        });
      };
    },
    1205: function (e, t, o) {
      "use strict";
      var n = o(9499),
        r = o(7294),
        l = o(9416),
        i = o.n(l);
      o(1955);
      var s = o(9965),
        a = o(8099);
      o(5768);
      var c = o(2012),
        u = o(4069);
      o(5483);
      var d = o(6066),
        v = o(6919),
        p = o(8619),
        f = o(9242);
      o(537), o(7878);
      var m = o(5122),
        _ = o(1163),
        h = o(4958),
        g = o(5893);
      function ownKeys(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, n);
        }
        return o;
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys(Object(o), !0).forEach(function (t) {
                (0, n.Z)(e, t, o[t]);
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
      t.Z = function (e) {
        e.setShowUsers;
        var t,
          o,
          n,
          l,
          x,
          y,
          w,
          j,
          b,
          C,
          N,
          S,
          Z,
          T,
          k,
          E = e.setLoginModal,
          B = e.setForgetPasswordModal,
          I = e.setSignUpModal,
          P = (0, r.useContext)(v.u),
          O = P.setLogin,
          M = (P.setUserId, P.isElectron),
          D = P.countries,
          H = P.direction,
          L = P.content,
          z = P.setPriceType,
          F = (0, _.useRouter)(),
          R = (0, r.useState)({
            mobile: "",
            password: "",
          }),
          U = R[0],
          W = R[1],
          K = (0, r.useState)(!0),
          X = K[0];
        K[1];
        var q = (0, r.useState)(!1),
          A = q[0],
          Q = q[1],
          V = (0, r.useState)(!1),
          Y = V[0],
          G = V[1],
          J = (0, r.useState)(!0),
          $ = J[0];
        J[1];
        var ee = (0, r.useState)(""),
          et = ee[0],
          eo = ee[1],
          en = (0, r.useState)(!1),
          er = en[0],
          el = en[1],
          ei = (0, r.useState)("password"),
          es = ei[0],
          ea = ei[1],
          ec = (0, r.useState)(!1),
          eu = ec[0],
          ed = ec[1],
          ev = (0, r.useState)("98"),
          ep = ev[0],
          ef = ev[1],
          em = (0, r.useState)("IR"),
          e_ = em[0],
          eh = em[1],
          eg = (0, r.useState)(!1),
          ex = eg[0],
          ey = eg[1],
          checkMobileCode = function () {
            var e =
              null == D
                ? void 0
                : D.findIndex(function (e) {
                    var t;
                    return (
                      (null === (t = e.dial_code) || void 0 === t
                        ? void 0
                        : t.replace("+", "")) == ep
                    );
                  });
            return (console.log("err==", e, D, ep), -1 == e)
              ? (ey(!0), !0)
              : (ey(!1), !1);
          };
        console.log("message==", et);
        var findLocation = function () {
          fetch("http://ip-api.com/json")
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              console.log("Country: ", e.country, e), eh(e);
            })
            .catch(function (e, t) {
              console.log("Request failed");
            });
        };
        return (
          (0, r.useEffect)(function () {
            findLocation();
          }, []),
          (0, r.useEffect)(
            function () {
              null != e_ &&
                e_.countryCode &&
                ef(
                  -1 != (0, f.Z)(null == e_ ? void 0 : e_.countryCode, D) &&
                    null != (0, f.Z)(null == e_ ? void 0 : e_.countryCode, D)
                    ? (0, f.Z)(null == e_ ? void 0 : e_.countryCode, D)
                    : "98"
                );
            },
            [e_]
          ),
          console.log("dial_code", ep, e_),
          console.log("content", L),
          (0, g.jsx)("div", {
            className: "loginBackground ".concat(
              M && "loginBackgroundPadding",
              " relative"
            ),
            children: (0, g.jsxs)("div", {
              className:
                "flex flex-col justify-center items-center  m-auto w-full",
              children: [
                (0, g.jsx)("div", {
                  className:
                    "flex justify-center items-stretch w-full h-auto py-6 ".concat(
                      i().flexStyle,
                      " loginContent"
                    ),
                  children: (0, g.jsx)("div", {
                    className: "".concat(i().formContainer, " w-full"),
                    children: (0, g.jsxs)("div", {
                      className: "w-full",
                      children: [
                        (0, g.jsx)(s.U, {
                          serverError: et,
                        }),
                        (0, g.jsx)(h.Z, {
                          title:
                            null == L
                              ? void 0
                              : null === (t = L.login) || void 0 === t
                              ? void 0
                              : t.title,
                          onClick: function () {
                            F.back();
                          },
                        }),
                        (0, g.jsxs)(d.Z, {
                          onSubmit: function (e) {
                            var t, o, n, r, l, i, s, a;
                            if (
                              (null == ep
                                ? void 0
                                : null === (t = ep.trim()) || void 0 === t
                                ? void 0
                                : t.length) == 0
                            ) {
                              ey(!0),
                                (null == U
                                  ? void 0
                                  : null === (r = U.mobile) || void 0 === r
                                  ? void 0
                                  : null === (l = r.trim()) || void 0 === l
                                  ? void 0
                                  : l.length) == 0 && Q(!0),
                                (null == U
                                  ? void 0
                                  : null === (i = U.password) || void 0 === i
                                  ? void 0
                                  : null === (s = i.trim()) || void 0 === s
                                  ? void 0
                                  : s.length) == 0 && G(!0),
                                e.preventDefault();
                              return;
                            }
                            e.preventDefault(),
                              !1 ==
                                (a =
                                  !0 == (0, c.Z)(U.mobile)
                                    ? (0, c.Z)(U.mobile)
                                    : (0, u.Z)(U.mobile)) && Q(!0),
                              (null == U
                                ? void 0
                                : null === (o = U.password) || void 0 === o
                                ? void 0
                                : o.length) == 0 && G(!0),
                              checkMobileCode() && ey(!0),
                              !0 == a &&
                                (null == U
                                  ? void 0
                                  : null === (n = U.password) || void 0 === n
                                  ? void 0
                                  : n.length) !== 0 &&
                                !1 == checkMobileCode() &&
                                (Q(!1),
                                G(!1),
                                ed(!0),
                                m.Z.userLogin({
                                  mobile: "".concat(U.mobile),
                                  password: "".concat(U.password),
                                  countryCode: "+" + ep,
                                })
                                  .then(function (e) {
                                    var t, o;
                                    (0, p.Z)(
                                      "set",
                                      "newToken",
                                      e.data.response.accessToken,
                                      function () {
                                        O((0, p.Z)("get", "newToken"));
                                      }
                                    ),
                                      (0, p.Z)(
                                        "set",
                                        "userAuthNew",
                                        e.data.response.uuid
                                      ),
                                      (0, p.Z)(
                                        "set",
                                        "userAuthNewId",
                                        e.data.response.channelId
                                      ),
                                      (0, p.Z)("remove", "fromSignUp"),
                                      (0, p.Z)(
                                        "set",
                                        "userNew",
                                        e.data.response.id
                                      ),
                                      (0, p.Z)(
                                        "set",
                                        "priceTypeNew",
                                        e.data.response.currency
                                      ),
                                      "T" == e.data.response.currency
                                        ? z(
                                            " " + (null == L ? void 0 : L.toman)
                                          )
                                        : z(e.data.response.currency),
                                      console.log(
                                        "currency==",
                                        e.data.response.currency
                                      ),
                                      ed(!1),
                                      null === (t = window) ||
                                        void 0 === t ||
                                        null === (o = t.location) ||
                                        void 0 === o ||
                                        o.reload();
                                  })
                                  .catch(function (e) {
                                    console.log("err===============", e);
                                    var t,
                                      o,
                                      n,
                                      r,
                                      l,
                                      i,
                                      s,
                                      a = "";
                                    eo(
                                      null != e &&
                                        null !== (t = e.response) &&
                                        void 0 !== t &&
                                        null !== (o = t.data) &&
                                        void 0 !== o &&
                                        o.message
                                        ? [
                                            "".concat(
                                              null == e
                                                ? void 0
                                                : null === (n = e.response) ||
                                                  void 0 === n
                                                ? void 0
                                                : null === (r = n.data) ||
                                                  void 0 === r
                                                ? void 0
                                                : r.message
                                            ),
                                          ]
                                        : null == e
                                        ? void 0
                                        : null === (l = e.response) ||
                                          void 0 === l
                                        ? void 0
                                        : null === (i = l.data) || void 0 === i
                                        ? void 0
                                        : null === (s = i.errors) ||
                                          void 0 === s
                                        ? void 0
                                        : s.map(function (e, t) {
                                            return (a +=
                                              null == e ? void 0 : e.message);
                                          })
                                    ),
                                      ed(!1);
                                  }));
                          },
                          user: U,
                          buttonText:
                            null == L
                              ? void 0
                              : null === (o = L.login) || void 0 === o
                              ? void 0
                              : o.formButton,
                          extraStyleButton: {
                            marginTop: "auto",
                            marginBottom: "0",
                            width: "100%",
                          },
                          extraButtonClass: i().formButton,
                          loadingU: eu,
                          children: [
                            (0, g.jsxs)("div", {
                              className:
                                "flex flex-row justify-between items-center w-full h-auto ltr",
                              children: [
                                (0, g.jsx)("span", {
                                  style: {
                                    marginTop: "auto",
                                    padding: "16px 0",
                                  },
                                  children: "+",
                                }),
                                (0, g.jsx)(a.Z, {
                                  targetType: "num",
                                  onChange: function (e) {
                                    var t,
                                      o,
                                      n = e.target.value.replace(/\+/g, "");
                                    (!0 == (0, c.Z)(n) ||
                                      (null == n
                                        ? void 0
                                        : null === (t = n.trim()) ||
                                          void 0 === t
                                        ? void 0
                                        : t.length) == 0) &&
                                      (null == n
                                        ? void 0
                                        : null === (o = n.trim()) ||
                                          void 0 === o
                                        ? void 0
                                        : o.length) < 4 &&
                                      (ef(n), eo(""), ey(!1));
                                  },
                                  showError: ex,
                                  showTitle: X,
                                  onBlur: checkMobileCode,
                                  title: "".concat(
                                    null == L
                                      ? void 0
                                      : null === (n = L.countryCode) ||
                                        void 0 === n
                                      ? void 0
                                      : n.code
                                  ),
                                  placeholder: "".concat(
                                    null == L
                                      ? void 0
                                      : null === (l = L.countryCode) ||
                                        void 0 === l
                                      ? void 0
                                      : l.placeholder
                                  ),
                                  wrapperStyle: "".concat(i().wrapper, " "),
                                  className: i().inputContainerCode,
                                  value: ep,
                                }),
                                (0, g.jsx)(a.Z, {
                                  targetType: "num",
                                  onChange: function (e) {
                                    var t = e.target.value;
                                    console.log("vvvv", t.replace(/^0/, ""), t),
                                      W(
                                        _objectSpread(
                                          _objectSpread({}, U),
                                          {},
                                          {
                                            mobile: t.replace(/^0/, ""),
                                          }
                                        )
                                      ),
                                      eo(""),
                                      Q(!1);
                                  },
                                  inputStyle: i().inputStyle,
                                  showError: A,
                                  showTitle: X,
                                  onBlur: function () {
                                    !1 ==
                                      (!0 == (0, c.Z)(U.mobile)
                                        ? (0, c.Z)(U.mobile)
                                        : (0, u.Z)(U.mobile)) && Q(!0);
                                  },
                                  title:
                                    null == L
                                      ? void 0
                                      : null === (x = L.login) || void 0 === x
                                      ? void 0
                                      : x.mobile,
                                  placeholder:
                                    null == L
                                      ? void 0
                                      : null === (y = L.login) || void 0 === y
                                      ? void 0
                                      : y.mobilePlaceHolder,
                                  wrapperStyle: "".concat(i().wrapper, " "),
                                  className: ""
                                    .concat(i().inputContainerMobile, " ")
                                    .concat(H),
                                  value: null == U ? void 0 : U.mobile,
                                }),
                              ],
                            }),
                            ex &&
                              (0, g.jsx)("p", {
                                className: "inputError",
                                children: "".concat(
                                  null == L
                                    ? void 0
                                    : null === (w = L.countryCode) ||
                                      void 0 === w
                                    ? void 0
                                    : w.error
                                ),
                              }),
                            A &&
                              (0, g.jsx)("p", {
                                className: "inputError",
                                children:
                                  null == L
                                    ? void 0
                                    : null === (j = L.login) || void 0 === j
                                    ? void 0
                                    : j.mobileError,
                              }),
                            (0, g.jsx)(a.Z, {
                              onChange: function (e) {
                                Q(!1),
                                  W(
                                    _objectSpread(
                                      _objectSpread({}, U),
                                      {},
                                      {
                                        password: e.target.value,
                                      }
                                    )
                                  ),
                                  eo(""),
                                  G(!1);
                              },
                              inputStyle: i().inputStyle,
                              showError: Y,
                              showTtitle: X,
                              placeholder: "",
                              wrapperStyle: "".concat(i().wrapper, " "),
                              title:
                                null == L
                                  ? void 0
                                  : null === (b = L.login) || void 0 === b
                                  ? void 0
                                  : b.password,
                              error:
                                null == L
                                  ? void 0
                                  : null === (C = L.login) || void 0 === C
                                  ? void 0
                                  : C.passwordError,
                              type: es,
                              className: i().inputContainer,
                              prefix:
                                !1 == er
                                  ? (0, g.jsx)("img", {
                                      src: "/imgs/icons/eye-slash.svg",
                                      alt: "passVisisble",
                                      onClick: function () {
                                        el(!er), ea("text");
                                      },
                                      className: "noFilterImage cursor-pointer",
                                      width: 16,
                                      height: 16,
                                    })
                                  : (0, g.jsx)("img", {
                                      src: "/imgs/icons/eye.svg",
                                      alt: "passInVisisble",
                                      onClick: function () {
                                        el(!er), ea("password");
                                      },
                                      className: "cursor-pointer",
                                      width: 16,
                                      height: 16,
                                    }),
                            }),
                            !0 == $ &&
                              (0, g.jsx)("p", {
                                className: "".concat(
                                  i().forgetText,
                                  " preserveWhiteThemeColor cursor-pointer  mr-auto"
                                ),
                                onClick: function () {
                                  E(!1),
                                    B(!0),
                                    I(!1),
                                    F.push("/pwa/forgetpassword");
                                },
                                children:
                                  null === (N = L.login) || void 0 === N
                                    ? void 0
                                    : N.forgetButton,
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, g.jsxs)("div", {
                  className:
                    "flex flex-row justify-center items-center w-auto h-auto ".concat(
                      i().bottomTexts
                    ),
                  children: [
                    (0, g.jsx)("span", {
                      style: {
                        padding: "0 5px",
                        color: " rgba(255, 255, 255, 0.8)",
                      },
                      children:
                        null == L
                          ? void 0
                          : null === (S = L.login) || void 0 === S
                          ? void 0
                          : null === (Z = S.toSignup) || void 0 === Z
                          ? void 0
                          : Z.description,
                    }),
                    " ",
                    (0, g.jsxs)("span", {
                      className: "cursor-pointer linkStyleNoColor",
                      onClick: function () {
                        E(!1), B(!1), I(!0), F.push("/pwa/signup");
                      },
                      children: [
                        " ",
                        null == L
                          ? void 0
                          : null === (T = L.login) || void 0 === T
                          ? void 0
                          : null === (k = T.toSignup) || void 0 === k
                          ? void 0
                          : k.button,
                        " ",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    4069: function (e, t) {
      "use strict";
      t.Z = function (e) {
        return !!e.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
    },
    2012: function (e, t) {
      "use strict";
      t.Z = function (e) {
        return /^-?\d+$/.test(e);
      };
    },
    5483: function (e, t, o) {
      "use strict";
      o(1955);
      var n = o(8619);
      t.Z = function (e) {
        e ||
          ((0, n.Z)("remove", "newToken"),
          (0, n.Z)("remove", "signupNew"),
          (0, n.Z)("remove", "userNew")),
          window.location.reload();
      };
    },
    9242: function (e, t) {
      "use strict";
      t.Z = function (e, t) {
        console.log("hhh", null == t ? void 0 : t.length, e, t);
        var o,
          n,
          r,
          l =
            null == t
              ? void 0
              : t.findIndex(function (t) {
                  return t.code == e;
                });
        return (console.log("gggg", l, e, t), -1 != l)
          ? (console.log(
              "gggg",
              l,
              null === (o = t[l]) || void 0 === o ? void 0 : o.dial_code
            ),
            null === (n = t[l]) || void 0 === n
              ? void 0
              : null === (r = n.dial_code) || void 0 === r
              ? void 0
              : r.replace("+", ""))
          : null;
      };
    },
    4903: function (e) {
      e.exports = {
        formHeader: "styles_formHeader__mXcj8",
      };
    },
    7712: function (e) {
      e.exports = {
        container: "styles_container__uOyfS",
        inputTitle: "styles_inputTitle__zIBME",
        inputError: "styles_inputError__v05BO",
        inputErrorProfile: "styles_inputErrorProfile__WZCft",
        inputStyle: "styles_inputStyle__Hh_Np",
        wrapper: "styles_wrapper__gRYu8",
        prefix: "styles_prefix__OXnpJ",
        affix: "styles_affix__akDRO",
        yellowBorder: "styles_yellowBorder__aj5N7",
        redBorder: "styles_redBorder__7GR27",
        lds_ring: "styles_lds_ring__csptn",
        extraInfoStyle: "styles_extraInfoStyle__CL8Mb",
      };
    },
    8404: function (e) {
      e.exports = {
        container: "styles_container__lJpac",
        formRoot: "styles_formRoot__H9134",
        submitItem: "styles_submitItem__wXP6S",
        closeItem: "styles_closeItem__thkLB",
        lds_ring: "styles_lds_ring__cP_wg",
      };
    },
    4415: function (e) {
      e.exports = {
        infoContainer: "styles_infoContainer__wxCOk",
        serverError: "styles_serverError__LCDSQ",
        logoText: "styles_logoText__PDawS",
        textMobile: "styles_textMobile__f1Qrj",
        text: "styles_text__podPS",
        title: "styles_title__1kG6a",
      };
    },
    5115: function () {},
    9416: function (e) {
      e.exports = {
        formContainer: "styles_formContainer__OrHLu",
        logo: "styles_logo__vIbwH",
        inputContainer: "styles_inputContainer__lq5m_",
        inputContainerMobile: "styles_inputContainerMobile__ZHXnW",
        inputContainerCode: "styles_inputContainerCode__7mv4y",
        extraWrapperStyle: "styles_extraWrapperStyle__rQYr5",
        extraMargin: "styles_extraMargin__8jTyy",
        wrapper: "styles_wrapper__qmDkV",
        submitItem: "styles_submitItem__PBDrY",
        kidzyButton: "styles_kidzyButton__tx1gN",
        kidzyText: "styles_kidzyText__lHccg",
        formTitle: "styles_formTitle__XvXvV",
        formButton: "styles_formButton__x6uqh",
        bottomTexts: "styles_bottomTexts__s22Vu",
        forgetText: "styles_forgetText__Uz2Qq",
        formHeader: "styles_formHeader__wF9w9",
        inputError: "styles_inputError__wYLs8",
        serverError: "styles_serverError__tpjK5",
        flexStyle: "styles_flexStyle__E7kg4",
        inputStyle: "styles_inputStyle__WN4bB",
        force_media: "styles_force_media__dQz_4",
        bottomText: "styles_bottomText__Pl3vM",
        mobileSignup: "styles_mobileSignup__9PfM0",
      };
    },
  },
]);
