import { jsx as h, jsxs as z, Fragment as We } from "react/jsx-runtime";
import S, { keyframes as La, css as tl, useTheme as Vn } from "styled-components";
import * as nl from "react";
import ge, { useState as fe, useEffect as le, useReducer as _a, useRef as ce, useCallback as Y, isValidElement as rl, cloneElement as Ma, createContext as $n, useContext as A0, createElement as Zn, forwardRef as il, memo as ol, useDebugValue as Wn, useMemo as $t, useLayoutEffect as Sa, Component as al, Children as ei } from "react";
import sl, { createPortal as ll } from "react-dom";
const me = (e, t) => {
  const n = e[t];
  if (n == null)
    throw Error(`Missing size declaration: ${t}`);
  return n;
}, cl = ge.createContext({}), Ia = !0;
function ul({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: o, direction: s, duration: a, enableAnimation: l = Ia, customHighlightBackground: c }) {
  const u = {};
  return s === "rtl" && (u["--animation-direction"] = "reverse"), typeof a == "number" && (u["--animation-duration"] = `${a}s`), l || (u["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (u.width = n), (typeof r == "string" || typeof r == "number") && (u.height = r), (typeof i == "string" || typeof i == "number") && (u.borderRadius = i), o && (u.borderRadius = "50%"), typeof e < "u" && (u["--base-color"] = e), typeof t < "u" && (u["--highlight-color"] = t), typeof c == "string" && (u["--custom-highlight-background"] = c), u;
}
function Un({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: o = !1, style: s, ...a }) {
  var l, c, u;
  const d = ge.useContext(cl), f = { ...a };
  for (const [v, w] of Object.entries(a))
    typeof w > "u" && delete f[v];
  const p = {
    ...d,
    ...f,
    circle: o
  }, y = {
    ...s,
    ...ul(p)
  };
  let m = "react-loading-skeleton";
  n && (m += ` ${n}`);
  const g = (l = p.inline) !== null && l !== void 0 ? l : !1, _ = [], C = Math.ceil(e);
  for (let v = 0; v < C; v++) {
    let w = y;
    if (C > e && v === C - 1) {
      const I = (c = w.width) !== null && c !== void 0 ? c : "100%", O = e % 1, V = typeof I == "number" ? I * O : `calc(${I} * ${O})`;
      w = { ...w, width: V };
    }
    const b = ge.createElement("span", { className: m, style: w, key: v }, "‌");
    g ? _.push(b) : _.push(ge.createElement(
      ge.Fragment,
      { key: v },
      b,
      ge.createElement("br", null)
    ));
  }
  return ge.createElement("span", { className: r, "data-testid": i, "aria-live": "polite", "aria-busy": (u = p.enableAnimation) !== null && u !== void 0 ? u : Ia }, t ? _.map((v, w) => ge.createElement(t, { key: w }, v)) : _);
}
const ti = S("span").withConfig({
  shouldForwardProp: (e, t) => !["loading"].includes(e) && t(e),
  displayName: "text__StyledText",
  componentId: "sc-1vbqbb2-0"
})(({
  theme: e,
  loading: t,
  variation: n = "inherit",
  monotype: r = !1,
  noWrap: i = !1,
  uppercase: o = !1,
  capitalize: s = !1,
  capitalizeFirstLetter: a = !1,
  wordBreak: l = !1
}) => ({
  fontFamily: r ? e.typography.fontFamily.mono : e.typography.fontFamily.primary,
  fontWeight: r ? e.typography.fontWeight.regular : e.typography.fontWeight.medium,
  color: {
    inherit: "inherit",
    lightGray: e.styleguideColors.contentTertiary,
    contentViolet: e.styleguideColors.contentViolet,
    gray: e.styleguideColors.contentTertiary,
    darkGray: e.styleguideColors.contentSecondary,
    black: e.styleguideColors.contentPrimary,
    white: e.styleguideColors.contentOnFill,
    blue: e.styleguideColors.contentBlue,
    red: e.styleguideColors.contentRed,
    green: e.styleguideColors.contentGreen
  }[n],
  whiteSpace: i ? "nowrap" : "initial",
  ...t && {
    display: "inline-block",
    width: "100%"
  },
  ...o && {
    textTransform: "uppercase"
  },
  ...s && {
    textTransform: "capitalize"
  },
  ...a && {
    "&:first-letter": {
      textTransform: "capitalize"
    }
  },
  ...l && {
    wordBreak: "break-word"
  },
  "-webkit-text-size-adjust": "100%"
})), p2 = ge.forwardRef(function({
  tag: t = "span",
  ...n
}, r) {
  const i = ["h1", "h2", "h3", "h4", "h5", "h6", "span"].includes(t) ? t : "span";
  return n.loading ? /* @__PURE__ */ h(ti, { ref: r, ...n, as: i, children: /* @__PURE__ */ h(Un, {}) }) : /* @__PURE__ */ h(ti, { ref: r, ...n, as: i });
}), dl = S(p2).withConfig({
  displayName: "body-text__StyledText",
  componentId: "sc-2827zm-0"
})(({
  theme: e,
  size: t = 3,
  scale: n = "sm",
  lineHeight: r = "sm"
}) => ({
  fontWeight: me({
    1: e.typography.fontWeight.semiBold,
    2: e.typography.fontWeight.medium,
    3: e.typography.fontWeight.regular,
    4: e.typography.fontWeight.light
  }, t),
  fontSize: me({
    xl: "1.25rem",
    lg: "1.125rem",
    md: "1rem",
    sm: "0.875rem",
    xs: "0.813rem"
  }, n),
  lineHeight: me({
    sm: "1.5rem",
    xs: "1.25rem"
  }, r),
  "&:where(h1, h2, h3, h4, h5, h6)": {
    margin: 0
  }
})), ne = ge.forwardRef(function(t, n) {
  return /* @__PURE__ */ h(dl, { ref: n, ...t });
}), fl = S("div").withConfig({
  displayName: "flex-box__StyledFlexBox",
  componentId: "sc-9weptk-0"
})(({
  itemsSpacing: e,
  direction: t,
  justify: n,
  wrap: r,
  align: i,
  grow: o,
  shrink: s,
  basis: a = "auto",
  gap: l,
  onClick: c
}) => ({
  display: "flex",
  gap: l,
  flexDirection: t,
  flexWrap: r,
  justifyContent: n,
  alignItems: i,
  flexGrow: o,
  flexShrink: s,
  flexBasis: a,
  ...e != null && {
    "> * + *": {
      [t === "row" ? "marginLeft" : "marginTop"]: e
    },
    "> * + *:where(h1, h2, h3, h4, h5, h6)": {
      [t === "row" ? "marginLeft" : "marginTop"]: `${e}px !important`
    }
  },
  ...c && {
    cursor: "pointer"
  }
})), jn = ge.forwardRef((e, t) => {
  const {
    tag: n = "div"
  } = e, r = ["div", "span"].includes(n) ? n : "div";
  return /* @__PURE__ */ h(fl, { ref: t, ...e, as: r });
}), J = ge.forwardRef((e, t) => /* @__PURE__ */ h(jn, { ref: t, direction: "row", ...e })), Ee = ge.forwardRef((e, t) => /* @__PURE__ */ h(jn, { ref: t, direction: "column", ...e }));
var pl = (e) => typeof e != "string" ? {} : e.split(/ ?; ?/).reduce((t, n) => {
  const [r, i] = n.split(/ ?: ?/).map((o, s) => s === 0 ? o.replace(/\s+/g, "") : o.trim());
  if (r && i) {
    const o = r.replace(/(\w)-(\w)/g, (a, l, c) => `${l}${c.toUpperCase()}`);
    let s = i.trim();
    Number.isNaN(Number(i)) || (s = Number(i)), t[r.startsWith("-") ? r : o] = s;
  }
  return t;
}, {});
function hl(e = 6) {
  const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let n = "";
  for (let r = e; r > 0; --r)
    n += t[Math.round(Math.random() * (t.length - 1))];
  return n;
}
var gl = [
  "br",
  "col",
  "colgroup",
  "dl",
  "hr",
  "iframe",
  "img",
  "input",
  "link",
  "menuitem",
  "meta",
  "ol",
  "param",
  "select",
  "table",
  "tbody",
  "tfoot",
  "thead",
  "tr",
  "ul",
  "wbr"
], ni = {
  // HTML
  "accept-charset": "acceptCharset",
  acceptcharset: "acceptCharset",
  accesskey: "accessKey",
  allowfullscreen: "allowFullScreen",
  autocapitalize: "autoCapitalize",
  autocomplete: "autoComplete",
  autocorrect: "autoCorrect",
  autofocus: "autoFocus",
  autoplay: "autoPlay",
  autosave: "autoSave",
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  charset: "charSet",
  class: "className",
  classid: "classID",
  classname: "className",
  colspan: "colSpan",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  controlslist: "controlsList",
  crossorigin: "crossOrigin",
  dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
  datetime: "dateTime",
  defaultchecked: "defaultChecked",
  defaultvalue: "defaultValue",
  enctype: "encType",
  for: "htmlFor",
  formmethod: "formMethod",
  formaction: "formAction",
  formenctype: "formEncType",
  formnovalidate: "formNoValidate",
  formtarget: "formTarget",
  frameborder: "frameBorder",
  hreflang: "hrefLang",
  htmlfor: "htmlFor",
  httpequiv: "httpEquiv",
  "http-equiv": "httpEquiv",
  icon: "icon",
  innerhtml: "innerHTML",
  inputmode: "inputMode",
  itemid: "itemID",
  itemprop: "itemProp",
  itemref: "itemRef",
  itemscope: "itemScope",
  itemtype: "itemType",
  keyparams: "keyParams",
  keytype: "keyType",
  marginwidth: "marginWidth",
  marginheight: "marginHeight",
  maxlength: "maxLength",
  mediagroup: "mediaGroup",
  minlength: "minLength",
  nomodule: "noModule",
  novalidate: "noValidate",
  playsinline: "playsInline",
  radiogroup: "radioGroup",
  readonly: "readOnly",
  referrerpolicy: "referrerPolicy",
  rowspan: "rowSpan",
  spellcheck: "spellCheck",
  srcdoc: "srcDoc",
  srclang: "srcLang",
  srcset: "srcSet",
  tabindex: "tabIndex",
  typemustmatch: "typeMustMatch",
  usemap: "useMap",
  // SVG
  accentheight: "accentHeight",
  "accent-height": "accentHeight",
  alignmentbaseline: "alignmentBaseline",
  "alignment-baseline": "alignmentBaseline",
  allowreorder: "allowReorder",
  arabicform: "arabicForm",
  "arabic-form": "arabicForm",
  attributename: "attributeName",
  attributetype: "attributeType",
  autoreverse: "autoReverse",
  basefrequency: "baseFrequency",
  baselineshift: "baselineShift",
  "baseline-shift": "baselineShift",
  baseprofile: "baseProfile",
  calcmode: "calcMode",
  capheight: "capHeight",
  "cap-height": "capHeight",
  clippath: "clipPath",
  "clip-path": "clipPath",
  clippathunits: "clipPathUnits",
  cliprule: "clipRule",
  "clip-rule": "clipRule",
  colorinterpolation: "colorInterpolation",
  "color-interpolation": "colorInterpolation",
  colorinterpolationfilters: "colorInterpolationFilters",
  "color-interpolation-filters": "colorInterpolationFilters",
  colorprofile: "colorProfile",
  "color-profile": "colorProfile",
  colorrendering: "colorRendering",
  "color-rendering": "colorRendering",
  contentscripttype: "contentScriptType",
  contentstyletype: "contentStyleType",
  diffuseconstant: "diffuseConstant",
  dominantbaseline: "dominantBaseline",
  "dominant-baseline": "dominantBaseline",
  edgemode: "edgeMode",
  enablebackground: "enableBackground",
  "enable-background": "enableBackground",
  externalresourcesrequired: "externalResourcesRequired",
  fillopacity: "fillOpacity",
  "fill-opacity": "fillOpacity",
  fillrule: "fillRule",
  "fill-rule": "fillRule",
  filterres: "filterRes",
  filterunits: "filterUnits",
  floodopacity: "floodOpacity",
  "flood-opacity": "floodOpacity",
  floodcolor: "floodColor",
  "flood-color": "floodColor",
  fontfamily: "fontFamily",
  "font-family": "fontFamily",
  fontsize: "fontSize",
  "font-size": "fontSize",
  fontsizeadjust: "fontSizeAdjust",
  "font-size-adjust": "fontSizeAdjust",
  fontstretch: "fontStretch",
  "font-stretch": "fontStretch",
  fontstyle: "fontStyle",
  "font-style": "fontStyle",
  fontvariant: "fontVariant",
  "font-variant": "fontVariant",
  fontweight: "fontWeight",
  "font-weight": "fontWeight",
  glyphname: "glyphName",
  "glyph-name": "glyphName",
  glyphorientationhorizontal: "glyphOrientationHorizontal",
  "glyph-orientation-horizontal": "glyphOrientationHorizontal",
  glyphorientationvertical: "glyphOrientationVertical",
  "glyph-orientation-vertical": "glyphOrientationVertical",
  glyphref: "glyphRef",
  gradienttransform: "gradientTransform",
  gradientunits: "gradientUnits",
  horizadvx: "horizAdvX",
  "horiz-adv-x": "horizAdvX",
  horizoriginx: "horizOriginX",
  "horiz-origin-x": "horizOriginX",
  imagerendering: "imageRendering",
  "image-rendering": "imageRendering",
  kernelmatrix: "kernelMatrix",
  kernelunitlength: "kernelUnitLength",
  keypoints: "keyPoints",
  keysplines: "keySplines",
  keytimes: "keyTimes",
  lengthadjust: "lengthAdjust",
  letterspacing: "letterSpacing",
  "letter-spacing": "letterSpacing",
  lightingcolor: "lightingColor",
  "lighting-color": "lightingColor",
  limitingconeangle: "limitingConeAngle",
  markerend: "markerEnd",
  "marker-end": "markerEnd",
  markerheight: "markerHeight",
  markermid: "markerMid",
  "marker-mid": "markerMid",
  markerstart: "markerStart",
  "marker-start": "markerStart",
  markerunits: "markerUnits",
  markerwidth: "markerWidth",
  maskcontentunits: "maskContentUnits",
  maskunits: "maskUnits",
  numoctaves: "numOctaves",
  overlineposition: "overlinePosition",
  "overline-position": "overlinePosition",
  overlinethickness: "overlineThickness",
  "overline-thickness": "overlineThickness",
  paintorder: "paintOrder",
  "paint-order": "paintOrder",
  "panose-1": "panose1",
  pathlength: "pathLength",
  patterncontentunits: "patternContentUnits",
  patterntransform: "patternTransform",
  patternunits: "patternUnits",
  pointerevents: "pointerEvents",
  "pointer-events": "pointerEvents",
  pointsatx: "pointsAtX",
  pointsaty: "pointsAtY",
  pointsatz: "pointsAtZ",
  preservealpha: "preserveAlpha",
  preserveaspectratio: "preserveAspectRatio",
  primitiveunits: "primitiveUnits",
  refx: "refX",
  refy: "refY",
  renderingintent: "renderingIntent",
  "rendering-intent": "renderingIntent",
  repeatcount: "repeatCount",
  repeatdur: "repeatDur",
  requiredextensions: "requiredExtensions",
  requiredfeatures: "requiredFeatures",
  shaperendering: "shapeRendering",
  "shape-rendering": "shapeRendering",
  specularconstant: "specularConstant",
  specularexponent: "specularExponent",
  spreadmethod: "spreadMethod",
  startoffset: "startOffset",
  stddeviation: "stdDeviation",
  stitchtiles: "stitchTiles",
  stopcolor: "stopColor",
  "stop-color": "stopColor",
  stopopacity: "stopOpacity",
  "stop-opacity": "stopOpacity",
  strikethroughposition: "strikethroughPosition",
  "strikethrough-position": "strikethroughPosition",
  strikethroughthickness: "strikethroughThickness",
  "strikethrough-thickness": "strikethroughThickness",
  strokedasharray: "strokeDasharray",
  "stroke-dasharray": "strokeDasharray",
  strokedashoffset: "strokeDashoffset",
  "stroke-dashoffset": "strokeDashoffset",
  strokelinecap: "strokeLinecap",
  "stroke-linecap": "strokeLinecap",
  strokelinejoin: "strokeLinejoin",
  "stroke-linejoin": "strokeLinejoin",
  strokemiterlimit: "strokeMiterlimit",
  "stroke-miterlimit": "strokeMiterlimit",
  strokewidth: "strokeWidth",
  "stroke-width": "strokeWidth",
  strokeopacity: "strokeOpacity",
  "stroke-opacity": "strokeOpacity",
  suppresscontenteditablewarning: "suppressContentEditableWarning",
  suppresshydrationwarning: "suppressHydrationWarning",
  surfacescale: "surfaceScale",
  systemlanguage: "systemLanguage",
  tablevalues: "tableValues",
  targetx: "targetX",
  targety: "targetY",
  textanchor: "textAnchor",
  "text-anchor": "textAnchor",
  textdecoration: "textDecoration",
  "text-decoration": "textDecoration",
  textlength: "textLength",
  textrendering: "textRendering",
  "text-rendering": "textRendering",
  underlineposition: "underlinePosition",
  "underline-position": "underlinePosition",
  underlinethickness: "underlineThickness",
  "underline-thickness": "underlineThickness",
  unicodebidi: "unicodeBidi",
  "unicode-bidi": "unicodeBidi",
  unicoderange: "unicodeRange",
  "unicode-range": "unicodeRange",
  unitsperem: "unitsPerEm",
  "units-per-em": "unitsPerEm",
  unselectable: "unselectable",
  valphabetic: "vAlphabetic",
  "v-alphabetic": "vAlphabetic",
  vectoreffect: "vectorEffect",
  "vector-effect": "vectorEffect",
  vertadvy: "vertAdvY",
  "vert-adv-y": "vertAdvY",
  vertoriginx: "vertOriginX",
  "vert-origin-x": "vertOriginX",
  vertoriginy: "vertOriginY",
  "vert-origin-y": "vertOriginY",
  vhanging: "vHanging",
  "v-hanging": "vHanging",
  videographic: "vIdeographic",
  "v-ideographic": "vIdeographic",
  viewbox: "viewBox",
  viewtarget: "viewTarget",
  vmathematical: "vMathematical",
  "v-mathematical": "vMathematical",
  wordspacing: "wordSpacing",
  "word-spacing": "wordSpacing",
  writingmode: "writingMode",
  "writing-mode": "writingMode",
  xchannelselector: "xChannelSelector",
  xheight: "xHeight",
  "x-height": "xHeight",
  xlinkactuate: "xlinkActuate",
  "xlink:actuate": "xlinkActuate",
  xlinkarcrole: "xlinkArcrole",
  "xlink:arcrole": "xlinkArcrole",
  xlinkhref: "xlinkHref",
  "xlink:href": "xlinkHref",
  xlinkrole: "xlinkRole",
  "xlink:role": "xlinkRole",
  xlinkshow: "xlinkShow",
  "xlink:show": "xlinkShow",
  xlinktitle: "xlinkTitle",
  "xlink:title": "xlinkTitle",
  xlinktype: "xlinkType",
  "xlink:type": "xlinkType",
  xmlbase: "xmlBase",
  "xml:base": "xmlBase",
  xmllang: "xmlLang",
  "xml:lang": "xmlLang",
  "xml:space": "xmlSpace",
  xmlnsxlink: "xmlnsXlink",
  "xmlns:xlink": "xmlnsXlink",
  xmlspace: "xmlSpace",
  ychannelselector: "yChannelSelector",
  zoomandpan: "zoomAndPan",
  // event handlers
  onblur: "onBlur",
  onchange: "onChange",
  onclick: "onClick",
  oncontextmenu: "onContextMenu",
  ondoubleclick: "onDoubleClick",
  ondrag: "onDrag",
  ondragend: "onDragEnd",
  ondragenter: "onDragEnter",
  ondragexit: "onDragExit",
  ondragleave: "onDragLeave",
  ondragover: "onDragOver",
  ondragstart: "onDragStart",
  ondrop: "onDrop",
  onerror: "onError",
  onfocus: "onFocus",
  oninput: "onInput",
  oninvalid: "onInvalid",
  onkeydown: "onKeyDown",
  onkeypress: "onKeyPress",
  onkeyup: "onKeyUp",
  onload: "onLoad",
  onmousedown: "onMouseDown",
  onmouseenter: "onMouseEnter",
  onmouseleave: "onMouseLeave",
  onmousemove: "onMouseMove",
  onmouseout: "onMouseOut",
  onmouseover: "onMouseOver",
  onmouseup: "onMouseUp",
  onscroll: "onScroll",
  onsubmit: "onSubmit",
  ontouchcancel: "onTouchCancel",
  ontouchend: "onTouchEnd",
  ontouchmove: "onTouchMove",
  ontouchstart: "onTouchStart",
  onwheel: "onWheel"
};
function ml(e, t) {
  const { key: n, level: r, ...i } = t;
  switch (e.nodeType) {
    case 1:
      return nl.createElement(
        yl(e.nodeName),
        vl(e, n),
        ri(e.childNodes, r, i)
      );
    case 3: {
      const o = e.nodeValue?.toString() ?? "";
      if (!i.allowWhiteSpaces && /^\s+$/.test(o) && !/[\u00A0\u202F]/.test(o))
        return null;
      if (!e.parentNode)
        return o;
      const s = e.parentNode.nodeName.toLowerCase();
      return gl.includes(s) ? (/\S/.test(o) && console.warn(
        `A textNode is not allowed inside '${s}'. Your text "${o}" will be ignored`
      ), null) : o;
    }
    case 8:
      return null;
    case 11:
      return ri(e.childNodes, r, t);
    /* c8 ignore next 3 */
    default:
      return null;
  }
}
function vl(e, t) {
  const n = {
    key: t
  };
  if (e instanceof Element) {
    const r = e.getAttribute("class");
    r && (n.className = r), [...e.attributes].forEach((i) => {
      switch (i.name) {
        // this is manually handled above, so break;
        case "class":
          break;
        case "style":
          n[i.name] = pl(i.value);
          break;
        case "allowfullscreen":
        case "allowpaymentrequest":
        case "async":
        case "autofocus":
        case "autoplay":
        case "checked":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "formnovalidate":
        case "hidden":
        case "ismap":
        case "itemscope":
        case "loop":
        case "multiple":
        case "muted":
        case "nomodule":
        case "novalidate":
        case "open":
        case "readonly":
        case "required":
        case "reversed":
        case "selected":
        case "typemustmatch":
          n[ni[i.name] || i.name] = !0;
          break;
        default:
          n[ni[i.name] || i.name] = i.value;
      }
    });
  }
  return n;
}
function ri(e, t, n) {
  const r = [...e].map(
    (i, o) => L0(i, {
      ...n,
      index: o,
      level: t + 1
    })
  ).filter(Boolean);
  return r.length ? r : null;
}
function yl(e) {
  return /[a-z]+[A-Z]+[a-z]+/.test(e) ? e : e.toLowerCase();
}
function Ea(e, t = {}) {
  return typeof e == "string" ? Cl(e, t) : e instanceof Node ? L0(e, t) : null;
}
function L0(e, t = {}) {
  if (!e || !(e instanceof Node))
    return null;
  const { actions: n = [], index: r = 0, level: i = 0, randomKey: o } = t;
  let s = e, a = `${i}-${r}`;
  const l = [];
  return o && i === 0 && (a = `${hl()}-${a}`), Array.isArray(n) && n.forEach((c) => {
    c.condition(s, a, i) && (typeof c.pre == "function" && (s = c.pre(s, a, i), s instanceof Node || (s = e, process.env.NODE_ENV !== "production" && console.warn(
      "The `pre` method always must return a valid DomNode (instanceof Node) - your modification will be ignored (Hint: if you want to render a React-component, use the `post` method instead)"
    ))), typeof c.post == "function" && l.push(c.post(s, a, i)));
  }), l.length ? l : ml(s, { key: a, level: i, ...t });
}
function Cl(e, t = {}) {
  if (!e || typeof e != "string")
    return null;
  const {
    includeAllNodes: n = !1,
    nodeOnly: r = !1,
    selector: i = "body > *",
    type: o = "text/html"
  } = t;
  try {
    const a = new DOMParser().parseFromString(e, o);
    if (n) {
      const { childNodes: c } = a.body;
      return r ? c : [...c].map((u) => L0(u, t));
    }
    const l = a.querySelector(i) || a.body.childNodes[0];
    if (!(l instanceof Node))
      throw new TypeError("Error parsing input");
    return r ? l : L0(l, t);
  } catch (s) {
    process.env.NODE_ENV !== "production" && console.error(s);
  }
  return null;
}
var wl = Object.defineProperty, bl = (e, t, n) => t in e ? wl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, q2 = (e, t, n) => bl(e, typeof t != "symbol" ? t + "" : t, n), ii = "react-inlinesvg", xl = 10, _e = {
  IDLE: "idle",
  LOADING: "loading",
  LOADED: "loaded",
  FAILED: "failed",
  READY: "ready",
  UNSUPPORTED: "unsupported"
};
function Ll(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function L2() {
  return !!(typeof window < "u" && window.document?.createElement);
}
function _l() {
  return El() && typeof window < "u" && window !== null;
}
function Ml(e, ...t) {
  const n = {};
  for (const r in e)
    ({}).hasOwnProperty.call(e, r) && (t.includes(r) || (n[r] = e[r]));
  return n;
}
function Sl(e) {
  const t = "abcdefghijklmnopqrstuvwxyz", r = `${t}${t.toUpperCase()}1234567890`;
  let i = "";
  for (let o = 0; o < e; o++)
    i += Ll(r);
  return i;
}
async function Pa(e, t) {
  const n = await fetch(e, t), r = n.headers.get("content-type"), [i] = (r ?? "").split(/ ?; ?/);
  if (n.status > 299)
    throw new Error("Not found");
  if (!["image/svg+xml", "text/plain"].some((o) => i.includes(o)))
    throw new Error(`Content type isn't valid: ${i}`);
  return n.text();
}
function Il(e = 1) {
  return new Promise((t) => {
    setTimeout(t, e * 1e3);
  });
}
function El() {
  if (!document)
    return !1;
  const e = document.createElement("div");
  e.innerHTML = "<svg />";
  const t = e.firstChild;
  return !!t && t.namespaceURI === "http://www.w3.org/2000/svg";
}
var Pl = class {
  constructor() {
    q2(this, "cacheApi"), q2(this, "cacheStore"), q2(this, "subscribers", []), q2(this, "isReady", !1), this.cacheStore = /* @__PURE__ */ new Map();
    let e = ii, t = !1;
    L2() && (e = window.REACT_INLINESVG_CACHE_NAME ?? ii, t = !!window.REACT_INLINESVG_PERSISTENT_CACHE && "caches" in window), t ? caches.open(e).then((n) => {
      this.cacheApi = n;
    }).catch((n) => {
      console.error(`Failed to open cache: ${n.message}`), this.cacheApi = void 0;
    }).finally(() => {
      this.isReady = !0;
      const n = [...this.subscribers];
      this.subscribers.length = 0, n.forEach((r) => {
        try {
          r();
        } catch (i) {
          console.error(`Error in CacheStore subscriber callback: ${i.message}`);
        }
      });
    }) : this.isReady = !0;
  }
  onReady(e) {
    this.isReady ? e() : this.subscribers.push(e);
  }
  async get(e, t) {
    return await (this.cacheApi ? this.fetchAndAddToPersistentCache(e, t) : this.fetchAndAddToInternalCache(e, t)), this.cacheStore.get(e)?.content ?? "";
  }
  set(e, t) {
    this.cacheStore.set(e, t);
  }
  isCached(e) {
    return this.cacheStore.get(e)?.status === _e.LOADED;
  }
  async fetchAndAddToInternalCache(e, t) {
    const n = this.cacheStore.get(e);
    if (n?.status === _e.LOADING) {
      await this.handleLoading(e, async () => {
        this.cacheStore.set(e, { content: "", status: _e.IDLE }), await this.fetchAndAddToInternalCache(e, t);
      });
      return;
    }
    if (!n?.content) {
      this.cacheStore.set(e, { content: "", status: _e.LOADING });
      try {
        const r = await Pa(e, t);
        this.cacheStore.set(e, { content: r, status: _e.LOADED });
      } catch (r) {
        throw this.cacheStore.set(e, { content: "", status: _e.FAILED }), r;
      }
    }
  }
  async fetchAndAddToPersistentCache(e, t) {
    const n = this.cacheStore.get(e);
    if (n?.status === _e.LOADED)
      return;
    if (n?.status === _e.LOADING) {
      await this.handleLoading(e, async () => {
        this.cacheStore.set(e, { content: "", status: _e.IDLE }), await this.fetchAndAddToPersistentCache(e, t);
      });
      return;
    }
    this.cacheStore.set(e, { content: "", status: _e.LOADING });
    const r = await this.cacheApi?.match(e);
    if (r) {
      const i = await r.text();
      this.cacheStore.set(e, { content: i, status: _e.LOADED });
      return;
    }
    try {
      await this.cacheApi?.add(new Request(e, t));
      const o = await (await this.cacheApi?.match(e))?.text() ?? "";
      this.cacheStore.set(e, { content: o, status: _e.LOADED });
    } catch (i) {
      throw this.cacheStore.set(e, { content: "", status: _e.FAILED }), i;
    }
  }
  async handleLoading(e, t) {
    for (let n = 0; n < xl; n++) {
      if (this.cacheStore.get(e)?.status !== _e.LOADING)
        return;
      await Il(0.1);
    }
    await t();
  }
  keys() {
    return [...this.cacheStore.keys()];
  }
  data() {
    return [...this.cacheStore.entries()].map(([e, t]) => ({ [e]: t }));
  }
  async delete(e) {
    this.cacheApi && await this.cacheApi.delete(e), this.cacheStore.delete(e);
  }
  async clear() {
    if (this.cacheApi) {
      const e = await this.cacheApi.keys();
      await Promise.allSettled(e.map((t) => this.cacheApi.delete(t)));
    }
    this.cacheStore.clear();
  }
};
function oi(e) {
  const t = ce(void 0);
  return le(() => {
    t.current = e;
  }), t.current;
}
function kl(e) {
  const {
    baseURL: t,
    content: n,
    description: r,
    handleError: i,
    hash: o,
    preProcessor: s,
    title: a,
    uniquifyIDs: l = !1
  } = e;
  try {
    const c = Ol(n, s), u = Ea(c, { nodeOnly: !0 });
    if (!u || !(u instanceof SVGSVGElement))
      throw new Error("Could not convert the src to a DOM Node");
    const d = ka(u, { baseURL: t, hash: o, uniquifyIDs: l });
    if (r) {
      const f = d.querySelector("desc");
      f?.parentNode && f.parentNode.removeChild(f);
      const p = document.createElementNS("http://www.w3.org/2000/svg", "desc");
      p.innerHTML = r, d.prepend(p);
    }
    if (typeof a < "u") {
      const f = d.querySelector("title");
      if (f?.parentNode && f.parentNode.removeChild(f), a) {
        const p = document.createElementNS("http://www.w3.org/2000/svg", "title");
        p.innerHTML = a, d.prepend(p);
      }
    }
    return d;
  } catch (c) {
    return i(c);
  }
}
function Ol(e, t) {
  return t ? t(e) : e;
}
function ka(e, t) {
  const { baseURL: n = "", hash: r, uniquifyIDs: i } = t, o = ["id", "href", "xlink:href", "xlink:role", "xlink:arcrole"], s = ["href", "xlink:href"], a = (l, c) => s.includes(l) && (c ? !c.includes("#") : !1);
  return i && [...e.children].forEach((l) => {
    if (l.attributes?.length) {
      const c = Object.values(l.attributes).map((u) => {
        const d = u, f = /url\((.*?)\)/.exec(u.value);
        return f?.[1] && (d.value = u.value.replace(f[0], `url(${n}${f[1]}__${r})`)), d;
      });
      o.forEach((u) => {
        const d = c.find((f) => f.name === u);
        d && !a(u, d.value) && (d.value = `${d.value}__${r}`);
      });
    }
    return l.children.length ? ka(l, t) : l;
  }), e;
}
var Qt;
function Tl(e) {
  const {
    cacheRequests: t = !0,
    children: n = null,
    description: r,
    fetchOptions: i,
    innerRef: o,
    loader: s = null,
    onError: a,
    onLoad: l,
    src: c,
    title: u,
    uniqueHash: d
  } = e, [f, p] = _a(
    (x, E) => ({
      ...x,
      ...E
    }),
    {
      content: "",
      element: null,
      isCached: t && Qt.isCached(e.src),
      status: _e.IDLE
    }
  ), { content: y, element: m, isCached: g, status: _ } = f, C = oi(e), v = oi(f), w = ce(d ?? Sl(8)), b = ce(!1), I = ce(!1), O = Y(
    (x) => {
      b.current && (p({
        status: x.message === "Browser does not support SVG" ? _e.UNSUPPORTED : _e.FAILED
      }), a?.(x));
    },
    [a]
  ), V = Y((x, E = !1) => {
    b.current && p({
      content: x,
      isCached: E,
      status: _e.LOADED
    });
  }, []), A = Y(async () => {
    const x = await Pa(c, i);
    V(x);
  }, [i, V, c]), N = Y(() => {
    try {
      const x = kl({ ...e, handleError: O, hash: w.current, content: y }), E = Ea(x);
      if (!E || !rl(E))
        throw new Error("Could not convert the src to a React element");
      p({
        element: E,
        status: _e.READY
      });
    } catch (x) {
      O(x);
    }
  }, [y, O, e]), T = Y(async () => {
    const x = /^data:image\/svg[^,]*?(;base64)?,(.*)/u.exec(c);
    let E;
    if (x ? E = x[1] ? window.atob(x[2]) : decodeURIComponent(x[2]) : c.includes("<svg") && (E = c), E) {
      V(E);
      return;
    }
    try {
      if (t) {
        const R = await Qt.get(c, i);
        V(R, !0);
      } else
        await A();
    } catch (R) {
      O(R);
    }
  }, [t, A, i, O, V, c]), D = Y(async () => {
    b.current && p({
      content: "",
      element: null,
      isCached: !1,
      status: _e.LOADING
    });
  }, []);
  le(
    () => {
      if (b.current = !0, !(!L2() || I.current)) {
        try {
          if (_ === _e.IDLE) {
            if (!_l())
              throw new Error("Browser does not support SVG");
            if (!c)
              throw new Error("Missing src");
            D();
          }
        } catch (x) {
          O(x);
        }
        return I.current = !0, () => {
          b.current = !1;
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), le(() => {
    if (!(!L2() || !C) && C.src !== c) {
      if (!c) {
        O(new Error("Missing src"));
        return;
      }
      D();
    }
  }, [O, D, C, c]), le(() => {
    _ === _e.LOADED && N();
  }, [_, N]), le(() => {
    !L2() || !C || C.src !== c || (C.title !== u || C.description !== r) && N();
  }, [r, N, C, c, u]), le(() => {
    if (v)
      switch (_) {
        case _e.LOADING: {
          v.status !== _e.LOADING && T();
          break;
        }
        case _e.LOADED: {
          v.status !== _e.LOADED && N();
          break;
        }
        case _e.READY: {
          v.status !== _e.READY && l?.(c, g);
          break;
        }
      }
  }, [T, N, g, l, v, c, _]);
  const $ = Ml(
    e,
    "baseURL",
    "cacheRequests",
    "children",
    "description",
    "fetchOptions",
    "innerRef",
    "loader",
    "onError",
    "onLoad",
    "preProcessor",
    "src",
    "title",
    "uniqueHash",
    "uniquifyIDs"
  );
  return L2() ? m ? Ma(m, {
    ref: o,
    ...$
  }) : [_e.UNSUPPORTED, _e.FAILED].includes(_) ? n : s : s;
}
function Hl(e) {
  Qt || (Qt = new Pl());
  const { loader: t } = e, [n, r] = fe(Qt.isReady);
  return le(() => {
    n || Qt.onReady(() => {
      r(!0);
    });
  }, [n]), n ? /* @__PURE__ */ ge.createElement(Tl, { ...e }) : t;
}
const Dl = S("span").withConfig({
  shouldForwardProp: (e, t) => !["rotate"].includes(e) && t(e),
  displayName: "svg-icon__Container",
  componentId: "sc-kfvmzi-0"
})(({
  theme: e,
  size: t,
  width: n,
  height: r,
  color: i,
  active: o,
  rotate: s,
  marginLeft: a,
  marginRight: l
}) => ({
  display: "inline-block",
  verticalAlign: "middle",
  width: n ?? t,
  height: r ?? t,
  color: i || "inherit",
  svg: {
    display: "block",
    fill: "currentColor",
    color: i || "inherit",
    width: n ?? t,
    height: r ?? t
  },
  transform: s ? "rotateX(180deg)" : "rotateX(0deg)",
  transition: "transform 500ms ease",
  marginLeft: a ? 8 : "initial",
  marginRight: l ? 8 : "initial"
})), Rl = S(Hl).withConfig({
  displayName: "svg-icon__StyledReactSVG",
  componentId: "sc-kfvmzi-1"
})(({
  theme: e
}) => ({
  display: "flex"
})), ve = ge.forwardRef(({
  src: e,
  alt: t,
  size: n = 16,
  color: r,
  onClick: i,
  rotate: o = !1,
  ...s
}, a) => /* @__PURE__ */ h(Dl, { ref: a, role: "img", "aria-label": t, size: n, color: r, rotate: o, onClick: (u) => {
  i && i(u);
}, ...s, children: /* @__PURE__ */ h(Rl, { src: e, preProcessor: (u) => u, title: t, "aria-hidden": "true", cacheRequests: !0 }) })), A2 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.8686%204.39382L7.91888%209.34357L2.96911%204.3938L1.83774%205.52517L7.91886%2011.6063L14%205.52519L12.8686%204.39382Z'/%3e%3c/svg%3e", Dv = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='12'%20height='14'%20viewBox='0%200%2012%2014'%20fill='none'%3e%3cpath%20d='M6.65678%2013.0811L0.575724%206.99999L6.65683%200.918864L7.7882%202.05023L3.6385%206.19993L11.9568%206.19993L11.9568%207.79994L3.6384%207.79993L7.78815%2011.9497L6.65678%2013.0811Z'%20fill='%23BABCBF'/%3e%3c/svg%3e", X2 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.86867%203.05032L9.81842%208.00006L4.86865%2012.9498L6.00002%2014.0812L12.0811%208.00009L6.00004%201.91895L4.86867%203.05032Z'/%3e%3c/svg%3e", Gn = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.05032%2011.1313L8.00006%206.18158L12.9498%2011.1313L14.0812%209.99998L8.00009%203.91886L1.91895%209.99996L3.05032%2011.1313Z'/%3e%3c/svg%3e", Rv = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.6569%2014.082L2.57585%208.00097L8.65695%201.91984L9.78832%203.05121L5.63862%207.20091L13.9569%207.20091L13.9569%208.80091L5.63853%208.80091L9.78827%2012.9507L8.6569%2014.082Z'/%3e%3c/svg%3e", Nv = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.4092%202.08932C11.109%201.78905%2011.109%201.30223%2011.4092%201.00196L12.186%200.225199C12.4862%20-0.0750661%2012.9731%20-0.0750664%2013.2733%200.225199L18.7104%205.66225C19.0107%205.96252%2019.0107%206.44934%2018.7104%206.74961L17.9336%207.52637C17.6334%207.82664%2017.1465%207.82664%2016.8463%207.52637L11.4092%202.08932Z'%20fill='%237490FF'/%3e%3cpath%20d='M0.225199%2012.1869C-0.075066%2012.4872%20-0.0750665%2012.974%200.225198%2013.2742L5.66225%2018.7113C5.96252%2019.0116%206.44934%2019.0116%206.74961%2018.7113L7.52637%2017.9345C7.82664%2017.6343%207.82664%2017.1474%207.52637%2016.8472L2.08932%2011.4101C1.78905%2011.1099%201.30223%2011.1099%201.00196%2011.4101L0.225199%2012.1869Z'%20fill='%237490FF'/%3e%3cpath%20d='M11.3319%202.94358L2.94338%2011.3321L7.60367%2015.9924L11.0525%2012.5436L18.5089%2020L20.0002%2018.5087L12.5438%2011.0523L15.9922%207.60387L11.3319%202.94358Z'%20fill='%237490FF'/%3e%3c/svg%3e", Av = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='32'%20height='32'%20rx='2'%20fill='%237490FF'/%3e%3cpath%20d='M7.15407%2016.8252C6.94864%2017.0306%206.94864%2017.3637%207.15407%2017.5691L11.6177%2022.0327C11.8231%2022.2382%2012.1562%2022.2382%2012.3616%2022.0327L13.1055%2021.2888C13.311%2021.0834%2013.311%2020.7503%2013.1055%2020.5449L8.64194%2016.0813C8.43651%2015.8758%208.10344%2015.8758%207.89801%2016.0813L7.15407%2016.8252Z'%20fill='white'/%3e%3cpath%20d='M16.0813%209.38587L9.38587%2016.0813L13.1055%2019.8009L15.8579%2017.0485L21.8094%2023L22.9997%2021.8097L17.0482%2015.8582L19.8009%2013.1055L16.0813%209.38587Z'%20fill='white'/%3e%3cpath%20d='M16.0813%208.64194C15.8758%208.43651%2015.8758%208.10344%2016.0813%207.89801L16.8252%207.15407C17.0306%206.94864%2017.3637%206.94864%2017.5691%207.15407L22.0327%2011.6177C22.2382%2011.8231%2022.2382%2012.1562%2022.0327%2012.3616L21.2888%2013.1055C21.0834%2013.311%2020.7503%2013.311%2020.5449%2013.1055L16.0813%208.64194Z'%20fill='white'/%3e%3c/svg%3e", Nl = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='10'%20height='7'%20viewBox='0%200%2010%207'%20fill='none'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.88865%206.81867L-6.05909e-07%203.02203L1.24334%201.80811L4.07404%204.57183L8.75666%208.44978e-07L10%201.21393L5.31776%205.78539L4.07383%207L3.88865%206.81867Z'%20fill='white'/%3e%3c/svg%3e", Al = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='1'%20width='18'%20height='18'%20rx='3'%20stroke='%23DFE1E4'%20stroke-width='2'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17%206.58391L15.4161%205L9.29847%2011.1176L5.58391%207.40306L4%208.98697L9.27971%2014.2667L9.29847%2014.2479L9.31723%2014.2667L17%206.58391Z'%20fill='%23DFE1E4'/%3e%3c/svg%3e", Bl = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='20'%20height='20'%20rx='4'%20/%3e%3cpath%20d='M17%206.58391L15.4161%205L9.29847%2011.1176L5.58391%207.40306L4%208.98697L9.27971%2014.2667L9.29847%2014.2479L9.31723%2014.2667L17%206.58391Z'%20fill='white'/%3e%3c/svg%3e", Fl = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='1'%20width='18'%20height='18'%20rx='3'%20stroke='%230021A5'%20stroke-width='2'/%3e%3c/svg%3e", Vl = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.4%2011.4686L2.36569%208.43432C2.05327%208.1219%201.54673%208.1219%201.23431%208.43432C0.921895%208.74673%200.921895%209.25327%201.23431%209.56569L4.83431%2013.1657C5.14673%2013.4781%205.65327%2013.4781%205.96569%2013.1657L14.7657%204.36569C15.0781%204.05327%2015.0781%203.54673%2014.7657%203.23431C14.4533%202.9219%2013.9467%202.9219%2013.6343%203.23431L5.4%2011.4686Z'/%3e%3c/svg%3e", $l = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8%2016C12.4183%2016%2016%2012.4183%2016%208C16%203.58172%2012.4183%200%208%200C3.58172%200%200%203.58172%200%208C0%2012.4183%203.58172%2016%208%2016ZM7.19988%203.99989L7.19988%208.99863L7.19583%209.00565L10.6599%2011.0056L11.4599%209.62001L8.79988%208.08423L8.79988%203.99989H7.19988Z'%20fill='%23536ED9'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Zl = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14%2014L2%202'%20stroke='%23BABBBF'%20stroke-width='1.6'/%3e%3cpath%20d='M2%2014L14%202.00001'%20stroke='%23BABBBF'%20stroke-width='1.6'/%3e%3c/svg%3e", Oa = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M4%202C4%200.89543%204.89543%200%206%200L12%200C13.1046%200%2014%200.895431%2014%202L14%208C14%209.10457%2013.1046%2010%2012%2010L6%2010C4.89543%2010%204%209.10457%204%208L4%202ZM2%204H3L3%208C3%209.65685%204.34315%2011%206%2011L10%2011V12C10%2013.1046%209.10457%2014%208%2014L2%2014C0.89543%2014%200%2013.1046%200%2012L0%206C0%204.89543%200.895431%204%202%204Z'%20fill='%230021A5'/%3e%3c/svg%3e", Bv = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_7591)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8%200C3.58172%200%200%203.58172%200%208C0%2012.4183%203.58172%2016%208%2016C12.4183%2016%2016%2012.4183%2016%208C16%203.58172%2012.4183%200%208%200ZM11.5655%2010.4343L10.4341%2011.5657L7.99993%209.13154L5.56573%2011.5657L4.43435%2010.4344L6.86856%208.00017L4.43408%205.5657L5.56545%204.43433L7.99993%206.8688L10.4344%204.43437L11.5657%205.56575L9.1313%208.00017L11.5655%2010.4343Z'%20fill='%23BABBBF'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_7591'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Fv = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_11475_8527)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.59999%200C4.04181%200%204.39998%200.358323%204.39998%200.800338V0.889584C6.00316%201.25352%207.19996%202.68786%207.19996%204.40185V5.09408C7.19996%205.53609%206.84179%205.89441%206.39996%205.89441C5.95813%205.89441%205.59996%205.53609%205.59996%205.09408V4.40185C5.59996%203.58138%205.10633%202.87626%204.39998%202.56751V7.49491L4.96715%207.76319C6.33048%208.40806%207.19996%209.78151%207.19996%2011.2902L7.19997%2011.5883C7.19997%2013.3014%206.00404%2014.7364%204.39998%2015.1005V15.1997C4.39998%2015.6417%204.04181%2016%203.59999%2016C3.15816%2016%202.79999%2015.6417%202.79999%2015.1997V15.1006C1.19767%2014.7369%200%2013.3032%200%2011.5883V10.912C0%2010.47%200.358171%2010.1116%200.799997%2010.1116C1.24182%2010.1116%201.59999%2010.47%201.59999%2010.912V11.5883C1.59999%2012.4091%202.09392%2013.114%202.79999%2013.4227V8.50867L2.2369%208.24232C0.871072%207.59626%200%206.22029%200%204.70885V4.40185C0%202.68786%201.1968%201.25351%202.79999%200.88958V0.800338C2.79999%200.358323%203.15816%200%203.59999%200ZM1.59999%204.40185C1.59999%203.58138%202.09363%202.87625%202.79999%202.5675V6.7337C2.06332%206.33087%201.59999%205.55589%201.59999%204.70885V4.40185ZM4.39998%2013.4226V9.26959C5.13652%209.6706%205.59997%2010.4444%205.59997%2011.2902L5.59997%2011.5883C5.59997%2012.4084%205.10663%2013.1138%204.39998%2013.4226Z'%20fill='%230021A5'/%3e%3cpath%20d='M10.4%208.00338C10.4%207.73778%2010.4117%207.47724%2010.4344%207.22278L11.1998%207.22269C11.6416%207.22264%2011.9998%206.86428%2011.9997%206.42226C11.9997%205.98025%2011.6414%205.62197%2011.1996%205.62202L10.7382%205.62207C10.932%204.97556%2011.2005%204.40023%2011.5213%203.92169C12.2015%202.90672%2013.0547%202.40101%2013.891%202.40101C14.1932%202.40101%2014.5191%202.49427%2014.745%202.64902C15.1095%202.8988%2015.6074%202.80566%2015.857%202.44099C16.1067%202.07631%2016.0136%201.5782%2015.6491%201.32842C15.1228%200.967796%2014.4718%200.800338%2013.891%200.800338C12.3575%200.800338%2011.0652%201.72793%2010.1923%203.03028C9.69764%203.7684%209.31776%204.65091%209.08071%205.62226L7.99986%205.62239C7.55804%205.62244%207.19991%205.9808%207.19996%206.42282C7.20001%206.86483%207.55822%207.22311%208.00005%207.22306L8.8291%207.22297C8.80982%207.4798%208.79997%207.74021%208.79997%208.00338C8.79997%208.01059%208.79998%208.0178%208.79999%208.02501L7.99938%208.02567C7.55755%208.02603%207.19968%208.38465%207.20004%208.82666C7.20041%209.26868%207.55887%209.62671%208.0007%209.62634L8.92778%209.62558C9.13162%2010.8967%209.57159%2012.0503%2010.1923%2012.9765C11.0652%2014.2788%2012.3575%2015.2064%2013.891%2015.2064C14.4491%2015.2064%2015.1196%2015.0669%2015.6687%2014.6696C16.0267%2014.4106%2016.1071%2013.9103%2015.8482%2013.5521C15.5893%2013.1939%2015.0892%2013.1135%2014.7312%2013.3725C14.5282%2013.5194%2014.2159%2013.6057%2013.891%2013.6057C13.0547%2013.6057%2012.2015%2013.1%2011.5213%2012.0851C11.0796%2011.4261%2010.7368%2010.5835%2010.552%209.62424L11.2006%209.62371C11.6424%209.62334%2012.0003%209.26472%2011.9999%208.82271C11.9996%208.3807%2011.6411%208.02267%2011.1993%208.02303L10.4%208.02369C10.4%208.01692%2010.4%208.01015%2010.4%208.00338Z'%20fill='%230021A5'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_11475_8527'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Vv = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_6262_38149)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.87986%201.90074C8.81536%202.88858%208.20001%204.26907%208.20001%205.75C8.20001%208.6495%2010.5505%2011%2013.45%2011C13.5589%2011%2013.6673%2010.9967%2013.7752%2010.9901L15.2824%2010.8982L14.445%2012.1547C13.0632%2014.2279%2010.739%2015.5%208.20001%2015.5C4.05787%2015.5%200.70001%2012.1421%200.700011%208C0.700012%203.85786%204.05788%200.500001%208.20001%200.500001C8.63852%200.500001%209.07259%200.537715%209.49877%200.612172L10.9881%200.872358L9.87986%201.90074Z'%20fill='%230021A5'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_6262_38149'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", $v = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='32'%20height='32'%20rx='2'%20fill='%23D2D3D9'/%3e%3cpath%20d='M8.29714%2020H5.71902V12.7273H8.31845C9.04998%2012.7273%209.67972%2012.8729%2010.2077%2013.1641C10.7356%2013.4529%2011.1416%2013.8684%2011.4257%2014.4105C11.7122%2014.9527%2011.8554%2015.6013%2011.8554%2016.3565C11.8554%2017.1141%2011.7122%2017.7652%2011.4257%2018.3097C11.1416%2018.8542%2010.7332%2019.272%2010.2006%2019.5632C9.67025%2019.8544%209.03578%2020%208.29714%2020ZM7.25666%2018.6825H8.23322C8.68777%2018.6825%209.07011%2018.602%209.38024%2018.4411C9.69274%2018.2777%209.92711%2018.0256%2010.0834%2017.6847C10.242%2017.3414%2010.3213%2016.8987%2010.3213%2016.3565C10.3213%2015.8191%2010.242%2015.38%2010.0834%2015.0391C9.92711%2014.6982%209.69392%2014.4472%209.38379%2014.2862C9.07366%2014.1252%208.69132%2014.0447%208.23677%2014.0447H7.25666V18.6825ZM15.4518%2020.1065C14.8907%2020.1065%2014.4078%2019.9929%2014.0029%2019.7656C13.6005%2019.536%2013.2903%2019.2116%2013.0725%2018.7926C12.8547%2018.3712%2012.7458%2017.8729%2012.7458%2017.2976C12.7458%2016.7365%2012.8547%2016.2441%2013.0725%2015.8203C13.2903%2015.3965%2013.5969%2015.0663%2013.9923%2014.8295C14.39%2014.5928%2014.8564%2014.4744%2015.3914%2014.4744C15.7513%2014.4744%2016.0863%2014.5324%2016.3964%2014.6484C16.7089%2014.7621%2016.9811%2014.9337%2017.2132%2015.1634C17.4475%2015.393%2017.6298%2015.6818%2017.76%2016.0298C17.8902%2016.3755%2017.9553%2016.7803%2017.9553%2017.2443V17.6598H13.3495V16.7223H16.5313C16.5313%2016.5045%2016.484%2016.3116%2016.3893%2016.1435C16.2946%2015.9754%2016.1632%2015.844%2015.9951%2015.7493C15.8294%2015.6522%2015.6365%2015.6037%2015.4163%2015.6037C15.1866%2015.6037%2014.983%2015.657%2014.8055%2015.7635C14.6303%2015.8677%2014.493%2016.0085%2014.3936%2016.1861C14.2941%2016.3613%2014.2432%2016.5566%2014.2409%2016.772V17.6634C14.2409%2017.9332%2014.2906%2018.1664%2014.39%2018.3629C14.4918%2018.5594%2014.635%2018.7109%2014.8197%2018.8175C15.0044%2018.924%2015.2233%2018.9773%2015.4767%2018.9773C15.6447%2018.9773%2015.7986%2018.9536%2015.9383%2018.9062C16.078%2018.8589%2016.1975%2018.7879%2016.297%2018.6932C16.3964%2018.5985%2016.4722%2018.4825%2016.5242%2018.3452L17.9234%2018.4375C17.8524%2018.7737%2017.7068%2019.0672%2017.4866%2019.3182C17.2688%2019.5668%2016.9871%2019.7609%2016.6414%2019.9006C16.2981%2020.0379%2015.9016%2020.1065%2015.4518%2020.1065ZM18.971%2020V12.7273H23.7863V13.995H20.5086V15.728H23.4667V16.9957H20.5086V20H18.971ZM24.7922%2020V14.5455H26.305V20H24.7922ZM25.5521%2013.8423C25.3272%2013.8423%2025.1343%2013.7678%2024.9733%2013.6186C24.8147%2013.4671%2024.7354%2013.286%2024.7354%2013.0753C24.7354%2012.867%2024.8147%2012.6882%2024.9733%2012.5391C25.1343%2012.3875%2025.3272%2012.3118%2025.5521%2012.3118C25.777%2012.3118%2025.9688%2012.3875%2026.1274%2012.5391C26.2884%2012.6882%2026.3689%2012.867%2026.3689%2013.0753C26.3689%2013.286%2026.2884%2013.4671%2026.1274%2013.6186C25.9688%2013.7678%2025.777%2013.8423%2025.5521%2013.8423Z'%20fill='white'/%3e%3c/svg%3e", E2 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204L8%208L12%2012'%20stroke='%23BABCBF'%20stroke-width='1.6'/%3e%3cpath%20d='M4%2012L8%208L12%204'%20stroke='%23BABCBF'%20stroke-width='1.6'/%3e%3c/svg%3e", Zv = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.9765%209.32548C12.3425%209.69151%2012.9359%209.69151%2013.3019%209.32548L14.6274%208L14.7681%207.8532C16.4563%206.01451%2016.4094%203.15453%2014.6274%201.37258C12.7973%20-0.457527%209.83011%20-0.457528%208%201.37258L6.67452%202.69806L6.60169%202.77981C6.31036%203.1477%206.33464%203.68367%206.67452%204.02355C7.04054%204.38957%207.63398%204.38957%208%204.02355L9.32548%202.69807L9.44568%202.58462C10.5498%201.6014%2012.2431%201.63922%2013.3019%202.69807C14.4%203.79613%2014.4%205.57645%2013.3019%206.67452L11.9765%208L11.9036%208.08175C11.6123%208.44964%2011.6366%208.98561%2011.9765%209.32548ZM1.37258%2014.6274C3.20269%2016.4575%206.16989%2016.4575%208%2014.6274L9.32548%2013.3019L9.39831%2013.2202C9.68964%2012.8523%209.66536%2012.3163%209.32548%2011.9764C8.95946%2011.6104%208.36602%2011.6104%208%2011.9764L6.67452%2013.3019L6.55432%2013.4154C5.45015%2014.3986%203.75692%2014.3608%202.69807%2013.3019C1.6%2012.2039%201.6%2010.4235%202.69807%209.32548L4.02355%208L4.09638%207.91825C4.3877%207.55036%204.36343%207.01439%204.02355%206.67451C3.65753%206.30849%203.06409%206.30849%202.69807%206.67451L1.37258%208L1.2319%208.1468C-0.456262%209.98549%20-0.409368%2012.8455%201.37258%2014.6274ZM13.5292%2013.3963C13.8953%2013.0303%2013.8953%2012.4368%2013.5292%2012.0708L4.25085%202.79241C3.88483%202.42638%203.29139%202.42638%202.92537%202.79241C2.55935%203.15843%202.55935%203.75187%202.92537%204.11789L12.2038%2013.3963C12.5698%2013.7623%2013.1632%2013.7623%2013.5292%2013.3963Z'%20fill='%230021A5'/%3e%3c/svg%3e", Wv = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20d='M13.7833%203.31103C12.3985%202.19758%2010.208%202.00922%2010.1149%202.00122C9.96873%201.98885%209.82982%202.07176%209.77018%202.20558C9.76582%202.21431%209.71782%202.32412%209.66473%202.49503C10.5804%202.64922%2011.7055%202.96049%2012.7236%203.59249C12.8865%203.69358%2012.9367%203.90812%2012.8356%204.07176C12.7702%204.17794%2012.656%204.23612%2012.5396%204.23612C12.4771%204.23612%2012.4138%204.2194%2012.3564%204.18376C10.6065%203.09867%208.42036%203.04412%208%203.04412C7.57964%203.04412%205.39273%203.09867%203.64436%204.18376C3.48073%204.28558%203.26691%204.23467%203.16509%204.07176C3.06327%203.90812%203.11418%203.69431%203.27709%203.59249C4.29527%202.96122%205.41964%202.64922%206.336%202.49503C6.28218%202.3234%206.23418%202.21431%206.23055%202.20558C6.17018%202.07176%206.032%201.9874%205.88509%202.00194C5.79273%202.00922%203.60218%202.19758%202.19855%203.32703C1.46545%204.00412%200%207.96631%200%2011.3918C0%2011.4521%200.016%2011.5118%200.0458182%2011.5641C1.05745%2013.3409%203.81673%2013.8063%204.44582%2013.8267C4.44945%2013.8267%204.45309%2013.8267%204.45673%2013.8267C4.568%2013.8267%204.67273%2013.7736%204.73818%2013.6834L5.37455%2012.8092C3.65891%2012.3656%202.78255%2011.6129%202.73164%2011.5685C2.58764%2011.4412%202.57382%2011.2216%202.70109%2011.0776C2.82836%2010.9336%203.04727%2010.9198%203.19127%2011.0463C3.21236%2011.0652%204.82618%2012.4347%208%2012.4347C11.1796%2012.4347%2012.7935%2011.0594%2012.8095%2011.0456C12.9535%2010.9205%2013.1731%2010.9336%2013.2996%2011.0783C13.4262%2011.2223%2013.4124%2011.4412%2013.2691%2011.5678C13.2182%2011.6129%2012.3418%2012.3649%2010.6262%2012.8085L11.2625%2013.6827C11.328%2013.7729%2011.4327%2013.8259%2011.544%2013.8259C11.5476%2013.8259%2011.5513%2013.8259%2011.5549%2013.8259C12.184%2013.8063%2014.9433%2013.3409%2015.9549%2011.5634C15.984%2011.511%2016%2011.4521%2016%2011.3918C16%207.96631%2014.5345%204.00412%2013.7833%203.31103ZM5.73891%2010.0005C5.06691%2010.0005%204.52145%209.37722%204.52145%208.60922C4.52145%207.84122%205.06618%207.21794%205.73891%207.21794C6.41164%207.21794%206.95636%207.84122%206.95636%208.60922C6.95636%209.37722%206.41164%2010.0005%205.73891%2010.0005ZM10.2611%2010.0005C9.58909%2010.0005%209.04364%209.37722%209.04364%208.60922C9.04364%207.84122%209.58836%207.21794%2010.2611%207.21794C10.9331%207.21794%2011.4785%207.84122%2011.4785%208.60922C11.4785%209.37722%2010.9331%2010.0005%2010.2611%2010.0005Z'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Uv = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%2027.9612L42.9822%200H95.6923C100.111%200%20103.692%203.58172%20103.692%208V112C103.692%20116.418%20100.111%20120%2095.6923%20120H24C19.5817%20120%2016%20116.418%2016%20112V27.9612Z'%20fill='url(%23paint0_linear_111_12912)'/%3e%3cpath%20opacity='0.66'%20d='M29.8457%2077.3846C29.8457%2075.4729%2031.3955%2073.9231%2033.3072%2073.9231H88.6919C90.6036%2073.9231%2092.1534%2075.4729%2092.1534%2077.3846C92.1534%2079.2964%2090.6036%2080.8462%2088.6919%2080.8462H33.3072C31.3955%2080.8462%2029.8457%2079.2964%2029.8457%2077.3846Z'%20fill='white'/%3e%3cpath%20opacity='0.66'%20d='M29.8457%2090.3077C29.8457%2088.3959%2031.3955%2086.8462%2033.3072%2086.8462H88.6919C90.6036%2086.8462%2092.1534%2088.3959%2092.1534%2090.3077C92.1534%2092.2195%2090.6036%2093.7692%2088.6919%2093.7692H33.3072C31.3955%2093.7692%2029.8457%2092.2195%2029.8457%2090.3077Z'%20fill='white'/%3e%3cpath%20opacity='0.66'%20d='M29.8457%20103.231C29.8457%20101.319%2031.3955%2099.7692%2033.3072%2099.7692H64.4611C66.3728%2099.7692%2067.9226%20101.319%2067.9226%20103.231C67.9226%20105.143%2066.3728%20106.692%2064.4611%20106.692H33.3072C31.3955%20106.692%2029.8457%20105.143%2029.8457%20103.231Z'%20fill='white'/%3e%3cpath%20opacity='0.82'%20d='M16%2027.6923L43.6923%200V19.6923C43.6923%2024.1106%2040.1106%2027.6923%2035.6923%2027.6923H16Z'%20fill='url(%23paint1_linear_111_12912)'/%3e%3ccircle%20opacity='0.66'%20cx='60.5'%20cy='43.5'%20r='19.5'%20fill='white'/%3e%3cpath%20d='M59.7969%2054V34H61.0781V54H59.7969ZM63.1953%2040.6016C63.1328%2039.9714%2062.8646%2039.4818%2062.3906%2039.1328C61.9167%2038.7839%2061.2734%2038.6094%2060.4609%2038.6094C59.9089%2038.6094%2059.4427%2038.6875%2059.0625%2038.8438C58.6823%2038.9948%2058.3906%2039.2057%2058.1875%2039.4766C57.9896%2039.7474%2057.8906%2040.0547%2057.8906%2040.3984C57.8802%2040.6849%2057.9401%2040.9349%2058.0703%2041.1484C58.2057%2041.362%2058.3906%2041.5469%2058.625%2041.7031C58.8594%2041.8542%2059.1302%2041.987%2059.4375%2042.1016C59.7448%2042.2109%2060.0729%2042.3047%2060.4219%2042.3828L61.8594%2042.7266C62.5573%2042.8828%2063.1979%2043.0911%2063.7812%2043.3516C64.3646%2043.612%2064.8698%2043.9323%2065.2969%2044.3125C65.724%2044.6927%2066.0547%2045.1406%2066.2891%2045.6562C66.5286%2046.1719%2066.651%2046.763%2066.6563%2047.4297C66.651%2048.4089%2066.401%2049.2578%2065.9062%2049.9766C65.4167%2050.6901%2064.7083%2051.2448%2063.7812%2051.6406C62.8594%2052.0312%2061.7474%2052.2266%2060.4453%2052.2266C59.1536%2052.2266%2058.0286%2052.0286%2057.0703%2051.6328C56.1172%2051.237%2055.3724%2050.651%2054.8359%2049.875C54.3047%2049.0938%2054.026%2048.1276%2054%2046.9766H57.2734C57.3099%2047.513%2057.4635%2047.9609%2057.7344%2048.3203C58.0104%2048.6745%2058.3776%2048.9427%2058.8359%2049.125C59.2995%2049.3021%2059.8229%2049.3906%2060.4062%2049.3906C60.9792%2049.3906%2061.4766%2049.3073%2061.8984%2049.1406C62.3255%2048.974%2062.6563%2048.7422%2062.8906%2048.4453C63.125%2048.1484%2063.2422%2047.8073%2063.2422%2047.4219C63.2422%2047.0625%2063.1354%2046.7604%2062.9219%2046.5156C62.7135%2046.2708%2062.4063%2046.0625%2062%2045.8906C61.599%2045.7188%2061.1068%2045.5625%2060.5234%2045.4219L58.7813%2044.9844C57.4323%2044.6562%2056.3672%2044.1432%2055.5859%2043.4453C54.8047%2042.7474%2054.4167%2041.8073%2054.4219%2040.625C54.4167%2039.6562%2054.6745%2038.8099%2055.1953%2038.0859C55.7214%2037.362%2056.4427%2036.7969%2057.3594%2036.3906C58.276%2035.9844%2059.3177%2035.7813%2060.4844%2035.7813C61.6719%2035.7813%2062.7083%2035.9844%2063.5938%2036.3906C64.4844%2036.7969%2065.1771%2037.362%2065.6719%2038.0859C66.1667%2038.8099%2066.4219%2039.6484%2066.4375%2040.6016H63.1953Z'%20fill='%23C6C9CD'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_111_12912'%20x1='59.8467'%20y1='113.749'%20x2='59.8467'%20y2='2.02065'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DEE0E2'/%3e%3cstop%20offset='1'%20stop-color='%23EFEFEF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_111_12912'%20x1='29.8462'%20y1='-5.37093'%20x2='29.8462'%20y2='26.6472'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DEE0E2'/%3e%3cstop%20offset='1'%20stop-color='%23B4B9BE'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", jv = "data:image/svg+xml,%3csvg%20width='128'%20height='132'%20viewBox='0%200%20128%20132'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2016C0%207.16344%207.16344%200%2016%200L112%200C120.837%200%20128%207.16344%20128%2016V116C128%20124.837%20120.837%20132%20112%20132H16C7.16344%20132%200%20124.837%200%20116L0%2016ZM10%2018C10%2013.5817%2013.5817%2010%2018%2010L110%2010C114.418%2010%20118%2013.5817%20118%2018V98C118%20102.418%20114.418%20106%20110%20106H18C13.5817%20106%2010%20102.418%2010%2098L10%2018ZM84.7688%2073.1945L77.0277%2083.243L56.8552%2054.5613C55.2801%2052.3218%2051.9713%2052.2911%2050.3549%2054.5009L24.6532%2089.6385C22.7202%2092.2811%2024.6075%2096%2027.8817%2096H75.3309H78.2964H100.059C103.344%2096%20105.229%2092.259%20103.273%2089.6191L91.1518%2073.2547C89.5714%2071.1212%2086.3891%2071.0912%2084.7688%2073.1945ZM90.5%2024C84.1487%2024%2079%2029.1487%2079%2035.5C79%2041.8513%2084.1487%2047%2090.5%2047C96.8513%2047%20102%2041.8513%20102%2035.5C102%2029.1487%2096.8513%2024%2090.5%2024Z'%20fill='%23F2F3F5'/%3e%3c/svg%3e", Gv = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='32'%20height='32'%20rx='2'%20fill='%23D2D3D9'/%3e%3cpath%20d='M6.52957%2014V6.72727H11.4301V7.99503H8.06721V9.72798H11.178V10.9957H8.06721V12.7322H11.4443V14H6.52957Z'%20fill='white'/%3e%3cpath%20d='M12.6526%2014V6.72727H15.5219C16.0712%206.72727%2016.5399%206.82552%2016.9282%207.02201C17.3188%207.21614%2017.6159%207.49195%2017.8195%207.84943C18.0255%208.20454%2018.1285%208.62239%2018.1285%209.10298C18.1285%209.58593%2018.0243%2010.0014%2017.816%2010.3494C17.6076%2010.6951%2017.3058%2010.9602%2016.9104%2011.1449C16.5174%2011.3295%2016.0416%2011.4219%2015.4829%2011.4219H13.5617V10.1861H15.2343C15.5279%2010.1861%2015.7717%2010.1458%2015.9658%2010.0653C16.16%209.98485%2016.3044%209.86411%2016.3991%209.70312C16.4961%209.54214%2016.5447%209.34209%2016.5447%209.10298C16.5447%208.8615%2016.4961%208.6579%2016.3991%208.49219C16.3044%208.32647%2016.1588%208.20099%2015.9623%208.11576C15.7681%208.02817%2015.5231%207.98437%2015.2272%207.98437H14.1903V14H12.6526ZM16.5802%2010.6903L18.3877%2014H16.6903L14.9218%2010.6903H16.5802Z'%20fill='white'/%3e%3cpath%20d='M25.632%209.27344H24.0766C24.0482%209.0722%2023.9902%208.89346%2023.9026%208.73721C23.815%208.5786%2023.7026%208.44365%2023.5653%208.33238C23.4279%208.22111%2023.2693%208.13589%2023.0894%208.0767C22.9118%208.01752%2022.7189%207.98792%2022.5106%207.98792C22.1342%207.98792%2021.8063%208.08144%2021.5269%208.26846C21.2476%208.45312%2021.0309%208.72301%2020.8771%209.07812C20.7232%209.43087%2020.6462%209.85937%2020.6462%2010.3636C20.6462%2010.8821%2020.7232%2011.3177%2020.8771%2011.6705C21.0333%2012.0232%2021.2511%2012.2895%2021.5305%2012.4695C21.8098%2012.6494%2022.133%2012.7393%2022.4999%2012.7393C22.7059%2012.7393%2022.8965%2012.7121%2023.0717%2012.6577C23.2492%2012.6032%2023.4066%2012.5239%2023.544%2012.4197C23.6813%2012.3132%2023.7949%2012.1842%2023.8849%2012.0327C23.9772%2011.8812%2024.0411%2011.7083%2024.0766%2011.5142L25.632%2011.5213C25.5918%2011.8551%2025.4912%2012.1771%2025.3302%2012.4872C25.1716%2012.795%2024.9573%2013.0708%2024.6874%2013.3146C24.4199%2013.5561%2024.1003%2013.7479%2023.7286%2013.8899C23.3593%2014.0296%2022.9414%2014.0994%2022.4751%2014.0994C21.8264%2014.0994%2021.2464%2013.9526%2020.735%2013.6591C20.226%2013.3655%2019.8235%2012.9406%2019.5276%2012.3842C19.2341%2011.8279%2019.0873%2011.1544%2019.0873%2010.3636C19.0873%209.57055%2019.2364%208.89583%2019.5347%208.33949C19.833%207.78314%2020.2378%207.35937%2020.7492%207.06818C21.2606%206.77462%2021.8359%206.62784%2022.4751%206.62784C22.8965%206.62784%2023.2871%206.68702%2023.6469%206.8054C24.0092%206.92377%2024.3299%207.09659%2024.6093%207.32386C24.8887%207.54877%2025.1159%207.82457%2025.2911%208.15128C25.4687%208.47798%2025.5823%208.85203%2025.632%209.27344Z'%20fill='white'/%3e%3cpath%20d='M9.9977%2026V24.892L12.5865%2022.495C12.8066%2022.282%2012.9913%2022.0902%2013.1405%2021.9197C13.292%2021.7493%2013.4068%2021.5824%2013.4849%2021.419C13.563%2021.2533%2013.6021%2021.0746%2013.6021%2020.8828C13.6021%2020.6697%2013.5536%2020.4863%2013.4565%2020.3324C13.3594%2020.1761%2013.2269%2020.0566%2013.0588%2019.9737C12.8907%2019.8885%2012.7001%2019.8459%2012.487%2019.8459C12.2645%2019.8459%2012.0704%2019.8909%2011.9047%2019.9808C11.7389%2020.0708%2011.6111%2020.1998%2011.5211%2020.3679C11.4312%2020.536%2011.3862%2020.736%2011.3862%2020.968H9.92668C9.92668%2020.4922%2010.0344%2020.0791%2010.2498%2019.7287C10.4653%2019.3783%2010.7671%2019.1072%2011.1554%2018.9155C11.5436%2018.7237%2011.9911%2018.6278%2012.4977%2018.6278C13.0185%2018.6278%2013.4719%2018.7202%2013.8578%2018.9048C14.246%2019.0871%2014.5479%2019.3404%2014.7633%2019.6648C14.9788%2019.9891%2015.0865%2020.3608%2015.0865%2020.7798C15.0865%2021.0544%2015.032%2021.3255%2014.9231%2021.593C14.8166%2021.8606%2014.626%2022.1577%2014.3514%2022.4844C14.0768%2022.8087%2013.6897%2023.1982%2013.1902%2023.6527L12.1284%2024.6932V24.7429H15.1824V26H9.9977Z'%20fill='white'/%3e%3cpath%20d='M19.1481%2026.1598C18.5373%2026.1574%2018.0117%2026.0071%2017.5714%2025.7088C17.1334%2025.4105%2016.7961%2024.9785%2016.5593%2024.4126C16.3249%2023.8468%2016.2089%2023.1662%2016.2113%2022.3707C16.2113%2021.5777%2016.3285%2020.9017%2016.5629%2020.343C16.7996%2019.7843%2017.137%2019.3594%2017.5749%2019.0682C18.0153%2018.7746%2018.5397%2018.6278%2019.1481%2018.6278C19.7565%2018.6278%2020.2797%2018.7746%2020.7177%2019.0682C21.158%2019.3617%2021.4966%2019.7879%2021.7333%2020.3466C21.9701%2020.9029%2022.0872%2021.5777%2022.0849%2022.3707C22.0849%2023.1686%2021.9665%2023.8504%2021.7298%2024.4162C21.4954%2024.982%2021.1592%2025.4141%2020.7212%2025.7124C20.2833%2026.0107%2019.7589%2026.1598%2019.1481%2026.1598ZM19.1481%2024.8849C19.5648%2024.8849%2019.8974%2024.6754%2020.146%2024.2564C20.3945%2023.8374%2020.5176%2023.2088%2020.5153%2022.3707C20.5153%2021.8191%2020.4585%2021.3598%2020.3448%2020.9929C20.2336%2020.6259%2020.0749%2020.3501%2019.869%2020.1655C19.6654%2019.9808%2019.4251%2019.8885%2019.1481%2019.8885C18.7338%2019.8885%2018.4024%2020.0956%2018.1538%2020.5099C17.9052%2020.9242%2017.7797%2021.5445%2017.7774%2022.3707C17.7774%2022.9294%2017.833%2023.3958%2017.9443%2023.7699C18.0579%2024.1416%2018.2177%2024.4209%2018.4237%2024.608C18.6296%2024.7926%2018.8711%2024.8849%2019.1481%2024.8849Z'%20fill='white'/%3e%3c/svg%3e", zn = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20fill-rule='evenodd'%20d='M10.4995%202.43824L15.5942%2011.1476C16.1244%2012.0438%2016.1358%2013.1548%2015.6242%2014.0618C15.1119%2014.9698%2014.1545%2015.5337%2013.1002%2015.544L2.89104%2015.5439C1.84761%2015.5354%200.888332%2014.9698%200.376015%2014.061C-0.135877%2013.1529%20-0.123921%2012.0394%200.404559%2011.1508L5.50114%202.43828C6.01898%201.54687%206.97263%200.998795%208.00371%201C9.03469%201.00121%209.988%201.55155%2010.4995%202.43824ZM8.73038%205.36255H7.27539V10.4534H8.73038V5.36255ZM8.72819%2011.9077C8.72819%2012.3093%208.40248%2012.6349%208.00069%2012.6349C7.5989%2012.6349%207.27319%2012.3093%207.27319%2011.9077C7.27319%2011.506%207.5989%2011.1804%208.00069%2011.1804C8.40248%2011.1804%208.72819%2011.506%208.72819%2011.9077Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(16%2016)%20rotate(-180)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Wl = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20d='M8%200C3.58182%200%200%203.58182%200%208C0%2012.0109%202.95455%2015.3225%206.80436%2015.9011V10.1204H4.82509V8.01746H6.80436V6.61818C6.80436%204.30146%207.93309%203.28436%209.85855%203.28436C10.7807%203.28436%2011.2684%203.35273%2011.4993%203.384V5.21964H10.1858C9.36836%205.21964%209.08291%205.99455%209.08291%206.868V8.01746H11.4785L11.1535%2010.1204H9.08291V15.9182C12.9876%2015.3884%2016%2012.0498%2016%208C16%203.58182%2012.4182%200%208%200Z'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", zv = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_808_32960)'%3e%3cpath%20d='M8.4%200V4.8C8.4%205.68366%209.11634%206.4%2010%206.4H14.8V14.4C14.8%2015.2837%2014.0837%2016%2013.2%2016H3.6C2.71634%2016%202%2015.2837%202%2014.4V1.6C2%200.716345%202.71634%200%203.6%200H8.4Z'%20fill='%230021A5'/%3e%3cpath%20d='M9.6%200.4V4.8C9.6%205.02091%209.77909%205.2%2010%205.2H14.4L9.6%200.4Z'%20fill='%230021A5'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_808_32960'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Kv = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='32'%20height='32'%20rx='2'%20fill='%23D2D3D9'/%3e%3cpath%20d='M15.8571%206V12C15.8571%2013.1046%2016.7366%2014%2017.8214%2014H23.7143V24C23.7143%2025.1046%2022.8348%2026%2021.75%2026H9.96429C8.87944%2026%208%2025.1046%208%2024V8C8%206.89543%208.87944%206%209.96429%206H15.8571Z'%20fill='white'/%3e%3cpath%20d='M17.3304%206.5V12C17.3304%2012.2761%2017.5502%2012.5%2017.8214%2012.5H23.2232L17.3304%206.5Z'%20fill='white'/%3e%3c/svg%3e", Ul = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20d='M8%200C3.58267%200%200%203.67255%200%208.20224C0%2011.8263%202.292%2014.9007%205.47133%2015.9855C5.87067%2016.0614%206%2015.8071%206%2015.5911V14.0641C3.77467%2014.5603%203.31133%2013.0962%203.31133%2013.0962C2.94733%2012.1482%202.42267%2011.896%202.42267%2011.896C1.69667%2011.3868%202.478%2011.3977%202.478%2011.3977C3.28133%2011.4551%203.704%2012.2432%203.704%2012.2432C4.41733%2013.4968%205.57533%2013.1345%206.032%2012.9247C6.10333%2012.395%206.31067%2012.0327%206.54%2011.8283C4.76333%2011.6198%202.89533%2010.9165%202.89533%207.77436C2.89533%206.87826%203.208%206.1469%203.71933%205.57274C3.63667%205.36563%203.36267%204.53106%203.79733%203.40188C3.79733%203.40188%204.46933%203.18179%205.998%204.24261C6.636%204.06079%207.32%203.96989%208%203.96647C8.68%203.96989%209.36467%204.06079%2010.004%204.24261C11.5313%203.18179%2012.202%203.40188%2012.202%203.40188C12.6373%204.53174%2012.3633%205.36632%2012.2807%205.57274C12.794%206.1469%2013.104%206.87895%2013.104%207.77436C13.104%2010.9247%2011.2327%2011.6185%209.45133%2011.8215C9.738%2012.0758%2010%2012.5747%2010%2013.3403V15.5911C10%2015.8091%2010.128%2016.0655%2010.534%2015.9848C13.7107%2014.8987%2016%2011.8249%2016%208.20224C16%203.67255%2012.418%200%208%200Z'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", qv = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_6539_810)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8%20-7.62939e-05C12.4183%20-7.62939e-05%2016%203.58165%2016%207.99992C16%2012.4182%2012.4183%2015.9999%208%2015.9999C3.58172%2015.9999%200%2012.4182%200%207.99992C0%203.58165%203.58172%20-7.62939e-05%208%20-7.62939e-05ZM14.488%208.87015C13.717%209.27118%2012.7015%209.60652%2011.5485%209.83773C11.3846%2011.5118%2010.997%2012.9896%2010.4331%2014.0781C12.5851%2013.2159%2014.1726%2011.2439%2014.488%208.87015ZM10.1718%208.5851C10.1783%208.39244%2010.1817%208.19724%2010.1817%207.99984C10.1817%204.35183%209.02275%201.45438%207.99991%201.45438C6.97708%201.45438%205.81809%204.35183%205.81809%207.99984C5.81809%208.2086%205.82189%208.4149%205.82924%208.61834C6.51149%208.68967%207.24049%208.72728%207.99994%208.72728C8.7476%208.72728%209.48118%208.67454%2010.1718%208.5851ZM11.6336%208.33026C11.6354%208.22067%2011.6364%208.11054%2011.6364%207.99992C11.6364%205.57979%2011.1959%203.39426%2010.433%201.92153C12.5975%202.78877%2014.1911%204.77869%2014.4934%207.17101C14.1512%207.55514%2013.0717%208.01144%2011.6336%208.33026ZM5.94823%2010.0926C6.60067%2010.1514%207.28785%2010.1818%207.99994%2010.1818C8.70052%2010.1818%209.39078%2010.1421%2010.0546%2010.0685C9.72657%2012.6848%208.81953%2014.5453%207.99991%2014.5453C7.18282%2014.5453%206.27883%2012.6962%205.94823%2010.0926ZM4.36768%208.40017C3.95023%208.3169%203.56117%208.21884%203.20594%208.10728C2.30375%207.82397%201.71418%207.47672%201.50219%207.20534C1.79352%204.79765%203.39205%202.79278%205.56703%201.92144C4.80408%203.39417%204.36364%205.57973%204.36364%207.99992C4.36364%208.13409%204.36499%208.26753%204.36768%208.40017ZM4.45756%209.8988C4.62486%2011.5478%205.00994%2013.0029%205.56691%2014.0782C3.45219%2013.2309%201.88244%2011.3121%201.52937%208.9933C2.28827%209.38858%203.28968%209.6958%204.45756%209.8988Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_6539_810'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", jl = "data:image/svg+xml,%3csvg%20width='19'%20height='18'%20viewBox='0%200%2019%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.90629%204.15942L6.3825%202.21968C6.59237%201.3617%207.45803%200.836303%208.31601%201.04617C9.10249%201.23855%209.60951%201.98198%209.5269%202.76541L9.48952%202.97968L9.19874%204.15942H12.3291L12.7701%202.24253C12.9509%201.45331%2013.6868%200.935429%2014.4714%201.00653L14.6862%201.04076C15.4754%201.22157%2015.9933%201.95748%2015.9222%202.74204L15.888%202.95683L15.6109%204.15942L16.4128%204.15972C17.2224%204.15972%2017.8916%204.76139%2017.9975%205.54202L18.0121%205.75903C18.0121%206.5687%2017.4104%207.23784%2016.6298%207.34374L16.4128%207.35834L14.8774%207.35804L14.1033%2010.74L15.3757%2010.742C16.1853%2010.742%2016.8545%2011.3437%2016.9604%2012.1243L16.975%2012.3414C16.975%2013.151%2016.3733%2013.8202%2015.5927%2013.9261L15.3757%2013.9407L13.3697%2013.9387L12.9553%2015.7575C12.7745%2016.5467%2012.0386%2017.0646%2011.2541%2016.9935L11.0393%2016.9592C10.25%2016.7784%209.73216%2016.0425%209.80326%2015.258L9.83749%2015.0432L10.088%2013.9387H6.80617L6.35836%2015.7803C6.16598%2016.5668%205.42256%2017.0738%204.63912%2016.9912L4.42485%2016.9538C3.63837%2016.7614%203.13135%2016.018%203.21396%2015.2346L3.25135%2015.0203L3.51372%2013.9387L2.59919%2013.9407C1.78952%2013.9407%201.12038%2013.339%201.01448%2012.5584L0.999878%2012.3414C0.999878%2011.5317%201.60155%2010.8625%202.38217%2010.7566L2.59919%2010.742L4.29632%2010.74L5.1237%207.35804L3.62463%207.35834C2.81496%207.35834%202.14582%206.75667%202.03992%205.97605L2.02532%205.75903C2.02532%204.94936%202.62699%204.28022%203.40762%204.17432L3.62463%204.15972L5.90629%204.15942ZM11.5957%207.35805H8.41626L7.58888%2010.7401H10.8216L11.5957%207.35805Z'%20fill='white'/%3e%3cpath%20d='M6.3825%202.21968L6.86808%202.33889L6.86818%202.33848L6.3825%202.21968ZM5.90629%204.15942L5.90636%204.65942L6.2984%204.65937L6.39187%204.27863L5.90629%204.15942ZM8.31601%201.04617L8.43481%200.560492L8.43481%200.560492L8.31601%201.04617ZM9.5269%202.76541L10.0195%202.85135L10.0224%202.83468L10.0241%202.81785L9.5269%202.76541ZM9.48952%202.97968L9.97499%203.09934L9.97911%203.0826L9.98208%203.06562L9.48952%202.97968ZM9.19874%204.15942L8.71327%204.03977L8.56054%204.65942H9.19874V4.15942ZM12.3291%204.15942V4.65942H12.7271L12.8164%204.27153L12.3291%204.15942ZM12.7701%202.24253L13.2574%202.35463L13.2575%202.35419L12.7701%202.24253ZM14.4714%201.00653L14.5501%200.512759L14.5334%200.510095L14.5165%200.508568L14.4714%201.00653ZM14.6862%201.04076L14.7979%200.553386L14.7815%200.549634L14.7649%200.54699L14.6862%201.04076ZM15.9222%202.74204L16.416%202.82073L16.4186%202.80401L16.4202%202.78716L15.9222%202.74204ZM15.888%202.95683L16.3752%203.06909L16.3791%203.05242L16.3817%203.03552L15.888%202.95683ZM15.6109%204.15942L15.1237%204.04717L14.9827%204.65919L15.6107%204.65942L15.6109%204.15942ZM16.4128%204.15972L16.4126%204.65972H16.4128V4.15972ZM17.9975%205.54202L18.4964%205.50846L18.4952%205.49157L18.4929%205.4748L17.9975%205.54202ZM18.0121%205.75903H18.5121V5.74223L18.511%205.72548L18.0121%205.75903ZM16.6298%207.34374L16.6634%207.84261L16.6802%207.84148L16.697%207.8392L16.6298%207.34374ZM16.4128%207.35834L16.4127%207.85834L16.4295%207.85834L16.4463%207.85721L16.4128%207.35834ZM14.8774%207.35804L14.8775%206.85804L14.4789%206.85797L14.39%207.24649L14.8774%207.35804ZM14.1033%2010.74L13.6159%2010.6285L13.4761%2011.2391L14.1025%2011.24L14.1033%2010.74ZM15.3757%2010.742L15.3749%2011.242H15.3757V10.742ZM16.9604%2012.1243L17.4592%2012.0908L17.4581%2012.0739L17.4558%2012.0571L16.9604%2012.1243ZM16.975%2012.3414H17.475V12.3246L17.4738%2012.3078L16.975%2012.3414ZM15.5927%2013.9261L15.6262%2014.4249L15.6431%2014.4238L15.6599%2014.4215L15.5927%2013.9261ZM15.3757%2013.9407L15.3752%2014.4407L15.3922%2014.4407L15.4092%2014.4395L15.3757%2013.9407ZM13.3697%2013.9387L13.3702%2013.4387L12.9709%2013.4383L12.8822%2013.8276L13.3697%2013.9387ZM12.9553%2015.7575L13.4427%2015.8691L13.4428%2015.8685L12.9553%2015.7575ZM11.2541%2016.9935L11.1754%2017.4872L11.1921%2017.4899L11.2089%2017.4914L11.2541%2016.9935ZM11.0393%2016.9592L10.9276%2017.4466L10.944%2017.4504L10.9606%2017.453L11.0393%2016.9592ZM9.80326%2015.258L9.30949%2015.1793L9.30682%2015.196L9.3053%2015.2128L9.80326%2015.258ZM9.83749%2015.0432L9.34987%2014.9326L9.34628%2014.9484L9.34372%2014.9645L9.83749%2015.0432ZM10.088%2013.9387L10.5756%2014.0492L10.714%2013.4387H10.088V13.9387ZM6.80617%2013.9387V13.4387H6.41318L6.32033%2013.8205L6.80617%2013.9387ZM6.35836%2015.7803L6.84404%2015.8991L6.84421%2015.8985L6.35836%2015.7803ZM4.63912%2016.9912L4.55319%2017.4838L4.56986%2017.4867L4.58669%2017.4885L4.63912%2016.9912ZM4.42485%2016.9538L4.30605%2017.4395L4.32237%2017.4435L4.33892%2017.4464L4.42485%2016.9538ZM3.21396%2015.2346L2.7214%2015.1487L2.71849%2015.1653L2.71672%2015.1822L3.21396%2015.2346ZM3.25135%2015.0203L2.76544%2014.9025L2.76159%2014.9183L2.75879%2014.9344L3.25135%2015.0203ZM3.51372%2013.9387L3.99963%2014.0565L4.14985%2013.4373L3.51263%2013.4387L3.51372%2013.9387ZM2.59919%2013.9407L2.59919%2014.4407L2.60028%2014.4407L2.59919%2013.9407ZM1.01448%2012.5584L0.515605%2012.5919L0.516741%2012.6088L0.519016%2012.6256L1.01448%2012.5584ZM0.999878%2012.3414H0.499878V12.3582L0.501006%2012.3749L0.999878%2012.3414ZM2.38217%2010.7566L2.34862%2010.2578L2.33173%2010.2589L2.31496%2010.2612L2.38217%2010.7566ZM2.59919%2010.742L2.5986%2010.242L2.5821%2010.2421L2.56563%2010.2432L2.59919%2010.742ZM4.29632%2010.74L4.29691%2011.24L4.68886%2011.2396L4.782%2010.8589L4.29632%2010.74ZM5.1237%207.35804L5.60937%207.47686L5.76079%206.85792L5.1236%206.85804L5.1237%207.35804ZM3.62463%207.35834L3.62463%207.85834L3.62473%207.85834L3.62463%207.35834ZM2.03992%205.97605L1.54105%206.00961L1.54219%206.0265L1.54446%206.04327L2.03992%205.97605ZM2.02532%205.75903H1.52532V5.77583L1.52645%205.79259L2.02532%205.75903ZM3.40762%204.17432L3.37405%203.67545L3.35717%203.67659L3.3404%203.67886L3.40762%204.17432ZM3.62463%204.15972L3.62457%203.65972L3.6078%203.65972L3.59107%203.66085L3.62463%204.15972ZM8.41626%207.35805V6.85805H8.02384L7.93058%207.23923L8.41626%207.35805ZM11.5957%207.35805L12.0831%207.4696L12.2231%206.85805H11.5957V7.35805ZM7.58888%2010.7401L7.10321%2010.6212L6.95182%2011.2401H7.58888V10.7401ZM10.8216%2010.7401V11.2401H11.2201L11.309%2010.8516L10.8216%2010.7401ZM5.89692%202.10047L5.42071%204.04021L6.39187%204.27863L6.86808%202.33889L5.89692%202.10047ZM8.43481%200.560492C7.3086%200.28501%206.1723%200.974664%205.89682%202.10088L6.86818%202.33848C7.01244%201.74874%207.60746%201.3876%208.19721%201.53185L8.43481%200.560492ZM10.0241%202.81785C10.1326%201.789%209.46757%200.813115%208.43481%200.560492L8.19721%201.53185C8.73741%201.66399%209.08639%202.17497%209.02966%202.71298L10.0241%202.81785ZM9.98208%203.06562L10.0195%202.85135L9.03434%202.67948L8.99696%202.89375L9.98208%203.06562ZM9.68421%204.27908L9.97499%203.09934L9.00405%202.86003L8.71327%204.03977L9.68421%204.27908ZM12.3291%203.65942H9.19874V4.65942H12.3291V3.65942ZM12.2829%202.13043L11.8418%204.04732L12.8164%204.27153L13.2574%202.35463L12.2829%202.13043ZM14.5165%200.508568C13.4862%200.415197%2012.5202%201.09452%2012.2828%202.13087L13.2575%202.35419C13.3817%201.8121%2013.8875%201.45566%2014.4263%201.50449L14.5165%200.508568ZM14.7649%200.54699L14.5501%200.512759L14.3927%201.5003L14.6075%201.53453L14.7649%200.54699ZM16.4202%202.78716C16.5135%201.75683%2015.8342%200.790818%2014.7979%200.553386L14.5745%201.52813C15.1166%201.65232%2015.4731%202.15812%2015.4242%202.69691L16.4202%202.78716ZM16.3817%203.03552L16.416%202.82073L15.4284%202.66335L15.3942%202.87814L16.3817%203.03552ZM16.0981%204.27168L16.3752%203.06909L15.4007%202.84458L15.1237%204.04717L16.0981%204.27168ZM16.413%203.65972L15.6111%203.65942L15.6107%204.65942L16.4126%204.65972L16.413%203.65972ZM18.4929%205.4748C18.3539%204.44963%2017.476%203.65972%2016.4128%203.65972V4.65972C16.9689%204.65972%2017.4293%205.07314%2017.502%205.60923L18.4929%205.4748ZM18.511%205.72548L18.4964%205.50846L17.4986%205.57557L17.5132%205.79259L18.511%205.72548ZM16.697%207.8392C17.7222%207.70013%2018.5121%206.82224%2018.5121%205.75903H17.5121C17.5121%206.31516%2017.0987%206.77555%2016.5626%206.84828L16.697%207.8392ZM16.4463%207.85721L16.6634%207.84261L16.5962%206.84487L16.3792%206.85947L16.4463%207.85721ZM14.8773%207.85804L16.4127%207.85834L16.4129%206.85834L14.8775%206.85804L14.8773%207.85804ZM14.5907%2010.8516L15.3648%207.4696L14.39%207.24649L13.6159%2010.6285L14.5907%2010.8516ZM15.3764%2010.242L14.1041%2010.2401L14.1025%2011.24L15.3749%2011.242L15.3764%2010.242ZM17.4558%2012.0571C17.3167%2011.032%2016.4389%2010.242%2015.3757%2010.242V11.242C15.9318%2011.242%2016.3922%2011.6555%2016.4649%2012.1916L17.4558%2012.0571ZM17.4738%2012.3078L17.4592%2012.0908L16.4615%2012.1579L16.4761%2012.3749L17.4738%2012.3078ZM15.6599%2014.4215C16.685%2014.2825%2017.475%2013.4046%2017.475%2012.3414H16.475C16.475%2012.8975%2016.0615%2013.3579%2015.5255%2013.4306L15.6599%2014.4215ZM15.4092%2014.4395L15.6262%2014.4249L15.5591%2013.4272L15.3421%2013.4418L15.4092%2014.4395ZM13.3692%2014.4387L15.3752%2014.4407L15.3761%2013.4407L13.3702%2013.4387L13.3692%2014.4387ZM13.4428%2015.8685L13.8572%2014.0497L12.8822%2013.8276L12.4678%2015.6464L13.4428%2015.8685ZM11.2089%2017.4914C12.2393%2017.5848%2013.2053%2016.9055%2013.4427%2015.8691L12.468%2015.6458C12.3438%2016.1879%2011.838%2016.5443%2011.2992%2016.4955L11.2089%2017.4914ZM10.9606%2017.453L11.1754%2017.4872L11.3328%2016.4997L11.118%2016.4655L10.9606%2017.453ZM9.3053%2015.2128C9.21192%2016.2432%209.89124%2017.2092%2010.9276%2017.4466L11.1509%2016.4719C10.6088%2016.3477%2010.2524%2015.8419%2010.3012%2015.3031L9.3053%2015.2128ZM9.34372%2014.9645L9.30949%2015.1793L10.297%2015.3367L10.3313%2015.1219L9.34372%2014.9645ZM9.60033%2013.8281L9.34987%2014.9326L10.3251%2015.1537L10.5756%2014.0492L9.60033%2013.8281ZM6.80617%2014.4387H10.088V13.4387H6.80617V14.4387ZM6.84421%2015.8985L7.29201%2014.0568L6.32033%2013.8205L5.87252%2015.6622L6.84421%2015.8985ZM4.58669%2017.4885C5.61554%2017.5969%206.59142%2016.9319%206.84404%2015.8991L5.87268%2015.6615C5.74054%2016.2017%205.22957%2016.5507%204.69156%2016.494L4.58669%2017.4885ZM4.33892%2017.4464L4.55319%2017.4838L4.72506%2016.4986L4.51079%2016.4613L4.33892%2017.4464ZM2.71672%2015.1822C2.60823%2016.211%203.27329%2017.1869%204.30605%2017.4395L4.54365%2016.4681C4.00345%2016.336%203.65447%2015.825%203.71121%2015.287L2.71672%2015.1822ZM2.75879%2014.9344L2.7214%2015.1487L3.70652%2015.3205L3.74391%2015.1063L2.75879%2014.9344ZM3.02782%2013.8208L2.76544%2014.9025L3.73725%2015.1382L3.99963%2014.0565L3.02782%2013.8208ZM2.60028%2014.4407L3.51482%2014.4387L3.51263%2013.4387L2.5981%2013.4407L2.60028%2014.4407ZM0.519016%2012.6256C0.658092%2013.6507%201.53598%2014.4407%202.59919%2014.4407V13.4407C2.04306%2013.4407%201.58267%2013.0272%201.50994%2012.4912L0.519016%2012.6256ZM0.501006%2012.3749L0.515605%2012.5919L1.51335%2012.5248L1.49875%2012.3078L0.501006%2012.3749ZM2.31496%2010.2612C1.28979%2010.4003%200.499878%2011.2781%200.499878%2012.3414H1.49988C1.49988%2011.7852%201.9133%2011.3248%202.44939%2011.2521L2.31496%2010.2612ZM2.56563%2010.2432L2.34862%2010.2578L2.41573%2011.2555L2.63274%2011.2409L2.56563%2010.2432ZM4.29573%2010.24L2.5986%2010.242L2.59978%2011.242L4.29691%2011.24L4.29573%2010.24ZM4.63802%207.23923L3.81064%2010.6212L4.782%2010.8589L5.60937%207.47686L4.63802%207.23923ZM3.62473%207.85834L5.1238%207.85804L5.1236%206.85804L3.62453%206.85834L3.62473%207.85834ZM1.54446%206.04327C1.68354%207.06843%202.56143%207.85834%203.62463%207.85834V6.85834C3.0685%206.85834%202.60811%206.44492%202.53538%205.90884L1.54446%206.04327ZM1.52645%205.79259L1.54105%206.00961L2.53879%205.94249L2.52419%205.72547L1.52645%205.79259ZM3.3404%203.67886C2.31524%203.81794%201.52532%204.69582%201.52532%205.75903H2.52532C2.52532%205.2029%202.93874%204.74251%203.47483%204.66978L3.3404%203.67886ZM3.59107%203.66085L3.37405%203.67545L3.44118%204.67319L3.6582%204.65859L3.59107%203.66085ZM5.90623%203.65942L3.62457%203.65972L3.6247%204.65972L5.90636%204.65942L5.90623%203.65942ZM8.41626%207.85805H11.5957V6.85805H8.41626V7.85805ZM8.07456%2010.8589L8.90194%207.47687L7.93058%207.23923L7.10321%2010.6212L8.07456%2010.8589ZM10.8216%2010.2401H7.58888V11.2401H10.8216V10.2401ZM11.1083%207.2465L10.3342%2010.6285L11.309%2010.8516L12.0831%207.4696L11.1083%207.2465Z'%20fill='%23DFE1E4'/%3e%3c/svg%3e", Xv = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M4.5%202.75C4.5%203.7165%203.7165%204.5%202.75%204.5C1.7835%204.5%201%203.7165%201%202.75C1%201.7835%201.7835%201%202.75%201C3.7165%201%204.5%201.7835%204.5%202.75ZM4.5%208C4.5%208.9665%203.7165%209.75%202.75%209.75C1.7835%209.75%201%208.9665%201%208C1%207.0335%201.7835%206.25%202.75%206.25C3.7165%206.25%204.5%207.0335%204.5%208ZM2.75%2015C3.7165%2015%204.5%2014.2165%204.5%2013.25C4.5%2012.2835%203.7165%2011.5%202.75%2011.5C1.7835%2011.5%201%2012.2835%201%2013.25C1%2014.2165%201.7835%2015%202.75%2015ZM9.75%202.75C9.75%203.7165%208.9665%204.5%208%204.5C7.0335%204.5%206.25%203.7165%206.25%202.75C6.25%201.7835%207.0335%201%208%201C8.9665%201%209.75%201.7835%209.75%202.75ZM8%209.75C8.9665%209.75%209.75%208.9665%209.75%208C9.75%207.0335%208.9665%206.25%208%206.25C7.0335%206.25%206.25%207.0335%206.25%208C6.25%208.9665%207.0335%209.75%208%209.75ZM9.75%2013.25C9.75%2014.2165%208.9665%2015%208%2015C7.0335%2015%206.25%2014.2165%206.25%2013.25C6.25%2012.2835%207.0335%2011.5%208%2011.5C8.9665%2011.5%209.75%2012.2835%209.75%2013.25ZM13.25%204.5C14.2165%204.5%2015%203.7165%2015%202.75C15%201.7835%2014.2165%201%2013.25%201C12.2835%201%2011.5%201.7835%2011.5%202.75C11.5%203.7165%2012.2835%204.5%2013.25%204.5ZM15%208C15%208.9665%2014.2165%209.75%2013.25%209.75C12.2835%209.75%2011.5%208.9665%2011.5%208C11.5%207.0335%2012.2835%206.25%2013.25%206.25C14.2165%206.25%2015%207.0335%2015%208ZM13.25%2015C14.2165%2015%2015%2014.2165%2015%2013.25C15%2012.2835%2014.2165%2011.5%2013.25%2011.5C12.2835%2011.5%2011.5%2012.2835%2011.5%2013.25C11.5%2014.2165%2012.2835%2015%2013.25%2015Z'%20fill='%23BABBBF'/%3e%3c/svg%3e", Yv = "data:image/svg+xml,%3csvg%20width='14'%20height='13'%20viewBox='0%200%2014%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.54319%201.85467L6.99604%202.40301L6.44721%201.85417C5.04783%200.454793%202.77899%200.454793%201.37961%201.85417C-0.019767%203.25355%20-0.0197674%205.52239%201.37961%206.92177L6.64319%2012.1853C6.83845%2012.3806%207.15503%2012.3806%207.3503%2012.1853L12.6179%206.9208C14.0142%205.51678%2014.0166%203.2543%2012.617%201.85467C11.215%200.452742%208.94512%200.452744%207.54319%201.85467Z'%20fill='%230021A5'/%3e%3c/svg%3e", Qv = "data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1979_107)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.5%208C0.5%2012.4183%204.08172%2016%208.5%2016C12.9183%2016%2016.5%2012.4183%2016.5%208C16.5%203.58172%2012.9183%200%208.5%200C4.08172%200%200.5%203.58172%200.5%208ZM8.49705%203.91047C8.89884%203.91047%209.22455%204.23608%209.22455%204.63773C9.22455%205.03939%208.89884%205.36499%208.49705%205.36499C8.09527%205.36499%207.76956%205.03939%207.76956%204.63773C7.76956%204.23608%208.09527%203.91047%208.49705%203.91047ZM7.77175%2012H9.22675L9.22675%206.90919H7.77175L7.77175%2012Z'%20fill='%237490FF'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1979_107'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(0.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Gl = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ic-info-important'%20clip-path='url(%23clip0_2276_37408)'%3e%3cpath%20id='Exclude'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%208C0%2012.4183%203.58172%2016%208%2016C12.4183%2016%2016%2012.4183%2016%208C16%203.58172%2012.4183%200%208%200C3.58172%200%200%203.58172%200%208ZM8.72455%203.91047L7.26956%203.91047V9.00128H8.72455L8.72455%203.91047ZM7.99925%2012C7.59746%2012%207.27175%2011.6744%207.27175%2011.2727C7.27175%2010.8711%207.59746%2010.5455%207.99925%2010.5455C8.40103%2010.5455%208.72675%2010.8711%208.72675%2011.2727C8.72675%2011.6744%208.40103%2012%207.99925%2012Z'%20fill='%2384868C'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2276_37408'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", zl = "data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2.9%208C2.9%204.90721%205.40721%202.4%208.5%202.4C11.5928%202.4%2014.1%204.9072%2014.1%208C14.1%2011.0928%2011.5928%2013.6%208.5%2013.6C5.40721%2013.6%202.9%2011.0928%202.9%208ZM1.5%208C1.5%204.13401%204.63401%201%208.5%201C12.366%201%2015.5%204.13401%2015.5%208C15.5%2011.866%2012.366%2015%208.5%2015C4.63401%2015%201.5%2011.866%201.5%208ZM9.22437%2012.0896L7.76937%2012.0896L7.76937%206.99879H9.22437L9.22437%2012.0896ZM8.49906%204.00007C8.09728%204.00007%207.77157%204.32568%207.77157%204.72733C7.77157%205.12899%208.09728%205.45459%208.49906%205.45459C8.90085%205.45459%209.22656%205.12899%209.22656%204.72733C9.22656%204.32568%208.90085%204.00007%208.49906%204.00007Z'/%3e%3c/svg%3e", Jv = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_5849_32677)'%3e%3cpath%20d='M15.3137%2015.3137C14.9232%2015.7042%2014.29%2015.7042%2013.8995%2015.3137L13.1924%2014.6066L12.4853%2015.3137C12.0948%2015.7042%2011.4616%2015.7042%2011.0711%2015.3137C10.7084%2014.9511%2010.6825%2014.3792%2010.9934%2013.9867L11.0711%2013.8995L11.7782%2013.1924L11.0711%2012.4853L9.65685%2013.8995C9.26633%2014.29%208.63316%2014.29%208.24264%2013.8995C7.88001%2013.5369%207.85411%2012.965%208.16493%2012.5725L8.24264%2012.4853L9.65685%2011.0711L6.12132%207.53553C6.09145%207.50566%206.06387%207.47438%206.03857%207.44188C4.50396%208.35294%202.49136%208.14821%201.17157%206.82843C-0.390524%205.26633%20-0.390524%202.73367%201.17157%201.17157C2.73367%20-0.390524%205.26633%20-0.390524%206.82843%201.17157C8.14821%202.49136%208.35294%204.50396%207.4426%206.03868L7.48978%206.07824L15.3137%2013.8995C15.7042%2014.29%2015.7042%2014.9232%2015.3137%2015.3137ZM5.41421%205.41421C6.19526%204.63316%206.19526%203.36684%205.41421%202.58579C4.63316%201.80474%203.36684%201.80474%202.58579%202.58579C1.80474%203.36684%201.80474%204.63316%202.58579%205.41421C3.36684%206.19526%204.63316%206.19526%205.41421%205.41421Z'%20fill='%230021A5'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_5849_32677'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Kl = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.80176%200.000738715C7.72498%200.00571141%207.64954%200.0357854%207.58916%200.089923C7.54734%200.127767%207.0296%200.601432%206.52617%201.36485C6.42266%201.17268%206.22%201.03784%205.9875%201.03784H4.4125C4.07823%201.03784%203.8%201.31283%203.8%201.64322V3.19989C3.8%203.53027%204.07823%203.80526%204.4125%203.80526H5.5835C5.56337%203.97507%205.55%204.14734%205.55%204.32415C5.55%205.7549%206.7274%206.9186%208.175%206.9186C9.6226%206.9186%2010.8%205.7549%2010.8%204.32415C10.8%202.8934%209.6226%201.7297%208.175%201.7297C8.0427%201.7297%208.01463%201.68856%208.00273%201.67092C7.86518%201.47097%207.99991%200.847287%208.14971%200.473686C8.20991%200.324245%208.15798%200.153217%208.02393%200.0615462C7.95673%200.0158838%207.87854%20-0.00423398%207.80176%200.000738715ZM4.5%201.7297H5.9V2.56614C5.83114%202.74221%205.76958%202.92403%205.71816%203.1134H4.5V1.7297ZM5.07627%205.50652C2.47647%206.71207%201%209.44456%201%2013.1453V14.1831L1.60361%2013.3878C1.73203%2013.842%201.90143%2014.2786%202.11631%2014.6884C2.13749%2014.7288%202.16651%2014.7646%202.2017%2014.7938C2.23688%2014.8231%202.27755%2014.8452%202.32139%2014.8589C2.36522%2014.8726%202.41135%2014.8776%202.45715%2014.8737C2.50296%2014.8698%202.54753%2014.857%202.58833%2014.8361C2.62913%2014.8151%202.66536%2014.7865%202.69495%2014.7517C2.72453%2014.7169%202.7469%2014.6767%202.76077%2014.6334C2.77464%2014.5901%202.77974%2014.5445%202.77578%2014.4992C2.77182%2014.4539%202.75888%2014.4099%202.7377%2014.3695C2.46475%2013.8489%202.26885%2013.2857%202.15732%2012.6933C2.68552%2012.0638%203.26536%2011.458%203.82324%2010.9488C3.63844%2011.4365%203.51433%2011.9248%203.45273%2012.4109L3.34268%2013.2804L4.02422%2012.719C4.04382%2012.7027%206.05295%2011.0697%208.35%2011.0697C9.47665%2011.0697%2010.0927%2011.173%2010.6359%2011.2643C11.1014%2011.3421%2011.5413%2011.4157%2012.2%2011.4157C13.285%2011.4157%2013.879%2010.8676%2014.138%2010.2103C14.2069%2010.5023%2014.2553%2010.8008%2014.2802%2011.1049C14.2928%2011.265%2014.3%2011.426%2014.3%2011.5886C14.3%2012.5634%2014.068%2013.4985%2013.6109%2014.3695C13.522%2014.539%2013.5891%2014.7485%2013.7606%2014.8364C13.8121%2014.8627%2013.8677%2014.8749%2013.922%2014.8749C14.0483%2014.8749%2014.1707%2014.8074%2014.233%2014.6884C14.7423%2013.7185%2015%2012.6755%2015%2011.5886C15%2011.4077%2014.9925%2011.2276%2014.9781%2011.0495C14.8094%208.91924%2013.6446%207.03984%2011.8712%205.9173C11.8568%205.90831%2011.8425%205.8986%2011.8281%205.8896C11.7105%205.81661%2011.5897%205.74792%2011.4672%205.68151C11.4241%205.65798%2011.3817%205.63373%2011.338%205.61124C11.3093%205.59637%2011.2795%205.58353%2011.2505%205.56935C11.03%206.09897%2010.6735%206.55943%2010.2244%206.90847L11.3975%208.06786C11.5343%208.20312%2011.5343%208.42177%2011.3975%208.55702C11.3292%208.62448%2011.2396%208.65837%2011.15%208.65837C11.0604%208.65837%2010.9708%208.62448%2010.9025%208.55702L10.6093%208.26785L9.97695%208.89282C9.9087%208.95993%209.81909%208.99416%209.72949%208.99416C9.63989%208.99416%209.55028%208.96027%209.48203%208.89282C9.34518%208.75756%209.34518%208.53891%209.48203%208.40365L10.115%207.77801L9.75%207.4179L9.29746%207.86517C9.22921%207.93263%209.1396%207.96652%209.05%207.96652C8.9604%207.96652%208.87079%207.93263%208.80254%207.86517C8.71994%207.78353%208.69345%207.67205%208.71025%207.56654C8.53595%207.59456%208.35735%207.61045%208.175%207.61045C6.76345%207.61045%205.55787%206.73559%205.07627%205.50652ZM6.425%2012.7994C6.28576%2012.7994%206.15223%2012.854%206.05377%2012.9513C5.95531%2013.0486%205.9%2013.1806%205.9%2013.3182C5.9%2013.4559%205.95531%2013.5878%206.05377%2013.6852C6.15223%2013.7825%206.28576%2013.8371%206.425%2013.8371C6.56424%2013.8371%206.69777%2013.7825%206.79623%2013.6852C6.89469%2013.5878%206.95%2013.4559%206.95%2013.3182C6.95%2013.1806%206.89469%2013.0486%206.79623%2012.9513C6.69777%2012.854%206.56424%2012.7994%206.425%2012.7994ZM10.275%2012.7994C10.1358%2012.7994%2010.0022%2012.854%209.90377%2012.9513C9.80531%2013.0486%209.75%2013.1806%209.75%2013.3182C9.75%2013.4559%209.80531%2013.5878%209.90377%2013.6852C10.0022%2013.7825%2010.1358%2013.8371%2010.275%2013.8371C10.4142%2013.8371%2010.5478%2013.7825%2010.6462%2013.6852C10.7447%2013.5878%2010.8%2013.4559%2010.8%2013.3182C10.8%2013.1806%2010.7447%2013.0486%2010.6462%2012.9513C10.5478%2012.854%2010.4142%2012.7994%2010.275%2012.7994Z'%20/%3e%3c/svg%3e", ey = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7.27273%2013.0394C7.51026%2013.0733%207.75308%2013.0909%208%2013.0909C8.24692%2013.0909%208.48974%2013.0733%208.72727%2013.0394L8.72727%2015.9674C8.48774%2015.989%208.24516%2016%208%2016C7.75484%2016%207.51226%2015.989%207.27273%2015.9674L7.27273%2013.0394ZM11.6365%207.99989C11.6365%205.99158%2010.0084%204.36353%208.00013%204.36353C5.99182%204.36353%204.36377%205.99158%204.36377%207.99989C4.36377%2010.0082%205.99182%2011.6363%208.00013%2011.6363C10.0084%2011.6363%2011.6365%2010.0082%2011.6365%207.99989ZM5.81831%207.99989C5.81831%206.7949%206.79515%205.81807%208.00013%205.81807C9.20512%205.81807%2010.182%206.7949%2010.182%207.99989C10.182%209.20487%209.20512%2010.1817%208.00013%2010.1817C6.79515%2010.1817%205.81831%209.20487%205.81831%207.99989ZM7.27273%200.0325497L7.27273%202.96058C7.51026%202.92661%207.75307%202.90903%208%202.90903C8.24692%202.90903%208.48974%202.92661%208.72727%202.96058L8.72727%200.0325495C8.48774%200.0109641%208.24515%20-6.41719e-05%208%20-6.41505e-05C7.75484%20-6.4129e-05%207.51226%200.0109642%207.27273%200.0325497ZM2.96058%208.72727L0.0325483%208.72727C0.0109628%208.48774%20-6.55278e-05%208.24516%20-6.55492e-05%208C-6.55707e-05%207.75485%200.0109627%207.51226%200.0325481%207.27273L2.96058%207.27273C2.92661%207.51026%202.90903%207.75308%202.90903%208C2.90903%208.24693%202.92661%208.48974%202.96058%208.72727ZM13.0909%208C13.0909%208.24692%2013.0733%208.48974%2013.0394%208.72727L15.9674%208.72727C15.989%208.48774%2016%208.24516%2016%208C16%207.75484%2015.989%207.51226%2015.9674%207.27273L13.0394%207.27273C13.0733%207.51026%2013.0909%207.75308%2013.0909%208ZM4.95099%2012.0774L2.88053%2014.1479C2.50741%2013.8369%202.16305%2013.4925%201.85201%2013.1194L3.92248%2011.0489C4.21448%2011.4388%204.56111%2011.7854%204.95099%2012.0774ZM14.1477%2013.1194L12.0773%2011.0489C11.7853%2011.4388%2011.4386%2011.7854%2011.0487%2012.0774L13.1192%2014.1479C13.4923%2013.8369%2013.8367%2013.4925%2014.1477%2013.1194ZM3.92247%204.95117L1.85201%202.88071C2.16305%202.50759%202.50741%202.16323%202.88053%201.85219L4.95099%203.92265C4.5611%204.21466%204.21448%204.56128%203.92247%204.95117ZM13.1192%201.85219L11.0487%203.92265C11.4386%204.21466%2011.7853%204.56128%2012.0773%204.95117L14.1477%202.88071C13.8367%202.50759%2013.4923%202.16323%2013.1192%201.85219Z'%20fill='%23BABBBF'/%3e%3c/svg%3e", ty = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.69807%206.67452C3.06409%206.30849%203.65753%206.30849%204.02355%206.67452C4.36343%207.01439%204.3877%207.55036%204.09638%207.91825L4.02355%208L2.69807%209.32548C1.6%2010.4235%201.6%2012.2039%202.69807%2013.3019C3.75692%2014.3608%205.45015%2014.3986%206.55432%2013.4154L6.67452%2013.3019L8%2011.9764C8.36602%2011.6104%208.95946%2011.6104%209.32548%2011.9764C9.66536%2012.3163%209.68964%2012.8523%209.39831%2013.2202L9.32548%2013.3019L8%2014.6274C6.16989%2016.4575%203.20269%2016.4575%201.37258%2014.6274C-0.409367%2012.8455%20-0.45626%209.98549%201.2319%208.1468L1.37258%208L2.69807%206.67452ZM8%201.37258C9.83011%20-0.457528%2012.7973%20-0.457528%2014.6274%201.37258C16.4094%203.15453%2016.4563%206.01451%2014.7681%207.8532L14.6274%208L13.3019%209.32548C12.9359%209.6915%2012.3425%209.6915%2011.9764%209.32548C11.6366%208.98561%2011.6123%208.44964%2011.9036%208.08175L11.9764%208L13.3019%206.67452C14.4%205.57645%2014.4%203.79613%2013.3019%202.69807C12.2431%201.63922%2010.5498%201.6014%209.44568%202.58462L9.32548%202.69807L8%204.02355C7.63398%204.38957%207.04054%204.38957%206.67452%204.02355C6.33464%203.68367%206.31036%203.1477%206.60169%202.77981L6.67452%202.69807L8%201.37258ZM4.02355%2010.651L10.651%204.02355C11.017%203.65753%2011.6104%203.65753%2011.9764%204.02355C12.3163%204.36343%2012.3406%204.89939%2012.0493%205.26728L11.9764%205.34903L5.34903%2011.9764C4.98301%2012.3425%204.38957%2012.3425%204.02355%2011.9764C3.68367%2011.6366%203.6594%2011.1006%203.95072%2010.7327L4.02355%2010.651Z'%20fill='%23E6332A'/%3e%3c/svg%3e", ql = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%205.08333H3.91667V15H1V5.08333ZM2.44958%203.91667H2.43325C1.56292%203.91667%201%203.268%201%202.45775C1%201.63%201.58042%201%202.4665%201C3.35375%201%203.90033%201.63%203.91667%202.45775C3.91667%203.26742%203.35375%203.91667%202.44958%203.91667ZM15%2015H12.0833V9.69225C12.0833%208.41008%2011.3687%207.53508%2010.2213%207.53508C9.34575%207.53508%208.87208%208.12542%208.64225%208.69592C8.55825%208.90008%208.58333%209.46475%208.58333%209.75V15H5.66667V5.08333H8.58333V6.60933C9.00392%205.95833%209.6625%205.08333%2011.3472%205.08333C13.4343%205.08333%2014.9994%206.39583%2014.9994%209.3265L15%2015Z'%20fill='white'/%3e%3c/svg%3e", ny = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M87.2879%2034.8122V45.6259C87.2879%2048.0112%2085.3542%2049.9449%2082.9689%2049.9449C80.5836%2049.9449%2078.65%2048.0112%2078.65%2045.6259V38.1073C78.6517%2036.5089%2078.5636%2034.9117%2078.3858%2033.3232C77.007%2021.1967%2070.2184%2011.5241%2057.2351%2011.5241C50.7%2011.5241%2045.6906%2014.0245%2042.1674%2018.093C41.8001%2018.5169%2041.4488%2018.9583%2041.1135%2019.4174C38.0593%2023.5926%2036.3401%2029.1021%2035.9163%2035.1385C35.8456%2036.1147%2035.8139%2037.1064%2035.8139%2038.1051V49.9427H27.1816V34.8122C27.1816%2025.9907%2030.6823%2017.9878%2036.297%2012.2601C41.7012%206.74707%2049.0627%203.34108%2057.1496%203.34108H57.3184C73.8115%203.34108%2087.2879%2017.504%2087.2879%2034.8122Z'%20fill='url(%23paint0_linear_111_12776)'/%3e%3cpath%20d='M103.207%2077.4251V79.8585C103.207%2092.1439%2097.0839%20102.998%2087.7235%20109.536C86.4961%20110.395%2085.2163%20111.176%2083.8916%20111.875C83.8026%20111.922%2083.715%20111.967%2083.6267%20112.016C78.4964%20114.67%2072.8034%20116.05%2067.0276%20116.042H49.9221C29.9411%20116.042%2013.7461%2099.8466%2013.7461%2079.8656V77.4322C13.7461%2076.239%2013.8031%2075.0594%2013.917%2073.8934C14.8798%2063.9785%2019.8468%2055.2326%2027.18%2049.2979C27.4503%2049.078%2027.7239%2048.8628%2028.0008%2048.6523C28.9865%2047.8996%2030.0107%2047.1987%2031.0691%2046.5523C31.3145%2046.4012%2031.5615%2046.2535%2031.8101%2046.1094C37.3127%2042.9195%2043.5618%2041.2433%2049.9221%2041.2512H67.0305C69.3367%2041.2502%2071.6377%2041.4687%2073.9025%2041.9039C78.6941%2042.8267%2083.2481%2044.7141%2087.2877%2047.4515C95.9757%2053.3332%20101.968%2062.8914%20103.036%2073.8899C103.149%2075.0516%20103.206%2076.23%20103.207%2077.4251Z'%20fill='url(%23paint1_linear_111_12776)'/%3e%3cpath%20opacity='0.5'%20d='M62.6441%20116.035H49.9229C29.9418%20116.035%2013.7461%2099.8403%2013.7461%2079.8585V77.4252C13.7461%2076.2314%2013.8033%2075.0519%2013.9177%2073.8864C14.9158%2063.6056%2020.2183%2054.5827%2028.0008%2048.6459C34.2965%2043.8376%2042.0017%2041.2386%2049.9236%2041.2512H59.9473C55.6682%2043.6486%2051.6407%2046.7734%2051.1258%2051.4897C50.2831%2059.2241%2059.955%2061.4555%2062.0585%2072.0442C64.8521%2086.1266%2049.9659%2093.4302%2052.4381%20104.842C53.5669%20110.049%2057.7421%20113.477%2062.6441%20116.035Z'%20fill='url(%23paint2_linear_111_12776)'/%3e%3cpath%20opacity='0.42'%20d='M103.209%2077.425V79.8583C103.209%2093.75%2095.3805%20105.812%2083.8933%20111.874C85.1944%20110.673%2086.5067%20109.282%2087.6411%20107.679C97.3625%2093.9011%2092.5552%2065.6383%2076.9273%2053.4545C61.2833%2041.2574%2043.4742%2045.2553%2031.8125%2046.1015C37.3154%2042.9131%2043.5646%2041.2388%2049.9246%2041.2489H67.0315C85.8202%2041.2489%20101.26%2055.5708%20103.037%2073.8869C103.151%2075.051%20103.208%2076.2303%20103.209%2077.425Z'%20fill='url(%23paint3_linear_111_12776)'/%3e%3cpath%20d='M53.7293%20116.035H49.9229C29.9418%20116.035%2013.7461%2099.8401%2013.7461%2079.8584V77.425C13.7461%2076.2313%2013.8033%2075.0517%2013.9177%2073.8862C14.9158%2063.6054%2020.2183%2054.5826%2028.0008%2048.6458C22.0315%2062.5734%2020.7339%2085.1044%2028.3681%2099.2263C35.8292%20113.027%2048.2057%20115.13%2053.7293%20116.035Z'%20fill='url(%23paint4_linear_111_12776)'/%3e%3cpath%20d='M66.7173%2092.5054C66.7986%2092.8359%2066.8037%2093.1805%2066.7322%2093.5132C66.6606%2093.8459%2066.5144%2094.158%2066.3044%2094.4258C66.0945%2094.6937%2065.8264%2094.9103%2065.5204%2095.0592C65.2144%2095.2082%2064.8786%2095.2856%2064.5382%2095.2856H52.1984C51.8581%2095.2856%2051.5223%2095.2082%2051.2163%2095.0592C50.9103%2094.9103%2050.6422%2094.6937%2050.4323%2094.4258C50.2223%2094.158%2050.076%2093.8459%2050.0045%2093.5132C49.933%2093.1805%2049.9381%2092.8359%2050.0194%2092.5054L53.0884%2080.0236C53.1865%2079.6264%2053.174%2079.2099%2053.0522%2078.8193C52.9304%2078.4287%2052.7041%2078.0789%2052.3976%2077.8078C51.4087%2076.9387%2050.6222%2075.8634%2050.0937%2074.6576C49.5651%2073.4517%2049.3073%2072.1447%2049.3385%2070.8285C49.4402%2066.1518%2053.14%2062.3361%2057.7489%2062.0204C57.9325%2062.0069%2058.1176%2061.9999%2058.3033%2061.9985C60.145%2061.9852%2061.9466%2062.5352%2063.4669%2063.5748C64.9871%2064.6143%2066.1533%2066.0937%2066.809%2067.8147C67.4648%2069.5357%2067.5788%2071.416%2067.1358%2073.2036C66.6928%2074.9912%2065.714%2076.6007%2064.3306%2077.8163C64.026%2078.0868%2063.8014%2078.4355%2063.6811%2078.8247C63.5609%2079.2138%2063.5495%2079.6285%2063.6483%2080.0236L66.7173%2092.5054Z'%20fill='white'/%3e%3cpath%20d='M53.0876%2080.0236L50.0185%2092.5054C49.9372%2092.8359%2049.9321%2093.1805%2050.0037%2093.5132C50.0752%2093.8459%2050.2215%2094.158%2050.4314%2094.4258C50.6413%2094.6937%2050.9094%2094.9103%2051.2154%2095.0592C51.5214%2095.2082%2051.8573%2095.2856%2052.1976%2095.2856H50.9608C50.6205%2095.2856%2050.2846%2095.2082%2049.9786%2095.0592C49.6726%2094.9103%2049.4045%2094.6937%2049.1946%2094.4258C48.9847%2094.158%2048.8384%2093.8459%2048.7669%2093.5132C48.6953%2093.1805%2048.7004%2092.8359%2048.7817%2092.5054L51.8515%2080.0236C51.9493%2079.6263%2051.9365%2079.2098%2051.8145%2078.8192C51.6925%2078.4286%2051.4659%2078.0788%2051.1593%2077.8078C50.1707%2076.9384%2049.3845%2075.863%2048.856%2074.6573C48.3275%2073.4515%2048.0695%2072.1446%2048.1001%2070.8285C48.206%2065.966%2052.2011%2062.0331%2057.0657%2061.9992C57.2967%2061.9992%2057.5241%2062.0048%2057.7502%2062.0211C53.1413%2062.3368%2049.4414%2066.1525%2049.3397%2070.8292C49.3086%2072.1454%2049.5664%2073.4524%2050.0949%2074.6583C50.6235%2075.8641%2051.4099%2076.9394%2052.3989%2077.8085C52.7048%2078.0798%2052.9307%2078.4296%2053.0521%2078.82C53.1735%2079.2105%2053.1858%2079.6267%2053.0876%2080.0236Z'%20fill='url(%23paint5_linear_111_12776)'/%3e%3cpath%20opacity='0.82'%20d='M27.1823%2040.1472C29.8062%2037.845%2032.7494%2035.9345%2035.9205%2034.4753C35.8527%2035.4514%2035.8188%2036.4403%2035.8188%2037.4419V44.0321C32.8611%2045.4034%2029.666%2047.1685%2027.1816%2049.2795L27.1823%2040.1472Z'%20fill='url(%23paint6_linear_111_12776)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_111_12776'%20x1='57.2351'%20y1='47.5172'%20x2='57.2351'%20y2='4.12583'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DEE0E2'/%3e%3cstop%20offset='1'%20stop-color='%23EFEFEF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_111_12776'%20x1='58.4766'%20y1='116.198'%20x2='58.4766'%20y2='35.8604'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DEE0E2'/%3e%3cstop%20offset='1'%20stop-color='%23EFEFEF'/%3e%3cstop%20offset='1'%20stop-color='%23EFEFEF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_111_12776'%20x1='-9.05252'%20y1='78.6422'%20x2='53.9553'%20y2='78.6422'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FCFDFE'/%3e%3cstop%20offset='0.09'%20stop-color='%23FEFEFC'%20stop-opacity='0.96'/%3e%3cstop%20offset='0.25'%20stop-color='%23FEFEFC'%20stop-opacity='0.86'/%3e%3cstop%20offset='0.44'%20stop-color='%23FEFEFD'%20stop-opacity='0.7'/%3e%3cstop%20offset='0.68'%20stop-color='%23FFFFFE'%20stop-opacity='0.47'/%3e%3cstop%20offset='0.93'%20stop-color='white'%20stop-opacity='0.18'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.1'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_111_12776'%20x1='97.7552'%20y1='92.2525'%20x2='26.5778'%20y2='14.1868'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DEE0E2'/%3e%3cstop%20offset='1'%20stop-color='%23B4B9BE'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_111_12776'%20x1='17.2538'%20y1='62.3997'%20x2='60.7956'%20y2='141.011'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DEE1E2'/%3e%3cstop%20offset='0.3'%20stop-color='%23D7DBDC'/%3e%3cstop%20offset='0.75'%20stop-color='%23C3C9CB'/%3e%3cstop%20offset='1'%20stop-color='%23B4BCBE'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint5_linear_111_12776'%20x1='52.5027'%20y1='59.8766'%20x2='54.0334'%20y2='97.0465'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DEE0E2'/%3e%3cstop%20offset='1'%20stop-color='%23B4B9BE'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint6_linear_111_12776'%20x1='31.5511'%20y1='31.604'%20x2='31.5511'%20y2='48.7208'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DEE0E2'/%3e%3cstop%20offset='1'%20stop-color='%23B4B9BE'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", ry = "data:image/svg+xml,%3csvg%20width='296'%20height='121'%20viewBox='0%200%20296%20121'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1874_29372)'%3e%3cpath%20opacity='0.1'%20d='M224.307%2058.1573C223.618%2076.5232%20214.133%2092.0992%20198.188%20101.65C166.5%20120.628%20111.181%20123.651%2067.9739%20113.192C67.3195%20113.036%2066.6845%20112.876%2066.0464%20112.695C65.9658%20112.684%2065.882%20112.65%2065.8014%20112.639C59.342%20110.972%2053.159%20108.882%2047.3235%20106.314C37.7811%20102.12%2029.2157%2096.7261%2022.138%2089.9697C21.8424%2089.6949%2021.5661%2089.4173%2021.2899%2089.1398C14.5184%2082.4533%209.14699%2074.4844%205.6957%2065.1372C5.43762%2064.4276%205.20203%2063.7374%204.96645%2063.0472C-4.32987%2034.5176%2012.2478%207.58645%2041.517%206.35541C68.2912%205.22731%2076.5487%2015.7283%2097.7011%2021.5411C118.85%2027.3319%20144.793%2019.7401%20166.232%2015.9503C173.577%2014.6441%20181.393%2015.2833%20186.54%2016.0499C205.177%2018.8717%20225.328%2030.9412%20224.307%2058.1573Z'%20fill='%234182EC'/%3e%3cellipse%20opacity='0.3'%20cx='120'%20cy='111.5'%20rx='72'%20ry='4'%20fill='url(%23paint0_radial_1874_29372)'/%3e%3cpath%20d='M115.975%205.5C108.584%2012.539%2089.6625%2019.6433%2067.6026%2034.7176C67.6026%2034.7176%2068.9808%2085.6566%20115.975%20113.5V5.5Z'%20fill='url(%23paint1_linear_1874_29372)'/%3e%3cpath%20d='M115.976%205.5C123.367%2012.539%20142.289%2019.6433%20164.349%2034.7176C164.349%2034.7176%20162.97%2085.6566%20115.976%20113.5V5.5Z'%20fill='url(%23paint2_linear_1874_29372)'/%3e%3cpath%20d='M115.975%209.83691C107.052%2016.1634%2091.592%2022.1913%2071.1501%2036.1599C71.1501%2036.1599%2072.4271%2083.363%20115.975%20109.164C159.523%2083.363%20160.8%2036.1599%20160.8%2036.1599C140.358%2022.1913%20124.967%2016.1634%20115.975%209.83691Z'%20fill='url(%23paint3_linear_1874_29372)'/%3e%3cpath%20d='M153.162%2031.1445C121.979%2040.5791%2098.1674%2067.9837%2087.3748%2082.4362C94.8166%2093.349%20104.584%20102.477%20115.975%20109.163C159.523%2083.3623%20160.8%2036.1592%20160.8%2036.1592C158.169%2034.3613%20155.623%2032.6969%20153.162%2031.1445Z'%20fill='url(%23paint4_linear_1874_29372)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M75.3904%2063.9797C71.1616%2068.3999%2068.1403%2072.6126%2066.5226%2076.3427C64.9008%2080.0821%2064.7483%2083.1856%2065.9779%2085.5494C67.1817%2087.8636%2069.7257%2089.4999%2073.5809%2090.3364C77.4285%2091.1712%2082.4353%2091.1714%2088.2871%2090.3367C95.6364%2089.2884%20104.229%2086.9362%20113.371%2083.3714C109.337%2081.6551%20105.229%2079.7188%20101.1%2077.571C85.7509%2069.5869%2073.5044%2060.1714%2065.5407%2051.2282C61.56%2046.758%2058.6237%2042.377%2056.9168%2038.3242C55.2137%2034.2803%2054.6979%2030.4709%2055.712%2027.2175C57.2553%2022.2659%2062.5918%2020.8214%2067.5749%2021.1682C70.1238%2021.3456%2072.7269%2021.9879%2074.9927%2022.9664C77.2453%2023.9393%2079.2429%2025.2787%2080.4983%2026.9037L78.9157%2028.1264C77.9397%2026.8633%2076.2722%2025.6976%2074.1998%2024.8025C72.1406%2023.9132%2069.7586%2023.325%2067.436%2023.1633C62.676%2022.8321%2058.7238%2024.2757%2057.6214%2027.8126C56.7988%2030.4517%2057.1602%2033.7493%2058.76%2037.5479C60.3561%2041.3376%2063.1485%2045.5345%2067.0343%2049.8982C74.8035%2058.6229%2086.8407%2067.8994%20102.023%2075.7967C106.75%2078.2559%20111.444%2080.431%20116.019%2082.311C120.595%2080.431%20125.288%2078.2558%20130.016%2075.7966L130.042%2075.783L130.069%2075.771C143.134%2069.9261%20154.369%2060.4483%20162.226%2051.1316C166.153%2046.4751%20169.219%2041.8794%20171.244%2037.8251C173.287%2033.7351%20174.206%2030.3218%20174.011%2027.9864C173.824%2025.7487%20172.953%2024.2767%20171.721%2023.3559C170.463%2022.4151%20168.708%2021.9618%20166.621%2022.0207C162.433%2022.1389%20157.252%2024.3196%20153.247%2027.929L151.908%2026.4433C156.199%2022.5759%20161.819%2020.1554%20166.565%2020.0215C168.945%2019.9543%20171.19%2020.4621%20172.919%2021.7539C174.674%2023.0658%20175.777%2025.0978%20176.004%2027.8198C176.246%2030.7124%20175.125%2034.5313%20173.033%2038.7187C170.924%2042.9418%20167.763%2047.6688%20163.755%2052.421C155.748%2061.9157%20144.291%2071.5936%20130.913%2077.5845C126.793%2079.7269%20122.693%2081.6587%20118.667%2083.3714C127.809%2086.9362%20136.402%2089.2884%20143.751%2090.3367C149.603%2091.1715%20154.61%2091.1712%20158.458%2090.3364C162.313%2089.4999%20164.857%2087.8636%20166.061%2085.5494C167.29%2083.1856%20167.138%2080.0821%20165.516%2076.3427C163.898%2072.6126%20160.877%2068.3999%20156.648%2063.9797L158.093%2062.5972C162.412%2067.1109%20165.604%2071.5193%20167.351%2075.547C169.094%2079.5652%20169.456%2083.356%20167.835%2086.4724C166.248%2089.5233%20163.039%2091.3888%20158.882%2092.2909C154.716%2093.1947%20149.45%2093.1698%20143.469%2092.3167C135.429%2091.1698%20125.995%2088.5108%20116.019%2084.4709C106.044%2088.5108%2096.61%2091.1697%2088.5695%2092.3167C82.5887%2093.1698%2077.3222%2093.1947%2073.1568%2092.2909C68.9991%2091.3888%2065.7906%2089.5232%2064.2036%2086.4724C62.5825%2083.356%2062.945%2079.5652%2064.6877%2075.547C66.4344%2071.5193%2069.6269%2067.1109%2073.9452%2062.5972L75.3904%2063.9797Z'%20fill='url(%23paint5_linear_1874_29372)'/%3e%3cg%20filter='url(%23filter0_d_1874_29372)'%3e%3cpath%20d='M130.818%2059.714H101.601C100.957%2059.714%20100.34%2059.4582%2099.8844%2059.0028C99.4291%2058.5475%2099.1733%2057.93%2099.1732%2057.286V43.5245C99.1732%2039.0062%20100.968%2034.673%20104.163%2031.4781C107.358%2028.2832%20111.691%2026.4883%20116.209%2026.4883C120.728%2026.4883%20125.061%2028.2832%20128.256%2031.4781C131.451%2034.673%20133.246%2039.0062%20133.246%2043.5245V57.286C133.246%2057.93%20132.99%2058.5475%20132.535%2059.0029C132.079%2059.4582%20131.462%2059.714%20130.818%2059.714ZM104.029%2054.8581H128.39V43.5245C128.39%2040.2941%20127.107%2037.196%20124.822%2034.9117C122.538%2032.6275%20119.44%2031.3442%20116.209%2031.3442C112.979%2031.3442%20109.881%2032.6275%20107.597%2034.9117C105.312%2037.196%20104.029%2040.2941%20104.029%2043.5245V54.8581Z'%20fill='url(%23paint6_linear_1874_29372)'%20stroke='url(%23paint7_linear_1874_29372)'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M98.5618%2052.7402H133.428C134.284%2052.7402%20134.979%2053.4346%20134.979%2054.2912V83.0044C134.979%2083.861%20134.284%2084.5554%20133.428%2084.5554H98.5618C97.7052%2084.5554%2097.0109%2083.861%2097.0109%2083.0044V54.2912C97.0109%2053.4346%2097.7052%2052.7402%2098.5618%2052.7402Z'%20fill='url(%23paint8_linear_1874_29372)'%20stroke='url(%23paint9_linear_1874_29372)'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M121.121%2065.5109C121.121%2064.6153%20120.881%2063.7357%20120.425%2062.9617C119.969%2062.1877%20119.313%2061.547%20118.525%2061.1049C117.737%2060.6627%20116.844%2060.4349%20115.938%2060.4446C115.032%2060.4544%20114.145%2060.7013%20113.366%2061.1603C112.588%2061.6192%20111.947%2062.2739%20111.508%2063.0574C111.069%2063.841%20110.848%2064.7256%20110.868%2065.621C110.887%2066.5164%20111.147%2067.3907%20111.62%2068.1549C112.092%2068.919%20112.762%2069.5456%20113.559%2069.9709L112.698%2078.9029H119.29L118.429%2069.9709C119.243%2069.5369%20119.923%2068.8931%20120.397%2068.1079C120.871%2067.3226%20121.122%2066.4252%20121.121%2065.5109Z'%20fill='url(%23paint10_linear_1874_29372)'/%3e%3cpath%20d='M121.121%2065.5109C121.121%2064.6153%20120.881%2063.7357%20120.425%2062.9617C119.969%2062.1877%20119.313%2061.547%20118.525%2061.1049C117.737%2060.6627%20116.844%2060.4349%20115.938%2060.4446C115.032%2060.4544%20114.145%2060.7013%20113.366%2061.1603C112.588%2061.6192%20111.947%2062.2739%20111.508%2063.0574C111.069%2063.841%20110.848%2064.7256%20110.868%2065.621C110.887%2066.5164%20111.147%2067.3907%20111.62%2068.1549C112.092%2068.919%20112.762%2069.5456%20113.559%2069.9709L112.698%2078.9029H119.29L118.429%2069.9709C119.243%2069.5369%20119.923%2068.8931%20120.397%2068.1079C120.871%2067.3226%20121.122%2066.4252%20121.121%2065.5109Z'%20stroke='url(%23paint11_linear_1874_29372)'%20stroke-opacity='0.7'%20stroke-width='0.485591'%20stroke-linecap='round'%20stroke-linejoin='round'%20style='mix-blend-mode:overlay'/%3e%3c/g%3e%3cg%20filter='url(%23filter1_d_1874_29372)'%3e%3crect%20x='124.088'%20y='36.5'%20width='65.8242'%20height='19.9824'%20rx='4.2126'%20fill='url(%23paint12_linear_1874_29372)'%20shape-rendering='crispEdges'/%3e%3crect%20x='124.588'%20y='37'%20width='64.8242'%20height='18.9824'%20rx='3.7126'%20stroke='url(%23paint13_linear_1874_29372)'%20shape-rendering='crispEdges'/%3e%3ccircle%20cx='133.491'%20cy='46.4911'%20r='3.5263'%20fill='%23D9D9D9'/%3e%3ccircle%20cx='133.491'%20cy='46.4911'%20r='3.5263'%20fill='url(%23paint14_linear_1874_29372)'/%3e%3ccircle%20cx='133.491'%20cy='46.4911'%20r='3.5263'%20fill='url(%23paint15_radial_1874_29372)'/%3e%3ccircle%20cx='142.895'%20cy='46.4911'%20r='3.5263'%20fill='%23D9D9D9'/%3e%3ccircle%20cx='142.895'%20cy='46.4911'%20r='3.5263'%20fill='url(%23paint16_linear_1874_29372)'/%3e%3ccircle%20cx='142.895'%20cy='46.4911'%20r='3.5263'%20fill='url(%23paint17_radial_1874_29372)'/%3e%3ccircle%20cx='152.298'%20cy='46.4911'%20r='3.5263'%20fill='%23D9D9D9'/%3e%3ccircle%20cx='152.298'%20cy='46.4911'%20r='3.5263'%20fill='url(%23paint18_linear_1874_29372)'/%3e%3ccircle%20cx='152.298'%20cy='46.4911'%20r='3.5263'%20fill='url(%23paint19_radial_1874_29372)'/%3e%3ccircle%20cx='161.702'%20cy='46.4911'%20r='3.5263'%20fill='%23D9D9D9'/%3e%3ccircle%20cx='161.702'%20cy='46.4911'%20r='3.5263'%20fill='url(%23paint20_linear_1874_29372)'/%3e%3ccircle%20cx='161.702'%20cy='46.4911'%20r='3.5263'%20fill='url(%23paint21_radial_1874_29372)'/%3e%3ccircle%20cx='171.105'%20cy='46.4911'%20r='3.5263'%20fill='%23D9D9D9'/%3e%3ccircle%20cx='171.105'%20cy='46.4911'%20r='3.5263'%20fill='url(%23paint22_linear_1874_29372)'/%3e%3ccircle%20cx='171.105'%20cy='46.4911'%20r='3.5263'%20fill='url(%23paint23_radial_1874_29372)'/%3e%3ccircle%20cx='180.508'%20cy='46.4911'%20r='3.5263'%20fill='%23D9D9D9'/%3e%3ccircle%20cx='180.508'%20cy='46.4911'%20r='3.5263'%20fill='url(%23paint24_linear_1874_29372)'/%3e%3ccircle%20cx='180.508'%20cy='46.4911'%20r='3.5263'%20fill='url(%23paint25_radial_1874_29372)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_1874_29372'%20x='92.6132'%20y='25.9883'%20width='46.7633'%20height='66.8626'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='3.89763'/%3e%3cfeGaussianBlur%20stdDeviation='1.94882'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.21%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_1874_29372'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_1874_29372'%20result='shape'/%3e%3c/filter%3e%3cfilter%20id='filter1_d_1874_29372'%20x='121.983'%20y='35.4476'%20width='74.2433'%20height='28.4016'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dx='2.10478'%20dy='3.15718'/%3e%3cfeGaussianBlur%20stdDeviation='2.10478'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.130752%200%200%200%200%200.15853%200%200%200%200%200.219642%200%200%200%200.08%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_1874_29372'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_1874_29372'%20result='shape'/%3e%3c/filter%3e%3cradialGradient%20id='paint0_radial_1874_29372'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(120%20111.5)%20rotate(90)%20scale(4%2072)'%3e%3cstop%20stop-color='%237988B1'/%3e%3cstop%20offset='0.864583'%20stop-color='%237988B1'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3clinearGradient%20id='paint1_linear_1874_29372'%20x1='114.245'%20y1='113.376'%20x2='80.8764'%20y2='27.4415'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.0767182'%20stop-color='%23448D7E'/%3e%3cstop%20offset='0.666476'%20stop-color='%2373B599'/%3e%3cstop%20offset='1'%20stop-color='%23ADF7C2'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_1874_29372'%20x1='176.392'%20y1='78.1993'%20x2='109.113'%20y2='-12.2583'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23003C30'/%3e%3cstop%20offset='0.561878'%20stop-color='%23246A5B'/%3e%3cstop%20offset='0.851096'%20stop-color='%2354A695'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_1874_29372'%20x1='155.933'%20y1='80.6185'%20x2='121.445'%20y2='7.66183'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2314554E'/%3e%3cstop%20offset='0.44'%20stop-color='%232F7A72'/%3e%3cstop%20offset='1'%20stop-color='%2373B599'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_1874_29372'%20x1='150.009'%20y1='123.929'%20x2='84.3449'%20y2='6.6723'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.148171'%20stop-color='%230B3531'/%3e%3cstop%20offset='0.579606'%20stop-color='%2373B599'%20stop-opacity='0.28'/%3e%3cstop%20offset='0.970837'%20stop-color='%23ADF7C2'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint5_linear_1874_29372'%20x1='88.2556'%20y1='104.212'%20x2='90.8789'%20y2='-7.3154'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%237288CB'/%3e%3cstop%20offset='0.293969'%20stop-color='%23909FC9'/%3e%3cstop%20offset='0.642674'%20stop-color='%23B9C5EA'/%3e%3cstop%20offset='0.991093'%20stop-color='%23D5E0FF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint6_linear_1874_29372'%20x1='97.5844'%20y1='24.9971'%20x2='140.3'%20y2='42.3365'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='0.250901'%20stop-color='%23E5ECFF'/%3e%3cstop%20offset='1'%20stop-color='%237385B5'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint7_linear_1874_29372'%20x1='116.209'%20y1='26.1597'%20x2='116.209'%20y2='59.7142'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23BDCEFE'/%3e%3cstop%20offset='1'%20stop-color='white'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint8_linear_1874_29372'%20x1='94.6938'%20y1='50.7675'%20x2='141.299'%20y2='72.6746'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='0.250901'%20stop-color='%23E5ECFF'/%3e%3cstop%20offset='1'%20stop-color='%237385B5'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint9_linear_1874_29372'%20x1='118.287'%20y1='85.132'%20x2='118.287'%20y2='53.4736'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23BDCEFE'/%3e%3cstop%20offset='1'%20stop-color='white'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint10_linear_1874_29372'%20x1='119.648'%20y1='99.0707'%20x2='96.1057'%20y2='62.7609'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23425892'/%3e%3cstop%20offset='0.368422'%20stop-color='%232E3D75'/%3e%3cstop%20offset='1'%20stop-color='%2309143F'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint11_linear_1874_29372'%20x1='121.451'%20y1='79.5645'%20x2='122.42'%20y2='61.4267'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23091E59'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint12_linear_1874_29372'%20x1='164.65'%20y1='55.2245'%20x2='157.245'%20y2='29.9592'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.164324'%20stop-color='%23122D82'/%3e%3cstop%20offset='0.690489'%20stop-color='%235473C3'/%3e%3cstop%20offset='1'%20stop-color='%23709AD8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint13_linear_1874_29372'%20x1='172.952'%20y1='35.3295'%20x2='169.51'%20y2='58.266'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239DADDB'/%3e%3cstop%20offset='1'%20stop-color='white'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint14_linear_1874_29372'%20x1='134.311'%20y1='49.5735'%20x2='129.472'%20y2='44.5617'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.164324'%20stop-color='%23122D82'/%3e%3cstop%20offset='0.690489'%20stop-color='%235473C3'/%3e%3cstop%20offset='1'%20stop-color='%23709AD8'/%3e%3c/linearGradient%3e%3cradialGradient%20id='paint15_radial_1874_29372'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(133.491%2046.4911)%20rotate(45.0335)%20scale(7.48479%206.69013)'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%237385B5'/%3e%3c/radialGradient%3e%3clinearGradient%20id='paint16_linear_1874_29372'%20x1='143.714'%20y1='49.5735'%20x2='138.876'%20y2='44.5617'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.164324'%20stop-color='%23122D82'/%3e%3cstop%20offset='0.690489'%20stop-color='%235473C3'/%3e%3cstop%20offset='1'%20stop-color='%23709AD8'/%3e%3c/linearGradient%3e%3cradialGradient%20id='paint17_radial_1874_29372'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(142.895%2046.4911)%20rotate(45.0335)%20scale(7.48479%206.69013)'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%237385B5'/%3e%3c/radialGradient%3e%3clinearGradient%20id='paint18_linear_1874_29372'%20x1='153.118'%20y1='49.5735'%20x2='148.279'%20y2='44.5617'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.164324'%20stop-color='%23122D82'/%3e%3cstop%20offset='0.690489'%20stop-color='%235473C3'/%3e%3cstop%20offset='1'%20stop-color='%23709AD8'/%3e%3c/linearGradient%3e%3cradialGradient%20id='paint19_radial_1874_29372'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(152.298%2046.4911)%20rotate(45.0335)%20scale(7.48479%206.69013)'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%237385B5'/%3e%3c/radialGradient%3e%3clinearGradient%20id='paint20_linear_1874_29372'%20x1='162.521'%20y1='49.5735'%20x2='157.683'%20y2='44.5617'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.164324'%20stop-color='%23122D82'/%3e%3cstop%20offset='0.690489'%20stop-color='%235473C3'/%3e%3cstop%20offset='1'%20stop-color='%23709AD8'/%3e%3c/linearGradient%3e%3cradialGradient%20id='paint21_radial_1874_29372'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(161.702%2046.4911)%20rotate(45.0335)%20scale(7.48479%206.69013)'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%237385B5'/%3e%3c/radialGradient%3e%3clinearGradient%20id='paint22_linear_1874_29372'%20x1='171.925'%20y1='49.5735'%20x2='167.086'%20y2='44.5617'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.164324'%20stop-color='%23122D82'/%3e%3cstop%20offset='0.690489'%20stop-color='%235473C3'/%3e%3cstop%20offset='1'%20stop-color='%23709AD8'/%3e%3c/linearGradient%3e%3cradialGradient%20id='paint23_radial_1874_29372'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(171.105%2046.4911)%20rotate(45.0335)%20scale(7.48479%206.69013)'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%237385B5'/%3e%3c/radialGradient%3e%3clinearGradient%20id='paint24_linear_1874_29372'%20x1='181.328'%20y1='49.5735'%20x2='176.489'%20y2='44.5617'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.164324'%20stop-color='%23122D82'/%3e%3cstop%20offset='0.690489'%20stop-color='%235473C3'/%3e%3cstop%20offset='1'%20stop-color='%23709AD8'/%3e%3c/linearGradient%3e%3cradialGradient%20id='paint25_radial_1874_29372'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(180.508%2046.4911)%20rotate(45.0335)%20scale(7.48479%206.69013)'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%237385B5'/%3e%3c/radialGradient%3e%3cclipPath%20id='clip0_1874_29372'%3e%3crect%20width='296'%20height='120'%20fill='white'%20transform='translate(0%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", iy = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M4.0001%204L4.0001%206.3999L3.2001%206.3999C2.34542%206.3999%201.6001%207.021%201.6001%207.86657L1.6001%2014.5332C1.6001%2015.3788%202.34542%2015.9999%203.2001%2015.9999L12.8001%2015.9999C13.6548%2015.9999%2014.4001%2015.3788%2014.4001%2014.5332L14.4001%207.86657C14.4001%207.021%2013.6548%206.3999%2012.8001%206.3999H12.0001V4C12.0001%201.79086%2010.2092%200%208.0001%200C5.79096%200%204.0001%201.79086%204.0001%204ZM10.4001%204V6.3999L5.6001%206.3999L5.6001%204C5.6001%202.67452%206.67461%201.6%208.0001%201.6C9.32558%201.6%2010.4001%202.67452%2010.4001%204ZM3.2%2014.3998L3.2%207.9998L12.8%207.9998L12.8%2014.3998L3.2%2014.3998ZM8.8002%2011.2001C8.8002%2011.6419%208.44202%2012.0001%208.0002%2012.0001C7.55837%2012.0001%207.20019%2011.6419%207.20019%2011.2001C7.20019%2010.7583%207.55837%2010.4001%208.0002%2010.4001C8.44202%2010.4001%208.8002%2010.7583%208.8002%2011.2001Z'/%3e%3c/svg%3e", oy = "data:image/svg+xml,%3csvg%20width='14'%20height='16'%20viewBox='0%200%2014%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.99961%200C8.76692%200%2010.1996%201.43269%2010.1996%203.2V4.8H12.1996C12.8624%204.8%2013.3996%205.33726%2013.3996%206V14.8C13.3996%2015.4627%2012.8624%2016%2012.1996%2016H1.79961C1.13687%2016%200.599609%2015.4627%200.599609%2014.8V6C0.599609%205.33726%201.13687%204.8%201.79961%204.8H3.79961V3.2C3.79961%201.43269%205.2323%200%206.99961%200ZM6.99971%209.2C6.33697%209.2%205.79971%209.73726%205.79971%2010.4C5.79971%2011.0627%206.33697%2011.6%206.99971%2011.6C7.66245%2011.6%208.19971%2011.0627%208.19971%2010.4C8.19971%209.73726%207.66245%209.2%206.99971%209.2ZM6.99961%201.6C6.11595%201.6%205.39961%202.31634%205.39961%203.2V4.8H8.59961V3.2C8.59961%202.31634%207.88327%201.6%206.99961%201.6Z'%20fill='%2384858C'/%3e%3c/svg%3e", ay = "data:image/svg+xml,%3csvg%20width='128'%20height='132'%20viewBox='0%200%20128%20132'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2016C0%207.16344%207.16344%200%2016%200L112%200C120.837%200%20128%207.16344%20128%2016V116C128%20124.837%20120.837%20132%20112%20132H16C7.16344%20132%200%20124.837%200%20116L0%2016ZM10%2018C10%2013.5817%2013.5817%2010%2018%2010L110%2010C114.418%2010%20118%2013.5817%20118%2018V98C118%20102.418%20114.418%20106%20110%20106H18C13.5817%20106%2010%20102.418%2010%2098L10%2018ZM84.7688%2073.1945L77.0277%2083.243L56.8552%2054.5613C55.2801%2052.3218%2051.9713%2052.2911%2050.3549%2054.5009L24.6532%2089.6385C22.7202%2092.2811%2024.6075%2096%2027.8817%2096H75.3309H78.2964H100.059C103.344%2096%20105.229%2092.259%20103.273%2089.6191L91.1518%2073.2547C89.5714%2071.1212%2086.3891%2071.0912%2084.7688%2073.1945ZM90.5%2024C84.1487%2024%2079%2029.1487%2079%2035.5C79%2041.8513%2084.1487%2047%2090.5%2047C96.8513%2047%20102%2041.8513%20102%2035.5C102%2029.1487%2096.8513%2024%2090.5%2024Z'%20fill='%23F2F3F5'/%3e%3c/svg%3e", Xl = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2.66017%204.32061C2.67767%204.14449%202.61175%203.97076%202.48342%203.85255L1.17675%202.2406V2H5.23558L8.37275%209.04184L11.1307%202H15V2.2406L13.8823%203.33732C13.7861%203.41255%2013.7382%203.53613%2013.7581%203.65852V11.7171C13.7382%2011.8389%2013.7861%2011.9625%2013.8823%2012.0377L14.9737%2013.1344V13.375H9.48342V13.1344L10.6145%2012.0108C10.7253%2011.8974%2010.7253%2011.8639%2010.7253%2011.6902V5.17674L7.58175%2013.3487H7.15708L3.49667%205.17674V10.6538C3.46633%2010.8836%203.541%2011.1159%203.69908%2011.2819L5.16967%2013.1075V13.3487H1V13.1075L2.47058%2011.2819C2.62808%2011.1153%202.69808%2010.8818%202.66017%2010.6538V4.32061Z'%20/%3e%3c/svg%3e", sy = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M4%201.5L16%201.5V3.1L4%203.1V1.5ZM0%207L16%207V8.6L0%208.6L0%207ZM16%2012.5L4%2012.5V14.1L16%2014.1V12.5Z'/%3e%3c/svg%3e", ly = "data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.2908%203C16.2908%204.65685%2014.9476%206%2013.2908%206C11.6339%206%2010.2908%204.65685%2010.2908%203C10.2908%201.34315%2011.6339%200%2013.2908%200C14.9476%200%2016.2908%201.34315%2016.2908%203Z'/%3e%3cpath%20d='M23.7285%2012.763C22.1527%2013.275%2020.4602%2012.4127%2019.9483%2010.8369C19.4363%209.26115%2020.2986%207.56869%2021.8744%207.05669C23.4501%206.54469%2025.1426%207.40705%2025.6546%208.98281C26.1666%2010.5586%2025.3042%2012.251%2023.7285%2012.763Z'%20/%3e%3cpath%20d='M16.7417%2022.8536C15.7678%2021.5131%2016.0649%2019.637%2017.4054%2018.6632C18.7458%2017.6893%2020.6219%2017.9864%2021.5958%2019.3269C22.5696%2020.6673%2022.2725%2022.5434%2020.9321%2023.5173C19.5917%2024.4911%2017.7155%2024.194%2016.7417%2022.8536Z'%20/%3e%3cpath%20d='M4.70727%207.05665C6.28303%207.56865%207.14539%209.26111%206.63339%2010.8369C6.12139%2012.4126%204.42893%2013.275%202.85317%2012.763C1.27741%2012.251%200.415055%2010.5585%200.927051%208.98277C1.43905%207.40701%203.13151%206.54465%204.70727%207.05665Z'%20/%3e%3cpath%20d='M4.98591%2019.3268C5.95979%2017.9863%207.8359%2017.6892%209.17632%2018.6631C10.5167%2019.6369%2010.8139%2021.513%209.84002%2022.8535C8.86614%2024.1939%206.99003%2024.491%205.64961%2023.5172C4.30919%2022.5433%204.01204%2020.6672%204.98591%2019.3268Z'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.5845%203.96609C17.4649%204.5001%2017.2482%204.99744%2016.9539%205.43861C17.8536%205.87529%2018.6637%206.46781%2019.3489%207.1811C19.6773%206.76485%2020.0831%206.40497%2020.5537%206.12602C19.7103%205.23525%2018.7049%204.49953%2017.5845%203.96609ZM23.2082%2014.2919C22.6634%2014.343%2022.1236%2014.2905%2021.6132%2014.1468C21.4757%2015.1537%2021.1598%2016.1038%2020.6984%2016.9642C21.1958%2017.1481%2021.6634%2017.423%2022.0741%2017.7846C22.6539%2016.7224%2023.0467%2015.5434%2023.2082%2014.2919ZM15.127%2022.8318C14.91%2022.3294%2014.7931%2021.7997%2014.772%2021.2698C14.2912%2021.3554%2013.7962%2021.4%2013.2908%2021.4C12.7854%2021.4%2012.2904%2021.3553%2011.8096%2021.2698C11.7884%2021.7997%2011.6715%2022.3294%2011.4545%2022.8317C12.0498%2022.9422%2012.6636%2023%2013.2908%2023C13.9181%2023%2014.5318%2022.9422%2015.127%2022.8318ZM4.50751%2017.7844C4.91818%2017.4228%205.38581%2017.1479%205.88317%2016.9641C5.4218%2016.1037%205.10593%2015.1537%204.96848%2014.1469C4.4581%2014.2905%203.91827%2014.3431%203.37354%2014.292C3.53496%2015.5434%203.92771%2016.7223%204.50751%2017.7844ZM6.02783%206.12618C6.49843%206.40515%206.90417%206.76503%207.23254%207.18129C7.91788%206.4679%208.72802%205.8753%209.62784%205.43859C9.33356%204.99742%209.11686%204.50008%208.99724%203.96606C7.87678%204.49954%206.87124%205.23532%206.02783%206.12618Z'%20/%3e%3c/svg%3e", cy = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='32'%20height='32'%20rx='2'%20fill='%23D2D3D9'/%3e%3cpath%20d='M12.7738%2012.7273V20H11.4457L8.28161%2015.4226H8.22834V20H6.6907V12.7273H8.04013L11.1793%2017.3011H11.2433V12.7273H12.7738ZM14.0442%2020V12.7273H18.8596V13.995H15.5819V15.728H18.54V16.9957H15.5819V20H14.0442ZM19.6168%2013.995V12.7273H25.5898V13.995H23.3633V20H21.8434V13.995H19.6168Z'%20fill='white'/%3e%3c/svg%3e", uy = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%202.34326V8.00012V13.657'%20stroke-width='1.6'/%3e%3cpath%20d='M2.34375%208H8.0006H13.6575'%20stroke-width='1.6'/%3e%3c/svg%3e", Yl = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20d='M12.9051%201C12.693%201.00025%2012.4843%201.05271%2012.2974%201.15274C12.1104%201.25278%2011.951%201.3973%2011.8331%201.57356L9.1222%201.08576L8.67879%201.00555L8.53048%201.46662L7.25876%205.421C5.54568%205.55454%204.03067%206.14788%202.95277%207.02213C2.79541%206.83501%202.59908%206.68452%202.3775%206.58118C2.15592%206.47784%201.91444%206.42415%201.66995%206.42385C1.25753%206.42603%200.860341%206.57994%200.554143%206.85624C0.247944%207.13253%200.0541631%207.51187%200.00976141%207.9219C-0.0346403%208.33193%200.0734443%208.74396%200.313399%209.07939C0.553355%209.41483%200.908388%209.6502%201.31078%209.74061C1.29317%209.88174%201.28253%2010.0245%201.28253%2010.1689C1.28253%2012.8085%204.2889%2014.9471%207.99778%2014.9471C11.7067%2014.9471%2014.713%2012.8085%2014.713%2010.1689C14.713%2010.0248%2014.7023%209.88243%2014.6848%209.74162C15.0882%209.65213%2015.4444%209.41702%2015.6853%209.08128C15.9261%208.74555%2016.0347%208.33277%2015.9902%207.92197C15.9458%207.51117%2015.7514%207.1312%2015.4442%206.85479C15.1371%206.57838%2014.7388%206.42494%2014.3256%206.42385C14.0811%206.42415%2013.8396%206.47784%2013.6181%206.58118C13.3965%206.68452%2013.2002%206.83501%2013.0428%207.02213C11.9839%206.16327%2010.5022%205.57757%208.82609%205.43059L9.44202%202.19252L11.649%202.59003C11.7162%202.87267%2011.8767%203.12441%2012.1046%203.30455C12.3325%203.48469%2012.6146%203.58272%2012.9051%203.58279C13.2476%203.58279%2013.576%203.44673%2013.8182%203.20455C14.0604%202.96236%2014.1965%202.63389%2014.1965%202.29139C14.1965%201.94889%2014.0604%201.62042%2013.8182%201.37824C13.576%201.13606%2013.2476%201%2012.9051%201ZM5.19556%207.97353C5.88774%207.97353%206.44811%208.55207%206.44811%209.26492C6.44811%209.97777%205.88774%2010.5563%205.19556%2010.5563C4.50595%2010.5718%203.94301%209.97777%203.94301%209.26492C3.94301%208.55207%204.50595%207.97353%205.19556%207.97353ZM10.8%207.97353C11.4896%207.97353%2012.0526%208.55207%2012.0526%209.26492C12.0526%209.97777%2011.4896%2010.5718%2010.8%2010.5563C10.1078%2010.5563%209.54745%209.97777%209.54745%209.26492C9.54745%208.55207%2010.1078%207.97353%2010.8%207.97353ZM5.46645%2011.6928C5.4742%2011.698%206.4042%2012.4677%207.99778%2012.4677C9.59136%2012.4677%2010.6091%2011.8115%2010.6169%2011.8063L11.1486%2012.5191C11.0995%2012.5553%209.95553%2013.3974%207.99778%2013.3974C6.04003%2013.3974%204.89605%2012.5553%204.84698%2012.5191L5.46645%2011.6928Z'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", dy = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.6455%204C11.5572%202.46296%209.9149%201.6%208%201.6C4.46538%201.6%201.6%204.46538%201.6%208C1.6%2011.5346%204.46538%2014.4%208%2014.4C11.5346%2014.4%2014.4%2011.5346%2014.4%208H16C16%2012.4183%2012.4183%2016%208%2016C3.58172%2016%200%2012.4183%200%208C0%203.58172%203.58172%200%208%200C10.2434%200%2012.2199%200.946009%2013.6%202.61628V0H15.2V5.6H9.6V4H12.6455Z'/%3e%3c/svg%3e", fy = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M31.9651%2038.7576V33.3695C31.9651%2031.1413%2031.0701%2029.0956%2029.6203%2027.6344C28.4568%2026.4472%2026.9354%2025.6071%2025.2349%2025.3331V27.0521C25.2349%2027.7462%2024.6801%2028.294%2023.9997%2028.294C23.3194%2028.294%2022.7826%2027.746%2022.7826%2027.0521V25.3333C21.0821%2025.6073%2019.5429%2026.4475%2018.3794%2027.6347C16.9296%2029.0959%2016.0346%2031.1416%2016.0346%2033.3698V38.6482C22.6577%2036.0729%2025.3423%2035.6159%2031.9651%2038.7576ZM10.2171%206.50226C9.55484%206.50226%209%205.93614%209%205.24192C9%204.56614%209.55482%204%2010.2171%204H37.7829C38.4632%204%2039%204.56612%2039%205.24192C39%205.93611%2038.463%206.50226%2037.7829%206.50226H34.4177V14.63C34.4177%2017.5524%2033.2364%2020.2008%2031.3567%2022.1185C30.6228%2022.8674%2029.7995%2023.5066%2028.8864%2023.9999C29.7995%2024.4929%2030.6228%2025.1324%2031.3567%2025.8629C33.2361%2027.7806%2034.4177%2030.4474%2034.4177%2033.37V41.4977H37.7829C38.4632%2041.4977%2039%2042.0457%2039%2042.7397C39%2043.4338%2038.463%2044%2037.7829%2044H10.2171C9.55484%2044%209%2043.4339%209%2042.7397C9%2042.0454%209.55482%2041.4977%2010.2171%2041.4977H13.6001V33.37C13.6001%2030.4476%2014.7636%2027.781%2016.643%2025.8629C17.3769%2025.1324%2018.2003%2024.4929%2019.1133%2023.9999C18.2003%2023.4885%2017.3769%2022.8674%2016.643%2022.1185C14.7636%2020.2008%2013.6001%2017.5524%2013.6001%2014.63V6.50226H10.2171ZM31.9651%206.50226H16.0342V10.9771H31.9651V6.50226Z'%20fill='url(%23paint0_linear_9782_4526)'%20fill-opacity='0.4'/%3e%3cpath%20d='M25.25%2030.25C25.25%2030.9404%2024.6904%2031.5%2024%2031.5C23.3096%2031.5%2022.75%2030.9404%2022.75%2030.25C22.75%2029.5596%2023.3096%2029%2024%2029C24.6904%2029%2025.25%2029.5596%2025.25%2030.25Z'%20fill='url(%23paint1_linear_9782_4526)'%20fill-opacity='0.4'/%3e%3cpath%20d='M25.25%2030.25C25.25%2030.9404%2024.6904%2031.5%2024%2031.5C23.3096%2031.5%2022.75%2030.9404%2022.75%2030.25C22.75%2029.5596%2023.3096%2029%2024%2029C24.6904%2029%2025.25%2029.5596%2025.25%2030.25Z'%20fill='url(%23paint2_linear_9782_4526)'%20fill-opacity='0.4'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_9782_4526'%20x1='27.5'%20y1='44'%20x2='19'%20y2='4'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%238D92A6'/%3e%3cstop%20offset='1'%20stop-color='%23D1D3DA'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_9782_4526'%20x1='27.5'%20y1='44'%20x2='19'%20y2='4'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%238D92A6'/%3e%3cstop%20offset='1'%20stop-color='%23D1D3DA'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_9782_4526'%20x1='27.5'%20y1='44'%20x2='19'%20y2='4'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%238D92A6'/%3e%3cstop%20offset='1'%20stop-color='%23D1D3DA'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", py = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M31.9651%2038.7576V33.3695C31.9651%2031.1413%2031.0701%2029.0956%2029.6203%2027.6344C28.4568%2026.4472%2026.9354%2025.6071%2025.2349%2025.3331V27.0521C25.2349%2027.7462%2024.6801%2028.294%2023.9997%2028.294C23.3194%2028.294%2022.7826%2027.746%2022.7826%2027.0521V25.3333C21.0821%2025.6073%2019.5429%2026.4475%2018.3794%2027.6347C16.9296%2029.0959%2016.0346%2031.1416%2016.0346%2033.3698V38.6482C22.6577%2036.0729%2025.3423%2035.6159%2031.9651%2038.7576ZM10.2171%206.50226C9.55484%206.50226%209%205.93614%209%205.24192C9%204.56614%209.55482%204%2010.2171%204H37.7829C38.4632%204%2039%204.56612%2039%205.24192C39%205.93611%2038.463%206.50226%2037.7829%206.50226H34.4177V14.63C34.4177%2017.5524%2033.2364%2020.2008%2031.3567%2022.1185C30.6228%2022.8674%2029.7995%2023.5066%2028.8864%2023.9999C29.7995%2024.4929%2030.6228%2025.1324%2031.3567%2025.8629C33.2361%2027.7806%2034.4177%2030.4474%2034.4177%2033.37V41.4977H37.7829C38.4632%2041.4977%2039%2042.0457%2039%2042.7397C39%2043.4338%2038.463%2044%2037.7829%2044H10.2171C9.55484%2044%209%2043.4339%209%2042.7397C9%2042.0454%209.55482%2041.4977%2010.2171%2041.4977H13.6001V33.37C13.6001%2030.4476%2014.7636%2027.781%2016.643%2025.8629C17.3769%2025.1324%2018.2003%2024.4929%2019.1133%2023.9999C18.2003%2023.4885%2017.3769%2022.8674%2016.643%2022.1185C14.7636%2020.2008%2013.6001%2017.5524%2013.6001%2014.63V6.50226H10.2171ZM31.9651%206.50226H16.0342V10.9771H31.9651V6.50226Z'%20fill='url(%23paint0_linear_8564_5674)'/%3e%3cpath%20d='M25.25%2030.25C25.25%2030.9404%2024.6904%2031.5%2024%2031.5C23.3096%2031.5%2022.75%2030.9404%2022.75%2030.25C22.75%2029.5596%2023.3096%2029%2024%2029C24.6904%2029%2025.25%2029.5596%2025.25%2030.25Z'%20fill='url(%23paint1_linear_8564_5674)'/%3e%3cpath%20d='M25.25%2030.25C25.25%2030.9404%2024.6904%2031.5%2024%2031.5C23.3096%2031.5%2022.75%2030.9404%2022.75%2030.25C22.75%2029.5596%2023.3096%2029%2024%2029C24.6904%2029%2025.25%2029.5596%2025.25%2030.25Z'%20fill='url(%23paint2_linear_8564_5674)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_8564_5674'%20x1='27.5'%20y1='44'%20x2='19'%20y2='4'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23D9DCDE'/%3e%3cstop%20offset='1'%20stop-color='%23EFEFEF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_8564_5674'%20x1='27.5'%20y1='44'%20x2='19'%20y2='4'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23D9DCDE'/%3e%3cstop%20offset='1'%20stop-color='%23EFEFEF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_8564_5674'%20x1='27.5'%20y1='44'%20x2='19'%20y2='4'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23D9DCDE'/%3e%3cstop%20offset='1'%20stop-color='%23EFEFEF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", Ta = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%3e%3cpath%20d='M10.4958%2011.6272L14.5593%2015.6907L15.6907%2014.5594L11.6271%2010.4958C12.4874%209.3935%2013%208.00661%2013%206.5C13%202.91015%2010.0898%203.13835e-07%206.5%200C2.91015%206.3984e-07%20-6.3984e-07%202.91015%200%206.5C-3.13835e-07%2010.0899%202.91015%2013%206.5%2013C8.0066%2013%209.39347%2012.4874%2010.4958%2011.6272ZM11.4%206.5C11.4%209.2062%209.20619%2011.4%206.5%2011.4C3.7938%2011.4%201.6%209.2062%201.6%206.5C1.6%203.7938%203.7938%201.6%206.5%201.6C9.20619%201.6%2011.4%203.7938%2011.4%206.5Z'/%3e%3c/svg%3e", hy = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_11475_5045)'%3e%3cpath%20d='M7.6903%200C8.29254%200.00694115%208.89242%200.076523%209.48026%200.207622C9.73687%200.26485%209.92878%200.478779%209.95791%200.740074L10.0976%201.99287C10.1608%202.5681%2010.6464%203.00377%2011.2254%203.00438C11.3811%203.00463%2011.535%202.97222%2011.6788%202.90859L12.8281%202.40375C13.0671%202.29875%2013.3463%202.35599%2013.5248%202.54656C14.3553%203.43356%2014.9738%204.49736%2015.3338%205.65793C15.4114%205.90818%2015.3221%206.18015%2015.1112%206.33561L14.0925%207.08645C13.802%207.29995%2013.6303%207.639%2013.6303%207.99958C13.6303%208.36015%2013.802%208.6992%2014.0932%208.91317L15.1127%209.66427C15.3237%209.81971%2015.4131%2010.0917%2015.3355%2010.342C14.9756%2011.5024%2014.3574%2012.5661%2013.5274%2013.4532C13.3491%2013.6438%2013.0701%2013.7012%2012.8311%2013.5965L11.6772%2013.0909C11.3471%2012.9464%2010.9679%2012.9676%2010.6559%2013.1479C10.344%2013.3282%2010.1363%2013.6461%2010.0967%2014.0043L9.95796%2015.257C9.92935%2015.5153%209.74157%2015.7278%209.48874%2015.7879C8.30027%2016.0707%207.06204%2016.0707%205.87356%2015.7879C5.62074%2015.7278%205.43296%2015.5153%205.40435%2015.257L5.26583%2014.0062C5.22514%2013.6487%205.0172%2013.3317%204.70547%2013.152C4.39374%2012.9723%204.01524%2012.9513%203.68621%2013.0949L2.53205%2013.6006C2.29299%2013.7053%202.01386%2013.6479%201.8356%2013.4572C1.00511%2012.569%200.38691%2011.5041%200.0275302%2010.3424C-0.0498761%2010.0922%200.0395596%209.82044%200.250419%209.66509L1.27059%208.91352C1.56117%208.70002%201.73278%208.36097%201.73278%208.0004C1.73278%207.63982%201.56117%207.30077%201.27021%207.087L0.250678%206.33671C0.0395057%206.18131%20-0.0500122%205.90917%200.0276669%205.65875C0.387669%204.49819%201.00619%203.43438%201.8367%202.54738C2.01514%202.35681%202.2944%202.29957%202.53342%202.40457L3.68245%202.90932C4.01307%203.05441%204.39316%203.0325%204.70657%202.8494C5.01863%202.66839%205.22638%202.35014%205.26649%201.99192L5.40604%200.740074C5.43518%200.478647%205.62727%200.264649%205.88404%200.207543C6.47257%200.0766523%207.07309%200.00710051%207.6903%200ZM7.68006%205.53844C6.32059%205.53844%205.21851%206.64051%205.21851%207.99998C5.21851%209.35945%206.32059%2010.4615%207.68006%2010.4615C9.03953%2010.4615%2010.1416%209.35945%2010.1416%207.99998C10.1416%206.64051%209.03953%205.53844%207.68006%205.53844Z'%20fill='%230021A5'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_11475_5045'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", gy = "data:image/svg+xml,%3csvg%20width='10'%20height='7'%20viewBox='0%200%2010%207'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.55808%200.868984L5.02255%204.40452L1.48699%200.868962L0.35562%202.00033L5.02253%206.66724L9.68945%202.00035L8.55808%200.868984Z'%20fill='%23D2D5D9'/%3e%3c/svg%3e", my = "data:image/svg+xml,%3csvg%20width='10'%20height='7'%20viewBox='0%200%2010%207'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.02255%200.333317L9.68945%205.00022L8.55808%206.13159L5.02255%202.59606L1.48702%206.13159L0.355645%205.00022L5.02255%200.333317Z'%20fill='%23BABCBF'/%3e%3c/svg%3e", Kn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8%2016C12.4183%2016%2016%2012.4183%2016%208C16%203.58172%2012.4183%203.13124e-07%208%206.99382e-07C3.58172%202.03931e-06%20-2.99299e-06%203.58172%20-2.60673e-06%208C-3.13124e-07%2012.4183%203.58172%2016%208%2016ZM4.3462%208.17149L7.31585%2011.1411L7.45727%2011.283L8.40722%2010.3329L11.9829%206.75723L11.0334%205.80772L7.45743%209.3837L5.2957%207.22198L4.3462%208.17149Z'/%3e%3c/svg%3e", Ql = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.2167%200.987644C14.9609%200.770669%2014.559%200.739624%2014.1435%200.906449H14.1428C13.7058%201.0818%201.77211%206.20052%201.2863%206.40965C1.19794%206.44035%200.426245%206.72829%200.505734%207.36966C0.576695%207.94792%201.19692%208.18741%201.27265%208.21505L4.30656%209.25387C4.50784%209.9239%205.24986%2012.3959%205.41395%2012.924C5.5163%2013.2532%205.68313%2013.6858%205.9755%2013.7749C6.23205%2013.8738%206.48723%2013.7834%206.65235%2013.6538L8.50722%2011.9333L11.5016%2014.2685L11.5729%2014.3112C11.7762%2014.4012%2011.971%2014.4463%2012.1569%2014.4463C12.3005%2014.4463%2012.4384%2014.4193%2012.5701%2014.3654C13.0187%2014.1812%2013.1981%2013.7537%2013.2169%2013.7053L15.4535%202.07969C15.59%201.45878%2015.4003%201.14287%2015.2167%200.987644ZM6.98225%209.6694L5.95878%2012.3986L4.93531%208.98708L12.7819%203.18742L6.98225%209.6694Z'%20/%3e%3c/svg%3e", vy = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='32'%20height='32'%20rx='2'%20fill='%23D2D3D9'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6%2016C6%2010.4772%2010.4772%206%2016%206C21.5228%206%2026%2010.4772%2026%2016C26%2021.5228%2021.5228%2026%2016%2026C10.4772%2026%206%2021.5228%206%2016ZM16%208C11.5817%208%208%2011.5817%208%2016C8%2020.4183%2011.5817%2024%2016%2024C20.4183%2024%2024%2020.4183%2024%2016C24%2011.5817%2020.4183%208%2016%208ZM9%2016C9%2012.134%2012.134%209%2016%209C19.866%209%2023%2012.134%2023%2016C23%2019.866%2019.866%2023%2016%2023C12.134%2023%209%2019.866%209%2016Z'%20fill='white'/%3e%3c/svg%3e", Jl = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.266%203.42054C14.7227%203.66148%2014.1388%203.82432%2013.526%203.89756C14.1515%203.52262%2014.6319%202.92893%2014.8581%202.22155C14.2727%202.56868%2013.6244%202.8208%2012.9344%202.95669C12.3817%202.36792%2011.5944%202%2010.7231%202C9.05001%202%207.69358%203.35637%207.69358%205.02936C7.69358%205.26679%207.72043%205.49801%207.77206%205.71972C5.2543%205.59339%203.02209%204.38733%201.52793%202.55453C1.26717%203.00195%201.11777%203.52235%201.11777%204.07752C1.11777%205.12852%201.65264%206.05578%202.46551%206.59902C1.96888%206.5833%201.50179%206.44703%201.09331%206.22013C1.09309%206.23277%201.09309%206.24546%201.09309%206.25821C1.09309%207.726%202.13734%208.95043%203.5232%209.22869C3.26897%209.29793%203.00135%209.33493%202.72503%209.33493C2.52983%209.33493%202.34004%209.31597%202.15511%209.28059C2.54058%2010.4842%203.65936%2011.36%204.985%2011.3845C3.94821%2012.197%202.64196%2012.6813%201.22266%2012.6813C0.978157%2012.6813%200.736999%2012.667%200.5%2012.639C1.84065%2013.4985%203.43305%2014%205.14384%2014C10.716%2014%2013.7631%209.38386%2013.7631%205.38064C13.7631%205.24929%2013.7602%205.11863%2013.7543%204.98874C14.3462%204.56162%2014.8598%204.02805%2015.266%203.42054Z'%20/%3e%3c/svg%3e", e3 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2878_567)'%3e%3cpath%20d='M0.0390096%200.5L6.21643%208.7598L0%2015.4754H1.39907L6.84154%209.59578L11.2389%2015.4754H16L9.47501%206.75096L15.2612%200.5H13.8621L8.8499%205.91498L4.8001%200.5H0.0390096ZM2.09644%201.53056H4.2837L13.9422%2014.4446H11.755L2.09644%201.53056Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2878_567'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", yy = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.8176%202.82687L9.99707%203.64922L9.17397%202.82613C7.0753%200.727454%203.67268%200.727453%201.574%202.82613C-0.524669%204.9248%20-0.52467%208.32742%201.574%2010.4261L9.46789%2018.32C9.76073%2018.6128%2010.2355%2018.6128%2010.5283%2018.32L18.4283%2010.4246C20.5223%208.319%2020.5259%204.92593%2018.4269%202.82687C16.3244%200.724378%2012.9201%200.724381%2010.8176%202.82687Z'%20fill='%23FECA00'/%3e%3cmask%20id='mask0_12658_6636'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='1'%20width='20'%20height='18'%3e%3cpath%20d='M10.8176%202.82687L9.99707%203.64922L9.17397%202.82613C7.0753%200.727454%203.67268%200.727453%201.574%202.82613C-0.524669%204.9248%20-0.52467%208.32742%201.574%2010.4261L9.46789%2018.32C9.76073%2018.6128%2010.2355%2018.6128%2010.5283%2018.32L18.4283%2010.4246C20.5223%208.319%2020.5259%204.92593%2018.4269%202.82687C16.3244%200.724378%2012.9201%200.724381%2010.8176%202.82687Z'%20fill='url(%23paint0_linear_12658_6636)'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_12658_6636)'%3e%3crect%20y='1.25'%20width='20'%20height='7.5'%20fill='url(%23paint1_linear_12658_6636)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_12658_6636'%20x1='10'%20y1='9'%20x2='9.99999'%20y2='18.5396'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FECE00'/%3e%3cstop%20offset='1'%20stop-color='%23FEBB00'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_12658_6636'%20x1='10'%20y1='1.25'%20x2='10'%20y2='8.75'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2353DFFD'/%3e%3cstop%20offset='1'%20stop-color='%23359FFA'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", Cy = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4711_40488)'%3e%3cpath%20d='M7.9982%209.53674e-07C9.36526%209.53674e-07%2010.5677%200.865134%2011.0159%202.13364C11.1632%202.55033%2010.9447%203.00748%2010.5281%203.15471C10.1411%203.29142%209.71933%203.11285%209.54316%202.75301L9.50699%202.66682C9.28305%202.03305%208.68168%201.60038%207.9982%201.60038C7.15495%201.60038%206.4641%202.2529%206.40304%203.08056L6.39865%203.19993L6.39862%204.79954L12.5993%204.80031C13.5522%204.80031%2014.3322%205.54062%2014.3956%206.47747L14.3997%206.60074L14.3997%2014.1996C14.3997%2015.1525%2013.6594%2015.9325%2012.7226%2015.9958L12.5993%2016H3.39711C2.44419%2016%201.66418%2015.2597%201.60083%2014.3228L1.59668%2014.1996L1.59668%206.60074C1.59668%205.64782%202.33698%204.86781%203.27384%204.80447L3.39711%204.80031L4.79824%204.79954L4.79827%203.19993C4.79827%201.43266%206.23093%209.53674e-07%207.9982%209.53674e-07ZM7.9982%209.20098C7.33592%209.20098%206.79903%209.73787%206.79903%2010.4002C6.79903%2011.0624%207.33592%2011.5993%207.9982%2011.5993C8.66049%2011.5993%209.19738%2011.0624%209.19738%2010.4002C9.19738%209.73787%208.66049%209.20098%207.9982%209.20098Z'%20fill='%2331DE91'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4711_40488'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", wy = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9_444)'%3e%3cpath%20d='M13.0025%209.59794C13.9963%209.59794%2014.8019%2010.4036%2014.8019%2011.3974V12.1323C14.8019%2012.591%2014.6585%2013.0383%2014.3917%2013.4116C13.1548%2015.1425%2011.135%2016%208.3983%2016C5.66104%2016%203.64231%2015.1421%202.40837%2013.4103C2.14275%2013.0376%202%2012.5912%202%2012.1335V11.3974C2%2010.4036%202.80563%209.59794%203.79942%209.59794H13.0025ZM8.3983%200C10.6078%200%2012.399%201.79118%2012.399%204.00071C12.399%206.21024%2010.6078%208.00142%208.3983%208.00142C6.18877%208.00142%204.39759%206.21024%204.39759%204.00071C4.39759%201.79118%206.18877%200%208.3983%200Z'%20fill='%230021A5'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_9_444'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", by = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.04545%2016C3.68182%2014.0561%201.5%2012.1167%201.5%2010.1818L1.5%202.90909C1.5%202.18182%201.86364%202.18182%202.95455%201.45455C3.07221%201.3761%205.54597%200%208.04545%200C10.2238%200%2012.0455%200.727273%2013.1364%201.45455C14.2273%202.18182%2014.5909%202.18182%2014.5909%202.90909C14.6101%203.12096%2014.5909%209.09091%2014.5909%2010.1818C14.5909%2012.1212%2012.4091%2014.0606%208.04545%2016ZM7.31815%208.42606L10.4403%205.30396L11.4688%206.33247L7.31815%2010.4831L4.62207%207.78702L5.65059%206.7585L7.31815%208.42606Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", xy = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.353553%209.54586C0.158291%209.74112%200.158291%2010.0577%200.353554%2010.253L4.59619%2014.4956C4.79146%2014.6909%205.10804%2014.6909%205.3033%2014.4956L6.01041%2013.7885C6.20567%2013.5932%206.20567%2013.2767%206.01041%2013.0814L1.76777%208.83875C1.5725%208.64349%201.25592%208.64349%201.06066%208.83875L0.353553%209.54586ZM8.83883%202.47479L2.47487%208.83875L6.01041%2012.3743L8.62656%209.75813L14.2834%2015.415L15.4148%2014.2836L9.75794%208.62676L12.3744%206.01033L8.83883%202.47479ZM8.83883%201.76769C8.64357%201.57242%208.64357%201.25584%208.83883%201.06058L9.54594%200.353473C9.7412%200.158211%2010.0578%200.158211%2010.253%200.353473L14.4957%204.59611C14.691%204.79138%2014.691%205.10796%2014.4957%205.30322L13.7886%206.01033C13.5933%206.20559%2013.2767%206.20559%2013.0815%206.01033L8.83883%201.76769Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Ly = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.454139%209.64645C0.258877%209.84171%200.258877%2010.1583%200.454139%2010.3536L4.69678%2014.5962C4.89204%2014.7915%205.20862%2014.7915%205.40389%2014.5962L6.11099%2013.8891C6.30626%2013.6938%206.30626%2013.3772%206.11099%2013.182L1.86835%208.93934C1.67309%208.74408%201.35651%208.74408%201.16125%208.93934L0.454139%209.64645ZM8.93942%202.57538L2.57546%208.93934L6.11099%2012.4749L8.72715%209.85872L14.384%2015.5156L15.5154%2014.3842L9.85852%208.72735L12.475%206.11091L8.93942%202.57538ZM8.93942%201.86827C8.74416%201.67301%208.74416%201.35643%208.93942%201.16117L9.64653%200.454059C9.84179%200.258797%2010.1584%200.258796%2010.3536%200.454059L14.5963%204.6967C14.7915%204.89196%2014.7915%205.20854%2014.5963%205.40381L13.8892%206.11091C13.6939%206.30617%2013.3773%206.30617%2013.1821%206.11091L8.93942%201.86827Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", _y = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2.99207%203.63636H5.09091V5.09091H0.727273V0.720881H2.18182V2.36833C3.80878%200.662224%205.663%200%208%200C12.4183%200%2016%203.58172%2016%208C16%2012.4183%2012.4183%2016%208%2016C3.58172%2016%200%2012.4183%200%208H1.45455C1.45455%2011.615%204.38505%2014.5455%208%2014.5455C11.615%2014.5455%2014.5455%2011.615%2014.5455%208C14.5455%204.38505%2011.615%201.45455%208%201.45455C5.93397%201.45455%204.39611%202.03009%202.99207%203.63636Z'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.45455%207.63636H11.3636V9.09091H7V4H8.45455V7.63636Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", My = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='path-1-inside-1'%20fill='white'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.04545%2016C3.68182%2014.0561%201.5%2012.1167%201.5%2010.1818V2.90909C1.5%202.18182%201.86364%202.18182%202.95455%201.45455C3.07221%201.3761%205.54597%200%208.04545%200C10.2238%200%2012.0455%200.727273%2013.1364%201.45455C14.2273%202.18182%2014.5909%202.18182%2014.5909%202.90909C14.6101%203.12096%2014.5909%209.09091%2014.5909%2010.1818C14.5909%2012.1212%2012.4091%2014.0606%208.04545%2016Z'/%3e%3c/mask%3e%3cpath%20d='M8.04545%2016L7.39436%2017.4615L8.04469%2017.7512L8.69528%2017.4621L8.04545%2016ZM2.95455%201.45455L3.84207%202.78583L2.95455%201.45455ZM14.5909%202.90909H12.9909V2.98153L12.9975%203.05367L14.5909%202.90909ZM14.5909%2010.1818H12.9909H14.5909ZM8.69655%2014.5385C6.58223%2013.5966%205.11437%2012.705%204.19935%2011.8916C3.27547%2011.0704%203.1%2010.5016%203.1%2010.1818H-0.1C-0.1%2011.7969%200.815443%2013.1652%202.07338%2014.2834C3.34018%2015.4094%205.14505%2016.4595%207.39436%2017.4615L8.69655%2014.5385ZM3.1%2010.1818V2.90909H-0.1V10.1818H3.1ZM3.1%202.90909C3.1%202.85035%203.10935%202.96404%203.03294%203.13386C2.94838%203.32177%202.83149%203.42018%202.81769%203.43121C2.81663%203.43206%202.83318%203.41892%202.88465%203.38558C2.93655%203.35197%203.00118%203.31234%203.09633%203.25468C3.27933%203.14377%203.53597%202.98989%203.84207%202.78583L2.06703%200.123265C1.82767%200.282838%201.62976%200.401683%201.43776%200.518047C1.27249%200.618213%201.02919%200.764014%200.81867%200.932428C0.577606%201.12528%200.301621%201.40551%200.114789%201.82069C-0.0638995%202.21778%20-0.1%202.60419%20-0.1%202.90909H3.1ZM3.84207%202.78583C3.76643%202.83625%204.29376%202.52335%205.16756%202.19638C6.02381%201.87598%207.06419%201.6%208.04545%201.6L8.04545%20-1.6C6.52723%20-1.6%205.08099%20-1.18793%204.04608%20-0.800668C3.02871%20-0.419974%202.26033%20-0.0056029%202.06703%200.123265L3.84207%202.78583ZM8.04545%201.6C9.88229%201.6%2011.3986%202.21898%2012.2488%202.78583L14.0239%200.123265C12.6923%20-0.764437%2010.5653%20-1.6%208.04545%20-1.6L8.04545%201.6ZM12.2488%202.78583C12.5549%202.98989%2012.8116%203.14377%2012.9946%203.25468C13.0897%203.31234%2013.1544%203.35197%2013.2063%203.38558C13.2577%203.41892%2013.2743%203.43206%2013.2732%203.43121C13.2594%203.42018%2013.1425%203.32177%2013.058%203.13386C12.9816%202.96404%2012.9909%202.85035%2012.9909%202.90909H16.1909C16.1909%202.60419%2016.1548%202.21778%2015.9761%201.82069C15.7893%201.40551%2015.5133%201.12528%2015.2722%200.932428C15.0617%200.764014%2014.8184%200.618213%2014.6531%200.518047C14.4611%200.401683%2014.2632%200.282838%2014.0239%200.123265L12.2488%202.78583ZM12.9975%203.05367C12.992%202.99374%2012.9948%203.01208%2012.9965%203.249C12.9978%203.43011%2012.9986%203.68141%2012.999%203.9838C12.9999%204.58786%2012.9993%205.38611%2012.9981%206.21349C12.9957%207.86392%2012.9909%209.63543%2012.9909%2010.1818H16.1909C16.1909%209.6373%2016.1957%207.87838%2016.1981%206.21814C16.1993%205.39018%2016.1999%204.58804%2016.199%203.97905C16.1986%203.67492%2016.1977%203.41653%2016.1964%203.22635C16.1954%203.09198%2016.1946%202.87741%2016.1844%202.76451L12.9975%203.05367ZM12.9909%2010.1818C12.9909%2010.5048%2012.8144%2011.0748%2011.8916%2011.8951C10.977%2012.708%209.50968%2013.5983%207.39563%2014.5379L8.69528%2017.4621C10.9449%2016.4623%2012.7503%2015.4132%2014.0175%2014.2868C15.2765%2013.1677%2016.1909%2011.7982%2016.1909%2010.1818H12.9909Z'%20mask='url(%23path-1-inside-1)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7.31815%208.42606L10.4403%205.30396L11.4688%206.33247L7.31815%2010.4831L4.62207%207.78702L5.65059%206.7585L7.31815%208.42606Z'/%3e%3c/svg%3e", Sy = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2.81463%2013.1855C2.19849%2012.5694%202.02173%2011.6295%202.21495%2010.3964C1.20633%209.661%200.666748%208.87144%200.666748%208.00008C0.666748%207.12873%201.20633%206.33916%202.21495%205.6038C2.02173%204.37063%202.19849%203.43077%202.81463%202.81463C3.43077%202.19849%204.37063%202.02173%205.6038%202.21495C6.33916%201.20633%207.12873%200.666748%208.00008%200.666748C8.87144%200.666748%209.661%201.20633%2010.3964%202.21495C11.6295%202.02173%2012.5694%202.19849%2013.1855%202.81463C13.8017%203.43077%2013.9784%204.37063%2013.7852%205.6038C14.7938%206.33916%2015.3334%207.12873%2015.3334%208.00008C15.3334%208.87144%2014.7938%209.661%2013.7852%2010.3964C13.9784%2011.6295%2013.8017%2012.5694%2013.1855%2013.1855C12.5694%2013.8017%2011.6295%2013.9784%2010.3964%2013.7852C9.661%2014.7938%208.87144%2015.3334%208.00008%2015.3334C7.12873%2015.3334%206.33916%2014.7938%205.6038%2013.7852C4.37063%2013.9784%203.43077%2013.8017%202.81463%2013.1855ZM7.33347%208.39049L10.1954%205.52856L11.1382%206.47137L7.33347%2010.2761L4.86206%207.80471L5.80487%206.8619L7.33347%208.39049Z'%20fill='%23536ED9'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(16%2016)%20rotate(-180)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", t3 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10.4996%201.43824L15.5943%2010.1476C16.1245%2011.0438%2016.1359%2012.1548%2015.6243%2013.0618C15.112%2013.9698%2014.1546%2014.5337%2013.1003%2014.544L2.89116%2014.5439C1.84773%2014.5354%200.888457%2013.9698%200.37614%2013.061C-0.135752%2012.1529%20-0.123797%2011.0394%200.404683%2010.1508L5.50126%201.43828C6.0191%200.546865%206.97275%20-0.00120619%208.00383%205.89964e-07C9.03481%200.00120724%209.98812%200.55155%2010.4996%201.43824ZM8.73051%204.36255L7.27551%204.36255L7.27551%209.45336L8.73051%209.45336L8.73051%204.36255ZM8.72831%2010.9077C8.72831%2011.3093%208.4026%2011.6349%208.00081%2011.6349C7.59903%2011.6349%207.27332%2011.3093%207.27332%2010.9077C7.27332%2010.506%207.59903%2010.1804%208.00081%2010.1804C8.4026%2010.1804%208.72831%2010.506%208.72831%2010.9077Z'%20fill='%23F1BF0B'/%3e%3c/svg%3e", Iy = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.84239%202.69128V1L14.9999%201V6.04246H13.286V3.92409L8.78942%208.42064L7.55658%207.18779L12.0532%202.69128L9.84239%202.69128ZM14.0194%2014.7963L14.0194%206.99373H12.3054L12.3054%2013.105L2.71569%2013.105L2.71569%203.64255L8.86185%203.64255V1.95127L1%201.95127L1%2014.7963L14.0194%2014.7963Z'%20fill='%23BABCBF'/%3e%3c/svg%3e", n3 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2878_561)'%3e%3cpath%20d='M5.52545%2011.6008H10.4794C9.98334%2014.2183%208.99007%2016%208.00241%2016C7.04467%2016%206.08167%2014.3246%205.5719%2011.8364L5.52545%2011.6008H10.4794H5.52545ZM0.854008%2011.6009L4.29902%2011.6007C4.59088%2013.2668%205.08558%2014.6842%205.73298%2015.6761C3.68241%2015.0705%201.97524%2013.6665%200.971106%2011.8241L0.854008%2011.6009ZM11.7058%2011.6007L15.1508%2011.6009C14.1656%2013.5529%2012.4044%2015.0463%2010.2726%2015.6758C10.8764%2014.7496%2011.3474%2013.4534%2011.6448%2011.9305L11.7058%2011.6007L15.1508%2011.6009L11.7058%2011.6007ZM11.9482%206.40002L15.8447%206.39953C15.9497%206.91666%2016.0048%207.4519%2016.0048%208C16.0048%208.83638%2015.8765%209.64279%2015.6385%2010.4007H11.8758C11.9601%209.63447%2012.0042%208.82948%2012.0042%208C12.0042%207.63649%2011.9958%207.27768%2011.9791%206.92479L11.9482%206.40002L15.8447%206.39953L11.9482%206.40002ZM0.160074%206.39953L4.05666%206.40002C4.01966%206.92005%204.00058%207.45473%204.00058%208C4.00058%208.66359%204.02884%209.3115%204.08327%209.93641L4.12897%2010.4007H0.366322C0.128311%209.64279%200%208.83638%200%208C0%207.4519%200.0551039%206.91666%200.160074%206.39953ZM5.2624%206.39956H10.7424C10.7826%206.91615%2010.8041%207.4513%2010.8041%208C10.8041%208.67021%2010.7721%209.32022%2010.713%209.94087L10.6636%2010.4007H5.34118C5.25073%209.64396%205.20076%208.83777%205.20076%208C5.20076%207.58848%205.21282%207.18457%205.23581%206.79041L5.2624%206.39956H10.7424H5.2624ZM10.3582%200.460157L10.2718%200.323955C12.6868%201.03684%2014.6263%202.85839%2015.501%205.19933L11.8278%205.19956C11.5753%203.26574%2011.0625%201.60495%2010.3582%200.460157L10.2718%200.323955L10.3582%200.460157ZM5.63548%200.353412L5.73292%200.323985C5.02821%201.40375%204.50445%202.98767%204.22628%204.84764L4.17702%205.19956L0.503775%205.19933C1.36667%202.88998%203.26583%201.08609%205.63548%200.353412L5.73292%200.323985L5.63548%200.353412ZM8.00241%200C9.0576%200%2010.1192%202.0337%2010.574%204.94748L10.6114%205.19936H5.39337C5.82496%202.15157%206.91707%200%208.00241%200Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2878_561'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", r3 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20d='M5.91304%201C2.65217%201%200%203.26223%200%206.04348C0%207.52853%200.716033%208.86413%202.0231%209.83152L1.10598%2012.5842L3.97418%2010.8084C4.77038%2011.0584%205.74185%2011.1467%206.67935%2011.0435C7.44022%2012.5163%209.15897%2013.5217%2011.1304%2013.5217C11.7296%2013.5217%2012.284%2013.409%2012.7989%2013.2554L15.1807%2014.5883L14.5163%2012.3098C15.413%2011.5652%2016%2010.5285%2016%209.34783C16%207.1875%2014.1209%205.46467%2011.7391%205.2106C11.2717%202.79212%208.82337%201%205.91304%201ZM3.82609%203.78261C4.20924%203.78261%204.52174%204.09511%204.52174%204.47826C4.52174%204.86141%204.20924%205.17391%203.82609%205.17391C3.44293%205.17391%203.13043%204.86141%203.13043%204.47826C3.13043%204.09511%203.44293%203.78261%203.82609%203.78261ZM8%203.78261C8.38315%203.78261%208.69565%204.09511%208.69565%204.47826C8.69565%204.86141%208.38315%205.17391%208%205.17391C7.61685%205.17391%207.30435%204.86141%207.30435%204.47826C7.30435%204.09511%207.61685%203.78261%208%203.78261ZM11.1304%205.86957C13.4769%205.86957%2015.3043%207.44701%2015.3043%209.34783C15.3043%2010.3764%2014.7799%2011.2785%2013.9144%2011.9198L13.7201%2012.0652L14.0367%2013.1508L12.9062%2012.5163L12.7595%2012.5652C12.2731%2012.7283%2011.7174%2012.8261%2011.1304%2012.8261C8.78397%2012.8261%206.95652%2011.2486%206.95652%209.34783C6.95652%207.44701%208.78397%205.86957%2011.1304%205.86957ZM9.56522%207.95652C9.28668%207.95652%209.04348%208.19973%209.04348%208.47826C9.04348%208.75679%209.28668%209%209.56522%209C9.84375%209%2010.087%208.75679%2010.087%208.47826C10.087%208.19973%209.84375%207.95652%209.56522%207.95652ZM12.6957%207.95652C12.4171%207.95652%2012.1739%208.19973%2012.1739%208.47826C12.1739%208.75679%2012.4171%209%2012.6957%209C12.9742%209%2013.2174%208.75679%2013.2174%208.47826C13.2174%208.19973%2012.9742%207.95652%2012.6957%207.95652Z'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", i3 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.9651%2013.2098C14.8029%2013.0935%2015.4811%2012.4727%2015.6407%2011.6582C15.8004%2010.7662%2015.96%209.44727%2016%207.81818C16%206.18909%2015.8004%204.87018%2015.6407%203.97818C15.4815%203.16364%2014.8029%202.54291%2013.9651%202.42655C12.6084%202.23273%2010.4538%202%207.98%202C5.50618%202%203.31164%202.23273%201.99491%202.42655C1.15709%202.54291%200.478909%203.16364%200.319273%203.97818C0.159636%204.87018%200%206.18909%200%207.81818C0%209.44727%200.159636%2010.7662%200.319273%2011.6582C0.478545%2012.4727%201.15709%2013.0935%201.99491%2013.2098C3.35164%2013.4036%205.54618%2013.6364%207.98%2013.6364C10.4538%2013.6364%2012.6484%2013.4036%2013.9651%2013.2098ZM6.18182%205.06651V10.5701C6.18182%2010.8407%206.48291%2011.0018%206.708%2010.8523L10.836%208.10033C11.0371%207.96615%2011.0371%207.67088%2010.836%207.53706L6.708%204.78506C6.48291%204.63488%206.18182%204.79633%206.18182%205.06651Z'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Ey = "data:image/svg+xml,%3csvg%20width='22'%20height='16'%20viewBox='0%200%2022%2016%20'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_5985_49497)'%3e%3cmask%20id='mask0_5985_49497'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='3'%20y='2'%20width='16'%20height='12'%3e%3crect%20x='3'%20y='2'%20width='16'%20height='12'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_5985_49497)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%202V14H19V2H3Z'%20fill='%23AF0100'/%3e%3cmask%20id='mask1_5985_49497'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='3'%20y='2'%20width='16'%20height='12'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%202V14H19V2H3Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask1_5985_49497)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%202V6H19V2H3Z'%20fill='%233CA5D9'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%2010V14H19V10H3Z'%20fill='%2373BE4A'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.581%209.45333C10.9075%209.29804%2010.3805%208.76856%2010.3875%207.9916C10.394%207.2643%2010.8632%206.64905%2011.6039%206.48185C12.3446%206.31465%2012.9962%206.66724%2012.9962%206.66724C12.7921%206.21328%2012.0814%205.89496%2011.4984%205.89649C10.4133%205.89934%209.2556%206.72775%209.24422%207.9928C9.23242%209.30432%2010.4806%2010.0499%2011.5792%2010.047C12.4598%2010.0447%2012.8782%209.47795%2012.965%209.23694C12.965%209.23694%2012.2545%209.60862%2011.581%209.45333ZM12.009%208.71035L12.5968%208.30133L13.1846%208.71035L12.9772%208.02494L13.5479%207.59231L12.8319%207.57772L12.5968%206.90133L12.3617%207.57772L11.6457%207.59231L12.2164%208.02494L12.009%208.71035Z'%20fill='%23F7FCFF'/%3e%3c/g%3e%3c/g%3e%3crect%20x='3'%20y='2'%20width='16'%20height='12'%20fill='url(%23paint0_linear_5985_49497)'%20style='mix-blend-mode:overlay'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_5985_49497'%20x='0'%20y='1'%20width='22'%20height='18'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='2'/%3e%3cfeGaussianBlur%20stdDeviation='1.5'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_5985_49497'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_5985_49497'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_5985_49497'%20x1='11'%20y1='2'%20x2='11'%20y2='14'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0.7'/%3e%3cstop%20offset='1'%20stop-opacity='0.3'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", Py = "data:image/svg+xml,%3csvg%20width='22'%20height='16'%20viewBox='0%200%2022%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d)'%3e%3cmask%20id='mask0'%20mask-type='alpha'%20maskUnits='userSpaceOnUse'%20x='3'%20y='2'%20width='16'%20height='12'%3e%3crect%20x='3'%20y='2'%20width='16'%20height='12'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%202H19V14H3V2Z'%20fill='%23E31D1C'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%203V4H19V3H3ZM3%205V6H19V5H3ZM3%208V7H19V8H3ZM3%209V10H19V9H3ZM3%2012V11H19V12H3ZM3%2014V13H19V14H3Z'%20fill='%23F7FCFF'/%3e%3crect%20x='3'%20y='2'%20width='9'%20height='7'%20fill='%232E42A5'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M4.04005%204.17375L4.56997%203.80462L4.98103%204.10055H4.74829L5.21896%204.51685L5.05999%205.10055H4.811L4.56923%204.56445L4.36305%205.10055H3.74829L4.21896%205.51685L4.04005%206.17375L4.56997%205.80462L4.98103%206.10055H4.74829L5.21896%206.51685L5.05999%207.10055H4.811L4.56923%206.56445L4.36305%207.10055H3.74829L4.21896%207.51685L4.04005%208.17375L4.56997%207.80462L5.08271%208.17375L4.92329%207.51685L5.33506%207.10055H5.14514L5.56997%206.80462L5.98103%207.10055H5.74829L6.21896%207.51685L6.04005%208.17375L6.56997%207.80462L7.08271%208.17375L6.92329%207.51685L7.33506%207.10055H7.14514L7.56997%206.80462L7.98103%207.10055H7.74829L8.21896%207.51685L8.04005%208.17375L8.56997%207.80462L9.08271%208.17375L8.92329%207.51685L9.33506%207.10055H9.14514L9.56997%206.80462L9.98103%207.10055H9.74829L10.219%207.51685L10.0401%208.17375L10.57%207.80462L11.0827%208.17375L10.9233%207.51685L11.3351%207.10055H10.811L10.5692%206.56445L10.363%207.10055H10.0649L9.92329%206.51685L10.3351%206.10055H10.1451L10.57%205.80462L11.0827%206.17375L10.9233%205.51685L11.3351%205.10055H10.811L10.5692%204.56445L10.363%205.10055H10.0649L9.92329%204.51685L10.3351%204.10055H10.1451L10.57%203.80462L11.0827%204.17375L10.9233%203.51685L11.3351%203.10055H10.811L10.5692%202.56445L10.363%203.10055H9.74829L10.219%203.51685L10.06%204.10055H9.811L9.56923%203.56445L9.36305%204.10055H9.06494L8.92329%203.51685L9.33506%203.10055H8.811L8.56923%202.56445L8.36305%203.10055H7.74829L8.21896%203.51685L8.05999%204.10055H7.811L7.56923%203.56445L7.36305%204.10055H7.06494L6.92329%203.51685L7.33506%203.10055H6.811L6.56923%202.56445L6.36305%203.10055H5.74829L6.21896%203.51685L6.05999%204.10055H5.811L5.56923%203.56445L5.36305%204.10055H5.06494L4.92329%203.51685L5.33506%203.10055H4.811L4.56923%202.56445L4.36305%203.10055H3.74829L4.21896%203.51685L4.04005%204.17375ZM10.06%206.10055L10.219%205.51685L9.74829%205.10055H9.98103L9.56997%204.80462L9.14514%205.10055H9.33506L8.92329%205.51685L9.06494%206.10055H9.36305L9.56923%205.56445L9.811%206.10055H10.06ZM8.98103%206.10055L8.56997%205.80462L8.14514%206.10055H8.33506L7.92329%206.51685L8.06494%207.10055H8.36305L8.56923%206.56445L8.811%207.10055H9.05999L9.21896%206.51685L8.74829%206.10055H8.98103ZM7.21896%206.51685L7.05999%207.10055H6.811L6.56923%206.56445L6.36305%207.10055H6.06494L5.92329%206.51685L6.33506%206.10055H6.14514L6.56997%205.80462L6.98103%206.10055H6.74829L7.21896%206.51685ZM7.36305%206.10055H7.06494L6.92329%205.51685L7.33506%205.10055H7.14514L7.56997%204.80462L7.98103%205.10055H7.74829L8.21896%205.51685L8.05999%206.10055H7.811L7.56923%205.56445L7.36305%206.10055ZM6.05999%206.10055L6.21896%205.51685L5.74829%205.10055H5.98103L5.56997%204.80462L5.14514%205.10055H5.33506L4.92329%205.51685L5.06494%206.10055H5.36305L5.56923%205.56445L5.811%206.10055H6.05999ZM9.21896%204.51685L9.05999%205.10055H8.811L8.56923%204.56445L8.36305%205.10055H8.06494L7.92329%204.51685L8.33506%204.10055H8.14514L8.56997%203.80462L8.98103%204.10055H8.74829L9.21896%204.51685ZM6.98103%204.10055L6.56997%203.80462L6.14514%204.10055H6.33506L5.92329%204.51685L6.06494%205.10055H6.36305L6.56923%204.56445L6.811%205.10055H7.05999L7.21896%204.51685L6.74829%204.10055H6.98103Z'%20fill='%23F7FCFF'/%3e%3c/g%3e%3crect%20x='3'%20y='2'%20width='16'%20height='12'%20fill='url(%23paint0_linear)'%20style='mix-blend-mode:overlay'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d'%20x='0'%20y='1'%20width='22'%20height='18'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='2'/%3e%3cfeGaussianBlur%20stdDeviation='1.5'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear'%20x1='11'%20y1='2'%20x2='11'%20y2='14'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0.7'/%3e%3cstop%20offset='1'%20stop-opacity='0.3'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", ky = "data:image/svg+xml,%3csvg%20width='22'%20height='16'%20viewBox='0%200%2022%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_5985_49731)'%3e%3cg%20clip-path='url(%23clip0_5985_49731)'%3e%3cmask%20id='mask0_5985_49731'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='1'%20y='0'%20width='20'%20height='15'%3e%3crect%20x='1'%20width='20'%20height='15'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_5985_49731)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1%200V15H21V0H1Z'%20fill='%23FFB400'/%3e%3cmask%20id='mask1_5985_49731'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='1'%20y='0'%20width='20'%20height='15'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1%200V15H21V0H1Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask1_5985_49731)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1%200V3.75H21V0H1Z'%20fill='%23C51918'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1%2011.25V15H21V11.25H1Z'%20fill='%23C51918'/%3e%3crect%20x='4.12891'%20y='6.41992'%20width='0.7'%20height='3.64'%20fill='%23F1F9FF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.10961%205.79004H3.84961V6.14004H4.05961V6.42004H4.89961V6.14004H5.10961V5.79004Z'%20fill='%23C88A02'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M4.89961%2010.2697H5.10961V10.6197H3.84961V10.2697H4.05961V9.98975H4.89961V10.2697Z'%20fill='%23C88A02'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M4.48023%205.85984C4.63257%205.85984%204.64805%205.80248%204.73792%205.71681C4.80771%205.65029%204.97023%205.56778%204.97023%205.47484C4.97023%205.26221%204.75085%205.08984%204.48023%205.08984C4.20961%205.08984%203.99023%205.26221%203.99023%205.47484C3.99023%205.57839%204.10216%205.64762%204.18679%205.71681C4.27595%205.78971%204.3414%205.85984%204.48023%205.85984Z'%20fill='%23AD1619'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.84961%2010.6196H5.10961V11.1796C5.10961%2011.1796%204.95211%2011.1096%204.79461%2011.1096C4.63711%2011.1096%204.47961%2011.1796%204.47961%2011.1796C4.47961%2011.1796%204.32211%2011.1096%204.16461%2011.1096C4.00711%2011.1096%203.84961%2011.1796%203.84961%2011.1796V10.6196Z'%20fill='%23005BBF'/%3e%3cmask%20id='mask2_5985_49731'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='3'%20y='10'%20width='3'%20height='2'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.84961%2010.6196H5.10961V11.1796C5.10961%2011.1796%204.95211%2011.1096%204.79461%2011.1096C4.63711%2011.1096%204.47961%2011.1796%204.47961%2011.1796C4.47961%2011.1796%204.32211%2011.1096%204.16461%2011.1096C4.00711%2011.1096%203.84961%2011.1796%203.84961%2011.1796V10.6196Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask2_5985_49731)'%3e%3cpath%20d='M3.83805%2011.0697L3.81055%2011.0026C3.92403%2010.9521%204.03792%2010.9268%204.15199%2010.9268C4.22568%2010.9268%204.26416%2010.937%204.32958%2010.9661C4.38705%2010.9917%204.41683%2010.9997%204.47968%2010.9997C4.54252%2010.9997%204.57231%2010.9917%204.62977%2010.9661C4.69519%2010.937%204.73367%2010.9268%204.80737%2010.9268C4.92143%2010.9268%205.03532%2010.9521%205.14881%2011.0026L5.1213%2011.0697C5.01633%2011.0229%204.91176%2010.9997%204.80737%2010.9997C4.74452%2010.9997%204.71473%2011.0076%204.65727%2011.0332C4.59185%2011.0623%204.55337%2011.0726%204.47968%2011.0726C4.40598%2011.0726%204.3675%2011.0623%204.30208%2011.0332C4.24462%2011.0076%204.21483%2010.9997%204.15199%2010.9997C4.04759%2010.9997%203.94302%2011.0229%203.83805%2011.0697Z'%20fill='white'/%3e%3cpath%20d='M3.83805%2010.8597L3.81055%2010.7926C3.92403%2010.7421%204.03792%2010.7168%204.15199%2010.7168C4.22568%2010.7168%204.26416%2010.7271%204.32958%2010.7562C4.38705%2010.7818%204.41683%2010.7897%204.47968%2010.7897C4.54252%2010.7897%204.57231%2010.7818%204.62977%2010.7562C4.69519%2010.7271%204.73367%2010.7168%204.80737%2010.7168C4.92143%2010.7168%205.03532%2010.7421%205.14881%2010.7926L5.1213%2010.8597C5.01633%2010.813%204.91176%2010.7897%204.80737%2010.7897C4.74452%2010.7897%204.71473%2010.7977%204.65727%2010.8232C4.59185%2010.8524%204.55337%2010.8626%204.47968%2010.8626C4.40598%2010.8626%204.3675%2010.8524%204.30208%2010.8232C4.24462%2010.7977%204.21483%2010.7897%204.15199%2010.7897C4.04759%2010.7897%203.94302%2010.813%203.83805%2010.8597Z'%20fill='white'/%3e%3c/g%3e%3crect%20x='10.9902'%20y='6.41992'%20width='0.7'%20height='3.64'%20fill='%23F1F9FF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.969%205.79004H10.709V6.14004H10.919V6.42004H11.759V6.14004H11.969V5.79004Z'%20fill='%23C88A02'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.759%2010.2697H11.969V10.6197H10.709V10.2697H10.919V9.98975H11.759V10.2697Z'%20fill='%23C88A02'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.3396%205.85984C11.4919%205.85984%2011.5074%205.80248%2011.5973%205.71681C11.6671%205.65029%2011.8296%205.56778%2011.8296%205.47484C11.8296%205.26221%2011.6102%205.08984%2011.3396%205.08984C11.069%205.08984%2010.8496%205.26221%2010.8496%205.47484C10.8496%205.57839%2010.9615%205.64762%2011.0462%205.71681C11.1353%205.78971%2011.2008%205.85984%2011.3396%205.85984Z'%20fill='%23AD1619'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10.709%2010.6196H11.969V11.1796C11.969%2011.1796%2011.8115%2011.1096%2011.654%2011.1096C11.4965%2011.1096%2011.339%2011.1796%2011.339%2011.1796C11.339%2011.1796%2011.1815%2011.1096%2011.024%2011.1096C10.8665%2011.1096%2010.709%2011.1796%2010.709%2011.1796V10.6196Z'%20fill='%23005BBF'/%3e%3cmask%20id='mask3_5985_49731'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='10'%20y='10'%20width='2'%20height='2'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10.709%2010.6196H11.969V11.1796C11.969%2011.1796%2011.8115%2011.1096%2011.654%2011.1096C11.4965%2011.1096%2011.339%2011.1796%2011.339%2011.1796C11.339%2011.1796%2011.1815%2011.1096%2011.024%2011.1096C10.8665%2011.1096%2010.709%2011.1796%2010.709%2011.1796V10.6196Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask3_5985_49731)'%3e%3cpath%20d='M10.6974%2011.0697L10.6699%2011.0026C10.7834%2010.9521%2010.8973%2010.9268%2011.0114%2010.9268C11.0851%2010.9268%2011.1235%2010.937%2011.189%2010.9661C11.2464%2010.9917%2011.2762%2010.9997%2011.3391%2010.9997C11.4019%2010.9997%2011.4317%2010.9917%2011.4891%2010.9661C11.5546%2010.937%2011.593%2010.9268%2011.6667%2010.9268C11.7808%2010.9268%2011.8947%2010.9521%2012.0082%2011.0026L11.9807%2011.0697C11.8757%2011.0229%2011.7711%2010.9997%2011.6667%2010.9997C11.6039%2010.9997%2011.5741%2011.0076%2011.5166%2011.0332C11.4512%2011.0623%2011.4127%2011.0726%2011.3391%2011.0726C11.2654%2011.0726%2011.2269%2011.0623%2011.1615%2011.0332C11.104%2011.0076%2011.0742%2010.9997%2011.0114%2010.9997C10.907%2010.9997%2010.8024%2011.0229%2010.6974%2011.0697Z'%20fill='white'/%3e%3cpath%20d='M10.6974%2010.8597L10.6699%2010.7926C10.7834%2010.7421%2010.8973%2010.7168%2011.0114%2010.7168C11.0851%2010.7168%2011.1235%2010.7271%2011.189%2010.7562C11.2464%2010.7818%2011.2762%2010.7897%2011.3391%2010.7897C11.4019%2010.7897%2011.4317%2010.7818%2011.4891%2010.7562C11.5546%2010.7271%2011.593%2010.7168%2011.6667%2010.7168C11.7808%2010.7168%2011.8947%2010.7421%2012.0082%2010.7926L11.9807%2010.8597C11.8757%2010.813%2011.7711%2010.7897%2011.6667%2010.7897C11.6039%2010.7897%2011.5741%2010.7977%2011.5166%2010.8232C11.4512%2010.8524%2011.4127%2010.8626%2011.3391%2010.8626C11.2654%2010.8626%2011.2269%2010.8524%2011.1615%2010.8232C11.104%2010.7977%2011.0742%2010.7897%2011.0114%2010.7897C10.907%2010.7897%2010.8024%2010.813%2010.6974%2010.8597Z'%20fill='white'/%3e%3c/g%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M4.11723%209.79969C4.24343%209.64667%204.314%209.50748%204.314%209.35964C4.314%209.26643%204.28626%209.18591%204.23766%209.12014L4.24588%209.11645C4.24512%209.11679%204.38433%209.05611%204.43279%209.03287C4.52289%208.98967%204.60226%208.94392%204.67965%208.88764C4.72905%208.85171%204.79525%208.81257%204.89617%208.75839L4.991%208.70795L5.0166%208.69435C5.06565%208.66818%205.10217%208.64813%205.1361%208.62844C5.24183%208.56712%205.3117%208.51643%205.36514%208.44866C5.49172%208.28815%205.46544%208.07058%205.28807%207.94982C5.20117%207.89065%205.0839%207.8567%204.91201%207.82998L4.87641%207.82447L4.66616%207.79187C4.5839%207.77896%204.51051%207.7669%204.44506%207.75547C4.87542%207.68386%205.48994%207.71018%205.76025%207.84974L6.01716%207.35215C5.46632%207.06775%204.21124%207.09679%203.74241%207.41966C3.39854%207.65648%203.44468%208.01445%203.80246%208.1686C3.95197%208.23301%204.14686%208.27575%204.50751%208.3337C4.44708%208.36876%204.39697%208.40079%204.35028%208.43474C4.30293%208.46917%204.2522%208.49842%204.19067%208.52792C4.16125%208.54203%204.07415%208.58027%204.0342%208.59782L4.03416%208.59783L4.03415%208.59784L4.01408%208.60668C3.72265%208.73919%203.58121%208.9225%203.62348%209.25342L3.64636%209.43255L3.68739%209.44516L4.11723%209.79969ZM3.75699%209.33676L3.7561%209.33933L3.75678%209.33751L3.75699%209.33676ZM11.441%209.35964C11.441%209.50748%2011.5115%209.64667%2011.6378%209.79969L12.0676%209.44516L12.1086%209.43255L12.1315%209.25342C12.1738%208.9225%2012.0323%208.73919%2011.7409%208.60668L11.7208%208.59784L11.7207%208.5978C11.6808%208.58025%2011.5937%208.54202%2011.5643%208.52792C11.5028%208.49842%2011.452%208.46917%2011.4047%208.43474C11.358%208.40079%2011.3079%208.36876%2011.2475%208.3337C11.6081%208.27575%2011.803%208.23301%2011.9525%208.1686C12.3103%208.01445%2012.3564%207.65648%2012.0126%207.41966C11.5437%207.09679%2010.2887%207.06775%209.73781%207.35215L9.99472%207.84974C10.265%207.71018%2010.8796%207.68386%2011.3099%207.75547C11.2445%207.7669%2011.1711%207.77896%2011.0888%207.79187L10.8785%207.82447L10.843%207.82998C10.6711%207.8567%2010.5538%207.89065%2010.4669%207.94982C10.2895%208.07058%2010.2633%208.28815%2010.3898%208.44866C10.4433%208.51643%2010.5131%208.56712%2010.6189%208.62845C10.6528%208.64813%2010.6893%208.66818%2010.7384%208.69435L10.764%208.70798L10.8588%208.75839C10.9597%208.81257%2011.0259%208.85171%2011.0753%208.88764C11.1527%208.94392%2011.2321%208.98967%2011.3222%209.03287C11.3707%209.05611%2011.5099%209.11679%2011.5091%209.11645L11.5173%209.12014C11.4687%209.18591%2011.441%209.26643%2011.441%209.35964Z'%20fill='%23AD1619'/%3e%3cpath%20d='M4.701%207.75L4.90762%207.79274V8.1007C4.68756%208.27629%204.12891%208.57223%204.12891%208.57223V7.75H4.701Z'%20fill='%23F1F9FF'/%3e%3cpath%20d='M11.1955%207.75L10.9889%207.79274V8.1007C11.2089%208.27629%2011.7676%208.57223%2011.7676%208.57223V7.75H11.1955Z'%20fill='%23F1F9FF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10.2357%204.50361V4.40112C9.87565%204.14272%209.4986%204.01352%209.10456%204.01352C8.72679%203.84635%208.34442%203.78145%207.95744%203.81885C7.95755%203.81765%207.9576%203.81704%207.9576%203.81704C7.37574%203.76011%206.78934%204.01352%206.78934%204.01352C6.19828%204.01352%205.6582%204.40112%205.6582%204.40112V4.50361L6.36422%205.21269C6.36422%205.21269%206.56295%205.89519%207.95473%205.73479V5.73652C7.95473%205.73652%208.87619%205.71137%208.94094%205.68983C8.96663%205.68129%208.99328%205.67351%209.0205%205.66556C9.20099%205.61287%209.40703%205.55271%209.52968%205.21269L10.2357%204.50361ZM7.95473%203.8502C7.93463%204.08628%207.81991%205.50936%207.95473%205.72999V3.8502Z'%20fill='%23AD1619'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.19544%205.09358L6.19591%205.09142L5.69922%204.62412L5.74718%204.57313L6.21326%205.01163L6.22519%204.95678C6.30144%204.97336%206.35717%204.97945%206.38966%204.976V4.88088L6.49297%204.93679C6.54379%204.96429%206.61657%204.97168%206.71242%204.95609C6.78282%204.94463%206.83033%204.86287%206.84586%204.68864L6.87722%204.33691L6.98241%204.67401C7.03%204.82654%207.10262%204.89378%207.20599%204.89378C7.30696%204.89378%207.34754%204.85677%207.35202%204.76347L7.36473%204.49886L7.48439%204.73521C7.5275%204.82035%207.58696%204.85899%207.67149%204.85899C7.7924%204.85899%207.87316%204.75819%207.87316%204.60004H7.87544H8.01316H8.01544C8.01544%204.75819%208.09621%204.85899%208.21711%204.85899C8.30165%204.85899%208.3611%204.82035%208.40421%204.73521L8.52388%204.49886L8.53658%204.76347C8.54106%204.85677%208.58165%204.89378%208.68261%204.89378C8.78599%204.89378%208.8586%204.82654%208.9062%204.67401L9.01139%204.33691L9.04275%204.68864C9.05828%204.86287%209.10578%204.94463%209.17619%204.95609C9.27204%204.97168%209.34481%204.96429%209.39563%204.93679L9.49895%204.88088V4.976C9.53143%204.97945%209.58717%204.97336%209.66341%204.95678L9.68555%205.05857L10.2015%204.57313L10.2495%204.62412L9.60741%205.22819C9.51374%205.40071%209.46656%205.51458%209.46656%205.56188C9.46656%205.63404%209.27882%205.67687%208.91241%205.72086C8.62535%205.75533%208.28658%205.77846%208.00948%205.78192V5.78237L7.97435%205.78225L7.93922%205.78237V5.78192C7.66211%205.77846%207.32334%205.75533%207.03629%205.72086C6.66987%205.67687%206.48213%205.63404%206.48213%205.56188C6.48213%205.55293%206.48044%205.5416%206.47707%205.52794C6.44012%205.48089%206.41414%205.40391%206.39686%205.33447C6.38064%205.302%206.36211%205.26655%206.34128%205.22819L6.19903%205.09436L6.19544%205.09358ZM9.63635%205.10485C9.52171%205.12514%209.43893%205.12309%209.395%205.08733C9.3263%205.10732%209.24571%205.10924%209.1537%205.09427C9.05543%205.07828%208.98699%205.01291%208.94581%204.90447C8.89205%204.97296%208.82408%205.01525%208.74265%205.02892C9.1906%205.09245%209.50439%205.18174%209.50439%205.18174C9.50439%205.18174%209.49665%205.24808%209.47784%205.32608C9.49775%205.28525%209.52134%205.23988%209.54861%205.1898L9.55536%205.18105L9.63635%205.10485ZM8.53127%205.00231C8.49231%204.98295%208.4612%204.95488%208.43871%204.91871C8.40531%204.9482%208.36733%204.96977%208.32514%204.98308C8.39557%204.98847%208.46444%204.99498%208.53127%205.00231ZM8.07803%204.96946C8.0235%204.94426%207.97816%204.90391%207.9443%204.85221C7.91068%204.90355%207.86575%204.94369%207.81174%204.96893C7.84373%204.96797%207.87592%204.9673%207.90825%204.96694V4.96662L7.93632%204.9667L7.96439%204.96662V4.96694C8.0025%204.96737%208.0404%204.96822%208.07803%204.96946ZM6.38824%205.17626L6.32298%205.11486C6.40132%205.12263%206.45931%205.11525%206.4936%205.08733C6.56231%205.10732%206.64289%205.10924%206.73491%205.09427C6.83318%205.07828%206.90161%205.01291%206.94279%204.90447C6.995%204.97098%207.0606%205.01277%207.13891%205.02766C6.75269%205.08192%206.46454%205.15575%206.38824%205.17626ZM7.56043%204.98211C7.49261%204.98715%207.42621%204.99324%207.36164%205.00012C7.39859%204.98086%207.42824%204.95354%207.4499%204.91871C7.48249%204.94749%207.51945%204.96873%207.56043%204.98211ZM9.28252%205.56325C9.33156%205.5862%209.37088%205.5633%209.40196%205.51936C9.39927%205.53149%209.39759%205.54247%209.39691%205.5523C9.3928%205.55498%209.38651%205.55822%209.37825%205.56169C9.35519%205.57139%209.31998%205.58171%209.27417%205.59216C9.18412%205.6127%209.05596%205.63313%208.90406%205.65136C8.60745%205.68698%208.25474%205.71041%207.97435%205.71225C7.69395%205.71041%207.34125%205.68698%207.04463%205.65136C6.89274%205.63313%206.76457%205.6127%206.67453%205.59216C6.63613%205.5834%206.60518%205.57473%206.58259%205.56644C6.58507%205.5655%206.58759%205.56443%206.59012%205.56325C6.74304%205.49169%207.75422%205.42455%207.93632%205.41296C8.11842%205.42455%209.1296%205.49169%209.28252%205.56325ZM9.47535%205.55042L9.47429%205.55165L9.47493%205.55076L9.47535%205.55042Z'%20fill='%23C88A02'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7.94437%203.34187C8.06035%203.34187%208.15437%203.24785%208.15437%203.13187C8.15437%203.0159%208.06035%202.92188%207.94437%202.92188C7.8284%202.92188%207.73438%203.0159%207.73438%203.13187C7.73438%203.24785%207.8284%203.34187%207.94437%203.34187Z'%20fill='%23005BBF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7.80905%204.37318C7.81353%204.39622%207.82053%204.41768%207.82937%204.4368C7.80225%204.42644%207.77005%204.42044%207.73552%204.42044C7.63887%204.42044%207.56052%204.46745%207.56052%204.52544C7.56052%204.58343%207.63887%204.63044%207.73552%204.63044C7.83217%204.63044%207.91052%204.58343%207.91052%204.52544C7.91052%204.58343%207.98887%204.63044%208.08552%204.63044C8.18217%204.63044%208.26052%204.58343%208.26052%204.52544C8.26052%204.46745%208.18217%204.42044%208.08552%204.42044C8.06119%204.42044%208.03802%204.42342%208.01696%204.4288C8.02204%204.4001%208.02182%204.36718%208.0152%204.33311C7.99675%204.23823%207.93566%204.17029%207.87873%204.18136C7.82181%204.19242%207.79061%204.2783%207.80905%204.37318ZM7.91052%204.52544L7.91044%204.52224L7.91059%204.52229L7.91052%204.52544ZM6.77937%204.5068C6.77053%204.48768%206.76353%204.46622%206.75905%204.44318C6.74061%204.3483%206.77181%204.26242%206.82873%204.25136C6.88566%204.24029%206.94675%204.30823%206.9652%204.40311C6.97182%204.43718%206.97204%204.4701%206.96696%204.4988C6.98802%204.49342%207.01119%204.49044%207.03552%204.49044C7.13217%204.49044%207.21052%204.53745%207.21052%204.59544C7.21052%204.65343%207.13217%204.70044%207.03552%204.70044C6.93887%204.70044%206.86052%204.65343%206.86052%204.59544L6.86059%204.59229L6.86044%204.59224L6.86052%204.59544C6.86052%204.65343%206.78217%204.70044%206.68552%204.70044C6.58887%204.70044%206.51052%204.65343%206.51052%204.59544C6.51052%204.53745%206.58887%204.49044%206.68552%204.49044C6.72005%204.49044%206.75225%204.49644%206.77937%204.5068ZM8.97172%204.57079C8.96365%204.62822%208.87952%204.66387%208.78381%204.65041C8.6881%204.63696%208.61706%204.57951%208.62513%204.52208C8.6332%204.46465%208.71733%204.42901%208.81304%204.44246C8.84724%204.44726%208.87829%204.45769%208.90371%204.47172C8.89761%204.45156%208.89367%204.42933%208.89244%204.40589C8.88738%204.30937%208.93023%204.22867%208.98814%204.22563C9.04605%204.2226%209.09709%204.29838%209.10215%204.3949C9.10397%204.42956%209.09961%204.46219%209.09059%204.48991C9.11218%204.48751%209.13554%204.48778%209.15963%204.49117C9.25534%204.50462%209.32639%204.56208%209.31832%204.6195C9.31025%204.67693%209.22612%204.71258%209.13041%204.69912C9.0347%204.68567%208.96365%204.62822%208.97172%204.57079ZM8.97172%204.57079L8.97209%204.56761L8.97224%204.56768L8.97172%204.57079ZM9.63823%204.84845C9.72357%204.89382%209.81482%204.8891%209.84204%204.8379L9.84348%204.83503C9.85189%204.84393%209.86184%204.85041%209.87319%204.85388C9.92865%204.87083%209.99651%204.80965%2010.0248%204.71722C10.053%204.62479%2010.031%204.53612%209.97552%204.51917C9.92006%204.50221%209.8522%204.5634%209.82394%204.65582C9.81708%204.67828%209.81318%204.70051%209.81201%204.72154C9.79293%204.69966%209.76732%204.67925%209.73682%204.66303C9.65149%204.61766%209.56024%204.62238%209.53301%204.67358C9.50579%204.72479%209.5529%204.80308%209.63823%204.84845ZM6.20353%204.86989C6.11819%204.91527%206.02694%204.91054%205.99972%204.85934C5.99921%204.8584%205.99874%204.85744%205.99828%204.85647C5.98988%204.86537%205.97992%204.87185%205.96857%204.87532C5.91312%204.89227%205.84525%204.83109%205.817%204.73866C5.78874%204.64624%205.81079%204.55757%205.86624%204.54061C5.9217%204.52366%205.98956%204.58484%206.01782%204.67727C6.02468%204.69972%206.02858%204.72195%206.02975%204.74299C6.04883%204.7211%206.07445%204.70069%206.10494%204.68447C6.19028%204.6391%206.28152%204.64382%206.30875%204.69503C6.33597%204.74623%206.28886%204.82452%206.20353%204.86989Z'%20fill='%23C88A02'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7.8663%202.54785H8.01213V2.63998H8.10742V2.78581H8.01213V3.07748H8.10742V3.22331H7.76953V3.07748H7.8663V2.78581H7.76953V2.63998H7.8663V2.54785Z'%20fill='%23C88A02'/%3e%3crect%20x='7.83984'%20y='3.33984'%20width='0.28'%20height='0.91'%20fill='%23C88A02'/%3e%3cpath%20d='M6.71286%203.49259L6.71164%203.56258C6.09095%203.55174%205.73492%203.64232%205.64454%203.82285C5.5511%204.0095%205.56848%204.23638%205.6994%204.5059L5.63644%204.53649C5.49675%204.24893%205.47767%203.99981%205.58194%203.79152C5.68928%203.57712%206.06591%203.4813%206.71286%203.49259Z'%20fill='white'/%3e%3cpath%20d='M6.83246%204.11321L6.79657%204.17332C6.6614%204.09261%206.59375%203.95487%206.59375%203.76506C6.59375%203.49226%206.73428%203.33229%207.04512%203.22281C7.24351%203.15295%207.51452%203.18159%207.8589%203.30645L7.83504%203.37226C7.50444%203.2524%207.24863%203.22536%207.06838%203.28884C6.78326%203.38925%206.66375%203.5253%206.66375%203.76506C6.66375%203.93163%206.71994%204.04603%206.83246%204.11321Z'%20fill='white'/%3e%3cpath%20d='M5.78714%204.39857L5.65505%204.44497C5.518%204.05475%205.55714%203.78974%205.79132%203.67543C5.99768%203.5747%206.29842%203.5337%206.69504%203.54977L6.68937%203.68966C6.31385%203.67444%206.03447%203.71252%205.85274%203.80124C5.69883%203.87636%205.67068%204.06698%205.78714%204.39857Z'%20fill='%23C88A02'/%3e%3cpath%20d='M7.33131%203.39928C7.01122%203.39928%206.87978%203.47724%206.80468%203.70742C6.75683%203.8541%206.80324%203.9793%206.95373%204.09617L6.86787%204.20674C6.67303%204.05544%206.60433%203.87014%206.67159%203.66399C6.76729%203.37065%206.95507%203.25928%207.33131%203.25928C7.57791%203.25928%207.77%203.32406%207.90376%203.45591L7.92462%203.47648V4.15145H7.78462V3.53631C7.68016%203.44558%207.5301%203.39928%207.33131%203.39928Z'%20fill='%23C88A02'/%3e%3cpath%20d='M9.15628%203.56241L9.1575%203.6324C9.77819%203.62157%2010.1342%203.71215%2010.2246%203.89268C10.318%204.07932%2010.3007%204.30621%2010.1697%204.57573L10.2327%204.60631C10.3724%204.31875%2010.3915%204.06963%2010.2872%203.86134C10.1799%203.64694%209.80323%203.55112%209.15628%203.56241Z'%20fill='white'/%3e%3cpath%20d='M8.93707%204.12786L8.97296%204.18796C9.10813%204.10726%209.17578%203.96952%209.17578%203.77971C9.17578%203.50691%209.03525%203.34694%208.72441%203.23746C8.52602%203.16759%208.25501%203.19624%207.91063%203.3211L7.93449%203.38691C8.26509%203.26705%208.5209%203.24001%208.70116%203.30349C8.98627%203.4039%209.10578%203.53995%209.10578%203.77971C9.10578%203.94628%209.04959%204.06068%208.93707%204.12786Z'%20fill='white'/%3e%3cpath%20d='M10.125%204.4684L10.2571%204.51479C10.3941%204.12457%2010.355%203.85957%2010.1208%203.74525C9.91443%203.64452%209.61369%203.60353%209.21707%203.6196L9.22274%203.75948C9.59826%203.74427%209.87764%203.78235%2010.0594%203.87106C10.2133%203.94619%2010.2414%204.13681%2010.125%204.4684Z'%20fill='%23C88A02'/%3e%3cpath%20d='M8.57298%203.41002C8.89307%203.41002%209.02452%203.48798%209.09961%203.71816C9.14747%203.86485%209.10106%203.99004%208.95056%204.10691L9.03643%204.21748C9.23127%204.06618%209.29996%203.88088%209.23271%203.67474C9.13701%203.38139%208.94922%203.27002%208.57298%203.27002C8.32639%203.27002%208.13429%203.33481%208.00054%203.46666L7.97968%203.48722V4.1622H8.11968V3.54706C8.22414%203.45632%208.37419%203.41002%208.57298%203.41002Z'%20fill='%23C88A02'/%3e%3cpath%20opacity='0.3'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.66992%205.79004H10.2199V9.87806C10.2199%209.87806%209.88194%2011.25%207.94492%2011.25C6.00791%2011.25%205.66992%209.84188%205.66992%209.84188V5.79004Z'%20fill='%23E1E5E8'/%3e%3cmask%20id='mask4_5985_49731'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='5'%20y='5'%20width='6'%20height='7'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.66992%205.79004H10.2199V9.87806C10.2199%209.87806%209.88194%2011.25%207.94492%2011.25C6.00791%2011.25%205.66992%209.84188%205.66992%209.84188V5.79004Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask4_5985_49731)'%3e%3crect%20x='5.66992'%20y='8.31006'%20width='2.31'%20height='2.73'%20fill='%23FFC034'/%3e%3crect%20x='5.94922'%20y='8.4502'%20width='0.28'%20height='2.59'%20fill='%23AD1619'/%3e%3crect%20x='6.92969'%20y='8.4502'%20width='0.28'%20height='2.59'%20fill='%23AD1619'/%3e%3crect%20x='6.43945'%20y='8.4502'%20width='0.28'%20height='2.59'%20fill='%23AD1619'/%3e%3crect%20x='7.41992'%20y='8.4502'%20width='0.28'%20height='2.59'%20fill='%23AD1619'/%3e%3crect%20x='5.66992'%20y='5.72021'%20width='2.31'%20height='2.66'%20fill='%23AD1619'/%3e%3crect%20x='7.91016'%20y='8.24023'%20width='2.31'%20height='2.66'%20fill='%23AD1619'/%3e%3crect%20x='7.91016'%20y='5.79004'%20width='2.45'%20height='2.59'%20fill='%23F1F9FF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.65016%206H6.86016V6.58074H7.00016V6.29037H7.21016V6.58074H7.42016V6.9437H7.21016V7.59704H7.42016V7.96H6.16016V7.59704H6.37016V6.9437H6.16016V6.58074H6.30016V6.29037H6.51016V6.58074H6.65016V6Z'%20fill='%23C88A02'/%3e%3cpath%20d='M9.11133%206.12172L9.25468%205.96826L9.55564%206.2494L9.41229%206.40286L9.11133%206.12172Z'%20fill='%23C88A02'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.97461%2010.0877V8.55518H8.22461V10.0749L8.22739%2010.0867C8.31597%2010.4642%208.61766%2010.6552%209.09961%2010.6552C9.5811%2010.6552%209.88274%2010.4691%209.97169%2010.0998L9.97461%2010.0877ZM9.09961%2010.4452C8.71292%2010.4452%208.50174%2010.3149%208.43461%2010.0501V8.76518H9.76461V10.0623C9.69765%2010.3184%209.48645%2010.4452%209.09961%2010.4452Z'%20fill='%23FFC034'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.17144%208.68311H9.0256V9.3779L8.45072%208.75264L8.34766%208.84739L8.86756%209.41285H8.3965V9.62285H8.75836H8.87902L8.34766%2010.2008L8.45072%2010.2955L9.0256%209.67027V10.4824H9.17144V9.74335L9.67913%2010.2955L9.78219%2010.2008L9.25083%209.62285H9.84393V9.41285H9.26228L9.78219%208.84739L9.67913%208.75264L9.17144%209.30481V8.68311Z'%20fill='%23FFC034'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.42575%2010.9017C9.42575%2010.9017%207.94312%2011.0182%207.94312%2010.062C7.94312%2010.062%207.92898%2010.9017%206.38086%2010.9017V11.6566H9.42575V10.9017Z'%20fill='%23F1F9FF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7.94492%208.87C8.23487%208.87%208.46992%208.61928%208.46992%208.31C8.46992%208.00072%208.23487%207.75%207.94492%207.75C7.65497%207.75%207.41992%208.00072%207.41992%208.31C7.41992%208.61928%207.65497%208.87%207.94492%208.87Z'%20fill='%23005BBF'%20stroke='%23AD1619'%20stroke-width='0.729167'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3crect%20x='3'%20y='2'%20width='16'%20height='12'%20fill='url(%23paint0_linear_5985_49731)'%20style='mix-blend-mode:overlay'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_5985_49731'%20x='0'%20y='1'%20width='22'%20height='18'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='2'/%3e%3cfeGaussianBlur%20stdDeviation='1.5'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_5985_49731'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_5985_49731'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_5985_49731'%20x1='11'%20y1='2'%20x2='11'%20y2='14'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0.7'/%3e%3cstop%20offset='1'%20stop-opacity='0.3'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_5985_49731'%3e%3crect%20x='3'%20y='2'%20width='16'%20height='12'%20rx='1.5'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Oy = "data:image/svg+xml,%3csvg%20width='22'%20height='16'%20viewBox='0%200%2022%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_5985_47079)'%3e%3cmask%20id='mask0_5985_47079'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='3'%20y='2'%20width='16'%20height='12'%3e%3crect%20x='3'%20y='2'%20width='16'%20height='12'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_5985_47079)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14%202H19V14H14V2Z'%20fill='%23F50100'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%202H9V14H3V2Z'%20fill='%232E42A5'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8%202H14V14H8V2Z'%20fill='%23F7FCFF'/%3e%3c/g%3e%3crect%20x='3'%20y='2'%20width='16'%20height='12'%20fill='url(%23paint0_linear_5985_47079)'%20style='mix-blend-mode:overlay'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_5985_47079'%20x='0'%20y='1'%20width='22'%20height='18'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='2'/%3e%3cfeGaussianBlur%20stdDeviation='1.5'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_5985_47079'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_5985_47079'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_5985_47079'%20x1='11'%20y1='2'%20x2='11'%20y2='14'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0.7'/%3e%3cstop%20offset='1'%20stop-opacity='0.3'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", Ty = "data:image/svg+xml,%3csvg%20width='22'%20height='16'%20viewBox='0%200%2022%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_5985_46885)'%3e%3cmask%20id='mask0_5985_46885'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='3'%20y='2'%20width='16'%20height='12'%3e%3crect%20x='3'%20y='2'%20width='16'%20height='12'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_5985_46885)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%202V14H19V2H3Z'%20fill='%23F7FCFF'/%3e%3cmask%20id='mask1_5985_46885'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='3'%20y='2'%20width='16'%20height='12'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%202V14H19V2H3Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask1_5985_46885)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%202V6H19V2H3Z'%20fill='%23E31D1C'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%2010V14H19V10H3Z'%20fill='%233D58DB'/%3e%3c/g%3e%3c/g%3e%3crect%20x='3'%20y='2'%20width='16'%20height='12'%20fill='url(%23paint0_linear_5985_46885)'%20style='mix-blend-mode:overlay'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_5985_46885'%20x='0'%20y='1'%20width='22'%20height='18'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='2'/%3e%3cfeGaussianBlur%20stdDeviation='1.5'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_5985_46885'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_5985_46885'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_5985_46885'%20x1='11'%20y1='2'%20x2='11'%20y2='14'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0.7'/%3e%3cstop%20offset='1'%20stop-opacity='0.3'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", Hy = "data:image/svg+xml,%3csvg%20width='22'%20height='16'%20viewBox='0%200%2022%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_1940_2103)'%3e%3cmask%20id='mask0_1940_2103'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='3'%20y='2'%20width='16'%20height='12'%3e%3crect%20x='3'%20y='2'%20width='16'%20height='12'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1940_2103)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%202V14H19V2H3Z'%20fill='%23F7FCFF'/%3e%3cmask%20id='mask1_1940_2103'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='3'%20y='2'%20width='16'%20height='12'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%202V14H19V2H3Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask1_1940_2103)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%208V14H19V8H3Z'%20fill='%23C51918'/%3e%3c/g%3e%3c/g%3e%3crect%20x='3'%20y='2'%20width='16'%20height='12'%20fill='url(%23paint0_linear_1940_2103)'%20style='mix-blend-mode:overlay'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_1940_2103'%20x='0'%20y='1'%20width='22'%20height='18'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='2'/%3e%3cfeGaussianBlur%20stdDeviation='1.5'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_1940_2103'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_1940_2103'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_1940_2103'%20x1='11'%20y1='2'%20x2='11'%20y2='14'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0.7'/%3e%3cstop%20offset='1'%20stop-opacity='0.3'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", Dy = "data:image/svg+xml,%3csvg%20width='22'%20height='16'%20viewBox='0%200%2022%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_1940_2418)'%3e%3cmask%20id='mask0_1940_2418'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='3'%20y='2'%20width='16'%20height='12'%3e%3crect%20x='3'%20y='2'%20width='16'%20height='12'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1940_2418)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%202V14H19V2H3Z'%20fill='%233D58DB'/%3e%3cmask%20id='mask1_1940_2418'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='3'%20y='2'%20width='16'%20height='12'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%202V14H19V2H3Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask1_1940_2418)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%202V6H19V2H3Z'%20fill='%23F7FCFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%2010V14H19V10H3Z'%20fill='%23C51918'/%3e%3c/g%3e%3c/g%3e%3crect%20x='3'%20y='2'%20width='16'%20height='12'%20fill='url(%23paint0_linear_1940_2418)'%20style='mix-blend-mode:overlay'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_1940_2418'%20x='0'%20y='1'%20width='22'%20height='18'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='2'/%3e%3cfeGaussianBlur%20stdDeviation='1.5'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_1940_2418'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_1940_2418'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_1940_2418'%20x1='11'%20y1='2'%20x2='11'%20y2='14'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0.7'/%3e%3cstop%20offset='1'%20stop-opacity='0.3'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", Ry = "data:image/svg+xml,%3csvg%20width='15'%20height='10'%20viewBox='0%200%2015%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_8977_6319'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='15'%20height='10'%3e%3crect%20x='0.513672'%20width='14'%20height='10'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_8977_6319)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.513672%200V10H14.5137V0H0.513672Z'%20fill='%233195F9'/%3e%3cmask%20id='mask1_8977_6319'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='15'%20height='10'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.513672%200V10H14.5137V0H0.513672Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask1_8977_6319)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.513672%205V10H14.5137V5H0.513672Z'%20fill='%23FECA00'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Ny = "data:image/svg+xml,%3csvg%20width='22'%20height='16'%20viewBox='0%200%2022%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_5985_48133)'%3e%3cmask%20id='mask0_5985_48133'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='3'%20y='2'%20width='16'%20height='12'%3e%3crect%20x='3'%20y='2'%20width='16'%20height='12'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_5985_48133)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%202H19V14H3V2Z'%20fill='%23F7FCFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%202V14H19V2H3Z'%20fill='%23E31D1C'/%3e%3cmask%20id='mask1_5985_48133'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='3'%20y='2'%20width='16'%20height='12'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%202V14H19V2H3Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask1_5985_48133)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.0323%209.98993L8.45681%2011.6274L9.32066%208.76088L7.4837%206.88805L10.0163%206.83272L11.1368%204.00281L12.1578%206.8701L14.6843%206.91421L12.7857%208.82136L13.6723%2011.5484L11.0323%209.98993Z'%20fill='%23FFD221'/%3e%3c/g%3e%3c/g%3e%3crect%20x='3'%20y='2'%20width='16'%20height='12'%20fill='url(%23paint0_linear_5985_48133)'%20style='mix-blend-mode:screen'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_5985_48133'%20x='0'%20y='1'%20width='22'%20height='18'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='2'/%3e%3cfeGaussianBlur%20stdDeviation='1.5'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_5985_48133'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_5985_48133'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_5985_48133'%20x1='11'%20y1='2'%20x2='11'%20y2='14'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0.7'/%3e%3cstop%20offset='1'%20stop-opacity='0.3'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", Ay = "data:image/svg+xml,%3csvg%20width='88'%20height='32'%20viewBox='0%200%20110%2041'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M39.8064%2013.5905C40.2107%2014.72%2039.3215%2015.8409%2038.1218%2015.8409H27.9545C26.9252%2015.8409%2026.0909%2015.0065%2026.0909%2013.9773L26.0909%2011.7298C26.0909%209.41123%2023.4309%208.10047%2021.5923%209.51303L9.87389%2018.5162C8.41743%2019.6352%208.41743%2021.8307%209.87389%2022.9497L21.5923%2031.9529C23.4309%2033.3654%2026.0909%2032.0547%2026.0909%2029.7361L26.0909%2027.0227C26.0909%2025.9935%2026.9252%2025.1591%2027.9545%2025.1591H38.1218C39.3215%2025.1591%2040.2107%2026.28%2039.8064%2027.4095C36.9708%2035.3318%2029.3974%2041%2020.5%2041C9.17816%2041%200%2031.8218%200%2020.5C0%209.17816%209.17816%200%2020.5%200C29.3974%200%2036.9708%205.66817%2039.8064%2013.5905Z'%20fill='%23FF0012'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M64.3994%205.76989H63.0539C62.9538%204.82471%2062.4645%204.35769%2061.5082%204.35769C60.7299%204.35769%2060.0404%204.69128%2060.0404%205.50302C60.0404%206.21468%2060.7855%206.51491%2061.8196%206.7929L61.954%206.82943C63.2596%207.18354%2064.6106%207.54999%2064.6106%209.19476C64.6106%2010.8182%2063.065%2011.5521%2061.6083%2011.5521C59.8514%2011.5521%2058.4948%2010.6737%2058.4059%208.78333H59.7847C59.8181%209.85082%2060.5742%2010.429%2061.6083%2010.429C62.4979%2010.429%2063.2763%2010.0287%2063.2763%209.20588C63.2763%208.40527%2062.5183%208.20156%2061.6059%207.95631L61.6058%207.9563L61.6057%207.95628C61.5297%207.93585%2061.4526%207.91513%2061.3748%207.89375C60.0627%207.53792%2058.7172%207.07089%2058.695%205.51414C58.6727%203.99074%2060.096%203.2346%2061.5305%203.2346C63.1428%203.2346%2064.2993%204.03521%2064.3994%205.76989ZM56.2769%208.92788H57.6112C57.2443%2010.4068%2055.9322%2011.5077%2053.9417%2011.5077C51.462%2011.5077%2049.9053%209.75074%2049.9053%207.39336C49.9053%205.05823%2051.4732%203.27907%2053.9528%203.27907C55.9544%203.27907%2057.122%204.31321%2057.6112%205.85885H56.2769C55.8543%204.90255%2055.1649%204.41328%2053.9528%204.41328C52.2627%204.41328%2051.2508%205.73653%2051.2508%207.39336C51.2508%209.0502%2052.2627%2010.3734%2053.9528%2010.3734C55.2539%2010.3734%2055.9544%209.79522%2056.2769%208.92788ZM68.5775%203.42363H65.742V11.3631H67.0875V8.38302H68.5775C70.2121%208.38302%2071.3908%207.30441%2071.3908%205.86997C71.3908%204.46888%2070.3011%203.42363%2068.5775%203.42363ZM68.4663%207.25993H67.0875V4.54672H68.4663C69.4671%204.54672%2070.0453%204.99151%2070.0453%205.88109C70.0453%206.77066%2069.4671%207.25993%2068.4663%207.25993ZM73.6438%2011.3631H72.2983V3.42363H75.3228C77.1353%203.42363%2078.125%204.37993%2078.125%205.68093C78.125%206.70394%2077.4689%207.53792%2076.5349%207.77143C77.2132%207.99383%2077.4689%208.58317%2077.7469%209.50611C77.7758%209.59549%2077.803%209.6813%2077.8292%209.76406C78.0149%2010.3506%2078.1523%2010.7842%2078.5031%2011.2519V11.3631H77.0575C76.7972%2011.0239%2076.6656%2010.5617%2076.5317%2010.0915C76.4769%209.89877%2076.4216%209.70471%2076.357%209.51723C76.1012%208.78333%2075.7899%208.24958%2074.8224%208.24958H73.6438V11.3631ZM73.6438%204.52448V7.13761H75.2561C76.2569%207.13761%2076.7906%206.60387%2076.7906%205.78101C76.7906%205.08047%2076.3458%204.52448%2075.2116%204.52448H73.6438ZM67.0461%2015.7109V36.5581H70.433V15.7109H67.0461ZM64.7669%2031.682H61.526C61.0004%2033.4047%2059.6573%2034.2806%2057.7887%2034.2806C55.2193%2034.2806%2053.2338%2032.2368%2053.2338%2029.0251C53.2338%2025.7549%2055.2485%2023.7403%2057.7887%2023.7403C59.7741%2023.7403%2060.9128%2024.733%2061.4676%2026.2513H64.7085C64.1246%2023.1563%2061.5844%2021.0541%2057.847%2021.0541C53.3214%2021.0541%2049.9053%2024.1782%2049.9053%2029.0251C49.9053%2033.8135%2053.3214%2036.9668%2057.847%2036.9668C61.4676%2036.9668%2064.0662%2035.0982%2064.7669%2031.682ZM77.0013%2015.7693V19.0978H73.4684V15.7693H77.0013ZM76.9137%2036.5581H73.556V21.4628H76.9137V36.5581ZM93.9687%2031.682H90.7278C90.2022%2033.4047%2088.8592%2034.2806%2086.9905%2034.2806C84.4211%2034.2806%2082.4357%2032.2368%2082.4357%2029.0251C82.4357%2025.7549%2084.4503%2023.7403%2086.9905%2023.7403C88.9759%2023.7403%2090.1147%2024.733%2090.6694%2026.2513H93.9104C93.3264%2023.1563%2090.7862%2021.0541%2087.0489%2021.0541C82.5233%2021.0541%2079.1071%2024.1782%2079.1071%2029.0251C79.1071%2033.8135%2082.5233%2036.9668%2087.0489%2036.9668C90.6694%2036.9668%2093.268%2035.0982%2093.9687%2031.682ZM110%2036.5581H105.854L100.978%2030.2222L99.5181%2031.7112V36.5581H96.1311V15.7109H99.5181V27.7112L105.474%2021.4628H109.533L103.226%2027.9155L110%2036.5581Z'%20fill='white'/%3e%3c/svg%3e", By = "data:image/svg+xml,%3csvg%20width='88'%20height='32'%20viewBox='0%200%2088%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M31.0684%2010.6072C31.384%2011.4888%2030.6899%2012.3636%2029.7536%2012.3636H21.8181C21.0148%2012.3636%2020.3636%2011.7124%2020.3636%2010.9091L20.3636%209.15495C20.3636%207.34535%2018.2875%206.32232%2016.8525%207.42481L7.70645%2014.4517C6.5697%2015.325%206.5697%2017.0386%207.70645%2017.912L16.8525%2024.9388C18.2875%2026.0413%2020.3636%2025.0183%2020.3636%2023.2087L20.3636%2021.0909C20.3636%2020.2876%2021.0148%2019.6364%2021.8181%2019.6364H29.7536C30.6899%2019.6364%2031.384%2020.5112%2031.0684%2021.3928C28.8553%2027.5761%2022.9443%2032%2016%2032C7.16344%2032%200%2024.8366%200%2016C0%207.16344%207.16344%200%2016%200C22.9443%200%2028.8553%204.42394%2031.0684%2010.6072Z'%20fill='%23FF0012'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M50.6785%204.54058H49.6197C49.541%203.79678%2049.1559%203.42925%2048.4034%203.42925C47.7908%203.42925%2047.2483%203.69177%2047.2483%204.33056C47.2483%204.8906%2047.8346%205.12687%2048.6484%205.34564L48.7542%205.37438C49.7816%205.65304%2050.8448%205.94142%2050.8448%207.23577C50.8448%208.51336%2049.6285%209.0909%2048.4821%209.0909C47.0995%209.0909%2046.032%208.3996%2045.962%206.91199H47.047C47.0733%207.75205%2047.6683%208.20708%2048.4821%208.20708C49.1822%208.20708%2049.7947%207.89206%2049.7947%207.24452C49.7947%206.61449%2049.1983%206.45417%2048.4802%206.26118L48.4801%206.26116C48.4203%206.24508%2048.3596%206.22877%2048.2984%206.21195C47.2658%205.93193%2046.207%205.5644%2046.1895%204.33932C46.172%203.14048%2047.2921%202.54544%2048.4209%202.54544C49.6897%202.54544%2050.5998%203.17548%2050.6785%204.54058ZM44.2866%207.02575H45.3366C45.0479%208.18958%2044.0153%209.05589%2042.4489%209.05589C40.4975%209.05589%2039.2725%207.6733%2039.2725%205.81817C39.2725%203.98054%2040.5063%202.58044%2042.4577%202.58044C44.0328%202.58044%2044.9516%203.39425%2045.3366%204.61058H44.2866C43.954%203.85803%2043.4115%203.47301%2042.4577%203.47301C41.1276%203.47301%2040.3313%204.51433%2040.3313%205.81817C40.3313%207.12201%2041.1276%208.16333%2042.4577%208.16333C43.4815%208.16333%2044.0328%207.7083%2044.2866%207.02575ZM53.9665%202.6942H51.7351V8.94214H52.7939V6.59697H53.9665C55.2528%206.59697%2056.1804%205.74816%2056.1804%204.61933C56.1804%203.51676%2055.3229%202.6942%2053.9665%202.6942ZM53.879%205.71316H52.7939V3.57801H53.879C54.6666%203.57801%2055.1216%203.92804%2055.1216%204.62809C55.1216%205.32813%2054.6666%205.71316%2053.879%205.71316ZM57.9534%208.94214H56.8945V2.6942H59.2747C60.7011%202.6942%2061.4799%203.44675%2061.4799%204.47057C61.4799%205.27563%2060.9636%205.93193%2060.2285%206.11569C60.7623%206.2907%2060.9636%206.75448%2061.1823%207.48078C61.2051%207.55113%2061.2265%207.61866%2061.2471%207.68379C61.3933%208.14534%2061.5013%208.48654%2061.7774%208.85463V8.94214H60.6398C60.435%208.67524%2060.3314%208.31149%2060.226%207.94144L60.226%207.94135C60.1829%207.78973%2060.1394%207.63704%2060.0885%207.48953C59.8873%206.91199%2059.6422%206.49197%2058.8809%206.49197H57.9534V8.94214ZM57.9534%203.56051V5.6169H59.2222C60.0098%205.6169%2060.4298%205.19687%2060.4298%204.54933C60.4298%203.99804%2060.0798%203.56051%2059.1872%203.56051H57.9534ZM52.7614%2012.3636V28.7692H55.4267V12.3636H52.7614ZM50.9678%2024.9321H48.4173C48.0037%2026.2877%2046.9468%2026.977%2045.4763%2026.977C43.4543%2026.977%2041.8918%2025.3686%2041.8918%2022.8411C41.8918%2020.2677%2043.4773%2018.6823%2045.4763%2018.6823C47.0387%2018.6823%2047.9348%2019.4635%2048.3714%2020.6583H50.9218C50.4623%2018.2228%2048.4633%2016.5684%2045.5222%2016.5684C41.9608%2016.5684%2039.2725%2019.027%2039.2725%2022.8411C39.2725%2026.6094%2041.9608%2029.0909%2045.5222%2029.0909C48.3714%2029.0909%2050.4163%2027.6204%2050.9678%2024.9321ZM60.5956%2012.4096V15.029H57.8154V12.4096H60.5956ZM60.5266%2028.7692H57.8843V16.8901H60.5266V28.7692ZM73.948%2024.9321H71.3976C70.984%2026.2877%2069.9271%2026.977%2068.4565%2026.977C66.4346%2026.977%2064.8721%2025.3686%2064.8721%2022.8411C64.8721%2020.2677%2066.4575%2018.6823%2068.4565%2018.6823C70.019%2018.6823%2070.9151%2019.4635%2071.3516%2020.6583H73.9021C73.4426%2018.2228%2071.4436%2016.5684%2068.5025%2016.5684C64.9411%2016.5684%2062.2527%2019.027%2062.2527%2022.8411C62.2527%2026.6094%2064.9411%2029.0909%2068.5025%2029.0909C71.3516%2029.0909%2073.3966%2027.6204%2073.948%2024.9321ZM86.5638%2028.7692H83.3011L79.4639%2023.7832L78.3151%2024.955V28.7692H75.6497V12.3636H78.3151V21.8072L83.0024%2016.8901H86.1962L81.2331%2021.968L86.5638%2028.7692Z'%20fill='%230021A5'/%3e%3c/svg%3e", Fy = "data:image/svg+xml,%3csvg%20width='60'%20height='48'%20viewBox='0%200%2060%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M51.7442%2021.6348C52.0093%2020.513%2052.1495%2019.343%2052.1495%2018.1402C52.1495%209.77849%2045.371%203%2037.0093%203C29.7289%203%2023.6487%208.13876%2022.198%2014.987C21.2624%2014.494%2020.1965%2014.215%2019.0654%2014.215C15.3491%2014.215%2012.3364%2017.2276%2012.3364%2020.9439C5.52322%2020.9439%200%2026.4671%200%2033.2804C0%2040.0936%205.52322%2045.6168%2012.3364%2045.6168H47.6636C54.4768%2045.6168%2060%2040.0936%2060%2033.2804C60%2027.8973%2056.5521%2023.3194%2051.7442%2021.6348ZM41.6224%2023.0391C42.9251%2021.8119%2043.7383%2020.071%2043.7383%2018.1402C43.7383%2014.4239%2040.7257%2011.4112%2037.0093%2011.4112C33.293%2011.4112%2030.2804%2014.4239%2030.2804%2018.1402C30.2804%2018.1691%2030.2806%2018.1979%2030.2809%2018.2267L20.9245%2019.6886C20.5213%2019.0927%2019.8391%2018.7009%2019.0654%2018.7009C17.8267%2018.7009%2016.8224%2019.7052%2016.8224%2020.9439C16.8224%2022.1827%2017.8267%2023.1869%2019.0654%2023.1869C20.0861%2023.1869%2020.9475%2022.5052%2021.2192%2021.5722L30.5735%2020.1106C30.6468%2020.3506%2030.7332%2020.5848%2030.8319%2020.8125L16.0619%2029.8758C15.1391%2028.8666%2013.8117%2028.2336%2012.3364%2028.2336C9.54922%2028.2336%207.28972%2030.4931%207.28972%2033.2804C7.28972%2036.0676%209.54922%2038.3271%2012.3364%2038.3271C14.3806%2038.3271%2016.1409%2037.1117%2016.9342%2035.3642L22.9951%2036.8188C23.0856%2038.5961%2024.5553%2040.0093%2026.3551%2040.0093C28.2133%2040.0093%2029.7196%2038.503%2029.7196%2036.6449C29.7196%2034.7867%2028.2133%2033.2804%2026.3551%2033.2804C25.1089%2033.2804%2024.0209%2033.9579%2023.4395%2034.9648L17.378%2033.51C17.3815%2033.4339%2017.3832%2033.3573%2017.3832%2033.2804C17.3832%2032.6537%2017.269%2032.0537%2017.0602%2031.5001L31.8304%2022.4366C32.8221%2023.6308%2034.219%2024.4764%2035.8102%2024.7626L35.5712%2031.2155C34.7685%2031.557%2034.2056%2032.353%2034.2056%2033.2804C34.2056%2034.5191%2035.2098%2035.5234%2036.4486%2035.5234C37.6874%2035.5234%2038.6916%2034.5191%2038.6916%2033.2804C38.6916%2032.4121%2038.1982%2031.659%2037.4764%2031.2862L37.7155%2024.8326C38.5537%2024.7451%2039.3461%2024.5039%2040.0641%2024.1374L44.0319%2029.776C43.1558%2030.6837%2042.6168%2031.9191%2042.6168%2033.2804C42.6168%2036.0676%2044.8763%2038.3271%2047.6635%2038.3271C50.4508%2038.3271%2052.7103%2036.0676%2052.7103%2033.2804C52.7103%2030.4931%2050.4508%2028.2336%2047.6635%2028.2336C46.9247%2028.2336%2046.2228%2028.3924%2045.5904%2028.6778L41.6224%2023.0391Z'%20fill='%23FF0012'/%3e%3c/svg%3e", Vy = "data:image/svg+xml,%3csvg%20width='89'%20height='40'%20viewBox='0%200%2089%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9775%2024.5388L25.3847%208.964L20.8842%2039.511C20.4451%2039.5405%2020.0021%2039.5554%2019.5556%2039.5554C10.3179%2039.5554%202.57618%2033.1502%200.52946%2024.5388H18.0842H18.9775ZM0.088462%2021.8721C0.0299345%2021.2559%200%2020.6314%200%2019.9999C0%209.19966%208.75532%200.444336%2019.5556%200.444336C21.6697%200.444336%2023.7055%200.779832%2025.6127%201.40049L17.191%2021.8721H0.088462ZM28.9793%202.86063L24.4643%2033.5062L30.8703%2021.8721H39.0226C39.0812%2021.2559%2039.1111%2020.6314%2039.1111%2019.9999C39.1111%2012.6164%2035.0192%206.18863%2028.9793%202.86063ZM38.5816%2024.5388H32.4462L24.5289%2038.9174C31.4767%2037.0958%2036.9157%2031.5482%2038.5816%2024.5388Z'%20fill='%23FF0012'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M61.9408%206.4385H60.6466C60.5504%205.52941%2060.0798%205.08021%2059.16%205.08021C58.4113%205.08021%2057.7482%205.40107%2057.7482%206.18182C57.7482%206.86631%2058.4648%207.15508%2059.4595%207.42246L59.5888%207.4576C60.8445%207.79818%2062.144%208.15065%2062.144%209.73262C62.144%2011.2941%2060.6573%2012%2059.2563%2012C57.5664%2012%2056.2616%2011.1551%2056.1761%209.3369H57.5023C57.5343%2010.3636%2058.2616%2010.9198%2059.2563%2010.9198C60.1119%2010.9198%2060.8605%2010.5348%2060.8605%209.74332C60.8605%208.97328%2060.1315%208.77734%2059.2539%208.54146L59.2539%208.54145L59.2537%208.5414C59.1806%208.52176%2059.1065%208.50184%2059.0317%208.48128C57.7696%208.13904%2056.4755%207.68984%2056.4541%206.19251C56.4327%204.72727%2057.8017%204%2059.1814%204C60.7322%204%2061.8445%204.77005%2061.9408%206.4385ZM54.1283%209.47594H55.4118C55.0588%2010.8984%2053.7968%2011.9572%2051.8824%2011.9572C49.4973%2011.9572%2048%2010.2674%2048%208C48%205.75401%2049.508%204.04278%2051.893%204.04278C53.8182%204.04278%2054.9412%205.03743%2055.4118%206.52406H54.1283C53.7219%205.60428%2053.0588%205.13369%2051.893%205.13369C50.2674%205.13369%2049.2941%206.40642%2049.2941%208C49.2941%209.59358%2050.2674%2010.8663%2051.893%2010.8663C53.1444%2010.8663%2053.8182%2010.3102%2054.1283%209.47594ZM65.9594%204.18182H63.2321V11.8182H64.5262V8.95187H65.9594C67.5316%208.95187%2068.6653%207.91444%2068.6653%206.53476C68.6653%205.18717%2067.6171%204.18182%2065.9594%204.18182ZM65.8524%207.87166H64.5262V5.26203H65.8524C66.815%205.26203%2067.3712%205.68984%2067.3712%206.54545C67.3712%207.40107%2066.815%207.87166%2065.8524%207.87166ZM70.8322%2011.8182H69.5381V4.18182H72.4472C74.1905%204.18182%2075.1424%205.1016%2075.1424%206.35294C75.1424%207.3369%2074.5114%208.13904%2073.613%208.36364C74.2654%208.57754%2074.5114%209.14439%2074.7787%2010.0321C74.8065%2010.1181%2074.8327%2010.2006%2074.8579%2010.2802C75.0365%2010.8443%2075.1686%2011.2613%2075.506%2011.7112V11.8182H74.1156C73.8653%2011.492%2073.7387%2011.0474%2073.6099%2010.5951C73.5572%2010.4097%2073.504%2010.2231%2073.4418%2010.0428C73.1959%209.3369%2072.8964%208.82353%2071.9659%208.82353H70.8322V11.8182ZM70.8322%205.24064V7.75401H72.383C73.3456%207.75401%2073.859%207.24064%2073.859%206.4492C73.859%205.7754%2073.4312%205.24064%2072.3402%205.24064H70.8322ZM48.4444%2036.0598V16.4444H51.6313V36.0598H48.4444ZM57.8114%2016.4994V19.6313H54.4873V16.4994H57.8114ZM57.729%2036.0598H54.5697V21.8565H57.729V36.0598ZM59.4082%2021.8565C60.2736%2024.2191%2061.1321%2026.5886%2061.9906%2028.9581C62.8491%2031.3276%2063.7077%2033.6972%2064.5731%2036.0598H68.117L73.2819%2021.8565H69.9302C69.5715%2022.9734%2069.2056%2024.0974%2068.8417%2025.2151L68.8411%2025.217L68.8411%2025.2171L68.841%2025.2172L68.841%2025.2173C67.9788%2027.8655%2067.1284%2030.4779%2066.4137%2032.873H66.3588C65.7228%2030.8288%2065.0701%2028.8263%2064.4146%2026.815C63.8807%2025.1771%2063.345%2023.5334%2062.8148%2021.8565H59.4082ZM80.7902%2021.4719C85.6253%2021.4719%2087.6034%2025.2082%2087.6308%2029.2192V29.8236H76.6968C76.9165%2032.406%2078.5649%2033.8895%2080.7902%2033.8895C82.411%2033.8895%2083.7572%2033.2851%2084.2792%2031.8565H87.4385C86.5869%2034.7411%2084.1418%2036.4444%2080.7902%2036.4444C76.5319%2036.4444%2073.6198%2033.395%2073.6198%2028.917C73.6198%2024.6038%2076.6418%2021.4719%2080.7902%2021.4719ZM80.7627%2023.9444C78.5649%2023.9444%2077.0814%2025.3455%2076.7517%2027.5159H84.4715C84.2517%2025.2906%2082.9605%2023.9444%2080.7627%2023.9444Z'%20fill='white'/%3e%3c/svg%3e", $y = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M23.2905%2029.5705L31.1539%2010.456L25.6306%2047.9455C25.0917%2047.9816%2024.548%2048%2024%2048C12.6629%2048%203.16172%2040.1391%200.649807%2029.5705H22.1943H23.2905ZM0.108573%2026.2978C0.0367399%2025.5415%200%2024.7751%200%2024C0%2010.7452%2010.7452%200%2024%200C26.5947%200%2029.0932%200.411748%2031.4338%201.17347L21.098%2026.2978H0.108573ZM35.5656%202.96546L30.0244%2040.576L37.8863%2026.2978H47.8914C47.9633%2025.5415%2048%2024.7751%2048%2024C48%2014.9384%2042.9781%207.04982%2035.5656%202.96546ZM47.3502%2029.5705H39.8203L30.1037%2047.2169C38.6305%2044.9814%2045.3056%2038.1729%2047.3502%2029.5705Z'%20fill='%23FF0012'/%3e%3c/svg%3e", Zy = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.13043%205C1.40154%205%200%206.40154%200%208.13043C0%209.85933%201.40154%2011.2609%203.13043%2011.2609H11.4783C13.2072%2011.2609%2014.6087%209.85933%2014.6087%208.13043C14.6087%206.40154%2013.2072%205%2011.4783%205H3.13043ZM0%2019.6087C0%2016.7272%202.33591%2014.3913%205.21739%2014.3913H9.39131C12.2728%2014.3913%2014.6087%2016.7272%2014.6087%2019.6087C14.6087%2022.4902%2012.2728%2024.8261%209.3913%2024.8261H5.21739C2.3359%2024.8261%200%2022.4902%200%2019.6087ZM0%2035.2608C0%2031.2267%203.27027%2027.9565%207.30435%2027.9565C11.3384%2027.9565%2014.6087%2031.2267%2014.6087%2035.2608C14.6087%2039.2949%2011.3384%2042.5652%207.30435%2042.5652C3.27027%2042.5652%200%2039.2949%200%2035.2608ZM16.6954%208.13043C16.6954%206.40154%2018.0969%205%2019.8258%205H28.1737C29.9026%205%2031.3041%206.40154%2031.3041%208.13043C31.3041%209.85933%2029.9025%2011.2609%2028.1737%2011.2609H19.8258C18.0969%2011.2609%2016.6954%209.85933%2016.6954%208.13043ZM21.9128%2014.3913C19.0313%2014.3913%2016.6954%2016.7272%2016.6954%2019.6087C16.6954%2022.4902%2019.0313%2024.8261%2021.9128%2024.8261H26.0867C28.9682%2024.8261%2031.3041%2022.4902%2031.3041%2019.6087C31.3041%2016.7272%2028.9682%2014.3913%2026.0867%2014.3913H21.9128ZM16.6954%2035.2608C16.6954%2031.2267%2019.9657%2027.9565%2023.9997%2027.9565C28.0338%2027.9565%2031.3041%2031.2267%2031.3041%2035.2608C31.3041%2039.2949%2028.0338%2042.5652%2023.9997%2042.5652C19.9657%2042.5652%2016.6954%2039.2949%2016.6954%2035.2608ZM36.522%205C34.7931%205%2033.3916%206.40154%2033.3916%208.13043C33.3916%209.85933%2034.7931%2011.2609%2036.522%2011.2609H44.8698C46.5987%2011.2609%2048.0003%209.85933%2048.0003%208.13043C48.0003%206.40154%2046.5987%205%2044.8698%205H36.522ZM33.3916%2019.6087C33.3916%2016.7272%2035.7275%2014.3913%2038.609%2014.3913H42.7829C45.6644%2014.3913%2048.0003%2016.7272%2048.0003%2019.6087C48.0003%2022.4902%2045.6643%2024.8261%2042.7829%2024.8261H38.6089C35.7275%2024.8261%2033.3916%2022.4902%2033.3916%2019.6087ZM40.6959%2027.9565C36.6618%2027.9565%2033.3916%2031.2267%2033.3916%2035.2608C33.3916%2039.2949%2036.6618%2042.5652%2040.6959%2042.5652C44.73%2042.5652%2048.0003%2039.2949%2048.0003%2035.2608C48.0003%2031.2267%2044.73%2027.9565%2040.6959%2027.9565Z'%20fill='%23FF0012'/%3e%3c/svg%3e", Wy = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.5159%207.99926C20.2258%207.41333%2021.1369%205.55222%2020.551%203.84235C19.9651%202.13247%2018.104%201.22133%2016.3941%201.80726C14.097%202.59439%2011.9626%203.72705%2010.0525%205.14176C4.29115%209.40907%200.545898%2016.2675%200.545898%2024C0.545898%2031.7325%204.29115%2038.5909%2010.0525%2042.8582C11.9571%2044.2688%2014.0848%2045.3991%2016.3744%2046.1859C18.0837%2046.7734%2019.9457%2045.8639%2020.5331%2044.1546C21.1206%2042.4452%2020.2111%2040.5833%2018.5017%2039.9958C16.8559%2039.4302%2015.3232%2038.6167%2013.9483%2037.5984C9.78185%2034.5124%207.09135%2029.5707%207.09135%2024C7.09135%2018.4292%209.78185%2013.4876%2013.9483%2010.4016C15.3271%209.38036%2016.8647%208.56507%2018.5159%207.99926Z'%20fill='%23FF0012'/%3e%3cpath%20d='M31.6068%201.80726C29.8969%201.22133%2028.0358%202.13247%2027.4499%203.84235C26.864%205.55222%2027.7751%207.41333%2029.485%207.99926C31.1362%208.56507%2032.6738%209.38036%2034.0525%2010.4016C38.219%2013.4876%2040.9095%2018.4292%2040.9095%2024C40.9095%2029.5707%2038.219%2034.5124%2034.0525%2037.5984C32.6777%2038.6167%2031.145%2039.4302%2029.4991%2039.9958C27.7898%2040.5833%2026.8803%2042.4452%2027.4678%2044.1546C28.0552%2045.8639%2029.9171%2046.7734%2031.6265%2046.1859C33.9161%2045.3991%2036.0438%2044.2688%2037.9483%2042.8582C43.7097%2038.5909%2047.455%2031.7325%2047.455%2024C47.455%2016.2675%2043.7097%209.40907%2037.9483%205.14176C36.0383%203.72705%2033.9039%202.59439%2031.6068%201.80726Z'%20fill='%23FF0012'/%3e%3cpath%20d='M24.0004%2034.3636C29.7241%2034.3636%2034.3641%2029.7236%2034.3641%2024C34.3641%2018.2763%2029.7241%2013.6363%2024.0004%2013.6363C18.2768%2013.6363%2013.6368%2018.2763%2013.6368%2024C13.6368%2029.7236%2018.2768%2034.3636%2024.0004%2034.3636Z'%20fill='%23FF0012'/%3e%3c/svg%3e", Uy = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M31.3131%206.85714C31.3131%2010.6442%2028.2431%2013.7143%2024.456%2013.7143C23.3283%2013.7143%2022.2642%2013.4421%2021.3259%2012.9598C21.6992%2010.225%2020.8347%207.3537%2018.7324%205.25143C18.493%205.01199%2018.2436%204.78862%2017.9855%204.58129C18.9241%201.91284%2021.4666%200%2024.456%200C28.2431%200%2031.3131%203.07005%2031.3131%206.85714ZM17.1169%206.86806C19.7948%209.54595%2019.7948%2013.8876%2017.1169%2016.5655C16.2327%2017.4498%2015.167%2018.042%2014.0397%2018.3423C12.3654%2016.2198%209.77049%2014.8574%206.85731%2014.8574C6.63055%2014.8574%206.40571%2014.8656%206.18309%2014.8818C4.83822%2012.2979%205.25033%209.03717%207.41944%206.86806C10.0973%204.19018%2014.439%204.19018%2017.1169%206.86806ZM33.5996%206.85736C33.5996%209.94847%2032.0656%2012.6813%2029.7173%2014.3361C30.0512%2015.2076%2030.5695%2016.0246%2031.272%2016.7271C33.9499%2019.405%2038.2916%2019.405%2040.9694%2016.7271C43.6473%2014.0492%2043.6473%209.70752%2040.9694%207.02964C38.9515%205.01167%2035.9887%204.51438%2033.5051%205.53776C33.5673%205.96863%2033.5996%206.40923%2033.5996%206.85736ZM18.3769%2033.933C18.0504%2032.9609%2017.5%2032.0475%2016.7257%2031.2731C14.0478%2028.5953%209.7061%2028.5953%207.02822%2031.2731C4.35034%2033.951%204.35034%2038.2927%207.02822%2040.9706C9.16476%2043.1071%2012.3604%2043.5391%2014.9252%2042.2663C14.8801%2041.8982%2014.8568%2041.5233%2014.8568%2041.143C14.8568%2038.2137%2016.2344%2035.6062%2018.3769%2033.933ZM41.1419%2033.1428C41.5171%2033.1428%2041.8871%2033.1202%2042.2505%2033.0763C43.6219%2035.6668%2043.2171%2038.9512%2041.0362%2041.1321C38.3584%2043.81%2034.0167%2043.81%2031.3388%2041.1321C28.6609%2038.4542%2028.6609%2034.1125%2031.3388%2031.4346C32.126%2030.6474%2033.0569%2030.0916%2034.0471%2029.7673C35.7236%2031.827%2038.2791%2033.1428%2041.1419%2033.1428ZM30.4695%2043.4181C30.2115%2043.2109%2029.9622%2042.9875%2029.7228%2042.7482C27.6206%2040.646%2026.7561%2037.7747%2027.1293%2035.0401C26.1909%2034.5577%2025.1267%2034.2854%2023.9989%2034.2854C20.2118%2034.2854%2017.1418%2037.3555%2017.1418%2041.1426C17.1418%2044.9297%2020.2118%2047.9997%2023.9989%2047.9997C26.9884%2047.9997%2029.531%2046.0867%2030.4695%2043.4181ZM13.0785%2026.8874C13.4865%2026.0098%2013.7143%2025.0315%2013.7143%2023.9999C13.7143%2020.2128%2010.6442%2017.1428%206.85714%2017.1428C3.07005%2017.1428%200%2020.2128%200%2023.9999C0%2027.0043%201.93218%2029.5574%204.62171%2030.4844C4.88024%2030.1396%205.16632%2029.8088%205.47995%2029.4952C7.55409%2027.4211%2010.3769%2026.5518%2013.0785%2026.8874ZM42.9775%2018.505C40.7936%2020.6888%2037.7799%2021.537%2034.9515%2021.0494C34.5248%2021.9431%2034.2859%2022.9437%2034.2859%2024C34.2859%2027.7871%2037.356%2030.8572%2041.1431%2030.8572C44.9302%2030.8572%2048.0002%2027.7871%2048.0002%2024C48.0002%2021.1296%2046.2366%2018.6712%2043.7338%2017.6492C43.5025%2017.9461%2043.2504%2018.232%2042.9775%2018.505Z'%20fill='%23FF0012'/%3e%3c/svg%3e", jy = "data:image/svg+xml,%3csvg%20width='104'%20height='68'%20viewBox='0%200%20104%2068'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8%200C3.58172%200%200%203.58172%200%208V60C0%2064.4183%203.58172%2068%208%2068H96C100.418%2068%20104%2064.4183%20104%2060V8C104%203.58172%20100.418%200%2096%200H8ZM72.7618%209.14397C71.2365%207.61868%2068.7635%207.61868%2067.2382%209.14397L45.144%2031.2382C43.6187%2032.7635%2043.6187%2035.2365%2045.144%2036.7618L67.2382%2058.856C68.7635%2060.3813%2071.2365%2060.3813%2072.7618%2058.856L85.1898%2046.428C85.9524%2045.6654%2085.9524%2044.4289%2085.1898%2043.6662L79.6662%2038.1427C78.9036%2037.38%2077.6671%2037.38%2076.9045%2038.1427L72.0713%2042.9758C70.9274%2044.1198%2069.0726%2044.1198%2067.9287%2042.9758L61.0242%2036.0713C59.8802%2034.9274%2059.8802%2033.0726%2061.0242%2031.9287L67.9287%2025.0242C69.0726%2023.8802%2070.9274%2023.8802%2072.0713%2025.0242L76.9044%2029.8573C77.6671%2030.62%2078.9036%2030.62%2079.6662%2029.8573L85.1898%2024.3338C85.9524%2023.5711%2085.9524%2022.3346%2085.1898%2021.572L72.7618%209.14397Z'%20fill='%23FF0012'/%3e%3c/svg%3e", Gy = "data:image/svg+xml,%3csvg%20width='400'%20height='122'%20viewBox='0%200%20400%20122'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M60.9176%200C27.2737%20-2.94124e-06%202.94135e-06%2027.2737%200%2060.9176C-2.94112e-06%2094.5614%2027.2737%20121.835%2060.9176%20121.835C94.5614%20121.835%20121.835%2094.5614%20121.835%2060.9176C121.835%2027.2737%2094.5614%202.94124e-06%2060.9176%200ZM60.9179%20103.56C84.4686%20103.56%20103.56%2084.4683%20103.56%2060.9176C103.56%2037.3669%2084.4686%2018.2753%2060.9179%2018.2753C37.3672%2018.2753%2018.2756%2037.3669%2018.2756%2060.9176C18.2756%2084.4683%2037.3672%20103.56%2060.9179%20103.56ZM60.9179%20109.652C87.8329%20109.652%20109.652%2087.8327%20109.652%2060.9176C109.652%2034.0026%2087.8329%2012.1836%2060.9179%2012.1836C34.0028%2012.1836%2012.1838%2034.0026%2012.1838%2060.9176C12.1838%2087.8327%2034.0028%20109.652%2060.9179%20109.652ZM49.2875%2044.7644C48.0386%2043.5154%2046.0136%2043.5154%2044.7646%2044.7644C43.5157%2046.0134%2043.5157%2048.0383%2044.7647%2049.2873L56.395%2060.9176L44.7647%2072.5479C43.5157%2073.7969%2043.5157%2075.8219%2044.7647%2077.0708C46.0136%2078.3198%2048.0386%2078.3198%2049.2876%2077.0708L60.9179%2065.4405L72.5482%2077.0708C73.7971%2078.3198%2075.8221%2078.3198%2077.0711%2077.0708C78.32%2075.8219%2078.32%2073.7969%2077.0711%2072.5479L65.4408%2060.9176L77.0711%2049.2873C78.3201%2048.0384%2078.32%2046.0134%2077.0711%2044.7644C75.8221%2043.5155%2073.7971%2043.5154%2072.5482%2044.7644L60.9179%2056.3947L49.2875%2044.7644Z'%20fill='%2388BB5E'/%3e%3cpath%20d='M198.432%20106.606V24.6281L184.472%2075.9294H173.644L159.685%2024.6281V106.606H149.248V15.2294H167.643L179.515%2061.9619L191.256%2015.2294H209.26V106.606H198.432Z'%20fill='white'/%3e%3cpath%20d='M251.926%2023.8449L241.359%2073.7102H262.624L251.926%2023.8449ZM269.669%20106.606L264.711%2083.5006H239.271L234.183%20106.606H222.572L244.62%2015.2294H259.623L281.28%20106.606H269.669Z'%20fill='white'/%3e%3cpath%20d='M331.883%20106.606L311.531%2064.7031L306.834%2072.5354V106.606H295.484V15.2294H306.834V55.3044L331.23%2015.2294H343.363L318.576%2055.1739L344.668%20106.606H331.883Z'%20fill='white'/%3e%3cpath%20d='M357.209%20106.606V15.2294H400V24.7586H368.559V54.6517H396.738V64.181H368.559V97.0765H400V106.606H357.209Z'%20fill='white'/%3e%3c/svg%3e";
var o3 = /* @__PURE__ */ ((e) => (e.Success = "success", e.Error = "error", e.Info = "info", e.Pending = "pending", e.Warning = "warning", e))(o3 || {});
const a3 = {
  success: Kn,
  info: Gl,
  pending: $l,
  error: zn,
  warning: t3
}, s3 = {
  success: "borderPrimary",
  info: "borderPrimary",
  warning: "borderPrimary",
  error: "fillSecondaryRedHover",
  pending: "fillSecondary"
}, l3 = {
  success: "contentGreen",
  info: "contentSecondary",
  warning: "contentSecondary",
  error: "contentRed",
  pending: "contentLightBlue"
}, ai = S(J).withConfig({
  displayName: "alert__Container",
  componentId: "sc-h63w8q-0"
})(({
  theme: e,
  status: t
}) => ({
  minHeight: 52,
  padding: 16,
  borderRadius: e.borderRadius.base,
  backgroundColor: e.styleguideColors[s3[t]],
  svg: {
    color: e.styleguideColors[l3[t]]
  }
})), zy = (e) => {
  const {
    message: t,
    title: n,
    status: r,
    scale: i = "sm",
    lineHeight: o = "sm"
  } = e, s = e.iconSrc ? e.iconSrc : a3[r], a = e.iconSrc ? "" : r;
  return n ? /* @__PURE__ */ h(ai, { status: a, itemsSpacing: 8, children: /* @__PURE__ */ z(Ee, { itemsSpacing: 8, children: [
    /* @__PURE__ */ z(J, { align: "center", itemsSpacing: 8, children: [
      /* @__PURE__ */ h(ve, { src: s, alt: `Alert icon with ${a} status` }),
      /* @__PURE__ */ h(ne, { size: 1, lineHeight: o, scale: i, variation: "black", children: n })
    ] }),
    /* @__PURE__ */ h(ne, { variation: "black", size: 3, lineHeight: o, scale: i, children: t })
  ] }) }) : /* @__PURE__ */ z(ai, { status: a, align: "center", itemsSpacing: 8, children: [
    /* @__PURE__ */ h(ve, { src: s }),
    /* @__PURE__ */ h(ne, { size: 3, lineHeight: o, scale: i, variation: "black", children: t })
  ] });
}, c3 = (e, {
  ttl: t,
  width: n
}) => {
  if (e)
    return e;
};
function J0(e, t) {
  var n = e[0], r = e[1], i = e[2], o = e[3];
  n = De(n, r, i, o, t[0], 7, -680876936), o = De(o, n, r, i, t[1], 12, -389564586), i = De(i, o, n, r, t[2], 17, 606105819), r = De(r, i, o, n, t[3], 22, -1044525330), n = De(n, r, i, o, t[4], 7, -176418897), o = De(o, n, r, i, t[5], 12, 1200080426), i = De(i, o, n, r, t[6], 17, -1473231341), r = De(r, i, o, n, t[7], 22, -45705983), n = De(n, r, i, o, t[8], 7, 1770035416), o = De(o, n, r, i, t[9], 12, -1958414417), i = De(i, o, n, r, t[10], 17, -42063), r = De(r, i, o, n, t[11], 22, -1990404162), n = De(n, r, i, o, t[12], 7, 1804603682), o = De(o, n, r, i, t[13], 12, -40341101), i = De(i, o, n, r, t[14], 17, -1502002290), r = De(r, i, o, n, t[15], 22, 1236535329), n = Re(n, r, i, o, t[1], 5, -165796510), o = Re(o, n, r, i, t[6], 9, -1069501632), i = Re(i, o, n, r, t[11], 14, 643717713), r = Re(r, i, o, n, t[0], 20, -373897302), n = Re(n, r, i, o, t[5], 5, -701558691), o = Re(o, n, r, i, t[10], 9, 38016083), i = Re(i, o, n, r, t[15], 14, -660478335), r = Re(r, i, o, n, t[4], 20, -405537848), n = Re(n, r, i, o, t[9], 5, 568446438), o = Re(o, n, r, i, t[14], 9, -1019803690), i = Re(i, o, n, r, t[3], 14, -187363961), r = Re(r, i, o, n, t[8], 20, 1163531501), n = Re(n, r, i, o, t[13], 5, -1444681467), o = Re(o, n, r, i, t[2], 9, -51403784), i = Re(i, o, n, r, t[7], 14, 1735328473), r = Re(r, i, o, n, t[12], 20, -1926607734), n = Ne(n, r, i, o, t[5], 4, -378558), o = Ne(o, n, r, i, t[8], 11, -2022574463), i = Ne(i, o, n, r, t[11], 16, 1839030562), r = Ne(r, i, o, n, t[14], 23, -35309556), n = Ne(n, r, i, o, t[1], 4, -1530992060), o = Ne(o, n, r, i, t[4], 11, 1272893353), i = Ne(i, o, n, r, t[7], 16, -155497632), r = Ne(r, i, o, n, t[10], 23, -1094730640), n = Ne(n, r, i, o, t[13], 4, 681279174), o = Ne(o, n, r, i, t[0], 11, -358537222), i = Ne(i, o, n, r, t[3], 16, -722521979), r = Ne(r, i, o, n, t[6], 23, 76029189), n = Ne(n, r, i, o, t[9], 4, -640364487), o = Ne(o, n, r, i, t[12], 11, -421815835), i = Ne(i, o, n, r, t[15], 16, 530742520), r = Ne(r, i, o, n, t[2], 23, -995338651), n = Ae(n, r, i, o, t[0], 6, -198630844), o = Ae(o, n, r, i, t[7], 10, 1126891415), i = Ae(i, o, n, r, t[14], 15, -1416354905), r = Ae(r, i, o, n, t[5], 21, -57434055), n = Ae(n, r, i, o, t[12], 6, 1700485571), o = Ae(o, n, r, i, t[3], 10, -1894986606), i = Ae(i, o, n, r, t[10], 15, -1051523), r = Ae(r, i, o, n, t[1], 21, -2054922799), n = Ae(n, r, i, o, t[8], 6, 1873313359), o = Ae(o, n, r, i, t[15], 10, -30611744), i = Ae(i, o, n, r, t[6], 15, -1560198380), r = Ae(r, i, o, n, t[13], 21, 1309151649), n = Ae(n, r, i, o, t[4], 6, -145523070), o = Ae(o, n, r, i, t[11], 10, -1120210379), i = Ae(i, o, n, r, t[2], 15, 718787259), r = Ae(r, i, o, n, t[9], 21, -343485551), e[0] = kt(n, e[0]), e[1] = kt(r, e[1]), e[2] = kt(i, e[2]), e[3] = kt(o, e[3]);
}
function B0(e, t, n, r, i, o) {
  return t = kt(kt(t, e), kt(r, o)), kt(t << i | t >>> 32 - i, n);
}
function De(e, t, n, r, i, o, s) {
  return B0(t & n | ~t & r, e, t, i, o, s);
}
function Re(e, t, n, r, i, o, s) {
  return B0(t & r | n & ~r, e, t, i, o, s);
}
function Ne(e, t, n, r, i, o, s) {
  return B0(t ^ n ^ r, e, t, i, o, s);
}
function Ae(e, t, n, r, i, o, s) {
  return B0(n ^ (t | ~r), e, t, i, o, s);
}
function u3(e) {
  var t = e.length, n = [1732584193, -271733879, -1732584194, 271733878], r;
  for (r = 64; r <= e.length; r += 64)
    J0(n, d3(e.substring(r - 64, r)));
  e = e.substring(r - 64);
  var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (r = 0; r < e.length; r++) i[r >> 2] |= e.charCodeAt(r) << (r % 4 << 3);
  if (i[r >> 2] |= 128 << (r % 4 << 3), r > 55)
    for (J0(n, i), r = 0; r < 16; r++) i[r] = 0;
  return i[14] = t * 8, J0(n, i), n;
}
function d3(e) {
  var t = [], n;
  for (n = 0; n < 64; n += 4)
    t[n >> 2] = e.charCodeAt(n) + (e.charCodeAt(n + 1) << 8) + (e.charCodeAt(n + 2) << 16) + (e.charCodeAt(n + 3) << 24);
  return t;
}
var si = "0123456789abcdef".split("");
function f3(e) {
  for (var t = "", n = 0; n < 4; n++) t += si[e >> n * 8 + 4 & 15] + si[e >> n * 8 & 15];
  return t;
}
function p3(e) {
  for (var t = 0; t < e.length; t++) e[t] = f3(e[t]);
  return e.join("");
}
function Ha(e) {
  return p3(u3(e));
}
function kt(e, t) {
  return e + t & 4294967295;
}
Ha("hello") != "5d41402abc4b2a76b9719d911017c592";
const h3 = (e, t, n = 20, r = 5) => {
  let i = "white", o = Ha(t), s = Math.floor(n / r), a = o.slice(0, 6), l = o.split("").map((u) => parseInt(u, 16) < 8 ? 0 : 1), c = [];
  c[0] = c[4] = l.slice(0, 5), c[1] = c[3] = l.slice(5, 10), c[2] = l.slice(10, 15), e.imageSmoothingEnabled = !1, e.clearRect(0, 0, n, n), c.forEach((u, d) => {
    u.forEach((f, p) => {
      f ? (e.fillStyle = "#" + a, e.fillRect(s * d, s * p, s, s)) : (e.fillStyle = i, e.fillRect(s * d, s * p, s, s));
    });
  });
}, g3 = (e, t = 20) => {
  const n = Math.floor(0.6 * t), r = Math.floor(1 / 5 * t), i = `<svg width="${n}" height="${n}" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-eCssSg hqywXm"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.90629 4.15942L6.3825 2.21968C6.59237 1.3617 7.45803 0.836303 8.31601 1.04617C9.10249 1.23855 9.60951 1.98198 9.5269 2.76541L9.48952 2.97968L9.19874 4.15942H12.3291L12.7701 2.24253C12.9509 1.45331 13.6868 0.935429 14.4714 1.00653L14.6862 1.04076C15.4754 1.22157 15.9933 1.95748 15.9222 2.74204L15.888 2.95683L15.6109 4.15942L16.4128 4.15972C17.2224 4.15972 17.8916 4.76139 17.9975 5.54202L18.0121 5.75903C18.0121 6.5687 17.4104 7.23784 16.6298 7.34374L16.4128 7.35834L14.8774 7.35804L14.1033 10.74L15.3757 10.742C16.1853 10.742 16.8545 11.3437 16.9604 12.1243L16.975 12.3414C16.975 13.151 16.3733 13.8202 15.5927 13.9261L15.3757 13.9407L13.3697 13.9387L12.9553 15.7575C12.7745 16.5467 12.0386 17.0646 11.2541 16.9935L11.0393 16.9592C10.25 16.7784 9.73216 16.0425 9.80326 15.258L9.83749 15.0432L10.088 13.9387H6.80617L6.35836 15.7803C6.16598 16.5668 5.42256 17.0738 4.63912 16.9912L4.42485 16.9538C3.63837 16.7614 3.13135 16.018 3.21396 15.2346L3.25135 15.0203L3.51372 13.9387L2.59919 13.9407C1.78952 13.9407 1.12038 13.339 1.01448 12.5584L0.999878 12.3414C0.999878 11.5317 1.60155 10.8625 2.38217 10.7566L2.59919 10.742L4.29632 10.74L5.1237 7.35804L3.62463 7.35834C2.81496 7.35834 2.14582 6.75667 2.03992 5.97605L2.02532 5.75903C2.02532 4.94936 2.62699 4.28022 3.40762 4.17432L3.62463 4.15972L5.90629 4.15942ZM11.5957 7.35805H8.41626L7.58888 10.7401H10.8216L11.5957 7.35805Z" fill="white"></path><path d="M6.3825 2.21968L6.86808 2.33889L6.86818 2.33848L6.3825 2.21968ZM5.90629 4.15942L5.90636 4.65942L6.2984 4.65937L6.39187 4.27863L5.90629 4.15942ZM8.31601 1.04617L8.43481 0.560492L8.43481 0.560492L8.31601 1.04617ZM9.5269 2.76541L10.0195 2.85135L10.0224 2.83468L10.0241 2.81785L9.5269 2.76541ZM9.48952 2.97968L9.97499 3.09934L9.97911 3.0826L9.98208 3.06562L9.48952 2.97968ZM9.19874 4.15942L8.71327 4.03977L8.56054 4.65942H9.19874V4.15942ZM12.3291 4.15942V4.65942H12.7271L12.8164 4.27153L12.3291 4.15942ZM12.7701 2.24253L13.2574 2.35463L13.2575 2.35419L12.7701 2.24253ZM14.4714 1.00653L14.5501 0.512759L14.5334 0.510095L14.5165 0.508568L14.4714 1.00653ZM14.6862 1.04076L14.7979 0.553386L14.7815 0.549634L14.7649 0.54699L14.6862 1.04076ZM15.9222 2.74204L16.416 2.82073L16.4186 2.80401L16.4202 2.78716L15.9222 2.74204ZM15.888 2.95683L16.3752 3.06909L16.3791 3.05242L16.3817 3.03552L15.888 2.95683ZM15.6109 4.15942L15.1237 4.04717L14.9827 4.65919L15.6107 4.65942L15.6109 4.15942ZM16.4128 4.15972L16.4126 4.65972H16.4128V4.15972ZM17.9975 5.54202L18.4964 5.50846L18.4952 5.49157L18.4929 5.4748L17.9975 5.54202ZM18.0121 5.75903H18.5121V5.74223L18.511 5.72548L18.0121 5.75903ZM16.6298 7.34374L16.6634 7.84261L16.6802 7.84148L16.697 7.8392L16.6298 7.34374ZM16.4128 7.35834L16.4127 7.85834L16.4295 7.85834L16.4463 7.85721L16.4128 7.35834ZM14.8774 7.35804L14.8775 6.85804L14.4789 6.85797L14.39 7.24649L14.8774 7.35804ZM14.1033 10.74L13.6159 10.6285L13.4761 11.2391L14.1025 11.24L14.1033 10.74ZM15.3757 10.742L15.3749 11.242H15.3757V10.742ZM16.9604 12.1243L17.4592 12.0908L17.4581 12.0739L17.4558 12.0571L16.9604 12.1243ZM16.975 12.3414H17.475V12.3246L17.4738 12.3078L16.975 12.3414ZM15.5927 13.9261L15.6262 14.4249L15.6431 14.4238L15.6599 14.4215L15.5927 13.9261ZM15.3757 13.9407L15.3752 14.4407L15.3922 14.4407L15.4092 14.4395L15.3757 13.9407ZM13.3697 13.9387L13.3702 13.4387L12.9709 13.4383L12.8822 13.8276L13.3697 13.9387ZM12.9553 15.7575L13.4427 15.8691L13.4428 15.8685L12.9553 15.7575ZM11.2541 16.9935L11.1754 17.4872L11.1921 17.4899L11.2089 17.4914L11.2541 16.9935ZM11.0393 16.9592L10.9276 17.4466L10.944 17.4504L10.9606 17.453L11.0393 16.9592ZM9.80326 15.258L9.30949 15.1793L9.30682 15.196L9.3053 15.2128L9.80326 15.258ZM9.83749 15.0432L9.34987 14.9326L9.34628 14.9484L9.34372 14.9645L9.83749 15.0432ZM10.088 13.9387L10.5756 14.0492L10.714 13.4387H10.088V13.9387ZM6.80617 13.9387V13.4387H6.41318L6.32033 13.8205L6.80617 13.9387ZM6.35836 15.7803L6.84404 15.8991L6.84421 15.8985L6.35836 15.7803ZM4.63912 16.9912L4.55319 17.4838L4.56986 17.4867L4.58669 17.4885L4.63912 16.9912ZM4.42485 16.9538L4.30605 17.4395L4.32237 17.4435L4.33892 17.4464L4.42485 16.9538ZM3.21396 15.2346L2.7214 15.1487L2.71849 15.1653L2.71672 15.1822L3.21396 15.2346ZM3.25135 15.0203L2.76544 14.9025L2.76159 14.9183L2.75879 14.9344L3.25135 15.0203ZM3.51372 13.9387L3.99963 14.0565L4.14985 13.4373L3.51263 13.4387L3.51372 13.9387ZM2.59919 13.9407L2.59919 14.4407L2.60028 14.4407L2.59919 13.9407ZM1.01448 12.5584L0.515605 12.5919L0.516741 12.6088L0.519016 12.6256L1.01448 12.5584ZM0.999878 12.3414H0.499878V12.3582L0.501006 12.3749L0.999878 12.3414ZM2.38217 10.7566L2.34862 10.2578L2.33173 10.2589L2.31496 10.2612L2.38217 10.7566ZM2.59919 10.742L2.5986 10.242L2.5821 10.2421L2.56563 10.2432L2.59919 10.742ZM4.29632 10.74L4.29691 11.24L4.68886 11.2396L4.782 10.8589L4.29632 10.74ZM5.1237 7.35804L5.60937 7.47686L5.76079 6.85792L5.1236 6.85804L5.1237 7.35804ZM3.62463 7.35834L3.62463 7.85834L3.62473 7.85834L3.62463 7.35834ZM2.03992 5.97605L1.54105 6.00961L1.54219 6.0265L1.54446 6.04327L2.03992 5.97605ZM2.02532 5.75903H1.52532V5.77583L1.52645 5.79259L2.02532 5.75903ZM3.40762 4.17432L3.37405 3.67545L3.35717 3.67659L3.3404 3.67886L3.40762 4.17432ZM3.62463 4.15972L3.62457 3.65972L3.6078 3.65972L3.59107 3.66085L3.62463 4.15972ZM8.41626 7.35805V6.85805H8.02384L7.93058 7.23923L8.41626 7.35805ZM11.5957 7.35805L12.0831 7.4696L12.2231 6.85805H11.5957V7.35805ZM7.58888 10.7401L7.10321 10.6212L6.95182 11.2401H7.58888V10.7401ZM10.8216 10.7401V11.2401H11.2201L11.309 10.8516L10.8216 10.7401ZM5.89692 2.10047L5.42071 4.04021L6.39187 4.27863L6.86808 2.33889L5.89692 2.10047ZM8.43481 0.560492C7.3086 0.28501 6.1723 0.974664 5.89682 2.10088L6.86818 2.33848C7.01244 1.74874 7.60746 1.3876 8.19721 1.53185L8.43481 0.560492ZM10.0241 2.81785C10.1326 1.789 9.46757 0.813115 8.43481 0.560492L8.19721 1.53185C8.73741 1.66399 9.08639 2.17497 9.02966 2.71298L10.0241 2.81785ZM9.98208 3.06562L10.0195 2.85135L9.03434 2.67948L8.99696 2.89375L9.98208 3.06562ZM9.68421 4.27908L9.97499 3.09934L9.00405 2.86003L8.71327 4.03977L9.68421 4.27908ZM12.3291 3.65942H9.19874V4.65942H12.3291V3.65942ZM12.2829 2.13043L11.8418 4.04732L12.8164 4.27153L13.2574 2.35463L12.2829 2.13043ZM14.5165 0.508568C13.4862 0.415197 12.5202 1.09452 12.2828 2.13087L13.2575 2.35419C13.3817 1.8121 13.8875 1.45566 14.4263 1.50449L14.5165 0.508568ZM14.7649 0.54699L14.5501 0.512759L14.3927 1.5003L14.6075 1.53453L14.7649 0.54699ZM16.4202 2.78716C16.5135 1.75683 15.8342 0.790818 14.7979 0.553386L14.5745 1.52813C15.1166 1.65232 15.4731 2.15812 15.4242 2.69691L16.4202 2.78716ZM16.3817 3.03552L16.416 2.82073L15.4284 2.66335L15.3942 2.87814L16.3817 3.03552ZM16.0981 4.27168L16.3752 3.06909L15.4007 2.84458L15.1237 4.04717L16.0981 4.27168ZM16.413 3.65972L15.6111 3.65942L15.6107 4.65942L16.4126 4.65972L16.413 3.65972ZM18.4929 5.4748C18.3539 4.44963 17.476 3.65972 16.4128 3.65972V4.65972C16.9689 4.65972 17.4293 5.07314 17.502 5.60923L18.4929 5.4748ZM18.511 5.72548L18.4964 5.50846L17.4986 5.57557L17.5132 5.79259L18.511 5.72548ZM16.697 7.8392C17.7222 7.70013 18.5121 6.82224 18.5121 5.75903H17.5121C17.5121 6.31516 17.0987 6.77555 16.5626 6.84828L16.697 7.8392ZM16.4463 7.85721L16.6634 7.84261L16.5962 6.84487L16.3792 6.85947L16.4463 7.85721ZM14.8773 7.85804L16.4127 7.85834L16.4129 6.85834L14.8775 6.85804L14.8773 7.85804ZM14.5907 10.8516L15.3648 7.4696L14.39 7.24649L13.6159 10.6285L14.5907 10.8516ZM15.3764 10.242L14.1041 10.2401L14.1025 11.24L15.3749 11.242L15.3764 10.242ZM17.4558 12.0571C17.3167 11.032 16.4389 10.242 15.3757 10.242V11.242C15.9318 11.242 16.3922 11.6555 16.4649 12.1916L17.4558 12.0571ZM17.4738 12.3078L17.4592 12.0908L16.4615 12.1579L16.4761 12.3749L17.4738 12.3078ZM15.6599 14.4215C16.685 14.2825 17.475 13.4046 17.475 12.3414H16.475C16.475 12.8975 16.0615 13.3579 15.5255 13.4306L15.6599 14.4215ZM15.4092 14.4395L15.6262 14.4249L15.5591 13.4272L15.3421 13.4418L15.4092 14.4395ZM13.3692 14.4387L15.3752 14.4407L15.3761 13.4407L13.3702 13.4387L13.3692 14.4387ZM13.4428 15.8685L13.8572 14.0497L12.8822 13.8276L12.4678 15.6464L13.4428 15.8685ZM11.2089 17.4914C12.2393 17.5848 13.2053 16.9055 13.4427 15.8691L12.468 15.6458C12.3438 16.1879 11.838 16.5443 11.2992 16.4955L11.2089 17.4914ZM10.9606 17.453L11.1754 17.4872L11.3328 16.4997L11.118 16.4655L10.9606 17.453ZM9.3053 15.2128C9.21192 16.2432 9.89124 17.2092 10.9276 17.4466L11.1509 16.4719C10.6088 16.3477 10.2524 15.8419 10.3012 15.3031L9.3053 15.2128ZM9.34372 14.9645L9.30949 15.1793L10.297 15.3367L10.3313 15.1219L9.34372 14.9645ZM9.60033 13.8281L9.34987 14.9326L10.3251 15.1537L10.5756 14.0492L9.60033 13.8281ZM6.80617 14.4387H10.088V13.4387H6.80617V14.4387ZM6.84421 15.8985L7.29201 14.0568L6.32033 13.8205L5.87252 15.6622L6.84421 15.8985ZM4.58669 17.4885C5.61554 17.5969 6.59142 16.9319 6.84404 15.8991L5.87268 15.6615C5.74054 16.2017 5.22957 16.5507 4.69156 16.494L4.58669 17.4885ZM4.33892 17.4464L4.55319 17.4838L4.72506 16.4986L4.51079 16.4613L4.33892 17.4464ZM2.71672 15.1822C2.60823 16.211 3.27329 17.1869 4.30605 17.4395L4.54365 16.4681C4.00345 16.336 3.65447 15.825 3.71121 15.287L2.71672 15.1822ZM2.75879 14.9344L2.7214 15.1487L3.70652 15.3205L3.74391 15.1063L2.75879 14.9344ZM3.02782 13.8208L2.76544 14.9025L3.73725 15.1382L3.99963 14.0565L3.02782 13.8208ZM2.60028 14.4407L3.51482 14.4387L3.51263 13.4387L2.5981 13.4407L2.60028 14.4407ZM0.519016 12.6256C0.658092 13.6507 1.53598 14.4407 2.59919 14.4407V13.4407C2.04306 13.4407 1.58267 13.0272 1.50994 12.4912L0.519016 12.6256ZM0.501006 12.3749L0.515605 12.5919L1.51335 12.5248L1.49875 12.3078L0.501006 12.3749ZM2.31496 10.2612C1.28979 10.4003 0.499878 11.2781 0.499878 12.3414H1.49988C1.49988 11.7852 1.9133 11.3248 2.44939 11.2521L2.31496 10.2612ZM2.56563 10.2432L2.34862 10.2578L2.41573 11.2555L2.63274 11.2409L2.56563 10.2432ZM4.29573 10.24L2.5986 10.242L2.59978 11.242L4.29691 11.24L4.29573 10.24ZM4.63802 7.23923L3.81064 10.6212L4.782 10.8589L5.60937 7.47686L4.63802 7.23923ZM3.62473 7.85834L5.1238 7.85804L5.1236 6.85804L3.62453 6.85834L3.62473 7.85834ZM1.54446 6.04327C1.68354 7.06843 2.56143 7.85834 3.62463 7.85834V6.85834C3.0685 6.85834 2.60811 6.44492 2.53538 5.90884L1.54446 6.04327ZM1.52645 5.79259L1.54105 6.00961L2.53879 5.94249L2.52419 5.72547L1.52645 5.79259ZM3.3404 3.67886C2.31524 3.81794 1.52532 4.69582 1.52532 5.75903H2.52532C2.52532 5.2029 2.93874 4.74251 3.47483 4.66978L3.3404 3.67886ZM3.59107 3.66085L3.37405 3.67545L3.44118 4.67319L3.6582 4.65859L3.59107 3.66085ZM5.90623 3.65942L3.62457 3.65972L3.6247 4.65972L5.90636 4.65942L5.90623 3.65942ZM8.41626 7.85805H11.5957V6.85805H8.41626V7.85805ZM8.07456 10.8589L8.90194 7.47687L7.93058 7.23923L7.10321 10.6212L8.07456 10.8589ZM10.8216 10.2401H7.58888V11.2401H10.8216V10.2401ZM11.1083 7.2465L10.3342 10.6285L11.309 10.8516L12.0831 7.4696L11.1083 7.2465Z" fill="#DFE1E4"></path></svg>`, o = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(i), s = new Image();
  s.onload = function() {
    e.drawImage(s, r, r);
  }, s.src = o;
}, Y2 = 5, m3 = ({
  hexString: e,
  size: t = 20
}) => {
  const n = e.toLowerCase();
  let r = Math.floor(t / Y2);
  const o = {
    borderRadius: `${Math.floor(1 / 10 * t)}px`,
    backgroundColor: "rgb(152, 157, 178)"
  }, s = ce(null), a = ce(0);
  return le(() => {
    if (s.current) {
      const l = s.current.getContext("2d");
      l && (l.canvas.height = r * Y2, l.canvas.width = r * Y2, n.startsWith("01") && n.length === 66 || n.startsWith("02") && n.length === 68 ? a.current = requestAnimationFrame(() => h3(l, n, t, Y2)) : a.current = requestAnimationFrame(() => g3(l, t)));
    }
    return () => cancelAnimationFrame(a.current);
  }, [r, e]), /* @__PURE__ */ h("canvas", { className: "account-identicon", style: o, ref: s });
}, v3 = (e) => e == null ? !1 : new RegExp("^([0-9A-Fa-f]){64}$").test(e.trim()), li = (e = "default") => {
  const t = {
    tiny: 2,
    small: 2,
    default: 2,
    average: 4,
    medium: 12,
    big: 12
  };
  return t[e] || t.default;
}, xn = (e = "default") => {
  const t = {
    tiny: 16,
    small: 20,
    average: 28,
    default: 32,
    medium: 80,
    big: 124
  };
  return t[e] || t.default;
}, y3 = (e = "default") => {
  const t = {
    tiny: "contentTertiary",
    small: "contentTertiary",
    default: "contentQuaternary",
    average: "contentQuaternary",
    medium: "contentQuaternary",
    big: "contentQuaternary"
  };
  return t[e] || t.default;
}, Da = (e = "default") => {
  const t = {
    tiny: 0,
    small: 0,
    default: 4,
    average: 4,
    medium: 4,
    big: 0
  };
  return t[e] || t.default;
}, en = S.div.withConfig({
  displayName: "avatar__BackgroundWrapper",
  componentId: "sc-1p1ar3a-0"
})(({
  theme: e,
  sizeType: t,
  withBgColor: n = !1
}) => ({
  borderRadius: li(t),
  height: xn(t),
  width: xn(t),
  padding: 0,
  margin: Da(t),
  backgroundColor: n ? e.styleguideColors[y3(t)] : "transparent",
  "& > canvas": {
    borderRadius: li(t)
  }
})), C3 = S.div.withConfig({
  displayName: "avatar__IconHashWrapper",
  componentId: "sc-1p1ar3a-1"
})(({
  theme: e
}) => ({
  color: e.styleguideColors.contentOnFill,
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
})), Jt = ge.forwardRef(function(t, n) {
  const {
    loading: r,
    hash: i,
    src: o,
    size: s = "default",
    transparentBg: a,
    ...l
  } = t, c = xn(s), u = 2, d = "86400";
  if (r || !i && !o)
    return /* @__PURE__ */ h("div", { ...l, children: /* @__PURE__ */ h(Un, { style: {
      borderRadius: 2,
      width: c,
      fontSize: `${c}px`,
      margin: Da(s)
    } }) });
  if (o) {
    const f = c3(o, {
      ttl: d,
      width: c * u
    });
    return /* @__PURE__ */ h("span", { ref: n, ...l, children: /* @__PURE__ */ h(en, { sizeType: s, style: {
      background: `url("${f}") center / contain no-repeat`
    }, children: /* @__PURE__ */ h("div", { style: {
      width: c,
      height: c
    } }) }) });
  }
  return i && v3(i) ? /* @__PURE__ */ h("span", { ref: n, ...l, children: /* @__PURE__ */ h(en, { sizeType: s, withBgColor: a, children: /* @__PURE__ */ h(C3, { children: /* @__PURE__ */ h(ve, { src: jl, size: c - 8 }) }) }) }) : /* @__PURE__ */ h("span", { ref: n, ...l, children: /* @__PURE__ */ h(en, { sizeType: s, children: i && /* @__PURE__ */ h(m3, { hexString: i, size: c, ...l }) }) });
});
function w3(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ci(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ci(Object(n), !0).forEach(function(r) {
      w3(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ci(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function lt(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Ra = /* @__PURE__ */ $n({});
function b3(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ui(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function e2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ui(Object(n), !0).forEach(function(r) {
      b3(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ui(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ln(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function x3(e, t) {
  if (e) {
    if (typeof e == "string") return di(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return di(e, t);
  }
}
function di(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function fi(e, t) {
  var n;
  if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (n = x3(e)) || t) {
      n && (e = n);
      var r = 0;
      return function() {
        return r >= e.length ? {
          done: !0
        } : {
          done: !1,
          value: e[r++]
        };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  return n = e[Symbol.iterator](), n.next.bind(n);
}
function L3(e) {
  return typeof e == "function";
}
var _3 = function(t, n, r) {
  r === void 0 && (r = n.children);
  var i = A0(Ra);
  if (i.useCreateElement)
    return i.useCreateElement(t, n, r);
  if (typeof t == "string" && L3(r)) {
    n.children;
    var o = Ln(n, ["children"]);
    return r(o);
  }
  return /* @__PURE__ */ Zn(t, n, r);
};
function M3(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function pi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function t2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pi(Object(n), !0).forEach(function(r) {
      M3(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pi(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function S3(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function I3(e, t) {
  if (e) {
    if (typeof e == "string") return hi(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return hi(e, t);
  }
}
function hi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function E3(e, t) {
  var n;
  if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (n = I3(e)) || t) {
      n && (e = n);
      var r = 0;
      return function() {
        return r >= e.length ? {
          done: !0
        } : {
          done: !1,
          value: e[r++]
        };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  return n = e[Symbol.iterator](), n.next.bind(n);
}
function P3(e) {
  return typeof e == "object" && e != null;
}
function _n(e) {
  var t;
  if (!P3(e)) return !1;
  var n = Object.getPrototypeOf(e);
  return n == null ? !0 : ((t = n.constructor) === null || t === void 0 ? void 0 : t.toString()) === Object.toString();
}
function gi(e, t) {
  for (var n = Object.keys(e), r = {}, i = {}, o = 0, s = n; o < s.length; o++) {
    var a = s[o];
    t.indexOf(a) >= 0 ? r[a] = e[a] : i[a] = e[a];
  }
  return [r, i];
}
function mi(e, t) {
  if (t === void 0 && (t = []), !_n(e.state))
    return gi(e, t);
  var n = gi(e, [].concat(t, ["state"])), r = n[0], i = n[1], o = r.state, s = S3(r, ["state"]);
  return [t2(t2({}, o), s), i];
}
function P2(e, t) {
  if (e === t) return !0;
  if (!e || !t || typeof e != "object" || typeof t != "object") return !1;
  var n = Object.keys(e), r = Object.keys(t), i = n.length;
  if (r.length !== i) return !1;
  for (var o = 0, s = n; o < s.length; o++) {
    var a = s[o];
    if (e[a] !== t[a])
      return !1;
  }
  return !0;
}
function vi(e) {
  return e.name === "normalizePropsAreEqualInner" ? e : function(n, r) {
    return !_n(n.state) || !_n(r.state) ? e(n, r) : e(t2(t2({}, n.state), n), t2(t2({}, r.state), r));
  };
}
function k3(e) {
  return /* @__PURE__ */ il(e);
}
function O3(e, t) {
  return /* @__PURE__ */ ol(e, t);
}
function F0(e) {
  var t = e.as, n = e.useHook, r = e.memo, i = e.propsAreEqual, o = i === void 0 ? n?.unstable_propsAreEqual : i, s = e.keys, a = s === void 0 ? n?.__keys || [] : s, l = e.useCreateElement, c = l === void 0 ? _3 : l, u = function(f, p) {
    var y = f.as, m = y === void 0 ? t : y, g = Ln(f, ["as"]);
    if (n) {
      var _, C = mi(g, a), v = C[0], w = C[1], b = n(v, e2({
        ref: p
      }, w)), I = b.wrapElement, O = Ln(b, ["wrapElement"]), V = ((_ = m.render) === null || _ === void 0 ? void 0 : _.__keys) || m.__keys, A = V && mi(g, V)[0], N = A ? e2(e2({}, O), A) : O, T = c(m, N);
      return I ? I(T) : T;
    }
    return c(m, e2({
      ref: p
    }, g));
  };
  return process.env.NODE_ENV !== "production" && n && (u.displayName = n.name.replace(/^(unstable_)?use/, "")), u = k3(u), r && (u = O3(u, o && vi(o))), u.__keys = a, u.unstable_propsAreEqual = vi(o || P2), u;
}
function Na(e, t) {
  Wn(e);
  var n = A0(Ra);
  return n[e] != null ? n[e] : t;
}
function T3(e, t, n) {
  t === void 0 && (t = {}), n === void 0 && (n = {});
  var r = "use" + e + "Props";
  Wn(r);
  var i = Na(r);
  return i ? i(t, n) : n;
}
function H3(e, t, n) {
  t === void 0 && (t = {}), n === void 0 && (n = {});
  var r = "use" + e + "Options";
  Wn(r);
  var i = Na(r);
  return i ? e2(e2({}, t), i(t, n)) : t;
}
function D3(e) {
  return Array.isArray(e) ? e : typeof e < "u" ? [e] : [];
}
function V0(e) {
  var t, n, r = D3(e.compose), i = function(l, c) {
    if (e.useOptions && (l = e.useOptions(l, c)), e.name && (l = H3(e.name, l, c)), e.compose)
      for (var u = fi(r), d; !(d = u()).done; ) {
        var f = d.value;
        l = f.__useOptions(l, c);
      }
    return l;
  }, o = function(l, c, u) {
    if (l === void 0 && (l = {}), c === void 0 && (c = {}), u === void 0 && (u = !1), u || (l = i(l, c)), e.useProps && (c = e.useProps(l, c)), e.name && (c = T3(e.name, l, c)), e.compose)
      if (e.useComposeOptions && (l = e.useComposeOptions(l, c)), e.useComposeProps)
        c = e.useComposeProps(l, c);
      else
        for (var d = fi(r), f; !(f = d()).done; ) {
          var p = f.value;
          c = p(l, c, !0);
        }
    var y = {}, m = c || {};
    for (var g in m)
      m[g] !== void 0 && (y[g] = m[g]);
    return y;
  };
  o.__useOptions = i;
  var s = r.reduce(function(a, l) {
    return a.push.apply(a, l.__keys || []), a;
  }, []);
  return o.__keys = [].concat(s, ((t = e.useState) === null || t === void 0 ? void 0 : t.__keys) || [], e.keys || []), o.unstable_propsAreEqual = e.propsAreEqual || ((n = r[0]) === null || n === void 0 ? void 0 : n.unstable_propsAreEqual) || P2, process.env.NODE_ENV !== "production" && e.name && Object.defineProperty(o, "name", {
    value: "use" + e.name
  }), o;
}
function yi(e, t) {
  t === void 0 && (t = null), e && (typeof e == "function" ? e(t) : e.current = t);
}
function Aa(e, t) {
  return $t(function() {
    return e == null && t == null ? null : function(n) {
      yi(e, n), yi(t, n);
    };
  }, [e, t]);
}
function Ba(e) {
  for (var t = [], n = E3(e), r; !(r = n()).done; ) {
    var i = r.value;
    Array.isArray(i) ? t.push.apply(t, Ba(i)) : t.push(i);
  }
  return t;
}
function R3(e) {
  if (process.env.NODE_ENV !== "production") {
    var t;
    if (!e) return;
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    var o = Ba(r.map(function(s) {
      return [s, `
`];
    }));
    (t = console).warn.apply(t, o.slice(0, -1));
    try {
      throw Error(o.join(""));
    } catch {
    }
  }
}
function N3(e) {
  return e ? e.ownerDocument || e : document;
}
var Fa;
try {
  Fa = window;
} catch {
}
function A3(e) {
  return Fa;
}
function B3() {
  var e = A3();
  return !!(typeof e < "u" && e.document && e.document.createElement);
}
var $0 = B3(), Z0 = $0 ? Sa : le;
function n2(e) {
  var t = ce(e);
  return Z0(function() {
    t.current = e;
  }), t;
}
function F3(e) {
  return e.target === e.currentTarget;
}
function tn(e) {
  return $0 ? window.navigator.userAgent.indexOf(e) !== -1 : !1;
}
var V3 = ["unstable_system"], qn = V0({
  name: "Role",
  keys: V3,
  propsAreEqual: function(t, n) {
    var r = t.unstable_system, i = lt(t, ["unstable_system"]), o = n.unstable_system, s = lt(n, ["unstable_system"]);
    return r !== o && !P2(r, o) ? !1 : P2(i, s);
  }
});
F0({
  as: "div",
  useHook: qn
});
function B2(e) {
  var t = fe(e), n = t[0];
  return n;
}
var $3 = "id";
function Z3(e) {
  return e === void 0 && (e = $3), (e ? e + "-" : "") + Math.random().toString(32).substr(2, 6);
}
var W3 = /* @__PURE__ */ $n(Z3);
function U3(e) {
  e === void 0 && (e = {});
  var t = B2(e), n = t.baseId, r = A0(W3), i = ce(0), o = fe(function() {
    return n || r();
  }), s = o[0], a = o[1];
  return {
    baseId: s,
    setBaseId: a,
    unstable_idCountRef: i
  };
}
var ze = "top", Je = "bottom", et = "right", Ke = "left", Xn = "auto", F2 = [ze, Je, et, Ke], o2 = "start", k2 = "end", j3 = "clippingParents", Va = "viewport", m2 = "popper", G3 = "reference", Ci = /* @__PURE__ */ F2.reduce(function(e, t) {
  return e.concat([t + "-" + o2, t + "-" + k2]);
}, []), $a = /* @__PURE__ */ [].concat(F2, [Xn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + o2, t + "-" + k2]);
}, []), z3 = "beforeRead", K3 = "read", q3 = "afterRead", X3 = "beforeMain", Y3 = "main", Q3 = "afterMain", J3 = "beforeWrite", ec = "write", tc = "afterWrite", nc = [z3, K3, q3, X3, Y3, Q3, J3, ec, tc];
function Ct(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Xe(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Zt(e) {
  var t = Xe(e).Element;
  return e instanceof t || e instanceof Element;
}
function Qe(e) {
  var t = Xe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Yn(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Xe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function rc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, i = t.attributes[n] || {}, o = t.elements[n];
    !Qe(o) || !Ct(o) || (Object.assign(o.style, r), Object.keys(i).forEach(function(s) {
      var a = i[s];
      a === !1 ? o.removeAttribute(s) : o.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function ic(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var i = t.elements[r], o = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), a = s.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !Qe(i) || !Ct(i) || (Object.assign(i.style, a), Object.keys(o).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const oc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: rc,
  effect: ic,
  requires: ["computeStyles"]
};
function mt(e) {
  return e.split("-")[0];
}
var Bt = Math.max, _0 = Math.min, a2 = Math.round;
function Mn() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Za() {
  return !/^((?!chrome|android).)*safari/i.test(Mn());
}
function s2(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, o = 1;
  t && Qe(e) && (i = e.offsetWidth > 0 && a2(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && a2(r.height) / e.offsetHeight || 1);
  var s = Zt(e) ? Xe(e) : window, a = s.visualViewport, l = !Za() && n, c = (r.left + (l && a ? a.offsetLeft : 0)) / i, u = (r.top + (l && a ? a.offsetTop : 0)) / o, d = r.width / i, f = r.height / o;
  return {
    width: d,
    height: f,
    top: u,
    right: c + d,
    bottom: u + f,
    left: c,
    x: c,
    y: u
  };
}
function Qn(e) {
  var t = s2(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Wa(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Yn(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Mt(e) {
  return Xe(e).getComputedStyle(e);
}
function ac(e) {
  return ["table", "td", "th"].indexOf(Ct(e)) >= 0;
}
function Dt(e) {
  return ((Zt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function W0(e) {
  return Ct(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Yn(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Dt(e)
  );
}
function wi(e) {
  return !Qe(e) || // https://github.com/popperjs/popper-core/issues/837
  Mt(e).position === "fixed" ? null : e.offsetParent;
}
function sc(e) {
  var t = /firefox/i.test(Mn()), n = /Trident/i.test(Mn());
  if (n && Qe(e)) {
    var r = Mt(e);
    if (r.position === "fixed")
      return null;
  }
  var i = W0(e);
  for (Yn(i) && (i = i.host); Qe(i) && ["html", "body"].indexOf(Ct(i)) < 0; ) {
    var o = Mt(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function V2(e) {
  for (var t = Xe(e), n = wi(e); n && ac(n) && Mt(n).position === "static"; )
    n = wi(n);
  return n && (Ct(n) === "html" || Ct(n) === "body" && Mt(n).position === "static") ? t : n || sc(e) || t;
}
function Jn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function _2(e, t, n) {
  return Bt(e, _0(t, n));
}
function lc(e, t, n) {
  var r = _2(e, t, n);
  return r > n ? n : r;
}
function Ua() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ja(e) {
  return Object.assign({}, Ua(), e);
}
function Ga(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var cc = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, ja(typeof t != "number" ? t : Ga(t, F2));
};
function uc(e) {
  var t, n = e.state, r = e.name, i = e.options, o = n.elements.arrow, s = n.modifiersData.popperOffsets, a = mt(n.placement), l = Jn(a), c = [Ke, et].indexOf(a) >= 0, u = c ? "height" : "width";
  if (!(!o || !s)) {
    var d = cc(i.padding, n), f = Qn(o), p = l === "y" ? ze : Ke, y = l === "y" ? Je : et, m = n.rects.reference[u] + n.rects.reference[l] - s[l] - n.rects.popper[u], g = s[l] - n.rects.reference[l], _ = V2(o), C = _ ? l === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0, v = m / 2 - g / 2, w = d[p], b = C - f[u] - d[y], I = C / 2 - f[u] / 2 + v, O = _2(w, I, b), V = l;
    n.modifiersData[r] = (t = {}, t[V] = O, t.centerOffset = O - I, t);
  }
}
function dc(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Wa(t.elements.popper, i) && (t.elements.arrow = i));
}
const fc = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: uc,
  effect: dc,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function l2(e) {
  return e.split("-")[1];
}
var pc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function hc(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: a2(n * i) / i || 0,
    y: a2(r * i) / i || 0
  };
}
function bi(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, o = e.variation, s = e.offsets, a = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = s.x, p = f === void 0 ? 0 : f, y = s.y, m = y === void 0 ? 0 : y, g = typeof u == "function" ? u({
    x: p,
    y: m
  }) : {
    x: p,
    y: m
  };
  p = g.x, m = g.y;
  var _ = s.hasOwnProperty("x"), C = s.hasOwnProperty("y"), v = Ke, w = ze, b = window;
  if (c) {
    var I = V2(n), O = "clientHeight", V = "clientWidth";
    if (I === Xe(n) && (I = Dt(n), Mt(I).position !== "static" && a === "absolute" && (O = "scrollHeight", V = "scrollWidth")), I = I, i === ze || (i === Ke || i === et) && o === k2) {
      w = Je;
      var A = d && I === b && b.visualViewport ? b.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        I[O]
      );
      m -= A - r.height, m *= l ? 1 : -1;
    }
    if (i === Ke || (i === ze || i === Je) && o === k2) {
      v = et;
      var N = d && I === b && b.visualViewport ? b.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        I[V]
      );
      p -= N - r.width, p *= l ? 1 : -1;
    }
  }
  var T = Object.assign({
    position: a
  }, c && pc), D = u === !0 ? hc({
    x: p,
    y: m
  }, Xe(n)) : {
    x: p,
    y: m
  };
  if (p = D.x, m = D.y, l) {
    var $;
    return Object.assign({}, T, ($ = {}, $[w] = C ? "0" : "", $[v] = _ ? "0" : "", $.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", $));
  }
  return Object.assign({}, T, (t = {}, t[w] = C ? m + "px" : "", t[v] = _ ? p + "px" : "", t.transform = "", t));
}
function gc(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, o = n.adaptive, s = o === void 0 ? !0 : o, a = n.roundOffsets, l = a === void 0 ? !0 : a, c = {
    placement: mt(t.placement),
    variation: l2(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, bi(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, bi(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const mc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: gc,
  data: {}
};
var Q2 = {
  passive: !0
};
function vc(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, o = i === void 0 ? !0 : i, s = r.resize, a = s === void 0 ? !0 : s, l = Xe(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, Q2);
  }), a && l.addEventListener("resize", n.update, Q2), function() {
    o && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, Q2);
    }), a && l.removeEventListener("resize", n.update, Q2);
  };
}
const yc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: vc,
  data: {}
};
var Cc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function v0(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Cc[t];
  });
}
var wc = {
  start: "end",
  end: "start"
};
function xi(e) {
  return e.replace(/start|end/g, function(t) {
    return wc[t];
  });
}
function er(e) {
  var t = Xe(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function tr(e) {
  return s2(Dt(e)).left + er(e).scrollLeft;
}
function bc(e, t) {
  var n = Xe(e), r = Dt(e), i = n.visualViewport, o = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (i) {
    o = i.width, s = i.height;
    var c = Za();
    (c || !c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: a + tr(e),
    y: l
  };
}
function xc(e) {
  var t, n = Dt(e), r = er(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, o = Bt(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = Bt(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), a = -r.scrollLeft + tr(e), l = -r.scrollTop;
  return Mt(i || n).direction === "rtl" && (a += Bt(n.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: s,
    x: a,
    y: l
  };
}
function nr(e) {
  var t = Mt(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function za(e) {
  return ["html", "body", "#document"].indexOf(Ct(e)) >= 0 ? e.ownerDocument.body : Qe(e) && nr(e) ? e : za(W0(e));
}
function M2(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = za(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Xe(r), s = i ? [o].concat(o.visualViewport || [], nr(r) ? r : []) : r, a = t.concat(s);
  return i ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(M2(W0(s)))
  );
}
function Sn(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Lc(e, t) {
  var n = s2(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Li(e, t, n) {
  return t === Va ? Sn(bc(e, n)) : Zt(t) ? Lc(t, n) : Sn(xc(Dt(e)));
}
function _c(e) {
  var t = M2(W0(e)), n = ["absolute", "fixed"].indexOf(Mt(e).position) >= 0, r = n && Qe(e) ? V2(e) : e;
  return Zt(r) ? t.filter(function(i) {
    return Zt(i) && Wa(i, r) && Ct(i) !== "body";
  }) : [];
}
function Mc(e, t, n, r) {
  var i = t === "clippingParents" ? _c(e) : [].concat(t), o = [].concat(i, [n]), s = o[0], a = o.reduce(function(l, c) {
    var u = Li(e, c, r);
    return l.top = Bt(u.top, l.top), l.right = _0(u.right, l.right), l.bottom = _0(u.bottom, l.bottom), l.left = Bt(u.left, l.left), l;
  }, Li(e, s, r));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Ka(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? mt(r) : null, o = r ? l2(r) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (i) {
    case ze:
      l = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Je:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case et:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case Ke:
      l = {
        x: t.x - n.width,
        y: a
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var c = i ? Jn(i) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (o) {
      case o2:
        l[c] = l[c] - (t[u] / 2 - n[u] / 2);
        break;
      case k2:
        l[c] = l[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function O2(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, o = n.strategy, s = o === void 0 ? e.strategy : o, a = n.boundary, l = a === void 0 ? j3 : a, c = n.rootBoundary, u = c === void 0 ? Va : c, d = n.elementContext, f = d === void 0 ? m2 : d, p = n.altBoundary, y = p === void 0 ? !1 : p, m = n.padding, g = m === void 0 ? 0 : m, _ = ja(typeof g != "number" ? g : Ga(g, F2)), C = f === m2 ? G3 : m2, v = e.rects.popper, w = e.elements[y ? C : f], b = Mc(Zt(w) ? w : w.contextElement || Dt(e.elements.popper), l, u, s), I = s2(e.elements.reference), O = Ka({
    reference: I,
    element: v,
    placement: i
  }), V = Sn(Object.assign({}, v, O)), A = f === m2 ? V : I, N = {
    top: b.top - A.top + _.top,
    bottom: A.bottom - b.bottom + _.bottom,
    left: b.left - A.left + _.left,
    right: A.right - b.right + _.right
  }, T = e.modifiersData.offset;
  if (f === m2 && T) {
    var D = T[i];
    Object.keys(N).forEach(function($) {
      var x = [et, Je].indexOf($) >= 0 ? 1 : -1, E = [ze, Je].indexOf($) >= 0 ? "y" : "x";
      N[$] += D[E] * x;
    });
  }
  return N;
}
function Sc(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, o = n.rootBoundary, s = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, c = l === void 0 ? $a : l, u = l2(r), d = u ? a ? Ci : Ci.filter(function(y) {
    return l2(y) === u;
  }) : F2, f = d.filter(function(y) {
    return c.indexOf(y) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(y, m) {
    return y[m] = O2(e, {
      placement: m,
      boundary: i,
      rootBoundary: o,
      padding: s
    })[mt(m)], y;
  }, {});
  return Object.keys(p).sort(function(y, m) {
    return p[y] - p[m];
  });
}
function Ic(e) {
  if (mt(e) === Xn)
    return [];
  var t = v0(e);
  return [xi(e), t, xi(t)];
}
function Ec(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, o = i === void 0 ? !0 : i, s = n.altAxis, a = s === void 0 ? !0 : s, l = n.fallbackPlacements, c = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, y = p === void 0 ? !0 : p, m = n.allowedAutoPlacements, g = t.options.placement, _ = mt(g), C = _ === g, v = l || (C || !y ? [v0(g)] : Ic(g)), w = [g].concat(v).reduce(function(F, j) {
      return F.concat(mt(j) === Xn ? Sc(t, {
        placement: j,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: y,
        allowedAutoPlacements: m
      }) : j);
    }, []), b = t.rects.reference, I = t.rects.popper, O = /* @__PURE__ */ new Map(), V = !0, A = w[0], N = 0; N < w.length; N++) {
      var T = w[N], D = mt(T), $ = l2(T) === o2, x = [ze, Je].indexOf(D) >= 0, E = x ? "width" : "height", R = O2(t, {
        placement: T,
        boundary: u,
        rootBoundary: d,
        altBoundary: f,
        padding: c
      }), L = x ? $ ? et : Ke : $ ? Je : ze;
      b[E] > I[E] && (L = v0(L));
      var k = v0(L), Z = [];
      if (o && Z.push(R[D] <= 0), a && Z.push(R[L] <= 0, R[k] <= 0), Z.every(function(F) {
        return F;
      })) {
        A = T, V = !1;
        break;
      }
      O.set(T, Z);
    }
    if (V)
      for (var M = y ? 3 : 1, P = function(j) {
        var G = w.find(function(K) {
          var q = O.get(K);
          if (q)
            return q.slice(0, j).every(function(te) {
              return te;
            });
        });
        if (G)
          return A = G, "break";
      }, H = M; H > 0; H--) {
        var B = P(H);
        if (B === "break") break;
      }
    t.placement !== A && (t.modifiersData[r]._skip = !0, t.placement = A, t.reset = !0);
  }
}
const Pc = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ec,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function _i(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function Mi(e) {
  return [ze, et, Je, Ke].some(function(t) {
    return e[t] >= 0;
  });
}
function kc(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, o = t.modifiersData.preventOverflow, s = O2(t, {
    elementContext: "reference"
  }), a = O2(t, {
    altBoundary: !0
  }), l = _i(s, r), c = _i(a, i, o), u = Mi(l), d = Mi(c);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": d
  });
}
const Oc = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: kc
};
function Tc(e, t, n) {
  var r = mt(e), i = [Ke, ze].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = o[0], a = o[1];
  return s = s || 0, a = (a || 0) * i, [Ke, et].indexOf(r) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function Hc(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, o = i === void 0 ? [0, 0] : i, s = $a.reduce(function(u, d) {
    return u[d] = Tc(d, t.rects, o), u;
  }, {}), a = s[t.placement], l = a.x, c = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = s;
}
const Dc = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Hc
};
function Rc(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Ka({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const Nc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Rc,
  data: {}
};
function Ac(e) {
  return e === "x" ? "y" : "x";
}
function Bc(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, o = i === void 0 ? !0 : i, s = n.altAxis, a = s === void 0 ? !1 : s, l = n.boundary, c = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, y = n.tetherOffset, m = y === void 0 ? 0 : y, g = O2(t, {
    boundary: l,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), _ = mt(t.placement), C = l2(t.placement), v = !C, w = Jn(_), b = Ac(w), I = t.modifiersData.popperOffsets, O = t.rects.reference, V = t.rects.popper, A = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, N = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (I) {
    if (o) {
      var $, x = w === "y" ? ze : Ke, E = w === "y" ? Je : et, R = w === "y" ? "height" : "width", L = I[w], k = L + g[x], Z = L - g[E], M = p ? -V[R] / 2 : 0, P = C === o2 ? O[R] : V[R], H = C === o2 ? -V[R] : -O[R], B = t.elements.arrow, F = p && B ? Qn(B) : {
        width: 0,
        height: 0
      }, j = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ua(), G = j[x], K = j[E], q = _2(0, O[R], F[R]), te = v ? O[R] / 2 - M - q - G - N.mainAxis : P - q - G - N.mainAxis, Q = v ? -O[R] / 2 + M + q + K + N.mainAxis : H + q + K + N.mainAxis, se = t.elements.arrow && V2(t.elements.arrow), W = se ? w === "y" ? se.clientTop || 0 : se.clientLeft || 0 : 0, ye = ($ = T?.[w]) != null ? $ : 0, X = L + te - ye - W, Pe = L + Q - ye, ue = _2(p ? _0(k, X) : k, L, p ? Bt(Z, Pe) : Z);
      I[w] = ue, D[w] = ue - L;
    }
    if (a) {
      var he, He = w === "x" ? ze : Ke, Ue = w === "x" ? Je : et, qe = I[b], ke = b === "y" ? "height" : "width", je = qe + g[He], St = qe - g[Ue], It = [ze, Ke].indexOf(_) !== -1, nt = (he = T?.[b]) != null ? he : 0, ut = It ? je : qe - O[ke] - V[ke] - nt + N.altAxis, rt = It ? qe + O[ke] + V[ke] - nt - N.altAxis : St, Ge = p && It ? lc(ut, qe, rt) : _2(p ? ut : je, qe, p ? rt : St);
      I[b] = Ge, D[b] = Ge - qe;
    }
    t.modifiersData[r] = D;
  }
}
const Fc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Bc,
  requiresIfExists: ["offset"]
};
function Vc(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function $c(e) {
  return e === Xe(e) || !Qe(e) ? er(e) : Vc(e);
}
function Zc(e) {
  var t = e.getBoundingClientRect(), n = a2(t.width) / e.offsetWidth || 1, r = a2(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Wc(e, t, n) {
  n === void 0 && (n = !1);
  var r = Qe(t), i = Qe(t) && Zc(t), o = Dt(t), s = s2(e, i, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Ct(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  nr(o)) && (a = $c(t)), Qe(t) ? (l = s2(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = tr(o))), {
    x: s.left + a.scrollLeft - l.x,
    y: s.top + a.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Uc(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function i(o) {
    n.add(o.name);
    var s = [].concat(o.requires || [], o.requiresIfExists || []);
    s.forEach(function(a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && i(l);
      }
    }), r.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || i(o);
  }), r;
}
function jc(e) {
  var t = Uc(e);
  return nc.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Gc(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function zc(e) {
  var t = e.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Si = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ii() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Kc(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, o = i === void 0 ? Si : i;
  return function(a, l, c) {
    c === void 0 && (c = o);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Si, o),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, p = {
      state: u,
      setOptions: function(_) {
        var C = typeof _ == "function" ? _(u.options) : _;
        m(), u.options = Object.assign({}, o, u.options, C), u.scrollParents = {
          reference: Zt(a) ? M2(a) : a.contextElement ? M2(a.contextElement) : [],
          popper: M2(l)
        };
        var v = jc(zc([].concat(r, u.options.modifiers)));
        return u.orderedModifiers = v.filter(function(w) {
          return w.enabled;
        }), y(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var _ = u.elements, C = _.reference, v = _.popper;
          if (Ii(C, v)) {
            u.rects = {
              reference: Wc(C, V2(v), u.options.strategy === "fixed"),
              popper: Qn(v)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(N) {
              return u.modifiersData[N.name] = Object.assign({}, N.data);
            });
            for (var w = 0; w < u.orderedModifiers.length; w++) {
              if (u.reset === !0) {
                u.reset = !1, w = -1;
                continue;
              }
              var b = u.orderedModifiers[w], I = b.fn, O = b.options, V = O === void 0 ? {} : O, A = b.name;
              typeof I == "function" && (u = I({
                state: u,
                options: V,
                name: A,
                instance: p
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Gc(function() {
        return new Promise(function(g) {
          p.forceUpdate(), g(u);
        });
      }),
      destroy: function() {
        m(), f = !0;
      }
    };
    if (!Ii(a, l))
      return p;
    p.setOptions(c).then(function(g) {
      !f && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function y() {
      u.orderedModifiers.forEach(function(g) {
        var _ = g.name, C = g.options, v = C === void 0 ? {} : C, w = g.effect;
        if (typeof w == "function") {
          var b = w({
            state: u,
            name: _,
            instance: p,
            options: v
          }), I = function() {
          };
          d.push(b || I);
        }
      });
    }
    function m() {
      d.forEach(function(g) {
        return g();
      }), d = [];
    }
    return p;
  };
}
var qc = [yc, Nc, mc, oc, Dc, Pc, Fc, fc, Oc], Xc = /* @__PURE__ */ Kc({
  defaultModifiers: qc
});
function Yc(e) {
  var t = ce(null);
  return Z0(function() {
    t.current = e;
  }, [e]), t;
}
function Qc(e) {
  e === void 0 && (e = {});
  var t = B2(e), n = t.visible, r = n === void 0 ? !1 : n, i = t.animated, o = i === void 0 ? !1 : i, s = lt(t, ["visible", "animated"]), a = U3(s), l = fe(r), c = l[0], u = l[1], d = fe(o), f = d[0], p = d[1], y = fe(!1), m = y[0], g = y[1], _ = Yc(c), C = _.current != null && _.current !== c;
  f && !m && C && g(!0), le(function() {
    if (typeof f == "number" && m) {
      var O = setTimeout(function() {
        return g(!1);
      }, f);
      return function() {
        clearTimeout(O);
      };
    }
    if (f && m && process.env.NODE_ENV === "development") {
      var V = setTimeout(function() {
        process.env.NODE_ENV !== "production" && R3(m, "It's been 8 seconds but stopAnimation has not been called. Does the disclousure element have a CSS transition?");
      }, 8e3);
      return function() {
        clearTimeout(V);
      };
    }
    return function() {
    };
  }, [f, m]);
  var v = Y(function() {
    return u(!0);
  }, []), w = Y(function() {
    return u(!1);
  }, []), b = Y(function() {
    return u(function(O) {
      return !O;
    });
  }, []), I = Y(function() {
    return g(!1);
  }, []);
  return Oe(Oe({}, a), {}, {
    visible: c,
    animated: f,
    animating: m,
    show: v,
    hide: w,
    toggle: b,
    setVisible: u,
    setAnimated: p,
    stopAnimation: I
  });
}
function Jc(e) {
  e === void 0 && (e = {});
  var t = B2(e), n = t.modal, r = n === void 0 ? !0 : n, i = lt(t, ["modal"]), o = Qc(i), s = fe(r), a = s[0], l = s[1], c = ce(null);
  return Oe(Oe({}, o), {}, {
    modal: a,
    setModal: l,
    unstable_disclosureRef: c
  });
}
var eu = tn("Mac") && !tn("Chrome") && tn("Safari");
function Ei(e) {
  return function(t) {
    return e && !P2(t, e) ? e : t;
  };
}
function tu(e) {
  e === void 0 && (e = {});
  var t = B2(e), n = t.gutter, r = n === void 0 ? 12 : n, i = t.placement, o = i === void 0 ? "bottom" : i, s = t.unstable_flip, a = s === void 0 ? !0 : s, l = t.unstable_offset, c = t.unstable_preventOverflow, u = c === void 0 ? !0 : c, d = t.unstable_fixed, f = d === void 0 ? !1 : d, p = t.modal, y = p === void 0 ? !1 : p, m = lt(t, ["gutter", "placement", "unstable_flip", "unstable_offset", "unstable_preventOverflow", "unstable_fixed", "modal"]), g = ce(null), _ = ce(null), C = ce(null), v = ce(null), w = fe(o), b = w[0], I = w[1], O = fe(o), V = O[0], A = O[1], N = fe(l || [0, r]), T = N[0], D = fe({
    position: "fixed",
    left: "100%",
    top: "100%"
  }), $ = D[0], x = D[1], E = fe({}), R = E[0], L = E[1], k = Jc(Oe({
    modal: y
  }, m)), Z = Y(function() {
    return g.current ? (g.current.forceUpdate(), !0) : !1;
  }, []), M = Y(function(P) {
    P.placement && A(P.placement), P.styles && (x(Ei(P.styles.popper)), v.current && L(Ei(P.styles.arrow)));
  }, []);
  return Z0(function() {
    return _.current && C.current && (g.current = Xc(_.current, C.current, {
      // https://popper.js.org/docs/v2/constructors/#options
      placement: b,
      strategy: f ? "fixed" : "absolute",
      // Safari needs styles to be applied in the first render, otherwise
      // hovering over the popover when it gets visible for the first time
      // will change its dimensions unexpectedly.
      onFirstUpdate: eu ? M : void 0,
      modifiers: [{
        // https://popper.js.org/docs/v2/modifiers/event-listeners/
        name: "eventListeners",
        enabled: k.visible
      }, {
        // https://popper.js.org/docs/v2/modifiers/apply-styles/
        name: "applyStyles",
        enabled: !1
      }, {
        // https://popper.js.org/docs/v2/modifiers/flip/
        name: "flip",
        enabled: a,
        options: {
          padding: 8
        }
      }, {
        // https://popper.js.org/docs/v2/modifiers/offset/
        name: "offset",
        options: {
          offset: T
        }
      }, {
        // https://popper.js.org/docs/v2/modifiers/prevent-overflow/
        name: "preventOverflow",
        enabled: u,
        options: {
          tetherOffset: function() {
            var H;
            return ((H = v.current) === null || H === void 0 ? void 0 : H.clientWidth) || 0;
          }
        }
      }, {
        // https://popper.js.org/docs/v2/modifiers/arrow/
        name: "arrow",
        enabled: !!v.current,
        options: {
          element: v.current
        }
      }, {
        // https://popper.js.org/docs/v2/modifiers/#custom-modifiers
        name: "updateState",
        phase: "write",
        requires: ["computeStyles"],
        enabled: k.visible && process.env.NODE_ENV !== "test",
        fn: function(H) {
          var B = H.state;
          return M(B);
        }
      }]
    })), function() {
      g.current && (g.current.destroy(), g.current = null);
    };
  }, [b, f, k.visible, a, T, u]), le(function() {
    if (k.visible) {
      var P = window.requestAnimationFrame(function() {
        var H;
        (H = g.current) === null || H === void 0 || H.forceUpdate();
      });
      return function() {
        window.cancelAnimationFrame(P);
      };
    }
  }, [k.visible]), Oe(Oe({}, k), {}, {
    unstable_referenceRef: _,
    unstable_popoverRef: C,
    unstable_arrowRef: v,
    unstable_popoverStyles: $,
    unstable_arrowStyles: R,
    unstable_update: Z,
    unstable_originalPlacement: b,
    placement: V,
    place: I
  });
}
var nu = ["baseId", "unstable_idCountRef", "visible", "animated", "animating", "setBaseId", "show", "hide", "toggle", "setVisible", "setAnimated", "stopAnimation"], ru = nu, iu = ru, qa = V0({
  name: "DisclosureContent",
  compose: qn,
  keys: iu,
  useProps: function(t, n) {
    var r = n.onTransitionEnd, i = n.onAnimationEnd, o = n.style, s = lt(n, ["onTransitionEnd", "onAnimationEnd", "style"]), a = t.animated && t.animating, l = fe(null), c = l[0], u = l[1], d = !t.visible && !a, f = d ? Oe({
      display: "none"
    }, o) : o, p = n2(r), y = n2(i), m = ce(0);
    le(function() {
      if (t.animated)
        return m.current = window.requestAnimationFrame(function() {
          m.current = window.requestAnimationFrame(function() {
            t.visible ? u("enter") : u(a ? "leave" : null);
          });
        }), function() {
          return window.cancelAnimationFrame(m.current);
        };
    }, [t.animated, t.visible, a]);
    var g = Y(function(v) {
      if (F3(v) && a && t.animated === !0) {
        var w;
        (w = t.stopAnimation) === null || w === void 0 || w.call(t);
      }
    }, [t.animated, a, t.stopAnimation]), _ = Y(function(v) {
      var w;
      (w = p.current) === null || w === void 0 || w.call(p, v), g(v);
    }, [g]), C = Y(function(v) {
      var w;
      (w = y.current) === null || w === void 0 || w.call(y, v), g(v);
    }, [g]);
    return Oe({
      id: t.baseId,
      "data-enter": c === "enter" ? "" : void 0,
      "data-leave": c === "leave" ? "" : void 0,
      onTransitionEnd: _,
      onAnimationEnd: C,
      hidden: d,
      style: f
    }, s);
  }
});
F0({
  as: "div",
  useHook: qa
});
function Xa() {
  return $0 ? document.body : null;
}
var Pi = /* @__PURE__ */ $n(Xa());
function T2(e) {
  var t = e.children, n = A0(Pi) || Xa(), r = fe(function() {
    if ($0) {
      var o = document.createElement("div");
      return o.className = T2.__className, o;
    }
    return null;
  }), i = r[0];
  return Z0(function() {
    if (!(!i || !n))
      return n.appendChild(i), function() {
        n.removeChild(i);
      };
  }, [i, n]), i ? /* @__PURE__ */ ll(/* @__PURE__ */ Zn(Pi.Provider, {
    value: i
  }, t), i) : null;
}
T2.__className = "__reakit-portal";
T2.__selector = "." + T2.__className;
var Ya = ["baseId", "unstable_idCountRef", "visible", "animated", "animating", "setBaseId", "show", "hide", "toggle", "setVisible", "setAnimated", "stopAnimation", "unstable_disclosureRef", "unstable_referenceRef", "unstable_popoverRef", "unstable_arrowRef", "unstable_popoverStyles", "unstable_arrowStyles", "unstable_originalPlacement", "unstable_update", "placement", "place", "unstable_timeout", "unstable_setTimeout"], ou = [].concat(Ya, ["unstable_portal"]), au = Ya, su = au, Pt = {
  currentTooltipId: null,
  listeners: /* @__PURE__ */ new Set(),
  subscribe: function(t) {
    var n = this;
    return this.listeners.add(t), function() {
      n.listeners.delete(t);
    };
  },
  show: function(t) {
    this.currentTooltipId = t, this.listeners.forEach(function(n) {
      return n(t);
    });
  },
  hide: function(t) {
    this.currentTooltipId === t && (this.currentTooltipId = null, this.listeners.forEach(function(n) {
      return n(null);
    }));
  }
};
function lu(e) {
  e.defaultPrevented || e.key === "Escape" && Pt.show(null);
}
var cu = V0({
  name: "Tooltip",
  compose: qa,
  keys: ou,
  useOptions: function(t) {
    var n = t.unstable_portal, r = n === void 0 ? !0 : n, i = lt(t, ["unstable_portal"]);
    return Oe({
      unstable_portal: r
    }, i);
  },
  useProps: function(t, n) {
    var r = n.ref, i = n.style, o = n.wrapElement, s = lt(n, ["ref", "style", "wrapElement"]);
    le(function() {
      var l, c = N3((l = t.unstable_popoverRef) === null || l === void 0 ? void 0 : l.current);
      c.addEventListener("keydown", lu);
    }, []);
    var a = Y(function(l) {
      return t.unstable_portal && (l = /* @__PURE__ */ Zn(T2, null, l)), o ? o(l) : l;
    }, [t.unstable_portal, o]);
    return Oe({
      ref: Aa(t.unstable_popoverRef, r),
      role: "tooltip",
      style: Oe(Oe({}, t.unstable_popoverStyles), {}, {
        pointerEvents: "none"
      }, i),
      wrapElement: a
    }, s);
  }
}), uu = F0({
  as: "div",
  memo: !0,
  useHook: cu
}), du = V0({
  name: "TooltipReference",
  compose: qn,
  keys: su,
  useProps: function(t, n) {
    var r = n.ref, i = n.onFocus, o = n.onBlur, s = n.onMouseEnter, a = n.onMouseLeave, l = lt(n, ["ref", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave"]), c = n2(i), u = n2(o), d = n2(s), f = n2(a), p = Y(function(_) {
      var C, v;
      (C = c.current) === null || C === void 0 || C.call(c, _), !_.defaultPrevented && ((v = t.show) === null || v === void 0 || v.call(t));
    }, [t.show]), y = Y(function(_) {
      var C, v;
      (C = u.current) === null || C === void 0 || C.call(u, _), !_.defaultPrevented && ((v = t.hide) === null || v === void 0 || v.call(t));
    }, [t.hide]), m = Y(function(_) {
      var C, v;
      (C = d.current) === null || C === void 0 || C.call(d, _), !_.defaultPrevented && ((v = t.show) === null || v === void 0 || v.call(t));
    }, [t.show]), g = Y(function(_) {
      var C, v;
      (C = f.current) === null || C === void 0 || C.call(f, _), !_.defaultPrevented && ((v = t.hide) === null || v === void 0 || v.call(t));
    }, [t.hide]);
    return Oe({
      ref: Aa(t.unstable_referenceRef, r),
      tabIndex: 0,
      onFocus: p,
      onBlur: y,
      onMouseEnter: m,
      onMouseLeave: g,
      "aria-describedby": t.baseId
    }, l);
  }
}), fu = F0({
  as: "div",
  useHook: du
});
function pu(e) {
  e === void 0 && (e = {});
  var t = B2(e), n = t.placement, r = n === void 0 ? "top" : n, i = t.unstable_timeout, o = i === void 0 ? 0 : i, s = lt(t, ["placement", "unstable_timeout"]), a = fe(o), l = a[0], c = a[1], u = ce(null), d = ce(null), f = tu(Oe(Oe({}, s), {}, {
    placement: r
  }));
  f.modal, f.setModal;
  var p = lt(f, ["modal", "setModal"]), y = Y(function() {
    u.current !== null && window.clearTimeout(u.current), d.current !== null && window.clearTimeout(d.current);
  }, []), m = Y(function() {
    y(), p.hide(), d.current = window.setTimeout(function() {
      Pt.hide(p.baseId);
    }, l);
  }, [y, p.hide, l, p.baseId]), g = Y(function() {
    y(), !l || Pt.currentTooltipId ? (Pt.show(p.baseId), p.show()) : (Pt.show(null), u.current = window.setTimeout(function() {
      Pt.show(p.baseId), p.show();
    }, l));
  }, [y, l, p.show, p.baseId]);
  return le(function() {
    return Pt.subscribe(function(_) {
      _ !== p.baseId && (y(), p.visible && p.hide());
    });
  }, [p.baseId, y, p.visible, p.hide]), le(function() {
    return function() {
      y(), Pt.hide(p.baseId);
    };
  }, [y, p.baseId]), Oe(Oe({}, p), {}, {
    hide: m,
    show: g,
    unstable_timeout: l,
    unstable_setTimeout: c
  });
}
const hu = S(p2).withConfig({
  displayName: "caption-text__StyledText",
  componentId: "sc-39xfy6-0"
})(({
  theme: e,
  size: t = 2
}) => ({
  fontWeight: me({
    1: e.typography.fontWeight.medium,
    2: e.typography.fontWeight.regular
  }, t),
  fontSize: "0.688rem",
  lineHeight: me({
    1: "1.25rem",
    2: "1rem"
  }, t)
}));
function Ot(e) {
  return /* @__PURE__ */ h(hu, { ...e });
}
const gu = S(uu).withConfig({
  displayName: "tooltip__StyledReactTooltip",
  componentId: "sc-1m82hpm-0"
})(({
  theme: e,
  lineHeight: t = "sm",
  scale: n = "sm",
  paddingScale: r = 2
}) => ({
  zIndex: e.zIndex.tooltip,
  color: e.styleguideColors.contentPrimary,
  backgroundColor: e.styleguideColors.backgroundPrimary,
  borderRadius: e.borderRadius.base,
  padding: e.padding[r],
  boxShadow: e.boxShadow.tooltip,
  transition: "opacity 250ms ease-in-out",
  opacity: 0,
  fontSize: me({
    sm: "1.3rem",
    xs: "0.8125rem"
  }, n),
  lineHeight: me({
    sm: "1.5rem",
    xs: "1.25rem"
  }, t),
  "&[data-enter]": {
    opacity: 1
  }
})), _t = ge.forwardRef(({
  children: e,
  limitWidth: t,
  tooltipContent: n,
  caption: r,
  additionalBlock: i,
  monotype: o,
  lineHeight: s = "sm",
  scale: a = "sm",
  paddingScale: l = 2,
  ...c
}, u) => {
  const d = pu({
    animated: 250
  }), f = t ? typeof t == "string" ? t : "500px" : void 0;
  return e == null ? null : n == null ? /* @__PURE__ */ h(We, { children: e }) : /* @__PURE__ */ z(We, { children: [
    /* @__PURE__ */ h(fu, { ...d, ref: e.ref, ...e.props, children: (p) => ge.cloneElement(e, p) }),
    /* @__PURE__ */ h(gu, { paddingScale: l, ...d, ...c, children: /* @__PURE__ */ h("div", { style: {
      maxWidth: f
    }, children: /* @__PURE__ */ z(Ee, { itemsSpacing: 8, children: [
      /* @__PURE__ */ z(Ee, { children: [
        /* @__PURE__ */ h(Ot, { size: 2, variation: "gray", children: r }),
        /* @__PURE__ */ h(ne, { size: 3, monotype: o, lineHeight: s, scale: a, children: n })
      ] }),
      i
    ] }) }) })
  ] });
});
function U0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function mu(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      var i = !1;
      try {
        i = this instanceof r;
      } catch {
      }
      return i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var nn, ki;
function vu() {
  return ki || (ki = 1, nn = function() {
    var e = document.getSelection();
    if (!e.rangeCount)
      return function() {
      };
    for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++)
      n.push(e.getRangeAt(r));
    switch (t.tagName.toUpperCase()) {
      // .toUpperCase handles XHTML
      case "INPUT":
      case "TEXTAREA":
        t.blur();
        break;
      default:
        t = null;
        break;
    }
    return e.removeAllRanges(), function() {
      e.type === "Caret" && e.removeAllRanges(), e.rangeCount || n.forEach(function(i) {
        e.addRange(i);
      }), t && t.focus();
    };
  }), nn;
}
var rn, Oi;
function yu() {
  if (Oi) return rn;
  Oi = 1;
  var e = vu(), t = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
  }, n = "Copy to clipboard: #{key}, Enter";
  function r(o) {
    var s = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return o.replace(/#{\s*key\s*}/g, s);
  }
  function i(o, s) {
    var a, l, c, u, d, f, p = !1;
    s || (s = {}), a = s.debug || !1;
    try {
      c = e(), u = document.createRange(), d = document.getSelection(), f = document.createElement("span"), f.textContent = o, f.ariaHidden = "true", f.style.all = "unset", f.style.position = "fixed", f.style.top = 0, f.style.clip = "rect(0, 0, 0, 0)", f.style.whiteSpace = "pre", f.style.webkitUserSelect = "text", f.style.MozUserSelect = "text", f.style.msUserSelect = "text", f.style.userSelect = "text", f.addEventListener("copy", function(m) {
        if (m.stopPropagation(), s.format)
          if (m.preventDefault(), typeof m.clipboardData > "u") {
            a && console.warn("unable to use e.clipboardData"), a && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var g = t[s.format] || t.default;
            window.clipboardData.setData(g, o);
          } else
            m.clipboardData.clearData(), m.clipboardData.setData(s.format, o);
        s.onCopy && (m.preventDefault(), s.onCopy(m.clipboardData));
      }), document.body.appendChild(f), u.selectNodeContents(f), d.addRange(u);
      var y = document.execCommand("copy");
      if (!y)
        throw new Error("copy command was unsuccessful");
      p = !0;
    } catch (m) {
      a && console.error("unable to copy using execCommand: ", m), a && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(s.format || "text", o), s.onCopy && s.onCopy(window.clipboardData), p = !0;
      } catch (g) {
        a && console.error("unable to copy using clipboardData: ", g), a && console.error("falling back to prompt"), l = r("message" in s ? s.message : n), window.prompt(l, o);
      }
    } finally {
      d && (typeof d.removeRange == "function" ? d.removeRange(u) : d.removeAllRanges()), f && document.body.removeChild(f), c();
    }
    return p;
  }
  return rn = i, rn;
}
var Cu = yu();
const Qa = /* @__PURE__ */ U0(Cu), Ti = {
  blue: "contentBlue",
  gray: "contentTertiary",
  green: "contentGreen"
}, wu = La(["0%{opacity:0;}25%{opacity:1;}75%{opacity:1;}100%{opacity:0;}"]), bu = S.span.withConfig({
  displayName: "copy__StyledContainer",
  componentId: "sc-1fp6ltg-0"
})(["line-height:20px;cursor:pointer;position:relative;> :not(:first-child){margin-left:8px;}pointer-events:", ";animation:", ";& svg{color:", ";path{fill:", ";}:hover{color:", ";path{fill:", ";}}:active{color:", ";path{fill:", ";}}}"], (e) => e.isCopied ? "none" : "initial", (e) => e.isCopied ? tl(["", " 3s"], wu) : "none", (e) => e.isCopied ? e.theme.styleguideColors.contentGreen : e.theme.styleguideColors.contentTertiary, (e) => e.isCopied ? e.theme.styleguideColors.contentGreen : e.theme.styleguideColors.contentTertiary, (e) => e.theme.styleguideColors.fillPrimaryBlue, (e) => e.theme.styleguideColors.fillPrimaryBlue, (e) => e.theme.styleguideColors.fillPrimaryBlueClick, (e) => e.theme.styleguideColors.fillPrimaryBlueClick), xu = S(ve).withConfig({
  displayName: "copy__StyledSvgIcon",
  componentId: "sc-1fp6ltg-1"
})(({
  theme: e,
  variation: t = "blue"
}) => e.withMedia({
  color: e.styleguideColors[Ti[t]],
  path: {
    fill: e.styleguideColors[Ti[t]]
  }
})), Lu = ({
  value: e,
  label: t = "Copy Public Key",
  copiedLabel: n = "Copied!",
  variation: r,
  styles: i,
  minified: o = !1
}) => {
  const [s, a] = fe(!1);
  return /* @__PURE__ */ h(J, { style: i, align: "center", itemsSpacing: 8, children: /* @__PURE__ */ z(bu, { onClick: (f) => {
    f.stopPropagation(), e && (Qa(e), a(!0), setTimeout(() => a(!1), 2800));
  }, isCopied: s, children: [
    /* @__PURE__ */ h(xu, { variation: r, size: 16, src: s ? Kn : Oa, role: "img", alt: "Copy button" }),
    !o && /* @__PURE__ */ h(ne, { size: 3, variation: s ? "green" : "black", children: s ? n : t })
  ] }) });
}, _u = (e, t) => ({
  primaryBlue: {
    color: e.styleguideColors.contentBlue,
    hover: e.styleguideColors.fillPrimaryBlueHover,
    active: e.styleguideColors.fillPrimaryBlueClick
  },
  primaryRed: {
    color: e.styleguideColors.fillPrimaryRed,
    hover: e.styleguideColors.fillPrimaryRedHover,
    active: e.styleguideColors.fillPrimaryRedClick
  },
  hash: {
    color: e.styleguideColors.contentBlue,
    hover: e.styleguideColors.contentRed,
    active: e.styleguideColors.fillPrimaryRedClick
  }
})[t] || {
  color: "inherit",
  hover: "inherit",
  active: "inherit"
}, Mu = S.a.withConfig({
  displayName: "link__StyledLink",
  componentId: "sc-npzuii-0"
})(({
  theme: e,
  color: t,
  lineHeight: n = "sm"
}) => {
  const r = _u(e, t);
  return {
    textDecoration: "none",
    lineHeight: me({
      sm: "1.5rem",
      xs: "1.25rem"
    }, n),
    color: r.color,
    "&:hover, &:hover > *": {
      color: r.hover
    },
    "&:active, &:active > *": {
      color: r.active
    }
  };
}), Ja = ge.forwardRef(function({
  color: t = "primaryRed",
  ...n
}, r) {
  return /* @__PURE__ */ h(Mu, { ref: r, target: "_blank", color: t, ...n });
});
var In = function(e, t) {
  return In = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, In(e, t);
};
function ct(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  In(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var ee = function() {
  return ee = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, ee.apply(this, arguments);
};
function Su(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function Lt(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, o; r < i; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function pt(e, t) {
  var n = t && t.cache ? t.cache : Hu, r = t && t.serializer ? t.serializer : Ou, i = t && t.strategy ? t.strategy : Pu;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function Iu(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Eu(e, t, n, r) {
  var i = Iu(r) ? r : n(r), o = t.get(i);
  return typeof o > "u" && (o = e.call(this, r), t.set(i, o)), o;
}
function e1(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), o = t.get(i);
  return typeof o > "u" && (o = e.apply(this, r), t.set(i, o)), o;
}
function t1(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function Pu(e, t) {
  var n = e.length === 1 ? Eu : e1;
  return t1(e, this, n, t.cache.create(), t.serializer);
}
function ku(e, t) {
  return t1(e, this, e1, t.cache.create(), t.serializer);
}
var Ou = function() {
  return JSON.stringify(arguments);
}, Tu = (
  /** @class */
  function() {
    function e() {
      this.cache = /* @__PURE__ */ Object.create(null);
    }
    return e.prototype.get = function(t) {
      return this.cache[t];
    }, e.prototype.set = function(t, n) {
      this.cache[t] = n;
    }, e;
  }()
), Hu = {
  create: function() {
    return new Tu();
  }
}, ht = {
  variadic: ku
}, de;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(de || (de = {}));
var Ie;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(Ie || (Ie = {}));
var c2;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(c2 || (c2 = {}));
function Hi(e) {
  return e.type === Ie.literal;
}
function Du(e) {
  return e.type === Ie.argument;
}
function n1(e) {
  return e.type === Ie.number;
}
function r1(e) {
  return e.type === Ie.date;
}
function i1(e) {
  return e.type === Ie.time;
}
function o1(e) {
  return e.type === Ie.select;
}
function a1(e) {
  return e.type === Ie.plural;
}
function Ru(e) {
  return e.type === Ie.pound;
}
function s1(e) {
  return e.type === Ie.tag;
}
function l1(e) {
  return !!(e && typeof e == "object" && e.type === c2.number);
}
function En(e) {
  return !!(e && typeof e == "object" && e.type === c2.dateTime);
}
var c1 = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Nu = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Au(e) {
  var t = {};
  return e.replace(Nu, function(n) {
    var r = n.length;
    switch (n[0]) {
      // Era
      case "G":
        t.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      // Year
      case "y":
        t.year = r === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      // Quarter
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      // Month
      case "M":
      case "L":
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
        break;
      // Week
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][r - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      // Weekday
      case "E":
        t.weekday = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "e":
        if (r < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "c":
        if (r < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      // Period
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      // am, pm, noon, midnight
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      // Hour
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      // Minute
      case "m":
        t.minute = ["numeric", "2-digit"][r - 1];
        break;
      // Second
      case "s":
        t.second = ["numeric", "2-digit"][r - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      // Zone
      case "z":
        t.timeZoneName = r < 4 ? "short" : "long";
        break;
      case "Z":
      // 1..3, 4, 5: The ISO8601 varios formats
      case "O":
      // 1, 4: milliseconds in day short, long
      case "v":
      // 1, 4: generic non-location format
      case "V":
      // 1, 2, 3, 4: time zone ID or city
      case "X":
      // 1, 2, 3, 4: The ISO8601 varios formats
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), t;
}
var Bu = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Fu(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Bu).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = t; r < i.length; r++) {
    var o = i[r], s = o.split("/");
    if (s.length === 0)
      throw new Error("Invalid number skeleton");
    for (var a = s[0], l = s.slice(1), c = 0, u = l; c < u.length; c++) {
      var d = u[c];
      if (d.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: a, options: l });
  }
  return n;
}
function Vu(e) {
  return e.replace(/^(.*?)-/, "");
}
var Di = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, u1 = /^(@+)?(\+|#+)?[rs]?$/g, $u = /(\*)(0+)|(#+)(0+)|(0+)/g, d1 = /^(0+)$/;
function Ri(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(u1, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function f1(e) {
  switch (e) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function Zu(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !d1.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Ni(e) {
  var t = {}, n = f1(e);
  return n || t;
}
function Wu(e) {
  for (var t = {}, n = 0, r = e; n < r.length; n++) {
    var i = r[n];
    switch (i.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = i.options[0];
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        t.style = "unit", t.unit = Vu(i.options[0]);
        continue;
      case "compact-short":
      case "K":
        t.notation = "compact", t.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        t.notation = "compact", t.compactDisplay = "long";
        continue;
      case "scientific":
        t = ee(ee(ee({}, t), { notation: "scientific" }), i.options.reduce(function(l, c) {
          return ee(ee({}, l), Ni(c));
        }, {}));
        continue;
      case "engineering":
        t = ee(ee(ee({}, t), { notation: "engineering" }), i.options.reduce(function(l, c) {
          return ee(ee({}, l), Ni(c));
        }, {}));
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        t.currencyDisplay = "code", t.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        t.currencyDisplay = "name", t.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(i.options[0]);
        continue;
      case "rounding-mode-floor":
        t.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        t.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        t.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        t.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        t.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        t.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        t.roundingMode = "halfExpand";
        continue;
      // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
      case "integer-width":
        if (i.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        i.options[0].replace($u, function(l, c, u, d, f, p) {
          if (c)
            t.minimumIntegerDigits = u.length;
          else {
            if (d && f)
              throw new Error("We currently do not support maximum integer digits");
            if (p)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (d1.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Di.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Di, function(l, c, u, d, f, p) {
        return u === "*" ? t.minimumFractionDigits = c.length : d && d[0] === "#" ? t.maximumFractionDigits = d.length : f && p ? (t.minimumFractionDigits = f.length, t.maximumFractionDigits = f.length + p.length) : (t.minimumFractionDigits = c.length, t.maximumFractionDigits = c.length), "";
      });
      var o = i.options[0];
      o === "w" ? t = ee(ee({}, t), { trailingZeroDisplay: "stripIfInteger" }) : o && (t = ee(ee({}, t), Ri(o)));
      continue;
    }
    if (u1.test(i.stem)) {
      t = ee(ee({}, t), Ri(i.stem));
      continue;
    }
    var s = f1(i.stem);
    s && (t = ee(ee({}, t), s));
    var a = Zu(i.stem);
    a && (t = ee(ee({}, t), a));
  }
  return t;
}
var J2 = {
  "001": [
    "H",
    "h"
  ],
  419: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AD: [
    "H",
    "hB"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AS: [
    "h",
    "H"
  ],
  AT: [
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  AX: [
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BI: [
    "H",
    "h"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  BO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  BQ: [
    "H"
  ],
  BR: [
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BT: [
    "h",
    "H"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BY: [
    "H",
    "h"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CD: [
    "hB",
    "H"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  CI: [
    "H",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CL: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CP: [
    "H"
  ],
  CR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CU: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CV: [
    "H",
    "hB"
  ],
  CW: [
    "H",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CZ: [
    "H"
  ],
  DE: [
    "H",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DJ: [
    "h",
    "H"
  ],
  DK: [
    "H"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EC: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  EE: [
    "H",
    "hB"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  FI: [
    "H"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FO: [
    "H",
    "h"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  GF: [
    "H",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GH: [
    "h",
    "H"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GL: [
    "H",
    "h"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GT: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HN: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  HR: [
    "H",
    "hB"
  ],
  HU: [
    "H",
    "h"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  ID: [
    "H"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IN: [
    "h",
    "H"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  IS: [
    "H"
  ],
  IT: [
    "H",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JP: [
    "H",
    "K",
    "h"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LS: [
    "h",
    "H"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  MF: [
    "H",
    "hB"
  ],
  MG: [
    "H",
    "h"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ML: [
    "H"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MT: [
    "H",
    "h"
  ],
  MU: [
    "H",
    "h"
  ],
  MV: [
    "H",
    "h"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MX: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NC: [
    "H",
    "hB"
  ],
  NE: [
    "H"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NI: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NL: [
    "H",
    "hB"
  ],
  NO: [
    "H",
    "h"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  PG: [
    "h",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  PL: [
    "H",
    "h"
  ],
  PM: [
    "H",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PT: [
    "H",
    "hB"
  ],
  PW: [
    "h",
    "H"
  ],
  PY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  RU: [
    "H"
  ],
  RW: [
    "H",
    "h"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SE: [
    "H"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  SO: [
    "h",
    "H"
  ],
  SR: [
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  SV: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TH: [
    "H",
    "h"
  ],
  TJ: [
    "H",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TM: [
    "H",
    "h"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  TR: [
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VN: [
    "H",
    "h"
  ],
  VU: [
    "h",
    "H"
  ],
  WF: [
    "H",
    "hB"
  ],
  WS: [
    "h",
    "H"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YT: [
    "H",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZW: [
    "H",
    "h"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-HK": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-IL": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "en-MY": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ]
};
function Uu(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var o = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        o++, r++;
      var s = 1 + (o & 1), a = o < 2 ? 1 : 3 + (o >> 1), l = "a", c = ju(t);
      for ((c == "H" || c == "k") && (a = 0); a-- > 0; )
        n += l;
      for (; s-- > 0; )
        n = c + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function ju(e) {
  var t = e.hourCycle;
  if (t === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  e.hourCycles && // @ts-ignore
  e.hourCycles.length && (t = e.hourCycles[0]), t)
    switch (t) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var n = e.language, r;
  n !== "root" && (r = e.maximize().region);
  var i = J2[r || ""] || J2[n || ""] || J2["".concat(n, "-001")] || J2["001"];
  return i[0];
}
var on, Gu = new RegExp("^".concat(c1.source, "*")), zu = new RegExp("".concat(c1.source, "*$"));
function pe(e, t) {
  return { start: e, end: t };
}
var Ku = !!String.prototype.startsWith && "_a".startsWith("a", 1), qu = !!String.fromCodePoint, Xu = !!Object.fromEntries, Yu = !!String.prototype.codePointAt, Qu = !!String.prototype.trimStart, Ju = !!String.prototype.trimEnd, e4 = !!Number.isSafeInteger, t4 = e4 ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Pn = !0;
try {
  var n4 = h1("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Pn = ((on = n4.exec("a")) === null || on === void 0 ? void 0 : on[0]) === "a";
} catch {
  Pn = !1;
}
var Ai = Ku ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), kn = qu ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var r = "", i = t.length, o = 0, s; i > o; ) {
      if (s = t[o++], s > 1114111)
        throw RangeError(s + " is not a valid code point");
      r += s < 65536 ? String.fromCharCode(s) : String.fromCharCode(((s -= 65536) >> 10) + 55296, s % 1024 + 56320);
    }
    return r;
  }
), Bi = (
  // native
  Xu ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var o = i[r], s = o[0], a = o[1];
        n[s] = a;
      }
      return n;
    }
  )
), p1 = Yu ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var r = t.length;
    if (!(n < 0 || n >= r)) {
      var i = t.charCodeAt(n), o;
      return i < 55296 || i > 56319 || n + 1 === r || (o = t.charCodeAt(n + 1)) < 56320 || o > 57343 ? i : (i - 55296 << 10) + (o - 56320) + 65536;
    }
  }
), r4 = Qu ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Gu, "");
  }
), i4 = Ju ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(zu, "");
  }
);
function h1(e, t) {
  return new RegExp(e, t);
}
var On;
if (Pn) {
  var Fi = h1("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  On = function(t, n) {
    var r;
    Fi.lastIndex = n;
    var i = Fi.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  On = function(t, n) {
    for (var r = []; ; ) {
      var i = p1(t, n);
      if (i === void 0 || g1(i) || l4(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return kn.apply(void 0, r);
  };
var o4 = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, n, r) {
      for (var i = []; !this.isEOF(); ) {
        var o = this.char();
        if (o === 123) {
          var s = this.parseArgument(t, r);
          if (s.err)
            return s;
          i.push(s.val);
        } else {
          if (o === 125 && t > 0)
            break;
          if (o === 35 && (n === "plural" || n === "selectordinal")) {
            var a = this.clonePosition();
            this.bump(), i.push({
              type: Ie.pound,
              location: pe(a, this.clonePosition())
            });
          } else if (o === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(de.UNMATCHED_CLOSING_TAG, pe(this.clonePosition(), this.clonePosition()));
          } else if (o === 60 && !this.ignoreTag && Tn(this.peek() || 0)) {
            var s = this.parseTag(t, n);
            if (s.err)
              return s;
            i.push(s.val);
          } else {
            var s = this.parseLiteral(t, n);
            if (s.err)
              return s;
            i.push(s.val);
          }
        }
      }
      return { val: i, err: null };
    }, e.prototype.parseTag = function(t, n) {
      var r = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: Ie.literal,
            value: "<".concat(i, "/>"),
            location: pe(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var o = this.parseMessage(t + 1, n, !0);
        if (o.err)
          return o;
        var s = o.val, a = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Tn(this.char()))
            return this.error(de.INVALID_TAG, pe(a, this.clonePosition()));
          var l = this.clonePosition(), c = this.parseTagName();
          return i !== c ? this.error(de.UNMATCHED_CLOSING_TAG, pe(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: Ie.tag,
              value: i,
              children: s,
              location: pe(r, this.clonePosition())
            },
            err: null
          } : this.error(de.INVALID_TAG, pe(a, this.clonePosition())));
        } else
          return this.error(de.UNCLOSED_TAG, pe(r, this.clonePosition()));
      } else
        return this.error(de.INVALID_TAG, pe(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && s4(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var o = this.tryParseQuote(n);
        if (o) {
          i += o;
          continue;
        }
        var s = this.tryParseUnquoted(t, n);
        if (s) {
          i += s;
          continue;
        }
        var a = this.tryParseLeftAngleBracket();
        if (a) {
          i += a;
          continue;
        }
        break;
      }
      var l = pe(r, this.clonePosition());
      return {
        val: { type: Ie.literal, value: i, location: l },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !a4(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, e.prototype.tryParseQuote = function(t) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        // '{', '<', '>', '}'
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (t === "plural" || t === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var r = this.char();
        if (r === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(r);
        this.bump();
      }
      return kn.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), kn(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(de.EXPECT_ARGUMENT_CLOSING_BRACE, pe(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(de.EMPTY_ARGUMENT, pe(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(de.MALFORMED_ARGUMENT, pe(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(de.EXPECT_ARGUMENT_CLOSING_BRACE, pe(r, this.clonePosition()));
      switch (this.char()) {
        // Simple argument: `{name}`
        case 125:
          return this.bump(), {
            val: {
              type: Ie.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: pe(r, this.clonePosition())
            },
            err: null
          };
        // Argument with options: `{name, format, ...}`
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(de.EXPECT_ARGUMENT_CLOSING_BRACE, pe(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(de.MALFORMED_ARGUMENT, pe(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = On(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var o = this.clonePosition(), s = pe(t, o);
      return { value: r, location: s };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var o, s = this.clonePosition(), a = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (a) {
        case "":
          return this.error(de.EXPECT_ARGUMENT_TYPE, pe(s, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var c = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var u = this.clonePosition(), d = this.parseSimpleArgStyleIfPossible();
            if (d.err)
              return d;
            var f = i4(d.val);
            if (f.length === 0)
              return this.error(de.EXPECT_ARGUMENT_STYLE, pe(this.clonePosition(), this.clonePosition()));
            var p = pe(u, this.clonePosition());
            c = { style: f, styleLocation: p };
          }
          var y = this.tryParseArgumentClose(i);
          if (y.err)
            return y;
          var m = pe(i, this.clonePosition());
          if (c && Ai(c?.style, "::", 0)) {
            var g = r4(c.style.slice(2));
            if (a === "number") {
              var d = this.parseNumberSkeletonFromString(g, c.styleLocation);
              return d.err ? d : {
                val: { type: Ie.number, value: r, location: m, style: d.val },
                err: null
              };
            } else {
              if (g.length === 0)
                return this.error(de.EXPECT_DATE_TIME_SKELETON, m);
              var _ = g;
              this.locale && (_ = Uu(g, this.locale));
              var f = {
                type: c2.dateTime,
                pattern: _,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Au(_) : {}
              }, C = a === "date" ? Ie.date : Ie.time;
              return {
                val: { type: C, value: r, location: m, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: a === "number" ? Ie.number : a === "date" ? Ie.date : Ie.time,
              value: r,
              location: m,
              style: (o = c?.style) !== null && o !== void 0 ? o : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var v = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(de.EXPECT_SELECT_ARGUMENT_OPTIONS, pe(v, ee({}, v)));
          this.bumpSpace();
          var w = this.parseIdentifierIfPossible(), b = 0;
          if (a !== "select" && w.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(de.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, pe(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var d = this.tryParseDecimalInteger(de.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, de.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (d.err)
              return d;
            this.bumpSpace(), w = this.parseIdentifierIfPossible(), b = d.val;
          }
          var I = this.tryParsePluralOrSelectOptions(t, a, n, w);
          if (I.err)
            return I;
          var y = this.tryParseArgumentClose(i);
          if (y.err)
            return y;
          var O = pe(i, this.clonePosition());
          return a === "select" ? {
            val: {
              type: Ie.select,
              value: r,
              options: Bi(I.val),
              location: O
            },
            err: null
          } : {
            val: {
              type: Ie.plural,
              value: r,
              options: Bi(I.val),
              offset: b,
              pluralType: a === "plural" ? "cardinal" : "ordinal",
              location: O
            },
            err: null
          };
        }
        default:
          return this.error(de.INVALID_ARGUMENT_TYPE, pe(s, l));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(de.EXPECT_ARGUMENT_CLOSING_BRACE, pe(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(de.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, pe(i, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            t += 1, this.bump();
            break;
          }
          case 125: {
            if (t > 0)
              t -= 1;
            else
              return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(n.offset, this.offset()),
        err: null
      };
    }, e.prototype.parseNumberSkeletonFromString = function(t, n) {
      var r = [];
      try {
        r = Fu(t);
      } catch {
        return this.error(de.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: c2.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Wu(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var o, s = !1, a = [], l = /* @__PURE__ */ new Set(), c = i.value, u = i.location; ; ) {
        if (c.length === 0) {
          var d = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(de.EXPECT_PLURAL_ARGUMENT_SELECTOR, de.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            u = pe(d, this.clonePosition()), c = this.message.slice(d.offset, this.offset());
          } else
            break;
        }
        if (l.has(c))
          return this.error(n === "select" ? de.DUPLICATE_SELECT_ARGUMENT_SELECTOR : de.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
        c === "other" && (s = !0), this.bumpSpace();
        var p = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? de.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : de.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, pe(this.clonePosition(), this.clonePosition()));
        var y = this.parseMessage(t + 1, n, r);
        if (y.err)
          return y;
        var m = this.tryParseArgumentClose(p);
        if (m.err)
          return m;
        a.push([
          c,
          {
            value: y.val,
            location: pe(p, this.clonePosition())
          }
        ]), l.add(c), this.bumpSpace(), o = this.parseIdentifierIfPossible(), c = o.value, u = o.location;
      }
      return a.length === 0 ? this.error(n === "select" ? de.EXPECT_SELECT_ARGUMENT_SELECTOR : de.EXPECT_PLURAL_ARGUMENT_SELECTOR, pe(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(de.MISSING_OTHER_CLAUSE, pe(this.clonePosition(), this.clonePosition())) : { val: a, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var o = !1, s = 0; !this.isEOF(); ) {
        var a = this.char();
        if (a >= 48 && a <= 57)
          o = !0, s = s * 10 + (a - 48), this.bump();
        else
          break;
      }
      var l = pe(i, this.clonePosition());
      return o ? (s *= r, t4(s) ? { val: s, err: null } : this.error(n, l)) : this.error(t, l);
    }, e.prototype.offset = function() {
      return this.position.offset;
    }, e.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, e.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, e.prototype.char = function() {
      var t = this.position.offset;
      if (t >= this.message.length)
        throw Error("out of bound");
      var n = p1(this.message, t);
      if (n === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, e.prototype.error = function(t, n) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: n
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (Ai(this.message, t, this.offset())) {
        for (var n = 0; n < t.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var n = this.offset(), r = this.message.indexOf(t, n);
      return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var n = this.offset();
        if (n === t)
          break;
        if (n > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && g1(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function Tn(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function a4(e) {
  return Tn(e) || e === 47;
}
function s4(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function g1(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function l4(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Hn(e) {
  e.forEach(function(t) {
    if (delete t.location, o1(t) || a1(t))
      for (var n in t.options)
        delete t.options[n].location, Hn(t.options[n].value);
    else n1(t) && l1(t.style) || (r1(t) || i1(t)) && En(t.style) ? delete t.style.location : s1(t) && Hn(t.children);
  });
}
function c4(e, t) {
  t === void 0 && (t = {}), t = ee({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new o4(e, t).parse();
  if (n.err) {
    var r = SyntaxError(de[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t?.captureLocation || Hn(n.val), n.val;
}
var wt;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(wt || (wt = {}));
var Rt = (
  /** @class */
  function(e) {
    ct(t, e);
    function t(n, r, i) {
      var o = e.call(this, n) || this;
      return o.code = r, o.originalMessage = i, o;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Vi = (
  /** @class */
  function(e) {
    ct(t, e);
    function t(n, r, i, o) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), wt.INVALID_VALUE, o) || this;
    }
    return t;
  }(Rt)
), u4 = (
  /** @class */
  function(e) {
    ct(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), wt.INVALID_VALUE, i) || this;
    }
    return t;
  }(Rt)
), d4 = (
  /** @class */
  function(e) {
    ct(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), wt.MISSING_VALUE, r) || this;
    }
    return t;
  }(Rt)
), Ve;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(Ve || (Ve = {}));
function f4(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== Ve.literal || n.type !== Ve.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function p4(e) {
  return typeof e == "function";
}
function y0(e, t, n, r, i, o, s) {
  if (e.length === 1 && Hi(e[0]))
    return [
      {
        type: Ve.literal,
        value: e[0].value
      }
    ];
  for (var a = [], l = 0, c = e; l < c.length; l++) {
    var u = c[l];
    if (Hi(u)) {
      a.push({
        type: Ve.literal,
        value: u.value
      });
      continue;
    }
    if (Ru(u)) {
      typeof o == "number" && a.push({
        type: Ve.literal,
        value: n.getNumberFormat(t).format(o)
      });
      continue;
    }
    var d = u.value;
    if (!(i && d in i))
      throw new d4(d, s);
    var f = i[d];
    if (Du(u)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), a.push({
        type: typeof f == "string" ? Ve.literal : Ve.object,
        value: f
      });
      continue;
    }
    if (r1(u)) {
      var p = typeof u.style == "string" ? r.date[u.style] : En(u.style) ? u.style.parsedOptions : void 0;
      a.push({
        type: Ve.literal,
        value: n.getDateTimeFormat(t, p).format(f)
      });
      continue;
    }
    if (i1(u)) {
      var p = typeof u.style == "string" ? r.time[u.style] : En(u.style) ? u.style.parsedOptions : r.time.medium;
      a.push({
        type: Ve.literal,
        value: n.getDateTimeFormat(t, p).format(f)
      });
      continue;
    }
    if (n1(u)) {
      var p = typeof u.style == "string" ? r.number[u.style] : l1(u.style) ? u.style.parsedOptions : void 0;
      p && p.scale && (f = f * (p.scale || 1)), a.push({
        type: Ve.literal,
        value: n.getNumberFormat(t, p).format(f)
      });
      continue;
    }
    if (s1(u)) {
      var y = u.children, m = u.value, g = i[m];
      if (!p4(g))
        throw new u4(m, "function", s);
      var _ = y0(y, t, n, r, i, o), C = g(_.map(function(b) {
        return b.value;
      }));
      Array.isArray(C) || (C = [C]), a.push.apply(a, C.map(function(b) {
        return {
          type: typeof b == "string" ? Ve.literal : Ve.object,
          value: b
        };
      }));
    }
    if (o1(u)) {
      var v = u.options[f] || u.options.other;
      if (!v)
        throw new Vi(u.value, f, Object.keys(u.options), s);
      a.push.apply(a, y0(v.value, t, n, r, i));
      continue;
    }
    if (a1(u)) {
      var v = u.options["=".concat(f)];
      if (!v) {
        if (!Intl.PluralRules)
          throw new Rt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, wt.MISSING_INTL_API, s);
        var w = n.getPluralRules(t, { type: u.pluralType }).select(f - (u.offset || 0));
        v = u.options[w] || u.options.other;
      }
      if (!v)
        throw new Vi(u.value, f, Object.keys(u.options), s);
      a.push.apply(a, y0(v.value, t, n, r, i, f - (u.offset || 0)));
      continue;
    }
  }
  return f4(a);
}
function h4(e, t) {
  return t ? ee(ee(ee({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = ee(ee({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function g4(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = h4(e[r], t[r]), n;
  }, ee({}, e)) : e;
}
function an(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, n) {
          e[t] = n;
        }
      };
    }
  };
}
function m4(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: pt(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, Lt([void 0], n, !1)))();
    }, {
      cache: an(e.number),
      strategy: ht.variadic
    }),
    getDateTimeFormat: pt(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Lt([void 0], n, !1)))();
    }, {
      cache: an(e.dateTime),
      strategy: ht.variadic
    }),
    getPluralRules: pt(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, Lt([void 0], n, !1)))();
    }, {
      cache: an(e.pluralRules),
      strategy: ht.variadic
    })
  };
}
var m1 = (
  /** @class */
  function() {
    function e(t, n, r, i) {
      n === void 0 && (n = e.defaultLocale);
      var o = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(l) {
        var c = o.formatToParts(l);
        if (c.length === 1)
          return c[0].value;
        var u = c.reduce(function(d, f) {
          return !d.length || f.type !== Ve.literal || typeof d[d.length - 1] != "string" ? d.push(f.value) : d[d.length - 1] += f.value, d;
        }, []);
        return u.length <= 1 ? u[0] || "" : u;
      }, this.formatToParts = function(l) {
        return y0(o.ast, o.locales, o.formatters, o.formats, l, void 0, o.message);
      }, this.resolvedOptions = function() {
        var l;
        return {
          locale: ((l = o.resolvedLocale) === null || l === void 0 ? void 0 : l.toString()) || Intl.NumberFormat.supportedLocalesOf(o.locales)[0]
        };
      }, this.getAst = function() {
        return o.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var s = i || {};
        s.formatters;
        var a = Su(s, ["formatters"]);
        this.ast = e.__parse(t, ee(ee({}, a), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = g4(e.formats, r), this.formatters = i && i.formatters || m4(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      if (!(typeof Intl.Locale > "u")) {
        var n = Intl.NumberFormat.supportedLocalesOf(t);
        return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
      }
    }, e.__parse = c4, e.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, e;
  }()
), Wt;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(Wt || (Wt = {}));
var $2 = (
  /** @class */
  function(e) {
    ct(t, e);
    function t(n, r, i) {
      var o = this, s = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
      return o = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, `
`).concat(s ? `
`.concat(s.message, `
`).concat(s.stack) : "")) || this, o.code = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(o, t), o;
    }
    return t;
  }(Error)
), v4 = (
  /** @class */
  function(e) {
    ct(t, e);
    function t(n, r) {
      return e.call(this, Wt.UNSUPPORTED_FORMATTER, n, r) || this;
    }
    return t;
  }($2)
), y4 = (
  /** @class */
  function(e) {
    ct(t, e);
    function t(n, r) {
      return e.call(this, Wt.INVALID_CONFIG, n, r) || this;
    }
    return t;
  }($2)
), $i = (
  /** @class */
  function(e) {
    ct(t, e);
    function t(n, r) {
      return e.call(this, Wt.MISSING_DATA, n, r) || this;
    }
    return t;
  }($2)
), tt = (
  /** @class */
  function(e) {
    ct(t, e);
    function t(n, r, i) {
      var o = e.call(this, Wt.FORMAT_ERROR, "".concat(n, `
Locale: `).concat(r, `
`), i) || this;
      return o.locale = r, o;
    }
    return t;
  }($2)
), sn = (
  /** @class */
  function(e) {
    ct(t, e);
    function t(n, r, i, o) {
      var s = e.call(this, "".concat(n, `
MessageID: `).concat(i?.id, `
Default Message: `).concat(i?.defaultMessage, `
Description: `).concat(i?.description, `
`), r, o) || this;
      return s.descriptor = i, s.locale = r, s;
    }
    return t;
  }(tt)
), C4 = (
  /** @class */
  function(e) {
    ct(t, e);
    function t(n, r) {
      var i = e.call(this, Wt.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(r, '", using ').concat(n.defaultMessage ? "default message (".concat(typeof n.defaultMessage == "string" ? n.defaultMessage : n.defaultMessage.map(function(o) {
        var s;
        return (s = o.value) !== null && s !== void 0 ? s : JSON.stringify(o);
      }).join(), ")") : "id", " as fallback.")) || this;
      return i.descriptor = n, i;
    }
    return t;
  }($2)
);
function w4(e, t, n) {
  if (n === void 0 && (n = Error), !e)
    throw new n(t);
}
function h2(e, t, n) {
  return n === void 0 && (n = {}), t.reduce(function(r, i) {
    return i in e ? r[i] = e[i] : i in n && (r[i] = n[i]), r;
  }, {});
}
var b4 = function(e) {
  process.env.NODE_ENV !== "production" && console.error(e);
}, x4 = function(e) {
  process.env.NODE_ENV !== "production" && console.warn(e);
}, L4 = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: b4,
  onWarn: x4
};
function v1() {
  return {
    dateTime: {},
    number: {},
    message: {},
    relativeTime: {},
    pluralRules: {},
    list: {},
    displayNames: {}
  };
}
function Nt(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, n) {
          e[t] = n;
        }
      };
    }
  };
}
function _4(e) {
  e === void 0 && (e = v1());
  var t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = pt(function() {
    for (var a, l = [], c = 0; c < arguments.length; c++)
      l[c] = arguments[c];
    return new ((a = Intl.DateTimeFormat).bind.apply(a, Lt([void 0], l, !1)))();
  }, {
    cache: Nt(e.dateTime),
    strategy: ht.variadic
  }), o = pt(function() {
    for (var a, l = [], c = 0; c < arguments.length; c++)
      l[c] = arguments[c];
    return new ((a = Intl.NumberFormat).bind.apply(a, Lt([void 0], l, !1)))();
  }, {
    cache: Nt(e.number),
    strategy: ht.variadic
  }), s = pt(function() {
    for (var a, l = [], c = 0; c < arguments.length; c++)
      l[c] = arguments[c];
    return new ((a = Intl.PluralRules).bind.apply(a, Lt([void 0], l, !1)))();
  }, {
    cache: Nt(e.pluralRules),
    strategy: ht.variadic
  });
  return {
    getDateTimeFormat: i,
    getNumberFormat: o,
    getMessageFormat: pt(function(a, l, c, u) {
      return new m1(a, l, c, ee({ formatters: {
        getNumberFormat: o,
        getDateTimeFormat: i,
        getPluralRules: s
      } }, u || {}));
    }, {
      cache: Nt(e.message),
      strategy: ht.variadic
    }),
    getRelativeTimeFormat: pt(function() {
      for (var a = [], l = 0; l < arguments.length; l++)
        a[l] = arguments[l];
      return new (t.bind.apply(t, Lt([void 0], a, !1)))();
    }, {
      cache: Nt(e.relativeTime),
      strategy: ht.variadic
    }),
    getPluralRules: s,
    getListFormat: pt(function() {
      for (var a = [], l = 0; l < arguments.length; l++)
        a[l] = arguments[l];
      return new (n.bind.apply(n, Lt([void 0], a, !1)))();
    }, {
      cache: Nt(e.list),
      strategy: ht.variadic
    }),
    getDisplayNames: pt(function() {
      for (var a = [], l = 0; l < arguments.length; l++)
        a[l] = arguments[l];
      return new (r.bind.apply(r, Lt([void 0], a, !1)))();
    }, {
      cache: Nt(e.displayNames),
      strategy: ht.variadic
    })
  };
}
function rr(e, t, n, r) {
  var i = e && e[t], o;
  if (i && (o = i[n]), o)
    return o;
  r(new v4("No ".concat(t, " format named: ").concat(n)));
}
function e0(e, t) {
  return Object.keys(e).reduce(function(n, r) {
    return n[r] = ee({ timeZone: t }, e[r]), n;
  }, {});
}
function Zi(e, t) {
  var n = Object.keys(ee(ee({}, e), t));
  return n.reduce(function(r, i) {
    return r[i] = ee(ee({}, e[i] || {}), t[i] || {}), r;
  }, {});
}
function Wi(e, t) {
  if (!t)
    return e;
  var n = m1.formats;
  return ee(ee(ee({}, n), e), { date: Zi(e0(n.date, t), e0(e.date || {}, t)), time: Zi(e0(n.time, t), e0(e.time || {}, t)) });
}
var Ui = function(e, t, n, r, i) {
  var o = e.locale, s = e.formats, a = e.messages, l = e.defaultLocale, c = e.defaultFormats, u = e.fallbackOnEmptyString, d = e.onError, f = e.timeZone, p = e.defaultRichTextElements;
  n === void 0 && (n = { id: "" });
  var y = n.id, m = n.defaultMessage;
  w4(!!y, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var g = String(y), _ = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    a && Object.prototype.hasOwnProperty.call(a, g) && a[g]
  );
  if (Array.isArray(_) && _.length === 1 && _[0].type === Ie.literal)
    return _[0].value;
  if (!r && _ && typeof _ == "string" && !p)
    return _.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = ee(ee({}, p), r || {}), s = Wi(s, f), c = Wi(c, f), !_) {
    if (u === !1 && _ === "")
      return _;
    if ((!m || o && o.toLowerCase() !== l.toLowerCase()) && d(new C4(n, o)), m)
      try {
        var C = t.getMessageFormat(m, l, c, i);
        return C.format(r);
      } catch (v) {
        return d(new sn('Error formatting default message for: "'.concat(g, '", rendering default message verbatim'), o, n, v)), typeof m == "string" ? m : g;
      }
    return g;
  }
  try {
    var C = t.getMessageFormat(_, o, s, ee({ formatters: t }, i || {}));
    return C.format(r);
  } catch (v) {
    d(new sn('Error formatting message: "'.concat(g, '", using ').concat(m ? "default message" : "id", " as fallback."), o, n, v));
  }
  if (m)
    try {
      var C = t.getMessageFormat(m, l, c, i);
      return C.format(r);
    } catch (v) {
      d(new sn('Error formatting the default message for: "'.concat(g, '", rendering message verbatim'), o, n, v));
    }
  return typeof _ == "string" ? _ : typeof m == "string" ? m : g;
}, M4 = [
  "formatMatcher",
  "timeZone",
  "hour12",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "hourCycle",
  "dateStyle",
  "timeStyle",
  "calendar",
  // 'dayPeriod',
  "numberingSystem",
  "fractionalSecondDigits"
];
function Z2(e, t, n, r) {
  var i = e.locale, o = e.formats, s = e.onError, a = e.timeZone;
  r === void 0 && (r = {});
  var l = r.format, c = ee(ee({}, a && { timeZone: a }), l && rr(o, t, l, s)), u = h2(r, M4, c);
  return t === "time" && !u.hour && !u.minute && !u.second && !u.timeStyle && !u.dateStyle && (u = ee(ee({}, u), { hour: "numeric", minute: "numeric" })), n(i, u);
}
function S4(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], o = n[1], s = o === void 0 ? {} : o, a = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Z2(e, "date", t, s).format(a);
  } catch (l) {
    e.onError(new tt("Error formatting date.", e.locale, l));
  }
  return String(a);
}
function I4(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], o = n[1], s = o === void 0 ? {} : o, a = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Z2(e, "time", t, s).format(a);
  } catch (l) {
    e.onError(new tt("Error formatting time.", e.locale, l));
  }
  return String(a);
}
function E4(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], o = n[1], s = n[2], a = s === void 0 ? {} : s, l = typeof i == "string" ? new Date(i || 0) : i, c = typeof o == "string" ? new Date(o || 0) : o;
  try {
    return Z2(e, "dateTimeRange", t, a).formatRange(l, c);
  } catch (u) {
    e.onError(new tt("Error formatting date time range.", e.locale, u));
  }
  return String(l);
}
function P4(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], o = n[1], s = o === void 0 ? {} : o, a = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Z2(e, "date", t, s).formatToParts(a);
  } catch (l) {
    e.onError(new tt("Error formatting date.", e.locale, l));
  }
  return [];
}
function k4(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var i = n[0], o = n[1], s = o === void 0 ? {} : o, a = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return Z2(e, "time", t, s).formatToParts(a);
  } catch (l) {
    e.onError(new tt("Error formatting time.", e.locale, l));
  }
  return [];
}
var O4 = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function T4(e, t, n, r) {
  var i = e.locale, o = e.onError, s = Intl.DisplayNames;
  s || o(new Rt(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, wt.MISSING_INTL_API));
  var a = h2(r, O4);
  try {
    return t(i, a).of(n);
  } catch (l) {
    o(new tt("Error formatting display name.", i, l));
  }
}
var H4 = [
  "type",
  "style"
], ji = Date.now();
function D4(e) {
  return "".concat(ji, "_").concat(e, "_").concat(ji);
}
function R4(e, t, n, r) {
  r === void 0 && (r = {});
  var i = y1(e, t, n, r).reduce(function(o, s) {
    var a = s.value;
    return typeof a != "string" ? o.push(a) : typeof o[o.length - 1] == "string" ? o[o.length - 1] += a : o.push(a), o;
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function y1(e, t, n, r) {
  var i = e.locale, o = e.onError;
  r === void 0 && (r = {});
  var s = Intl.ListFormat;
  s || o(new Rt(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, wt.MISSING_INTL_API));
  var a = h2(r, H4);
  try {
    var l = {}, c = n.map(function(u, d) {
      if (typeof u == "object") {
        var f = D4(d);
        return l[f] = u, f;
      }
      return String(u);
    });
    return t(i, a).formatToParts(c).map(function(u) {
      return u.type === "literal" ? u : ee(ee({}, u), { value: l[u.value] || u.value });
    });
  } catch (u) {
    o(new tt("Error formatting list.", i, u));
  }
  return n;
}
var N4 = ["type"];
function A4(e, t, n, r) {
  var i = e.locale, o = e.onError;
  r === void 0 && (r = {}), Intl.PluralRules || o(new Rt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, wt.MISSING_INTL_API));
  var s = h2(r, N4);
  try {
    return t(i, s).select(n);
  } catch (a) {
    o(new tt("Error formatting plural.", i, a));
  }
  return "other";
}
var B4 = ["numeric", "style"];
function F4(e, t, n) {
  var r = e.locale, i = e.formats, o = e.onError;
  n === void 0 && (n = {});
  var s = n.format, a = !!s && rr(i, "relative", s, o) || {}, l = h2(n, B4, a);
  return t(r, l);
}
function V4(e, t, n, r, i) {
  i === void 0 && (i = {}), r || (r = "second");
  var o = Intl.RelativeTimeFormat;
  o || e.onError(new Rt(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, wt.MISSING_INTL_API));
  try {
    return F4(e, t, i).format(n, r);
  } catch (s) {
    e.onError(new tt("Error formatting relative time.", e.locale, s));
  }
  return String(n);
}
var $4 = [
  "style",
  "currency",
  "unit",
  "unitDisplay",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  // ES2020 NumberFormat
  "compactDisplay",
  "currencyDisplay",
  "currencySign",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "numberingSystem",
  // ES2023 NumberFormat
  "trailingZeroDisplay",
  "roundingPriority",
  "roundingIncrement",
  "roundingMode"
];
function C1(e, t, n) {
  var r = e.locale, i = e.formats, o = e.onError;
  n === void 0 && (n = {});
  var s = n.format, a = s && rr(i, "number", s, o) || {}, l = h2(n, $4, a);
  return t(r, l);
}
function Z4(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return C1(e, t, r).format(n);
  } catch (i) {
    e.onError(new tt("Error formatting number.", e.locale, i));
  }
  return String(n);
}
function W4(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return C1(e, t, r).formatToParts(n);
  } catch (i) {
    e.onError(new tt("Error formatting number.", e.locale, i));
  }
  return [];
}
function U4(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function j4(e) {
  e.onWarn && e.defaultRichTextElements && U4(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`);
}
function G4(e, t) {
  var n = _4(t), r = ee(ee({}, L4), e), i = r.locale, o = r.defaultLocale, s = r.onError;
  return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && s ? s(new $i('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(o, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && s && s(new $i('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(o, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : (s && s(new y4('"locale" was not configured, using "'.concat(o, '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), j4(r), ee(ee({}, r), { formatters: n, formatNumber: Z4.bind(null, r, n.getNumberFormat), formatNumberToParts: W4.bind(null, r, n.getNumberFormat), formatRelativeTime: V4.bind(null, r, n.getRelativeTimeFormat), formatDate: S4.bind(null, r, n.getDateTimeFormat), formatDateToParts: P4.bind(null, r, n.getDateTimeFormat), formatTime: I4.bind(null, r, n.getDateTimeFormat), formatDateTimeRange: E4.bind(null, r, n.getDateTimeFormat), formatTimeToParts: k4.bind(null, r, n.getDateTimeFormat), formatPlural: A4.bind(null, r, n.getPluralRules), formatMessage: Ui.bind(null, r, n), $t: Ui.bind(null, r, n), formatList: R4.bind(null, r, n.getListFormat), formatListToParts: y1.bind(null, r, n.getListFormat), formatDisplayName: T4.bind(null, r, n.getDisplayNames) });
}
const Gi = 6e4, zi = 525600, Ki = 43200, qi = 1440, Xi = Symbol.for("constructDateFrom");
function ir(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Xi in e ? e[Xi](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Ut(e, t) {
  return ir(t || e, e);
}
let z4 = {};
function w1() {
  return z4;
}
function Yi(e, t) {
  const n = w1(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = Ut(e, t?.in), o = i.getDay(), s = (o < r ? 7 : 0) + o - r;
  return i.setDate(i.getDate() - s), i.setHours(0, 0, 0, 0), i;
}
function Qi(e) {
  const t = Ut(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function b1(e, ...t) {
  const n = ir.bind(
    null,
    e || t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function K4(e, t) {
  const n = +Ut(e) - +Ut(t);
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function q4(e) {
  return ir(e, Date.now());
}
function X4(e) {
  return (t) => {
    const r = (e ? Math[e] : Math.trunc)(t);
    return r === 0 ? 0 : r;
  };
}
const Y4 = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Q4 = (e, t, n) => {
  let r;
  const i = Y4[e];
  return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Me(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const J4 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ed = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, td = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, nd = {
  date: Me({
    formats: J4,
    defaultWidth: "full"
  }),
  time: Me({
    formats: ed,
    defaultWidth: "full"
  }),
  dateTime: Me({
    formats: td,
    defaultWidth: "full"
  })
}, rd = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, id = (e, t, n, r) => rd[e];
function ie(e) {
  return (t, n) => {
    const r = n?.context ? String(n.context) : "standalone";
    let i;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, a = n?.width ? String(n.width) : s;
      i = e.formattingValues[a] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, a = n?.width ? String(n.width) : e.defaultWidth;
      i = e.values[a] || e.values[s];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[o];
  };
}
const od = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ad = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, sd = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, ld = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, cd = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, ud = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, dd = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, fd = {
  ordinalNumber: dd,
  era: ie({
    values: od,
    defaultWidth: "wide"
  }),
  quarter: ie({
    values: ad,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ie({
    values: sd,
    defaultWidth: "wide"
  }),
  day: ie({
    values: ld,
    defaultWidth: "wide"
  }),
  dayPeriod: ie({
    values: cd,
    defaultWidth: "wide",
    formattingValues: ud,
    defaultFormattingWidth: "wide"
  })
};
function oe(e) {
  return (t, n = {}) => {
    const r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(i);
    if (!o)
      return null;
    const s = o[0], a = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(a) ? hd(a, (d) => d.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      pd(a, (d) => d.test(s))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(l) : l, c = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(c)
    ) : c;
    const u = t.slice(s.length);
    return { value: c, rest: u };
  };
}
function pd(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function hd(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function bt(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const i = r[0], o = t.match(e.parsePattern);
    if (!o) return null;
    let s = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const a = t.slice(i.length);
    return { value: s, rest: a };
  };
}
const gd = /^(\d+)(th|st|nd|rd)?/i, md = /\d+/i, vd = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, yd = {
  any: [/^b/i, /^(a|c)/i]
}, Cd = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, wd = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, bd = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, xd = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Ld = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, _d = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Md = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Sd = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Id = {
  ordinalNumber: bt({
    matchPattern: gd,
    parsePattern: md,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: oe({
    matchPatterns: vd,
    defaultMatchWidth: "wide",
    parsePatterns: yd,
    defaultParseWidth: "any"
  }),
  quarter: oe({
    matchPatterns: Cd,
    defaultMatchWidth: "wide",
    parsePatterns: wd,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: oe({
    matchPatterns: bd,
    defaultMatchWidth: "wide",
    parsePatterns: xd,
    defaultParseWidth: "any"
  }),
  day: oe({
    matchPatterns: Ld,
    defaultMatchWidth: "wide",
    parsePatterns: _d,
    defaultParseWidth: "any"
  }),
  dayPeriod: oe({
    matchPatterns: Md,
    defaultMatchWidth: "any",
    parsePatterns: Sd,
    defaultParseWidth: "any"
  })
}, x1 = {
  code: "en-US",
  formatDistance: Q4,
  formatLong: nd,
  formatRelative: id,
  localize: fd,
  match: Id,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function ln(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
function Ed(e, t, n) {
  const r = w1(), i = n?.locale ?? r.locale ?? x1, o = K4(e, t);
  if (isNaN(o))
    throw new RangeError("Invalid time value");
  const s = Object.assign({}, n, {
    addSuffix: n?.addSuffix,
    comparison: o
  }), [a, l] = b1(
    n?.in,
    ...o > 0 ? [t, e] : [e, t]
  ), c = X4(n?.roundingMethod ?? "round"), u = l.getTime() - a.getTime(), d = u / Gi, f = Qi(l) - Qi(a), p = (u - f) / Gi, y = n?.unit;
  let m;
  if (y ? m = y : d < 1 ? m = "second" : d < 60 ? m = "minute" : d < qi ? m = "hour" : p < Ki ? m = "day" : p < zi ? m = "month" : m = "year", m === "second") {
    const g = c(u / 1e3);
    return i.formatDistance("xSeconds", g, s);
  } else if (m === "minute") {
    const g = c(d);
    return i.formatDistance("xMinutes", g, s);
  } else if (m === "hour") {
    const g = c(d / 60);
    return i.formatDistance("xHours", g, s);
  } else if (m === "day") {
    const g = c(p / qi);
    return i.formatDistance("xDays", g, s);
  } else if (m === "month") {
    const g = c(p / Ki);
    return g === 12 && y !== "month" ? i.formatDistance("xYears", 1, s) : i.formatDistance("xMonths", g, s);
  } else {
    const g = c(p / zi);
    return i.formatDistance("xYears", g, s);
  }
}
function Pd(e, t) {
  return Ed(e, q4(e), t);
}
function kd(e, t) {
  const n = Ut(e, t?.in);
  if (isNaN(+n))
    throw new RangeError("Invalid time value");
  const r = t?.format ?? "extended";
  let i = "";
  const o = r === "extended" ? "-" : "";
  {
    const s = ln(n.getDate(), 2), a = ln(n.getMonth() + 1, 2);
    i = `${ln(n.getFullYear(), 4)}${o}${a}${o}${s}`;
  }
  return i;
}
function H2(e, t, n) {
  const [r, i] = b1(
    n?.in,
    e,
    t
  );
  return +Yi(r, n) == +Yi(i, n);
}
const ae = (e) => typeof e == "string", v2 = () => {
  let e, t;
  const n = new Promise((r, i) => {
    e = r, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}, Ji = (e) => e == null ? "" : "" + e, Od = (e, t, n) => {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}, Td = /###/g, eo = (e) => e && e.indexOf("###") > -1 ? e.replace(Td, ".") : e, to = (e) => !e || ae(e), S2 = (e, t, n) => {
  const r = ae(t) ? t.split(".") : t;
  let i = 0;
  for (; i < r.length - 1; ) {
    if (to(e)) return {};
    const o = eo(r[i]);
    !e[o] && n && (e[o] = new n()), Object.prototype.hasOwnProperty.call(e, o) ? e = e[o] : e = {}, ++i;
  }
  return to(e) ? {} : {
    obj: e,
    k: eo(r[i])
  };
}, no = (e, t, n) => {
  const {
    obj: r,
    k: i
  } = S2(e, t, Object);
  if (r !== void 0 || t.length === 1) {
    r[i] = n;
    return;
  }
  let o = t[t.length - 1], s = t.slice(0, t.length - 1), a = S2(e, s, Object);
  for (; a.obj === void 0 && s.length; )
    o = `${s[s.length - 1]}.${o}`, s = s.slice(0, s.length - 1), a = S2(e, s, Object), a?.obj && typeof a.obj[`${a.k}.${o}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${o}`] = n;
}, Hd = (e, t, n, r) => {
  const {
    obj: i,
    k: o
  } = S2(e, t, Object);
  i[o] = i[o] || [], i[o].push(n);
}, M0 = (e, t) => {
  const {
    obj: n,
    k: r
  } = S2(e, t);
  if (n && Object.prototype.hasOwnProperty.call(n, r))
    return n[r];
}, Dd = (e, t, n) => {
  const r = M0(e, n);
  return r !== void 0 ? r : M0(t, n);
}, L1 = (e, t, n) => {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? ae(e[r]) || e[r] instanceof String || ae(t[r]) || t[r] instanceof String ? n && (e[r] = t[r]) : L1(e[r], t[r], n) : e[r] = t[r]);
  return e;
}, Xt = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Rd = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Nd = (e) => ae(e) ? e.replace(/[&<>"'\/]/g, (t) => Rd[t]) : e;
class Ad {
  constructor(t) {
    this.capacity = t, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0)
      return n;
    const r = new RegExp(t);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, r), this.regExpQueue.push(t), r;
  }
}
const Bd = [" ", ",", "?", "!", ";"], Fd = new Ad(20), Vd = (e, t, n) => {
  t = t || "", n = n || "";
  const r = Bd.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
  if (r.length === 0) return !0;
  const i = Fd.getRegExp(`(${r.map((s) => s === "?" ? "\\?" : s).join("|")})`);
  let o = !i.test(e);
  if (!o) {
    const s = e.indexOf(n);
    s > 0 && !i.test(e.substring(0, s)) && (o = !0);
  }
  return o;
}, Dn = (e, t, n = ".") => {
  if (!e) return;
  if (e[t])
    return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
  const r = t.split(n);
  let i = e;
  for (let o = 0; o < r.length; ) {
    if (!i || typeof i != "object")
      return;
    let s, a = "";
    for (let l = o; l < r.length; ++l)
      if (l !== o && (a += n), a += r[l], s = i[a], s !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof s) > -1 && l < r.length - 1)
          continue;
        o += l - o + 1;
        break;
      }
    i = s;
  }
  return i;
}, D2 = (e) => e?.replace("_", "-"), $d = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, t) {
    console?.[e]?.apply?.(console, t);
  }
};
class S0 {
  constructor(t, n = {}) {
    this.init(t, n);
  }
  init(t, n = {}) {
    this.prefix = n.prefix || "i18next:", this.logger = t || $d, this.options = n, this.debug = n.debug;
  }
  log(...t) {
    return this.forward(t, "log", "", !0);
  }
  warn(...t) {
    return this.forward(t, "warn", "", !0);
  }
  error(...t) {
    return this.forward(t, "error", "");
  }
  deprecate(...t) {
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, i) {
    return i && !this.debug ? null : (ae(t[0]) && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new S0(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new S0(this.logger, t);
  }
}
var gt = new S0();
class j0 {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return t.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const i = this.observers[r].get(n) || 0;
      this.observers[r].set(n, i + 1);
    }), this;
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t, ...n) {
    this.observers[t] && Array.from(this.observers[t].entries()).forEach(([i, o]) => {
      for (let s = 0; s < o; s++)
        i(...n);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([i, o]) => {
      for (let s = 0; s < o; s++)
        i.apply(i, [t, ...n]);
    });
  }
}
class ro extends j0 {
  constructor(t, n = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = t || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r, i = {}) {
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, s = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    t.indexOf(".") > -1 ? a = t.split(".") : (a = [t, n], r && (Array.isArray(r) ? a.push(...r) : ae(r) && o ? a.push(...r.split(o)) : a.push(r)));
    const l = M0(this.data, a);
    return !l && !n && !r && t.indexOf(".") > -1 && (t = a[0], n = a[1], r = a.slice(2).join(".")), l || !s || !ae(r) ? l : Dn(this.data?.[t]?.[n], r, o);
  }
  addResource(t, n, r, i, o = {
    silent: !1
  }) {
    const s = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let a = [t, n];
    r && (a = a.concat(s ? r.split(s) : r)), t.indexOf(".") > -1 && (a = t.split("."), i = n, n = a[1]), this.addNamespaces(n), no(this.data, a, i), o.silent || this.emit("added", t, n, r, i);
  }
  addResources(t, n, r, i = {
    silent: !1
  }) {
    for (const o in r)
      (ae(r[o]) || Array.isArray(r[o])) && this.addResource(t, n, o, r[o], {
        silent: !0
      });
    i.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, i, o, s = {
    silent: !1,
    skipCopy: !1
  }) {
    let a = [t, n];
    t.indexOf(".") > -1 && (a = t.split("."), i = r, r = n, n = a[1]), this.addNamespaces(n);
    let l = M0(this.data, a) || {};
    s.skipCopy || (r = JSON.parse(JSON.stringify(r))), i ? L1(l, r, o) : l = {
      ...l,
      ...r
    }, no(this.data, a, l), s.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return n || (n = this.options.defaultNS), this.getResource(t, n);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!(n && Object.keys(n) || []).find((i) => n[i] && Object.keys(n[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var _1 = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, i) {
    return e.forEach((o) => {
      t = this.processors[o]?.process(t, n, r, i) ?? t;
    }), t;
  }
};
const io = {}, oo = (e) => !ae(e) && typeof e != "boolean" && typeof e != "number";
class I0 extends j0 {
  constructor(t, n = {}) {
    super(), Od(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = gt.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t, n = {
    interpolation: {}
  }) {
    const r = {
      ...n
    };
    return t == null ? !1 : this.resolve(t, r)?.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let o = n.ns || this.options.defaultNS || [];
    const s = r && t.indexOf(r) > -1, a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !Vd(t, r, i);
    if (s && !a) {
      const l = t.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: t,
          namespaces: ae(o) ? [o] : o
        };
      const c = t.split(r);
      (r !== i || r === i && this.options.ns.indexOf(c[0]) > -1) && (o = c.shift()), t = c.join(i);
    }
    return {
      key: t,
      namespaces: ae(o) ? [o] : o
    };
  }
  translate(t, n, r) {
    let i = typeof n == "object" ? {
      ...n
    } : n;
    if (typeof i != "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), typeof options == "object" && (i = {
      ...i
    }), i || (i = {}), t == null) return "";
    Array.isArray(t) || (t = [String(t)]);
    const o = i.returnDetails !== void 0 ? i.returnDetails : this.options.returnDetails, s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, {
      key: a,
      namespaces: l
    } = this.extractFromKey(t[t.length - 1], i), c = l[l.length - 1];
    let u = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
    u === void 0 && (u = ":");
    const d = i.lng || this.language, f = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (d?.toLowerCase() === "cimode")
      return f ? o ? {
        res: `${c}${u}${a}`,
        usedKey: a,
        exactUsedKey: a,
        usedLng: d,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(i)
      } : `${c}${u}${a}` : o ? {
        res: a,
        usedKey: a,
        exactUsedKey: a,
        usedLng: d,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(i)
      } : a;
    const p = this.resolve(t, i);
    let y = p?.res;
    const m = p?.usedKey || a, g = p?.exactUsedKey || a, _ = ["[object Number]", "[object Function]", "[object RegExp]"], C = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays, v = !this.i18nFormat || this.i18nFormat.handleAsObject, w = i.count !== void 0 && !ae(i.count), b = I0.hasDefaultValue(i), I = w ? this.pluralResolver.getSuffix(d, i.count, i) : "", O = i.ordinal && w ? this.pluralResolver.getSuffix(d, i.count, {
      ordinal: !1
    }) : "", V = w && !i.ordinal && i.count === 0, A = V && i[`defaultValue${this.options.pluralSeparator}zero`] || i[`defaultValue${I}`] || i[`defaultValue${O}`] || i.defaultValue;
    let N = y;
    v && !y && b && (N = A);
    const T = oo(N), D = Object.prototype.toString.apply(N);
    if (v && N && T && _.indexOf(D) < 0 && !(ae(C) && Array.isArray(N))) {
      if (!i.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const $ = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, N, {
          ...i,
          ns: l
        }) : `key '${a} (${this.language})' returned an object instead of string.`;
        return o ? (p.res = $, p.usedParams = this.getUsedParamsDetails(i), p) : $;
      }
      if (s) {
        const $ = Array.isArray(N), x = $ ? [] : {}, E = $ ? g : m;
        for (const R in N)
          if (Object.prototype.hasOwnProperty.call(N, R)) {
            const L = `${E}${s}${R}`;
            b && !y ? x[R] = this.translate(L, {
              ...i,
              defaultValue: oo(A) ? A[R] : void 0,
              joinArrays: !1,
              ns: l
            }) : x[R] = this.translate(L, {
              ...i,
              joinArrays: !1,
              ns: l
            }), x[R] === L && (x[R] = N[R]);
          }
        y = x;
      }
    } else if (v && ae(C) && Array.isArray(y))
      y = y.join(C), y && (y = this.extendTranslation(y, t, i, r));
    else {
      let $ = !1, x = !1;
      !this.isValidLookup(y) && b && ($ = !0, y = A), this.isValidLookup(y) || (x = !0, y = a);
      const R = (i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && x ? void 0 : y, L = b && A !== y && this.options.updateMissing;
      if (x || $ || L) {
        if (this.logger.log(L ? "updateKey" : "missingKey", d, c, a, L ? A : y), s) {
          const P = this.resolve(a, {
            ...i,
            keySeparator: !1
          });
          P && P.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let k = [];
        const Z = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Z && Z[0])
          for (let P = 0; P < Z.length; P++)
            k.push(Z[P]);
        else this.options.saveMissingTo === "all" ? k = this.languageUtils.toResolveHierarchy(i.lng || this.language) : k.push(i.lng || this.language);
        const M = (P, H, B) => {
          const F = b && B !== y ? B : R;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(P, c, H, F, L, i) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(P, c, H, F, L, i), this.emit("missingKey", P, c, H, y);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && w ? k.forEach((P) => {
          const H = this.pluralResolver.getSuffixes(P, i);
          V && i[`defaultValue${this.options.pluralSeparator}zero`] && H.indexOf(`${this.options.pluralSeparator}zero`) < 0 && H.push(`${this.options.pluralSeparator}zero`), H.forEach((B) => {
            M([P], a + B, i[`defaultValue${B}`] || A);
          });
        }) : M(k, a, A));
      }
      y = this.extendTranslation(y, t, i, p, r), x && y === a && this.options.appendNamespaceToMissingKey && (y = `${c}${u}${a}`), (x || $) && this.options.parseMissingKeyHandler && (y = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}${u}${a}` : a, $ ? y : void 0, i));
    }
    return o ? (p.res = y, p.usedParams = this.getUsedParamsDetails(i), p) : y;
  }
  extendTranslation(t, n, r, i, o) {
    if (this.i18nFormat?.parse)
      t = this.i18nFormat.parse(t, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
        resolved: i
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const l = ae(t) && (r?.interpolation?.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let c;
      if (l) {
        const d = t.match(this.interpolator.nestingRegexp);
        c = d && d.length;
      }
      let u = r.replace && !ae(r.replace) ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (u = {
        ...this.options.interpolation.defaultVariables,
        ...u
      }), t = this.interpolator.interpolate(t, u, r.lng || this.language || i.usedLng, r), l) {
        const d = t.match(this.interpolator.nestingRegexp), f = d && d.length;
        c < f && (r.nest = !1);
      }
      !r.lng && i && i.res && (r.lng = this.language || i.usedLng), r.nest !== !1 && (t = this.interpolator.nest(t, (...d) => o?.[0] === d[0] && !r.context ? (this.logger.warn(`It seems you are nesting recursively key: ${d[0]} in key: ${n[0]}`), null) : this.translate(...d, n), r)), r.interpolation && this.interpolator.reset();
    }
    const s = r.postProcess || this.options.postProcess, a = ae(s) ? [s] : s;
    return t != null && a?.length && r.applyPostProcessor !== !1 && (t = _1.handle(a, t, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...i,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), t;
  }
  resolve(t, n = {}) {
    let r, i, o, s, a;
    return ae(t) && (t = [t]), t.forEach((l) => {
      if (this.isValidLookup(r)) return;
      const c = this.extractFromKey(l, n), u = c.key;
      i = u;
      let d = c.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const f = n.count !== void 0 && !ae(n.count), p = f && !n.ordinal && n.count === 0, y = n.context !== void 0 && (ae(n.context) || typeof n.context == "number") && n.context !== "", m = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      d.forEach((g) => {
        this.isValidLookup(r) || (a = g, !io[`${m[0]}-${g}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(a) && (io[`${m[0]}-${g}`] = !0, this.logger.warn(`key "${i}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((_) => {
          if (this.isValidLookup(r)) return;
          s = _;
          const C = [u];
          if (this.i18nFormat?.addLookupKeys)
            this.i18nFormat.addLookupKeys(C, u, _, g, n);
          else {
            let w;
            f && (w = this.pluralResolver.getSuffix(_, n.count, n));
            const b = `${this.options.pluralSeparator}zero`, I = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (C.push(u + w), n.ordinal && w.indexOf(I) === 0 && C.push(u + w.replace(I, this.options.pluralSeparator)), p && C.push(u + b)), y) {
              const O = `${u}${this.options.contextSeparator}${n.context}`;
              C.push(O), f && (C.push(O + w), n.ordinal && w.indexOf(I) === 0 && C.push(O + w.replace(I, this.options.pluralSeparator)), p && C.push(O + b));
            }
          }
          let v;
          for (; v = C.pop(); )
            this.isValidLookup(r) || (o = v, r = this.getResource(_, g, v, n));
        }));
      });
    }), {
      res: r,
      usedKey: i,
      exactUsedKey: o,
      usedLng: s,
      usedNS: a
    };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, n, r, i = {}) {
    return this.i18nFormat?.getResource ? this.i18nFormat.getResource(t, n, r, i) : this.resourceStore.getResource(t, n, r, i);
  }
  getUsedParamsDetails(t = {}) {
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = t.replace && !ae(t.replace);
    let i = r ? t.replace : t;
    if (r && typeof t.count < "u" && (i.count = t.count), this.options.interpolation.defaultVariables && (i = {
      ...this.options.interpolation.defaultVariables,
      ...i
    }), !r) {
      i = {
        ...i
      };
      for (const o of n)
        delete i[o];
    }
    return i;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0)
        return !0;
    return !1;
  }
}
class ao {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = gt.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = D2(t), !t || t.indexOf("-") < 0) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = D2(t), !t || t.indexOf("-") < 0) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (ae(t) && t.indexOf("-") > -1) {
      let n;
      try {
        n = Intl.getCanonicalLocales(t)[0];
      } catch {
      }
      return n && this.options.lowerCaseLng && (n = n.toLowerCase()), n || (this.options.lowerCaseLng ? t.toLowerCase() : t);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return t.forEach((r) => {
      if (n) return;
      const i = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i);
    }), !n && this.options.supportedLngs && t.forEach((r) => {
      if (n) return;
      const i = this.getScriptPartFromCode(r);
      if (this.isSupportedCode(i)) return n = i;
      const o = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(o)) return n = o;
      n = this.options.supportedLngs.find((s) => {
        if (s === o) return s;
        if (!(s.indexOf("-") < 0 && o.indexOf("-") < 0) && (s.indexOf("-") > 0 && o.indexOf("-") < 0 && s.substring(0, s.indexOf("-")) === o || s.indexOf(o) === 0 && o.length > 1))
          return s;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (typeof t == "function" && (t = t(n)), ae(t) && (t = [t]), Array.isArray(t)) return t;
    if (!n) return t.default || [];
    let r = t[n];
    return r || (r = t[this.getScriptPartFromCode(n)]), r || (r = t[this.formatLanguageCode(n)]), r || (r = t[this.getLanguagePartFromCode(n)]), r || (r = t.default), r || [];
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes((n === !1 ? [] : n) || this.options.fallbackLng || [], t), i = [], o = (s) => {
      s && (this.isSupportedCode(s) ? i.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`));
    };
    return ae(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(t))) : ae(t) && o(this.formatLanguageCode(t)), r.forEach((s) => {
      i.indexOf(s) < 0 && o(this.formatLanguageCode(s));
    }), i;
  }
}
const so = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, lo = {
  select: (e) => e === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Zd {
  constructor(t, n = {}) {
    this.languageUtils = t, this.options = n, this.logger = gt.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t, n = {}) {
    const r = D2(t === "dev" ? "en" : t), i = n.ordinal ? "ordinal" : "cardinal", o = JSON.stringify({
      cleanedCode: r,
      type: i
    });
    if (o in this.pluralRulesCache)
      return this.pluralRulesCache[o];
    let s;
    try {
      s = new Intl.PluralRules(r, {
        type: i
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), lo;
      if (!t.match(/-|_/)) return lo;
      const l = this.languageUtils.getLanguagePartFromCode(t);
      s = this.getRule(l, n);
    }
    return this.pluralRulesCache[o] = s, s;
  }
  needsPlural(t, n = {}) {
    let r = this.getRule(t, n);
    return r || (r = this.getRule("dev", n)), r?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(t, n, r = {}) {
    return this.getSuffixes(t, r).map((i) => `${n}${i}`);
  }
  getSuffixes(t, n = {}) {
    let r = this.getRule(t, n);
    return r || (r = this.getRule("dev", n)), r ? r.resolvedOptions().pluralCategories.sort((i, o) => so[i] - so[o]).map((i) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : [];
  }
  getSuffix(t, n, r = {}) {
    const i = this.getRule(t, r);
    return i ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(n)}` : (this.logger.warn(`no plural rule found for: ${t}`), this.getSuffix("dev", n, r));
  }
}
const co = (e, t, n, r = ".", i = !0) => {
  let o = Dd(e, t, n);
  return !o && i && ae(n) && (o = Dn(e, n, r), o === void 0 && (o = Dn(t, n, r))), o;
}, cn = (e) => e.replace(/\$/g, "$$$$");
class Wd {
  constructor(t = {}) {
    this.logger = gt.create("interpolator"), this.options = t, this.format = t?.interpolation?.format || ((n) => n), this.init(t);
  }
  init(t = {}) {
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: i,
      prefix: o,
      prefixEscaped: s,
      suffix: a,
      suffixEscaped: l,
      formatSeparator: c,
      unescapeSuffix: u,
      unescapePrefix: d,
      nestingPrefix: f,
      nestingPrefixEscaped: p,
      nestingSuffix: y,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: g,
      maxReplaces: _,
      alwaysFormat: C
    } = t.interpolation;
    this.escape = n !== void 0 ? n : Nd, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = i !== void 0 ? i : !1, this.prefix = o ? Xt(o) : s || "{{", this.suffix = a ? Xt(a) : l || "}}", this.formatSeparator = c || ",", this.unescapePrefix = u ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = f ? Xt(f) : p || Xt("$t("), this.nestingSuffix = y ? Xt(y) : m || Xt(")"), this.nestingOptionsSeparator = g || ",", this.maxReplaces = _ || 1e3, this.alwaysFormat = C !== void 0 ? C : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) => n?.source === r ? (n.lastIndex = 0, n) : new RegExp(r, "g");
    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(t, n, r, i) {
    let o, s, a;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, c = (p) => {
      if (p.indexOf(this.formatSeparator) < 0) {
        const _ = co(n, l, p, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(_, void 0, r, {
          ...i,
          ...n,
          interpolationkey: p
        }) : _;
      }
      const y = p.split(this.formatSeparator), m = y.shift().trim(), g = y.join(this.formatSeparator).trim();
      return this.format(co(n, l, m, this.options.keySeparator, this.options.ignoreJSONStructure), g, r, {
        ...i,
        ...n,
        interpolationkey: m
      });
    };
    this.resetRegExp();
    const u = i?.missingInterpolationHandler || this.options.missingInterpolationHandler, d = i?.interpolation?.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (p) => cn(p)
    }, {
      regex: this.regexp,
      safeValue: (p) => this.escapeValue ? cn(this.escape(p)) : cn(p)
    }].forEach((p) => {
      for (a = 0; o = p.regex.exec(t); ) {
        const y = o[1].trim();
        if (s = c(y), s === void 0)
          if (typeof u == "function") {
            const g = u(t, o, i);
            s = ae(g) ? g : "";
          } else if (i && Object.prototype.hasOwnProperty.call(i, y))
            s = "";
          else if (d) {
            s = o[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${y} for interpolating ${t}`), s = "";
        else !ae(s) && !this.useRawValueToEscape && (s = Ji(s));
        const m = p.safeValue(s);
        if (t = t.replace(o[0], m), d ? (p.regex.lastIndex += s.length, p.regex.lastIndex -= o[0].length) : p.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, n, r = {}) {
    let i, o, s;
    const a = (l, c) => {
      const u = this.nestingOptionsSeparator;
      if (l.indexOf(u) < 0) return l;
      const d = l.split(new RegExp(`${u}[ ]*{`));
      let f = `{${d[1]}`;
      l = d[0], f = this.interpolate(f, s);
      const p = f.match(/'/g), y = f.match(/"/g);
      ((p?.length ?? 0) % 2 === 0 && !y || y.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        s = JSON.parse(f), c && (s = {
          ...c,
          ...s
        });
      } catch (m) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, m), `${l}${u}${f}`;
      }
      return s.defaultValue && s.defaultValue.indexOf(this.prefix) > -1 && delete s.defaultValue, l;
    };
    for (; i = this.nestingRegexp.exec(t); ) {
      let l = [];
      s = {
        ...r
      }, s = s.replace && !ae(s.replace) ? s.replace : s, s.applyPostProcessor = !1, delete s.defaultValue;
      const c = /{.*}/.test(i[1]) ? i[1].lastIndexOf("}") + 1 : i[1].indexOf(this.formatSeparator);
      if (c !== -1 && (l = i[1].slice(c).split(this.formatSeparator).map((u) => u.trim()).filter(Boolean), i[1] = i[1].slice(0, c)), o = n(a.call(this, i[1].trim(), s), s), o && i[0] === t && !ae(o)) return o;
      ae(o) || (o = Ji(o)), o || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`), o = ""), l.length && (o = l.reduce((u, d) => this.format(u, d, r.lng, {
        ...r,
        interpolationkey: i[1].trim()
      }), o.trim())), t = t.replace(i[0], o), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
const Ud = (e) => {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf("(") > -1) {
    const r = e.split("(");
    t = r[0].toLowerCase().trim();
    const i = r[1].substring(0, r[1].length - 1);
    t === "currency" && i.indexOf(":") < 0 ? n.currency || (n.currency = i.trim()) : t === "relativetime" && i.indexOf(":") < 0 ? n.range || (n.range = i.trim()) : i.split(";").forEach((s) => {
      if (s) {
        const [a, ...l] = s.split(":"), c = l.join(":").trim().replace(/^'+|'+$/g, ""), u = a.trim();
        n[u] || (n[u] = c), c === "false" && (n[u] = !1), c === "true" && (n[u] = !0), isNaN(c) || (n[u] = parseInt(c, 10));
      }
    });
  }
  return {
    formatName: t,
    formatOptions: n
  };
}, uo = (e) => {
  const t = {};
  return (n, r, i) => {
    let o = i;
    i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (o = {
      ...o,
      [i.interpolationkey]: void 0
    });
    const s = r + JSON.stringify(o);
    let a = t[s];
    return a || (a = e(D2(r), i), t[s] = a), a(n);
  };
}, jd = (e) => (t, n, r) => e(D2(n), r)(t);
class Gd {
  constructor(t = {}) {
    this.logger = gt.create("formatter"), this.options = t, this.init(t);
  }
  init(t, n = {
    interpolation: {}
  }) {
    this.formatSeparator = n.interpolation.formatSeparator || ",";
    const r = n.cacheInBuiltFormats ? uo : jd;
    this.formats = {
      number: r((i, o) => {
        const s = new Intl.NumberFormat(i, {
          ...o
        });
        return (a) => s.format(a);
      }),
      currency: r((i, o) => {
        const s = new Intl.NumberFormat(i, {
          ...o,
          style: "currency"
        });
        return (a) => s.format(a);
      }),
      datetime: r((i, o) => {
        const s = new Intl.DateTimeFormat(i, {
          ...o
        });
        return (a) => s.format(a);
      }),
      relativetime: r((i, o) => {
        const s = new Intl.RelativeTimeFormat(i, {
          ...o
        });
        return (a) => s.format(a, o.range || "day");
      }),
      list: r((i, o) => {
        const s = new Intl.ListFormat(i, {
          ...o
        });
        return (a) => s.format(a);
      })
    };
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = uo(n);
  }
  format(t, n, r, i = {}) {
    const o = n.split(this.formatSeparator);
    if (o.length > 1 && o[0].indexOf("(") > 1 && o[0].indexOf(")") < 0 && o.find((a) => a.indexOf(")") > -1)) {
      const a = o.findIndex((l) => l.indexOf(")") > -1);
      o[0] = [o[0], ...o.splice(1, a)].join(this.formatSeparator);
    }
    return o.reduce((a, l) => {
      const {
        formatName: c,
        formatOptions: u
      } = Ud(l);
      if (this.formats[c]) {
        let d = a;
        try {
          const f = i?.formatParams?.[i.interpolationkey] || {}, p = f.locale || f.lng || i.locale || i.lng || r;
          d = this.formats[c](a, p, {
            ...u,
            ...i,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
        }
        return d;
      } else
        this.logger.warn(`there was no format function for ${c}`);
      return a;
    }, t);
  }
}
const zd = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class Kd extends j0 {
  constructor(t, n, r, i = {}) {
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = i, this.logger = gt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(r, i.backend, i);
  }
  queueLoad(t, n, r, i) {
    const o = {}, s = {}, a = {}, l = {};
    return t.forEach((c) => {
      let u = !0;
      n.forEach((d) => {
        const f = `${c}|${d}`;
        !r.reload && this.store.hasResourceBundle(c, d) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? s[f] === void 0 && (s[f] = !0) : (this.state[f] = 1, u = !1, s[f] === void 0 && (s[f] = !0), o[f] === void 0 && (o[f] = !0), l[d] === void 0 && (l[d] = !0)));
      }), u || (a[c] = !0);
    }), (Object.keys(o).length || Object.keys(s).length) && this.queue.push({
      pending: s,
      pendingCount: Object.keys(s).length,
      loaded: {},
      errors: [],
      callback: i
    }), {
      toLoad: Object.keys(o),
      pending: Object.keys(s),
      toLoadLanguages: Object.keys(a),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(t, n, r) {
    const i = t.split("|"), o = i[0], s = i[1];
    n && this.emit("failedLoading", o, s, n), !n && r && this.store.addResourceBundle(o, s, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[t] = n ? -1 : 2, n && r && (this.state[t] = 0);
    const a = {};
    this.queue.forEach((l) => {
      Hd(l.loaded, [o], s), zd(l, t), n && l.errors.push(n), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((c) => {
        a[c] || (a[c] = {});
        const u = l.loaded[c];
        u.length && u.forEach((d) => {
          a[c][d] === void 0 && (a[c][d] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((l) => !l.done);
  }
  read(t, n, r, i = 0, o = this.retryTimeout, s) {
    if (!t.length) return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: i,
        wait: o,
        callback: s
      });
      return;
    }
    this.readingCalls++;
    const a = (c, u) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const d = this.waitingReads.shift();
        this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
      }
      if (c && u && i < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, n, r, i + 1, o * 2, s);
        }, o);
        return;
      }
      s(c, u);
    }, l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const c = l(t, n);
        c && typeof c.then == "function" ? c.then((u) => a(null, u)).catch(a) : a(null, c);
      } catch (c) {
        a(c);
      }
      return;
    }
    return l(t, n, a);
  }
  prepareLoading(t, n, r = {}, i) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
    ae(t) && (t = this.languageUtils.toResolveHierarchy(t)), ae(n) && (n = [n]);
    const o = this.queueLoad(t, n, r, i);
    if (!o.toLoad.length)
      return o.pending.length || i(), null;
    o.toLoad.forEach((s) => {
      this.loadOne(s);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, {
      reload: !0
    }, r);
  }
  loadOne(t, n = "") {
    const r = t.split("|"), i = r[0], o = r[1];
    this.read(i, o, "read", void 0, void 0, (s, a) => {
      s && this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`, s), !s && a && this.logger.log(`${n}loaded namespace ${o} for language ${i}`, a), this.loaded(t, s, a);
    });
  }
  saveMissing(t, n, r, i, o, s = {}, a = () => {
  }) {
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(n)) {
      this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend?.create) {
        const l = {
          ...s,
          isUpdate: o
        }, c = this.backend.create.bind(this.backend);
        if (c.length < 6)
          try {
            let u;
            c.length === 5 ? u = c(t, n, r, i, l) : u = c(t, n, r, i), u && typeof u.then == "function" ? u.then((d) => a(null, d)).catch(a) : a(null, u);
          } catch (u) {
            a(u);
          }
        else
          c(t, n, r, i, a, l);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, i);
    }
  }
}
const fo = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (e) => {
    let t = {};
    if (typeof e[1] == "object" && (t = e[1]), ae(e[1]) && (t.defaultValue = e[1]), ae(e[2]) && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
      const n = e[3] || e[2];
      Object.keys(n).forEach((r) => {
        t[r] = n[r];
      });
    }
    return t;
  },
  interpolation: {
    escapeValue: !0,
    format: (e) => e,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  },
  cacheInBuiltFormats: !0
}), po = (e) => (ae(e.ns) && (e.ns = [e.ns]), ae(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), ae(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs?.indexOf?.("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), typeof e.initImmediate == "boolean" && (e.initAsync = e.initImmediate), e), t0 = () => {
}, qd = (e) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
};
class R2 extends j0 {
  constructor(t = {}, n) {
    if (super(), this.options = po(t), this.services = {}, this.logger = gt, this.modules = {
      external: []
    }, qd(this), n && !this.isInitialized && !t.isClone) {
      if (!this.options.initAsync)
        return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init(t = {}, n) {
    this.isInitializing = !0, typeof t == "function" && (n = t, t = {}), t.defaultNS == null && t.ns && (ae(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const r = fo();
    this.options = {
      ...r,
      ...this.options,
      ...po(t)
    }, this.options.interpolation = {
      ...r.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const i = (c) => c ? typeof c == "function" ? new c() : c : null;
    if (!this.options.isClone) {
      this.modules.logger ? gt.init(i(this.modules.logger), this.options) : gt.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : c = Gd;
      const u = new ao(this.options);
      this.store = new ro(this.options.resources, this.options);
      const d = this.services;
      d.logger = gt, d.resourceStore = this.store, d.languageUtils = u, d.pluralResolver = new Zd(u, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format && this.logger.warn("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), c && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (d.formatter = i(c), d.formatter.init && d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new Wd(this.options), d.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, d.backendConnector = new Kd(i(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", (p, ...y) => {
        this.emit(p, ...y);
      }), this.modules.languageDetector && (d.languageDetector = i(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = i(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new I0(this.services, this.options), this.translator.on("*", (p, ...y) => {
        this.emit(p, ...y);
      }), this.modules.external.forEach((p) => {
        p.init && p.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = t0), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((c) => {
      this[c] = (...u) => this.store[c](...u);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((c) => {
      this[c] = (...u) => (this.store[c](...u), this);
    });
    const a = v2(), l = () => {
      const c = (u, d) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(d), n(u, d);
      };
      if (this.languages && !this.isInitialized) return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initAsync ? l() : setTimeout(l, 0), a;
  }
  loadResources(t, n = t0) {
    let r = n;
    const i = ae(t) ? t : this.language;
    if (typeof t == "function" && (r = t), !this.options.resources || this.options.partialBundledLanguages) {
      if (i?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
      const o = [], s = (a) => {
        if (!a || a === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(a).forEach((c) => {
          c !== "cimode" && o.indexOf(c) < 0 && o.push(c);
        });
      };
      i ? s(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => s(l)), this.options.preload?.forEach?.((a) => s(a)), this.services.backendConnector.load(o, this.options.ns, (a) => {
        !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(a);
      });
    } else
      r(null);
  }
  reloadResources(t, n, r) {
    const i = v2();
    return typeof t == "function" && (r = t, t = void 0), typeof n == "function" && (r = n, n = void 0), t || (t = this.languages), n || (n = this.options.ns), r || (r = t0), this.services.backendConnector.reload(t, n, (o) => {
      i.resolve(), r(o);
    }), i;
  }
  use(t) {
    if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && _1.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1)) {
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(t) < 0 && this.store.hasLanguageSomeTranslations(t) && (this.resolvedLanguage = t, this.languages.unshift(t));
    }
  }
  changeLanguage(t, n) {
    this.isLanguageChangingTo = t;
    const r = v2();
    this.emit("languageChanging", t);
    const i = (a) => {
      this.language = a, this.languages = this.services.languageUtils.toResolveHierarchy(a), this.resolvedLanguage = void 0, this.setResolvedLanguage(a);
    }, o = (a, l) => {
      l ? this.isLanguageChangingTo === t && (i(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, r.resolve((...c) => this.t(...c)), n && n(a, (...c) => this.t(...c));
    }, s = (a) => {
      !t && !a && this.services.languageDetector && (a = []);
      const l = ae(a) ? a : a && a[0], c = this.store.hasLanguageSomeTranslations(l) ? l : this.services.languageUtils.getBestMatchFromCodes(ae(a) ? [a] : a);
      c && (this.language || i(c), this.translator.language || this.translator.changeLanguage(c), this.services.languageDetector?.cacheUserLanguage?.(c)), this.loadResources(c, (u) => {
        o(u, c);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? s(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(s) : this.services.languageDetector.detect(s) : s(t), r;
  }
  getFixedT(t, n, r) {
    const i = (o, s, ...a) => {
      let l;
      typeof s != "object" ? l = this.options.overloadTranslationOptionHandler([o, s].concat(a)) : l = {
        ...s
      }, l.lng = l.lng || i.lng, l.lngs = l.lngs || i.lngs, l.ns = l.ns || i.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || r || i.keyPrefix);
      const c = this.options.keySeparator || ".";
      let u;
      return l.keyPrefix && Array.isArray(o) ? u = o.map((d) => `${l.keyPrefix}${c}${d}`) : u = l.keyPrefix ? `${l.keyPrefix}${c}${o}` : o, this.t(u, l);
    };
    return ae(t) ? i.lng = t : i.lngs = t, i.ns = n, i.keyPrefix = r, i;
  }
  t(...t) {
    return this.translator?.translate(...t);
  }
  exists(...t) {
    return this.translator?.exists(...t);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t, n = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = n.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : !1, o = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const s = (a, l) => {
      const c = this.services.backendConnector.state[`${a}|${l}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, s);
      if (a !== void 0) return a;
    }
    return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(r, t) && (!i || s(o, t)));
  }
  loadNamespaces(t, n) {
    const r = v2();
    return this.options.ns ? (ae(t) && (t = [t]), t.forEach((i) => {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }), this.loadResources((i) => {
      r.resolve(), n && n(i);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = v2();
    ae(t) && (t = [t]);
    const i = this.options.preload || [], o = t.filter((s) => i.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s));
    return o.length ? (this.options.preload = i.concat(o), this.loadResources((s) => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)), !t) return "rtl";
    try {
      const i = new Intl.Locale(t);
      if (i && i.getTextInfo) {
        const o = i.getTextInfo();
        if (o && o.direction) return o.direction;
      }
    } catch {
    }
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services?.languageUtils || new ao(fo());
    return t.toLowerCase().indexOf("-latn") > 1 ? "ltr" : n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(t = {}, n) {
    return new R2(t, n);
  }
  cloneInstance(t = {}, n = t0) {
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const i = {
      ...this.options,
      ...t,
      isClone: !0
    }, o = new R2(i);
    if ((t.debug !== void 0 || t.prefix !== void 0) && (o.logger = o.logger.clone(t)), ["store", "services", "language"].forEach((a) => {
      o[a] = this[a];
    }), o.services = {
      ...this.services
    }, o.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, r) {
      const a = Object.keys(this.store.data).reduce((l, c) => (l[c] = {
        ...this.store.data[c]
      }, l[c] = Object.keys(l[c]).reduce((u, d) => (u[d] = {
        ...l[c][d]
      }, u), l[c]), l), {});
      o.store = new ro(a, i), o.services.resourceStore = o.store;
    }
    return o.translator = new I0(o.services, i), o.translator.on("*", (a, ...l) => {
      o.emit(a, ...l);
    }), o.init(i, n), o.translator.options = i, o.translator.backendConnector.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, o;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const Te = R2.createInstance();
Te.createInstance = R2.createInstance;
Te.createInstance;
Te.dir;
Te.init;
Te.loadResources;
Te.reloadResources;
Te.use;
Te.changeLanguage;
Te.getFixedT;
Te.t;
Te.exists;
Te.setDefaultNamespace;
Te.hasLoadedNamespace;
Te.loadNamespaces;
Te.loadLanguages;
const Xd = {
  lessThanXSeconds: {
    one: "bir saniyədən az",
    other: "{{count}} bir saniyədən az"
  },
  xSeconds: {
    one: "1 saniyə",
    other: "{{count}} saniyə"
  },
  halfAMinute: "yarım dəqiqə",
  lessThanXMinutes: {
    one: "bir dəqiqədən az",
    other: "{{count}} bir dəqiqədən az"
  },
  xMinutes: {
    one: "bir dəqiqə",
    other: "{{count}} dəqiqə"
  },
  aboutXHours: {
    one: "təxminən 1 saat",
    other: "təxminən {{count}} saat"
  },
  xHours: {
    one: "1 saat",
    other: "{{count}} saat"
  },
  xDays: {
    one: "1 gün",
    other: "{{count}} gün"
  },
  aboutXWeeks: {
    one: "təxminən 1 həftə",
    other: "təxminən {{count}} həftə"
  },
  xWeeks: {
    one: "1 həftə",
    other: "{{count}} həftə"
  },
  aboutXMonths: {
    one: "təxminən 1 ay",
    other: "təxminən {{count}} ay"
  },
  xMonths: {
    one: "1 ay",
    other: "{{count}} ay"
  },
  aboutXYears: {
    one: "təxminən 1 il",
    other: "təxminən {{count}} il"
  },
  xYears: {
    one: "1 il",
    other: "{{count}} il"
  },
  overXYears: {
    one: "1 ildən çox",
    other: "{{count}} ildən çox"
  },
  almostXYears: {
    one: "demək olar ki 1 il",
    other: "demək olar ki {{count}} il"
  }
}, Yd = (e, t, n) => {
  let r;
  const i = Xd[e];
  return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", String(t)), n?.addSuffix ? n.comparison && n.comparison > 0 ? r + " sonra" : r + " əvvəl" : r;
}, Qd = {
  full: "EEEE, do MMMM y 'il'",
  long: "do MMMM y 'il'",
  medium: "d MMM y 'il'",
  short: "dd.MM.yyyy"
}, Jd = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, e5 = {
  full: "{{date}} {{time}} - 'də'",
  long: "{{date}} {{time}} - 'də'",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, t5 = {
  date: Me({
    formats: Qd,
    defaultWidth: "full"
  }),
  time: Me({
    formats: Jd,
    defaultWidth: "full"
  }),
  dateTime: Me({
    formats: e5,
    defaultWidth: "full"
  })
}, n5 = {
  lastWeek: "'sonuncu' eeee p -'də'",
  yesterday: "'dünən' p -'də'",
  today: "'bugün' p -'də'",
  tomorrow: "'sabah' p -'də'",
  nextWeek: "eeee p -'də'",
  other: "P"
}, r5 = (e, t, n, r) => n5[e], i5 = {
  narrow: ["e.ə", "b.e"],
  abbreviated: ["e.ə", "b.e"],
  wide: ["eramızdan əvvəl", "bizim era"]
}, o5 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["K1", "K2", "K3", "K4"],
  wide: ["1ci kvartal", "2ci kvartal", "3cü kvartal", "4cü kvartal"]
}, a5 = {
  narrow: ["Y", "F", "M", "A", "M", "İ", "İ", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Yan",
    "Fev",
    "Mar",
    "Apr",
    "May",
    "İyun",
    "İyul",
    "Avq",
    "Sen",
    "Okt",
    "Noy",
    "Dek"
  ],
  wide: [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "İyun",
    "İyul",
    "Avqust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr"
  ]
}, s5 = {
  narrow: ["B.", "B.e", "Ç.a", "Ç.", "C.a", "C.", "Ş."],
  short: ["B.", "B.e", "Ç.a", "Ç.", "C.a", "C.", "Ş."],
  abbreviated: ["Baz", "Baz.e", "Çər.a", "Çər", "Cüm.a", "Cüm", "Şə"],
  wide: [
    "Bazar",
    "Bazar ertəsi",
    "Çərşənbə axşamı",
    "Çərşənbə",
    "Cümə axşamı",
    "Cümə",
    "Şənbə"
  ]
}, l5 = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "gecəyarı",
    noon: "gün",
    morning: "səhər",
    afternoon: "gündüz",
    evening: "axşam",
    night: "gecə"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "gecəyarı",
    noon: "gün",
    morning: "səhər",
    afternoon: "gündüz",
    evening: "axşam",
    night: "gecə"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "gecəyarı",
    noon: "gün",
    morning: "səhər",
    afternoon: "gündüz",
    evening: "axşam",
    night: "gecə"
  }
}, c5 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "gecəyarı",
    noon: "gün",
    morning: "səhər",
    afternoon: "gündüz",
    evening: "axşam",
    night: "gecə"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "gecəyarı",
    noon: "gün",
    morning: "səhər",
    afternoon: "gündüz",
    evening: "axşam",
    night: "gecə"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "gecəyarı",
    noon: "gün",
    morning: "səhər",
    afternoon: "gündüz",
    evening: "axşam",
    night: "gecə"
  }
}, y2 = {
  1: "-inci",
  5: "-inci",
  8: "-inci",
  70: "-inci",
  80: "-inci",
  2: "-nci",
  7: "-nci",
  20: "-nci",
  50: "-nci",
  3: "-üncü",
  4: "-üncü",
  100: "-üncü",
  6: "-ncı",
  9: "-uncu",
  10: "-uncu",
  30: "-uncu",
  60: "-ıncı",
  90: "-ıncı"
}, u5 = (e) => {
  if (e === 0)
    return e + "-ıncı";
  const t = e % 10, n = e % 100 - t, r = e >= 100 ? 100 : null;
  return y2[t] ? y2[t] : y2[n] ? y2[n] : r !== null ? y2[r] : "";
}, d5 = (e, t) => {
  const n = Number(e), r = u5(n);
  return n + r;
}, f5 = {
  ordinalNumber: d5,
  era: ie({
    values: i5,
    defaultWidth: "wide"
  }),
  quarter: ie({
    values: o5,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ie({
    values: a5,
    defaultWidth: "wide"
  }),
  day: ie({
    values: s5,
    defaultWidth: "wide"
  }),
  dayPeriod: ie({
    values: l5,
    defaultWidth: "wide",
    formattingValues: c5,
    defaultFormattingWidth: "wide"
  })
}, p5 = /^(\d+)(-?(ci|inci|nci|uncu|üncü|ncı))?/i, h5 = /\d+/i, g5 = {
  narrow: /^(b|a)$/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)$/i,
  wide: /^(bizim eradan əvvəl|bizim era)$/i
}, m5 = {
  any: [/^b$/i, /^(a|c)$/i]
}, v5 = {
  narrow: /^[1234]$/i,
  abbreviated: /^K[1234]$/i,
  wide: /^[1234](ci)? kvartal$/i
}, y5 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, C5 = {
  narrow: /^[(?-i)yfmaisond]$/i,
  abbreviated: /^(Yan|Fev|Mar|Apr|May|İyun|İyul|Avq|Sen|Okt|Noy|Dek)$/i,
  wide: /^(Yanvar|Fevral|Mart|Aprel|May|İyun|İyul|Avgust|Sentyabr|Oktyabr|Noyabr|Dekabr)$/i
}, w5 = {
  narrow: [
    /^[(?-i)y]$/i,
    /^[(?-i)f]$/i,
    /^[(?-i)m]$/i,
    /^[(?-i)a]$/i,
    /^[(?-i)m]$/i,
    /^[(?-i)i]$/i,
    /^[(?-i)i]$/i,
    /^[(?-i)a]$/i,
    /^[(?-i)s]$/i,
    /^[(?-i)o]$/i,
    /^[(?-i)n]$/i,
    /^[(?-i)d]$/i
  ],
  abbreviated: [
    /^Yan$/i,
    /^Fev$/i,
    /^Mar$/i,
    /^Apr$/i,
    /^May$/i,
    /^İyun$/i,
    /^İyul$/i,
    /^Avg$/i,
    /^Sen$/i,
    /^Okt$/i,
    /^Noy$/i,
    /^Dek$/i
  ],
  wide: [
    /^Yanvar$/i,
    /^Fevral$/i,
    /^Mart$/i,
    /^Aprel$/i,
    /^May$/i,
    /^İyun$/i,
    /^İyul$/i,
    /^Avgust$/i,
    /^Sentyabr$/i,
    /^Oktyabr$/i,
    /^Noyabr$/i,
    /^Dekabr$/i
  ]
}, b5 = {
  narrow: /^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,
  short: /^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,
  abbreviated: /^(Baz\.e|Çər|Çər\.a|Cüm|Cüm\.a|Şə)$/i,
  wide: /^(Bazar|Bazar ertəsi|Çərşənbə axşamı|Çərşənbə|Cümə axşamı|Cümə|Şənbə)$/i
}, x5 = {
  narrow: [
    /^B\.$/i,
    /^B\.e$/i,
    /^Ç\.a$/i,
    /^Ç\.$/i,
    /^C\.a$/i,
    /^C\.$/i,
    /^Ş\.$/i
  ],
  abbreviated: [
    /^Baz$/i,
    /^Baz\.e$/i,
    /^Çər\.a$/i,
    /^Çər$/i,
    /^Cüm\.a$/i,
    /^Cüm$/i,
    /^Şə$/i
  ],
  wide: [
    /^Bazar$/i,
    /^Bazar ertəsi$/i,
    /^Çərşənbə axşamı$/i,
    /^Çərşənbə$/i,
    /^Cümə axşamı$/i,
    /^Cümə$/i,
    /^Şənbə$/i
  ],
  any: [
    /^B\.$/i,
    /^B\.e$/i,
    /^Ç\.a$/i,
    /^Ç\.$/i,
    /^C\.a$/i,
    /^C\.$/i,
    /^Ş\.$/i
  ]
}, L5 = {
  narrow: /^(a|p|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i,
  any: /^(am|pm|a\.m\.|p\.m\.|AM|PM|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i
}, _5 = {
  any: {
    am: /^a$/i,
    pm: /^p$/i,
    midnight: /^gecəyarı$/i,
    noon: /^gün$/i,
    morning: /səhər$/i,
    afternoon: /gündüz$/i,
    evening: /axşam$/i,
    night: /gecə$/i
  }
}, M5 = {
  ordinalNumber: bt({
    matchPattern: p5,
    parsePattern: h5,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: oe({
    matchPatterns: g5,
    defaultMatchWidth: "wide",
    parsePatterns: m5,
    defaultParseWidth: "any"
  }),
  quarter: oe({
    matchPatterns: v5,
    defaultMatchWidth: "wide",
    parsePatterns: y5,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: oe({
    matchPatterns: C5,
    defaultMatchWidth: "wide",
    parsePatterns: w5,
    defaultParseWidth: "narrow"
  }),
  day: oe({
    matchPatterns: b5,
    defaultMatchWidth: "wide",
    parsePatterns: x5,
    defaultParseWidth: "any"
  }),
  dayPeriod: oe({
    matchPatterns: L5,
    defaultMatchWidth: "any",
    parsePatterns: _5,
    defaultParseWidth: "any"
  })
}, S5 = {
  code: "az",
  formatDistance: Yd,
  formatLong: t5,
  formatRelative: r5,
  localize: f5,
  match: M5,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
}, I5 = {
  lessThanXSeconds: {
    one: "menos de un segundo",
    other: "menos de {{count}} segundos"
  },
  xSeconds: {
    one: "1 segundo",
    other: "{{count}} segundos"
  },
  halfAMinute: "medio minuto",
  lessThanXMinutes: {
    one: "menos de un minuto",
    other: "menos de {{count}} minutos"
  },
  xMinutes: {
    one: "1 minuto",
    other: "{{count}} minutos"
  },
  aboutXHours: {
    one: "alrededor de 1 hora",
    other: "alrededor de {{count}} horas"
  },
  xHours: {
    one: "1 hora",
    other: "{{count}} horas"
  },
  xDays: {
    one: "1 día",
    other: "{{count}} días"
  },
  aboutXWeeks: {
    one: "alrededor de 1 semana",
    other: "alrededor de {{count}} semanas"
  },
  xWeeks: {
    one: "1 semana",
    other: "{{count}} semanas"
  },
  aboutXMonths: {
    one: "alrededor de 1 mes",
    other: "alrededor de {{count}} meses"
  },
  xMonths: {
    one: "1 mes",
    other: "{{count}} meses"
  },
  aboutXYears: {
    one: "alrededor de 1 año",
    other: "alrededor de {{count}} años"
  },
  xYears: {
    one: "1 año",
    other: "{{count}} años"
  },
  overXYears: {
    one: "más de 1 año",
    other: "más de {{count}} años"
  },
  almostXYears: {
    one: "casi 1 año",
    other: "casi {{count}} años"
  }
}, E5 = (e, t, n) => {
  let r;
  const i = I5[e];
  return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "en " + r : "hace " + r : r;
}, P5 = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, k5 = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, O5 = {
  full: "{{date}} 'a las' {{time}}",
  long: "{{date}} 'a las' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, T5 = {
  date: Me({
    formats: P5,
    defaultWidth: "full"
  }),
  time: Me({
    formats: k5,
    defaultWidth: "full"
  }),
  dateTime: Me({
    formats: O5,
    defaultWidth: "full"
  })
}, H5 = {
  lastWeek: "'el' eeee 'pasado a la' p",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'mañana a la' p",
  nextWeek: "eeee 'a la' p",
  other: "P"
}, D5 = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'mañana a las' p",
  nextWeek: "eeee 'a las' p",
  other: "P"
}, R5 = (e, t, n, r) => t.getHours() !== 1 ? D5[e] : H5[e], N5 = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "después de cristo"]
}, A5 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, B5 = {
  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic"
  ],
  wide: [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
  ]
}, F5 = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
  abbreviated: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  wide: [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado"
  ]
}, V5 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  }
}, $5 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  }
}, Z5 = (e, t) => Number(e) + "º", W5 = {
  ordinalNumber: Z5,
  era: ie({
    values: N5,
    defaultWidth: "wide"
  }),
  quarter: ie({
    values: A5,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: ie({
    values: B5,
    defaultWidth: "wide"
  }),
  day: ie({
    values: F5,
    defaultWidth: "wide"
  }),
  dayPeriod: ie({
    values: V5,
    defaultWidth: "wide",
    formattingValues: $5,
    defaultFormattingWidth: "wide"
  })
}, U5 = /^(\d+)(º)?/i, j5 = /\d+/i, G5 = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
}, z5 = {
  any: [/^ac/i, /^dc/i],
  wide: [
    /^(antes de cristo|antes de la era com[uú]n)/i,
    /^(despu[eé]s de cristo|era com[uú]n)/i
  ]
}, K5 = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, q5 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, X5 = {
  narrow: /^[efmajsond]/i,
  abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
  wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
}, Y5 = {
  narrow: [
    /^e/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^en/i,
    /^feb/i,
    /^mar/i,
    /^abr/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^ago/i,
    /^sep/i,
    /^oct/i,
    /^nov/i,
    /^dic/i
  ]
}, Q5 = {
  narrow: /^[dlmjvs]/i,
  short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
  abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
  wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
}, J5 = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
}, e6 = {
  narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
  any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
}, t6 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn/i,
    noon: /^md/i,
    morning: /mañana/i,
    afternoon: /tarde/i,
    evening: /tarde/i,
    night: /noche/i
  }
}, n6 = {
  ordinalNumber: bt({
    matchPattern: U5,
    parsePattern: j5,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: oe({
    matchPatterns: G5,
    defaultMatchWidth: "wide",
    parsePatterns: z5,
    defaultParseWidth: "any"
  }),
  quarter: oe({
    matchPatterns: K5,
    defaultMatchWidth: "wide",
    parsePatterns: q5,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: oe({
    matchPatterns: X5,
    defaultMatchWidth: "wide",
    parsePatterns: Y5,
    defaultParseWidth: "any"
  }),
  day: oe({
    matchPatterns: Q5,
    defaultMatchWidth: "wide",
    parsePatterns: J5,
    defaultParseWidth: "any"
  }),
  dayPeriod: oe({
    matchPatterns: e6,
    defaultMatchWidth: "any",
    parsePatterns: t6,
    defaultParseWidth: "any"
  })
}, r6 = {
  code: "es",
  formatDistance: E5,
  formatLong: T5,
  formatRelative: R5,
  localize: W5,
  match: n6,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
}, i6 = {
  lessThanXSeconds: {
    one: "moins d’une seconde",
    other: "moins de {{count}} secondes"
  },
  xSeconds: {
    one: "1 seconde",
    other: "{{count}} secondes"
  },
  halfAMinute: "30 secondes",
  lessThanXMinutes: {
    one: "moins d’une minute",
    other: "moins de {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "environ 1 heure",
    other: "environ {{count}} heures"
  },
  xHours: {
    one: "1 heure",
    other: "{{count}} heures"
  },
  xDays: {
    one: "1 jour",
    other: "{{count}} jours"
  },
  aboutXWeeks: {
    one: "environ 1 semaine",
    other: "environ {{count}} semaines"
  },
  xWeeks: {
    one: "1 semaine",
    other: "{{count}} semaines"
  },
  aboutXMonths: {
    one: "environ 1 mois",
    other: "environ {{count}} mois"
  },
  xMonths: {
    one: "1 mois",
    other: "{{count}} mois"
  },
  aboutXYears: {
    one: "environ 1 an",
    other: "environ {{count}} ans"
  },
  xYears: {
    one: "1 an",
    other: "{{count}} ans"
  },
  overXYears: {
    one: "plus d’un an",
    other: "plus de {{count}} ans"
  },
  almostXYears: {
    one: "presqu’un an",
    other: "presque {{count}} ans"
  }
}, o6 = (e, t, n) => {
  let r;
  const i = i6[e];
  return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", String(t)), n?.addSuffix ? n.comparison && n.comparison > 0 ? "dans " + r : "il y a " + r : r;
}, a6 = {
  full: "EEEE d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, s6 = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, l6 = {
  full: "{{date}} 'à' {{time}}",
  long: "{{date}} 'à' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, c6 = {
  date: Me({
    formats: a6,
    defaultWidth: "full"
  }),
  time: Me({
    formats: s6,
    defaultWidth: "full"
  }),
  dateTime: Me({
    formats: l6,
    defaultWidth: "full"
  })
}, u6 = {
  lastWeek: "eeee 'dernier à' p",
  yesterday: "'hier à' p",
  today: "'aujourd’hui à' p",
  tomorrow: "'demain à' p'",
  nextWeek: "eeee 'prochain à' p",
  other: "P"
}, d6 = (e, t, n, r) => u6[e], f6 = {
  narrow: ["av. J.-C", "ap. J.-C"],
  abbreviated: ["av. J.-C", "ap. J.-C"],
  wide: ["avant Jésus-Christ", "après Jésus-Christ"]
}, p6 = {
  narrow: ["T1", "T2", "T3", "T4"],
  abbreviated: ["1er trim.", "2ème trim.", "3ème trim.", "4ème trim."],
  wide: ["1er trimestre", "2ème trimestre", "3ème trimestre", "4ème trimestre"]
}, h6 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "janv.",
    "févr.",
    "mars",
    "avr.",
    "mai",
    "juin",
    "juil.",
    "août",
    "sept.",
    "oct.",
    "nov.",
    "déc."
  ],
  wide: [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
  ]
}, g6 = {
  narrow: ["D", "L", "M", "M", "J", "V", "S"],
  short: ["di", "lu", "ma", "me", "je", "ve", "sa"],
  abbreviated: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  wide: [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi"
  ]
}, m6 = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "mat.",
    afternoon: "ap.m.",
    evening: "soir",
    night: "mat."
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "matin",
    afternoon: "après-midi",
    evening: "soir",
    night: "matin"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "du matin",
    afternoon: "de l’après-midi",
    evening: "du soir",
    night: "du matin"
  }
}, v6 = (e, t) => {
  const n = Number(e), r = t?.unit;
  if (n === 0) return "0";
  const i = ["year", "week", "hour", "minute", "second"];
  let o;
  return n === 1 ? o = r && i.includes(r) ? "ère" : "er" : o = "ème", n + o;
}, y6 = ["MMM", "MMMM"], C6 = {
  preprocessor: (e, t) => e.getDate() === 1 || !t.some(
    (r) => r.isToken && y6.includes(r.value)
  ) ? t : t.map(
    (r) => r.isToken && r.value === "do" ? { isToken: !0, value: "d" } : r
  ),
  ordinalNumber: v6,
  era: ie({
    values: f6,
    defaultWidth: "wide"
  }),
  quarter: ie({
    values: p6,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ie({
    values: h6,
    defaultWidth: "wide"
  }),
  day: ie({
    values: g6,
    defaultWidth: "wide"
  }),
  dayPeriod: ie({
    values: m6,
    defaultWidth: "wide"
  })
}, w6 = /^(\d+)(ième|ère|ème|er|e)?/i, b6 = /\d+/i, x6 = {
  narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
  abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
  wide: /^(avant Jésus-Christ|après Jésus-Christ)/i
}, L6 = {
  any: [/^av/i, /^ap/i]
}, _6 = {
  narrow: /^T?[1234]/i,
  abbreviated: /^[1234](er|ème|e)? trim\.?/i,
  wide: /^[1234](er|ème|e)? trimestre/i
}, M6 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, S6 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
  wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
}, I6 = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^av/i,
    /^ma/i,
    /^juin/i,
    /^juil/i,
    /^ao/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, E6 = {
  narrow: /^[lmjvsd]/i,
  short: /^(di|lu|ma|me|je|ve|sa)/i,
  abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
  wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i
}, P6 = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i]
}, k6 = {
  narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
  any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i
}, O6 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^min/i,
    noon: /^mid/i,
    morning: /mat/i,
    afternoon: /ap/i,
    evening: /soir/i,
    night: /nuit/i
  }
}, T6 = {
  ordinalNumber: bt({
    matchPattern: w6,
    parsePattern: b6,
    valueCallback: (e) => parseInt(e)
  }),
  era: oe({
    matchPatterns: x6,
    defaultMatchWidth: "wide",
    parsePatterns: L6,
    defaultParseWidth: "any"
  }),
  quarter: oe({
    matchPatterns: _6,
    defaultMatchWidth: "wide",
    parsePatterns: M6,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: oe({
    matchPatterns: S6,
    defaultMatchWidth: "wide",
    parsePatterns: I6,
    defaultParseWidth: "any"
  }),
  day: oe({
    matchPatterns: E6,
    defaultMatchWidth: "wide",
    parsePatterns: P6,
    defaultParseWidth: "any"
  }),
  dayPeriod: oe({
    matchPatterns: k6,
    defaultMatchWidth: "any",
    parsePatterns: O6,
    defaultParseWidth: "any"
  })
}, H6 = {
  code: "fr",
  formatDistance: o6,
  formatLong: c6,
  formatRelative: d6,
  localize: C6,
  match: T6,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, D6 = {
  lessThanXSeconds: {
    one: "minder dan een seconde",
    other: "minder dan {{count}} seconden"
  },
  xSeconds: {
    one: "1 seconde",
    other: "{{count}} seconden"
  },
  halfAMinute: "een halve minuut",
  lessThanXMinutes: {
    one: "minder dan een minuut",
    other: "minder dan {{count}} minuten"
  },
  xMinutes: {
    one: "een minuut",
    other: "{{count}} minuten"
  },
  aboutXHours: {
    one: "ongeveer 1 uur",
    other: "ongeveer {{count}} uur"
  },
  xHours: {
    one: "1 uur",
    other: "{{count}} uur"
  },
  xDays: {
    one: "1 dag",
    other: "{{count}} dagen"
  },
  aboutXWeeks: {
    one: "ongeveer 1 week",
    other: "ongeveer {{count}} weken"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weken"
  },
  aboutXMonths: {
    one: "ongeveer 1 maand",
    other: "ongeveer {{count}} maanden"
  },
  xMonths: {
    one: "1 maand",
    other: "{{count}} maanden"
  },
  aboutXYears: {
    one: "ongeveer 1 jaar",
    other: "ongeveer {{count}} jaar"
  },
  xYears: {
    one: "1 jaar",
    other: "{{count}} jaar"
  },
  overXYears: {
    one: "meer dan 1 jaar",
    other: "meer dan {{count}} jaar"
  },
  almostXYears: {
    one: "bijna 1 jaar",
    other: "bijna {{count}} jaar"
  }
}, R6 = (e, t, n) => {
  let r;
  const i = D6[e];
  return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", String(t)), n?.addSuffix ? n.comparison && n.comparison > 0 ? "over " + r : r + " geleden" : r;
}, N6 = {
  full: "EEEE d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd-MM-y"
}, A6 = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, B6 = {
  full: "{{date}} 'om' {{time}}",
  long: "{{date}} 'om' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, F6 = {
  date: Me({
    formats: N6,
    defaultWidth: "full"
  }),
  time: Me({
    formats: A6,
    defaultWidth: "full"
  }),
  dateTime: Me({
    formats: B6,
    defaultWidth: "full"
  })
}, V6 = {
  lastWeek: "'afgelopen' eeee 'om' p",
  yesterday: "'gisteren om' p",
  today: "'vandaag om' p",
  tomorrow: "'morgen om' p",
  nextWeek: "eeee 'om' p",
  other: "P"
}, $6 = (e, t, n, r) => V6[e], Z6 = {
  narrow: ["v.C.", "n.C."],
  abbreviated: ["v.Chr.", "n.Chr."],
  wide: ["voor Christus", "na Christus"]
}, W6 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["K1", "K2", "K3", "K4"],
  wide: ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"]
}, U6 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "jan.",
    "feb.",
    "mrt.",
    "apr.",
    "mei",
    "jun.",
    "jul.",
    "aug.",
    "sep.",
    "okt.",
    "nov.",
    "dec."
  ],
  wide: [
    "januari",
    "februari",
    "maart",
    "april",
    "mei",
    "juni",
    "juli",
    "augustus",
    "september",
    "oktober",
    "november",
    "december"
  ]
}, j6 = {
  narrow: ["Z", "M", "D", "W", "D", "V", "Z"],
  short: ["zo", "ma", "di", "wo", "do", "vr", "za"],
  abbreviated: ["zon", "maa", "din", "woe", "don", "vri", "zat"],
  wide: [
    "zondag",
    "maandag",
    "dinsdag",
    "woensdag",
    "donderdag",
    "vrijdag",
    "zaterdag"
  ]
}, G6 = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "het middaguur",
    morning: "'s ochtends",
    afternoon: "'s middags",
    evening: "'s avonds",
    night: "'s nachts"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "het middaguur",
    morning: "'s ochtends",
    afternoon: "'s middags",
    evening: "'s avonds",
    night: "'s nachts"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "het middaguur",
    morning: "'s ochtends",
    afternoon: "'s middags",
    evening: "'s avonds",
    night: "'s nachts"
  }
}, z6 = (e, t) => Number(e) + "e", K6 = {
  ordinalNumber: z6,
  era: ie({
    values: Z6,
    defaultWidth: "wide"
  }),
  quarter: ie({
    values: W6,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ie({
    values: U6,
    defaultWidth: "wide"
  }),
  day: ie({
    values: j6,
    defaultWidth: "wide"
  }),
  dayPeriod: ie({
    values: G6,
    defaultWidth: "wide"
  })
}, q6 = /^(\d+)e?/i, X6 = /\d+/i, Y6 = {
  narrow: /^([vn]\.? ?C\.?)/,
  abbreviated: /^([vn]\. ?Chr\.?)/,
  wide: /^((voor|na) Christus)/
}, Q6 = {
  any: [/^v/, /^n/]
}, J6 = {
  narrow: /^[1234]/i,
  abbreviated: /^K[1234]/i,
  wide: /^[1234]e kwartaal/i
}, e9 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, t9 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,
  wide: /^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i
}, n9 = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^jan/i,
    /^feb/i,
    /^m(r|a)/i,
    /^apr/i,
    /^mei/i,
    /^jun/i,
    /^jul/i,
    /^aug/i,
    /^sep/i,
    /^okt/i,
    /^nov/i,
    /^dec/i
  ]
}, r9 = {
  narrow: /^[zmdwv]/i,
  short: /^(zo|ma|di|wo|do|vr|za)/i,
  abbreviated: /^(zon|maa|din|woe|don|vri|zat)/i,
  wide: /^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i
}, i9 = {
  narrow: [/^z/i, /^m/i, /^d/i, /^w/i, /^d/i, /^v/i, /^z/i],
  any: [/^zo/i, /^ma/i, /^di/i, /^wo/i, /^do/i, /^vr/i, /^za/i]
}, o9 = {
  any: /^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i
}, a9 = {
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /^middernacht/i,
    noon: /^het middaguur/i,
    morning: /ochtend/i,
    afternoon: /middag/i,
    evening: /avond/i,
    night: /nacht/i
  }
}, s9 = {
  ordinalNumber: bt({
    matchPattern: q6,
    parsePattern: X6,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: oe({
    matchPatterns: Y6,
    defaultMatchWidth: "wide",
    parsePatterns: Q6,
    defaultParseWidth: "any"
  }),
  quarter: oe({
    matchPatterns: J6,
    defaultMatchWidth: "wide",
    parsePatterns: e9,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: oe({
    matchPatterns: t9,
    defaultMatchWidth: "wide",
    parsePatterns: n9,
    defaultParseWidth: "any"
  }),
  day: oe({
    matchPatterns: r9,
    defaultMatchWidth: "wide",
    parsePatterns: i9,
    defaultParseWidth: "any"
  }),
  dayPeriod: oe({
    matchPatterns: o9,
    defaultMatchWidth: "any",
    parsePatterns: a9,
    defaultParseWidth: "any"
  })
}, l9 = {
  code: "nl",
  formatDistance: R6,
  formatLong: F6,
  formatRelative: $6,
  localize: K6,
  match: s9,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, c9 = {
  lessThanXSeconds: {
    one: {
      regular: "mniej niż sekunda",
      past: "mniej niż sekundę",
      future: "mniej niż sekundę"
    },
    twoFour: "mniej niż {{count}} sekundy",
    other: "mniej niż {{count}} sekund"
  },
  xSeconds: {
    one: {
      regular: "sekunda",
      past: "sekundę",
      future: "sekundę"
    },
    twoFour: "{{count}} sekundy",
    other: "{{count}} sekund"
  },
  halfAMinute: {
    one: "pół minuty",
    twoFour: "pół minuty",
    other: "pół minuty"
  },
  lessThanXMinutes: {
    one: {
      regular: "mniej niż minuta",
      past: "mniej niż minutę",
      future: "mniej niż minutę"
    },
    twoFour: "mniej niż {{count}} minuty",
    other: "mniej niż {{count}} minut"
  },
  xMinutes: {
    one: {
      regular: "minuta",
      past: "minutę",
      future: "minutę"
    },
    twoFour: "{{count}} minuty",
    other: "{{count}} minut"
  },
  aboutXHours: {
    one: {
      regular: "około godziny",
      past: "około godziny",
      future: "około godzinę"
    },
    twoFour: "około {{count}} godziny",
    other: "około {{count}} godzin"
  },
  xHours: {
    one: {
      regular: "godzina",
      past: "godzinę",
      future: "godzinę"
    },
    twoFour: "{{count}} godziny",
    other: "{{count}} godzin"
  },
  xDays: {
    one: {
      regular: "dzień",
      past: "dzień",
      future: "1 dzień"
    },
    twoFour: "{{count}} dni",
    other: "{{count}} dni"
  },
  aboutXWeeks: {
    one: "około tygodnia",
    twoFour: "około {{count}} tygodni",
    other: "około {{count}} tygodni"
  },
  xWeeks: {
    one: "tydzień",
    twoFour: "{{count}} tygodnie",
    other: "{{count}} tygodni"
  },
  aboutXMonths: {
    one: "około miesiąc",
    twoFour: "około {{count}} miesiące",
    other: "około {{count}} miesięcy"
  },
  xMonths: {
    one: "miesiąc",
    twoFour: "{{count}} miesiące",
    other: "{{count}} miesięcy"
  },
  aboutXYears: {
    one: "około rok",
    twoFour: "około {{count}} lata",
    other: "około {{count}} lat"
  },
  xYears: {
    one: "rok",
    twoFour: "{{count}} lata",
    other: "{{count}} lat"
  },
  overXYears: {
    one: "ponad rok",
    twoFour: "ponad {{count}} lata",
    other: "ponad {{count}} lat"
  },
  almostXYears: {
    one: "prawie rok",
    twoFour: "prawie {{count}} lata",
    other: "prawie {{count}} lat"
  }
};
function u9(e, t) {
  if (t === 1)
    return e.one;
  const n = t % 100;
  if (n <= 20 && n > 10)
    return e.other;
  const r = n % 10;
  return r >= 2 && r <= 4 ? e.twoFour : e.other;
}
function un(e, t, n) {
  const r = u9(e, t);
  return (typeof r == "string" ? r : r[n]).replace("{{count}}", String(t));
}
const d9 = (e, t, n) => {
  const r = c9[e];
  return n?.addSuffix ? n.comparison && n.comparison > 0 ? "za " + un(r, t, "future") : un(r, t, "past") + " temu" : un(r, t, "regular");
}, f9 = {
  full: "EEEE, do MMMM y",
  long: "do MMMM y",
  medium: "do MMM y",
  short: "dd.MM.y"
}, p9 = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, h9 = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, g9 = {
  date: Me({
    formats: f9,
    defaultWidth: "full"
  }),
  time: Me({
    formats: p9,
    defaultWidth: "full"
  }),
  dateTime: Me({
    formats: h9,
    defaultWidth: "full"
  })
}, m9 = {
  masculine: "ostatni",
  feminine: "ostatnia"
}, v9 = {
  masculine: "ten",
  feminine: "ta"
}, y9 = {
  masculine: "następny",
  feminine: "następna"
}, C9 = {
  0: "feminine",
  1: "masculine",
  2: "masculine",
  3: "feminine",
  4: "masculine",
  5: "masculine",
  6: "feminine"
};
function ho(e, t, n, r) {
  let i;
  if (H2(t, n, r))
    i = v9;
  else if (e === "lastWeek")
    i = m9;
  else if (e === "nextWeek")
    i = y9;
  else
    throw new Error(`Cannot determine adjectives for token ${e}`);
  const o = t.getDay(), s = C9[o];
  return `'${i[s]}' eeee 'o' p`;
}
const w9 = {
  lastWeek: ho,
  yesterday: "'wczoraj o' p",
  today: "'dzisiaj o' p",
  tomorrow: "'jutro o' p",
  nextWeek: ho,
  other: "P"
}, b9 = (e, t, n, r) => {
  const i = w9[e];
  return typeof i == "function" ? i(e, t, n, r) : i;
}, x9 = {
  narrow: ["p.n.e.", "n.e."],
  abbreviated: ["p.n.e.", "n.e."],
  wide: ["przed naszą erą", "naszej ery"]
}, L9 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["I kw.", "II kw.", "III kw.", "IV kw."],
  wide: ["I kwartał", "II kwartał", "III kwartał", "IV kwartał"]
}, _9 = {
  narrow: ["S", "L", "M", "K", "M", "C", "L", "S", "W", "P", "L", "G"],
  abbreviated: [
    "sty",
    "lut",
    "mar",
    "kwi",
    "maj",
    "cze",
    "lip",
    "sie",
    "wrz",
    "paź",
    "lis",
    "gru"
  ],
  wide: [
    "styczeń",
    "luty",
    "marzec",
    "kwiecień",
    "maj",
    "czerwiec",
    "lipiec",
    "sierpień",
    "wrzesień",
    "październik",
    "listopad",
    "grudzień"
  ]
}, M9 = {
  narrow: ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"],
  abbreviated: [
    "sty",
    "lut",
    "mar",
    "kwi",
    "maj",
    "cze",
    "lip",
    "sie",
    "wrz",
    "paź",
    "lis",
    "gru"
  ],
  wide: [
    "stycznia",
    "lutego",
    "marca",
    "kwietnia",
    "maja",
    "czerwca",
    "lipca",
    "sierpnia",
    "września",
    "października",
    "listopada",
    "grudnia"
  ]
}, S9 = {
  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
  short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"],
  abbreviated: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
  wide: [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota"
  ]
}, I9 = {
  narrow: ["n", "p", "w", "ś", "c", "p", "s"],
  short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"],
  abbreviated: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
  wide: [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota"
  ]
}, E9 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "półn.",
    noon: "poł",
    morning: "rano",
    afternoon: "popoł.",
    evening: "wiecz.",
    night: "noc"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "północ",
    noon: "południe",
    morning: "rano",
    afternoon: "popołudnie",
    evening: "wieczór",
    night: "noc"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "północ",
    noon: "południe",
    morning: "rano",
    afternoon: "popołudnie",
    evening: "wieczór",
    night: "noc"
  }
}, P9 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "o półn.",
    noon: "w poł.",
    morning: "rano",
    afternoon: "po poł.",
    evening: "wiecz.",
    night: "w nocy"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "o północy",
    noon: "w południe",
    morning: "rano",
    afternoon: "po południu",
    evening: "wieczorem",
    night: "w nocy"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "o północy",
    noon: "w południe",
    morning: "rano",
    afternoon: "po południu",
    evening: "wieczorem",
    night: "w nocy"
  }
}, k9 = (e, t) => String(e), O9 = {
  ordinalNumber: k9,
  era: ie({
    values: x9,
    defaultWidth: "wide"
  }),
  quarter: ie({
    values: L9,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ie({
    values: _9,
    defaultWidth: "wide",
    formattingValues: M9,
    defaultFormattingWidth: "wide"
  }),
  day: ie({
    values: S9,
    defaultWidth: "wide",
    formattingValues: I9,
    defaultFormattingWidth: "wide"
  }),
  dayPeriod: ie({
    values: E9,
    defaultWidth: "wide",
    formattingValues: P9,
    defaultFormattingWidth: "wide"
  })
}, T9 = /^(\d+)?/i, H9 = /\d+/i, D9 = {
  narrow: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
  abbreviated: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
  wide: /^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i
}, R9 = {
  any: [/^p/i, /^n/i]
}, N9 = {
  narrow: /^[1234]/i,
  abbreviated: /^(I|II|III|IV)\s*kw\.?/i,
  wide: /^(I|II|III|IV)\s*kwarta(ł|l)/i
}, A9 = {
  narrow: [/1/i, /2/i, /3/i, /4/i],
  any: [/^I kw/i, /^II kw/i, /^III kw/i, /^IV kw/i]
}, B9 = {
  narrow: /^[slmkcwpg]/i,
  abbreviated: /^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i,
  wide: /^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i
}, F9 = {
  narrow: [
    /^s/i,
    /^l/i,
    /^m/i,
    /^k/i,
    /^m/i,
    /^c/i,
    /^l/i,
    /^s/i,
    /^w/i,
    /^p/i,
    /^l/i,
    /^g/i
  ],
  any: [
    /^st/i,
    /^lu/i,
    /^mar/i,
    /^k/i,
    /^maj/i,
    /^c/i,
    /^lip/i,
    /^si/i,
    /^w/i,
    /^p/i,
    /^lis/i,
    /^g/i
  ]
}, V9 = {
  narrow: /^[npwścs]/i,
  short: /^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i,
  abbreviated: /^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i,
  wide: /^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i
}, $9 = {
  narrow: [/^n/i, /^p/i, /^w/i, /^ś/i, /^c/i, /^p/i, /^s/i],
  abbreviated: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pt/i, /^so/i],
  any: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pi/i, /^so/i]
}, Z9 = {
  narrow: /^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,
  any: /^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i
}, W9 = {
  narrow: {
    am: /^a$/i,
    pm: /^p$/i,
    midnight: /pó(ł|l)n/i,
    noon: /po(ł|l)/i,
    morning: /rano/i,
    afternoon: /po\s*po(ł|l)/i,
    evening: /wiecz/i,
    night: /noc/i
  },
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /pó(ł|l)n/i,
    noon: /po(ł|l)/i,
    morning: /rano/i,
    afternoon: /po\s*po(ł|l)/i,
    evening: /wiecz/i,
    night: /noc/i
  }
}, U9 = {
  ordinalNumber: bt({
    matchPattern: T9,
    parsePattern: H9,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: oe({
    matchPatterns: D9,
    defaultMatchWidth: "wide",
    parsePatterns: R9,
    defaultParseWidth: "any"
  }),
  quarter: oe({
    matchPatterns: N9,
    defaultMatchWidth: "wide",
    parsePatterns: A9,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: oe({
    matchPatterns: B9,
    defaultMatchWidth: "wide",
    parsePatterns: F9,
    defaultParseWidth: "any"
  }),
  day: oe({
    matchPatterns: V9,
    defaultMatchWidth: "wide",
    parsePatterns: $9,
    defaultParseWidth: "any"
  }),
  dayPeriod: oe({
    matchPatterns: Z9,
    defaultMatchWidth: "any",
    parsePatterns: W9,
    defaultParseWidth: "any"
  })
}, j9 = {
  code: "pl",
  formatDistance: d9,
  formatLong: g9,
  formatRelative: b9,
  localize: O9,
  match: U9,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
function C2(e, t) {
  if (e.one !== void 0 && t === 1)
    return e.one;
  const n = t % 10, r = t % 100;
  return n === 1 && r !== 11 ? e.singularNominative.replace("{{count}}", String(t)) : n >= 2 && n <= 4 && (r < 10 || r > 20) ? e.singularGenitive.replace("{{count}}", String(t)) : e.pluralGenitive.replace("{{count}}", String(t));
}
function Be(e) {
  return (t, n) => n?.addSuffix ? n.comparison && n.comparison > 0 ? e.future ? C2(e.future, t) : "через " + C2(e.regular, t) : e.past ? C2(e.past, t) : C2(e.regular, t) + " назад" : C2(e.regular, t);
}
const G9 = {
  lessThanXSeconds: Be({
    regular: {
      one: "меньше секунды",
      singularNominative: "меньше {{count}} секунды",
      singularGenitive: "меньше {{count}} секунд",
      pluralGenitive: "меньше {{count}} секунд"
    },
    future: {
      one: "меньше, чем через секунду",
      singularNominative: "меньше, чем через {{count}} секунду",
      singularGenitive: "меньше, чем через {{count}} секунды",
      pluralGenitive: "меньше, чем через {{count}} секунд"
    }
  }),
  xSeconds: Be({
    regular: {
      singularNominative: "{{count}} секунда",
      singularGenitive: "{{count}} секунды",
      pluralGenitive: "{{count}} секунд"
    },
    past: {
      singularNominative: "{{count}} секунду назад",
      singularGenitive: "{{count}} секунды назад",
      pluralGenitive: "{{count}} секунд назад"
    },
    future: {
      singularNominative: "через {{count}} секунду",
      singularGenitive: "через {{count}} секунды",
      pluralGenitive: "через {{count}} секунд"
    }
  }),
  halfAMinute: (e, t) => t?.addSuffix ? t.comparison && t.comparison > 0 ? "через полминуты" : "полминуты назад" : "полминуты",
  lessThanXMinutes: Be({
    regular: {
      one: "меньше минуты",
      singularNominative: "меньше {{count}} минуты",
      singularGenitive: "меньше {{count}} минут",
      pluralGenitive: "меньше {{count}} минут"
    },
    future: {
      one: "меньше, чем через минуту",
      singularNominative: "меньше, чем через {{count}} минуту",
      singularGenitive: "меньше, чем через {{count}} минуты",
      pluralGenitive: "меньше, чем через {{count}} минут"
    }
  }),
  xMinutes: Be({
    regular: {
      singularNominative: "{{count}} минута",
      singularGenitive: "{{count}} минуты",
      pluralGenitive: "{{count}} минут"
    },
    past: {
      singularNominative: "{{count}} минуту назад",
      singularGenitive: "{{count}} минуты назад",
      pluralGenitive: "{{count}} минут назад"
    },
    future: {
      singularNominative: "через {{count}} минуту",
      singularGenitive: "через {{count}} минуты",
      pluralGenitive: "через {{count}} минут"
    }
  }),
  aboutXHours: Be({
    regular: {
      singularNominative: "около {{count}} часа",
      singularGenitive: "около {{count}} часов",
      pluralGenitive: "около {{count}} часов"
    },
    future: {
      singularNominative: "приблизительно через {{count}} час",
      singularGenitive: "приблизительно через {{count}} часа",
      pluralGenitive: "приблизительно через {{count}} часов"
    }
  }),
  xHours: Be({
    regular: {
      singularNominative: "{{count}} час",
      singularGenitive: "{{count}} часа",
      pluralGenitive: "{{count}} часов"
    }
  }),
  xDays: Be({
    regular: {
      singularNominative: "{{count}} день",
      singularGenitive: "{{count}} дня",
      pluralGenitive: "{{count}} дней"
    }
  }),
  aboutXWeeks: Be({
    regular: {
      singularNominative: "около {{count}} недели",
      singularGenitive: "около {{count}} недель",
      pluralGenitive: "около {{count}} недель"
    },
    future: {
      singularNominative: "приблизительно через {{count}} неделю",
      singularGenitive: "приблизительно через {{count}} недели",
      pluralGenitive: "приблизительно через {{count}} недель"
    }
  }),
  xWeeks: Be({
    regular: {
      singularNominative: "{{count}} неделя",
      singularGenitive: "{{count}} недели",
      pluralGenitive: "{{count}} недель"
    }
  }),
  aboutXMonths: Be({
    regular: {
      singularNominative: "около {{count}} месяца",
      singularGenitive: "около {{count}} месяцев",
      pluralGenitive: "около {{count}} месяцев"
    },
    future: {
      singularNominative: "приблизительно через {{count}} месяц",
      singularGenitive: "приблизительно через {{count}} месяца",
      pluralGenitive: "приблизительно через {{count}} месяцев"
    }
  }),
  xMonths: Be({
    regular: {
      singularNominative: "{{count}} месяц",
      singularGenitive: "{{count}} месяца",
      pluralGenitive: "{{count}} месяцев"
    }
  }),
  aboutXYears: Be({
    regular: {
      singularNominative: "около {{count}} года",
      singularGenitive: "около {{count}} лет",
      pluralGenitive: "около {{count}} лет"
    },
    future: {
      singularNominative: "приблизительно через {{count}} год",
      singularGenitive: "приблизительно через {{count}} года",
      pluralGenitive: "приблизительно через {{count}} лет"
    }
  }),
  xYears: Be({
    regular: {
      singularNominative: "{{count}} год",
      singularGenitive: "{{count}} года",
      pluralGenitive: "{{count}} лет"
    }
  }),
  overXYears: Be({
    regular: {
      singularNominative: "больше {{count}} года",
      singularGenitive: "больше {{count}} лет",
      pluralGenitive: "больше {{count}} лет"
    },
    future: {
      singularNominative: "больше, чем через {{count}} год",
      singularGenitive: "больше, чем через {{count}} года",
      pluralGenitive: "больше, чем через {{count}} лет"
    }
  }),
  almostXYears: Be({
    regular: {
      singularNominative: "почти {{count}} год",
      singularGenitive: "почти {{count}} года",
      pluralGenitive: "почти {{count}} лет"
    },
    future: {
      singularNominative: "почти через {{count}} год",
      singularGenitive: "почти через {{count}} года",
      pluralGenitive: "почти через {{count}} лет"
    }
  })
}, z9 = (e, t, n) => G9[e](t, n), K9 = {
  full: "EEEE, d MMMM y 'г.'",
  long: "d MMMM y 'г.'",
  medium: "d MMM y 'г.'",
  short: "dd.MM.y"
}, q9 = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, X9 = {
  any: "{{date}}, {{time}}"
}, Y9 = {
  date: Me({
    formats: K9,
    defaultWidth: "full"
  }),
  time: Me({
    formats: q9,
    defaultWidth: "full"
  }),
  dateTime: Me({
    formats: X9,
    defaultWidth: "any"
  })
}, or = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среду",
  "четверг",
  "пятницу",
  "субботу"
];
function Q9(e) {
  const t = or[e];
  switch (e) {
    case 0:
      return "'в прошлое " + t + " в' p";
    case 1:
    case 2:
    case 4:
      return "'в прошлый " + t + " в' p";
    case 3:
    case 5:
    case 6:
      return "'в прошлую " + t + " в' p";
  }
}
function go(e) {
  const t = or[e];
  return e === 2 ? "'во " + t + " в' p" : "'в " + t + " в' p";
}
function J9(e) {
  const t = or[e];
  switch (e) {
    case 0:
      return "'в следующее " + t + " в' p";
    case 1:
    case 2:
    case 4:
      return "'в следующий " + t + " в' p";
    case 3:
    case 5:
    case 6:
      return "'в следующую " + t + " в' p";
  }
}
const e8 = {
  lastWeek: (e, t, n) => {
    const r = e.getDay();
    return H2(e, t, n) ? go(r) : Q9(r);
  },
  yesterday: "'вчера в' p",
  today: "'сегодня в' p",
  tomorrow: "'завтра в' p",
  nextWeek: (e, t, n) => {
    const r = e.getDay();
    return H2(e, t, n) ? go(r) : J9(r);
  },
  other: "P"
}, t8 = (e, t, n, r) => {
  const i = e8[e];
  return typeof i == "function" ? i(t, n, r) : i;
}, n8 = {
  narrow: ["до н.э.", "н.э."],
  abbreviated: ["до н. э.", "н. э."],
  wide: ["до нашей эры", "нашей эры"]
}, r8 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
  wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"]
}, i8 = {
  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
  abbreviated: [
    "янв.",
    "фев.",
    "март",
    "апр.",
    "май",
    "июнь",
    "июль",
    "авг.",
    "сент.",
    "окт.",
    "нояб.",
    "дек."
  ],
  wide: [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь"
  ]
}, o8 = {
  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
  abbreviated: [
    "янв.",
    "фев.",
    "мар.",
    "апр.",
    "мая",
    "июн.",
    "июл.",
    "авг.",
    "сент.",
    "окт.",
    "нояб.",
    "дек."
  ],
  wide: [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
  ]
}, a8 = {
  narrow: ["В", "П", "В", "С", "Ч", "П", "С"],
  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  abbreviated: ["вск", "пнд", "втр", "срд", "чтв", "птн", "суб"],
  wide: [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота"
  ]
}, s8 = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утро",
    afternoon: "день",
    evening: "веч.",
    night: "ночь"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утро",
    afternoon: "день",
    evening: "веч.",
    night: "ночь"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "полночь",
    noon: "полдень",
    morning: "утро",
    afternoon: "день",
    evening: "вечер",
    night: "ночь"
  }
}, l8 = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утра",
    afternoon: "дня",
    evening: "веч.",
    night: "ночи"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утра",
    afternoon: "дня",
    evening: "веч.",
    night: "ночи"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "полночь",
    noon: "полдень",
    morning: "утра",
    afternoon: "дня",
    evening: "вечера",
    night: "ночи"
  }
}, c8 = (e, t) => {
  const n = Number(e), r = t?.unit;
  let i;
  return r === "date" ? i = "-е" : r === "week" || r === "minute" || r === "second" ? i = "-я" : i = "-й", n + i;
}, u8 = {
  ordinalNumber: c8,
  era: ie({
    values: n8,
    defaultWidth: "wide"
  }),
  quarter: ie({
    values: r8,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ie({
    values: i8,
    defaultWidth: "wide",
    formattingValues: o8,
    defaultFormattingWidth: "wide"
  }),
  day: ie({
    values: a8,
    defaultWidth: "wide"
  }),
  dayPeriod: ie({
    values: s8,
    defaultWidth: "any",
    formattingValues: l8,
    defaultFormattingWidth: "wide"
  })
}, d8 = /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i, f8 = /\d+/i, p8 = {
  narrow: /^((до )?н\.?\s?э\.?)/i,
  abbreviated: /^((до )?н\.?\s?э\.?)/i,
  wide: /^(до нашей эры|нашей эры|наша эра)/i
}, h8 = {
  any: [/^д/i, /^н/i]
}, g8 = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
  wide: /^[1234](-?[ыои]?й?)? квартал/i
}, m8 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, v8 = {
  narrow: /^[яфмаисонд]/i,
  abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
  wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
}, y8 = {
  narrow: [
    /^я/i,
    /^ф/i,
    /^м/i,
    /^а/i,
    /^м/i,
    /^и/i,
    /^и/i,
    /^а/i,
    /^с/i,
    /^о/i,
    /^н/i,
    /^я/i
  ],
  any: [
    /^я/i,
    /^ф/i,
    /^мар/i,
    /^ап/i,
    /^ма[йя]/i,
    /^июн/i,
    /^июл/i,
    /^ав/i,
    /^с/i,
    /^о/i,
    /^н/i,
    /^д/i
  ]
}, C8 = {
  narrow: /^[впсч]/i,
  short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
  abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
  wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
}, w8 = {
  narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]
}, b8 = {
  narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i
}, x8 = {
  any: {
    am: /^дп/i,
    pm: /^пп/i,
    midnight: /^полн/i,
    noon: /^полд/i,
    morning: /^у/i,
    afternoon: /^д[ен]/i,
    evening: /^в/i,
    night: /^н/i
  }
}, L8 = {
  ordinalNumber: bt({
    matchPattern: d8,
    parsePattern: f8,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: oe({
    matchPatterns: p8,
    defaultMatchWidth: "wide",
    parsePatterns: h8,
    defaultParseWidth: "any"
  }),
  quarter: oe({
    matchPatterns: g8,
    defaultMatchWidth: "wide",
    parsePatterns: m8,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: oe({
    matchPatterns: v8,
    defaultMatchWidth: "wide",
    parsePatterns: y8,
    defaultParseWidth: "any"
  }),
  day: oe({
    matchPatterns: C8,
    defaultMatchWidth: "wide",
    parsePatterns: w8,
    defaultParseWidth: "any"
  }),
  dayPeriod: oe({
    matchPatterns: b8,
    defaultMatchWidth: "wide",
    parsePatterns: x8,
    defaultParseWidth: "any"
  })
}, _8 = {
  code: "ru",
  formatDistance: z9,
  formatLong: Y9,
  formatRelative: t8,
  localize: u8,
  match: L8,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
}, M8 = {
  lessThanXSeconds: {
    one: "bir saniyeden az",
    other: "{{count}} saniyeden az"
  },
  xSeconds: {
    one: "1 saniye",
    other: "{{count}} saniye"
  },
  halfAMinute: "yarım dakika",
  lessThanXMinutes: {
    one: "bir dakikadan az",
    other: "{{count}} dakikadan az"
  },
  xMinutes: {
    one: "1 dakika",
    other: "{{count}} dakika"
  },
  aboutXHours: {
    one: "yaklaşık 1 saat",
    other: "yaklaşık {{count}} saat"
  },
  xHours: {
    one: "1 saat",
    other: "{{count}} saat"
  },
  xDays: {
    one: "1 gün",
    other: "{{count}} gün"
  },
  aboutXWeeks: {
    one: "yaklaşık 1 hafta",
    other: "yaklaşık {{count}} hafta"
  },
  xWeeks: {
    one: "1 hafta",
    other: "{{count}} hafta"
  },
  aboutXMonths: {
    one: "yaklaşık 1 ay",
    other: "yaklaşık {{count}} ay"
  },
  xMonths: {
    one: "1 ay",
    other: "{{count}} ay"
  },
  aboutXYears: {
    one: "yaklaşık 1 yıl",
    other: "yaklaşık {{count}} yıl"
  },
  xYears: {
    one: "1 yıl",
    other: "{{count}} yıl"
  },
  overXYears: {
    one: "1 yıldan fazla",
    other: "{{count}} yıldan fazla"
  },
  almostXYears: {
    one: "neredeyse 1 yıl",
    other: "neredeyse {{count}} yıl"
  }
}, S8 = (e, t, n) => {
  let r;
  const i = M8[e];
  return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? r + " sonra" : r + " önce" : r;
}, I8 = {
  full: "d MMMM y EEEE",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd.MM.yyyy"
}, E8 = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, P8 = {
  full: "{{date}} 'saat' {{time}}",
  long: "{{date}} 'saat' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, k8 = {
  date: Me({
    formats: I8,
    defaultWidth: "full"
  }),
  time: Me({
    formats: E8,
    defaultWidth: "full"
  }),
  dateTime: Me({
    formats: P8,
    defaultWidth: "full"
  })
}, O8 = {
  lastWeek: "'geçen hafta' eeee 'saat' p",
  yesterday: "'dün saat' p",
  today: "'bugün saat' p",
  tomorrow: "'yarın saat' p",
  nextWeek: "eeee 'saat' p",
  other: "P"
}, T8 = (e, t, n, r) => O8[e], H8 = {
  narrow: ["MÖ", "MS"],
  abbreviated: ["MÖ", "MS"],
  wide: ["Milattan Önce", "Milattan Sonra"]
}, D8 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1Ç", "2Ç", "3Ç", "4Ç"],
  wide: ["İlk çeyrek", "İkinci Çeyrek", "Üçüncü çeyrek", "Son çeyrek"]
}, R8 = {
  narrow: ["O", "Ş", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"],
  abbreviated: [
    "Oca",
    "Şub",
    "Mar",
    "Nis",
    "May",
    "Haz",
    "Tem",
    "Ağu",
    "Eyl",
    "Eki",
    "Kas",
    "Ara"
  ],
  wide: [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
  ]
}, N8 = {
  narrow: ["P", "P", "S", "Ç", "P", "C", "C"],
  short: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
  abbreviated: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cts"],
  wide: [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
  ]
}, A8 = {
  narrow: {
    am: "öö",
    pm: "ös",
    midnight: "gy",
    noon: "ö",
    morning: "sa",
    afternoon: "ös",
    evening: "ak",
    night: "ge"
  },
  abbreviated: {
    am: "ÖÖ",
    pm: "ÖS",
    midnight: "gece yarısı",
    noon: "öğle",
    morning: "sabah",
    afternoon: "öğleden sonra",
    evening: "akşam",
    night: "gece"
  },
  wide: {
    am: "Ö.Ö.",
    pm: "Ö.S.",
    midnight: "gece yarısı",
    noon: "öğle",
    morning: "sabah",
    afternoon: "öğleden sonra",
    evening: "akşam",
    night: "gece"
  }
}, B8 = {
  narrow: {
    am: "öö",
    pm: "ös",
    midnight: "gy",
    noon: "ö",
    morning: "sa",
    afternoon: "ös",
    evening: "ak",
    night: "ge"
  },
  abbreviated: {
    am: "ÖÖ",
    pm: "ÖS",
    midnight: "gece yarısı",
    noon: "öğlen",
    morning: "sabahleyin",
    afternoon: "öğleden sonra",
    evening: "akşamleyin",
    night: "geceleyin"
  },
  wide: {
    am: "ö.ö.",
    pm: "ö.s.",
    midnight: "gece yarısı",
    noon: "öğlen",
    morning: "sabahleyin",
    afternoon: "öğleden sonra",
    evening: "akşamleyin",
    night: "geceleyin"
  }
}, F8 = (e, t) => Number(e) + ".", V8 = {
  ordinalNumber: F8,
  era: ie({
    values: H8,
    defaultWidth: "wide"
  }),
  quarter: ie({
    values: D8,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: ie({
    values: R8,
    defaultWidth: "wide"
  }),
  day: ie({
    values: N8,
    defaultWidth: "wide"
  }),
  dayPeriod: ie({
    values: A8,
    defaultWidth: "wide",
    formattingValues: B8,
    defaultFormattingWidth: "wide"
  })
}, $8 = /^(\d+)(\.)?/i, Z8 = /\d+/i, W8 = {
  narrow: /^(mö|ms)/i,
  abbreviated: /^(mö|ms)/i,
  wide: /^(milattan önce|milattan sonra)/i
}, U8 = {
  any: [/(^mö|^milattan önce)/i, /(^ms|^milattan sonra)/i]
}, j8 = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]ç/i,
  wide: /^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i
}, G8 = {
  any: [/1/i, /2/i, /3/i, /4/i],
  abbreviated: [/1ç/i, /2ç/i, /3ç/i, /4ç/i],
  wide: [
    /^(i|İ)lk çeyrek/i,
    /(i|İ)kinci çeyrek/i,
    /üçüncü çeyrek/i,
    /son çeyrek/i
  ]
}, z8 = {
  narrow: /^[oşmnhtaek]/i,
  abbreviated: /^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i,
  wide: /^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i
}, K8 = {
  narrow: [
    /^o/i,
    /^ş/i,
    /^m/i,
    /^n/i,
    /^m/i,
    /^h/i,
    /^t/i,
    /^a/i,
    /^e/i,
    /^e/i,
    /^k/i,
    /^a/i
  ],
  any: [
    /^o/i,
    /^ş/i,
    /^mar/i,
    /^n/i,
    /^may/i,
    /^h/i,
    /^t/i,
    /^ağ/i,
    /^ey/i,
    /^ek/i,
    /^k/i,
    /^ar/i
  ]
}, q8 = {
  narrow: /^[psçc]/i,
  short: /^(pz|pt|sa|ça|pe|cu|ct)/i,
  abbreviated: /^(paz|pzt|sal|çar|per|cum|cts)/i,
  wide: /^(pazar(?!tesi)|pazartesi|salı|çarşamba|perşembe|cuma(?!rtesi)|cumartesi)/i
}, X8 = {
  narrow: [/^p/i, /^p/i, /^s/i, /^ç/i, /^p/i, /^c/i, /^c/i],
  any: [/^pz/i, /^pt/i, /^sa/i, /^ça/i, /^pe/i, /^cu/i, /^ct/i],
  wide: [
    /^pazar(?!tesi)/i,
    /^pazartesi/i,
    /^salı/i,
    /^çarşamba/i,
    /^perşembe/i,
    /^cuma(?!rtesi)/i,
    /^cumartesi/i
  ]
}, Y8 = {
  narrow: /^(öö|ös|gy|ö|sa|ös|ak|ge)/i,
  any: /^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i
}, Q8 = {
  any: {
    am: /^ö\.?ö\.?/i,
    pm: /^ö\.?s\.?/i,
    midnight: /^(gy|gece yarısı)/i,
    noon: /^öğ/i,
    morning: /^sa/i,
    afternoon: /^öğleden sonra/i,
    evening: /^ak/i,
    night: /^ge/i
  }
}, J8 = {
  ordinalNumber: bt({
    matchPattern: $8,
    parsePattern: Z8,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: oe({
    matchPatterns: W8,
    defaultMatchWidth: "wide",
    parsePatterns: U8,
    defaultParseWidth: "any"
  }),
  quarter: oe({
    matchPatterns: j8,
    defaultMatchWidth: "wide",
    parsePatterns: G8,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: oe({
    matchPatterns: z8,
    defaultMatchWidth: "wide",
    parsePatterns: K8,
    defaultParseWidth: "any"
  }),
  day: oe({
    matchPatterns: q8,
    defaultMatchWidth: "wide",
    parsePatterns: X8,
    defaultParseWidth: "any"
  }),
  dayPeriod: oe({
    matchPatterns: Y8,
    defaultMatchWidth: "any",
    parsePatterns: Q8,
    defaultParseWidth: "any"
  })
}, e7 = {
  code: "tr",
  formatDistance: S8,
  formatLong: k8,
  formatRelative: T8,
  localize: V8,
  match: J8,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
function w2(e, t) {
  if (e.one !== void 0 && t === 1)
    return e.one;
  const n = t % 10, r = t % 100;
  return n === 1 && r !== 11 ? e.singularNominative.replace("{{count}}", String(t)) : n >= 2 && n <= 4 && (r < 10 || r > 20) ? e.singularGenitive.replace("{{count}}", String(t)) : e.pluralGenitive.replace("{{count}}", String(t));
}
function Fe(e) {
  return (t, n) => n && n.addSuffix ? n.comparison && n.comparison > 0 ? e.future ? w2(e.future, t) : "за " + w2(e.regular, t) : e.past ? w2(e.past, t) : w2(e.regular, t) + " тому" : w2(e.regular, t);
}
const t7 = (e, t) => t && t.addSuffix ? t.comparison && t.comparison > 0 ? "за півхвилини" : "півхвилини тому" : "півхвилини", n7 = {
  lessThanXSeconds: Fe({
    regular: {
      one: "менше секунди",
      singularNominative: "менше {{count}} секунди",
      singularGenitive: "менше {{count}} секунд",
      pluralGenitive: "менше {{count}} секунд"
    },
    future: {
      one: "менше, ніж за секунду",
      singularNominative: "менше, ніж за {{count}} секунду",
      singularGenitive: "менше, ніж за {{count}} секунди",
      pluralGenitive: "менше, ніж за {{count}} секунд"
    }
  }),
  xSeconds: Fe({
    regular: {
      singularNominative: "{{count}} секунда",
      singularGenitive: "{{count}} секунди",
      pluralGenitive: "{{count}} секунд"
    },
    past: {
      singularNominative: "{{count}} секунду тому",
      singularGenitive: "{{count}} секунди тому",
      pluralGenitive: "{{count}} секунд тому"
    },
    future: {
      singularNominative: "за {{count}} секунду",
      singularGenitive: "за {{count}} секунди",
      pluralGenitive: "за {{count}} секунд"
    }
  }),
  halfAMinute: t7,
  lessThanXMinutes: Fe({
    regular: {
      one: "менше хвилини",
      singularNominative: "менше {{count}} хвилини",
      singularGenitive: "менше {{count}} хвилин",
      pluralGenitive: "менше {{count}} хвилин"
    },
    future: {
      one: "менше, ніж за хвилину",
      singularNominative: "менше, ніж за {{count}} хвилину",
      singularGenitive: "менше, ніж за {{count}} хвилини",
      pluralGenitive: "менше, ніж за {{count}} хвилин"
    }
  }),
  xMinutes: Fe({
    regular: {
      singularNominative: "{{count}} хвилина",
      singularGenitive: "{{count}} хвилини",
      pluralGenitive: "{{count}} хвилин"
    },
    past: {
      singularNominative: "{{count}} хвилину тому",
      singularGenitive: "{{count}} хвилини тому",
      pluralGenitive: "{{count}} хвилин тому"
    },
    future: {
      singularNominative: "за {{count}} хвилину",
      singularGenitive: "за {{count}} хвилини",
      pluralGenitive: "за {{count}} хвилин"
    }
  }),
  aboutXHours: Fe({
    regular: {
      singularNominative: "близько {{count}} години",
      singularGenitive: "близько {{count}} годин",
      pluralGenitive: "близько {{count}} годин"
    },
    future: {
      singularNominative: "приблизно за {{count}} годину",
      singularGenitive: "приблизно за {{count}} години",
      pluralGenitive: "приблизно за {{count}} годин"
    }
  }),
  xHours: Fe({
    regular: {
      singularNominative: "{{count}} годину",
      singularGenitive: "{{count}} години",
      pluralGenitive: "{{count}} годин"
    }
  }),
  xDays: Fe({
    regular: {
      singularNominative: "{{count}} день",
      singularGenitive: "{{count}} днi",
      pluralGenitive: "{{count}} днів"
    }
  }),
  aboutXWeeks: Fe({
    regular: {
      singularNominative: "близько {{count}} тижня",
      singularGenitive: "близько {{count}} тижнів",
      pluralGenitive: "близько {{count}} тижнів"
    },
    future: {
      singularNominative: "приблизно за {{count}} тиждень",
      singularGenitive: "приблизно за {{count}} тижні",
      pluralGenitive: "приблизно за {{count}} тижнів"
    }
  }),
  xWeeks: Fe({
    regular: {
      singularNominative: "{{count}} тиждень",
      singularGenitive: "{{count}} тижні",
      pluralGenitive: "{{count}} тижнів"
    }
  }),
  aboutXMonths: Fe({
    regular: {
      singularNominative: "близько {{count}} місяця",
      singularGenitive: "близько {{count}} місяців",
      pluralGenitive: "близько {{count}} місяців"
    },
    future: {
      singularNominative: "приблизно за {{count}} місяць",
      singularGenitive: "приблизно за {{count}} місяці",
      pluralGenitive: "приблизно за {{count}} місяців"
    }
  }),
  xMonths: Fe({
    regular: {
      singularNominative: "{{count}} місяць",
      singularGenitive: "{{count}} місяці",
      pluralGenitive: "{{count}} місяців"
    }
  }),
  aboutXYears: Fe({
    regular: {
      singularNominative: "близько {{count}} року",
      singularGenitive: "близько {{count}} років",
      pluralGenitive: "близько {{count}} років"
    },
    future: {
      singularNominative: "приблизно за {{count}} рік",
      singularGenitive: "приблизно за {{count}} роки",
      pluralGenitive: "приблизно за {{count}} років"
    }
  }),
  xYears: Fe({
    regular: {
      singularNominative: "{{count}} рік",
      singularGenitive: "{{count}} роки",
      pluralGenitive: "{{count}} років"
    }
  }),
  overXYears: Fe({
    regular: {
      singularNominative: "більше {{count}} року",
      singularGenitive: "більше {{count}} років",
      pluralGenitive: "більше {{count}} років"
    },
    future: {
      singularNominative: "більше, ніж за {{count}} рік",
      singularGenitive: "більше, ніж за {{count}} роки",
      pluralGenitive: "більше, ніж за {{count}} років"
    }
  }),
  almostXYears: Fe({
    regular: {
      singularNominative: "майже {{count}} рік",
      singularGenitive: "майже {{count}} роки",
      pluralGenitive: "майже {{count}} років"
    },
    future: {
      singularNominative: "майже за {{count}} рік",
      singularGenitive: "майже за {{count}} роки",
      pluralGenitive: "майже за {{count}} років"
    }
  })
}, r7 = (e, t, n) => (n = n || {}, n7[e](t, n)), i7 = {
  full: "EEEE, do MMMM y 'р.'",
  long: "do MMMM y 'р.'",
  medium: "d MMM y 'р.'",
  short: "dd.MM.y"
}, o7 = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, a7 = {
  full: "{{date}} 'о' {{time}}",
  long: "{{date}} 'о' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, s7 = {
  date: Me({
    formats: i7,
    defaultWidth: "full"
  }),
  time: Me({
    formats: o7,
    defaultWidth: "full"
  }),
  dateTime: Me({
    formats: a7,
    defaultWidth: "full"
  })
}, ar = [
  "неділю",
  "понеділок",
  "вівторок",
  "середу",
  "четвер",
  "п’ятницю",
  "суботу"
];
function l7(e) {
  const t = ar[e];
  switch (e) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у минулу " + t + " о' p";
    case 1:
    case 2:
    case 4:
      return "'у минулий " + t + " о' p";
  }
}
function M1(e) {
  return "'у " + ar[e] + " о' p";
}
function c7(e) {
  const t = ar[e];
  switch (e) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у наступну " + t + " о' p";
    case 1:
    case 2:
    case 4:
      return "'у наступний " + t + " о' p";
  }
}
const u7 = (e, t, n) => {
  const r = Ut(e), i = r.getDay();
  return H2(r, t, n) ? M1(i) : l7(i);
}, d7 = (e, t, n) => {
  const r = Ut(e), i = r.getDay();
  return H2(r, t, n) ? M1(i) : c7(i);
}, f7 = {
  lastWeek: u7,
  yesterday: "'вчора о' p",
  today: "'сьогодні о' p",
  tomorrow: "'завтра о' p",
  nextWeek: d7,
  other: "P"
}, p7 = (e, t, n, r) => {
  const i = f7[e];
  return typeof i == "function" ? i(t, n, r) : i;
}, h7 = {
  narrow: ["до н.е.", "н.е."],
  abbreviated: ["до н. е.", "н. е."],
  wide: ["до нашої ери", "нашої ери"]
}, g7 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
  wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"]
}, m7 = {
  // ДСТУ 3582:2013
  narrow: ["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"],
  abbreviated: [
    "січ.",
    "лют.",
    "берез.",
    "квіт.",
    "трав.",
    "черв.",
    "лип.",
    "серп.",
    "верес.",
    "жовт.",
    "листоп.",
    "груд."
  ],
  wide: [
    "січень",
    "лютий",
    "березень",
    "квітень",
    "травень",
    "червень",
    "липень",
    "серпень",
    "вересень",
    "жовтень",
    "листопад",
    "грудень"
  ]
}, v7 = {
  narrow: ["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"],
  abbreviated: [
    "січ.",
    "лют.",
    "берез.",
    "квіт.",
    "трав.",
    "черв.",
    "лип.",
    "серп.",
    "верес.",
    "жовт.",
    "листоп.",
    "груд."
  ],
  wide: [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня"
  ]
}, y7 = {
  narrow: ["Н", "П", "В", "С", "Ч", "П", "С"],
  short: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
  abbreviated: ["нед", "пон", "вів", "сер", "чтв", "птн", "суб"],
  wide: [
    "неділя",
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "п’ятниця",
    "субота"
  ]
}, C7 = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "півн.",
    noon: "пол.",
    morning: "ранок",
    afternoon: "день",
    evening: "веч.",
    night: "ніч"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "півн.",
    noon: "пол.",
    morning: "ранок",
    afternoon: "день",
    evening: "веч.",
    night: "ніч"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "північ",
    noon: "полудень",
    morning: "ранок",
    afternoon: "день",
    evening: "вечір",
    night: "ніч"
  }
}, w7 = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "півн.",
    noon: "пол.",
    morning: "ранку",
    afternoon: "дня",
    evening: "веч.",
    night: "ночі"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "півн.",
    noon: "пол.",
    morning: "ранку",
    afternoon: "дня",
    evening: "веч.",
    night: "ночі"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "північ",
    noon: "полудень",
    morning: "ранку",
    afternoon: "дня",
    evening: "веч.",
    night: "ночі"
  }
}, b7 = (e, t) => {
  const n = String(t?.unit), r = Number(e);
  let i;
  return n === "date" ? r === 3 || r === 23 ? i = "-є" : i = "-е" : n === "minute" || n === "second" || n === "hour" ? i = "-а" : i = "-й", r + i;
}, x7 = {
  ordinalNumber: b7,
  era: ie({
    values: h7,
    defaultWidth: "wide"
  }),
  quarter: ie({
    values: g7,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ie({
    values: m7,
    defaultWidth: "wide",
    formattingValues: v7,
    defaultFormattingWidth: "wide"
  }),
  day: ie({
    values: y7,
    defaultWidth: "wide"
  }),
  dayPeriod: ie({
    values: C7,
    defaultWidth: "any",
    formattingValues: w7,
    defaultFormattingWidth: "wide"
  })
}, L7 = /^(\d+)(-?(е|й|є|а|я))?/i, _7 = /\d+/i, M7 = {
  narrow: /^((до )?н\.?\s?е\.?)/i,
  abbreviated: /^((до )?н\.?\s?е\.?)/i,
  wide: /^(до нашої ери|нашої ери|наша ера)/i
}, S7 = {
  any: [/^д/i, /^н/i]
}, I7 = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[иі]?й?)? кв.?/i,
  wide: /^[1234](-?[иі]?й?)? квартал/i
}, E7 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, P7 = {
  narrow: /^[слбктчвжг]/i,
  abbreviated: /^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,
  wide: /^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i
}, k7 = {
  narrow: [
    /^с/i,
    /^л/i,
    /^б/i,
    /^к/i,
    /^т/i,
    /^ч/i,
    /^л/i,
    /^с/i,
    /^в/i,
    /^ж/i,
    /^л/i,
    /^г/i
  ],
  any: [
    /^сі/i,
    /^лю/i,
    /^б/i,
    /^к/i,
    /^т/i,
    /^ч/i,
    /^лип/i,
    /^се/i,
    /^в/i,
    /^ж/i,
    /^лис/i,
    /^г/i
  ]
}, O7 = {
  narrow: /^[нпвсч]/i,
  short: /^(нд|пн|вт|ср|чт|пт|сб)\.?/i,
  abbreviated: /^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,
  wide: /^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i
}, T7 = {
  narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^н/i, /^п[он]/i, /^в/i, /^с[ер]/i, /^ч/i, /^п\W*?[ят]/i, /^с[уб]/i]
}, H7 = {
  narrow: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,
  abbreviated: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,
  wide: /^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i
}, D7 = {
  any: {
    am: /^дп/i,
    pm: /^пп/i,
    midnight: /^півн/i,
    noon: /^пол/i,
    morning: /^р/i,
    afternoon: /^д[ен]/i,
    evening: /^в/i,
    night: /^н/i
  }
}, R7 = {
  ordinalNumber: bt({
    matchPattern: L7,
    parsePattern: _7,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: oe({
    matchPatterns: M7,
    defaultMatchWidth: "wide",
    parsePatterns: S7,
    defaultParseWidth: "any"
  }),
  quarter: oe({
    matchPatterns: I7,
    defaultMatchWidth: "wide",
    parsePatterns: E7,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: oe({
    matchPatterns: P7,
    defaultMatchWidth: "wide",
    parsePatterns: k7,
    defaultParseWidth: "any"
  }),
  day: oe({
    matchPatterns: O7,
    defaultMatchWidth: "wide",
    parsePatterns: T7,
    defaultParseWidth: "any"
  }),
  dayPeriod: oe({
    matchPatterns: H7,
    defaultMatchWidth: "wide",
    parsePatterns: D7,
    defaultParseWidth: "any"
  })
}, N7 = {
  code: "uk",
  formatDistance: r7,
  formatLong: s7,
  formatRelative: p7,
  localize: x7,
  match: R7,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
}, A7 = {
  lessThanXSeconds: {
    one: "dưới 1 giây",
    other: "dưới {{count}} giây"
  },
  xSeconds: {
    one: "1 giây",
    other: "{{count}} giây"
  },
  halfAMinute: "nửa phút",
  lessThanXMinutes: {
    one: "dưới 1 phút",
    other: "dưới {{count}} phút"
  },
  xMinutes: {
    one: "1 phút",
    other: "{{count}} phút"
  },
  aboutXHours: {
    one: "khoảng 1 giờ",
    other: "khoảng {{count}} giờ"
  },
  xHours: {
    one: "1 giờ",
    other: "{{count}} giờ"
  },
  xDays: {
    one: "1 ngày",
    other: "{{count}} ngày"
  },
  aboutXWeeks: {
    one: "khoảng 1 tuần",
    other: "khoảng {{count}} tuần"
  },
  xWeeks: {
    one: "1 tuần",
    other: "{{count}} tuần"
  },
  aboutXMonths: {
    one: "khoảng 1 tháng",
    other: "khoảng {{count}} tháng"
  },
  xMonths: {
    one: "1 tháng",
    other: "{{count}} tháng"
  },
  aboutXYears: {
    one: "khoảng 1 năm",
    other: "khoảng {{count}} năm"
  },
  xYears: {
    one: "1 năm",
    other: "{{count}} năm"
  },
  overXYears: {
    one: "hơn 1 năm",
    other: "hơn {{count}} năm"
  },
  almostXYears: {
    one: "gần 1 năm",
    other: "gần {{count}} năm"
  }
}, B7 = (e, t, n) => {
  let r;
  const i = A7[e];
  return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", String(t)), n?.addSuffix ? n.comparison && n.comparison > 0 ? r + " nữa" : r + " trước" : r;
}, F7 = {
  // thứ Sáu, ngày 25 tháng 08 năm 2017
  full: "EEEE, 'ngày' d MMMM 'năm' y",
  // ngày 25 tháng 08 năm 2017
  long: "'ngày' d MMMM 'năm' y",
  // 25 thg 08 năm 2017
  medium: "d MMM 'năm' y",
  // 25/08/2017
  short: "dd/MM/y"
}, V7 = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, $7 = {
  // thứ Sáu, ngày 25 tháng 08 năm 2017 23:25:59
  full: "{{date}} {{time}}",
  // ngày 25 tháng 08 năm 2017 23:25
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Z7 = {
  date: Me({
    formats: F7,
    defaultWidth: "full"
  }),
  time: Me({
    formats: V7,
    defaultWidth: "full"
  }),
  dateTime: Me({
    formats: $7,
    defaultWidth: "full"
  })
}, W7 = {
  lastWeek: "eeee 'tuần trước vào lúc' p",
  yesterday: "'hôm qua vào lúc' p",
  today: "'hôm nay vào lúc' p",
  tomorrow: "'ngày mai vào lúc' p",
  nextWeek: "eeee 'tới vào lúc' p",
  other: "P"
}, U7 = (e, t, n, r) => W7[e], j7 = {
  narrow: ["TCN", "SCN"],
  abbreviated: ["trước CN", "sau CN"],
  wide: ["trước Công Nguyên", "sau Công Nguyên"]
}, G7 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["Quý 1", "Quý 2", "Quý 3", "Quý 4"]
}, z7 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  // I notice many news outlet use this "quý II/2018"
  wide: ["quý I", "quý II", "quý III", "quý IV"]
}, K7 = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  abbreviated: [
    "Thg 1",
    "Thg 2",
    "Thg 3",
    "Thg 4",
    "Thg 5",
    "Thg 6",
    "Thg 7",
    "Thg 8",
    "Thg 9",
    "Thg 10",
    "Thg 11",
    "Thg 12"
  ],
  wide: [
    "Tháng Một",
    "Tháng Hai",
    "Tháng Ba",
    "Tháng Tư",
    "Tháng Năm",
    "Tháng Sáu",
    "Tháng Bảy",
    "Tháng Tám",
    "Tháng Chín",
    "Tháng Mười",
    "Tháng Mười Một",
    "Tháng Mười Hai"
  ]
}, q7 = {
  narrow: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12"
  ],
  abbreviated: [
    "thg 1",
    "thg 2",
    "thg 3",
    "thg 4",
    "thg 5",
    "thg 6",
    "thg 7",
    "thg 8",
    "thg 9",
    "thg 10",
    "thg 11",
    "thg 12"
  ],
  wide: [
    "tháng 01",
    "tháng 02",
    "tháng 03",
    "tháng 04",
    "tháng 05",
    "tháng 06",
    "tháng 07",
    "tháng 08",
    "tháng 09",
    "tháng 10",
    "tháng 11",
    "tháng 12"
  ]
}, X7 = {
  narrow: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
  short: ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"],
  abbreviated: ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
  wide: [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy"
  ]
}, Y7 = {
  // narrow date period is extremely rare in Vietnamese
  // I used abbreviated form for noon, morning and afternoon
  // which are regconizable by Vietnamese, others cannot be any shorter
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "nửa đêm",
    noon: "tr",
    morning: "sg",
    afternoon: "ch",
    evening: "tối",
    night: "đêm"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "nửa đêm",
    noon: "trưa",
    morning: "sáng",
    afternoon: "chiều",
    evening: "tối",
    night: "đêm"
  },
  wide: {
    am: "SA",
    pm: "CH",
    midnight: "nửa đêm",
    noon: "trưa",
    morning: "sáng",
    afternoon: "chiều",
    evening: "tối",
    night: "đêm"
  }
}, Q7 = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "nửa đêm",
    noon: "tr",
    morning: "sg",
    afternoon: "ch",
    evening: "tối",
    night: "đêm"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "nửa đêm",
    noon: "trưa",
    morning: "sáng",
    afternoon: "chiều",
    evening: "tối",
    night: "đêm"
  },
  wide: {
    am: "SA",
    pm: "CH",
    midnight: "nửa đêm",
    noon: "giữa trưa",
    morning: "vào buổi sáng",
    afternoon: "vào buổi chiều",
    evening: "vào buổi tối",
    night: "vào ban đêm"
  }
}, J7 = (e, t) => {
  const n = Number(e), r = t?.unit;
  if (r === "quarter")
    switch (n) {
      case 1:
        return "I";
      case 2:
        return "II";
      case 3:
        return "III";
      case 4:
        return "IV";
    }
  else if (r === "day")
    switch (n) {
      case 1:
        return "thứ 2";
      // meaning 2nd day but it's the first day of the week :D
      case 2:
        return "thứ 3";
      // meaning 3rd day
      case 3:
        return "thứ 4";
      // meaning 4th day and so on
      case 4:
        return "thứ 5";
      case 5:
        return "thứ 6";
      case 6:
        return "thứ 7";
      case 7:
        return "chủ nhật";
    }
  else {
    if (r === "week")
      return n === 1 ? "thứ nhất" : "thứ " + n;
    if (r === "dayOfYear")
      return n === 1 ? "đầu tiên" : "thứ " + n;
  }
  return String(n);
}, ef = {
  ordinalNumber: J7,
  era: ie({
    values: j7,
    defaultWidth: "wide"
  }),
  quarter: ie({
    values: G7,
    defaultWidth: "wide",
    formattingValues: z7,
    defaultFormattingWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ie({
    values: K7,
    defaultWidth: "wide",
    formattingValues: q7,
    defaultFormattingWidth: "wide"
  }),
  day: ie({
    values: X7,
    defaultWidth: "wide"
  }),
  dayPeriod: ie({
    values: Y7,
    defaultWidth: "wide",
    formattingValues: Q7,
    defaultFormattingWidth: "wide"
  })
}, tf = /^(\d+)/i, nf = /\d+/i, rf = {
  narrow: /^(tcn|scn)/i,
  abbreviated: /^(trước CN|sau CN)/i,
  wide: /^(trước Công Nguyên|sau Công Nguyên)/i
}, of = {
  any: [/^t/i, /^s/i]
}, af = {
  narrow: /^([1234]|i{1,3}v?)/i,
  abbreviated: /^q([1234]|i{1,3}v?)/i,
  wide: /^quý ([1234]|i{1,3}v?)/i
}, sf = {
  any: [/(1|i)$/i, /(2|ii)$/i, /(3|iii)$/i, /(4|iv)$/i]
}, lf = {
  // month number may contain leading 0, 'thg' prefix may have space, underscore or empty before number
  // note the order of '1' since it is a sub-string of '10', so must be lower priority
  narrow: /^(0?[2-9]|10|11|12|0?1)/i,
  // note the order of 'thg 1' since it is sub-string of 'thg 10', so must be lower priority
  abbreviated: /^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,
  // note the order of 'Mười' since it is sub-string of Mười Một, so must be lower priority
  wide: /^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i
}, cf = {
  narrow: [
    /0?1$/i,
    /0?2/i,
    /3/,
    /4/,
    /5/,
    /6/,
    /7/,
    /8/,
    /9/,
    /10/,
    /11/,
    /12/
  ],
  abbreviated: [
    /^thg[ _]?0?1(?!\d)/i,
    /^thg[ _]?0?2/i,
    /^thg[ _]?0?3/i,
    /^thg[ _]?0?4/i,
    /^thg[ _]?0?5/i,
    /^thg[ _]?0?6/i,
    /^thg[ _]?0?7/i,
    /^thg[ _]?0?8/i,
    /^thg[ _]?0?9/i,
    /^thg[ _]?10/i,
    /^thg[ _]?11/i,
    /^thg[ _]?12/i
  ],
  wide: [
    /^tháng ?(Một|0?1(?!\d))/i,
    /^tháng ?(Hai|0?2)/i,
    /^tháng ?(Ba|0?3)/i,
    /^tháng ?(Tư|0?4)/i,
    /^tháng ?(Năm|0?5)/i,
    /^tháng ?(Sáu|0?6)/i,
    /^tháng ?(Bảy|0?7)/i,
    /^tháng ?(Tám|0?8)/i,
    /^tháng ?(Chín|0?9)/i,
    /^tháng ?(Mười|10)/i,
    /^tháng ?(Mười ?Một|11)/i,
    /^tháng ?(Mười ?Hai|12)/i
  ]
}, uf = {
  narrow: /^(CN|T2|T3|T4|T5|T6|T7)/i,
  short: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
  abbreviated: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
  wide: /^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i
}, df = {
  narrow: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  short: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  abbreviated: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  wide: [/(Chủ|Chúa) ?Nhật/i, /Hai/i, /Ba/i, /Tư/i, /Năm/i, /Sáu/i, /Bảy/i]
}, ff = {
  narrow: /^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
  abbreviated: /^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
  wide: /^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i
}, pf = {
  any: {
    am: /^(a|sa)/i,
    pm: /^(p|ch[^i]*)/i,
    midnight: /nửa đêm/i,
    noon: /trưa/i,
    morning: /sáng/i,
    afternoon: /chiều/i,
    evening: /tối/i,
    night: /^đêm/i
  }
}, hf = {
  ordinalNumber: bt({
    matchPattern: tf,
    parsePattern: nf,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: oe({
    matchPatterns: rf,
    defaultMatchWidth: "wide",
    parsePatterns: of,
    defaultParseWidth: "any"
  }),
  quarter: oe({
    matchPatterns: af,
    defaultMatchWidth: "wide",
    parsePatterns: sf,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: oe({
    matchPatterns: lf,
    defaultMatchWidth: "wide",
    parsePatterns: cf,
    defaultParseWidth: "wide"
  }),
  day: oe({
    matchPatterns: uf,
    defaultMatchWidth: "wide",
    parsePatterns: df,
    defaultParseWidth: "wide"
  }),
  dayPeriod: oe({
    matchPatterns: ff,
    defaultMatchWidth: "wide",
    parsePatterns: pf,
    defaultParseWidth: "any"
  })
}, gf = {
  code: "vi",
  formatDistance: B7,
  formatLong: Z7,
  formatRelative: U7,
  localize: ef,
  match: hf,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
}, Ky = window.navigator.userAgent.includes("Safari") && !window.navigator.userAgent.includes("Chrome"), mf = Intl && Intl.RelativeTimeFormat, qy = 1e-5, Xy = 4, Yy = 2, E0 = 5, vf = 9, yf = {
  en: x1,
  es: r6,
  uk: N7,
  tr: e7,
  nl: l9,
  ru: _8,
  pl: j9,
  vi: gf,
  fr: H6,
  az: S5
}, Cf = v1(), jt = G4({
  locale: "en-US",
  messages: {
    "components.transaction_status": "Success"
  }
}, Cf), Tt = (e, {
  precision: t,
  notation: n,
  compactDisplay: r
} = {}) => jt.formatNumber(e, {
  minimumFractionDigits: t || 0,
  maximumFractionDigits: t || 0,
  notation: n,
  compactDisplay: r
}), wf = [
  "",
  "k",
  //Thousand
  "M",
  //Million
  "B",
  //Billion
  "T",
  //Trillion
  "e15",
  //Quadrillion
  "e18",
  //Quintillion
  "e21",
  //Sextillion
  "e24",
  //Septillion
  "e27",
  //Octillion
  "e30",
  //Nonillion
  "e33",
  //Decillion
  "e36",
  //Undecillion
  "e39",
  //Duodecillion
  "e42",
  //Tredecillion
  "e45",
  //Quattuordecillion
  "e48",
  //Quindecillion
  "e51",
  //Sexdecillion
  "e54",
  //Septendecillion
  "e57",
  //Octodecillion
  "e60",
  //Novemdecillion
  "e63",
  //Vigintillion
  "e66",
  //Unvigintillion
  "e69",
  //Duovigintillion
  "e72",
  //Trevigintillion
  "e75",
  //Quattuorvigintillion
  "e78",
  //Quinvigintillion
  "e81",
  //Sexvigintillion
  "e84",
  //Septenvigintillion
  "e87",
  //Octovigintillion
  "e90",
  //Novemvigintillion
  "e93",
  //Trigintillion
  "e96",
  //Untrigintillion
  "e99",
  //Duotrigintillion
  "e101",
  //Googol
  "e104"
  //Tretrigintillion
], Qy = (e) => {
  const t = Math.log10(Math.abs(e)) / 3 | 0;
  if ([0, 1, 2].includes(t))
    return Tt(e, {
      precision: E0
    });
  const r = wf[t], i = Math.pow(10, t * 3);
  return (e / i).toFixed(5) + r;
}, Jy = (e, t, {
  precision: n
} = {}) => jt.formatNumber(e, {
  style: "currency",
  currency: t,
  minimumFractionDigits: n,
  maximumFractionDigits: n
}), eC = (e, {
  precision: t
} = {}) => e.toFixed(t || 2), tC = (e) => {
  const t = new Date(e), n = Te.language || "en";
  return `${new Intl.DateTimeFormat(n, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short"
  }).format(t)}`;
}, bf = {
  lessThanXSeconds: "second",
  xSeconds: "second",
  lessThanXMinutes: "minute",
  xMinutes: "minute",
  xHours: "hour",
  xDays: "day",
  xMonths: "month",
  xYears: "year"
}, xf = (e, t, n) => {
  n = n || {};
  const r = n.locale.code || "en";
  return new Intl.RelativeTimeFormat(r, {
    style: "short"
  }).format(-t, bf[e]).replace(".", "");
}, nC = (e) => {
  const t = new Date(e), n = Te.language !== "az" && mf;
  return `${Pd(t, {
    addSuffix: !0,
    locale: {
      ...yf[Te.language],
      ...n && {
        formatDistance: xf
      }
    },
    roundingMethod: "floor"
  })}`;
}, rC = (e) => {
  const t = new Date(e);
  return `${jt.formatDate(t, {
    month: "short",
    day: "numeric",
    year: "numeric"
  })}, ${jt.formatTime(t, {
    hour: "numeric",
    minute: "numeric"
  })}`;
}, iC = (e) => {
  const t = new Date(e);
  return `${jt.formatDate(t, {
    month: "short",
    day: "numeric",
    year: "numeric",
    weekday: "long"
  })}`;
}, oC = (e) => {
  const t = new Date(e);
  return `${jt.formatDate(t, {
    month: "short",
    day: "numeric"
  })}`;
}, aC = (e) => {
  const t = new Date(e);
  return `${jt.formatDate(t, {
    month: "short",
    year: "numeric"
  })}`;
};
var ot = /* @__PURE__ */ ((e) => (e[e.FULL = 0] = "FULL", e[e.TINY = 5] = "TINY", e[e.LITTLE = 10] = "LITTLE", e[e.SMALL = 15] = "SMALL", e[e.MEDIUM = 20] = "MEDIUM", e[e.LARGE = 25] = "LARGE", e))(ot || {});
const Lf = (e, t = 5) => {
  const n = e.length;
  if (n <= t)
    return e;
  const r = e.substring(0, t), i = e.substring(n - t);
  return `${r}...${i}`;
}, G0 = (e, t = 5) => {
  const [r, i] = e.split("-"), o = r.length;
  if (t === 0 || o <= 13)
    return e;
  const s = Lf(r, t);
  return i ? `${s}-${i}` : `${s}`;
}, sC = (e) => kd(e, {}), lC = (e) => `${Tt(e, {
  notation: "compact",
  compactDisplay: "short"
})}`, cC = (e) => Tt(e, {
  precision: 4
}), _f = (e, t) => e && e.length > t ? e.substring(0, t - 1) + "..." : e, mo = (e, t = 15) => {
  const [n, r] = e.split(/(.cspr)$/), i = 13, o = n.length;
  if (o === 0 || o <= i)
    return e;
  const s = n.substring(0, t), a = n.substring(o - t);
  return `${s}...${a}${r}`;
}, Mf = 24, vo = ({
  hash: e,
  href: t = "./",
  csprName: n,
  hashLength: r = void 0,
  minified: i = !0,
  align: o = "center"
}) => {
  const s = n || e || "", a = n && r === ot.TINY ? _f(n, Mf) : n, l = e ? G0(e, r) : null;
  return /* @__PURE__ */ z(J, { itemsSpacing: 4, align: o, children: [
    /* @__PURE__ */ h(Ja, { color: "hash", href: t, children: a || l }),
    /* @__PURE__ */ h(Lu, { value: s, minified: i })
  ] });
}, Sf = (e) => me({
  0: 7.8,
  1: 10,
  2: 23,
  3: 35,
  4: 45,
  5: 55
}, e), If = S("div").withConfig({
  displayName: "truncate-box__StyledTruncateBox",
  componentId: "sc-17n13k-0"
})(({
  size: e = 2,
  lineHeight: t
}) => ({
  display: "inline-block",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "100%",
  maxWidth: `${Sf(e)}em`,
  // fix for Tooltip over Truncated Text in Safari
  "&:after": {
    content: "''",
    display: "block"
  },
  lineHeight: t ? me({
    sm: "1.5rem",
    xs: "1.25rem"
  }, t) : "unset"
})), S1 = ge.forwardRef((e, t) => /* @__PURE__ */ h(If, { ref: t, ...e })), Ef = S(S1).withConfig({
  displayName: "address__StyledTruncateBox",
  componentId: "sc-yrlbi9-0"
})(() => ({
  height: "20px"
})), yo = S(ne).withConfig({
  displayName: "address__StyledBodyText",
  componentId: "sc-yrlbi9-1"
})(({
  theme: e
}) => ({
  color: e.styleguideColors.contentBlue,
  "& > *": {
    color: e.styleguideColors.contentBlue
  },
  "&:hover > *": {
    color: e.styleguideColors.fillPrimaryRed
  },
  "&:active > *": {
    color: e.styleguideColors.fillPrimaryRedClick
  }
}));
var Pf = /* @__PURE__ */ ((e) => (e.default = "default", e.big = "big", e))(Pf || {});
const uC = ({
  hash: e,
  csprName: t,
  logo: n,
  name: r,
  loading: i,
  hashLength: o,
  minifiedCopyNotification: s,
  navigateToPath: a,
  tooltipCaption: l,
  additionalTooltipBlock: c,
  nameTruncateSize: u = 5,
  avatarSize: d = "default",
  hashFontSize: f = "default",
  horizonalAlign: p = "center"
}) => {
  if (i || !e)
    return /* @__PURE__ */ h(J, { align: "center", itemsSpacing: 12, children: /* @__PURE__ */ h(Jt, { hash: e, loading: i, size: d }) });
  const y = p === "center" ? "center" : "flex-start";
  return e === "00" ? /* @__PURE__ */ z(J, { align: "center", itemsSpacing: 12, children: [
    /* @__PURE__ */ h(Jt, { hash: e, loading: i, size: d }),
    /* @__PURE__ */ z(Ee, { children: [
      /* @__PURE__ */ h(ne, { size: 2, monotype: !0, children: e }),
      /* @__PURE__ */ h(ne, { size: 3, variation: "darkGray", noWrap: !0, children: "System" })
    ] })
  ] }) : /* @__PURE__ */ z(J, { align: y, itemsSpacing: 12, children: [
    n ? /* @__PURE__ */ h(Jt, { src: n, loading: i, size: d, alt: "Account logo" }) : /* @__PURE__ */ h(Jt, { hash: e, loading: i, size: d }),
    /* @__PURE__ */ h(_t, { caption: l, tooltipContent: e, additionalBlock: c, children: /* @__PURE__ */ h(Ee, { children: r ? /* @__PURE__ */ z(We, { children: [
      /* @__PURE__ */ h(yo, { size: 3, scale: f === "big" ? "sm" : void 0, monotype: !t, children: /* @__PURE__ */ h(vo, { minified: s, href: a, hash: e, csprName: t && mo(t, ot.TINY), hashLength: o, align: y }) }),
      /* @__PURE__ */ h(J, { itemsSpacing: 6, align: y, children: /* @__PURE__ */ h(Ef, { size: u, children: /* @__PURE__ */ h(ne, { size: 3, variation: "darkGray", noWrap: !0, children: r }) }) })
    ] }) : /* @__PURE__ */ h(yo, { size: 3, scale: f === "big" ? "sm" : void 0, monotype: !t, children: /* @__PURE__ */ h(vo, { href: a, hash: e, csprName: t && mo(t, ot.TINY), hashLength: o, minified: s, align: y }) }) }) })
  ] });
}, W2 = S.button.withConfig({
  displayName: "button__BaseButton",
  componentId: "sc-e3gw2w-0"
})(({
  theme: e,
  disabled: t,
  height: n = "36",
  width: r = "100%",
  lineHeight: i = "sm",
  hasOutline: o = !1
}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  borderRadius: e.borderRadius.base,
  fontFamily: e.typography.fontFamily.primary,
  fontWeight: me({
    24: e.typography.fontWeight.medium,
    36: e.typography.fontWeight.medium,
    40: e.typography.fontWeight.semiBold
  }, n),
  fontSize: me({
    24: "0.688rem",
    36: "0.875rem",
    40: "0.875rem"
  }, n),
  minHeight: me({
    24: 24,
    36: 36,
    40: 40
  }, n),
  lineHeight: me({
    sm: "1.5rem",
    xs: "1.25rem"
  }, i),
  padding: me({
    24: "2px 10px",
    36: "8px 25px",
    40: "10px 30px"
  }, n),
  width: me({
    100: "100px",
    120: "120px",
    140: "140px",
    176: "176px",
    "100%": "100%"
  }, r),
  ...!o && {
    ":focus": {
      outline: "none"
    }
  },
  ...t && {
    pointerEvents: "none"
  }
})), I1 = S(W2).withConfig({
  displayName: "button__PrimaryBlueButton",
  componentId: "sc-e3gw2w-1"
})(({
  theme: e,
  disabled: t
}) => ({
  color: e.styleguideColors.contentOnFill,
  background: e.styleguideColors.fillPrimaryBlue,
  ": hover": {
    background: e.styleguideColors.fillPrimaryBlueHover
  },
  ": active": {
    background: e.styleguideColors.fillPrimaryBlueClick
  },
  ...t && {
    color: e.styleguideColors.contentTertiary,
    background: e.styleguideColors.backgroundSecondary
  }
})), kf = S(W2).withConfig({
  displayName: "button__PrimaryRedButton",
  componentId: "sc-e3gw2w-2"
})(({
  theme: e,
  disabled: t
}) => ({
  color: e.styleguideColors.contentOnFill,
  background: e.styleguideColors.fillPrimaryRed,
  ": hover": {
    background: e.styleguideColors.fillPrimaryRedHover
  },
  ": active": {
    background: e.styleguideColors.fillPrimaryRedClick
  },
  ...t && {
    color: e.styleguideColors.contentTertiary,
    background: e.styleguideColors.fillSecondary
  }
})), Of = S(W2).withConfig({
  displayName: "button__SecondaryBlueButton",
  componentId: "sc-e3gw2w-3"
})(({
  theme: e,
  disabled: t
}) => ({
  color: e.styleguideColors.contentBlue,
  background: e.styleguideColors.fillSecondary,
  ": hover": {
    background: e.styleguideColors.fillSecondaryBlueHover,
    borderColor: "transparent"
  },
  ": active": {
    background: e.styleguideColors.fillSecondaryBlueClick,
    borderColor: "transparent"
  },
  ...t && {
    color: e.styleguideColors.contentTertiary,
    background: e.styleguideColors.backgroundPrimary
  }
})), Tf = S(W2).withConfig({
  displayName: "button__SecondaryRedButton",
  componentId: "sc-e3gw2w-4"
})(({
  theme: e,
  disabled: t
}) => ({
  color: e.styleguideColors.contentRed,
  background: e.styleguideColors.fillSecondary,
  ": hover": {
    background: e.styleguideColors.fillSecondaryRedHover
  },
  ": active": {
    background: e.styleguideColors.fillSecondaryRedClick
  },
  ...t && {
    color: e.styleguideColors.contentTertiary,
    background: e.styleguideColors.fillSecondary
  }
})), Hf = S(W2).withConfig({
  displayName: "button__UtilityButton",
  componentId: "sc-e3gw2w-5"
})(({
  theme: e,
  disabled: t
}) => ({
  color: e.styleguideColors.fillPrimaryRed,
  background: e.styleguideColors.backgroundSecondary,
  ": hover": {
    background: e.styleguideColors.fillSecondaryRedHover
  },
  ": active": {
    background: e.styleguideColors.fillSecondaryRedClick
  },
  ...t && {
    color: e.styleguideColors.contentTertiary,
    background: e.styleguideColors.backgroundPrimary
  }
})), Df = {
  primaryBlue: I1,
  primaryRed: kf,
  secondaryBlue: Of,
  secondaryRed: Tf,
  utility: Hf
}, u2 = ge.forwardRef(function({
  color: t = "primaryBlue",
  ...n
}, r) {
  const i = Df[t] || I1;
  return /* @__PURE__ */ h(i, { ref: r, color: t, "aria-disabled": !!n.disabled, tabIndex: 0, ...n });
}), Rf = S(p2).withConfig({
  displayName: "label__StyledText",
  componentId: "sc-1nad54u-0"
})(({
  theme: e,
  size: t = 2,
  transform: n = "unset",
  lineHeight: r = "sm"
}) => ({
  fontWeight: me({
    1: e.typography.fontWeight.bold,
    2: e.typography.fontWeight.medium
  }, t),
  lineHeight: me({
    sm: "1.5rem",
    xs: "1.25rem",
    xxs: "0.75rem"
  }, r),
  fontSize: "0.625rem",
  textTransform: n
}));
function Nf(e) {
  return /* @__PURE__ */ h(Rf, { ...e });
}
const Af = (e, t) => ({
  green: e.styleguideColors.fillGreen,
  violet: e.styleguideColors.fillVioletGradient,
  blue: e.colorSpecialCase.blueBanner2,
  gray: e.styleguideColors.contentQuaternary,
  fillBlueGradient: e.styleguideColors.fillBlueGradient,
  lightBlue: e.styleguideColors.contentLightBlue
})[t] || t, Bf = S.div.withConfig({
  displayName: "badge__StyledBadge",
  componentId: "sc-1sbk5zi-0"
})(({
  theme: e,
  bgColor: t,
  textColor: n
}) => ({
  display: "flex",
  alignItems: "center",
  width: "fit-content",
  color: n || e.styleguideColors.contentOnFill,
  background: Af(e, t),
  borderRadius: "40px",
  minHeight: "17px",
  padding: "0 6px 1px 6px"
})), Ff = S.div.withConfig({
  displayName: "badge__StyledLabelContentWrapper",
  componentId: "sc-1sbk5zi-1"
})(({
  theme: e
}) => ({
  a: {
    cursor: "pointer",
    color: e.styleguideColors.contentOnFill
  },
  "a:hover": {
    color: e.styleguideColors.contentQuaternary
  }
})), dn = ge.forwardRef((e, t) => /* @__PURE__ */ h(Bf, { ref: t, bgColor: e.variation || "green", textColor: e.textColor, children: /* @__PURE__ */ h(Nf, { size: 2, capitalize: e.capitalize || !0, lineHeight: e.lineHeight || "sm", children: /* @__PURE__ */ h(Ff, { children: e.label }) }) })), Co = {
  blue: "contentBlue",
  gray: "contentTertiary"
}, Vf = S(ve).withConfig({
  displayName: "copy-hash__SuccessIconWrapper",
  componentId: "sc-1gbsp0v-0"
})(({
  theme: e
}) => ({
  color: e.styleguideColors.contentGreen
})), $f = S(ve).withConfig({
  displayName: "copy-hash__StyledSvgIcon",
  componentId: "sc-1gbsp0v-1"
})(({
  theme: e,
  variation: t = "blue"
}) => e.withMedia({
  color: e.styleguideColors[Co[t]],
  path: {
    fill: e.styleguideColors[Co[t]]
  }
})), E1 = ({
  value: e,
  label: t = "Copy Public Key",
  copiedLabel: n = "Copied!",
  variation: r,
  styles: i,
  minified: o = !1
}) => {
  const [s, a] = fe(!1);
  return /* @__PURE__ */ h(J, { style: i, align: "center", onClick: () => {
    Qa(e), a(!0), setTimeout(() => a(!1), 3e3);
  }, children: s ? /* @__PURE__ */ z(J, { align: "center", children: [
    /* @__PURE__ */ h(Vf, { src: Kn, marginRight: !0 }),
    !o && /* @__PURE__ */ h(ne, { size: 3, variation: "green", children: n })
  ] }) : /* @__PURE__ */ z(J, { align: "center", children: [
    /* @__PURE__ */ h($f, { src: Oa, marginRight: !0, variation: r }),
    !o && /* @__PURE__ */ h(ne, { size: 3, variation: "black", children: t })
  ] }) });
}, Zf = S(p2).withConfig({
  displayName: "subtitle-text__StyledText",
  componentId: "sc-66nqe4-0"
})(({
  theme: e,
  size: t,
  scale: n = "md",
  monotype: r = !1
}) => ({
  fontWeight: r ? e.typography.fontWeight.regular : me({
    1: e.typography.fontWeight.semiBold,
    2: e.typography.fontWeight.regular,
    3: e.typography.fontWeight.light
  }, t),
  fontSize: me({
    lg: "1.5rem",
    md: "1.25rem"
  }, n),
  lineHeight: "2rem",
  "&:where(h1, h2, h3, h4, h5, h6)": {
    margin: 0
  }
})), U2 = ge.forwardRef((e, t) => /* @__PURE__ */ h(Zf, { ref: t, ...e })), Wf = S(J).withConfig({
  displayName: "checkbox__StyledFlexRow",
  componentId: "sc-mn33h4-0"
})(({
  theme: e,
  checked: t,
  disabled: n,
  customCheckedColor: r,
  customUncheckedColor: i
}) => ({
  cursor: n ? "default" : "pointer",
  width: "fit-content",
  pointerEvents: n ? "none" : "auto",
  svg: {
    fill: t && !n && r ? r : t && !n ? e.styleguideColors.contentBlue : "none",
    path: {
      fill: t && !n ? e.styleguideColors.backgroundPrimary : t && n ? e.styleguideColors.contentQuaternary : "none"
    },
    rect: {
      stroke: n ? e.styleguideColors.contentQuaternary : i || e.styleguideColors.contentBlue
    }
  },
  span: {
    color: n ? e.styleguideColors.contentQuaternary : e.styleguideColors.contentPrimary
  }
}));
var P1 = /* @__PURE__ */ ((e) => (e.default = "default", e.small = "small", e))(P1 || {});
const Uf = ({
  checkboxFontSize: e,
  ...t
}) => e === "small" ? /* @__PURE__ */ h(ne, { size: 3, lineHeight: "xs", ...t }) : /* @__PURE__ */ h(U2, { size: 2, ...t });
function jf({
  checked: e,
  onChange: t,
  label: n,
  disabled: r,
  customCheckedColor: i,
  customUncheckedColor: o,
  checkboxFontSize: s = "default"
  /* default */
}) {
  const a = (c) => {
    t && t(c);
  };
  return /* @__PURE__ */ z(Wf, { itemsSpacing: 8, align: "center", checked: e, disabled: r, onClick: a, onKeyDown: (c) => {
    c.key === "Enter" && a(c);
  }, customCheckedColor: i, customUncheckedColor: o, role: "checkbox", "aria-checked": e, "aria-disabled": r, "aria-label": e ? "Checked" : "Not checked", tabIndex: 0, children: [
    /* @__PURE__ */ h(ve, { src: e ? r ? Al : Bl : Fl }),
    /* @__PURE__ */ h(Uf, { checkboxFontSize: s, children: n })
  ] });
}
var Gf = /* @__PURE__ */ ((e) => (e[e.small = 1] = "small", e[e.default = 2] = "default", e))(Gf || {});
const zf = {
  1: "darkGray",
  2: "black"
}, Kf = S(p2).withConfig({
  displayName: "circular-indicator__StyledText",
  componentId: "sc-4hrntg-0"
})(({
  theme: e,
  size: t = 3,
  textSize: n
}) => ({
  fontWeight: me({
    1: e.typography.fontWeight.semiBold,
    2: e.typography.fontWeight.medium,
    3: e.typography.fontWeight.regular
  }, t),
  fontSize: me({
    1: "0.813rem",
    2: "0.875rem"
  }, n),
  lineHeight: "1.25rem"
})), n0 = [{
  id: 1,
  limit: 0,
  color: "E6332A"
}, {
  id: 2,
  limit: 0.25,
  color: "ED8417"
}, {
  id: 3,
  limit: 0.5,
  color: "F1BF0B"
}, {
  id: 4,
  limit: 0.75,
  color: "BBDE31"
}, {
  id: 5,
  limit: 0.99,
  color: "86DE56"
}, {
  id: 6,
  limit: 1,
  color: "31DE91"
}], qf = (e) => {
  if (e < 95)
    return `#${n0[0].color}`;
  const r = (e - 95) / 5, i = n0.find((f) => r <= f.limit), o = i.color;
  if (i.id === n0.length)
    return `#${o}`;
  const s = n0.find((f) => f.id === i.id + 1).color, a = (f) => f.toString(16).padStart(2, "0"), l = Math.ceil(parseInt(o.substring(0, 2), 16) * r + parseInt(s.substring(0, 2), 16) * (1 - r)), c = Math.ceil(parseInt(o.substring(2, 4), 16) * r + parseInt(s.substring(2, 4), 16) * (1 - r)), u = Math.ceil(parseInt(o.substring(4, 6), 16) * r + parseInt(s.substring(4, 6), 16) * (1 - r));
  return `#${a(l) + a(c) + a(u)}`;
};
function dC({
  size: e,
  progress: t,
  textSize: n,
  title: r
}) {
  const {
    stroke: i,
    radius: o
  } = me({
    medium: {
      stroke: 4,
      radius: 12
    }
  }, e);
  (t == null || t < 0 || t > 100) && (t = 0);
  const s = o - i / 2, a = s * 2 * Math.PI, l = a - t / 100 * a, c = t.toPrecision(3), u = qf(t);
  return /* @__PURE__ */ z(J, { align: "center", tag: "span", children: [
    /* @__PURE__ */ z("svg", { height: o * 2, width: o * 2, children: [
      /* @__PURE__ */ h("title", { children: r }),
      /* @__PURE__ */ h("circle", { stroke: u, fill: "transparent", strokeWidth: i, strokeDasharray: a + " " + a, style: {
        strokeDashoffset: l,
        transition: "stroke-dashoffset 0.35s",
        transform: "rotate(-90deg)",
        transformOrigin: "50% 50%"
      }, r: s, cx: o, cy: o })
    ] }),
    /* @__PURE__ */ z(Kf, { size: 3, style: {
      marginLeft: 8
    }, textSize: n, variation: zf[n], children: [
      c,
      "%"
    ] })
  ] });
}
function Ze(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function re() {
  return re = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, re.apply(null, arguments);
}
function Rn(e, t) {
  return Rn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Rn(e, t);
}
function Xf(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Rn(e, t);
}
var r0 = { exports: {} }, i0 = { exports: {} }, we = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wo;
function Yf() {
  if (wo) return we;
  wo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function v(b) {
    if (typeof b == "object" && b !== null) {
      var I = b.$$typeof;
      switch (I) {
        case t:
          switch (b = b.type, b) {
            case l:
            case c:
            case r:
            case o:
            case i:
            case d:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case a:
                case u:
                case y:
                case p:
                case s:
                  return b;
                default:
                  return I;
              }
          }
        case n:
          return I;
      }
    }
  }
  function w(b) {
    return v(b) === c;
  }
  return we.AsyncMode = l, we.ConcurrentMode = c, we.ContextConsumer = a, we.ContextProvider = s, we.Element = t, we.ForwardRef = u, we.Fragment = r, we.Lazy = y, we.Memo = p, we.Portal = n, we.Profiler = o, we.StrictMode = i, we.Suspense = d, we.isAsyncMode = function(b) {
    return w(b) || v(b) === l;
  }, we.isConcurrentMode = w, we.isContextConsumer = function(b) {
    return v(b) === a;
  }, we.isContextProvider = function(b) {
    return v(b) === s;
  }, we.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, we.isForwardRef = function(b) {
    return v(b) === u;
  }, we.isFragment = function(b) {
    return v(b) === r;
  }, we.isLazy = function(b) {
    return v(b) === y;
  }, we.isMemo = function(b) {
    return v(b) === p;
  }, we.isPortal = function(b) {
    return v(b) === n;
  }, we.isProfiler = function(b) {
    return v(b) === o;
  }, we.isStrictMode = function(b) {
    return v(b) === i;
  }, we.isSuspense = function(b) {
    return v(b) === d;
  }, we.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === c || b === o || b === i || b === d || b === f || typeof b == "object" && b !== null && (b.$$typeof === y || b.$$typeof === p || b.$$typeof === s || b.$$typeof === a || b.$$typeof === u || b.$$typeof === g || b.$$typeof === _ || b.$$typeof === C || b.$$typeof === m);
  }, we.typeOf = v, we;
}
var be = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bo;
function Qf() {
  return bo || (bo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function v(W) {
      return typeof W == "string" || typeof W == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      W === r || W === c || W === o || W === i || W === d || W === f || typeof W == "object" && W !== null && (W.$$typeof === y || W.$$typeof === p || W.$$typeof === s || W.$$typeof === a || W.$$typeof === u || W.$$typeof === g || W.$$typeof === _ || W.$$typeof === C || W.$$typeof === m);
    }
    function w(W) {
      if (typeof W == "object" && W !== null) {
        var ye = W.$$typeof;
        switch (ye) {
          case t:
            var X = W.type;
            switch (X) {
              case l:
              case c:
              case r:
              case o:
              case i:
              case d:
                return X;
              default:
                var Pe = X && X.$$typeof;
                switch (Pe) {
                  case a:
                  case u:
                  case y:
                  case p:
                  case s:
                    return Pe;
                  default:
                    return ye;
                }
            }
          case n:
            return ye;
        }
      }
    }
    var b = l, I = c, O = a, V = s, A = t, N = u, T = r, D = y, $ = p, x = n, E = o, R = i, L = d, k = !1;
    function Z(W) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(W) || w(W) === l;
    }
    function M(W) {
      return w(W) === c;
    }
    function P(W) {
      return w(W) === a;
    }
    function H(W) {
      return w(W) === s;
    }
    function B(W) {
      return typeof W == "object" && W !== null && W.$$typeof === t;
    }
    function F(W) {
      return w(W) === u;
    }
    function j(W) {
      return w(W) === r;
    }
    function G(W) {
      return w(W) === y;
    }
    function K(W) {
      return w(W) === p;
    }
    function q(W) {
      return w(W) === n;
    }
    function te(W) {
      return w(W) === o;
    }
    function Q(W) {
      return w(W) === i;
    }
    function se(W) {
      return w(W) === d;
    }
    be.AsyncMode = b, be.ConcurrentMode = I, be.ContextConsumer = O, be.ContextProvider = V, be.Element = A, be.ForwardRef = N, be.Fragment = T, be.Lazy = D, be.Memo = $, be.Portal = x, be.Profiler = E, be.StrictMode = R, be.Suspense = L, be.isAsyncMode = Z, be.isConcurrentMode = M, be.isContextConsumer = P, be.isContextProvider = H, be.isElement = B, be.isForwardRef = F, be.isFragment = j, be.isLazy = G, be.isMemo = K, be.isPortal = q, be.isProfiler = te, be.isStrictMode = Q, be.isSuspense = se, be.isValidElementType = v, be.typeOf = w;
  }()), be;
}
var xo;
function k1() {
  return xo || (xo = 1, process.env.NODE_ENV === "production" ? i0.exports = Yf() : i0.exports = Qf()), i0.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var fn, Lo;
function Jf() {
  if (Lo) return fn;
  Lo = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var s = {}, a = 0; a < 10; a++)
        s["_" + String.fromCharCode(a)] = a;
      var l = Object.getOwnPropertyNames(s).map(function(u) {
        return s[u];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        c[u] = u;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return fn = i() ? Object.assign : function(o, s) {
    for (var a, l = r(o), c, u = 1; u < arguments.length; u++) {
      a = Object(arguments[u]);
      for (var d in a)
        t.call(a, d) && (l[d] = a[d]);
      if (e) {
        c = e(a);
        for (var f = 0; f < c.length; f++)
          n.call(a, c[f]) && (l[c[f]] = a[c[f]]);
      }
    }
    return l;
  }, fn;
}
var pn, _o;
function sr() {
  if (_o) return pn;
  _o = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return pn = e, pn;
}
var hn, Mo;
function O1() {
  return Mo || (Mo = 1, hn = Function.call.bind(Object.prototype.hasOwnProperty)), hn;
}
var gn, So;
function ep() {
  if (So) return gn;
  So = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ sr(), n = {}, r = /* @__PURE__ */ O1();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(o, s, a, l, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in o)
        if (r(o, u)) {
          var d;
          try {
            if (typeof o[u] != "function") {
              var f = Error(
                (l || "React class") + ": " + a + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            d = o[u](s, u, l, a, null, t);
          } catch (y) {
            d = y;
          }
          if (d && !(d instanceof Error) && e(
            (l || "React class") + ": type specification of " + a + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var p = c ? c() : "";
            e(
              "Failed " + a + " type: " + d.message + (p ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, gn = i, gn;
}
var mn, Io;
function tp() {
  if (Io) return mn;
  Io = 1;
  var e = k1(), t = Jf(), n = /* @__PURE__ */ sr(), r = /* @__PURE__ */ O1(), i = /* @__PURE__ */ ep(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(a) {
    var l = "Warning: " + a;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return mn = function(a, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(M) {
      var P = M && (c && M[c] || M[u]);
      if (typeof P == "function")
        return P;
    }
    var f = "<<anonymous>>", p = {
      array: _("array"),
      bigint: _("bigint"),
      bool: _("boolean"),
      func: _("function"),
      number: _("number"),
      object: _("object"),
      string: _("string"),
      symbol: _("symbol"),
      any: C(),
      arrayOf: v,
      element: w(),
      elementType: b(),
      instanceOf: I,
      node: N(),
      objectOf: V,
      oneOf: O,
      oneOfType: A,
      shape: D,
      exact: $
    };
    function y(M, P) {
      return M === P ? M !== 0 || 1 / M === 1 / P : M !== M && P !== P;
    }
    function m(M, P) {
      this.message = M, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function g(M) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, H = 0;
      function B(j, G, K, q, te, Q, se) {
        if (q = q || f, Q = Q || K, se !== n) {
          if (l) {
            var W = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw W.name = "Invariant Violation", W;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = q + ":" + K;
            !P[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            H < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + Q + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[ye] = !0, H++);
          }
        }
        return G[K] == null ? j ? G[K] === null ? new m("The " + te + " `" + Q + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new m("The " + te + " `" + Q + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : M(G, K, q, te, Q);
      }
      var F = B.bind(null, !1);
      return F.isRequired = B.bind(null, !0), F;
    }
    function _(M) {
      function P(H, B, F, j, G, K) {
        var q = H[B], te = R(q);
        if (te !== M) {
          var Q = L(q);
          return new m(
            "Invalid " + j + " `" + G + "` of type " + ("`" + Q + "` supplied to `" + F + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return g(P);
    }
    function C() {
      return g(s);
    }
    function v(M) {
      function P(H, B, F, j, G) {
        if (typeof M != "function")
          return new m("Property `" + G + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var K = H[B];
        if (!Array.isArray(K)) {
          var q = R(K);
          return new m("Invalid " + j + " `" + G + "` of type " + ("`" + q + "` supplied to `" + F + "`, expected an array."));
        }
        for (var te = 0; te < K.length; te++) {
          var Q = M(K, te, F, j, G + "[" + te + "]", n);
          if (Q instanceof Error)
            return Q;
        }
        return null;
      }
      return g(P);
    }
    function w() {
      function M(P, H, B, F, j) {
        var G = P[H];
        if (!a(G)) {
          var K = R(G);
          return new m("Invalid " + F + " `" + j + "` of type " + ("`" + K + "` supplied to `" + B + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(M);
    }
    function b() {
      function M(P, H, B, F, j) {
        var G = P[H];
        if (!e.isValidElementType(G)) {
          var K = R(G);
          return new m("Invalid " + F + " `" + j + "` of type " + ("`" + K + "` supplied to `" + B + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(M);
    }
    function I(M) {
      function P(H, B, F, j, G) {
        if (!(H[B] instanceof M)) {
          var K = M.name || f, q = Z(H[B]);
          return new m("Invalid " + j + " `" + G + "` of type " + ("`" + q + "` supplied to `" + F + "`, expected ") + ("instance of `" + K + "`."));
        }
        return null;
      }
      return g(P);
    }
    function O(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function P(H, B, F, j, G) {
        for (var K = H[B], q = 0; q < M.length; q++)
          if (y(K, M[q]))
            return null;
        var te = JSON.stringify(M, function(se, W) {
          var ye = L(W);
          return ye === "symbol" ? String(W) : W;
        });
        return new m("Invalid " + j + " `" + G + "` of value `" + String(K) + "` " + ("supplied to `" + F + "`, expected one of " + te + "."));
      }
      return g(P);
    }
    function V(M) {
      function P(H, B, F, j, G) {
        if (typeof M != "function")
          return new m("Property `" + G + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var K = H[B], q = R(K);
        if (q !== "object")
          return new m("Invalid " + j + " `" + G + "` of type " + ("`" + q + "` supplied to `" + F + "`, expected an object."));
        for (var te in K)
          if (r(K, te)) {
            var Q = M(K, te, F, j, G + "." + te, n);
            if (Q instanceof Error)
              return Q;
          }
        return null;
      }
      return g(P);
    }
    function A(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var P = 0; P < M.length; P++) {
        var H = M[P];
        if (typeof H != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + k(H) + " at index " + P + "."
          ), s;
      }
      function B(F, j, G, K, q) {
        for (var te = [], Q = 0; Q < M.length; Q++) {
          var se = M[Q], W = se(F, j, G, K, q, n);
          if (W == null)
            return null;
          W.data && r(W.data, "expectedType") && te.push(W.data.expectedType);
        }
        var ye = te.length > 0 ? ", expected one of type [" + te.join(", ") + "]" : "";
        return new m("Invalid " + K + " `" + q + "` supplied to " + ("`" + G + "`" + ye + "."));
      }
      return g(B);
    }
    function N() {
      function M(P, H, B, F, j) {
        return x(P[H]) ? null : new m("Invalid " + F + " `" + j + "` supplied to " + ("`" + B + "`, expected a ReactNode."));
      }
      return g(M);
    }
    function T(M, P, H, B, F) {
      return new m(
        (M || "React class") + ": " + P + " type `" + H + "." + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function D(M) {
      function P(H, B, F, j, G) {
        var K = H[B], q = R(K);
        if (q !== "object")
          return new m("Invalid " + j + " `" + G + "` of type `" + q + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var te in M) {
          var Q = M[te];
          if (typeof Q != "function")
            return T(F, j, G, te, L(Q));
          var se = Q(K, te, F, j, G + "." + te, n);
          if (se)
            return se;
        }
        return null;
      }
      return g(P);
    }
    function $(M) {
      function P(H, B, F, j, G) {
        var K = H[B], q = R(K);
        if (q !== "object")
          return new m("Invalid " + j + " `" + G + "` of type `" + q + "` " + ("supplied to `" + F + "`, expected `object`."));
        var te = t({}, H[B], M);
        for (var Q in te) {
          var se = M[Q];
          if (r(M, Q) && typeof se != "function")
            return T(F, j, G, Q, L(se));
          if (!se)
            return new m(
              "Invalid " + j + " `" + G + "` key `" + Q + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(H[B], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var W = se(K, Q, F, j, G + "." + Q, n);
          if (W)
            return W;
        }
        return null;
      }
      return g(P);
    }
    function x(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(x);
          if (M === null || a(M))
            return !0;
          var P = d(M);
          if (P) {
            var H = P.call(M), B;
            if (P !== M.entries) {
              for (; !(B = H.next()).done; )
                if (!x(B.value))
                  return !1;
            } else
              for (; !(B = H.next()).done; ) {
                var F = B.value;
                if (F && !x(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function E(M, P) {
      return M === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function R(M) {
      var P = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : E(P, M) ? "symbol" : P;
    }
    function L(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var P = R(M);
      if (P === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function k(M) {
      var P = L(M);
      switch (P) {
        case "array":
        case "object":
          return "an " + P;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + P;
        default:
          return P;
      }
    }
    function Z(M) {
      return !M.constructor || !M.constructor.name ? f : M.constructor.name;
    }
    return p.checkPropTypes = i, p.resetWarningCache = i.resetWarningCache, p.PropTypes = p, p;
  }, mn;
}
var vn, Eo;
function np() {
  if (Eo) return vn;
  Eo = 1;
  var e = /* @__PURE__ */ sr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, vn = function() {
    function r(s, a, l, c, u, d) {
      if (d !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, vn;
}
var Po;
function lr() {
  if (Po) return r0.exports;
  if (Po = 1, process.env.NODE_ENV !== "production") {
    var e = k1(), t = !0;
    r0.exports = /* @__PURE__ */ tp()(e.isElement, t);
  } else
    r0.exports = /* @__PURE__ */ np()();
  return r0.exports;
}
var rp = /* @__PURE__ */ lr();
const U = /* @__PURE__ */ U0(rp);
var o0 = { exports: {} }, xe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ko;
function ip() {
  if (ko) return xe;
  ko = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function m(g) {
    if (typeof g == "object" && g !== null) {
      var _ = g.$$typeof;
      switch (_) {
        case e:
          switch (g = g.type, g) {
            case n:
            case i:
            case r:
            case c:
            case u:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case a:
                case s:
                case l:
                case f:
                case d:
                case o:
                  return g;
                default:
                  return _;
              }
          }
        case t:
          return _;
      }
    }
  }
  return xe.ContextConsumer = s, xe.ContextProvider = o, xe.Element = e, xe.ForwardRef = l, xe.Fragment = n, xe.Lazy = f, xe.Memo = d, xe.Portal = t, xe.Profiler = i, xe.StrictMode = r, xe.Suspense = c, xe.SuspenseList = u, xe.isAsyncMode = function() {
    return !1;
  }, xe.isConcurrentMode = function() {
    return !1;
  }, xe.isContextConsumer = function(g) {
    return m(g) === s;
  }, xe.isContextProvider = function(g) {
    return m(g) === o;
  }, xe.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, xe.isForwardRef = function(g) {
    return m(g) === l;
  }, xe.isFragment = function(g) {
    return m(g) === n;
  }, xe.isLazy = function(g) {
    return m(g) === f;
  }, xe.isMemo = function(g) {
    return m(g) === d;
  }, xe.isPortal = function(g) {
    return m(g) === t;
  }, xe.isProfiler = function(g) {
    return m(g) === i;
  }, xe.isStrictMode = function(g) {
    return m(g) === r;
  }, xe.isSuspense = function(g) {
    return m(g) === c;
  }, xe.isSuspenseList = function(g) {
    return m(g) === u;
  }, xe.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === i || g === r || g === c || g === u || g === p || typeof g == "object" && g !== null && (g.$$typeof === f || g.$$typeof === d || g.$$typeof === o || g.$$typeof === s || g.$$typeof === l || g.$$typeof === y || g.getModuleId !== void 0);
  }, xe.typeOf = m, xe;
}
var Le = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oo;
function op() {
  return Oo || (Oo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), y = !1, m = !1, g = !1, _ = !1, C = !1, v;
    v = Symbol.for("react.module.reference");
    function w(X) {
      return !!(typeof X == "string" || typeof X == "function" || X === n || X === i || C || X === r || X === c || X === u || _ || X === p || y || m || g || typeof X == "object" && X !== null && (X.$$typeof === f || X.$$typeof === d || X.$$typeof === o || X.$$typeof === s || X.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      X.$$typeof === v || X.getModuleId !== void 0));
    }
    function b(X) {
      if (typeof X == "object" && X !== null) {
        var Pe = X.$$typeof;
        switch (Pe) {
          case e:
            var ue = X.type;
            switch (ue) {
              case n:
              case i:
              case r:
              case c:
              case u:
                return ue;
              default:
                var he = ue && ue.$$typeof;
                switch (he) {
                  case a:
                  case s:
                  case l:
                  case f:
                  case d:
                  case o:
                    return he;
                  default:
                    return Pe;
                }
            }
          case t:
            return Pe;
        }
      }
    }
    var I = s, O = o, V = e, A = l, N = n, T = f, D = d, $ = t, x = i, E = r, R = c, L = u, k = !1, Z = !1;
    function M(X) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function P(X) {
      return Z || (Z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(X) {
      return b(X) === s;
    }
    function B(X) {
      return b(X) === o;
    }
    function F(X) {
      return typeof X == "object" && X !== null && X.$$typeof === e;
    }
    function j(X) {
      return b(X) === l;
    }
    function G(X) {
      return b(X) === n;
    }
    function K(X) {
      return b(X) === f;
    }
    function q(X) {
      return b(X) === d;
    }
    function te(X) {
      return b(X) === t;
    }
    function Q(X) {
      return b(X) === i;
    }
    function se(X) {
      return b(X) === r;
    }
    function W(X) {
      return b(X) === c;
    }
    function ye(X) {
      return b(X) === u;
    }
    Le.ContextConsumer = I, Le.ContextProvider = O, Le.Element = V, Le.ForwardRef = A, Le.Fragment = N, Le.Lazy = T, Le.Memo = D, Le.Portal = $, Le.Profiler = x, Le.StrictMode = E, Le.Suspense = R, Le.SuspenseList = L, Le.isAsyncMode = M, Le.isConcurrentMode = P, Le.isContextConsumer = H, Le.isContextProvider = B, Le.isElement = F, Le.isForwardRef = j, Le.isFragment = G, Le.isLazy = K, Le.isMemo = q, Le.isPortal = te, Le.isProfiler = Q, Le.isStrictMode = se, Le.isSuspense = W, Le.isSuspenseList = ye, Le.isValidElementType = w, Le.typeOf = b;
  }()), Le;
}
var To;
function ap() {
  return To || (To = 1, process.env.NODE_ENV === "production" ? o0.exports = ip() : o0.exports = op()), o0.exports;
}
var Ho = ap();
const Do = (e) => typeof e == "object" && e != null && e.nodeType === 1, Ro = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", a0 = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const n = getComputedStyle(e, null);
    return Ro(n.overflowY, t) || Ro(n.overflowX, t) || ((r) => {
      const i = ((o) => {
        if (!o.ownerDocument || !o.ownerDocument.defaultView) return null;
        try {
          return o.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(r);
      return !!i && (i.clientHeight < r.scrollHeight || i.clientWidth < r.scrollWidth);
    })(e);
  }
  return !1;
}, s0 = (e, t, n, r, i, o, s, a) => o < e && s > t || o > e && s < t ? 0 : o <= e && a <= n || s >= t && a >= n ? o - e - r : s > t && a < n || o < e && a > n ? s - t + i : 0, sp = (e) => {
  const t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, lp = (e, t) => {
  var n, r, i, o;
  if (typeof document > "u") return [];
  const { inline: s, boundary: a, skipOverflowHiddenElements: l } = t, c = typeof a == "function" ? a : ($) => $ !== a;
  if (!Do(e)) throw new TypeError("Invalid target");
  const u = document.scrollingElement || document.documentElement, d = [];
  let f = e;
  for (; Do(f) && c(f); ) {
    if (f = sp(f), f === u) {
      d.push(f);
      break;
    }
    f != null && f === document.body && a0(f) && !a0(document.documentElement) || f != null && a0(f, l) && d.push(f);
  }
  const p = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth, y = (o = (i = window.visualViewport) == null ? void 0 : i.height) != null ? o : innerHeight, { scrollX: m, scrollY: g } = window, { height: _, width: C, top: v, right: w, bottom: b, left: I } = e.getBoundingClientRect(), { top: O, right: V, left: A } = (($) => {
    const x = window.getComputedStyle($);
    return { top: parseFloat(x.scrollMarginTop) || 0, right: parseFloat(x.scrollMarginRight) || 0, bottom: parseFloat(x.scrollMarginBottom) || 0, left: parseFloat(x.scrollMarginLeft) || 0 };
  })(e);
  let N = v - O, T = s === "center" ? I + C / 2 - A + V : s === "end" ? w + V : I - A;
  const D = [];
  for (let $ = 0; $ < d.length; $++) {
    const x = d[$], { height: E, width: R, top: L, right: k, bottom: Z, left: M } = x.getBoundingClientRect();
    if (v >= 0 && I >= 0 && b <= y && w <= p && (x === u && !a0(x) || v >= L && b <= Z && I >= M && w <= k)) return D;
    const P = getComputedStyle(x), H = parseInt(P.borderLeftWidth, 10), B = parseInt(P.borderTopWidth, 10), F = parseInt(P.borderRightWidth, 10), j = parseInt(P.borderBottomWidth, 10);
    let G = 0, K = 0;
    const q = "offsetWidth" in x ? x.offsetWidth - x.clientWidth - H - F : 0, te = "offsetHeight" in x ? x.offsetHeight - x.clientHeight - B - j : 0, Q = "offsetWidth" in x ? x.offsetWidth === 0 ? 0 : R / x.offsetWidth : 0, se = "offsetHeight" in x ? x.offsetHeight === 0 ? 0 : E / x.offsetHeight : 0;
    if (u === x) G = s0(g, g + y, y, B, j, g + N, g + N + _, _), K = s === "start" ? T : s === "center" ? T - p / 2 : s === "end" ? T - p : s0(m, m + p, p, H, F, m + T, m + T + C, C), G = Math.max(0, G + g), K = Math.max(0, K + m);
    else {
      G = s0(L, Z, E, B, j + te, N, N + _, _), K = s === "start" ? T - M - H : s === "center" ? T - (M + R / 2) + q / 2 : s === "end" ? T - k + F + q : s0(M, k, R, H, F + q, T, T + C, C);
      const { scrollLeft: W, scrollTop: ye } = x;
      G = se === 0 ? 0 : Math.max(0, Math.min(ye + G / se, x.scrollHeight - E / se + te)), K = Q === 0 ? 0 : Math.max(0, Math.min(W + K / Q, x.scrollWidth - R / Q + q)), N += ye - G, T += W - K;
    }
    D.push({ el: x, top: G, left: K });
  }
  return D;
};
var cp = 0;
function No(e) {
  return typeof e == "function" ? e : $e;
}
function $e() {
}
function T1(e, t) {
  if (e) {
    var n = lp(e, {
      boundary: t
    });
    n.forEach(function(r) {
      var i = r.el, o = r.top, s = r.left;
      i.scrollTop = o, i.scrollLeft = s;
    });
  }
}
function Ao(e, t, n) {
  var r = e === t || t instanceof n.Node && e.contains && e.contains(t);
  return r;
}
function z0(e, t) {
  var n;
  function r() {
    n && clearTimeout(n);
  }
  function i() {
    for (var o = arguments.length, s = new Array(o), a = 0; a < o; a++)
      s[a] = arguments[a];
    r(), n = setTimeout(function() {
      n = null, e.apply(void 0, s);
    }, t);
  }
  return i.cancel = r, i;
}
function Ce() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)
      o[s - 1] = arguments[s];
    return t.some(function(a) {
      return a && a.apply(void 0, [r].concat(o)), r.preventDownshiftDefault || r.hasOwnProperty("nativeEvent") && r.nativeEvent.preventDownshiftDefault;
    });
  };
}
function at() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    t.forEach(function(i) {
      typeof i == "function" ? i(r) : i && (i.current = r);
    });
  };
}
function H1() {
  return String(cp++);
}
function up(e) {
  var t = e.isOpen, n = e.resultCount, r = e.previousResultCount;
  return t ? n ? n !== r ? n + " result" + (n === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter key to select." : "" : "No results are available." : "";
}
function Bo(e, t) {
  return e = Array.isArray(e) ? (
    /* istanbul ignore next (preact) */
    e[0]
  ) : e, !e && t ? t : e;
}
function D1(e) {
  return typeof e.type == "string";
}
function R1(e) {
  return e.props;
}
function dp(e, t) {
  console.error('The property "' + t + '" is required in "' + e + '"');
}
var fp = ["highlightedIndex", "inputValue", "isOpen", "selectedItem", "type"];
function l0(e) {
  e === void 0 && (e = {});
  var t = {};
  return fp.forEach(function(n) {
    e.hasOwnProperty(n) && (t[n] = e[n]);
  }), t;
}
function N2(e, t) {
  return !e || !t ? e : Object.keys(e).reduce(function(n, r) {
    return n[r] = P0(t, r) ? t[r] : e[r], n;
  }, {});
}
function P0(e, t) {
  return e[t] !== void 0;
}
function d2(e) {
  var t = e.key, n = e.keyCode;
  return n >= 37 && n <= 40 && t.indexOf("Arrow") !== 0 ? "Arrow" + t : t;
}
function pp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function st(e, t, n, r, i) {
  i === void 0 && (i = !1);
  var o = n.length;
  if (o === 0)
    return -1;
  var s = o - 1;
  (typeof e != "number" || e < 0 || e > s) && (e = t > 0 ? -1 : s + 1);
  var a = e + t;
  a < 0 ? a = i ? s : 0 : a > s && (a = i ? 0 : s);
  var l = Ht(a, t < 0, n, r, i);
  return l === -1 ? e >= o ? -1 : e : l;
}
function Ht(e, t, n, r, i) {
  i === void 0 && (i = !1);
  var o = n.length;
  if (t) {
    for (var s = e; s >= 0; s--)
      if (!r(n[s], s))
        return s;
  } else
    for (var a = e; a < o; a++)
      if (!r(n[a], a))
        return a;
  return i ? Ht(t ? o - 1 : 0, t, n, r) : -1;
}
function k0(e, t, n, r) {
  return r === void 0 && (r = !0), n && t.some(function(i) {
    return i && (Ao(i, e, n) || r && Ao(i, n.document.activeElement, n));
  });
}
var cr = $e;
process.env.NODE_ENV !== "production" && (cr = function(t, n, r) {
  var i = "This prop should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled Downshift element for the lifetime of the component. More info: https://github.com/downshift-js/downshift#control-props";
  Object.keys(t).forEach(function(o) {
    n[o] !== void 0 && r[o] === void 0 ? console.error('downshift: A component has changed the controlled prop "' + o + '" to be uncontrolled. ' + i) : n[o] === void 0 && r[o] !== void 0 && console.error('downshift: A component has changed the uncontrolled prop "' + o + '" to be controlled. ' + i);
  });
});
var hp = z0(function(e) {
  N1(e).textContent = "";
}, 500);
function N1(e) {
  var t = e.getElementById("a11y-status-message");
  return t || (t = e.createElement("div"), t.setAttribute("id", "a11y-status-message"), t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-relevant", "additions text"), Object.assign(t.style, {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px"
  }), e.body.appendChild(t), t);
}
function A1(e, t) {
  if (!(!e || !t)) {
    var n = N1(t);
    n.textContent = e, hp(t);
  }
}
function gp(e) {
  var t = e?.getElementById("a11y-status-message");
  t && t.remove();
}
var B1 = process.env.NODE_ENV !== "production" ? "__autocomplete_unknown__" : 0, F1 = process.env.NODE_ENV !== "production" ? "__autocomplete_mouseup__" : 1, V1 = process.env.NODE_ENV !== "production" ? "__autocomplete_item_mouseenter__" : 2, C0 = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_arrow_up__" : 3, w0 = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_arrow_down__" : 4, $1 = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_escape__" : 5, Z1 = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_enter__" : 6, W1 = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_home__" : 7, U1 = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_end__" : 8, j1 = process.env.NODE_ENV !== "production" ? "__autocomplete_click_item__" : 9, G1 = process.env.NODE_ENV !== "production" ? "__autocomplete_blur_input__" : 10, z1 = process.env.NODE_ENV !== "production" ? "__autocomplete_change_input__" : 11, K1 = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_space_button__" : 12, Nn = process.env.NODE_ENV !== "production" ? "__autocomplete_click_button__" : 13, q1 = process.env.NODE_ENV !== "production" ? "__autocomplete_blur_button__" : 14, X1 = process.env.NODE_ENV !== "production" ? "__autocomplete_controlled_prop_updated_selected_item__" : 15, Y1 = process.env.NODE_ENV !== "production" ? "__autocomplete_touchend__" : 16, mp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blurButton: q1,
  blurInput: G1,
  changeInput: z1,
  clickButton: Nn,
  clickItem: j1,
  controlledPropUpdatedSelectedItem: X1,
  itemMouseEnter: V1,
  keyDownArrowDown: w0,
  keyDownArrowUp: C0,
  keyDownEnd: U1,
  keyDownEnter: Z1,
  keyDownEscape: $1,
  keyDownHome: W1,
  keyDownSpaceButton: K1,
  mouseUp: F1,
  touchEnd: Y1,
  unknown: B1
}), vp = ["refKey", "ref"], yp = ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"], Cp = ["onKeyDown", "onBlur", "onChange", "onInput", "onChangeText"], wp = ["refKey", "ref"], bp = ["onMouseMove", "onMouseDown", "onClick", "onPress", "index", "item"], Q1 = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ function(t) {
    function n(i) {
      var o;
      o = t.call(this, i) || this, o.id = o.props.id || "downshift-" + H1(), o.menuId = o.props.menuId || o.id + "-menu", o.labelId = o.props.labelId || o.id + "-label", o.inputId = o.props.inputId || o.id + "-input", o.getItemId = o.props.getItemId || function(C) {
        return o.id + "-item-" + C;
      }, o.items = [], o.itemCount = null, o.previousResultCount = 0, o.timeoutIds = [], o.internalSetTimeout = function(C, v) {
        var w = setTimeout(function() {
          o.timeoutIds = o.timeoutIds.filter(function(b) {
            return b !== w;
          }), C();
        }, v);
        o.timeoutIds.push(w);
      }, o.setItemCount = function(C) {
        o.itemCount = C;
      }, o.unsetItemCount = function() {
        o.itemCount = null;
      }, o.isItemDisabled = function(C, v) {
        var w = o.getItemNodeFromIndex(v);
        return w && w.hasAttribute("disabled");
      }, o.setHighlightedIndex = function(C, v) {
        C === void 0 && (C = o.props.defaultHighlightedIndex), v === void 0 && (v = {}), v = l0(v), o.internalSetState(re({
          highlightedIndex: C
        }, v));
      }, o.clearSelection = function(C) {
        o.internalSetState({
          selectedItem: null,
          inputValue: "",
          highlightedIndex: o.props.defaultHighlightedIndex,
          isOpen: o.props.defaultIsOpen
        }, C);
      }, o.selectItem = function(C, v, w) {
        v = l0(v), o.internalSetState(re({
          isOpen: o.props.defaultIsOpen,
          highlightedIndex: o.props.defaultHighlightedIndex,
          selectedItem: C,
          inputValue: o.props.itemToString(C)
        }, v), w);
      }, o.selectItemAtIndex = function(C, v, w) {
        var b = o.items[C];
        b != null && o.selectItem(b, v, w);
      }, o.selectHighlightedItem = function(C, v) {
        return o.selectItemAtIndex(o.getState().highlightedIndex, C, v);
      }, o.internalSetState = function(C, v) {
        var w, b, I = {}, O = typeof C == "function";
        return !O && C.hasOwnProperty("inputValue") && o.props.onInputValueChange(C.inputValue, re({}, o.getStateAndHelpers(), C)), o.setState(function(V) {
          var A;
          V = o.getState(V);
          var N = O ? C(V) : C;
          N = o.props.stateReducer(V, N), w = N.hasOwnProperty("selectedItem");
          var T = {};
          return w && N.selectedItem !== V.selectedItem && (b = N.selectedItem), (A = N).type || (A.type = B1), Object.keys(N).forEach(function(D) {
            V[D] !== N[D] && (I[D] = N[D]), D !== "type" && (N[D], P0(o.props, D) || (T[D] = N[D]));
          }), O && N.hasOwnProperty("inputValue") && o.props.onInputValueChange(N.inputValue, re({}, o.getStateAndHelpers(), N)), T;
        }, function() {
          No(v)();
          var V = Object.keys(I).length > 1;
          V && o.props.onStateChange(I, o.getStateAndHelpers()), w && o.props.onSelect(C.selectedItem, o.getStateAndHelpers()), b !== void 0 && o.props.onChange(b, o.getStateAndHelpers()), o.props.onUserAction(I, o.getStateAndHelpers());
        });
      }, o.rootRef = function(C) {
        return o._rootNode = C;
      }, o.getRootProps = function(C, v) {
        var w, b = C === void 0 ? {} : C, I = b.refKey, O = I === void 0 ? "ref" : I, V = b.ref, A = Ze(b, vp), N = v === void 0 ? {} : v, T = N.suppressRefError, D = T === void 0 ? !1 : T;
        o.getRootProps.called = !0, o.getRootProps.refKey = O, o.getRootProps.suppressRefError = D;
        var $ = o.getState(), x = $.isOpen;
        return re((w = {}, w[O] = at(V, o.rootRef), w.role = "combobox", w["aria-expanded"] = x, w["aria-haspopup"] = "listbox", w["aria-owns"] = x ? o.menuId : void 0, w["aria-labelledby"] = o.labelId, w), A);
      }, o.keyDownHandlers = {
        ArrowDown: function(v) {
          var w = this;
          if (v.preventDefault(), this.getState().isOpen) {
            var b = v.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(b, {
              type: w0
            });
          } else
            this.internalSetState({
              isOpen: !0,
              type: w0
            }, function() {
              var I = w.getItemCount();
              if (I > 0) {
                var O = w.getState(), V = O.highlightedIndex, A = st(V, 1, {
                  length: I
                }, w.isItemDisabled, !0);
                w.setHighlightedIndex(A, {
                  type: w0
                });
              }
            });
        },
        ArrowUp: function(v) {
          var w = this;
          if (v.preventDefault(), this.getState().isOpen) {
            var b = v.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(b, {
              type: C0
            });
          } else
            this.internalSetState({
              isOpen: !0,
              type: C0
            }, function() {
              var I = w.getItemCount();
              if (I > 0) {
                var O = w.getState(), V = O.highlightedIndex, A = st(V, -1, {
                  length: I
                }, w.isItemDisabled, !0);
                w.setHighlightedIndex(A, {
                  type: C0
                });
              }
            });
        },
        Enter: function(v) {
          if (v.which !== 229) {
            var w = this.getState(), b = w.isOpen, I = w.highlightedIndex;
            if (b && I != null) {
              v.preventDefault();
              var O = this.items[I], V = this.getItemNodeFromIndex(I);
              if (O == null || V && V.hasAttribute("disabled"))
                return;
              this.selectHighlightedItem({
                type: Z1
              });
            }
          }
        },
        Escape: function(v) {
          v.preventDefault(), this.reset(re({
            type: $1
          }, !this.state.isOpen && {
            selectedItem: null,
            inputValue: ""
          }));
        }
      }, o.buttonKeyDownHandlers = re({}, o.keyDownHandlers, {
        " ": function(v) {
          v.preventDefault(), this.toggleMenu({
            type: K1
          });
        }
      }), o.inputKeyDownHandlers = re({}, o.keyDownHandlers, {
        Home: function(v) {
          var w = this.getState(), b = w.isOpen;
          if (b) {
            v.preventDefault();
            var I = this.getItemCount();
            if (!(I <= 0 || !b)) {
              var O = Ht(0, !1, {
                length: I
              }, this.isItemDisabled);
              this.setHighlightedIndex(O, {
                type: W1
              });
            }
          }
        },
        End: function(v) {
          var w = this.getState(), b = w.isOpen;
          if (b) {
            v.preventDefault();
            var I = this.getItemCount();
            if (!(I <= 0 || !b)) {
              var O = Ht(I - 1, !0, {
                length: I
              }, this.isItemDisabled);
              this.setHighlightedIndex(O, {
                type: U1
              });
            }
          }
        }
      }), o.getToggleButtonProps = function(C) {
        var v = C === void 0 ? {} : C, w = v.onClick;
        v.onPress;
        var b = v.onKeyDown, I = v.onKeyUp, O = v.onBlur, V = Ze(v, yp), A = o.getState(), N = A.isOpen, T = {
          onClick: Ce(w, o.buttonHandleClick),
          onKeyDown: Ce(b, o.buttonHandleKeyDown),
          onKeyUp: Ce(I, o.buttonHandleKeyUp),
          onBlur: Ce(O, o.buttonHandleBlur)
        }, D = V.disabled ? {} : T;
        return re({
          type: "button",
          role: "button",
          "aria-label": N ? "close menu" : "open menu",
          "aria-haspopup": !0,
          "data-toggle": !0
        }, D, V);
      }, o.buttonHandleKeyUp = function(C) {
        C.preventDefault();
      }, o.buttonHandleKeyDown = function(C) {
        var v = d2(C);
        o.buttonKeyDownHandlers[v] && o.buttonKeyDownHandlers[v].call(o, C);
      }, o.buttonHandleClick = function(C) {
        if (C.preventDefault(), o.props.environment) {
          var v = o.props.environment.document, w = v.body, b = v.activeElement;
          w && w === b && C.target.focus();
        }
        process.env.NODE_ENV === "test" ? o.toggleMenu({
          type: Nn
        }) : o.internalSetTimeout(function() {
          return o.toggleMenu({
            type: Nn
          });
        });
      }, o.buttonHandleBlur = function(C) {
        var v = C.target;
        o.internalSetTimeout(function() {
          if (!(o.isMouseDown || !o.props.environment)) {
            var w = o.props.environment.document.activeElement;
            (w == null || w.id !== o.inputId) && w !== v && o.reset({
              type: q1
            });
          }
        });
      }, o.getLabelProps = function(C) {
        return re({
          htmlFor: o.inputId,
          id: o.labelId
        }, C);
      }, o.getInputProps = function(C) {
        var v = C === void 0 ? {} : C, w = v.onKeyDown, b = v.onBlur, I = v.onChange, O = v.onInput;
        v.onChangeText;
        var V = Ze(v, Cp), A, N = {};
        A = "onChange";
        var T = o.getState(), D = T.inputValue, $ = T.isOpen, x = T.highlightedIndex;
        if (!V.disabled) {
          var E;
          N = (E = {}, E[A] = Ce(I, O, o.inputHandleChange), E.onKeyDown = Ce(w, o.inputHandleKeyDown), E.onBlur = Ce(b, o.inputHandleBlur), E);
        }
        return re({
          "aria-autocomplete": "list",
          "aria-activedescendant": $ && typeof x == "number" && x >= 0 ? o.getItemId(x) : void 0,
          "aria-controls": $ ? o.menuId : void 0,
          "aria-labelledby": V && V["aria-label"] ? void 0 : o.labelId,
          // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
          // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
          autoComplete: "off",
          value: D,
          id: o.inputId
        }, N, V);
      }, o.inputHandleKeyDown = function(C) {
        var v = d2(C);
        v && o.inputKeyDownHandlers[v] && o.inputKeyDownHandlers[v].call(o, C);
      }, o.inputHandleChange = function(C) {
        o.internalSetState({
          type: z1,
          isOpen: !0,
          inputValue: C.target.value,
          highlightedIndex: o.props.defaultHighlightedIndex
        });
      }, o.inputHandleBlur = function() {
        o.internalSetTimeout(function() {
          var C;
          if (!(o.isMouseDown || !o.props.environment)) {
            var v = o.props.environment.document.activeElement, w = (v == null || (C = v.dataset) == null ? void 0 : C.toggle) && o._rootNode && o._rootNode.contains(v);
            w || o.reset({
              type: G1
            });
          }
        });
      }, o.menuRef = function(C) {
        o._menuNode = C;
      }, o.getMenuProps = function(C, v) {
        var w, b = C === void 0 ? {} : C, I = b.refKey, O = I === void 0 ? "ref" : I, V = b.ref, A = Ze(b, wp), N = v === void 0 ? {} : v, T = N.suppressRefError, D = T === void 0 ? !1 : T;
        return o.getMenuProps.called = !0, o.getMenuProps.refKey = O, o.getMenuProps.suppressRefError = D, re((w = {}, w[O] = at(V, o.menuRef), w.role = "listbox", w["aria-labelledby"] = A && A["aria-label"] ? void 0 : o.labelId, w.id = o.menuId, w), A);
      }, o.getItemProps = function(C) {
        var v, w = C === void 0 ? {} : C, b = w.onMouseMove, I = w.onMouseDown, O = w.onClick;
        w.onPress;
        var V = w.index, A = w.item, N = A === void 0 ? process.env.NODE_ENV === "production" ? (
          /* istanbul ignore next */
          void 0
        ) : dp("getItemProps", "item") : A, T = Ze(w, bp);
        V === void 0 ? (o.items.push(N), V = o.items.indexOf(N)) : o.items[V] = N;
        var D = "onClick", $ = O, x = (v = {
          // onMouseMove is used over onMouseEnter here. onMouseMove
          // is only triggered on actual mouse movement while onMouseEnter
          // can fire on DOM changes, interrupting keyboard navigation
          onMouseMove: Ce(b, function() {
            V !== o.getState().highlightedIndex && (o.setHighlightedIndex(V, {
              type: V1
            }), o.avoidScrolling = !0, o.internalSetTimeout(function() {
              return o.avoidScrolling = !1;
            }, 250));
          }),
          onMouseDown: Ce(I, function(R) {
            R.preventDefault();
          })
        }, v[D] = Ce($, function() {
          o.selectItemAtIndex(V, {
            type: j1
          });
        }), v), E = T.disabled ? {
          onMouseDown: x.onMouseDown
        } : x;
        return re({
          id: o.getItemId(V),
          role: "option",
          "aria-selected": o.getState().highlightedIndex === V
        }, E, T);
      }, o.clearItems = function() {
        o.items = [];
      }, o.reset = function(C, v) {
        C === void 0 && (C = {}), C = l0(C), o.internalSetState(function(w) {
          var b = w.selectedItem;
          return re({
            isOpen: o.props.defaultIsOpen,
            highlightedIndex: o.props.defaultHighlightedIndex,
            inputValue: o.props.itemToString(b)
          }, C);
        }, v);
      }, o.toggleMenu = function(C, v) {
        C === void 0 && (C = {}), C = l0(C), o.internalSetState(function(w) {
          var b = w.isOpen;
          return re({
            isOpen: !b
          }, b && {
            highlightedIndex: o.props.defaultHighlightedIndex
          }, C);
        }, function() {
          var w = o.getState(), b = w.isOpen, I = w.highlightedIndex;
          b && o.getItemCount() > 0 && typeof I == "number" && o.setHighlightedIndex(I, C), No(v)();
        });
      }, o.openMenu = function(C) {
        o.internalSetState({
          isOpen: !0
        }, C);
      }, o.closeMenu = function(C) {
        o.internalSetState({
          isOpen: !1
        }, C);
      }, o.updateStatus = z0(function() {
        var C;
        if ((C = o.props) != null && (C = C.environment) != null && C.document) {
          var v = o.getState(), w = o.items[v.highlightedIndex], b = o.getItemCount(), I = o.props.getA11yStatusMessage(re({
            itemToString: o.props.itemToString,
            previousResultCount: o.previousResultCount,
            resultCount: b,
            highlightedItem: w
          }, v));
          o.previousResultCount = b, A1(I, o.props.environment.document);
        }
      }, 200);
      var s = o.props, a = s.defaultHighlightedIndex, l = s.initialHighlightedIndex, c = l === void 0 ? a : l, u = s.defaultIsOpen, d = s.initialIsOpen, f = d === void 0 ? u : d, p = s.initialInputValue, y = p === void 0 ? "" : p, m = s.initialSelectedItem, g = m === void 0 ? null : m, _ = o.getState({
        highlightedIndex: c,
        isOpen: f,
        inputValue: y,
        selectedItem: g
      });
      return _.selectedItem != null && o.props.initialInputValue === void 0 && (_.inputValue = o.props.itemToString(_.selectedItem)), o.state = _, o;
    }
    Xf(n, t);
    var r = n.prototype;
    return r.internalClearTimeouts = function() {
      this.timeoutIds.forEach(function(o) {
        clearTimeout(o);
      }), this.timeoutIds = [];
    }, r.getState = function(o) {
      return o === void 0 && (o = this.state), N2(o, this.props);
    }, r.getItemCount = function() {
      var o = this.items.length;
      return this.itemCount != null ? o = this.itemCount : this.props.itemCount !== void 0 && (o = this.props.itemCount), o;
    }, r.getItemNodeFromIndex = function(o) {
      return this.props.environment ? this.props.environment.document.getElementById(this.getItemId(o)) : null;
    }, r.scrollHighlightedItemIntoView = function() {
      {
        var o = this.getItemNodeFromIndex(this.getState().highlightedIndex);
        this.props.scrollIntoView(o, this._menuNode);
      }
    }, r.moveHighlightedIndex = function(o, s) {
      var a = this.getItemCount(), l = this.getState(), c = l.highlightedIndex;
      if (a > 0) {
        var u = st(c, o, {
          length: a
        }, this.isItemDisabled, !0);
        this.setHighlightedIndex(u, s);
      }
    }, r.getStateAndHelpers = function() {
      var o = this.getState(), s = o.highlightedIndex, a = o.inputValue, l = o.selectedItem, c = o.isOpen, u = this.props.itemToString, d = this.id, f = this.getRootProps, p = this.getToggleButtonProps, y = this.getLabelProps, m = this.getMenuProps, g = this.getInputProps, _ = this.getItemProps, C = this.openMenu, v = this.closeMenu, w = this.toggleMenu, b = this.selectItem, I = this.selectItemAtIndex, O = this.selectHighlightedItem, V = this.setHighlightedIndex, A = this.clearSelection, N = this.clearItems, T = this.reset, D = this.setItemCount, $ = this.unsetItemCount, x = this.internalSetState;
      return {
        // prop getters
        getRootProps: f,
        getToggleButtonProps: p,
        getLabelProps: y,
        getMenuProps: m,
        getInputProps: g,
        getItemProps: _,
        // actions
        reset: T,
        openMenu: C,
        closeMenu: v,
        toggleMenu: w,
        selectItem: b,
        selectItemAtIndex: I,
        selectHighlightedItem: O,
        setHighlightedIndex: V,
        clearSelection: A,
        clearItems: N,
        setItemCount: D,
        unsetItemCount: $,
        setState: x,
        // props
        itemToString: u,
        // derived
        id: d,
        // state
        highlightedIndex: s,
        inputValue: a,
        isOpen: c,
        selectedItem: l
      };
    }, r.componentDidMount = function() {
      var o = this;
      if (process.env.NODE_ENV !== "production" && this.getMenuProps.called && !this.getMenuProps.suppressRefError && Fo(this._menuNode, this.getMenuProps), !this.props.environment)
        this.cleanup = function() {
          o.internalClearTimeouts();
        };
      else {
        var s = function() {
          o.isMouseDown = !0;
        }, a = function(p) {
          o.isMouseDown = !1;
          var y = k0(p.target, [o._rootNode, o._menuNode], o.props.environment);
          !y && o.getState().isOpen && o.reset({
            type: F1
          }, function() {
            return o.props.onOuterClick(o.getStateAndHelpers());
          });
        }, l = function() {
          o.isTouchMove = !1;
        }, c = function() {
          o.isTouchMove = !0;
        }, u = function(p) {
          var y = k0(p.target, [o._rootNode, o._menuNode], o.props.environment, !1);
          !o.isTouchMove && !y && o.getState().isOpen && o.reset({
            type: Y1
          }, function() {
            return o.props.onOuterClick(o.getStateAndHelpers());
          });
        }, d = this.props.environment;
        d.addEventListener("mousedown", s), d.addEventListener("mouseup", a), d.addEventListener("touchstart", l), d.addEventListener("touchmove", c), d.addEventListener("touchend", u), this.cleanup = function() {
          o.internalClearTimeouts(), o.updateStatus.cancel(), d.removeEventListener("mousedown", s), d.removeEventListener("mouseup", a), d.removeEventListener("touchstart", l), d.removeEventListener("touchmove", c), d.removeEventListener("touchend", u);
        };
      }
    }, r.shouldScroll = function(o, s) {
      var a = this.props.highlightedIndex === void 0 ? this.getState() : this.props, l = a.highlightedIndex, c = s.highlightedIndex === void 0 ? o : s, u = c.highlightedIndex, d = l && this.getState().isOpen && !o.isOpen, f = l !== u;
      return d || f;
    }, r.componentDidUpdate = function(o, s) {
      process.env.NODE_ENV !== "production" && (cr(this.state, o, this.props), this.getMenuProps.called && !this.getMenuProps.suppressRefError && Fo(this._menuNode, this.getMenuProps)), P0(this.props, "selectedItem") && this.props.selectedItemChanged(o.selectedItem, this.props.selectedItem) && this.internalSetState({
        type: X1,
        inputValue: this.props.itemToString(this.props.selectedItem)
      }), !this.avoidScrolling && this.shouldScroll(s, o) && this.scrollHighlightedItemIntoView(), this.updateStatus();
    }, r.componentWillUnmount = function() {
      this.cleanup();
    }, r.render = function() {
      var o = Bo(this.props.children, $e);
      this.clearItems(), this.getRootProps.called = !1, this.getRootProps.refKey = void 0, this.getRootProps.suppressRefError = void 0, this.getMenuProps.called = !1, this.getMenuProps.refKey = void 0, this.getMenuProps.suppressRefError = void 0, this.getLabelProps.called = !1, this.getInputProps.called = !1;
      var s = Bo(o(this.getStateAndHelpers()));
      if (!s)
        return null;
      if (this.getRootProps.called || this.props.suppressRefError)
        return process.env.NODE_ENV !== "production" && !this.getRootProps.suppressRefError && !this.props.suppressRefError && xp(s, this.getRootProps), s;
      if (D1(s))
        return /* @__PURE__ */ Ma(s, this.getRootProps(R1(s)));
      if (process.env.NODE_ENV !== "production")
        throw new Error("downshift: If you return a non-DOM element, you must apply the getRootProps function");
    }, n;
  }(al);
  return e.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: !1,
    getA11yStatusMessage: up,
    itemToString: function(n) {
      return n == null ? "" : (process.env.NODE_ENV !== "production" && pp(n) && !n.hasOwnProperty("toString") && console.warn("downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.", "The object that was passed:", n), String(n));
    },
    onStateChange: $e,
    onInputValueChange: $e,
    onUserAction: $e,
    onChange: $e,
    onSelect: $e,
    onOuterClick: $e,
    selectedItemChanged: function(n, r) {
      return n !== r;
    },
    environment: (
      /* istanbul ignore next (ssr) */
      typeof window > "u" ? void 0 : window
    ),
    stateReducer: function(n, r) {
      return r;
    },
    suppressRefError: !1,
    scrollIntoView: T1
  }, e.stateChangeTypes = mp, e;
}();
process.env.NODE_ENV !== "production" && (Q1.propTypes = {
  children: U.func,
  defaultHighlightedIndex: U.number,
  defaultIsOpen: U.bool,
  initialHighlightedIndex: U.number,
  initialSelectedItem: U.any,
  initialInputValue: U.string,
  initialIsOpen: U.bool,
  getA11yStatusMessage: U.func,
  itemToString: U.func,
  onChange: U.func,
  onSelect: U.func,
  onStateChange: U.func,
  onInputValueChange: U.func,
  onUserAction: U.func,
  onOuterClick: U.func,
  selectedItemChanged: U.func,
  stateReducer: U.func,
  itemCount: U.number,
  id: U.string,
  environment: U.shape({
    addEventListener: U.func.isRequired,
    removeEventListener: U.func.isRequired,
    document: U.shape({
      createElement: U.func.isRequired,
      getElementById: U.func.isRequired,
      activeElement: U.any.isRequired,
      body: U.any.isRequired
    }).isRequired,
    Node: U.func.isRequired
  }),
  suppressRefError: U.bool,
  scrollIntoView: U.func,
  // things we keep in state for uncontrolled components
  // but can accept as props for controlled components
  /* eslint-disable react/no-unused-prop-types */
  selectedItem: U.any,
  isOpen: U.bool,
  inputValue: U.string,
  highlightedIndex: U.number,
  labelId: U.string,
  inputId: U.string,
  menuId: U.string,
  getItemId: U.func
  /* eslint-enable react/no-unused-prop-types */
});
function Fo(e, t) {
  var n = t.refKey;
  e || console.error('downshift: The ref prop "' + n + '" from getMenuProps was not applied correctly on your menu element.');
}
function xp(e, t) {
  var n = t.refKey, r = n !== "ref", i = !D1(e);
  i && !r && !Ho.isForwardRef(e) ? console.error("downshift: You returned a non-DOM element. You must specify a refKey in getRootProps") : !i && r && console.error('downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified "' + n + '"'), !Ho.isForwardRef(e) && !R1(e)[n] && console.error('downshift: You must apply the ref prop "' + n + '" from getRootProps onto your root element.');
}
var J1 = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: ""
};
function Lp(e, t, n) {
  var r = e.props, i = e.type, o = {};
  Object.keys(t).forEach(function(s) {
    _p(s, e, t, n), n[s] !== t[s] && (o[s] = n[s]);
  }), r.onStateChange && Object.keys(o).length && r.onStateChange(re({
    type: i
  }, o));
}
function _p(e, t, n, r) {
  var i = t.props, o = t.type, s = "on" + dr(e) + "Change";
  i[s] && r[e] !== void 0 && r[e] !== n[e] && i[s](re({
    type: o
  }, r));
}
function Mp(e, t) {
  return t.changes;
}
var Vo = z0(function(e, t) {
  A1(e, t);
}, 200), Sp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Sa : le, es = "useId" in ge ? function(t) {
  var n = t.id, r = t.labelId, i = t.menuId, o = t.getItemId, s = t.toggleButtonId, a = t.inputId, l = "downshift-" + ge.useId();
  n || (n = l);
  var c = ce({
    labelId: r || n + "-label",
    menuId: i || n + "-menu",
    getItemId: o || function(u) {
      return n + "-item-" + u;
    },
    toggleButtonId: s || n + "-toggle-button",
    inputId: a || n + "-input"
  });
  return c.current;
} : function(t) {
  var n = t.id, r = n === void 0 ? "downshift-" + H1() : n, i = t.labelId, o = t.menuId, s = t.getItemId, a = t.toggleButtonId, l = t.inputId, c = ce({
    labelId: i || r + "-label",
    menuId: o || r + "-menu",
    getItemId: s || function(u) {
      return r + "-item-" + u;
    },
    toggleButtonId: a || r + "-toggle-button",
    inputId: l || r + "-input"
  });
  return c.current;
};
function ur(e, t, n, r) {
  var i, o;
  if (e === void 0) {
    if (t === void 0)
      throw new Error(r);
    i = n[t], o = t;
  } else
    o = t === void 0 ? n.indexOf(e) : t, i = e;
  return [i, o];
}
function Ip(e) {
  return /^\S{1}$/.test(e);
}
function dr(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
function K0(e) {
  var t = ce(e);
  return t.current = e, t;
}
function ts(e, t, n, r) {
  var i = ce(), o = ce(), s = Y(function(p, y) {
    o.current = y, p = N2(p, y.props);
    var m = e(p, y), g = y.props.stateReducer(p, re({}, y, {
      changes: m
    }));
    return g;
  }, [e]), a = _a(s, t, n), l = a[0], c = a[1], u = K0(t), d = Y(function(p) {
    return c(re({
      props: u.current
    }, p));
  }, [u]), f = o.current;
  return le(function() {
    var p = N2(i.current, f?.props), y = f && i.current && !r(p, l);
    y && Lp(f, p, l), i.current = l;
  }, [l, f, r]), [l, d];
}
function ns(e, t, n, r) {
  var i = ts(e, t, n, r), o = i[0], s = i[1];
  return [N2(o, t), s];
}
var I2 = {
  itemToString: function(t) {
    return t ? String(t) : "";
  },
  itemToKey: function(t) {
    return t;
  },
  stateReducer: Mp,
  scrollIntoView: T1,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? void 0 : window
  )
};
function vt(e, t, n) {
  n === void 0 && (n = J1);
  var r = e["default" + dr(t)];
  return r !== void 0 ? r : n[t];
}
function Ft(e, t, n) {
  n === void 0 && (n = J1);
  var r = e[t];
  if (r !== void 0)
    return r;
  var i = e["initial" + dr(t)];
  return i !== void 0 ? i : vt(e, t, n);
}
function rs(e) {
  var t = Ft(e, "selectedItem"), n = Ft(e, "isOpen"), r = Ep(e), i = Ft(e, "inputValue");
  return {
    highlightedIndex: r < 0 && t && n ? e.items.findIndex(function(o) {
      return e.itemToKey(o) === e.itemToKey(t);
    }) : r,
    isOpen: n,
    selectedItem: t,
    inputValue: i
  };
}
function Vt(e, t, n) {
  var r = e.items, i = e.initialHighlightedIndex, o = e.defaultHighlightedIndex, s = e.isItemDisabled, a = e.itemToKey, l = t.selectedItem, c = t.highlightedIndex;
  return r.length === 0 ? -1 : i !== void 0 && c === i && !s(r[i], i) ? i : o !== void 0 && !s(r[o], o) ? o : l ? r.findIndex(function(u) {
    return a(l) === a(u);
  }) : n < 0 && !s(r[r.length - 1], r.length - 1) ? r.length - 1 : n > 0 && !s(r[0], 0) ? 0 : -1;
}
function is(e, t, n) {
  var r = ce({
    isMouseDown: !1,
    isTouchMove: !1,
    isTouchEnd: !1
  });
  return le(function() {
    if (!e)
      return $e;
    var i = n.map(function(u) {
      return u.current;
    });
    function o() {
      r.current.isTouchEnd = !1, r.current.isMouseDown = !0;
    }
    function s(u) {
      r.current.isMouseDown = !1, k0(u.target, i, e) || t();
    }
    function a() {
      r.current.isTouchEnd = !1, r.current.isTouchMove = !1;
    }
    function l() {
      r.current.isTouchMove = !0;
    }
    function c(u) {
      r.current.isTouchEnd = !0, !r.current.isTouchMove && !k0(u.target, i, e, !1) && t();
    }
    return e.addEventListener("mousedown", o), e.addEventListener("mouseup", s), e.addEventListener("touchstart", a), e.addEventListener("touchmove", l), e.addEventListener("touchend", c), function() {
      e.removeEventListener("mousedown", o), e.removeEventListener("mouseup", s), e.removeEventListener("touchstart", a), e.removeEventListener("touchmove", l), e.removeEventListener("touchend", c);
    };
  }, [n, e, t]), r.current;
}
var q0 = function() {
  return $e;
};
process.env.NODE_ENV !== "production" && (q0 = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var i = ce(n.reduce(function(s, a) {
    return s[a] = {}, s;
  }, {}));
  le(function() {
    Object.keys(i.current).forEach(function(s) {
      var a = i.current[s];
      if (!Object.keys(a).length) {
        console.error("downshift: You forgot to call the " + s + " getter function on your component / element.");
        return;
      }
      var l = a.suppressRefError, c = a.refKey, u = a.elementRef;
      l || u != null && u.current || console.error('downshift: The ref prop "' + c + '" from ' + s + " was not applied correctly on your element.");
    });
  }, []);
  var o = Y(function(s, a, l, c) {
    i.current[s] = {
      suppressRefError: a,
      refKey: l,
      elementRef: c
    };
  }, []);
  return o;
});
function fr(e, t, n, r) {
  r === void 0 && (r = {});
  var i = r.document, o = j2();
  le(function() {
    if (!(!e || o || !i)) {
      var s = e(t);
      Vo(s, i);
    }
  }, n), le(function() {
    return function() {
      Vo.cancel(), gp(i);
    };
  }, [i]);
}
function os(e) {
  var t = e.highlightedIndex, n = e.isOpen, r = e.itemRefs, i = e.getItemNodeFromIndex, o = e.menuElement, s = e.scrollIntoView, a = ce(!0);
  return Sp(function() {
    t < 0 || !n || !Object.keys(r.current).length || (a.current === !1 ? a.current = !0 : s(i(t), o));
  }, [t]), a;
}
var X0 = $e;
process.env.NODE_ENV !== "production" && (X0 = function(t) {
  var n = t.props, r = t.state, i = ce(n), o = j2();
  le(function() {
    o || (cr(r, i.current, n), i.current = n);
  }, [r, n, o]);
});
function O0(e, t, n) {
  var r;
  n === void 0 && (n = !0);
  var i = ((r = e.items) == null ? void 0 : r.length) && t >= 0;
  return re({
    isOpen: !1,
    highlightedIndex: -1
  }, i && re({
    selectedItem: e.items[t],
    isOpen: vt(e, "isOpen"),
    highlightedIndex: vt(e, "highlightedIndex")
  }, n && {
    inputValue: e.itemToString(e.items[t])
  }));
}
function as(e, t) {
  return e.isOpen === t.isOpen && e.inputValue === t.inputValue && e.highlightedIndex === t.highlightedIndex && e.selectedItem === t.selectedItem;
}
function j2() {
  var e = ge.useRef(!0);
  return ge.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []), e.current;
}
function T0(e) {
  var t = vt(e, "highlightedIndex");
  return t > -1 && e.isItemDisabled(e.items[t], t) ? -1 : t;
}
function Ep(e) {
  var t = Ft(e, "highlightedIndex");
  return t > -1 && e.isItemDisabled(e.items[t], t) ? -1 : t;
}
var b0 = {
  environment: U.shape({
    addEventListener: U.func.isRequired,
    removeEventListener: U.func.isRequired,
    document: U.shape({
      createElement: U.func.isRequired,
      getElementById: U.func.isRequired,
      activeElement: U.any.isRequired,
      body: U.any.isRequired
    }).isRequired,
    Node: U.func.isRequired
  }),
  itemToString: U.func,
  itemToKey: U.func,
  stateReducer: U.func
}, ss = re({}, b0, {
  getA11yStatusMessage: U.func,
  highlightedIndex: U.number,
  defaultHighlightedIndex: U.number,
  initialHighlightedIndex: U.number,
  isOpen: U.bool,
  defaultIsOpen: U.bool,
  initialIsOpen: U.bool,
  selectedItem: U.any,
  initialSelectedItem: U.any,
  defaultSelectedItem: U.any,
  id: U.string,
  labelId: U.string,
  menuId: U.string,
  getItemId: U.func,
  toggleButtonId: U.string,
  onSelectedItemChange: U.func,
  onHighlightedIndexChange: U.func,
  onStateChange: U.func,
  onIsOpenChange: U.func,
  scrollIntoView: U.func
});
function ls(e, t, n) {
  var r = t.type, i = t.props, o;
  switch (r) {
    case n.ItemMouseMove:
      o = {
        highlightedIndex: t.disabled ? -1 : t.index
      };
      break;
    case n.MenuMouseLeave:
      o = {
        highlightedIndex: -1
      };
      break;
    case n.ToggleButtonClick:
    case n.FunctionToggleMenu:
      o = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : Vt(i, e, 0)
      };
      break;
    case n.FunctionOpenMenu:
      o = {
        isOpen: !0,
        highlightedIndex: Vt(i, e, 0)
      };
      break;
    case n.FunctionCloseMenu:
      o = {
        isOpen: !1
      };
      break;
    case n.FunctionSetHighlightedIndex:
      o = {
        highlightedIndex: i.isItemDisabled(i.items[t.highlightedIndex], t.highlightedIndex) ? -1 : t.highlightedIndex
      };
      break;
    case n.FunctionSetInputValue:
      o = {
        inputValue: t.inputValue
      };
      break;
    case n.FunctionReset:
      o = {
        highlightedIndex: T0(i),
        isOpen: vt(i, "isOpen"),
        selectedItem: vt(i, "selectedItem"),
        inputValue: vt(i, "inputValue")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return re({}, e, o);
}
function Pp(e) {
  for (var t = e.keysSoFar, n = e.highlightedIndex, r = e.items, i = e.itemToString, o = e.isItemDisabled, s = t.toLowerCase(), a = 0; a < r.length; a++) {
    var l = (a + n + (t.length < 2 ? 1 : 0)) % r.length, c = r[l];
    if (c !== void 0 && i(c).toLowerCase().startsWith(s) && !o(c, l))
      return l;
  }
  return n;
}
var kp = ee(ee({}, ss), { items: U.array.isRequired, isItemDisabled: U.func }), Op = ee(ee({}, I2), { isItemDisabled: function() {
  return !1;
} }), cs = $e;
process.env.NODE_ENV !== "production" && (cs = function(e, t) {
  U.checkPropTypes(kp, e, "prop", t.name);
});
var x0 = process.env.NODE_ENV !== "production" ? "__togglebutton_click__" : 0, pr = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_arrow_down__" : 1, hr = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_arrow_up__" : 2, H0 = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_character__" : 3, gr = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_escape__" : 4, mr = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_home__" : 5, vr = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_end__" : 6, yr = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_enter__" : 7, Cr = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_space_button__" : 8, wr = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_page_up__" : 9, br = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_page_down__" : 10, D0 = process.env.NODE_ENV !== "production" ? "__togglebutton_blur__" : 11, us = process.env.NODE_ENV !== "production" ? "__menu_mouse_leave__" : 12, ds = process.env.NODE_ENV !== "production" ? "__item_mouse_move__" : 13, xr = process.env.NODE_ENV !== "production" ? "__item_click__" : 14, fs = process.env.NODE_ENV !== "production" ? "__function_toggle_menu__" : 15, ps = process.env.NODE_ENV !== "production" ? "__function_open_menu__" : 16, hs = process.env.NODE_ENV !== "production" ? "__function_close_menu__" : 17, gs = process.env.NODE_ENV !== "production" ? "__function_set_highlighted_index__" : 18, Lr = process.env.NODE_ENV !== "production" ? "__function_select_item__" : 19, An = process.env.NODE_ENV !== "production" ? "__function_set_input_value__" : 20, ms = process.env.NODE_ENV !== "production" ? "__function_reset__" : 21, vs = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  FunctionCloseMenu: hs,
  FunctionOpenMenu: ps,
  FunctionReset: ms,
  FunctionSelectItem: Lr,
  FunctionSetHighlightedIndex: gs,
  FunctionSetInputValue: An,
  FunctionToggleMenu: fs,
  ItemClick: xr,
  ItemMouseMove: ds,
  MenuMouseLeave: us,
  ToggleButtonBlur: D0,
  ToggleButtonClick: x0,
  ToggleButtonKeyDownArrowDown: pr,
  ToggleButtonKeyDownArrowUp: hr,
  ToggleButtonKeyDownCharacter: H0,
  ToggleButtonKeyDownEnd: vr,
  ToggleButtonKeyDownEnter: yr,
  ToggleButtonKeyDownEscape: gr,
  ToggleButtonKeyDownHome: mr,
  ToggleButtonKeyDownPageDown: br,
  ToggleButtonKeyDownPageUp: wr,
  ToggleButtonKeyDownSpaceButton: Cr
});
function Tp(e, t) {
  var n, r = t.type, i = t.props, o = t.altKey, s;
  switch (r) {
    case xr:
      s = {
        isOpen: vt(i, "isOpen"),
        highlightedIndex: T0(i),
        selectedItem: i.items[t.index]
      };
      break;
    case H0:
      {
        var a = t.key, l = "" + e.inputValue + a, c = !e.isOpen && e.selectedItem ? i.items.findIndex(function(p) {
          return i.itemToKey(p) === i.itemToKey(e.selectedItem);
        }) : e.highlightedIndex, u = Pp({
          keysSoFar: l,
          highlightedIndex: c,
          items: i.items,
          itemToString: i.itemToString,
          isItemDisabled: i.isItemDisabled
        });
        s = {
          inputValue: l,
          highlightedIndex: u,
          isOpen: !0
        };
      }
      break;
    case pr:
      {
        var d = e.isOpen ? st(e.highlightedIndex, 1, i.items, i.isItemDisabled) : o && e.selectedItem == null ? -1 : Vt(i, e, 1);
        s = {
          highlightedIndex: d,
          isOpen: !0
        };
      }
      break;
    case hr:
      if (e.isOpen && o)
        s = O0(i, e.highlightedIndex, !1);
      else {
        var f = e.isOpen ? st(e.highlightedIndex, -1, i.items, i.isItemDisabled) : Vt(i, e, -1);
        s = {
          highlightedIndex: f,
          isOpen: !0
        };
      }
      break;
    // only triggered when menu is open.
    case yr:
    case Cr:
      s = O0(i, e.highlightedIndex, !1);
      break;
    case mr:
      s = {
        highlightedIndex: Ht(0, !1, i.items, i.isItemDisabled),
        isOpen: !0
      };
      break;
    case vr:
      s = {
        highlightedIndex: Ht(i.items.length - 1, !0, i.items, i.isItemDisabled),
        isOpen: !0
      };
      break;
    case wr:
      s = {
        highlightedIndex: st(e.highlightedIndex, -10, i.items, i.isItemDisabled)
      };
      break;
    case br:
      s = {
        highlightedIndex: st(e.highlightedIndex, 10, i.items, i.isItemDisabled)
      };
      break;
    case gr:
      s = {
        isOpen: !1,
        highlightedIndex: -1
      };
      break;
    case D0:
      s = re({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((n = i.items) == null ? void 0 : n.length) && {
        selectedItem: i.items[e.highlightedIndex]
      });
      break;
    case Lr:
      s = {
        selectedItem: t.selectedItem
      };
      break;
    default:
      return ls(e, t, vs);
  }
  return re({}, e, s);
}
var Hp = ["onClick"], Dp = ["onMouseLeave", "refKey", "ref"], Rp = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], Np = ["item", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
xt.stateChangeTypes = vs;
function xt(e) {
  e === void 0 && (e = {}), cs(e, xt);
  var t = re({}, Op, e), n = t.scrollIntoView, r = t.environment, i = t.getA11yStatusMessage, o = ns(Tp, t, rs, as), s = o[0], a = o[1], l = s.isOpen, c = s.highlightedIndex, u = s.selectedItem, d = s.inputValue, f = ce(null), p = ce(null), y = ce({}), m = ce(null), g = es(t), _ = K0({
    state: s,
    props: t
  }), C = Y(function(k) {
    return y.current[g.getItemId(k)];
  }, [g]);
  fr(i, s, [l, c, u, d], r);
  var v = os({
    menuElement: p.current,
    highlightedIndex: c,
    isOpen: l,
    itemRefs: y,
    scrollIntoView: n,
    getItemNodeFromIndex: C
  });
  le(function() {
    return m.current = z0(function(k) {
      k({
        type: An,
        inputValue: ""
      });
    }, 500), function() {
      m.current.cancel();
    };
  }, []), le(function() {
    d && m.current(a);
  }, [a, d]), X0({
    props: t,
    state: s
  }), le(function() {
    var k = Ft(t, "isOpen");
    k && f.current && f.current.focus();
  }, []);
  var w = is(r, Y(function() {
    _.current.state.isOpen && a({
      type: D0
    });
  }, [a, _]), $t(function() {
    return [p, f];
  }, [p.current, f.current])), b = q0("getMenuProps", "getToggleButtonProps");
  le(function() {
    l || (y.current = {});
  }, [l]);
  var I = $t(function() {
    return {
      ArrowDown: function(Z) {
        Z.preventDefault(), a({
          type: pr,
          altKey: Z.altKey
        });
      },
      ArrowUp: function(Z) {
        Z.preventDefault(), a({
          type: hr,
          altKey: Z.altKey
        });
      },
      Home: function(Z) {
        Z.preventDefault(), a({
          type: mr
        });
      },
      End: function(Z) {
        Z.preventDefault(), a({
          type: vr
        });
      },
      Escape: function() {
        _.current.state.isOpen && a({
          type: gr
        });
      },
      Enter: function(Z) {
        Z.preventDefault(), a({
          type: _.current.state.isOpen ? yr : x0
        });
      },
      PageUp: function(Z) {
        _.current.state.isOpen && (Z.preventDefault(), a({
          type: wr
        }));
      },
      PageDown: function(Z) {
        _.current.state.isOpen && (Z.preventDefault(), a({
          type: br
        }));
      },
      " ": function(Z) {
        Z.preventDefault();
        var M = _.current.state;
        if (!M.isOpen) {
          a({
            type: x0
          });
          return;
        }
        M.inputValue ? a({
          type: H0,
          key: " "
        }) : a({
          type: Cr
        });
      }
    };
  }, [a, _]), O = Y(function() {
    a({
      type: fs
    });
  }, [a]), V = Y(function() {
    a({
      type: hs
    });
  }, [a]), A = Y(function() {
    a({
      type: ps
    });
  }, [a]), N = Y(function(k) {
    a({
      type: gs,
      highlightedIndex: k
    });
  }, [a]), T = Y(function(k) {
    a({
      type: Lr,
      selectedItem: k
    });
  }, [a]), D = Y(function() {
    a({
      type: ms
    });
  }, [a]), $ = Y(function(k) {
    a({
      type: An,
      inputValue: k
    });
  }, [a]), x = Y(function(k) {
    var Z = k === void 0 ? {} : k, M = Z.onClick, P = Ze(Z, Hp), H = function() {
      var F;
      (F = f.current) == null || F.focus();
    };
    return re({
      id: g.labelId,
      htmlFor: g.toggleButtonId,
      onClick: Ce(M, H)
    }, P);
  }, [g]), E = Y(function(k, Z) {
    var M, P = k === void 0 ? {} : k, H = P.onMouseLeave, B = P.refKey, F = B === void 0 ? "ref" : B, j = P.ref, G = Ze(P, Dp), K = Z === void 0 ? {} : Z, q = K.suppressRefError, te = q === void 0 ? !1 : q, Q = function() {
      a({
        type: us
      });
    };
    return b("getMenuProps", te, F, p), re((M = {}, M[F] = at(j, function(se) {
      p.current = se;
    }), M.id = g.menuId, M.role = "listbox", M["aria-labelledby"] = G && G["aria-label"] ? void 0 : "" + g.labelId, M.onMouseLeave = Ce(H, Q), M), G);
  }, [a, b, g]), R = Y(function(k, Z) {
    var M, P = k === void 0 ? {} : k, H = P.onBlur, B = P.onClick;
    P.onPress;
    var F = P.onKeyDown, j = P.refKey, G = j === void 0 ? "ref" : j, K = P.ref, q = Ze(P, Rp), te = Z === void 0 ? {} : Z, Q = te.suppressRefError, se = Q === void 0 ? !1 : Q, W = _.current.state, ye = function() {
      a({
        type: x0
      });
    }, X = function() {
      W.isOpen && !w.isMouseDown && a({
        type: D0
      });
    }, Pe = function(He) {
      var Ue = d2(He);
      Ue && I[Ue] ? I[Ue](He) : Ip(Ue) && a({
        type: H0,
        key: Ue
      });
    }, ue = re((M = {}, M[G] = at(K, function(he) {
      f.current = he;
    }), M["aria-activedescendant"] = W.isOpen && W.highlightedIndex > -1 ? g.getItemId(W.highlightedIndex) : "", M["aria-controls"] = g.menuId, M["aria-expanded"] = _.current.state.isOpen, M["aria-haspopup"] = "listbox", M["aria-labelledby"] = q && q["aria-label"] ? void 0 : "" + g.labelId, M.id = g.toggleButtonId, M.role = "combobox", M.tabIndex = 0, M.onBlur = Ce(H, X), M), q);
    return q.disabled || (ue.onClick = Ce(B, ye), ue.onKeyDown = Ce(F, Pe)), b("getToggleButtonProps", se, G, f), ue;
  }, [a, g, _, w, b, I]), L = Y(function(k) {
    var Z, M = k === void 0 ? {} : k, P = M.item, H = M.index, B = M.onMouseMove, F = M.onClick, j = M.onMouseDown;
    M.onPress;
    var G = M.refKey, K = G === void 0 ? "ref" : G, q = M.disabled, te = M.ref, Q = Ze(M, Np);
    q !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');
    var se = _.current, W = se.state, ye = se.props, X = ur(P, H, ye.items, "Pass either item or index to getItemProps!"), Pe = X[0], ue = X[1], he = ye.isItemDisabled(Pe, ue), He = function() {
      w.isTouchEnd || ue === W.highlightedIndex || (v.current = !1, a({
        type: ds,
        index: ue,
        disabled: he
      }));
    }, Ue = function() {
      a({
        type: xr,
        index: ue
      });
    }, qe = function(St) {
      return St.preventDefault();
    }, ke = re((Z = {}, Z[K] = at(te, function(je) {
      je && (y.current[g.getItemId(ue)] = je);
    }), Z["aria-disabled"] = he, Z["aria-selected"] = Pe === W.selectedItem, Z.id = g.getItemId(ue), Z.role = "option", Z), Q);
    return he || (ke.onClick = Ce(F, Ue)), ke.onMouseMove = Ce(B, He), ke.onMouseDown = Ce(j, qe), ke;
  }, [_, g, w, v, a]);
  return {
    // prop getters.
    getToggleButtonProps: R,
    getLabelProps: x,
    getMenuProps: E,
    getItemProps: L,
    // actions.
    toggleMenu: O,
    openMenu: A,
    closeMenu: V,
    setHighlightedIndex: N,
    selectItem: T,
    reset: D,
    setInputValue: $,
    // state.
    highlightedIndex: c,
    isOpen: l,
    selectedItem: u,
    inputValue: d
  };
}
var _r = process.env.NODE_ENV !== "production" ? "__input_keydown_arrow_down__" : 0, Mr = process.env.NODE_ENV !== "production" ? "__input_keydown_arrow_up__" : 1, Sr = process.env.NODE_ENV !== "production" ? "__input_keydown_escape__" : 2, Ir = process.env.NODE_ENV !== "production" ? "__input_keydown_home__" : 3, Er = process.env.NODE_ENV !== "production" ? "__input_keydown_end__" : 4, Pr = process.env.NODE_ENV !== "production" ? "__input_keydown_page_up__" : 5, kr = process.env.NODE_ENV !== "production" ? "__input_keydown_page_down__" : 6, Or = process.env.NODE_ENV !== "production" ? "__input_keydown_enter__" : 7, Tr = process.env.NODE_ENV !== "production" ? "__input_change__" : 8, R0 = process.env.NODE_ENV !== "production" ? "__input_blur__" : 9, Hr = process.env.NODE_ENV !== "production" ? "__input_click__" : 10, ys = process.env.NODE_ENV !== "production" ? "__menu_mouse_leave__" : 11, Cs = process.env.NODE_ENV !== "production" ? "__item_mouse_move__" : 12, Dr = process.env.NODE_ENV !== "production" ? "__item_click__" : 13, ws = process.env.NODE_ENV !== "production" ? "__togglebutton_click__" : 14, bs = process.env.NODE_ENV !== "production" ? "__function_toggle_menu__" : 15, xs = process.env.NODE_ENV !== "production" ? "__function_open_menu__" : 16, Ls = process.env.NODE_ENV !== "production" ? "__function_close_menu__" : 17, _s = process.env.NODE_ENV !== "production" ? "__function_set_highlighted_index__" : 18, Rr = process.env.NODE_ENV !== "production" ? "__function_select_item__" : 19, Ms = process.env.NODE_ENV !== "production" ? "__function_set_input_value__" : 20, Ss = process.env.NODE_ENV !== "production" ? "__function_reset__" : 21, Nr = process.env.NODE_ENV !== "production" ? "__controlled_prop_updated_selected_item__" : 22, Is = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ControlledPropUpdatedSelectedItem: Nr,
  FunctionCloseMenu: Ls,
  FunctionOpenMenu: xs,
  FunctionReset: Ss,
  FunctionSelectItem: Rr,
  FunctionSetHighlightedIndex: _s,
  FunctionSetInputValue: Ms,
  FunctionToggleMenu: bs,
  InputBlur: R0,
  InputChange: Tr,
  InputClick: Hr,
  InputKeyDownArrowDown: _r,
  InputKeyDownArrowUp: Mr,
  InputKeyDownEnd: Er,
  InputKeyDownEnter: Or,
  InputKeyDownEscape: Sr,
  InputKeyDownHome: Ir,
  InputKeyDownPageDown: kr,
  InputKeyDownPageUp: Pr,
  ItemClick: Dr,
  ItemMouseMove: Cs,
  MenuMouseLeave: ys,
  ToggleButtonClick: ws
});
function Ap(e) {
  var t = rs(e), n = t.selectedItem, r = t.inputValue;
  return r === "" && n && e.defaultInputValue === void 0 && e.initialInputValue === void 0 && e.inputValue === void 0 && (r = e.itemToString(n)), re({}, t, {
    inputValue: r
  });
}
var Bp = re({}, ss, {
  items: U.array.isRequired,
  isItemDisabled: U.func,
  inputValue: U.string,
  defaultInputValue: U.string,
  initialInputValue: U.string,
  inputId: U.string,
  onInputValueChange: U.func
});
function Fp(e, t, n, r) {
  var i = ce(), o = ts(e, t, n, r), s = o[0], a = o[1], l = j2();
  return le(function() {
    if (P0(t, "selectedItem")) {
      if (!l) {
        var c = t.itemToKey(t.selectedItem) !== t.itemToKey(i.current);
        c && a({
          type: Nr,
          inputValue: t.itemToString(t.selectedItem)
        });
      }
      i.current = s.selectedItem === i.current ? t.selectedItem : s.selectedItem;
    }
  }, [s.selectedItem, t.selectedItem]), [N2(s, t), a];
}
var Es = $e;
process.env.NODE_ENV !== "production" && (Es = function(t, n) {
  U.checkPropTypes(Bp, t, "prop", n.name);
});
var Vp = re({}, I2, {
  isItemDisabled: function() {
    return !1;
  }
});
function $p(e, t) {
  var n, r = t.type, i = t.props, o = t.altKey, s;
  switch (r) {
    case Dr:
      s = {
        isOpen: vt(i, "isOpen"),
        highlightedIndex: T0(i),
        selectedItem: i.items[t.index],
        inputValue: i.itemToString(i.items[t.index])
      };
      break;
    case _r:
      e.isOpen ? s = {
        highlightedIndex: st(e.highlightedIndex, 1, i.items, i.isItemDisabled, !0)
      } : s = {
        highlightedIndex: o && e.selectedItem == null ? -1 : Vt(i, e, 1),
        isOpen: i.items.length >= 0
      };
      break;
    case Mr:
      e.isOpen ? o ? s = O0(i, e.highlightedIndex) : s = {
        highlightedIndex: st(e.highlightedIndex, -1, i.items, i.isItemDisabled, !0)
      } : s = {
        highlightedIndex: Vt(i, e, -1),
        isOpen: i.items.length >= 0
      };
      break;
    case Or:
      s = O0(i, e.highlightedIndex);
      break;
    case Sr:
      s = re({
        isOpen: !1,
        highlightedIndex: -1
      }, !e.isOpen && {
        selectedItem: null,
        inputValue: ""
      });
      break;
    case Pr:
      s = {
        highlightedIndex: st(e.highlightedIndex, -10, i.items, i.isItemDisabled, !0)
      };
      break;
    case kr:
      s = {
        highlightedIndex: st(e.highlightedIndex, 10, i.items, i.isItemDisabled, !0)
      };
      break;
    case Ir:
      s = {
        highlightedIndex: Ht(0, !1, i.items, i.isItemDisabled)
      };
      break;
    case Er:
      s = {
        highlightedIndex: Ht(i.items.length - 1, !0, i.items, i.isItemDisabled)
      };
      break;
    case R0:
      s = re({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((n = i.items) == null ? void 0 : n.length) && t.selectItem && {
        selectedItem: i.items[e.highlightedIndex],
        inputValue: i.itemToString(i.items[e.highlightedIndex])
      });
      break;
    case Tr:
      s = {
        isOpen: !0,
        highlightedIndex: T0(i),
        inputValue: t.inputValue
      };
      break;
    case Hr:
      s = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : Vt(i, e, 0)
      };
      break;
    case Rr:
      s = {
        selectedItem: t.selectedItem,
        inputValue: i.itemToString(t.selectedItem)
      };
      break;
    case Nr:
      s = {
        inputValue: t.inputValue
      };
      break;
    default:
      return ls(e, t, Is);
  }
  return re({}, e, s);
}
var Zp = ["onMouseLeave", "refKey", "ref"], Wp = ["item", "index", "refKey", "ref", "onMouseMove", "onMouseDown", "onClick", "onPress", "disabled"], Up = ["onClick", "onPress", "refKey", "ref"], jp = ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "onClick", "refKey", "ref"];
ft.stateChangeTypes = Is;
function ft(e) {
  e === void 0 && (e = {}), Es(e, ft);
  var t = re({}, Vp, e), n = t.items, r = t.scrollIntoView, i = t.environment, o = t.getA11yStatusMessage, s = Fp($p, t, Ap, as), a = s[0], l = s[1], c = a.isOpen, u = a.highlightedIndex, d = a.selectedItem, f = a.inputValue, p = ce(null), y = ce({}), m = ce(null), g = ce(null), _ = j2(), C = es(t), v = ce(), w = K0({
    state: a,
    props: t
  }), b = Y(function(H) {
    return y.current[C.getItemId(H)];
  }, [C]);
  fr(o, a, [c, u, d, f], i);
  var I = os({
    menuElement: p.current,
    highlightedIndex: u,
    isOpen: c,
    itemRefs: y,
    scrollIntoView: r,
    getItemNodeFromIndex: b
  });
  X0({
    props: t,
    state: a
  }), le(function() {
    var H = Ft(t, "isOpen");
    H && m.current && m.current.focus();
  }, []), le(function() {
    _ || (v.current = n.length);
  });
  var O = is(i, Y(function() {
    w.current.state.isOpen && l({
      type: R0,
      selectItem: !1
    });
  }, [l, w]), $t(function() {
    return [p, g, m];
  }, [p.current, g.current, m.current])), V = q0("getInputProps", "getMenuProps");
  le(function() {
    c || (y.current = {});
  }, [c]), le(function() {
    var H;
    !c || !(i != null && i.document) || !(m != null && (H = m.current) != null && H.focus) || i.document.activeElement !== m.current && m.current.focus();
  }, [c, i]);
  var A = $t(function() {
    return {
      ArrowDown: function(B) {
        B.preventDefault(), l({
          type: _r,
          altKey: B.altKey
        });
      },
      ArrowUp: function(B) {
        B.preventDefault(), l({
          type: Mr,
          altKey: B.altKey
        });
      },
      Home: function(B) {
        w.current.state.isOpen && (B.preventDefault(), l({
          type: Ir
        }));
      },
      End: function(B) {
        w.current.state.isOpen && (B.preventDefault(), l({
          type: Er
        }));
      },
      Escape: function(B) {
        var F = w.current.state;
        (F.isOpen || F.inputValue || F.selectedItem || F.highlightedIndex > -1) && (B.preventDefault(), l({
          type: Sr
        }));
      },
      Enter: function(B) {
        var F = w.current.state;
        !F.isOpen || B.which === 229 || (B.preventDefault(), l({
          type: Or
        }));
      },
      PageUp: function(B) {
        w.current.state.isOpen && (B.preventDefault(), l({
          type: Pr
        }));
      },
      PageDown: function(B) {
        w.current.state.isOpen && (B.preventDefault(), l({
          type: kr
        }));
      }
    };
  }, [l, w]), N = Y(function(H) {
    return re({
      id: C.labelId,
      htmlFor: C.inputId
    }, H);
  }, [C]), T = Y(function(H, B) {
    var F, j = H === void 0 ? {} : H, G = j.onMouseLeave, K = j.refKey, q = K === void 0 ? "ref" : K, te = j.ref, Q = Ze(j, Zp), se = B === void 0 ? {} : B, W = se.suppressRefError, ye = W === void 0 ? !1 : W;
    return V("getMenuProps", ye, q, p), re((F = {}, F[q] = at(te, function(X) {
      p.current = X;
    }), F.id = C.menuId, F.role = "listbox", F["aria-labelledby"] = Q && Q["aria-label"] ? void 0 : "" + C.labelId, F.onMouseLeave = Ce(G, function() {
      l({
        type: ys
      });
    }), F), Q);
  }, [l, V, C]), D = Y(function(H) {
    var B, F, j = H === void 0 ? {} : H, G = j.item, K = j.index, q = j.refKey, te = q === void 0 ? "ref" : q, Q = j.ref, se = j.onMouseMove, W = j.onMouseDown, ye = j.onClick;
    j.onPress;
    var X = j.disabled, Pe = Ze(j, Wp);
    X !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useCombobox.');
    var ue = w.current, he = ue.props, He = ue.state, Ue = ur(G, K, he.items, "Pass either item or index to getItemProps!"), qe = Ue[0], ke = Ue[1], je = he.isItemDisabled(qe, ke), St = "onClick", It = ye, nt = function() {
      O.isTouchEnd || ke === He.highlightedIndex || (I.current = !1, l({
        type: Cs,
        index: ke,
        disabled: je
      }));
    }, ut = function() {
      l({
        type: Dr,
        index: ke
      });
    }, rt = function(el) {
      return el.preventDefault();
    };
    return re((B = {}, B[te] = at(Q, function(Ge) {
      Ge && (y.current[C.getItemId(ke)] = Ge);
    }), B["aria-disabled"] = je, B["aria-selected"] = ke === He.highlightedIndex, B.id = C.getItemId(ke), B.role = "option", B), !je && (F = {}, F[St] = Ce(It, ut), F), {
      onMouseMove: Ce(se, nt),
      onMouseDown: Ce(W, rt)
    }, Pe);
  }, [l, C, w, O, I]), $ = Y(function(H) {
    var B, F = H === void 0 ? {} : H, j = F.onClick;
    F.onPress;
    var G = F.refKey, K = G === void 0 ? "ref" : G, q = F.ref, te = Ze(F, Up), Q = w.current.state, se = function() {
      l({
        type: ws
      });
    };
    return re((B = {}, B[K] = at(q, function(W) {
      g.current = W;
    }), B["aria-controls"] = C.menuId, B["aria-expanded"] = Q.isOpen, B.id = C.toggleButtonId, B.tabIndex = -1, B), !te.disabled && re({}, {
      onClick: Ce(j, se)
    }), te);
  }, [l, w, C]), x = Y(function(H, B) {
    var F, j = H === void 0 ? {} : H, G = j.onKeyDown, K = j.onChange, q = j.onInput, te = j.onBlur;
    j.onChangeText;
    var Q = j.onClick, se = j.refKey, W = se === void 0 ? "ref" : se, ye = j.ref, X = Ze(j, jp), Pe = B === void 0 ? {} : B, ue = Pe.suppressRefError, he = ue === void 0 ? !1 : ue;
    V("getInputProps", he, W, m);
    var He = w.current.state, Ue = function(rt) {
      var Ge = d2(rt);
      Ge && A[Ge] && A[Ge](rt);
    }, qe = function(rt) {
      l({
        type: Tr,
        inputValue: rt.target.value
      });
    }, ke = function(rt) {
      if (i != null && i.document && He.isOpen && !O.isMouseDown) {
        var Ge = rt.relatedTarget === null && i.document.activeElement !== i.document.body;
        l({
          type: R0,
          selectItem: !Ge
        });
      }
    }, je = function() {
      l({
        type: Hr
      });
    }, St = "onChange", It = {};
    if (!X.disabled) {
      var nt;
      It = (nt = {}, nt[St] = Ce(K, q, qe), nt.onKeyDown = Ce(G, Ue), nt.onBlur = Ce(te, ke), nt.onClick = Ce(Q, je), nt);
    }
    return re((F = {}, F[W] = at(ye, function(ut) {
      m.current = ut;
    }), F["aria-activedescendant"] = He.isOpen && He.highlightedIndex > -1 ? C.getItemId(He.highlightedIndex) : "", F["aria-autocomplete"] = "list", F["aria-controls"] = C.menuId, F["aria-expanded"] = He.isOpen, F["aria-labelledby"] = X && X["aria-label"] ? void 0 : C.labelId, F.autoComplete = "off", F.id = C.inputId, F.role = "combobox", F.value = He.inputValue, F), It, X);
  }, [l, C, i, A, w, O, V]), E = Y(function() {
    l({
      type: bs
    });
  }, [l]), R = Y(function() {
    l({
      type: Ls
    });
  }, [l]), L = Y(function() {
    l({
      type: xs
    });
  }, [l]), k = Y(function(H) {
    l({
      type: _s,
      highlightedIndex: H
    });
  }, [l]), Z = Y(function(H) {
    l({
      type: Rr,
      selectedItem: H
    });
  }, [l]), M = Y(function(H) {
    l({
      type: Ms,
      inputValue: H
    });
  }, [l]), P = Y(function() {
    l({
      type: Ss
    });
  }, [l]);
  return {
    // prop getters.
    getItemProps: D,
    getLabelProps: N,
    getMenuProps: T,
    getInputProps: x,
    getToggleButtonProps: $,
    // actions.
    toggleMenu: E,
    openMenu: L,
    closeMenu: R,
    setHighlightedIndex: k,
    setInputValue: M,
    selectItem: Z,
    reset: P,
    // state.
    highlightedIndex: u,
    isOpen: c,
    selectedItem: d,
    inputValue: f
  };
}
var Ps = {
  activeIndex: -1,
  selectedItems: []
};
function $o(e, t) {
  return Ft(e, t, Ps);
}
function Zo(e, t) {
  return vt(e, t, Ps);
}
function Gp(e) {
  var t = $o(e, "activeIndex"), n = $o(e, "selectedItems");
  return {
    activeIndex: t,
    selectedItems: n
  };
}
function Wo(e) {
  if (e.shiftKey || e.metaKey || e.ctrlKey || e.altKey)
    return !1;
  var t = e.target;
  return !(t instanceof HTMLInputElement && // if element is a text input
  t.value !== "" && // and we have text in it
  // and cursor is either not at the start or is currently highlighting text.
  (t.selectionStart !== 0 || t.selectionEnd !== 0));
}
function zp(e, t) {
  return e.selectedItems === t.selectedItems && e.activeIndex === t.activeIndex;
}
var Kp = {
  stateReducer: b0.stateReducer,
  itemToKey: b0.itemToKey,
  environment: b0.environment,
  selectedItems: U.array,
  initialSelectedItems: U.array,
  defaultSelectedItems: U.array,
  getA11yStatusMessage: U.func,
  activeIndex: U.number,
  initialActiveIndex: U.number,
  defaultActiveIndex: U.number,
  onActiveIndexChange: U.func,
  onSelectedItemsChange: U.func,
  keyNavigationNext: U.string,
  keyNavigationPrevious: U.string
}, qp = {
  itemToKey: I2.itemToKey,
  stateReducer: I2.stateReducer,
  environment: I2.environment,
  keyNavigationNext: "ArrowRight",
  keyNavigationPrevious: "ArrowLeft"
}, ks = $e;
process.env.NODE_ENV !== "production" && (ks = function(t, n) {
  U.checkPropTypes(Kp, t, "prop", n.name);
});
var Ar = process.env.NODE_ENV !== "production" ? "__selected_item_click__" : 0, Br = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_delete__" : 1, Fr = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_backspace__" : 2, Vr = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_navigation_next__" : 3, $r = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_navigation_previous__" : 4, Zr = process.env.NODE_ENV !== "production" ? "__dropdown_keydown_navigation_previous__" : 5, Wr = process.env.NODE_ENV !== "production" ? "__dropdown_keydown_backspace__" : 6, Ur = process.env.NODE_ENV !== "production" ? "__dropdown_click__" : 7, jr = process.env.NODE_ENV !== "production" ? "__function_add_selected_item__" : 8, Gr = process.env.NODE_ENV !== "production" ? "__function_remove_selected_item__" : 9, zr = process.env.NODE_ENV !== "production" ? "__function_set_selected_items__" : 10, Kr = process.env.NODE_ENV !== "production" ? "__function_set_active_index__" : 11, qr = process.env.NODE_ENV !== "production" ? "__function_reset__" : 12, Xp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  DropdownClick: Ur,
  DropdownKeyDownBackspace: Wr,
  DropdownKeyDownNavigationPrevious: Zr,
  FunctionAddSelectedItem: jr,
  FunctionRemoveSelectedItem: Gr,
  FunctionReset: qr,
  FunctionSetActiveIndex: Kr,
  FunctionSetSelectedItems: zr,
  SelectedItemClick: Ar,
  SelectedItemKeyDownBackspace: Fr,
  SelectedItemKeyDownDelete: Br,
  SelectedItemKeyDownNavigationNext: Vr,
  SelectedItemKeyDownNavigationPrevious: $r
});
function Yp(e, t) {
  var n = t.type, r = t.index, i = t.props, o = t.selectedItem, s = e.activeIndex, a = e.selectedItems, l;
  switch (n) {
    case Ar:
      l = {
        activeIndex: r
      };
      break;
    case $r:
      l = {
        activeIndex: s - 1 < 0 ? 0 : s - 1
      };
      break;
    case Vr:
      l = {
        activeIndex: s + 1 >= a.length ? -1 : s + 1
      };
      break;
    case Fr:
    case Br: {
      if (s < 0)
        break;
      var c = s;
      a.length === 1 ? c = -1 : s === a.length - 1 && (c = a.length - 2), l = re({
        selectedItems: [].concat(a.slice(0, s), a.slice(s + 1))
      }, {
        activeIndex: c
      });
      break;
    }
    case Zr:
      l = {
        activeIndex: a.length - 1
      };
      break;
    case Wr:
      l = {
        selectedItems: a.slice(0, a.length - 1)
      };
      break;
    case jr:
      l = {
        selectedItems: [].concat(a, [o])
      };
      break;
    case Ur:
      l = {
        activeIndex: -1
      };
      break;
    case Gr: {
      var u = s, d = a.findIndex(function(y) {
        return i.itemToKey(y) === i.itemToKey(o);
      });
      if (d < 0)
        break;
      a.length === 1 ? u = -1 : d === a.length - 1 && (u = a.length - 2), l = {
        selectedItems: [].concat(a.slice(0, d), a.slice(d + 1)),
        activeIndex: u
      };
      break;
    }
    case zr: {
      var f = t.selectedItems;
      l = {
        selectedItems: f
      };
      break;
    }
    case Kr: {
      var p = t.activeIndex;
      l = {
        activeIndex: p
      };
      break;
    }
    case qr:
      l = {
        activeIndex: Zo(i, "activeIndex"),
        selectedItems: Zo(i, "selectedItems")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return re({}, e, l);
}
var Qp = ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"], Jp = ["refKey", "ref", "onKeyDown", "onClick", "preventKeyAction"];
Y0.stateChangeTypes = Xp;
function Y0(e) {
  e === void 0 && (e = {}), ks(e, Y0);
  var t = re({}, qp, e), n = t.getA11yStatusMessage, r = t.environment, i = t.keyNavigationNext, o = t.keyNavigationPrevious, s = ns(Yp, t, Gp, zp), a = s[0], l = s[1], c = a.activeIndex, u = a.selectedItems, d = j2(), f = ce(null), p = ce();
  p.current = [];
  var y = K0({
    state: a,
    props: t
  });
  fr(n, a, [c, u], r), le(function() {
    d || (c === -1 && f.current ? f.current.focus() : p.current[c] && p.current[c].focus());
  }, [c]), X0({
    props: t,
    state: a
  });
  var m = q0("getDropdownProps"), g = $t(function() {
    var A;
    return A = {}, A[o] = function() {
      l({
        type: $r
      });
    }, A[i] = function() {
      l({
        type: Vr
      });
    }, A.Delete = function() {
      l({
        type: Br
      });
    }, A.Backspace = function() {
      l({
        type: Fr
      });
    }, A;
  }, [l, i, o]), _ = $t(function() {
    var A;
    return A = {}, A[o] = function(N) {
      Wo(N) && l({
        type: Zr
      });
    }, A.Backspace = function(T) {
      Wo(T) && l({
        type: Wr
      });
    }, A;
  }, [l, o]), C = Y(function(A) {
    var N, T = A === void 0 ? {} : A, D = T.refKey, $ = D === void 0 ? "ref" : D, x = T.ref, E = T.onClick, R = T.onKeyDown, L = T.selectedItem, k = T.index, Z = Ze(T, Qp), M = y.current.state, P = ur(L, k, M.selectedItems, "Pass either item or index to getSelectedItemProps!"), H = P[1], B = H > -1 && H === M.activeIndex, F = function() {
      l({
        type: Ar,
        index: H
      });
    }, j = function(K) {
      var q = d2(K);
      q && g[q] && g[q](K);
    };
    return re((N = {}, N[$] = at(x, function(G) {
      G && p.current.push(G);
    }), N.tabIndex = B ? 0 : -1, N.onClick = Ce(E, F), N.onKeyDown = Ce(R, j), N), Z);
  }, [l, y, g]), v = Y(function(A, N) {
    var T, D = A === void 0 ? {} : A, $ = D.refKey, x = $ === void 0 ? "ref" : $, E = D.ref, R = D.onKeyDown, L = D.onClick, k = D.preventKeyAction, Z = k === void 0 ? !1 : k, M = Ze(D, Jp), P = N === void 0 ? {} : N, H = P.suppressRefError, B = H === void 0 ? !1 : H;
    m("getDropdownProps", B, x, f);
    var F = function(K) {
      var q = d2(K);
      q && _[q] && _[q](K);
    }, j = function() {
      l({
        type: Ur
      });
    };
    return re((T = {}, T[x] = at(E, function(G) {
      G && (f.current = G);
    }), T), !Z && {
      onKeyDown: Ce(R, F),
      onClick: Ce(L, j)
    }, M);
  }, [l, _, m]), w = Y(function(A) {
    l({
      type: jr,
      selectedItem: A
    });
  }, [l]), b = Y(function(A) {
    l({
      type: Gr,
      selectedItem: A
    });
  }, [l]), I = Y(function(A) {
    l({
      type: zr,
      selectedItems: A
    });
  }, [l]), O = Y(function(A) {
    l({
      type: Kr,
      activeIndex: A
    });
  }, [l]), V = Y(function() {
    l({
      type: qr
    });
  }, [l]);
  return {
    getSelectedItemProps: C,
    getDropdownProps: v,
    addSelectedItem: w,
    removeSelectedItem: b,
    setSelectedItems: I,
    setActiveIndex: O,
    reset: V,
    selectedItems: u,
    activeIndex: c
  };
}
var yn, Uo;
function eh() {
  return Uo || (Uo = 1, yn = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var r, i, o;
      if (Array.isArray(t)) {
        if (r = t.length, r != n.length) return !1;
        for (i = r; i-- !== 0; )
          if (!e(t[i], n[i])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (o = Object.keys(t), r = o.length, r !== Object.keys(n).length) return !1;
      for (i = r; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, o[i])) return !1;
      for (i = r; i-- !== 0; ) {
        var s = o[i];
        if (!e(t[s], n[s])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), yn;
}
var th = eh();
const jo = /* @__PURE__ */ U0(th);
var Xr = /* @__PURE__ */ ((e) => (e.mouse = "mouse", e.keyboard = "keyboard", e))(Xr || {});
const Os = () => {
  const e = ce(
    "mouse"
    /* mouse */
  );
  return le(() => {
    const t = (r) => {
      ["Tab", "ArrowDown", "ArrowUp"].includes(r.key) && (e.current = "keyboard");
    }, n = () => {
      e.current = "mouse";
    };
    return window.addEventListener("keydown", t), window.addEventListener("mousedown", n), () => {
      window.removeEventListener("keydown", t), window.removeEventListener("mousedown", n);
    };
  }, []), e;
}, Ts = S.div.withConfig({
  displayName: "dropdown__StyledDropdown",
  componentId: "sc-7mf6mk-0"
})(({
  theme: e,
  disabled: t,
  isFixedDropdown: n
}) => ({
  outline: "none",
  position: n ? "relative" : "unset",
  ...t && {
    opacity: "0.5",
    pointerEvents: "none"
  }
})), nh = S(J).withConfig({
  displayName: "dropdown__Container",
  componentId: "sc-7mf6mk-1"
})(({
  theme: e,
  isOpen: t
}) => ({
  borderRadius: e.borderRadius.base,
  border: "none",
  height: 36,
  padding: "0 16px",
  background: e.styleguideColors.fillSecondary,
  ":hover, :active": {
    background: e.styleguideColors.fillSecondary,
    svg: {
      color: e.styleguideColors.fillPrimaryRed
    }
  }
})), Hs = S.div.withConfig({
  displayName: "dropdown__ItemsContainer",
  componentId: "sc-7mf6mk-2"
})(({
  theme: e,
  isOpen: t,
  isFixedDropdown: n
}) => ({
  display: t ? "inherit" : "none",
  marginTop: 4,
  borderRadius: e.borderRadius.base,
  background: e.styleguideColors.fillSecondary,
  ...n && {
    position: "absolute",
    top: "60px",
    width: "100%",
    zIndex: 1
  }
})), Ds = S(J).withConfig({
  displayName: "dropdown__ItemContainer",
  componentId: "sc-7mf6mk-3"
})(({
  theme: e,
  isHighlighted: t
}) => ({
  cursor: "pointer",
  minHeight: 36,
  padding: "8px 16px",
  ":hover, :active": {
    background: e.styleguideColors.fillSecondaryBlueHover,
    fontWeight: 600
  },
  ...t && {
    "&:not(:hover)": {
      border: `1px solid ${e.styleguideColors.contentBlue}`,
      borderRadius: e.borderRadius.base
    }
  }
})), rh = S(ve).withConfig({
  displayName: "dropdown__DeleteSvgIcon",
  componentId: "sc-7mf6mk-4"
})(({
  theme: e
}) => ({
  path: {
    stroke: e.styleguideColors.contentSecondary
  },
  ":hover, :active": {
    path: {
      stroke: e.styleguideColors.fillPrimaryRed
    }
  }
})), ih = S(ve).withConfig({
  displayName: "dropdown__ClearSvgIcon",
  componentId: "sc-7mf6mk-5"
})(({
  theme: e
}) => ({
  path: {
    stroke: e.styleguideColors.contentPrimary
  }
})), oh = S(J).withConfig({
  displayName: "dropdown__MultiSelectContainer",
  componentId: "sc-7mf6mk-6"
})(({
  theme: e
}) => ({
  borderRadius: e.borderRadius.base,
  padding: "8px",
  background: e.styleguideColors.fillSecondary,
  ":hover, :active": {
    svg: {
      color: e.styleguideColors.fillPrimaryRed
    }
  }
})), ah = S.span.withConfig({
  displayName: "dropdown__PlaceholderWrapper",
  componentId: "sc-7mf6mk-7"
})(({
  theme: e
}) => ({
  padding: "0 8px"
})), sh = S.span.withConfig({
  displayName: "dropdown__ChipItemContainer",
  componentId: "sc-7mf6mk-8"
})(({
  theme: e
}) => ({
  borderRadius: e.borderRadius.base,
  cursor: "pointer",
  padding: "2px 8px",
  background: e.styleguideColors.fillTertiary,
  color: e.styleguideColors.contentPrimary
})), lh = S.span.withConfig({
  displayName: "dropdown__OverflowWrapper",
  componentId: "sc-7mf6mk-9"
})(({
  theme: e
}) => ({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
})), ch = S(J).withConfig({
  displayName: "dropdown__DropdownIconWrapper",
  componentId: "sc-7mf6mk-10"
})(({
  theme: e
}) => ({
  paddingRight: "8px",
  marginLeft: "8px"
})), uh = S(ve).withConfig({
  displayName: "dropdown__CheckIcon",
  componentId: "sc-7mf6mk-11"
})(({
  theme: e
}) => ({
  path: {
    fill: e.styleguideColors.contentBlue
  }
})), dh = S(ve).withConfig({
  displayName: "dropdown__MultiSelectDeleteIcon",
  componentId: "sc-7mf6mk-12"
})(({
  theme: e
}) => ({
  path: {
    stroke: e.styleguideColors.contentBlue
  },
  ":hover, :active": {
    path: {
      stroke: e.styleguideColors.contentRed
    }
  }
})), b2 = (e) => ({
  target: {
    name: void 0,
    value: e
  }
});
function fC(e) {
  const {
    id: t,
    items: n,
    placeholder: r,
    label: i,
    areItemsRemovable: o,
    value: s,
    style: a,
    onSelect: l,
    onRemove: c,
    noItemsMessage: u = "No Options!",
    isFixedDropdown: d = !1
  } = e, f = (v) => ({
    target: {
      name: void 0,
      value: v
    }
  }), p = (v, w, b) => {
    w.preventDefault(), w.stopPropagation();
    const I = v && y(v);
    c && c(f(I));
  }, y = (v) => v.value, m = (v) => v.label, g = (v) => {
    l && l(v);
  }, _ = (v) => v === null ? "" : typeof v == "string" ? v : v.label, C = Os();
  return /* @__PURE__ */ h(Q1, { itemToString: _, onSelect: g, selectedItem: s, selectedItemChanged: (v, w) => !jo(v, w), children: (v) => {
    const {
      getItemProps: w,
      getMenuProps: b,
      isOpen: I,
      selectedItem: O,
      getRootProps: V,
      getToggleButtonProps: A,
      highlightedIndex: N
    } = v, T = !(n && n.length), D = ($) => {
      !I && v.openMenu();
    };
    return /* @__PURE__ */ z(Ts, { ...V({
      refKey: "innerRef"
    }), style: a, isFixedDropdown: d, children: [
      i && /* @__PURE__ */ h(ne, { lineHeight: "xs", size: 1, "aria-label": i, id: t, tabIndex: 0, children: i }),
      /* @__PURE__ */ z(nh, { align: "center", justify: "space-between", ...A(), isOpen: I, itemsSpacing: 10, tabIndex: 0, children: [
        /* @__PURE__ */ h(ne, { size: 3, lineHeight: "xs", variation: O ? "inherit" : "darkGray", style: {
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis"
        }, children: m(O) || r }),
        /* @__PURE__ */ h(ve, { src: I ? Gn : A2, rotate: I, onKeyDown: ($) => {
          $.key === "Enter" && D();
        }, tabIndex: 0, alt: "Arrow icon", role: "img", "aria-labelledby": t, "aria-haspopup": "listbox", "aria-expanded": I })
      ] }),
      /* @__PURE__ */ h(Hs, { ...b(), isOpen: I, isFixedDropdown: d, "aria-labelledby": t, children: I && (T ? /* @__PURE__ */ h("div", { style: {
        padding: "8px 16px",
        pointerEvents: "none"
      }, children: /* @__PURE__ */ h(ne, { size: 3, scale: "xs", lineHeight: "xs", variation: "darkGray", children: u }) }) : n.map(($, x) => {
        const E = jo($, O), R = C.current === Xr.keyboard && N !== null && N === x;
        return /* @__PURE__ */ z(Ds, { align: "center", justify: "space-between", itemsSpacing: 10, ...w({
          item: $,
          index: x
        }), isHighlighted: R, children: [
          /* @__PURE__ */ h(ne, { size: E ? 1 : 3, style: {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
          }, scale: "xs", lineHeight: "xs", children: m($) }),
          o && /* @__PURE__ */ h(rh, { src: E2, onClick: (L) => p($, L) })
        ] }, `${$}-${x}`);
      })) })
    ] });
  } });
}
function pC(e) {
  const {
    id: t,
    items: n,
    value: r,
    label: i,
    placeholder: o,
    disabled: s,
    onSelect: a,
    onChange: l,
    onRemove: c,
    onClearAllItems: u,
    isFixedDropdown: d = !1
  } = e, {
    getSelectedItemProps: f,
    getDropdownProps: p,
    addSelectedItem: y,
    removeSelectedItem: m,
    selectedItems: g,
    setSelectedItems: _,
    reset: C
  } = Y0({
    initialSelectedItems: r,
    onSelectedItemsChange: (x) => {
      a && a(b2(x.selectedItems));
    }
  }), {
    isOpen: v,
    selectedItem: w,
    getToggleButtonProps: b,
    getLabelProps: I,
    getMenuProps: O,
    getItemProps: V,
    openMenu: A,
    highlightedIndex: N
  } = xt({
    selectedItem: null,
    defaultHighlightedIndex: 0,
    // after selection, highlight the first item.
    items: n,
    stateReducer: (x, E) => {
      const {
        changes: R,
        type: L
      } = E;
      switch (L) {
        case xt.stateChangeTypes.ToggleButtonKeyDownEnter:
        case xt.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
        case xt.stateChangeTypes.ItemClick:
          return {
            ...R,
            isOpen: !0
            // keep the menu open after selection.
          };
        default:
          return R;
      }
    },
    onStateChange: ({
      type: x,
      selectedItem: E
    }) => {
      switch (x) {
        case xt.stateChangeTypes.ToggleButtonKeyDownEnter:
        case xt.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
        case xt.stateChangeTypes.ItemClick:
          {
            const R = g.some((L) => L.value === E?.value);
            E && (R ? (_(g.filter((L) => L.value !== E.value)), c && c(b2(E))) : (y(E), l && l(b2(E))));
          }
          break;
      }
    }
  });
  le(() => {
    (!r || r.length < 1) && C();
  }, [r]);
  const T = () => {
    u && u(b2(null)), C();
  }, D = (x) => {
    x.stopPropagation(), !s && !v && A();
  }, $ = Os();
  return /* @__PURE__ */ h(Ts, { disabled: s, isFixedDropdown: d, children: /* @__PURE__ */ z(Ee, { itemsSpacing: 4, children: [
    i && /* @__PURE__ */ h(ne, { lineHeight: "xs", ...I(), size: 1, id: t, children: i }),
    /* @__PURE__ */ z("div", { children: [
      /* @__PURE__ */ z(oh, { align: "center", justify: "space-between", ...b({
        ...p({
          preventKeyAction: v
        }),
        onClick: (x) => x.stopPropagation(),
        isOpen: v
      }), children: [
        /* @__PURE__ */ h("span", { children: /* @__PURE__ */ h(ne, { lineHeight: "xs", size: 3, variation: w ? "inherit" : "darkGray", children: /* @__PURE__ */ h(lh, { children: /* @__PURE__ */ h(J, { gap: 8, wrap: "wrap", children: g.length === 0 ? /* @__PURE__ */ h(ah, { children: o }) : g.map((x, E) => /* @__PURE__ */ h(sh, { ...f({
          selectedItem: x,
          index: E
        }), children: /* @__PURE__ */ z(J, { align: "center", gap: 4, children: [
          x?.chipName && /* @__PURE__ */ h(ne, { lineHeight: "xs", size: 1, variation: "black", children: x.chipName }),
          x?.chipLabel || x?.label,
          /* @__PURE__ */ h(dh, { onClick: (R) => {
            R.preventDefault(), R.stopPropagation(), m(x), c && c(b2(x));
          }, size: 14, src: E2, alt: "Cross icon to clear", role: "img" })
        ] }) }, `selected-item-${E}`)) }) }) }) }),
        /* @__PURE__ */ z(ch, { children: [
          u && !!g.length && /* @__PURE__ */ h(ih, { src: E2, onClick: T, marginRight: !0, role: "img", alt: "Cross icon to clear items" }),
          /* @__PURE__ */ h(ve, { size: 16, src: v ? Gn : A2, rotate: v, onKeyDown: (x) => {
            x.key === "Enter" && D(x);
          }, tabIndex: 0, alt: "Arrow icon", "aria-labelledby": t, "aria-haspopup": "listbox", "aria-expanded": v, role: "button" })
        ] })
      ] }),
      /* @__PURE__ */ h(Hs, { ...O(), isOpen: v, isFixedDropdown: d, children: v && n.map((x, E) => {
        const R = g?.some((k) => k.value === x.value), L = $.current === Xr.keyboard && N !== null && N === E;
        return /* @__PURE__ */ z(Ds, { align: "center", justify: "space-between", itemsSpacing: 10, ...V({
          item: x,
          index: E
        }), isHighlighted: L, children: [
          /* @__PURE__ */ h(ne, { size: R ? 1 : 3, lineHeight: "xs", scale: "xs", children: x.label }),
          R && /* @__PURE__ */ h(uh, { size: 14, src: Vl })
        ] }, `${x.value}${E}`);
      }) })
    ] })
  ] }) });
}
var G2 = /* @__PURE__ */ ((e) => (e.default = "default", e.small = "small", e))(G2 || {});
const fh = (e) => e == null ? "contentTertiary" : {
  error: "contentRed",
  success: "contentGreen"
}[e], ph = S.div.withConfig({
  displayName: "form-field__StyledContainer",
  componentId: "sc-xzx4qp-0"
})(({
  theme: e,
  disabled: t
}) => ({
  display: "flex",
  flexDirection: "column",
  ...t && {
    opacity: 0.5
  }
})), hh = S("div").withConfig({
  displayName: "form-field__LabelContainer",
  componentId: "sc-xzx4qp-1"
})(({
  theme: e
}) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  "& > *": {
    marginBottom: 4
  }
})), gh = S("div").withConfig({
  displayName: "form-field__StatusTextContainer",
  componentId: "sc-xzx4qp-2"
})(({
  theme: e,
  status: t
}) => ({
  position: "relative",
  color: e.styleguideColors[fh(t)]
})), mh = S(Ot).withConfig({
  displayName: "form-field__StatusCaptionText",
  componentId: "sc-xzx4qp-3"
})(["position:absolute;"]), Go = ({
  labelFontSize: e,
  ...t
}) => e === G2.small ? /* @__PURE__ */ h(ne, { size: 1, lineHeight: "xs", ...t }) : /* @__PURE__ */ h(U2, { size: 1, ...t });
var Yr = /* @__PURE__ */ ((e) => (e.Error = "error", e.Success = "success", e))(Yr || {});
function Rs({
  id: e,
  label: t,
  rightLabel: n,
  status: r,
  statusText: i,
  children: o,
  labelFontSize: s = G2.default,
  ...a
}) {
  return /* @__PURE__ */ z(ph, { ...a, children: [
    /* @__PURE__ */ z(hh, { children: [
      t && /* @__PURE__ */ h(Go, { labelFontSize: s, id: e, children: t }),
      n && /* @__PURE__ */ h(Go, { labelFontSize: s, children: n })
    ] }),
    o,
    /* @__PURE__ */ h(gh, { status: r, role: "alert", "aria-live": "assertive", children: /* @__PURE__ */ h(mh, { size: 2, children: i }) })
  ] });
}
const vh = S(p2).withConfig({
  displayName: "header-text__StyledText",
  componentId: "sc-1ohf323-0"
})(({
  theme: e,
  size: t = 2,
  scale: n = "sm",
  monotype: r = !1
}) => ({
  fontWeight: me(r ? {
    0: e.typography.fontWeight.bold,
    1: e.typography.fontWeight.bold,
    2: e.typography.fontWeight.bold,
    3: e.typography.fontWeight.regular,
    4: e.typography.fontWeight.regular,
    5: e.typography.fontWeight.regular
  } : {
    0: e.typography.fontWeight.extraBold,
    1: e.typography.fontWeight.extraBold,
    2: e.typography.fontWeight.bold,
    3: e.typography.fontWeight.semiBold,
    4: e.typography.fontWeight.semiBold,
    5: e.typography.fontWeight.semiBold
  }, t),
  fontSize: me({
    "2xl": "3.25rem",
    xl: "2.875rem",
    lg: "2.5rem",
    md: "2rem",
    sm: "1.75rem",
    xs: "1.5rem"
  }, n),
  lineHeight: me({
    "2xl": "4.5rem",
    xl: "4rem",
    lg: "3.5rem",
    md: "3rem",
    sm: "2.5rem",
    xs: "1.75rem"
  }, n),
  "&:where(h1, h2, h3, h4, h5, h6)": {
    margin: 0
  }
}));
function Ns(e) {
  return /* @__PURE__ */ h(vh, { ...e });
}
const yh = S(Ns).withConfig({
  displayName: "header-tab-menu-item__StyledHeaderTabMenuItem",
  componentId: "sc-1ohcb8a-0"
})(({
  theme: e,
  active: t
}) => ({
  cursor: "pointer",
  color: e.styleguideColors.contentTertiary,
  ":not(:first-of-type)": {
    marginLeft: 40
  },
  ...t && {
    color: e.styleguideColors.contentPrimary,
    cursor: "default"
  }
}));
function hC(e) {
  return /* @__PURE__ */ h(yh, { ...e, size: 2 });
}
const Ch = (e) => e == null || !e ? "fillSecondary" : "contentRed", wh = S("div").withConfig({
  displayName: "input__InputContainer",
  componentId: "sc-f6gr5t-0"
})(({
  theme: e,
  disabled: t,
  error: n,
  monotype: r,
  height: i = "36"
}) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 16px",
  borderRadius: e.borderRadius.base,
  color: e.styleguideColors.contentPrimary,
  background: e.styleguideColors.fillSecondary,
  caretColor: e.styleguideColors.fillPrimaryRed,
  fontFamily: r ? e.typography.fontFamily.mono : e.typography.fontFamily.primary,
  fontSize: "0.875rem",
  lineHeight: me({
    36: "20px",
    40: "20px"
  }, i),
  height: me({
    36: "36px",
    40: "40px"
  }, i),
  path: {
    fill: e.styleguideColors[Ch(n)]
  },
  ...n && {
    border: `1px solid ${e.styleguideColors.borderRed}`
  },
  ...t && {
    opacity: 0.5,
    color: e.styleguideColors.contentTertiary
  }
})), bh = S.input.withConfig({
  displayName: "input__StyledInput",
  componentId: "sc-f6gr5t-1"
})(({
  theme: e
}) => ({
  color: "inherit",
  background: "inherit",
  fontFamily: "inherit",
  fontSize: "inherit",
  border: "none",
  width: "100%",
  padding: 0,
  "&[type=number]:focus, &[type=number]:blur": {
    "-moz-appearance": "number-input"
  },
  "&[type=number]": {
    "-moz-appearance": "textfield",
    "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
      margin: 0,
      "-webkit-appearance": "none",
      "pointer-events": "none"
    }
  },
  "&::placeholder": {
    color: e.styleguideColors.contentSecondary
  }
})), xh = S("div").withConfig({
  displayName: "input__PrefixContainer",
  componentId: "sc-f6gr5t-2"
})(({
  theme: e
}) => ({
  marginRight: 16,
  color: e.styleguideColors.contentSecondary,
  path: {
    fill: e.styleguideColors.contentSecondary
  }
})), As = S("div").withConfig({
  displayName: "input__SuffixContainer",
  componentId: "sc-f6gr5t-3"
})(({
  theme: e
}) => ({
  marginLeft: 16
})), Lh = S(As).withConfig({
  displayName: "input__SuffixTextContainer",
  componentId: "sc-f6gr5t-4"
})(({
  theme: e
}) => ({
  color: e.styleguideColors.contentSecondary
}));
var _h = /* @__PURE__ */ ((e) => (e.PositiveInteger = "positive_int", e.CSPR = "cspr", e.email = "email", e.password = "password", e))(_h || {});
const Mh = ge.forwardRef(function(t, n) {
  return /* @__PURE__ */ h(bh, { ...t, ref: n });
});
function Bs({
  id: e,
  className: t,
  style: n,
  disabled: r,
  monotype: i,
  height: o,
  label: s,
  rightLabel: a,
  prefixIcon: l,
  suffixIcon: c,
  suffixText: u,
  required: d,
  error: f,
  validationType: p,
  validationText: y,
  onFocus: m,
  name: g,
  labelFontSize: _ = G2.default,
  ...C
}) {
  const v = p == null ? void 0 : {
    cspr: {
      type: "number",
      min: "0",
      max: "0",
      step: "0"
    },
    positive_int: {
      type: "number",
      min: "1",
      max: "1",
      step: "0"
    },
    email: {
      type: "email"
    },
    password: {
      type: "password"
    }
  }[p], w = (b) => {
    b.target.select(), m && m(b);
  };
  return f && (c = /* @__PURE__ */ h(ve, { src: zn })), /* @__PURE__ */ h(Rs, { id: e, className: t, style: n, label: s, rightLabel: a, status: f ? Yr.Error : void 0, statusText: y, disabled: r, labelFontSize: _, children: /* @__PURE__ */ z(wh, { monotype: i, error: f, height: o, children: [
    l && /* @__PURE__ */ h(xh, { children: l }),
    /* @__PURE__ */ h(Mh, { title: "", disabled: r, onFocus: w, name: g, "aria-required": !!d, "aria-labelledby": e, ...v, ...C }),
    c && /* @__PURE__ */ h(As, { children: c }),
    u && /* @__PURE__ */ h(Lh, { children: u })
  ] }) });
}
const Sh = S.ul.withConfig({
  displayName: "main-menu__MenuContainer",
  componentId: "sc-71ac72-0"
})(({
  theme: e
}) => e.withMedia({
  background: e.styleguideColors.backgroundTertiary,
  display: "flex",
  flexDirection: ["column", "column", "row"],
  justifyContent: "space-between",
  alignItems: ["baseline", "baseline", "center"],
  height: "100%",
  width: "100%",
  padding: ["0px"],
  margin: [0]
})), gC = ({
  children: e
}) => /* @__PURE__ */ h(Sh, { children: e }), Ih = S.li.withConfig({
  displayName: "main-menu-item__NavItem",
  componentId: "sc-194vga7-0"
})(({
  theme: e,
  selected: t
}) => e.withMedia({
  display: "flex",
  color: e.styleguideColors.contentTertiary,
  padding: ["16px 32px", "16px 48px", "0 32px 0 0", "0 32px 0 0"],
  height: "100%",
  alignItems: "center",
  ...t && {
    color: e.styleguideColors.contentOnFill
  },
  "& > *:hover": {
    cursor: "pointer",
    color: e.styleguideColors.contentOnFill
  }
})), mC = ({
  selected: e = !1,
  children: t
}) => /* @__PURE__ */ h(Ih, { selected: e, children: t }), Eh = S.a.withConfig({
  displayName: "nav-link__StyledA",
  componentId: "sc-14h6hn0-0"
})(({
  theme: e,
  disabled: t,
  active: n
}) => ({
  color: e.styleguideColors.contentTertiary,
  textDecoration: "none",
  ":hover": {
    fontWeight: e.typography.fontWeight.semiBold,
    color: e.styleguideColors.contentOnFill
  },
  ...n && {
    fontWeight: e.typography.fontWeight.semiBold,
    color: e.styleguideColors.contentOnFill
  },
  ...t && {
    pointerEvents: "none"
  }
})), vC = ge.forwardRef((e, t) => /* @__PURE__ */ h(Eh, { ref: t, ...e })), Ph = S.div.withConfig({
  displayName: "page-tile__StyledPageTile",
  componentId: "sc-2b2p7u-0"
})(({
  theme: e,
  withPadding: t
}) => e.withMedia({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  background: e.styleguideColors.backgroundPrimary,
  boxShadow: e.boxShadow.block,
  borderRadius: e.borderRadius.base,
  marginBottom: 24,
  // make it reponsive
  padding: t ? "16px 0" : void 0
}));
function yC(e) {
  return /* @__PURE__ */ h(Ph, { ...e });
}
const kh = S(Ns).withConfig({
  displayName: "page-tile-header__StyledPageTileHeader",
  componentId: "sc-tvmw2e-0"
})(({
  theme: e
}) => e.withMedia({
  padding: ["20px 20px 16px"]
}));
function CC(e) {
  return /* @__PURE__ */ h(kh, { ...e, size: 5 });
}
const Oh = S.div.withConfig({
  displayName: "page-tile-tabs-header__StyledWrapper",
  componentId: "sc-bl3sfh-0"
})(({
  theme: e,
  childrenCount: t
}) => e.withMedia({
  display: "flex",
  flexGrow: 1,
  justifyContent: t > 2 ? ["left", "center"] : ["center"],
  padding: 16,
  overflowX: "auto"
})), wC = ({
  tabsCount: e,
  children: t
}) => /* @__PURE__ */ h(Oh, { childrenCount: e, children: t }), Th = S.div.withConfig({
  displayName: "radio-button__Container",
  componentId: "sc-1c62lye-0"
})(({
  theme: e
}) => ({
  display: "flex",
  cursor: "pointer",
  userSelect: "none"
})), Hh = S.div.withConfig({
  displayName: "radio-button__OuterCircle",
  componentId: "sc-1c62lye-1"
})(({
  theme: e,
  disabled: t,
  color: n = "contentBlue"
}) => ({
  width: 24,
  height: 24,
  minWidth: 24,
  minHeight: 24,
  border: t ? `2px solid ${e.styleguideColors.contentQuaternary}` : `2px solid ${e.styleguideColors[n]}`,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 12
})), Dh = S.div.withConfig({
  displayName: "radio-button__InnerCircle",
  componentId: "sc-1c62lye-2"
})(({
  theme: e,
  unslected: t,
  disabled: n,
  color: r = "contentBlue"
}) => ({
  borderRadius: "50%",
  width: t ? 0 : 12,
  height: t ? 0 : 12,
  backgroundColor: n ? e.styleguideColors.contentQuaternary : e.styleguideColors[r]
})), bC = ({
  selected: e,
  onChange: t,
  label: n,
  value: r,
  disabled: i,
  color: o
}) => /* @__PURE__ */ z(Th, { onClick: () => {
  t && t(r);
}, children: [
  /* @__PURE__ */ h(Hh, { disabled: i, color: o, children: /* @__PURE__ */ h(Dh, { unslected: r !== e, disabled: i, color: o }) }),
  n
] }), Rh = {
  keybase: Kl,
  telegram: Ql,
  twitter: Jl,
  github: Ul,
  youtube: i3,
  facebook: Wl,
  medium: Xl,
  reddit: Yl,
  wechat: r3,
  twitter_x: e3,
  linkedin: ql,
  website: n3
}, c0 = (e) => ({
  keybase: "#EA773A",
  telegram: "#0088CC",
  twitter: "#1DA1F2",
  github: "#333333",
  youtube: "#FF0000",
  facebook: "#4267B2",
  medium: "#00AB6C",
  reddit: "#FF4500",
  wechat: "#7BB32E",
  twitter_x: "#0f1419",
  linkedin: "#0a66c2",
  website: "#BABBBF"
})[e], Nh = (e, t) => ({
  keybase: "https://keybase.io/" + t.replace("@", ""),
  telegram: "https://t.me/" + t.replace("@", ""),
  twitter: "https://twitter.com/" + t.replace("@", ""),
  twitter_x: "https://twitter.com/" + t.replace("@", ""),
  github: "https://github.com/" + t.replace("@", ""),
  youtube: "https://youtube.com/channel/" + t,
  facebook: "https://facebook.com/" + t,
  medium: "https://medium.com/" + t,
  reddit: "https://reddit.com/" + t,
  wechat: `weixin://dl/chat?${t}/`,
  linkedin: "https://www.linkedin.com/company/" + t,
  website: t
})[e], Ah = S(Ja).withConfig({
  displayName: "svg-icon-social__Container",
  componentId: "sc-ng7ji9-0"
})(({
  theme: e,
  socialMediaType: t
}) => ({
  color: e.styleguideColors.contentSecondary,
  "svg path": {
    fill: e.styleguideColors.contentSecondary
  },
  "&:hover": {
    color: c0(t),
    "svg path": {
      fill: c0(t)
    }
  },
  "&:active": {
    color: c0(t),
    "svg path": {
      fill: c0(t)
    }
  }
})), xC = ge.forwardRef(({
  socialMediaType: e,
  userId: t,
  ...n
}, r) => /* @__PURE__ */ h(Ah, { ref: r, color: "inherit", socialMediaType: e, href: Nh(e, t), ...n, "aria-label": `Go to ${e}`, children: /* @__PURE__ */ h(ve, { src: Rh[e], alt: e }) })), Bh = S.div.withConfig({
  displayName: "tab-menu-container__StyledWrapper",
  componentId: "sc-9x52i1-0"
})(({
  theme: e,
  childrenCount: t
}) => e.withMedia({
  display: "flex",
  flexGrow: 1,
  justifyContent: t > 2 ? ["left", "center"] : ["center"],
  padding: 16,
  overflowX: "auto"
})), LC = ({
  tabsCount: e,
  children: t
}) => /* @__PURE__ */ h(Bh, { childrenCount: e, children: t }), Fh = S.div.withConfig({
  displayName: "tab-content__StyledTabContent",
  componentId: "sc-11to6ft-0"
})([""]);
function _C(e) {
  return /* @__PURE__ */ h(Fh, { ...e });
}
const Vh = S.div.withConfig({
  displayName: "tab-menu__StyledTabMenu",
  componentId: "sc-16gm3gg-0"
})(({
  theme: e
}) => ({
  flexShrink: 0,
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center"
}));
function MC(e) {
  return /* @__PURE__ */ h(Vh, { ...e });
}
const $h = S(u2).withConfig({
  displayName: "tab-menu-item__StyledButton",
  componentId: "sc-1ybxd9o-0"
})(({
  theme: e,
  active: t,
  disabled: n,
  lineHeight: r = "sm",
  scale: i = "sm"
}) => e.withMedia({
  minWidth: [131, 140],
  padding: "6px",
  maxWidth: "fit-content",
  height: 32,
  fontSize: me({
    sm: "1.3rem",
    xs: "0.8125rem"
  }, i),
  lineHeight: me({
    sm: "1.5rem",
    xs: "1.25rem"
  }, r),
  fontWeight: e.typography.fontWeight.medium,
  cursor: "pointer",
  marginLeft: 2,
  color: e.styleguideColors.contentBlue,
  borderRadius: 0,
  textTransform: "capitalize",
  ":first-of-type": {
    borderRadius: "4px 0 0 4px"
  },
  ":last-of-type": {
    borderRadius: "0 4px 4px 0"
  },
  ":hover": {
    background: e.styleguideColors.fillSecondaryBlueHover,
    color: e.styleguideColors.contentBlue
  },
  ":active": {
    background: e.styleguideColors.fillSecondaryBlueClick,
    color: e.styleguideColors.contentBlue
  },
  ...t && {
    cursor: "default",
    background: e.styleguideColors.fillPrimaryBlue,
    color: e.styleguideColors.contentOnFill,
    ":hover": {
      background: e.styleguideColors.fillPrimaryBlue
    },
    ":active": {
      background: e.styleguideColors.fillPrimaryBlue
    }
  },
  ...n && {
    cursor: "default",
    pointerEvents: "none",
    color: e.styleguideColors.contentTertiary
  }
}));
function SC(e) {
  return /* @__PURE__ */ h(_t, { tooltipContent: e.tooltip, limitWidth: !0, lineHeight: e.lineHeight, scale: e.scale, paddingScale: e.tooltipPaddingScale, children: /* @__PURE__ */ h($h, { color: "utility", ...e, children: /* @__PURE__ */ z(J, { gap: 3, align: "center", children: [
    e.children,
    e.tooltip && /* @__PURE__ */ h(ve, { width: 17, height: 16, src: zl })
  ] }) }) });
}
const Zh = S.tbody.withConfig({
  displayName: "table-body__StyledTableBody",
  componentId: "sc-5al5ed-0"
})([""]);
function Wh(e) {
  return /* @__PURE__ */ h(Zh, { ...e });
}
const Uh = S.td.withConfig({
  displayName: "table-data__StyledTableData",
  componentId: "sc-3ev5gc-0"
})(({
  theme: e,
  align: t = "left",
  fitContent: n,
  indented: r
}) => ({
  height: 48,
  padding: 8,
  textAlign: t,
  ":first-of-type": {
    paddingLeft: r ? 60 : 20
  },
  ":last-of-type": {
    paddingRight: 20
  },
  ...n && {
    width: "1%"
  }
}));
function jh(e) {
  return /* @__PURE__ */ h(Uh, { ...e });
}
const Gh = S.thead.withConfig({
  displayName: "table-head__StyledTableHead",
  componentId: "sc-avhi6b-0"
})(({
  theme: e
}) => ({
  background: e.styleguideColors.fillSecondary,
  height: 40
}));
function zh(e) {
  return /* @__PURE__ */ h(Gh, { ...e });
}
var r2 = /* @__PURE__ */ ((e) => (e.TextSingleLine = "TextSingleLine", e.TextWithIcon = "TextWithIcon", e.TextWithAvatar = "TextWithAvatar", e))(r2 || {});
const Kh = S.tr.withConfig({
  displayName: "table-row__StyledTableRow",
  componentId: "sc-9sq1sp-0"
})(["", ""], ({
  theme: e,
  $loading: t,
  isClickable: n
}) => ({
  ":hover, :active": {
    background: t ? "" : e.styleguideColors.fillSecondary
  },
  ":after": {
    content: "''",
    position: "absolute",
    left: 20,
    right: 20,
    borderBottom: e.border.tableRowSeparator,
    bottom: 0
  },
  position: "relative",
  ...n && {
    cursor: "pointer"
  }
}));
function qh({
  loading: e,
  ...t
}) {
  return /* @__PURE__ */ h(Kh, { $loading: e || !1, ...t });
}
const Xh = S.div.withConfig({
  displayName: "table__TableContainer",
  componentId: "sc-owkj1u-0"
})(({
  theme: e,
  paddingBottom: t
}) => ({
  overflowX: "auto",
  ...t && {
    paddingBottom: t
  }
})), Yh = S.table.withConfig({
  displayName: "table__StyledTable",
  componentId: "sc-owkj1u-1"
})(({
  theme: e
}) => ({
  width: "100%",
  position: "relative",
  borderCollapse: "collapse"
})), Qh = S.div.withConfig({
  displayName: "table__NoDataContainer",
  componentId: "sc-owkj1u-2"
})(({
  theme: e
}) => ({
  position: "absolute",
  top: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));
function Jh(e) {
  const {
    renderHeader: t,
    renderDataHeaders: n,
    renderData: r,
    renderFooter: i,
    noData: o,
    noDataMessage: s,
    paddingBottom: a
  } = e;
  return /* @__PURE__ */ z(We, { children: [
    t && t(),
    /* @__PURE__ */ h(Xh, { paddingBottom: a, children: /* @__PURE__ */ z(Yh, { children: [
      n && /* @__PURE__ */ h(zh, { children: n() }),
      r && /* @__PURE__ */ h(Wh, { children: r() })
    ] }) }),
    i && i(),
    s && o && /* @__PURE__ */ h(Qh, { children: /* @__PURE__ */ h(ne, { size: 1, children: s }) })
  ] });
}
const eg = S.th.withConfig({
  displayName: "table-data-header__StyledTableDataHeader",
  componentId: "sc-114ffz5-0"
})(({
  theme: e,
  align: t = "left",
  fitContent: n,
  fixedWidthRem: r
}) => ({
  textAlign: t,
  height: 20,
  padding: 8,
  ":first-of-type": {
    paddingLeft: 20
  },
  ":last-of-type": {
    paddingRight: 20
  },
  ...n && {
    width: "1%"
  },
  ...r && {
    width: `${r}rem`
  },
  textTransform: "capitalize"
})), tg = S.div.withConfig({
  displayName: "table-data-header__StyledHeaderGroup",
  componentId: "sc-114ffz5-1"
})(({
  theme: e
}) => ({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center"
}));
function IC({
  children: e,
  tooltipText: t,
  icon: n,
  ...r
}) {
  return /* @__PURE__ */ h(eg, { ...r, children: /* @__PURE__ */ h(tg, { children: /* @__PURE__ */ h(_t, { tooltipContent: t, limitWidth: !0, children: /* @__PURE__ */ z(J, { gap: 3, align: "center", children: [
    /* @__PURE__ */ h(ne, { size: 1, scale: "xs", children: e }),
    n
  ] }) }) }) });
}
const Fs = S(u2).withConfig({
  displayName: "pagination-button__StyledButton",
  componentId: "sc-e7xbtq-0"
})(({
  theme: e
}) => e.withMedia({
  width: "auto",
  fontWeight: e.typography.fontWeight.medium,
  minHeight: 24,
  padding: ["2px 10px"]
})), ng = S(Fs).withConfig({
  displayName: "pagination-button__StyledArrowsButton",
  componentId: "sc-e7xbtq-1"
})(({
  theme: e
}) => e.withMedia({
  padding: ["2px 4px"]
})), u0 = ({
  children: e,
  ...t
}) => /* @__PURE__ */ h(Fs, { color: "utility", lineHeight: "xs", ...t, children: /* @__PURE__ */ h(Ot, { size: 2, children: e }) }), d0 = ({
  children: e,
  ...t
}) => /* @__PURE__ */ h(ng, { lineHeight: "xs", ...t, children: e }), rg = S(jn).withConfig({
  displayName: "pagination-info-text__StyledContainer",
  componentId: "sc-r7uqsw-0"
})(({
  theme: e
}) => e.withMedia({
  textAlign: "center",
  borderRadius: e.borderRadius.base,
  backgroundColor: e.styleguideColors.fillSecondary,
  color: e.styleguideColors.contentPrimary,
  height: 20,
  padding: ["4px 8px", "4px 16px"],
  width: "100%"
})), Vs = ({
  children: e,
  ...t
}) => /* @__PURE__ */ h(rg, { ...t, align: "center", justify: "center", children: /* @__PURE__ */ h(Ot, { size: 2, variation: "black", noWrap: !0, children: e }) });
function g2({
  eventType: e = "click",
  callback: t
}) {
  const n = ce(null), r = Y((i) => {
    n && n.current && (n.current.contains(i.target) || t());
  }, [t, n]);
  return le(() => (document.addEventListener(e, r), () => {
    document.removeEventListener(e, r, !1);
  }), [r]), {
    ref: n
  };
}
const ig = S.div.withConfig({
  displayName: "pagination-input__PaginationInputContainer",
  componentId: "sc-gh1wzw-0"
})(({
  theme: e
}) => e.withMedia({
  width: ["unset", "160px", "160px"],
  "*": {
    boxSizing: "border-box"
  }
})), og = S("input").withConfig({
  displayName: "pagination-input__StyledInput",
  componentId: "sc-gh1wzw-1"
})(({
  theme: e
}) => ({
  color: "inherit",
  background: "inherit",
  fontFamily: "inherit",
  fontSize: "inherit",
  border: "none",
  width: "100%",
  padding: 0,
  textAlign: "center",
  caretColor: e.styleguideColors.contentRed,
  "&[type=number]": {
    "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
      margin: 0,
      "-webkit-appearance": "none",
      "pointer-events": "none"
    }
  },
  outline: "none"
})), ag = S(Vs).withConfig({
  displayName: "pagination-input__InputInfoText",
  componentId: "sc-gh1wzw-2"
})(({
  theme: e
}) => ({
  width: "100%",
  height: 24,
  cursor: "pointer",
  ":hover": {
    background: e.styleguideColors.fillSecondaryRedHover,
    color: e.styleguideColors.contentRed
  }
})), zo = ({
  currentPage: e,
  pageCount: t,
  onChange: n
}) => {
  const [r, i] = fe(!1), [o, s] = fe(!1), [a, l] = fe(void 0), c = (g) => Number(g?.replace(/[,.]/g, "")) || 0, u = () => {
    s(!1), l(void 0);
  }, {
    ref: d
  } = g2({
    callback: () => {
      u();
    }
  });
  return /* @__PURE__ */ h(ig, { onMouseOver: () => {
    i(!0);
  }, onMouseOut: () => {
    i(!1);
  }, onClick: () => {
    s(!0);
  }, ref: d, children: /* @__PURE__ */ h(ag, { children: o ? /* @__PURE__ */ h(og, { inputMode: "numeric", autoFocus: !0, value: a, onChange: (g) => l(g.target.value), onKeyDown: (g) => {
    if (g.keyCode === 13) {
      const _ = c(a);
      n(_ > t ? t : _), u();
    }
  } }) : r && !o ? /* @__PURE__ */ h(We, { children: "Enter page" }) : /* @__PURE__ */ z(We, { children: [
    "Page ",
    Tt(e),
    " of ",
    Tt(t)
  ] }) }) });
}, Ko = S.div.withConfig({
  displayName: "pagination-container__PaginationContainer",
  componentId: "sc-1iulzna-0"
})(({
  theme: e
}) => e.withMedia({
  border: "none",
  cursor: "pointer",
  color: e.styleguideColors.contentRed,
  background: e.styleguideColors.fillSecondary,
  borderRadius: e.borderRadius.base,
  fontWeight: e.typography.fontWeight.medium,
  minHeight: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: ["2px 8px"],
  ":hover": {
    background: e.styleguideColors.fillSecondaryRedHover,
    color: e.styleguideColors.fillPrimaryRedHover
  },
  ":active": {
    background: e.styleguideColors.fillSecondaryRedClick,
    color: e.styleguideColors.fillPrimaryRedClick
  }
})), sg = S.div.withConfig({
  displayName: "pagination-dropdown__PaginationDropdownContainer",
  componentId: "sc-1ea24no-0"
})(({
  theme: e
}) => e.withMedia({
  position: "relative",
  minWidth: [58]
})), lg = S.ul.withConfig({
  displayName: "pagination-dropdown__PaginationDropdownMenu",
  componentId: "sc-1ea24no-1"
})(({
  theme: e
}) => e.withMedia({
  width: "100%",
  position: "absolute",
  display: "block",
  background: e.styleguideColors.fillSecondary,
  boxShadow: e.boxShadow.block,
  padding: 0,
  margin: "4px 0",
  borderRadius: e.borderRadius.base,
  zIndex: e.zIndex.dropdown,
  "& > div": {
    borderRadius: 0
  },
  "& > :first-child": {
    borderRadius: e.borderRadius.base,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  "& > :last-child": {
    borderRadius: e.borderRadius.base,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  }
})), cg = S.li.withConfig({
  displayName: "pagination-dropdown__PaginationDropdownMenuItem",
  componentId: "sc-1ea24no-2"
})(({
  theme: e
}) => ({
  alignItems: "center",
  display: "flex",
  position: "relative",
  "& > input": {
    display: "none"
  }
})), ug = ({
  value: e,
  items: t,
  onChange: n
}) => {
  const [r, i] = fe(!1), {
    ref: o
  } = g2({
    callback: () => {
      i(!1);
    }
  });
  return /* @__PURE__ */ z(sg, { ref: o, onClick: () => {
    i(!r);
  }, children: [
    /* @__PURE__ */ z(Ko, { children: [
      /* @__PURE__ */ h(Ot, { size: 1, children: e }),
      /* @__PURE__ */ h(ve, { src: A2, marginLeft: !0, rotate: r, role: "img", alt: "Arrow down icon" })
    ] }),
    r && /* @__PURE__ */ h(lg, { children: t.map((s) => /* @__PURE__ */ h(Ko, { onClick: () => {
      n(s);
    }, children: /* @__PURE__ */ z(cg, { children: [
      /* @__PURE__ */ h("input", { type: "radio", name: "rows", id: `${s}-row`, defaultChecked: s === e, value: s }),
      /* @__PURE__ */ h(Ot, { size: 2, children: s })
    ] }) }, s)) })
  ] });
}, qo = ({
  value: e,
  items: t,
  onChange: n
}) => /* @__PURE__ */ z(J, { itemsSpacing: 4, align: "center", children: [
  /* @__PURE__ */ h(Vs, { children: "Show rows" }),
  /* @__PURE__ */ h(ug, { value: e, items: t, onChange: n })
] });
var dg = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.literal, r = t.overlap, i = n ? e : ["&"].concat(e);
  function o(s) {
    if (typeof s != "object" || s == null)
      return [];
    if (Array.isArray(s))
      return s.map(o);
    var a = {}, l = {}, c = {};
    return Object.keys(s).forEach(function(u) {
      var d = s[u];
      if (!Array.isArray(d) && n && (d = [d]), (n || Array.isArray(d)) && u.charCodeAt(0) !== 38) {
        var f = void 0;
        d.forEach(function(p, y) {
          if (!(r && f === p) && p != null)
            if (f = p, y === 0 && !n)
              c[u] = p;
            else if (a[i[y]] === void 0) {
              var m;
              a[i[y]] = (m = {}, m[u] = p, m);
            } else
              a[i[y]][u] = p;
        });
      } else typeof d == "object" ? l[u] = o(d) : c[u] = d;
    }), i.forEach(function(u) {
      a[u] && (c[u] = a[u]);
    }), Object.assign(c, l), c;
  }
  return function() {
    for (var s = arguments.length, a = Array(s), l = 0; l < s; l++)
      a[l] = arguments[l];
    return a.map(o);
  };
};
const Cn = {
  // there is NO "mobile breakpoint", because in mobile first
  // styles for mobile are defined by default without media
  tablet: 768,
  laptop: 1024,
  desktop: 1280
}, i2 = {
  // mobile: `(max-width:${Breakpoints['tablet'] - 1}px)`,
  tablet: `(min-width:${Cn.tablet}px)`,
  laptop: `(min-width:${Cn.laptop}px)`,
  desktop: `(min-width:${Cn.desktop}px)`
}, fg = dg([`@media ${i2.tablet}`, `@media ${i2.laptop}`, `@media ${i2.desktop}`]), f2 = ([e, t, n, r], i) => {
  const s = [i2.desktop, i2.laptop, i2.tablet].map((u) => window.matchMedia(u)), a = () => {
    const u = s.findIndex((d) => d.matches);
    return [r ?? n ?? t, n ?? t, t][u] ?? e;
  }, [l, c] = fe(a);
  return le(() => {
    const u = () => c(a);
    return u(), s.forEach((d) => d.addListener(u)), () => s.forEach((d) => d.removeListener(u));
  }, [...i]), l;
}, Xo = [5, 10, 25, 50], Yo = S(J).withConfig({
  displayName: "pagination__Container",
  componentId: "sc-1muel29-0"
})(({
  theme: e
}) => e.withMedia({
  height: [80, 48],
  flexDirection: ["column", "row", "row"],
  justifyContent: "space-between",
  padding: ["12px 10px", "12px 20px"],
  margin: ["0 0 10px 0", "0"]
})), Qo = S(ve).withConfig({
  displayName: "pagination__MirroredSvgIcon",
  componentId: "sc-1muel29-1"
})(({
  theme: e
}) => ({
  transform: "rotate(180deg)"
})), pg = ({
  perPage: e = 10,
  itemCount: t = 0,
  pageCount: n = 1,
  currentPage: r = 1,
  setCurrentPage: i = () => {
  },
  setPerPage: o = () => {
  },
  hideRowsPerPage: s = !1,
  totalRowsLabel: a = "total row"
}) => {
  const l = r > 1, c = r > 1, u = r < n, d = n < 1, f = () => i(r - 1), p = () => i(r + 1), y = () => i(1), m = () => i(n), g = (w) => i(w), v = f2([/* @__PURE__ */ z(Ee, { itemsSpacing: 4, children: [
    /* @__PURE__ */ z(J, { itemsSpacing: 4, children: [
      /* @__PURE__ */ h(u0, { color: "secondaryRed", disabled: !l, onClick: y, children: "First" }),
      /* @__PURE__ */ h(d0, { color: "secondaryRed", disabled: !c, onClick: f, children: /* @__PURE__ */ h(Qo, { src: X2 }) }),
      /* @__PURE__ */ h(zo, { pageCount: n, currentPage: r, onChange: g }),
      /* @__PURE__ */ h(d0, { color: "secondaryRed", disabled: !u, onClick: p, children: /* @__PURE__ */ h(ve, { src: X2 }) }),
      /* @__PURE__ */ h(u0, { color: "secondaryRed", disabled: !u, onClick: m, children: "Last" })
    ] }),
    !s && /* @__PURE__ */ h(qo, { value: e, items: Xo, onChange: o })
  ] }), /* @__PURE__ */ z(J, { itemsSpacing: 40, children: [
    !s && /* @__PURE__ */ h(qo, { value: e, items: Xo, onChange: o }),
    /* @__PURE__ */ z(J, { itemsSpacing: 4, align: "center", children: [
      /* @__PURE__ */ h(u0, { disabled: !l, onClick: y, color: "secondaryRed", children: "First" }),
      /* @__PURE__ */ h(d0, { color: "secondaryRed", disabled: !c, onClick: f, children: /* @__PURE__ */ h(Qo, { src: X2 }) }),
      /* @__PURE__ */ h(zo, { pageCount: n, currentPage: r, onChange: g }),
      /* @__PURE__ */ h(d0, { color: "secondaryRed", disabled: !u, onClick: p, children: /* @__PURE__ */ h(ve, { src: X2 }) }),
      /* @__PURE__ */ h(u0, { disabled: !u, onClick: m, color: "secondaryRed", children: "Last" })
    ] })
  ] })], [e, r, n]);
  return d ? /* @__PURE__ */ h(Yo, { children: /* @__PURE__ */ h("span", { children: " " }) }) : /* @__PURE__ */ z(Yo, { children: [
    /* @__PURE__ */ h(J, { align: "center", children: /* @__PURE__ */ z(ne, { size: 3, scale: "xs", variation: "darkGray", children: [
      Tt(t),
      " ",
      a,
      t > 1 && "s"
    ] }) }),
    v
  ] });
}, hg = S(qh).withConfig({
  displayName: "table-loader__TableLoaderRow",
  componentId: "sc-aagv8n-0"
})(({
  theme: e,
  type: t
}) => ({
  height: me({
    [r2.TextWithAvatar]: "56px",
    [r2.TextWithIcon]: "52px",
    [r2.TextSingleLine]: "48px"
  }, t)
}));
function gg({
  columnsLength: e,
  rowsLength: t = 10,
  tableRowType: n = r2.TextSingleLine
}) {
  const r = Array(t).fill(void 0), i = Array(e).fill(null);
  return /* @__PURE__ */ h(We, { children: r.map((o, s) => /* @__PURE__ */ h(hg, { type: n, loading: !0, children: i.map((a, l) => /* @__PURE__ */ h(jh, { children: /* @__PURE__ */ h(Un, {}) }, "column" + l)) }, "row" + s)) });
}
const mg = S("div").withConfig({
  displayName: "table-error__FailedToFetchWrapper",
  componentId: "sc-1vrch0o-0"
})(({
  theme: e
}) => ({
  height: 400,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
})), vg = S(ne).withConfig({
  displayName: "table-error__StyledBodyText",
  componentId: "sc-1vrch0o-1"
})(({
  theme: e
}) => ({
  marginTop: 8,
  color: e.styleguideColors.contentSecondary
})), yg = S(ve).withConfig({
  displayName: "table-error__StyledSvgIcon",
  componentId: "sc-1vrch0o-2"
})(({
  theme: e
}) => ({
  path: {
    fill: e.styleguideColors.fillPrimaryRed
  },
  marginBottom: 20
})), Cg = () => /* @__PURE__ */ z(mg, { children: [
  /* @__PURE__ */ h(yg, { src: Ta, size: 60 }),
  /* @__PURE__ */ h(ne, { scale: "lg", lineHeight: "sm", size: 1, children: "Failed to load data" }),
  /* @__PURE__ */ h(vg, { size: 3, scale: "xs", children: "Please try again later" })
] }), wg = ({
  columnsLength: e
}) => /* @__PURE__ */ h("tr", { children: /* @__PURE__ */ h("td", { colSpan: e, children: /* @__PURE__ */ h(Cg, {}) }) });
var bg = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e))(bg || {});
const EC = ({
  data: e,
  loading: t,
  error: n,
  renderDataHeaders: r,
  renderPaginatedData: i,
  tableRowType: o = r2.TextWithAvatar,
  ...s
}) => {
  const a = () => !n && /* @__PURE__ */ h(pg, { ...s });
  return /* @__PURE__ */ h(Jh, { renderHeader: () => a(), renderDataHeaders: () => r({
    sortingProps: null
  }), renderData: () => e == null && !n || t ? /* @__PURE__ */ h(gg, { columnsLength: ei.count(r({
    sortingProps: {}
  }).props.children), tableRowType: o }) : n ? /* @__PURE__ */ h(wg, { columnsLength: ei.count(r({
    sortingProps: {}
  }).props.children), error: n }) : e ? i(e, {
    sortingProps: {}
  }) : /* @__PURE__ */ h(We, {}), renderFooter: () => a(), ...s });
}, xg = (e) => e ? "contentRed" : "", Lg = S.textarea.withConfig({
  displayName: "textarea__StyledTextarea",
  componentId: "sc-gghw4d-0"
})(({
  theme: e
}) => ({
  height: 124,
  borderRadius: e.borderRadius.base,
  width: "100%",
  padding: 0,
  color: "inherit",
  background: "inherit",
  fontFamily: "inherit",
  fontSize: "inherit",
  border: "none",
  "&::placeholder": {
    color: e.styleguideColors.contentSecondary
  },
  resize: "none"
})), _g = S("div").withConfig({
  displayName: "textarea__TextareaContainer",
  componentId: "sc-gghw4d-1"
})(({
  theme: e,
  disabled: t,
  error: n
}) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
  borderRadius: e.borderRadius.base,
  color: e.styleguideColors.contentPrimary,
  background: e.styleguideColors.fillSecondary,
  fontFamily: e.typography.fontFamily.primary,
  fontSize: "0.875rem",
  path: {
    fill: e.styleguideColors[xg(n)]
  },
  ...n && {
    border: `1px solid ${e.styleguideColors.borderRed}`
  },
  ...t && {
    opacity: 0.5,
    color: e.styleguideColors.contentTertiary
  }
})), Mg = S("div").withConfig({
  displayName: "textarea__SuffixContainer",
  componentId: "sc-gghw4d-2"
})(({
  theme: e
}) => ({
  marginLeft: 16
}));
function PC({
  id: e,
  className: t,
  style: n,
  disabled: r,
  label: i,
  rightLabel: o,
  suffixIcon: s,
  prefixIcon: a,
  error: l,
  validationText: c,
  onFocus: u,
  labelFontSize: d = G2.default,
  ...f
}) {
  const p = (y) => {
    y.target.select(), u && u(y);
  };
  return l && (s = /* @__PURE__ */ h(ve, { src: zn })), /* @__PURE__ */ h(Rs, { id: e, className: t, style: n, label: i, rightLabel: o, status: l ? Yr.Error : void 0, statusText: c, disabled: r, labelFontSize: d, children: /* @__PURE__ */ z(_g, { error: l, children: [
    /* @__PURE__ */ h(Lg, { title: "", disabled: r, onFocus: p, ...f }),
    s && /* @__PURE__ */ h(Mg, { children: s })
  ] }) });
}
const Sg = S(Ee).withConfig({
  displayName: "accordion__AccordionContainer",
  componentId: "sc-1d5ra64-0"
})(({
  isOpen: e,
  backgroundColor: t = "transparent"
}) => ({
  background: e ? t : "transparent",
  width: "100%"
})), Ig = S.div.withConfig({
  displayName: "accordion__StyledContainer",
  componentId: "sc-1d5ra64-1"
})(() => ({
  cursor: "pointer"
}));
function kC({
  children: e,
  renderContent: t,
  disableClickAway: n,
  ...r
}) {
  const [i, o] = fe(!1), {
    ref: s
  } = g2({
    callback: () => {
      !n && o(!1);
    }
  }), a = {
    isOpen: i
  };
  return /* @__PURE__ */ z(Sg, { isOpen: i, "aria-expanded": !!i, ...r, children: [
    /* @__PURE__ */ h(Ig, { ref: s, onClick: () => {
      o(!i);
    }, tabIndex: 0, onKeyDown: (l) => {
      l.key === "Enter" && o(!i);
    }, children: e(a) }),
    i && t(a)
  ] });
}
const Eg = S.div.withConfig({
  displayName: "wizard-tile__StyledWizardTile",
  componentId: "sc-1frlsks-0"
})(({
  theme: e
}) => e.withMedia({
  position: "relative",
  background: e.styleguideColors.backgroundPrimary,
  boxShadow: "0px 2px 4px rgba(143, 144, 152, 0.15)",
  borderRadius: e.borderRadius.base,
  marginBottom: 24,
  height: "100%",
  padding: ["80px 20px", "80px 150px", "80px 200px", "80px 300px"]
}));
function OC(e) {
  return /* @__PURE__ */ h(Eg, { ...e });
}
const Pg = S.div.withConfig({
  displayName: "containers__SettingsContainer",
  componentId: "sc-keh4pe-0"
})(({
  theme: e
}) => e.withMedia({
  background: e.styleguideColors.backgroundTertiary,
  height: "40px",
  width: "100%",
  display: "flex"
})), TC = ({
  children: e
}) => /* @__PURE__ */ h(Pg, { children: e }), Jo = S(ne).withConfig({
  displayName: "account__StyledBodyText",
  componentId: "sc-16fucbm-0"
})(({
  theme: e,
  fontSize: t
}) => ({
  color: e.styleguideColors.contentTertiary,
  fontSize: t
})), HC = ({
  name: e,
  hash: t,
  logo: n,
  fontSize: r
}) => /* @__PURE__ */ z(J, { itemsSpacing: 8, align: "center", children: [
  n ? /* @__PURE__ */ h(Jt, { src: n, size: "small" }) : /* @__PURE__ */ h(Jt, { hash: t, size: "small" }),
  e ? /* @__PURE__ */ h(Jo, { size: 2, monotype: !0, fontSize: r, children: e }) : /* @__PURE__ */ h(Jo, { size: 2, monotype: !0, fontSize: r, children: G0(t) })
] }), kg = S(J).withConfig({
  displayName: "base-dropdown-menu__Container",
  componentId: "sc-wg4h6a-0"
})(({
  theme: e,
  isOpen: t
}) => ({
  borderRadius: e.borderRadius.base,
  ...!t && {
    display: "none"
  }
})), Og = S.div.withConfig({
  displayName: "base-dropdown-menu__BaseMenuWrapper",
  componentId: "sc-wg4h6a-1"
})(({
  theme: e
}) => ({
  width: "fit-content",
  height: "auto",
  background: e.styleguideColors.backgroundPrimary,
  filter: e.boxShadow.dropdown,
  borderTop: `5px solid ${e.styleguideColors.fillPrimaryRed}`,
  borderRadius: e.borderRadius.base
})), $s = ({
  opened: e = !1,
  onClose: t,
  children: n,
  className: r
}) => {
  const [i, o] = fe(e);
  le(() => {
    o(e);
  }, [e]);
  const {
    ref: s
  } = g2({
    callback: () => {
      o(!1), t && t();
    }
  });
  return /* @__PURE__ */ h(kg, { isOpen: i, ref: s, className: r, children: /* @__PURE__ */ h(Og, { children: n }) });
}, Tg = S(Ee).withConfig({
  displayName: "dropdown-menu__StyledFlexColumn",
  componentId: "sc-1nekj2e-0"
})(({
  theme: e,
  multiColumn: t,
  padding: n
}) => ({
  padding: n ?? "8px",
  ...t && {
    padding: "8px",
    "& li:hover > *": {
      borderRadius: e.borderRadius.base
    }
  }
})), DC = ({
  children: e,
  multiColumn: t,
  padding: n,
  ...r
}) => /* @__PURE__ */ h($s, { ...r, children: /* @__PURE__ */ h(Tg, { multiColumn: t, padding: n, children: e }) }), Hg = S(J).withConfig({
  displayName: "dropdown-menu-item__ItemContainer",
  componentId: "sc-hjkoc1-0"
})(({
  theme: e,
  padding: t
}) => ({
  width: "100%",
  cursor: "pointer",
  padding: t ?? "12px 16px",
  ":hover, :active": {
    borderRadius: e.borderRadius.base,
    background: e.styleguideColors.fillSecondary
  }
})), Dg = S.li.withConfig({
  displayName: "dropdown-menu-item__MenuItemWrapper",
  componentId: "sc-hjkoc1-1"
})(({
  theme: e
}) => e.withMedia({
  boxSizing: "border-box",
  display: "flex",
  color: e.styleguideColors.contentPrimary,
  "&:hover": {
    cursor: "pointer",
    borderRadius: e.borderRadius.base,
    "> *": {
      color: [e.styleguideColors.contentBlue],
      fill: [e.styleguideColors.contentBlue],
      background: e.styleguideColors.fillSecondary
    }
  }
})), RC = (e) => /* @__PURE__ */ h(Dg, { ...e, children: /* @__PURE__ */ h(Hg, { padding: e.padding, children: e.children }) }), Rg = S.ul.withConfig({
  displayName: "products-menu__ProductsMenuWrapper",
  componentId: "sc-n6ukm0-0"
})(({
  theme: e
}) => ({
  maxWidth: "620px",
  padding: "8px",
  margin: 0
})), NC = ({
  opened: e = !1,
  children: t,
  className: n
}) => {
  const r = f2([Ee, Ee, J], []);
  return /* @__PURE__ */ h($s, { opened: e, children: /* @__PURE__ */ h(Rg, { className: n, children: /* @__PURE__ */ h(r, { wrap: "wrap", children: t }) }) });
};
var Bn = /* @__PURE__ */ ((e) => (e.light = "light", e.dark = "dark", e))(Bn || {});
const Ng = S.span.withConfig({
  displayName: "products-menu-item__ProductItemWrapper",
  componentId: "sc-1ns6tfd-0"
})(({
  theme: e,
  isOpen: t,
  selected: n,
  disabled: r
}) => e.withMedia({
  display: "flex",
  flex: "1 1 auto",
  justifyContent: "center",
  alignItems: "center",
  padding: ["8px 12px", "8px 12px", "16px"],
  width: ["208px", "208px", "172px"],
  height: ["56px", "56px", "137px"],
  "&:hover": {
    borderRadius: e.borderRadius.base,
    background: e.styleguideColors.backgroundSecondary
  },
  ...n && {
    background: e.styleguideColors.backgroundSecondary,
    pointerEvents: "none"
  },
  ...r && {
    color: e.styleguideColors.contentSecondary,
    "&:hover > *": {
      pointerEvents: "none",
      color: e.styleguideColors.contentSecondary
    }
  }
})), ea = S(ne).withConfig({
  displayName: "products-menu-item__StyledBodyText",
  componentId: "sc-1ns6tfd-1"
})(({
  theme: e
}) => e.withMedia({
  whiteSpace: "nowrap",
  color: e.styleguideColors.contentPrimary
})), ta = {
  light: "assets/icons/ic-sand-clock-light.svg",
  dark: "assets/icons/ic-sand-clock-dark.svg"
}, AC = ({
  nameLabel: e,
  link: t,
  icon: n,
  descriptionText: r,
  selected: i = !1,
  newBadgeLabel: o,
  comingSoonBadgeLabel: s,
  badge: a
}) => {
  const l = Vn();
  let c;
  a ? c = /* @__PURE__ */ h(dn, { ...a, lineHeight: "xxs" }) : s ? c = /* @__PURE__ */ h(dn, { label: s, variation: "violet", lineHeight: "xxs" }) : o ? c = /* @__PURE__ */ h(dn, { label: o, variation: "green", lineHeight: "xxs" }) : c = /* @__PURE__ */ h(Ot, { size: 2, variation: "lightGray", children: r });
  const u = /* @__PURE__ */ h(J, { itemsSpacing: 8, justify: "flex-start", grow: 1, children: /* @__PURE__ */ z(J, { itemsSpacing: 8, grow: 1, children: [
    /* @__PURE__ */ h(ve, { src: n || ta[l.themeName], size: 32 }),
    /* @__PURE__ */ z(Ee, { itemsSpacing: 4, children: [
      c,
      /* @__PURE__ */ h(ea, { size: 1, children: e })
    ] })
  ] }) }), d = /* @__PURE__ */ z(Ee, { itemsSpacing: 16, align: "center", justify: "center", grow: 1, children: [
    /* @__PURE__ */ h(ve, { src: n || ta[l.themeName], size: 48 }),
    /* @__PURE__ */ z(Ee, { itemsSpacing: 4, align: "center", children: [
      c,
      /* @__PURE__ */ h(ea, { size: 1, children: e })
    ] })
  ] }), f = f2([u, u, d], []);
  return /* @__PURE__ */ h(Ng, { onClick: () => !s && window.open(t, "_blank"), selected: i, disabled: !!s, children: f });
};
var f0 = { exports: {} }, Et = {}, p0 = { exports: {} }, Ye = {}, h0 = { exports: {} }, na;
function Zs() {
  return na || (na = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = u;
    /*!
     * Adapted from jQuery UI core
     *
     * http://jqueryui.com
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/category/ui-core/
     */
    var n = "none", r = "contents", i = /^(input|select|textarea|button|object|iframe)$/;
    function o(d, f) {
      return f.getPropertyValue("overflow") !== "visible" || // if 'overflow: visible' set, check if there is actually any overflow
      d.scrollWidth <= 0 && d.scrollHeight <= 0;
    }
    function s(d) {
      var f = d.offsetWidth <= 0 && d.offsetHeight <= 0;
      if (f && !d.innerHTML) return !0;
      try {
        var p = window.getComputedStyle(d), y = p.getPropertyValue("display");
        return f ? y !== r && o(d, p) : y === n;
      } catch {
        return console.warn("Failed to inspect element style"), !1;
      }
    }
    function a(d) {
      for (var f = d, p = d.getRootNode && d.getRootNode(); f && f !== document.body; ) {
        if (p && f === p && (f = p.host.parentNode), s(f)) return !1;
        f = f.parentNode;
      }
      return !0;
    }
    function l(d, f) {
      var p = d.nodeName.toLowerCase(), y = i.test(p) && !d.disabled || p === "a" && d.href || f;
      return y && a(d);
    }
    function c(d) {
      var f = d.getAttribute("tabindex");
      f === null && (f = void 0);
      var p = isNaN(f);
      return (p || f >= 0) && l(d, !p);
    }
    function u(d) {
      var f = [].slice.call(d.querySelectorAll("*"), 0).reduce(function(p, y) {
        return p.concat(y.shadowRoot ? u(y.shadowRoot) : [y]);
      }, []);
      return f.filter(c);
    }
    e.exports = t.default;
  }(h0, h0.exports)), h0.exports;
}
var ra;
function Ag() {
  if (ra) return Ye;
  ra = 1, Object.defineProperty(Ye, "__esModule", {
    value: !0
  }), Ye.resetState = s, Ye.log = a, Ye.handleBlur = l, Ye.handleFocus = c, Ye.markForFocusLater = u, Ye.returnFocus = d, Ye.popWithoutFocus = f, Ye.setupScopedFocus = p, Ye.teardownScopedFocus = y;
  var e = Zs(), t = n(e);
  function n(m) {
    return m && m.__esModule ? m : { default: m };
  }
  var r = [], i = null, o = !1;
  function s() {
    r = [];
  }
  function a() {
    process.env.NODE_ENV !== "production" && (console.log("focusManager ----------"), r.forEach(function(m) {
      var g = m || {};
      console.log(g.nodeName, g.className, g.id);
    }), console.log("end focusManager ----------"));
  }
  function l() {
    o = !0;
  }
  function c() {
    if (o) {
      if (o = !1, !i)
        return;
      setTimeout(function() {
        if (!i.contains(document.activeElement)) {
          var m = (0, t.default)(i)[0] || i;
          m.focus();
        }
      }, 0);
    }
  }
  function u() {
    r.push(document.activeElement);
  }
  function d() {
    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, g = null;
    try {
      r.length !== 0 && (g = r.pop(), g.focus({ preventScroll: m }));
      return;
    } catch {
      console.warn(["You tried to return focus to", g, "but it is not in the DOM anymore"].join(" "));
    }
  }
  function f() {
    r.length > 0 && r.pop();
  }
  function p(m) {
    i = m, window.addEventListener ? (window.addEventListener("blur", l, !1), document.addEventListener("focus", c, !0)) : (window.attachEvent("onBlur", l), document.attachEvent("onFocus", c));
  }
  function y() {
    i = null, window.addEventListener ? (window.removeEventListener("blur", l), document.removeEventListener("focus", c)) : (window.detachEvent("onBlur", l), document.detachEvent("onFocus", c));
  }
  return Ye;
}
var g0 = { exports: {} }, ia;
function Bg() {
  return ia || (ia = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = Zs(), r = i(n);
    function i(a) {
      return a && a.__esModule ? a : { default: a };
    }
    function o() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
      return a.activeElement.shadowRoot ? o(a.activeElement.shadowRoot) : a.activeElement;
    }
    function s(a, l) {
      var c = (0, r.default)(a);
      if (!c.length) {
        l.preventDefault();
        return;
      }
      var u = void 0, d = l.shiftKey, f = c[0], p = c[c.length - 1], y = o();
      if (a === y) {
        if (!d) return;
        u = p;
      }
      if (p === y && !d && (u = f), f === y && d && (u = p), u) {
        l.preventDefault(), u.focus();
        return;
      }
      var m = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent), g = m != null && m[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
      if (g) {
        var _ = c.indexOf(y);
        if (_ > -1 && (_ += d ? -1 : 1), u = c[_], typeof u > "u") {
          l.preventDefault(), u = d ? p : f, u.focus();
          return;
        }
        l.preventDefault(), u.focus();
      }
    }
    e.exports = t.default;
  }(g0, g0.exports)), g0.exports;
}
var it = {}, wn, oa;
function Fg() {
  if (oa) return wn;
  oa = 1;
  var e = process.env.NODE_ENV !== "production", t = function() {
  };
  if (e) {
    var n = function(i, o) {
      var s = arguments.length;
      o = new Array(s > 1 ? s - 1 : 0);
      for (var a = 1; a < s; a++)
        o[a - 1] = arguments[a];
      var l = 0, c = "Warning: " + i.replace(/%s/g, function() {
        return o[l++];
      });
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
    t = function(r, i, o) {
      var s = arguments.length;
      o = new Array(s > 2 ? s - 2 : 0);
      for (var a = 2; a < s; a++)
        o[a - 2] = arguments[a];
      if (i === void 0)
        throw new Error(
          "`warning(condition, format, ...args)` requires a warning message argument"
        );
      r || n.apply(null, [i].concat(o));
    };
  }
  return wn = t, wn;
}
var dt = {}, bn = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
var aa;
function Vg() {
  return aa || (aa = 1, function(e) {
    (function() {
      var t = !!(typeof window < "u" && window.document && window.document.createElement), n = {
        canUseDOM: t,
        canUseWorkers: typeof Worker < "u",
        canUseEventListeners: t && !!(window.addEventListener || window.attachEvent),
        canUseViewport: t && !!window.screen
      };
      e.exports ? e.exports = n : window.ExecutionEnvironment = n;
    })();
  }(bn)), bn.exports;
}
var sa;
function Qr() {
  if (sa) return dt;
  sa = 1, Object.defineProperty(dt, "__esModule", {
    value: !0
  }), dt.canUseDOM = dt.SafeNodeList = dt.SafeHTMLCollection = void 0;
  var e = Vg(), t = n(e);
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var r = t.default, i = r.canUseDOM ? window.HTMLElement : {};
  return dt.SafeHTMLCollection = r.canUseDOM ? window.HTMLCollection : {}, dt.SafeNodeList = r.canUseDOM ? window.NodeList : {}, dt.canUseDOM = r.canUseDOM, dt.default = i, dt;
}
var la;
function Ws() {
  if (la) return it;
  la = 1, Object.defineProperty(it, "__esModule", {
    value: !0
  }), it.resetState = o, it.log = s, it.assertNodeList = a, it.setElement = l, it.validateElement = c, it.hide = u, it.show = d, it.documentNotReadyOrSSRTesting = f;
  var e = Fg(), t = r(e), n = Qr();
  function r(p) {
    return p && p.__esModule ? p : { default: p };
  }
  var i = null;
  function o() {
    i && (i.removeAttribute ? i.removeAttribute("aria-hidden") : i.length != null ? i.forEach(function(p) {
      return p.removeAttribute("aria-hidden");
    }) : document.querySelectorAll(i).forEach(function(p) {
      return p.removeAttribute("aria-hidden");
    })), i = null;
  }
  function s() {
    if (process.env.NODE_ENV !== "production") {
      var p = i || {};
      console.log("ariaAppHider ----------"), console.log(p.nodeName, p.className, p.id), console.log("end ariaAppHider ----------");
    }
  }
  function a(p, y) {
    if (!p || !p.length)
      throw new Error("react-modal: No elements were found for selector " + y + ".");
  }
  function l(p) {
    var y = p;
    if (typeof y == "string" && n.canUseDOM) {
      var m = document.querySelectorAll(y);
      a(m, y), y = m;
    }
    return i = y || i, i;
  }
  function c(p) {
    var y = p || i;
    return y ? Array.isArray(y) || y instanceof HTMLCollection || y instanceof NodeList ? y : [y] : ((0, t.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), []);
  }
  function u(p) {
    var y = !0, m = !1, g = void 0;
    try {
      for (var _ = c(p)[Symbol.iterator](), C; !(y = (C = _.next()).done); y = !0) {
        var v = C.value;
        v.setAttribute("aria-hidden", "true");
      }
    } catch (w) {
      m = !0, g = w;
    } finally {
      try {
        !y && _.return && _.return();
      } finally {
        if (m)
          throw g;
      }
    }
  }
  function d(p) {
    var y = !0, m = !1, g = void 0;
    try {
      for (var _ = c(p)[Symbol.iterator](), C; !(y = (C = _.next()).done); y = !0) {
        var v = C.value;
        v.removeAttribute("aria-hidden");
      }
    } catch (w) {
      m = !0, g = w;
    } finally {
      try {
        !y && _.return && _.return();
      } finally {
        if (m)
          throw g;
      }
    }
  }
  function f() {
    i = null;
  }
  return it;
}
var At = {}, ca;
function $g() {
  if (ca) return At;
  ca = 1, Object.defineProperty(At, "__esModule", {
    value: !0
  }), At.resetState = r, At.log = i;
  var e = {}, t = {};
  function n(c, u) {
    c.classList.remove(u);
  }
  function r() {
    var c = document.getElementsByTagName("html")[0];
    for (var u in e)
      n(c, e[u]);
    var d = document.body;
    for (var f in t)
      n(d, t[f]);
    e = {}, t = {};
  }
  function i() {
    if (process.env.NODE_ENV !== "production") {
      var c = document.getElementsByTagName("html")[0].className, u = `Show tracked classes:

`;
      u += "<html /> (" + c + `):
  `;
      for (var d in e)
        u += "  " + d + " " + e[d] + `
  `;
      c = document.body.className, u += `

doc.body (` + c + `):
  `;
      for (var f in t)
        u += "  " + f + " " + t[f] + `
  `;
      u += `
`, console.log(u);
    }
  }
  var o = function(u, d) {
    return u[d] || (u[d] = 0), u[d] += 1, d;
  }, s = function(u, d) {
    return u[d] && (u[d] -= 1), d;
  }, a = function(u, d, f) {
    f.forEach(function(p) {
      o(d, p), u.add(p);
    });
  }, l = function(u, d, f) {
    f.forEach(function(p) {
      s(d, p), d[p] === 0 && u.remove(p);
    });
  };
  return At.add = function(u, d) {
    return a(u.classList, u.nodeName.toLowerCase() == "html" ? e : t, d.split(" "));
  }, At.remove = function(u, d) {
    return l(u.classList, u.nodeName.toLowerCase() == "html" ? e : t, d.split(" "));
  }, At;
}
var Yt = {}, ua;
function Us() {
  if (ua) return Yt;
  ua = 1, Object.defineProperty(Yt, "__esModule", {
    value: !0
  }), Yt.log = r, Yt.resetState = i;
  function e(o, s) {
    if (!(o instanceof s))
      throw new TypeError("Cannot call a class as a function");
  }
  var t = function o() {
    var s = this;
    e(this, o), this.register = function(a) {
      if (s.openInstances.indexOf(a) !== -1) {
        process.env.NODE_ENV !== "production" && console.warn("React-Modal: Cannot register modal instance that's already open");
        return;
      }
      s.openInstances.push(a), s.emit("register");
    }, this.deregister = function(a) {
      var l = s.openInstances.indexOf(a);
      if (l === -1) {
        process.env.NODE_ENV !== "production" && console.warn("React-Modal: Unable to deregister " + a + " as it was never registered");
        return;
      }
      s.openInstances.splice(l, 1), s.emit("deregister");
    }, this.subscribe = function(a) {
      s.subscribers.push(a);
    }, this.emit = function(a) {
      s.subscribers.forEach(function(l) {
        return l(
          a,
          // shallow copy to avoid accidental mutation
          s.openInstances.slice()
        );
      });
    }, this.openInstances = [], this.subscribers = [];
  }, n = new t();
  function r() {
    console.log("portalOpenInstances ----------"), console.log(n.openInstances.length), n.openInstances.forEach(function(o) {
      return console.log(o);
    }), console.log("end portalOpenInstances ----------");
  }
  function i() {
    n = new t();
  }
  return Yt.default = n, Yt;
}
var x2 = {}, da;
function Zg() {
  if (da) return x2;
  da = 1, Object.defineProperty(x2, "__esModule", {
    value: !0
  }), x2.resetState = s, x2.log = a;
  var e = Us(), t = n(e);
  function n(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var r = void 0, i = void 0, o = [];
  function s() {
    for (var u = [r, i], d = 0; d < u.length; d++) {
      var f = u[d];
      f && f.parentNode && f.parentNode.removeChild(f);
    }
    r = i = null, o = [];
  }
  function a() {
    console.log("bodyTrap ----------"), console.log(o.length);
    for (var u = [r, i], d = 0; d < u.length; d++) {
      var f = u[d], p = f || {};
      console.log(p.nodeName, p.className, p.id);
    }
    console.log("edn bodyTrap ----------");
  }
  function l() {
    if (o.length === 0) {
      process.env.NODE_ENV !== "production" && console.warn("React-Modal: Open instances > 0 expected");
      return;
    }
    o[o.length - 1].focusContent();
  }
  function c(u, d) {
    !r && !i && (r = document.createElement("div"), r.setAttribute("data-react-modal-body-trap", ""), r.style.position = "absolute", r.style.opacity = "0", r.setAttribute("tabindex", "0"), r.addEventListener("focus", l), i = r.cloneNode(), i.addEventListener("focus", l)), o = d, o.length > 0 ? (document.body.firstChild !== r && document.body.insertBefore(r, document.body.firstChild), document.body.lastChild !== i && document.body.appendChild(i)) : (r.parentElement && r.parentElement.removeChild(r), i.parentElement && i.parentElement.removeChild(i));
  }
  return t.default.subscribe(c), x2;
}
var fa;
function Wg() {
  return fa || (fa = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = Object.assign || function(x) {
      for (var E = 1; E < arguments.length; E++) {
        var R = arguments[E];
        for (var L in R)
          Object.prototype.hasOwnProperty.call(R, L) && (x[L] = R[L]);
      }
      return x;
    }, r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(x) {
      return typeof x;
    } : function(x) {
      return x && typeof Symbol == "function" && x.constructor === Symbol && x !== Symbol.prototype ? "symbol" : typeof x;
    }, i = /* @__PURE__ */ function() {
      function x(E, R) {
        for (var L = 0; L < R.length; L++) {
          var k = R[L];
          k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(E, k.key, k);
        }
      }
      return function(E, R, L) {
        return R && x(E.prototype, R), L && x(E, L), E;
      };
    }(), o = ge, s = /* @__PURE__ */ lr(), a = b(s), l = Ag(), c = w(l), u = Bg(), d = b(u), f = Ws(), p = w(f), y = $g(), m = w(y), g = Qr(), _ = b(g), C = Us(), v = b(C);
    Zg();
    function w(x) {
      if (x && x.__esModule)
        return x;
      var E = {};
      if (x != null)
        for (var R in x)
          Object.prototype.hasOwnProperty.call(x, R) && (E[R] = x[R]);
      return E.default = x, E;
    }
    function b(x) {
      return x && x.__esModule ? x : { default: x };
    }
    function I(x, E) {
      if (!(x instanceof E))
        throw new TypeError("Cannot call a class as a function");
    }
    function O(x, E) {
      if (!x)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return E && (typeof E == "object" || typeof E == "function") ? E : x;
    }
    function V(x, E) {
      if (typeof E != "function" && E !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof E);
      x.prototype = Object.create(E && E.prototype, { constructor: { value: x, enumerable: !1, writable: !0, configurable: !0 } }), E && (Object.setPrototypeOf ? Object.setPrototypeOf(x, E) : x.__proto__ = E);
    }
    var A = {
      overlay: "ReactModal__Overlay",
      content: "ReactModal__Content"
    }, N = function(E) {
      return E.code === "Tab" || E.keyCode === 9;
    }, T = function(E) {
      return E.code === "Escape" || E.keyCode === 27;
    }, D = 0, $ = function(x) {
      V(E, x);
      function E(R) {
        I(this, E);
        var L = O(this, (E.__proto__ || Object.getPrototypeOf(E)).call(this, R));
        return L.setOverlayRef = function(k) {
          L.overlay = k, L.props.overlayRef && L.props.overlayRef(k);
        }, L.setContentRef = function(k) {
          L.content = k, L.props.contentRef && L.props.contentRef(k);
        }, L.afterClose = function() {
          var k = L.props, Z = k.appElement, M = k.ariaHideApp, P = k.htmlOpenClassName, H = k.bodyOpenClassName, B = k.parentSelector, F = B && B().ownerDocument || document;
          H && m.remove(F.body, H), P && m.remove(F.getElementsByTagName("html")[0], P), M && D > 0 && (D -= 1, D === 0 && p.show(Z)), L.props.shouldFocusAfterRender && (L.props.shouldReturnFocusAfterClose ? (c.returnFocus(L.props.preventScroll), c.teardownScopedFocus()) : c.popWithoutFocus()), L.props.onAfterClose && L.props.onAfterClose(), v.default.deregister(L);
        }, L.open = function() {
          L.beforeOpen(), L.state.afterOpen && L.state.beforeClose ? (clearTimeout(L.closeTimer), L.setState({ beforeClose: !1 })) : (L.props.shouldFocusAfterRender && (c.setupScopedFocus(L.node), c.markForFocusLater()), L.setState({ isOpen: !0 }, function() {
            L.openAnimationFrame = requestAnimationFrame(function() {
              L.setState({ afterOpen: !0 }), L.props.isOpen && L.props.onAfterOpen && L.props.onAfterOpen({
                overlayEl: L.overlay,
                contentEl: L.content
              });
            });
          }));
        }, L.close = function() {
          L.props.closeTimeoutMS > 0 ? L.closeWithTimeout() : L.closeWithoutTimeout();
        }, L.focusContent = function() {
          return L.content && !L.contentHasFocus() && L.content.focus({ preventScroll: !0 });
        }, L.closeWithTimeout = function() {
          var k = Date.now() + L.props.closeTimeoutMS;
          L.setState({ beforeClose: !0, closesAt: k }, function() {
            L.closeTimer = setTimeout(L.closeWithoutTimeout, L.state.closesAt - Date.now());
          });
        }, L.closeWithoutTimeout = function() {
          L.setState({
            beforeClose: !1,
            isOpen: !1,
            afterOpen: !1,
            closesAt: null
          }, L.afterClose);
        }, L.handleKeyDown = function(k) {
          N(k) && (0, d.default)(L.content, k), L.props.shouldCloseOnEsc && T(k) && (k.stopPropagation(), L.requestClose(k));
        }, L.handleOverlayOnClick = function(k) {
          L.shouldClose === null && (L.shouldClose = !0), L.shouldClose && L.props.shouldCloseOnOverlayClick && (L.ownerHandlesClose() ? L.requestClose(k) : L.focusContent()), L.shouldClose = null;
        }, L.handleContentOnMouseUp = function() {
          L.shouldClose = !1;
        }, L.handleOverlayOnMouseDown = function(k) {
          !L.props.shouldCloseOnOverlayClick && k.target == L.overlay && k.preventDefault();
        }, L.handleContentOnClick = function() {
          L.shouldClose = !1;
        }, L.handleContentOnMouseDown = function() {
          L.shouldClose = !1;
        }, L.requestClose = function(k) {
          return L.ownerHandlesClose() && L.props.onRequestClose(k);
        }, L.ownerHandlesClose = function() {
          return L.props.onRequestClose;
        }, L.shouldBeClosed = function() {
          return !L.state.isOpen && !L.state.beforeClose;
        }, L.contentHasFocus = function() {
          return document.activeElement === L.content || L.content.contains(document.activeElement);
        }, L.buildClassName = function(k, Z) {
          var M = (typeof Z > "u" ? "undefined" : r(Z)) === "object" ? Z : {
            base: A[k],
            afterOpen: A[k] + "--after-open",
            beforeClose: A[k] + "--before-close"
          }, P = M.base;
          return L.state.afterOpen && (P = P + " " + M.afterOpen), L.state.beforeClose && (P = P + " " + M.beforeClose), typeof Z == "string" && Z ? P + " " + Z : P;
        }, L.attributesFromObject = function(k, Z) {
          return Object.keys(Z).reduce(function(M, P) {
            return M[k + "-" + P] = Z[P], M;
          }, {});
        }, L.state = {
          afterOpen: !1,
          beforeClose: !1
        }, L.shouldClose = null, L.moveFromContentToOverlay = null, L;
      }
      return i(E, [{
        key: "componentDidMount",
        value: function() {
          this.props.isOpen && this.open();
        }
      }, {
        key: "componentDidUpdate",
        value: function(L, k) {
          process.env.NODE_ENV !== "production" && (L.bodyOpenClassName !== this.props.bodyOpenClassName && console.warn('React-Modal: "bodyOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.'), L.htmlOpenClassName !== this.props.htmlOpenClassName && console.warn('React-Modal: "htmlOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.')), this.props.isOpen && !L.isOpen ? this.open() : !this.props.isOpen && L.isOpen && this.close(), this.props.shouldFocusAfterRender && this.state.isOpen && !k.isOpen && this.focusContent();
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer), cancelAnimationFrame(this.openAnimationFrame);
        }
      }, {
        key: "beforeOpen",
        value: function() {
          var L = this.props, k = L.appElement, Z = L.ariaHideApp, M = L.htmlOpenClassName, P = L.bodyOpenClassName, H = L.parentSelector, B = H && H().ownerDocument || document;
          P && m.add(B.body, P), M && m.add(B.getElementsByTagName("html")[0], M), Z && (D += 1, p.hide(k)), v.default.register(this);
        }
        // Don't steal focus from inner elements
      }, {
        key: "render",
        value: function() {
          var L = this.props, k = L.id, Z = L.className, M = L.overlayClassName, P = L.defaultStyles, H = L.children, B = Z ? {} : P.content, F = M ? {} : P.overlay;
          if (this.shouldBeClosed())
            return null;
          var j = {
            ref: this.setOverlayRef,
            className: this.buildClassName("overlay", M),
            style: n({}, F, this.props.style.overlay),
            onClick: this.handleOverlayOnClick,
            onMouseDown: this.handleOverlayOnMouseDown
          }, G = n({
            id: k,
            ref: this.setContentRef,
            style: n({}, B, this.props.style.content),
            className: this.buildClassName("content", Z),
            tabIndex: "-1",
            onKeyDown: this.handleKeyDown,
            onMouseDown: this.handleContentOnMouseDown,
            onMouseUp: this.handleContentOnMouseUp,
            onClick: this.handleContentOnClick,
            role: this.props.role,
            "aria-label": this.props.contentLabel
          }, this.attributesFromObject("aria", n({ modal: !0 }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
            "data-testid": this.props.testId
          }), K = this.props.contentElement(G, H);
          return this.props.overlayElement(j, K);
        }
      }]), E;
    }(o.Component);
    $.defaultProps = {
      style: {
        overlay: {},
        content: {}
      },
      defaultStyles: {}
    }, $.propTypes = {
      isOpen: a.default.bool.isRequired,
      defaultStyles: a.default.shape({
        content: a.default.object,
        overlay: a.default.object
      }),
      style: a.default.shape({
        content: a.default.object,
        overlay: a.default.object
      }),
      className: a.default.oneOfType([a.default.string, a.default.object]),
      overlayClassName: a.default.oneOfType([a.default.string, a.default.object]),
      parentSelector: a.default.func,
      bodyOpenClassName: a.default.string,
      htmlOpenClassName: a.default.string,
      ariaHideApp: a.default.bool,
      appElement: a.default.oneOfType([a.default.instanceOf(_.default), a.default.instanceOf(g.SafeHTMLCollection), a.default.instanceOf(g.SafeNodeList), a.default.arrayOf(a.default.instanceOf(_.default))]),
      onAfterOpen: a.default.func,
      onAfterClose: a.default.func,
      onRequestClose: a.default.func,
      closeTimeoutMS: a.default.number,
      shouldFocusAfterRender: a.default.bool,
      shouldCloseOnOverlayClick: a.default.bool,
      shouldReturnFocusAfterClose: a.default.bool,
      preventScroll: a.default.bool,
      role: a.default.string,
      contentLabel: a.default.string,
      aria: a.default.object,
      data: a.default.object,
      children: a.default.node,
      shouldCloseOnEsc: a.default.bool,
      overlayRef: a.default.func,
      contentRef: a.default.func,
      id: a.default.string,
      overlayElement: a.default.func,
      contentElement: a.default.func,
      testId: a.default.string
    }, t.default = $, e.exports = t.default;
  }(p0, p0.exports)), p0.exports;
}
function js() {
  var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
  e != null && this.setState(e);
}
function Gs(e) {
  function t(n) {
    var r = this.constructor.getDerivedStateFromProps(e, n);
    return r ?? null;
  }
  this.setState(t.bind(this));
}
function zs(e, t) {
  try {
    var n = this.props, r = this.state;
    this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      n,
      r
    );
  } finally {
    this.props = n, this.state = r;
  }
}
js.__suppressDeprecationWarning = !0;
Gs.__suppressDeprecationWarning = !0;
zs.__suppressDeprecationWarning = !0;
function Ug(e) {
  var t = e.prototype;
  if (!t || !t.isReactComponent)
    throw new Error("Can only polyfill class components");
  if (typeof e.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function")
    return e;
  var n = null, r = null, i = null;
  if (typeof t.componentWillMount == "function" ? n = "componentWillMount" : typeof t.UNSAFE_componentWillMount == "function" && (n = "UNSAFE_componentWillMount"), typeof t.componentWillReceiveProps == "function" ? r = "componentWillReceiveProps" : typeof t.UNSAFE_componentWillReceiveProps == "function" && (r = "UNSAFE_componentWillReceiveProps"), typeof t.componentWillUpdate == "function" ? i = "componentWillUpdate" : typeof t.UNSAFE_componentWillUpdate == "function" && (i = "UNSAFE_componentWillUpdate"), n !== null || r !== null || i !== null) {
    var o = e.displayName || e.name, s = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      `Unsafe legacy lifecycles will not be called for components using new component APIs.

` + o + " uses " + s + " but also contains the following legacy lifecycles:" + (n !== null ? `
  ` + n : "") + (r !== null ? `
  ` + r : "") + (i !== null ? `
  ` + i : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`
    );
  }
  if (typeof e.getDerivedStateFromProps == "function" && (t.componentWillMount = js, t.componentWillReceiveProps = Gs), typeof t.getSnapshotBeforeUpdate == "function") {
    if (typeof t.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    t.componentWillUpdate = zs;
    var a = t.componentDidUpdate;
    t.componentDidUpdate = function(c, u, d) {
      var f = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : d;
      a.call(this, c, u, f);
    };
  }
  return e;
}
const jg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polyfill: Ug
}, Symbol.toStringTag, { value: "Module" })), Gg = /* @__PURE__ */ mu(jg);
var pa;
function zg() {
  if (pa) return Et;
  pa = 1, Object.defineProperty(Et, "__esModule", {
    value: !0
  }), Et.bodyOpenClassName = Et.portalClassName = void 0;
  var e = Object.assign || function(T) {
    for (var D = 1; D < arguments.length; D++) {
      var $ = arguments[D];
      for (var x in $)
        Object.prototype.hasOwnProperty.call($, x) && (T[x] = $[x]);
    }
    return T;
  }, t = /* @__PURE__ */ function() {
    function T(D, $) {
      for (var x = 0; x < $.length; x++) {
        var E = $[x];
        E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(D, E.key, E);
      }
    }
    return function(D, $, x) {
      return $ && T(D.prototype, $), x && T(D, x), D;
    };
  }(), n = ge, r = g(n), i = sl, o = g(i), s = /* @__PURE__ */ lr(), a = g(s), l = Wg(), c = g(l), u = Ws(), d = m(u), f = Qr(), p = g(f), y = Gg;
  function m(T) {
    if (T && T.__esModule)
      return T;
    var D = {};
    if (T != null)
      for (var $ in T)
        Object.prototype.hasOwnProperty.call(T, $) && (D[$] = T[$]);
    return D.default = T, D;
  }
  function g(T) {
    return T && T.__esModule ? T : { default: T };
  }
  function _(T, D) {
    if (!(T instanceof D))
      throw new TypeError("Cannot call a class as a function");
  }
  function C(T, D) {
    if (!T)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return D && (typeof D == "object" || typeof D == "function") ? D : T;
  }
  function v(T, D) {
    if (typeof D != "function" && D !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof D);
    T.prototype = Object.create(D && D.prototype, { constructor: { value: T, enumerable: !1, writable: !0, configurable: !0 } }), D && (Object.setPrototypeOf ? Object.setPrototypeOf(T, D) : T.__proto__ = D);
  }
  var w = Et.portalClassName = "ReactModalPortal", b = Et.bodyOpenClassName = "ReactModal__Body--open", I = f.canUseDOM && o.default.createPortal !== void 0, O = function(D) {
    return document.createElement(D);
  }, V = function() {
    return I ? o.default.createPortal : o.default.unstable_renderSubtreeIntoContainer;
  };
  function A(T) {
    return T();
  }
  var N = function(T) {
    v(D, T);
    function D() {
      var $, x, E, R;
      _(this, D);
      for (var L = arguments.length, k = Array(L), Z = 0; Z < L; Z++)
        k[Z] = arguments[Z];
      return R = (x = (E = C(this, ($ = D.__proto__ || Object.getPrototypeOf(D)).call.apply($, [this].concat(k))), E), E.removePortal = function() {
        !I && o.default.unmountComponentAtNode(E.node);
        var M = A(E.props.parentSelector);
        M && M.contains(E.node) ? M.removeChild(E.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
      }, E.portalRef = function(M) {
        E.portal = M;
      }, E.renderPortal = function(M) {
        var P = V(), H = P(E, r.default.createElement(c.default, e({ defaultStyles: D.defaultStyles }, M)), E.node);
        E.portalRef(H);
      }, x), C(E, R);
    }
    return t(D, [{
      key: "componentDidMount",
      value: function() {
        if (f.canUseDOM) {
          I || (this.node = O("div")), this.node.className = this.props.portalClassName;
          var x = A(this.props.parentSelector);
          x.appendChild(this.node), !I && this.renderPortal(this.props);
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(x) {
        var E = A(x.parentSelector), R = A(this.props.parentSelector);
        return { prevParent: E, nextParent: R };
      }
    }, {
      key: "componentDidUpdate",
      value: function(x, E, R) {
        if (f.canUseDOM) {
          var L = this.props, k = L.isOpen, Z = L.portalClassName;
          x.portalClassName !== Z && (this.node.className = Z);
          var M = R.prevParent, P = R.nextParent;
          P !== M && (M.removeChild(this.node), P.appendChild(this.node)), !(!x.isOpen && !k) && !I && this.renderPortal(this.props);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        if (!(!f.canUseDOM || !this.node || !this.portal)) {
          var x = this.portal.state, E = Date.now(), R = x.isOpen && this.props.closeTimeoutMS && (x.closesAt || E + this.props.closeTimeoutMS);
          R ? (x.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, R - E)) : this.removePortal();
        }
      }
    }, {
      key: "render",
      value: function() {
        if (!f.canUseDOM || !I)
          return null;
        !this.node && I && (this.node = O("div"));
        var x = V();
        return x(r.default.createElement(c.default, e({
          ref: this.portalRef,
          defaultStyles: D.defaultStyles
        }, this.props)), this.node);
      }
    }], [{
      key: "setAppElement",
      value: function(x) {
        d.setElement(x);
      }
      /* eslint-disable react/no-unused-prop-types */
      /* eslint-enable react/no-unused-prop-types */
    }]), D;
  }(n.Component);
  return N.propTypes = {
    isOpen: a.default.bool.isRequired,
    style: a.default.shape({
      content: a.default.object,
      overlay: a.default.object
    }),
    portalClassName: a.default.string,
    bodyOpenClassName: a.default.string,
    htmlOpenClassName: a.default.string,
    className: a.default.oneOfType([a.default.string, a.default.shape({
      base: a.default.string.isRequired,
      afterOpen: a.default.string.isRequired,
      beforeClose: a.default.string.isRequired
    })]),
    overlayClassName: a.default.oneOfType([a.default.string, a.default.shape({
      base: a.default.string.isRequired,
      afterOpen: a.default.string.isRequired,
      beforeClose: a.default.string.isRequired
    })]),
    appElement: a.default.oneOfType([a.default.instanceOf(p.default), a.default.instanceOf(f.SafeHTMLCollection), a.default.instanceOf(f.SafeNodeList), a.default.arrayOf(a.default.instanceOf(p.default))]),
    onAfterOpen: a.default.func,
    onRequestClose: a.default.func,
    closeTimeoutMS: a.default.number,
    ariaHideApp: a.default.bool,
    shouldFocusAfterRender: a.default.bool,
    shouldCloseOnOverlayClick: a.default.bool,
    shouldReturnFocusAfterClose: a.default.bool,
    preventScroll: a.default.bool,
    parentSelector: a.default.func,
    aria: a.default.object,
    data: a.default.object,
    role: a.default.string,
    contentLabel: a.default.string,
    shouldCloseOnEsc: a.default.bool,
    overlayRef: a.default.func,
    contentRef: a.default.func,
    id: a.default.string,
    overlayElement: a.default.func,
    contentElement: a.default.func
  }, N.defaultProps = {
    isOpen: !1,
    portalClassName: w,
    bodyOpenClassName: b,
    role: "dialog",
    ariaHideApp: !0,
    closeTimeoutMS: 0,
    shouldFocusAfterRender: !0,
    shouldCloseOnEsc: !0,
    shouldCloseOnOverlayClick: !0,
    shouldReturnFocusAfterClose: !0,
    preventScroll: !1,
    parentSelector: function() {
      return document.body;
    },
    overlayElement: function(D, $) {
      return r.default.createElement(
        "div",
        D,
        $
      );
    },
    contentElement: function(D, $) {
      return r.default.createElement(
        "div",
        D,
        $
      );
    }
  }, N.defaultStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.75)"
    },
    content: {
      position: "absolute",
      top: "40px",
      left: "40px",
      right: "40px",
      bottom: "40px",
      border: "1px solid #ccc",
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
      padding: "20px"
    }
  }, (0, y.polyfill)(N), process.env.NODE_ENV !== "production" && (N.setCreateHTMLElement = function(T) {
    return O = T;
  }), Et.default = N, Et;
}
var ha;
function Kg() {
  return ha || (ha = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = zg(), r = i(n);
    function i(o) {
      return o && o.__esModule ? o : { default: o };
    }
    t.default = r.default, e.exports = t.default;
  }(f0, f0.exports)), f0.exports;
}
var qg = Kg();
const Ks = /* @__PURE__ */ U0(qg), Xg = S(J).withConfig({
  displayName: "modal-header__ModalHeaderContainer",
  componentId: "sc-1rinwdo-0"
})(({
  theme: e,
  marginBottom: t
}) => e.withMedia({
  marginBottom: t || "40px"
})), Yg = S.div.withConfig({
  displayName: "modal-header__CloseButton",
  componentId: "sc-1rinwdo-1"
})(() => ({
  cursor: "pointer",
  padding: "0 10px"
})), Qg = S(ve).withConfig({
  displayName: "modal-header__StyledSvgIcon",
  componentId: "sc-1rinwdo-2"
})(({
  theme: e
}) => ({
  path: {
    stroke: e.styleguideColors.contentBlue
  }
})), qs = ({
  onClose: e,
  headerLogo: t,
  marginBottom: n
}) => /* @__PURE__ */ z(Xg, { justify: t ? "space-between" : "end", align: "center", marginBottom: n, children: [
  t && t,
  e && /* @__PURE__ */ h(Yg, { onClick: e, children: /* @__PURE__ */ h(Qg, { src: Zl, size: 20 }) })
] });
var z2 = /* @__PURE__ */ ((e) => (e.TopRight = "topRight", e.Center = "center", e))(z2 || {});
const Jg = {
  left: "50%",
  right: "auto",
  bottom: "auto",
  border: "none",
  borderRadius: "12px",
  padding: "32px 24px 24px 24px",
  top: "50%",
  transform: "translate(-50%, -50%)"
}, em = {
  top: "40px",
  left: "auto",
  right: "40px",
  border: "none",
  bottom: "auto",
  borderRadius: "12px",
  padding: "16px 24px 24px 24px"
}, tm = S(Ee).withConfig({
  displayName: "confirmation-window__ModalContainer",
  componentId: "sc-6fbghq-0"
})(({
  theme: e,
  position: t
}) => e.withMedia({
  width: t === "topRight" ? ["300px", "350px", "350px"] : ["300px", "400px", "446px"],
  background: e.styleguideColors.backgroundPrimary,
  borderColor: e.styleguideColors.backgroundPrimary
})), nm = S(J).withConfig({
  displayName: "confirmation-window__ImageWrapper",
  componentId: "sc-6fbghq-1"
})(({
  theme: e
}) => e.withMedia({
  margin: "15px 0 35px 0"
})), rm = S.div.withConfig({
  displayName: "confirmation-window__StyledCaption",
  componentId: "sc-6fbghq-2"
})(({
  theme: e,
  position: t
}) => e.withMedia({
  textAlign: t === "topRight" ? "left" : "center",
  marginBottom: "16px"
})), im = S(U2).withConfig({
  displayName: "confirmation-window__StyledCaptionText",
  componentId: "sc-6fbghq-3"
})(({
  theme: e
}) => e.withMedia({
  fontWeight: [600, 600, 700],
  fontSize: ["20px", "24px", "24px"],
  color: e.styleguideColors.contentPrimary
})), om = S(ne).withConfig({
  displayName: "confirmation-window__InformationText",
  componentId: "sc-6fbghq-4"
})(({
  theme: e,
  position: t
}) => e.withMedia({
  textAlign: t === "topRight" ? "left" : "center",
  color: e.styleguideColors.contentSecondary
})), am = S(J).withConfig({
  displayName: "confirmation-window__ButtonsContainer",
  componentId: "sc-6fbghq-5"
})(({
  theme: e,
  position: t
}) => e.withMedia({
  marginTop: t === "topRight" ? "40px" : ["32px", "32px", "56px"],
  flexDirection: ["column", "row", "row"]
})), sm = S(u2).withConfig({
  displayName: "confirmation-window__StyledConfirmButton",
  componentId: "sc-6fbghq-6"
})(({
  theme: e
}) => e.withMedia({
  backgroundColor: e.styleguideColors.fillPrimaryBlue,
  ":hover": {
    background: e.styleguideColors.fillPrimaryBlueHover
  },
  ":active": {
    background: e.styleguideColors.fillPrimaryBlueClick
  }
})), lm = S(u2).withConfig({
  displayName: "confirmation-window__StyledDismissButton",
  componentId: "sc-6fbghq-7"
})(({
  theme: e
}) => e.withMedia({
  color: e.styleguideColors.contentBlue,
  ":hover": {
    background: e.styleguideColors.fillSecondaryBlueHover
  },
  ":active": {
    background: e.styleguideColors.fillSecondaryBlueClick
  }
})), BC = ({
  isOpen: e,
  position: t,
  title: n,
  withHeader: r,
  headerLogo: i,
  bodyImg: o,
  information: s,
  confirmLabel: a,
  confirmColor: l,
  onConfirm: c,
  dismissLabel: u,
  onDismiss: d,
  themeMode: f,
  portalClass: p = "portal"
}) => {
  const y = Vn(), m = {
    overlay: {
      backgroundColor: y.styleguideColors.backgroundOverlay,
      zIndex: 15
    },
    content: t === "topRight" ? {
      ...em,
      backgroundColor: y.styleguideColors.backgroundPrimary,
      borderColor: y.styleguideColors.backgroundPrimary,
      boxShadow: f === Bn.dark ? "0px 16px 48px rgba(9, 12, 26, 0.5)" : "0px 16px 48px rgba(26, 25, 25, 0.2)"
    } : {
      ...Jg,
      backgroundColor: y.styleguideColors.backgroundPrimary,
      borderColor: y.styleguideColors.backgroundPrimary,
      boxShadow: f === Bn.dark ? "0px 16px 48px rgba(9, 12, 26, 0.5)" : "0px 16px 48px rgba(26, 25, 25, 0.2)"
    }
  };
  return /* @__PURE__ */ h(We, { children: e && /* @__PURE__ */ h(Ks, { isOpen: e, style: m, onRequestClose: d, shouldCloseOnEsc: !0, shouldCloseOnOverlayClick: !0, portalClassName: p, role: "dialog", "aria-modal": "true", children: /* @__PURE__ */ z(tm, { position: t, children: [
    r && /* @__PURE__ */ h(qs, { themeMode: f, headerLogo: i, onClose: d }),
    o && /* @__PURE__ */ h(nm, { justify: "center", children: o }),
    /* @__PURE__ */ h(rm, { position: t, children: /* @__PURE__ */ h(im, { size: 1, scale: "lg", children: n }) }),
    /* @__PURE__ */ h(J, { justify: "center", children: /* @__PURE__ */ h(om, { position: t, size: 3, scale: "sm", children: s }) }),
    /* @__PURE__ */ z(am, { position: t, gap: "16px", justify: "space-between", children: [
      u && /* @__PURE__ */ h(lm, { color: "utility", onClick: d, children: u }),
      /* @__PURE__ */ h(sm, { onClick: c, children: a })
    ] })
  ] }) }) });
};
var cm = 20, um = 1, Gt = 1e6, ga = 1e6, dm = -7, fm = 21, pm = !1, K2 = "[big.js] ", zt = K2 + "Invalid ", Q0 = zt + "decimal places", hm = zt + "rounding mode", Xs = K2 + "Division by zero", Se = {}, yt = void 0, gm = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
function Ys() {
  function e(t) {
    var n = this;
    if (!(n instanceof e))
      return t === yt && arguments.length === 0 ? Ys() : new e(t);
    if (t instanceof e)
      n.s = t.s, n.e = t.e, n.c = t.c.slice();
    else {
      if (typeof t != "string") {
        if (e.strict === !0 && typeof t != "bigint")
          throw TypeError(zt + "value");
        t = t === 0 && 1 / t < 0 ? "-0" : String(t);
      }
      mm(n, t);
    }
    n.constructor = e;
  }
  return e.prototype = Se, e.DP = cm, e.RM = um, e.NE = dm, e.PE = fm, e.strict = pm, e.roundDown = 0, e.roundHalfUp = 1, e.roundHalfEven = 2, e.roundUp = 3, e;
}
function mm(e, t) {
  var n, r, i;
  if (!gm.test(t))
    throw Error(zt + "number");
  for (e.s = t.charAt(0) == "-" ? (t = t.slice(1), -1) : 1, (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), i = t.length, r = 0; r < i && t.charAt(r) == "0"; ) ++r;
  if (r == i)
    e.c = [e.e = 0];
  else {
    for (; i > 0 && t.charAt(--i) == "0"; ) ;
    for (e.e = n - r - 1, e.c = [], n = 0; r <= i; ) e.c[n++] = +t.charAt(r++);
  }
  return e;
}
function Kt(e, t, n, r) {
  var i = e.c;
  if (n === yt && (n = e.constructor.RM), n !== 0 && n !== 1 && n !== 2 && n !== 3)
    throw Error(hm);
  if (t < 1)
    r = n === 3 && (r || !!i[0]) || t === 0 && (n === 1 && i[0] >= 5 || n === 2 && (i[0] > 5 || i[0] === 5 && (r || i[1] !== yt))), i.length = 1, r ? (e.e = e.e - t + 1, i[0] = 1) : i[0] = e.e = 0;
  else if (t < i.length) {
    if (r = n === 1 && i[t] >= 5 || n === 2 && (i[t] > 5 || i[t] === 5 && (r || i[t + 1] !== yt || i[t - 1] & 1)) || n === 3 && (r || !!i[0]), i.length = t, r) {
      for (; ++i[--t] > 9; )
        if (i[t] = 0, t === 0) {
          ++e.e, i.unshift(1);
          break;
        }
    }
    for (t = i.length; !i[--t]; ) i.pop();
  }
  return e;
}
function qt(e, t, n) {
  var r = e.e, i = e.c.join(""), o = i.length;
  if (t)
    i = i.charAt(0) + (o > 1 ? "." + i.slice(1) : "") + (r < 0 ? "e" : "e+") + r;
  else if (r < 0) {
    for (; ++r; ) i = "0" + i;
    i = "0." + i;
  } else if (r > 0)
    if (++r > o)
      for (r -= o; r--; ) i += "0";
    else r < o && (i = i.slice(0, r) + "." + i.slice(r));
  else o > 1 && (i = i.charAt(0) + "." + i.slice(1));
  return e.s < 0 && n ? "-" + i : i;
}
Se.abs = function() {
  var e = new this.constructor(this);
  return e.s = 1, e;
};
Se.cmp = function(e) {
  var t, n = this, r = n.c, i = (e = new n.constructor(e)).c, o = n.s, s = e.s, a = n.e, l = e.e;
  if (!r[0] || !i[0]) return r[0] ? o : i[0] ? -s : 0;
  if (o != s) return o;
  if (t = o < 0, a != l) return a > l ^ t ? 1 : -1;
  for (s = (a = r.length) < (l = i.length) ? a : l, o = -1; ++o < s; )
    if (r[o] != i[o]) return r[o] > i[o] ^ t ? 1 : -1;
  return a == l ? 0 : a > l ^ t ? 1 : -1;
};
Se.div = function(e) {
  var t = this, n = t.constructor, r = t.c, i = (e = new n(e)).c, o = t.s == e.s ? 1 : -1, s = n.DP;
  if (s !== ~~s || s < 0 || s > Gt)
    throw Error(Q0);
  if (!i[0])
    throw Error(Xs);
  if (!r[0])
    return e.s = o, e.c = [e.e = 0], e;
  var a, l, c, u, d, f = i.slice(), p = a = i.length, y = r.length, m = r.slice(0, a), g = m.length, _ = e, C = _.c = [], v = 0, w = s + (_.e = t.e - e.e) + 1;
  for (_.s = o, o = w < 0 ? 0 : w, f.unshift(0); g++ < a; ) m.push(0);
  do {
    for (c = 0; c < 10; c++) {
      if (a != (g = m.length))
        u = a > g ? 1 : -1;
      else
        for (d = -1, u = 0; ++d < a; )
          if (i[d] != m[d]) {
            u = i[d] > m[d] ? 1 : -1;
            break;
          }
      if (u < 0) {
        for (l = g == a ? i : f; g; ) {
          if (m[--g] < l[g]) {
            for (d = g; d && !m[--d]; ) m[d] = 9;
            --m[d], m[g] += 10;
          }
          m[g] -= l[g];
        }
        for (; !m[0]; ) m.shift();
      } else
        break;
    }
    C[v++] = u ? c : ++c, m[0] && u ? m[g] = r[p] || 0 : m = [r[p]];
  } while ((p++ < y || m[0] !== yt) && o--);
  return !C[0] && v != 1 && (C.shift(), _.e--, w--), v > w && Kt(_, w, n.RM, m[0] !== yt), _;
};
Se.eq = function(e) {
  return this.cmp(e) === 0;
};
Se.gt = function(e) {
  return this.cmp(e) > 0;
};
Se.gte = function(e) {
  return this.cmp(e) > -1;
};
Se.lt = function(e) {
  return this.cmp(e) < 0;
};
Se.lte = function(e) {
  return this.cmp(e) < 1;
};
Se.minus = Se.sub = function(e) {
  var t, n, r, i, o = this, s = o.constructor, a = o.s, l = (e = new s(e)).s;
  if (a != l)
    return e.s = -l, o.plus(e);
  var c = o.c.slice(), u = o.e, d = e.c, f = e.e;
  if (!c[0] || !d[0])
    return d[0] ? e.s = -l : c[0] ? e = new s(o) : e.s = 1, e;
  if (a = u - f) {
    for ((i = a < 0) ? (a = -a, r = c) : (f = u, r = d), r.reverse(), l = a; l--; ) r.push(0);
    r.reverse();
  } else
    for (n = ((i = c.length < d.length) ? c : d).length, a = l = 0; l < n; l++)
      if (c[l] != d[l]) {
        i = c[l] < d[l];
        break;
      }
  if (i && (r = c, c = d, d = r, e.s = -e.s), (l = (n = d.length) - (t = c.length)) > 0) for (; l--; ) c[t++] = 0;
  for (l = t; n > a; ) {
    if (c[--n] < d[n]) {
      for (t = n; t && !c[--t]; ) c[t] = 9;
      --c[t], c[n] += 10;
    }
    c[n] -= d[n];
  }
  for (; c[--l] === 0; ) c.pop();
  for (; c[0] === 0; )
    c.shift(), --f;
  return c[0] || (e.s = 1, c = [f = 0]), e.c = c, e.e = f, e;
};
Se.mod = function(e) {
  var t, n = this, r = n.constructor, i = n.s, o = (e = new r(e)).s;
  if (!e.c[0])
    throw Error(Xs);
  return n.s = e.s = 1, t = e.cmp(n) == 1, n.s = i, e.s = o, t ? new r(n) : (i = r.DP, o = r.RM, r.DP = r.RM = 0, n = n.div(e), r.DP = i, r.RM = o, this.minus(n.times(e)));
};
Se.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, e;
};
Se.plus = Se.add = function(e) {
  var t, n, r, i = this, o = i.constructor;
  if (e = new o(e), i.s != e.s)
    return e.s = -e.s, i.minus(e);
  var s = i.e, a = i.c, l = e.e, c = e.c;
  if (!a[0] || !c[0])
    return c[0] || (a[0] ? e = new o(i) : e.s = i.s), e;
  if (a = a.slice(), t = s - l) {
    for (t > 0 ? (l = s, r = c) : (t = -t, r = a), r.reverse(); t--; ) r.push(0);
    r.reverse();
  }
  for (a.length - c.length < 0 && (r = c, c = a, a = r), t = c.length, n = 0; t; a[t] %= 10) n = (a[--t] = a[t] + c[t] + n) / 10 | 0;
  for (n && (a.unshift(n), ++l), t = a.length; a[--t] === 0; ) a.pop();
  return e.c = a, e.e = l, e;
};
Se.pow = function(e) {
  var t = this, n = new t.constructor("1"), r = n, i = e < 0;
  if (e !== ~~e || e < -ga || e > ga)
    throw Error(zt + "exponent");
  for (i && (e = -e); e & 1 && (r = r.times(t)), e >>= 1, !!e; )
    t = t.times(t);
  return i ? n.div(r) : r;
};
Se.prec = function(e, t) {
  if (e !== ~~e || e < 1 || e > Gt)
    throw Error(zt + "precision");
  return Kt(new this.constructor(this), e, t);
};
Se.round = function(e, t) {
  if (e === yt) e = 0;
  else if (e !== ~~e || e < -Gt || e > Gt)
    throw Error(Q0);
  return Kt(new this.constructor(this), e + this.e + 1, t);
};
Se.sqrt = function() {
  var e, t, n, r = this, i = r.constructor, o = r.s, s = r.e, a = new i("0.5");
  if (!r.c[0]) return new i(r);
  if (o < 0)
    throw Error(K2 + "No square root");
  o = Math.sqrt(+qt(r, !0, !0)), o === 0 || o === 1 / 0 ? (t = r.c.join(""), t.length + s & 1 || (t += "0"), o = Math.sqrt(t), s = ((s + 1) / 2 | 0) - (s < 0 || s & 1), e = new i((o == 1 / 0 ? "5e" : (o = o.toExponential()).slice(0, o.indexOf("e") + 1)) + s)) : e = new i(o + ""), s = e.e + (i.DP += 4);
  do
    n = e, e = a.times(n.plus(r.div(n)));
  while (n.c.slice(0, s).join("") !== e.c.slice(0, s).join(""));
  return Kt(e, (i.DP -= 4) + e.e + 1, i.RM);
};
Se.times = Se.mul = function(e) {
  var t, n = this, r = n.constructor, i = n.c, o = (e = new r(e)).c, s = i.length, a = o.length, l = n.e, c = e.e;
  if (e.s = n.s == e.s ? 1 : -1, !i[0] || !o[0])
    return e.c = [e.e = 0], e;
  for (e.e = l + c, s < a && (t = i, i = o, o = t, c = s, s = a, a = c), t = new Array(c = s + a); c--; ) t[c] = 0;
  for (l = a; l--; ) {
    for (a = 0, c = s + l; c > l; )
      a = t[c] + o[l] * i[c - l - 1] + a, t[c--] = a % 10, a = a / 10 | 0;
    t[c] = a;
  }
  for (a ? ++e.e : t.shift(), l = t.length; !t[--l]; ) t.pop();
  return e.c = t, e;
};
Se.toExponential = function(e, t) {
  var n = this, r = n.c[0];
  if (e !== yt) {
    if (e !== ~~e || e < 0 || e > Gt)
      throw Error(Q0);
    for (n = Kt(new n.constructor(n), ++e, t); n.c.length < e; ) n.c.push(0);
  }
  return qt(n, !0, !!r);
};
Se.toFixed = function(e, t) {
  var n = this, r = n.c[0];
  if (e !== yt) {
    if (e !== ~~e || e < 0 || e > Gt)
      throw Error(Q0);
    for (n = Kt(new n.constructor(n), e + n.e + 1, t), e = e + n.e + 1; n.c.length < e; ) n.c.push(0);
  }
  return qt(n, !1, !!r);
};
Se.toJSON = Se.toString = function() {
  var e = this, t = e.constructor;
  return qt(e, e.e <= t.NE || e.e >= t.PE, !!e.c[0]);
};
typeof Symbol < "u" && (Se[Symbol.for("nodejs.util.inspect.custom")] = Se.toJSON);
Se.toNumber = function() {
  var e = +qt(this, !0, !0);
  if (this.constructor.strict === !0 && !this.eq(e.toString()))
    throw Error(K2 + "Imprecise conversion");
  return e;
};
Se.toPrecision = function(e, t) {
  var n = this, r = n.constructor, i = n.c[0];
  if (e !== yt) {
    if (e !== ~~e || e < 1 || e > Gt)
      throw Error(zt + "precision");
    for (n = Kt(new r(n), e, t); n.c.length < e; ) n.c.push(0);
  }
  return qt(n, e <= n.e || n.e <= r.NE || n.e >= r.PE, !!i);
};
Se.valueOf = function() {
  var e = this, t = e.constructor;
  if (t.strict === !0)
    throw Error(K2 + "valueOf disallowed");
  return qt(e, e.e <= t.NE || e.e >= t.PE, !0);
};
var N0 = Ys(), Fn = /* @__PURE__ */ ((e) => (e.deployCost = "deployCost", e.full = "full", e))(Fn || {});
const vm = "1000000000", ym = (e) => {
  switch (e) {
    case "deployCost":
      return E0;
    case "full":
      return vf;
    default:
      return 0;
  }
}, Cm = (e) => N0(e).div(vm).toString(), wm = (e, t) => N0(e).div(N0(10).pow(t)).toString();
function bm({
  motes: e,
  precisionCase: t,
  hideCsprCurrency: n
}) {
  const r = ym(t);
  if (e == null)
    return /* @__PURE__ */ h(We, { children: "N/A" });
  const i = Cm(e), o = Tt(i, {
    precision: r
  }), s = o + " CSPR";
  return /* @__PURE__ */ h(We, { children: n ? o : s });
}
function xm({
  motes: e,
  precision: t,
  decimals: n,
  ticker: r,
  hideCurrency: i
}) {
  if (e == null)
    return /* @__PURE__ */ h(We, { children: "N/A" });
  const o = wm(e, n), s = Tt(o, {
    precision: t
  }), a = s + " " + r;
  return /* @__PURE__ */ h(We, { children: i ? s : a });
}
const Lm = S(J).withConfig({
  displayName: "account-info-row__ValuesRow",
  componentId: "sc-15hsjvb-0"
})(({
  theme: e
}) => ({
  height: 36,
  borderRadius: e.borderRadius.base,
  padding: "8px 16px",
  backgroundColor: e.styleguideColors.backgroundPrimary,
  border: e.border.base
})), _m = S(Ee).withConfig({
  displayName: "account-info-row__StyledFlexColumn",
  componentId: "sc-15hsjvb-1"
})(({
  disabled: e
}) => ({
  ...e && {
    opacity: 0.5
  }
})), Mm = S(ne).withConfig({
  displayName: "account-info-row__BalanceText",
  componentId: "sc-15hsjvb-2"
})(({}) => ({
  textAlign: "right"
})), Sm = S.span.withConfig({
  displayName: "account-info-row__StyledIconContainer",
  componentId: "sc-15hsjvb-3"
})(["margin-left:10px;"]), ma = ({
  ticker: e,
  cep18Config: t,
  ...n
}) => e === "CSPR" ? /* @__PURE__ */ h(bm, { ...n }) : /* @__PURE__ */ h(xm, { ticker: e, motes: n.motes, decimals: t?.decimals || E0, precision: t?.precision || E0 }), Im = ({
  accountBalance: e,
  emptyBalance: t,
  loading: n,
  error: r,
  cep18Config: i,
  ticker: o = "CSPR"
}) => /* @__PURE__ */ h(Mm, { size: 3, variation: "black", monotype: !0, children: t ? /* @__PURE__ */ h(ma, { ticker: o, motes: "0", precisionCase: Fn.deployCost, cep18Config: i }) : n ? "Loading..." : r ?? /* @__PURE__ */ h(ma, { ticker: o, motes: e, precisionCase: Fn.deployCost, cep18Config: i }) });
function FC(e) {
  const {
    publicKey: t,
    label: n,
    rightLabel: r = "Balance",
    accountEmpty: i,
    accountBalance: o,
    loading: s,
    error: a,
    ticker: l = "CSPR",
    cep18Config: c
  } = e, u = f2([ot.TINY, ot.SMALL, ot.SMALL, ot.SMALL], []), d = i || !s && o != null && N0(o).lte("0");
  return /* @__PURE__ */ z(_m, { disabled: e.disabled, gap: 4, children: [
    /* @__PURE__ */ z(J, { justify: "space-between", children: [
      /* @__PURE__ */ h(ne, { size: 1, variation: "black", children: n }),
      /* @__PURE__ */ h(ne, { size: 1, variation: "black", children: r })
    ] }),
    /* @__PURE__ */ h(Lm, { justify: "space-between", align: "center", children: t && /* @__PURE__ */ z(We, { children: [
      /* @__PURE__ */ z(J, { align: "center", children: [
        /* @__PURE__ */ h(_t, { tooltipContent: t, children: /* @__PURE__ */ h(ne, { size: 3, variation: "black", monotype: !0, children: G0(t, u) }) }),
        /* @__PURE__ */ h(Sm, { children: /* @__PURE__ */ h(E1, { value: t, minified: !0, variation: "gray" }) })
      ] }),
      /* @__PURE__ */ h(Im, { accountBalance: o, emptyBalance: d, error: a, loading: s, ticker: l, cep18Config: c })
    ] }) })
  ] });
}
const Em = S("div").withConfig({
  displayName: "text-row__StyledWrapper",
  componentId: "sc-gez63i-0"
})(({}) => ({
  display: "flex",
  flexDirection: "column"
})), Pm = S("div").withConfig({
  displayName: "text-row__LabelContainer",
  componentId: "sc-gez63i-1"
})(({}) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 4
})), km = S("div").withConfig({
  displayName: "text-row__InputContainer",
  componentId: "sc-gez63i-2"
})(({
  theme: e
}) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 16px",
  height: 36,
  backgroundColor: e.styleguideColors.backgroundPrimary,
  border: e.border.base,
  borderRadius: e.borderRadius.base
})), Qs = S("div").withConfig({
  displayName: "text-row__SuffixContainer",
  componentId: "sc-gez63i-3"
})(({}) => ({
  marginLeft: 16
})), Om = S(Qs).withConfig({
  displayName: "text-row__SuffixTextContainer",
  componentId: "sc-gez63i-4"
})(({
  theme: e
}) => ({
  color: e.styleguideColors.contentSecondary
})), Tm = S("div").withConfig({
  displayName: "text-row__PrefixContainer",
  componentId: "sc-gez63i-5"
})(({}) => ({
  marginRight: 16
}));
var Hm = /* @__PURE__ */ ((e) => (e.Text = "text", e.Hash = "hash", e.Number = "number", e))(Hm || {});
function VC(e) {
  const {
    label: t,
    rightLabel: n,
    text: r,
    prefixIcon: i,
    suffixText: o,
    suffixIcon: s,
    type: a,
    labelIcon: l,
    labelTooltipText: c
  } = e, u = f2([ot.SMALL, ot.MEDIUM, ot.LARGE], []), d = f2([2, 3, 4, 5], []);
  return /* @__PURE__ */ z(Em, { children: [
    /* @__PURE__ */ z(Pm, { children: [
      t && /* @__PURE__ */ h(_t, { tooltipContent: c, limitWidth: !0, children: /* @__PURE__ */ z(J, { gap: 3, align: "center", children: [
        /* @__PURE__ */ h(ne, { size: 1, children: t }),
        l
      ] }) }),
      n && /* @__PURE__ */ h(ne, { size: 1, children: n })
    ] }),
    /* @__PURE__ */ z(km, { children: [
      i && /* @__PURE__ */ h(Tm, { children: i }),
      /* @__PURE__ */ z(J, { itemsSpacing: 4, children: [
        a === "hash" ? /* @__PURE__ */ h(_t, { tooltipContent: r, children: /* @__PURE__ */ h(ne, { size: 3, monotype: !0, scale: "xs", children: G0(r || "", u) }) }) : /* @__PURE__ */ h(S1, { size: d, children: /* @__PURE__ */ h(_t, { tooltipContent: r, children: /* @__PURE__ */ h(ne, { size: 3, monotype: a === "number", children: r }) }) }),
        /* @__PURE__ */ h(E1, { value: r || "", minified: !0, variation: "gray" })
      ] }),
      s && /* @__PURE__ */ h(Qs, { children: s }),
      o && /* @__PURE__ */ h(Om, { children: /* @__PURE__ */ h(ne, { size: 3, children: o }) })
    ] })
  ] });
}
const Dm = S(Ee).withConfig({
  displayName: "progress-line__StepWrapper",
  componentId: "sc-1nvheuv-0"
})(({}) => ({
  position: "relative"
})), Rm = S(Ot).withConfig({
  displayName: "progress-line__StepText",
  componentId: "sc-1nvheuv-1"
})(({
  theme: e,
  disabled: t,
  isFirstStep: n,
  isLastStep: r,
  isCheckedStep: i
}) => e.withMedia({
  color: t ? e.styleguideColors.contentTertiary : e.styleguideColors.contentBlue,
  position: "absolute",
  bottom: 30,
  whiteSpace: ["inherit", "nowrap", "nowrap"],
  ...i && !r && {
    color: e.styleguideColors.contentTertiary
  },
  ...n && {
    left: 0
  },
  ...r && {
    right: 0
  }
})), Nm = S(J).withConfig({
  displayName: "progress-line__StepContainer",
  componentId: "sc-1nvheuv-2"
})(({
  theme: e,
  disabled: t,
  checked: n
}) => ({
  borderRadius: "50%",
  border: `2px solid ${t ? e.styleguideColors.contentQuaternary : e.styleguideColors.contentBlue}`,
  background: n ? t ? e.styleguideColors.contentQuaternary : e.styleguideColors.contentBlue : e.styleguideColors.backgroundPrimary,
  width: 24,
  height: 24,
  "& svg": {
    path: {
      fill: e.styleguideColors.backgroundPrimary
    }
  }
})), Am = S.div.withConfig({
  displayName: "progress-line__Circle",
  componentId: "sc-1nvheuv-3"
})(({
  theme: e,
  disabled: t
}) => ({
  borderRadius: "50%",
  background: t ? e.styleguideColors.contentQuaternary : e.styleguideColors.contentBlue,
  width: 12,
  height: 12
})), va = S.div.withConfig({
  displayName: "progress-line__Line",
  componentId: "sc-1nvheuv-4"
})(({
  theme: e,
  disabled: t
}) => ({
  height: 2,
  background: t ? e.styleguideColors.contentQuaternary : e.styleguideColors.contentBlue,
  width: "100%"
})), Bm = (e, t, n, r) => {
  const i = t === n, o = t === 0, s = t === r - 1, a = t < n, l = !a && !i, c = a || s;
  return /* @__PURE__ */ z(ge.Fragment, { children: [
    !o && /* @__PURE__ */ h(va, { disabled: l }),
    /* @__PURE__ */ z(Dm, { align: "center", children: [
      /* @__PURE__ */ h(Rm, { disabled: l, size: 1, isFirstStep: o, isLastStep: s, isCheckedStep: c, children: e }),
      /* @__PURE__ */ h(Nm, { disabled: l, checked: c, align: "center", justify: "center", children: c ? /* @__PURE__ */ h(ve, { height: 7, width: 10, src: Nl }) : /* @__PURE__ */ h(Am, { disabled: l }) })
    ] }),
    !s && /* @__PURE__ */ h(va, { disabled: !o && !a })
  ] }, `${t}-${e}`);
};
function $C({
  steps: e,
  currentIdx: t
}) {
  return /* @__PURE__ */ h(J, { align: "center", children: e.map((n, r) => Bm(n, r, t, e.length)) });
}
const Fm = "Escape", ya = "keyup", Vm = (e) => {
  const t = Y((n) => {
    n.key === Fm && e();
  }, [e]);
  le(() => (document.addEventListener(ya, t, !1), () => {
    document.removeEventListener(ya, t, !1);
  }), [t]);
}, $m = S.div.withConfig({
  displayName: "warning-message__StyledWarningMessage",
  componentId: "sc-pntxqz-0"
})(({
  theme: e,
  margin: t
}) => e.withMedia({
  padding: ["10px", "16px", "16px"],
  alignItems: "center",
  gap: "8px",
  alignSelf: "stretch",
  backgroundColor: e.styleguideColors.fillSecondary,
  borderRadius: "4px",
  margin: t || "0 0 24px 0"
})), Zm = S(J).withConfig({
  displayName: "warning-message__StyledHeaderRow",
  componentId: "sc-pntxqz-1"
})(({
  theme: e
}) => e.withMedia({
  marginBottom: "8px"
})), Wm = S(ne).withConfig({
  displayName: "warning-message__StyledHeaderText",
  componentId: "sc-pntxqz-2"
})(({
  theme: e
}) => e.withMedia({
  marginLeft: "8px",
  lineHeight: ["18px", "1.5rem", "1.5rem"]
})), Um = ({
  iconSrc: e,
  title: t,
  message: n,
  margin: r
}) => /* @__PURE__ */ z($m, { margin: r, children: [
  /* @__PURE__ */ z(Zm, { justify: "flex-start", align: "center", children: [
    e && /* @__PURE__ */ h(ve, { src: e }),
    /* @__PURE__ */ h(Wm, { size: 1, scale: "xs", variation: "black", margin: e ? "8px" : "0", children: t })
  ] }),
  /* @__PURE__ */ h(ne, { size: 3, scale: "xs", variation: "black", children: n })
] });
var jm = /* @__PURE__ */ ((e) => (e[e.HeaderCloseButton = 0] = "HeaderCloseButton", e[e.DismissButton = 1] = "DismissButton", e[e.Overlay = 2] = "Overlay", e[e.ESC = 3] = "ESC", e))(jm || {});
const Gm = {
  left: "50%",
  right: "auto",
  bottom: "auto",
  border: "none",
  borderRadius: "12px",
  padding: "32px 24px 24px 24px",
  top: "50%",
  transform: "translate(-50%, -50%)"
}, zm = {
  top: "40px",
  left: "auto",
  right: "40px",
  border: "none",
  bottom: "auto",
  borderRadius: "12px",
  padding: "16px 24px 24px 24px"
}, Km = S(Ee).withConfig({
  displayName: "user-input-window__ModalContainer",
  componentId: "sc-biy5na-0"
})(({
  theme: e,
  position: t
}) => e.withMedia({
  width: t === z2.TopRight ? ["300px", "350px", "350px"] : ["300px", "440px", "496px"],
  background: e.styleguideColors.backgroundPrimary,
  borderColor: e.styleguideColors.backgroundPrimary
})), qm = S(J).withConfig({
  displayName: "user-input-window__ImageWrapper",
  componentId: "sc-biy5na-1"
})(({
  theme: e
}) => e.withMedia({
  margin: "15px 0 24px 0"
})), Xm = S.div.withConfig({
  displayName: "user-input-window__StyledCaption",
  componentId: "sc-biy5na-2"
})(({
  theme: e,
  position: t
}) => e.withMedia({
  textAlign: "left",
  marginBottom: "16px"
})), Ym = S(U2).withConfig({
  displayName: "user-input-window__StyledCaptionText",
  componentId: "sc-biy5na-3"
})(({
  theme: e
}) => e.withMedia({
  fontWeight: [600, 600, 700],
  fontSize: ["20px", "24px", "24px"],
  color: e.styleguideColors.contentPrimary
})), Qm = S(ne).withConfig({
  displayName: "user-input-window__StyledInformationText",
  componentId: "sc-biy5na-4"
})(({
  theme: e,
  position: t
}) => e.withMedia({
  color: e.styleguideColors.contentSecondary
})), Jm = S(J).withConfig({
  displayName: "user-input-window__ButtonsContainer",
  componentId: "sc-biy5na-5"
})(({
  theme: e,
  position: t
}) => e.withMedia({
  marginTop: t === z2.TopRight ? "40px" : ["32px", "32px", "56px"],
  flexDirection: ["column", "row", "row"]
})), Ca = S(Bs).withConfig({
  displayName: "user-input-window__StyledInput",
  componentId: "sc-biy5na-6"
})(({
  theme: e,
  margin: t
}) => e.withMedia({
  width: "100%",
  margin: t,
  ":focus": {
    outline: "none"
  }
})), ev = S.div.withConfig({
  displayName: "user-input-window__CheckBoxContainer",
  componentId: "sc-biy5na-7"
})(({
  theme: e,
  position: t
}) => e.withMedia({
  margin: t === z2.TopRight ? "40px 0 -20px 0" : ["40px 0 -20px 0", "40px 0 -20px 0", "72px 0 -40px 0"]
})), tv = (e, t) => ({
  overlay: {
    backgroundColor: e.styleguideColors.backgroundOverlay,
    zIndex: 15
  },
  content: t === z2.TopRight ? {
    ...zm,
    backgroundColor: e.styleguideColors.backgroundPrimary,
    borderColor: e.styleguideColors.backgroundPrimary
  } : {
    ...Gm,
    backgroundColor: e.styleguideColors.backgroundPrimary,
    borderColor: e.styleguideColors.backgroundPrimary
  }
}), ZC = ({
  isOpen: e,
  position: t,
  title: n,
  withHeader: r,
  headerLogo: i,
  bodyImg: o,
  information: s,
  confirmLabel: a,
  confirmDisabled: l,
  confirmColor: c,
  onConfirm: u,
  dismissLabel: d,
  dismissDisabled: f,
  shouldCloseOnEsc: p,
  shouldCloseOnOverlayClick: y,
  onDismiss: m,
  themeMode: g,
  inputType: _,
  placeholder: C,
  required: v = !1,
  inputLabel: w,
  checkboxLabel: b,
  validationSetting: I,
  repeatInput: O,
  warningMessage: V,
  informationOnlyMode: A,
  isMandatoryCheckBox: N,
  hideXButton: T,
  resetForm: D,
  portalClass: $ = "portal"
}) => {
  const x = Vn(), [E, R] = fe(""), [L, k] = fe(""), [Z, M] = fe(!1), [P, H] = fe(null), [B, F] = fe(null), [j, G] = fe(e);
  Vm(() => {
    p && (G(!1), m && m(
      3
      /* ESC */
    ));
  }), le(() => {
    D && R("");
  }, [D]);
  const {
    ref: K
  } = g2({
    callback: () => {
      y && (G(!1), m && m(
        2
        /* Overlay */
      ));
    }
  }), q = (ue) => !!ue && I?.regexpPattern.test(ue), te = (ue, he) => ue && he && ue === he, Q = (ue) => {
    let he = ue.target.value;
    if (he && !P)
      ue.key === "Enter" && u(he, Z);
    else return;
  }, se = () => {
    u(E, Z);
  }, W = (ue) => {
    let he = ue.target.value;
    O && L && k(""), I?.regexpPattern && I?.validationMessage && (he && q(he) ? H(null) : H(`${I?.validationMessage}`)), R(he);
  }, ye = (ue) => {
    let he = ue.target.value;
    O?.validationMessage && (he && te(E, he) ? F(null) : F(`${O?.validationMessage}`)), k(he);
  }, X = () => l || N && !Z ? !0 : A ? !1 : O ? L ? !!B : !0 : E ? !!P : !0, Pe = () => {
    M(!Z);
  };
  return /* @__PURE__ */ h(We, { children: j && /* @__PURE__ */ h(Ks, { isOpen: j, style: tv(x, t), shouldCloseOnEsc: !0, shouldCloseOnOverlayClick: !0, portalClassName: $, role: "dialog", "aria-modal": "true", children: /* @__PURE__ */ z(Km, { position: t, ref: K, children: [
    r && /* @__PURE__ */ h(qs, { themeMode: g, headerLogo: i, onClose: T ? void 0 : () => m && m(
      0
      /* HeaderCloseButton */
    ) }),
    o && /* @__PURE__ */ h(qm, { children: o }),
    /* @__PURE__ */ h(Xm, { position: t, children: /* @__PURE__ */ h(Ym, { size: 1, scale: "lg", children: n }) }),
    /* @__PURE__ */ h(J, { justify: "left", children: /* @__PURE__ */ h(Qm, { position: t, size: 3, scale: "sm", children: s }) }),
    !A && /* @__PURE__ */ h(J, { children: /* @__PURE__ */ h(Ca, { required: v, value: E, onChange: W, onKeyDown: Q, label: /* @__PURE__ */ h(ne, { size: 2, children: w }), placeholder: C, margin: "16px 0", error: !!P, validationType: _, validationText: P }) }),
    !A && O && /* @__PURE__ */ h(J, { children: /* @__PURE__ */ h(Ca, { required: v, value: L, onChange: ye, onKeyDown: Q, label: /* @__PURE__ */ h(ne, { size: 2, children: O?.label }), placeholder: O?.placeholder, error: !!B, validationType: _, validationText: B }) }),
    V && /* @__PURE__ */ h(Um, { title: V.title, message: V.message, margin: V.margin, iconSrc: V.iconSrc }),
    b && /* @__PURE__ */ h(ev, { position: t, children: /* @__PURE__ */ h(jf, { checked: Z, label: b, onChange: Pe, checkboxFontSize: P1.small }) }),
    /* @__PURE__ */ z(Jm, { position: t, gap: "16px", justify: "space-between", children: [
      d && /* @__PURE__ */ h(u2, { color: "secondaryBlue", onClick: () => m && m(
        1
        /* DismissButton */
      ), disabled: !!f, children: d }),
      /* @__PURE__ */ h(u2, { color: c === "red" ? "primaryRed" : "primaryBlue", onClick: se, disabled: X(), children: a })
    ] })
  ] }) }) });
}, nv = S("div").withConfig({
  displayName: "multiline-text-row__StyledWrapper",
  componentId: "sc-ulv7c-0"
})(({
  theme: e
}) => e.withMedia({
  display: "flex",
  flexDirection: "column"
})), rv = S("div").withConfig({
  displayName: "multiline-text-row__LabelContainer",
  componentId: "sc-ulv7c-1"
})(({
  theme: e
}) => e.withMedia({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 4
})), iv = S("div").withConfig({
  displayName: "multiline-text-row__InputContainer",
  componentId: "sc-ulv7c-2"
})(({
  theme: e,
  height: t,
  width: n
}) => e.withMedia({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 16px",
  height: t,
  width: n,
  backgroundColor: e.styleguideColors.backgroundPrimary,
  border: e.border.base,
  borderRadius: e.borderRadius.base
})), Js = S("div").withConfig({
  displayName: "multiline-text-row__SuffixContainer",
  componentId: "sc-ulv7c-3"
})(({
  theme: e
}) => e.withMedia({
  marginLeft: 16
})), ov = S(Js).withConfig({
  displayName: "multiline-text-row__SuffixTextContainer",
  componentId: "sc-ulv7c-4"
})(({
  theme: e
}) => e.withMedia({
  color: e.styleguideColors.contentSecondary
})), av = S("div").withConfig({
  displayName: "multiline-text-row__PrefixContainer",
  componentId: "sc-ulv7c-5"
})(({
  theme: e
}) => e.withMedia({
  marginRight: 16
}));
function WC(e) {
  const {
    label: t,
    rightLabel: n,
    height: r = "auto",
    width: i,
    text: o,
    prefixIcon: s,
    suffixText: a,
    suffixIcon: l,
    labelIcon: c,
    labelTooltipText: u
  } = e;
  return /* @__PURE__ */ z(nv, { children: [
    /* @__PURE__ */ z(rv, { children: [
      t && /* @__PURE__ */ h(_t, { tooltipContent: u, limitWidth: !0, children: /* @__PURE__ */ z(J, { gap: 3, align: "center", children: [
        /* @__PURE__ */ h(ne, { size: 1, children: t }),
        c
      ] }) }),
      n && /* @__PURE__ */ h(ne, { size: 1, children: n })
    ] }),
    /* @__PURE__ */ z(iv, { height: r, width: i, children: [
      s && /* @__PURE__ */ h(av, { children: s }),
      /* @__PURE__ */ h(J, { itemsSpacing: 4, children: /* @__PURE__ */ h(_t, { tooltipContent: typeof o == "string" ? o : null, children: /* @__PURE__ */ h(ne, { size: 3, monotype: !0, scale: "xs", children: o }) }) }),
      l && /* @__PURE__ */ h(Js, { children: l }),
      a && /* @__PURE__ */ h(ov, { children: /* @__PURE__ */ h(ne, { size: 3, children: a }) })
    ] })
  ] });
}
function sv({
  callback: e
}) {
  const t = ce(null);
  return le(() => {
    const n = (r) => {
      t.current && !t.current.contains(r.target) && e(r);
    };
    return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n), () => {
      document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n);
    };
  }, [t, e]), {
    ref: t
  };
}
const lv = S.div.withConfig({
  displayName: "multiselect-dropdown__DropdownContainer",
  componentId: "sc-zjn4oc-0"
})(({
  theme: e,
  disabled: t
}) => ({
  outline: "none",
  ...t && {
    opacity: "0.5",
    pointerEvents: "none"
  }
})), cv = S(J).withConfig({
  displayName: "multiselect-dropdown__MultiSelectContainer",
  componentId: "sc-zjn4oc-1"
})(({
  theme: e
}) => ({
  borderRadius: e.borderRadius.base,
  padding: "8px",
  background: e.styleguideColors.fillSecondary,
  ":hover, :active": {
    svg: {
      color: e.styleguideColors.fillPrimaryRed
    }
  }
})), uv = S(J).withConfig({
  displayName: "multiselect-dropdown__InputContainer",
  componentId: "sc-zjn4oc-2"
})(({
  theme: e
}) => ({
  width: "100%"
})), dv = S(Bs).withConfig({
  displayName: "multiselect-dropdown__StyledInput",
  componentId: "sc-zjn4oc-3"
})(() => ({
  width: "100%",
  border: "none",
  height: "24px",
  "> div": {
    padding: "0 8px"
  }
})), fv = S(J).withConfig({
  displayName: "multiselect-dropdown__DropdownIconWrapper",
  componentId: "sc-zjn4oc-4"
})(({
  theme: e
}) => ({
  paddingRight: "8px",
  marginLeft: "8px"
})), pv = S(ve).withConfig({
  displayName: "multiselect-dropdown__ArrowSvgIcon",
  componentId: "sc-zjn4oc-5"
})(({
  theme: e
}) => ({
  path: {
    fill: e.styleguideColors.contentPrimary
  }
})), hv = S(ve).withConfig({
  displayName: "multiselect-dropdown__ClearSvgIcon",
  componentId: "sc-zjn4oc-6"
})(({
  theme: e
}) => ({
  path: {
    stroke: e.styleguideColors.contentPrimary
  }
})), gv = S.span.withConfig({
  displayName: "multiselect-dropdown__ChipItemContainer",
  componentId: "sc-zjn4oc-7"
})(({
  theme: e
}) => ({
  borderRadius: e.borderRadius.base,
  cursor: "pointer",
  padding: "2px 8px",
  background: e.styleguideColors.fillTertiary,
  color: e.styleguideColors.contentPrimary,
  wordBreak: "break-word"
})), mv = S.div.withConfig({
  displayName: "multiselect-dropdown__ItemsContainer",
  componentId: "sc-zjn4oc-8"
})(({
  theme: e,
  isOpen: t
}) => ({
  display: t ? "inherit" : "none",
  marginTop: 4,
  borderRadius: e.borderRadius.base,
  background: e.styleguideColors.fillSecondary,
  maxHeight: "250px",
  overflowY: "scroll"
})), vv = S(J).withConfig({
  displayName: "multiselect-dropdown__ItemsContainerEmpty",
  componentId: "sc-zjn4oc-9"
})(({
  theme: e
}) => ({
  padding: "32px 16px",
  pointerEvents: "none",
  justifyContent: "center"
})), yv = S(J).withConfig({
  displayName: "multiselect-dropdown__ItemContainer",
  componentId: "sc-zjn4oc-10"
})(({
  theme: e
}) => ({
  cursor: "pointer",
  minHeight: 36,
  padding: "8px 16px",
  wordBreak: "break-word",
  ":hover, :active": {
    background: e.styleguideColors.fillSecondaryBlueHover,
    fontWeight: 600
  }
})), Cv = S(ve).withConfig({
  displayName: "multiselect-dropdown__MultiSelectDeleteIcon",
  componentId: "sc-zjn4oc-11"
})(({
  theme: e
}) => ({
  path: {
    stroke: e.styleguideColors.contentBlue
  },
  ":hover, :active": {
    path: {
      stroke: e.styleguideColors.contentRed
    }
  }
})), m0 = (e) => ({
  target: {
    name: void 0,
    value: e
  }
});
function UC(e) {
  const {
    items: t,
    value: n,
    label: r,
    placeholder: i,
    disabled: o = !1,
    onSelectItem: s,
    onAddItem: a,
    onRemoveItem: l,
    onChangeInput: c
  } = e, [u, d] = fe(""), {
    getSelectedItemProps: f,
    getDropdownProps: p,
    addSelectedItem: y,
    removeSelectedItem: m,
    selectedItems: g,
    setSelectedItems: _,
    reset: C
  } = Y0({
    initialSelectedItems: n,
    onSelectedItemsChange: (R) => {
      s && s(m0(R.selectedItems));
    }
  }), w = [...u?.length >= 3 ? [{
    id: u,
    label: u,
    value: u,
    chipLabel: u
  }] : [], ...t], {
    isOpen: b,
    getToggleButtonProps: I,
    getLabelProps: O,
    getMenuProps: V,
    getInputProps: A,
    getItemProps: N,
    openMenu: T
  } = ft({
    inputValue: u,
    items: w,
    onStateChange: ({
      inputValue: R,
      type: L,
      selectedItem: k
    }) => {
      switch (L) {
        case ft.stateChangeTypes.InputChange:
          d(R || ""), c && c(R || "");
          break;
        case ft.stateChangeTypes.InputKeyDownEnter:
        case ft.stateChangeTypes.ItemClick:
        case ft.stateChangeTypes.InputBlur:
          const Z = g.some((M) => M.value === k?.value);
          k && (Z ? (_(g.filter((M) => M.value !== k.value)), l && l(m0(k))) : (y(k), a && a(m0(k))));
          break;
        case ft.stateChangeTypes.FunctionCloseMenu:
          $();
          break;
      }
    },
    stateReducer: (R, L) => {
      const {
        changes: k,
        type: Z
      } = L;
      switch (Z) {
        case ft.stateChangeTypes.InputKeyDownEnter:
        case ft.stateChangeTypes.ItemClick:
          return {
            ...k,
            isOpen: R.isOpen
            // keep the menu open after selection.
          };
        default:
          return k;
      }
    }
  }), {
    ref: D
  } = sv({
    callback: () => {
      b && $();
    }
  });
  le(() => {
    (!n || n.length < 1) && C();
  }, [n]);
  const $ = () => {
    d(""), c && c("");
  }, x = () => {
    $(), s && s(m0(null)), C();
  }, E = b || g.length === 0;
  return /* @__PURE__ */ h(lv, { disabled: o, ref: D, children: /* @__PURE__ */ z(Ee, { itemsSpacing: 4, children: [
    r && /* @__PURE__ */ h(ne, { lineHeight: "xs", ...O(), size: 1, children: r }),
    /* @__PURE__ */ z("div", { children: [
      /* @__PURE__ */ z(cv, { isOpen: b, align: "center", justify: "space-between", ...I(p({
        preventKeyAction: b
      })), children: [
        /* @__PURE__ */ z(uv, { gap: 8, wrap: "wrap", children: [
          g.map((R, L) => /* @__PURE__ */ h(gv, { ...f({
            selectedItem: R,
            index: L
          }), children: /* @__PURE__ */ h(ne, { lineHeight: "xs", size: 3, variation: R ? "inherit" : "darkGray", children: /* @__PURE__ */ z(J, { align: "center", gap: 4, children: [
            R?.chipLabel || R?.label,
            /* @__PURE__ */ h(Cv, { onClick: (k) => {
              k.preventDefault(), k.stopPropagation(), m(R);
            }, size: 14, src: E2 })
          ] }) }) }, `selected-item-${L}`)),
          E ? /* @__PURE__ */ h(dv, { ...A({
            placeholder: i,
            value: u || "",
            disabled: o,
            onFocus() {
              T();
            }
          }, {
            suppressRefError: !0
          }), prefixIcon: /* @__PURE__ */ h(ve, { src: Ta }) }) : null
        ] }),
        /* @__PURE__ */ z(fv, { children: [
          !!g.length && /* @__PURE__ */ h(hv, { src: E2, onClick: x, marginRight: !0 }),
          /* @__PURE__ */ h(pv, { src: A2, rotate: b })
        ] })
      ] }),
      /* @__PURE__ */ h(mv, { ...V(), isOpen: b, children: b && (w && w.length ? w.map((R, L) => /* @__PURE__ */ h(yv, { align: "center", justify: "space-between", itemsSpacing: 10, ...N({
        item: R,
        index: L,
        "aria-selected": g.includes(R)
      }), children: /* @__PURE__ */ h(ne, { size: 3, lineHeight: "xs", scale: "xs", children: R.label }) }, `${R.value}${L}`)) : /* @__PURE__ */ h(vv, { children: /* @__PURE__ */ h(ne, { size: 3, lineHeight: "xs", scale: "xs", children: "No items found" }) })) })
    ] })
  ] }) });
}
const wv = S(Ee).withConfig({
  displayName: "modal-content-header__HeaderContainer",
  componentId: "sc-fyacs1-0"
})(({
  theme: e,
  margin: t
}) => e.withMedia({
  margin: t || "16px 0 16px 0"
})), jC = ({
  title: e,
  subtitle: t,
  appName: n,
  margin: r
}) => /* @__PURE__ */ z(wv, { align: "center", itemsSpacing: 4, margin: r, children: [
  /* @__PURE__ */ h(U2, { scale: "lg", size: 1, variation: "black", children: e }),
  (t || n) && /* @__PURE__ */ z(ne, { scale: "md", size: 3, variation: "darkGray", children: [
    `${t && t} `,
    n && /* @__PURE__ */ h(ne, { scale: "md", size: 3, variation: "black", children: n })
  ] })
] }), bv = S.div.withConfig({
  displayName: "searchable-dropdown__StyledDropdown",
  componentId: "sc-14ny1jx-0"
})(({
  theme: e,
  disabled: t
}) => ({
  outline: "none",
  position: "relative",
  borderRadius: e.borderRadius.base,
  ...t && {
    opacity: "0.5",
    pointerEvents: "none"
  },
  background: e.styleguideColors.fillSecondary,
  ":hover, :active": {
    background: e.styleguideColors.fillSecondary,
    svg: {
      path: {
        fill: e.styleguideColors.fillPrimaryRed
      }
    }
  }
})), xv = S(J).withConfig({
  displayName: "searchable-dropdown__StyledContentRow",
  componentId: "sc-14ny1jx-1"
})(({
  theme: e,
  error: t
}) => e.withMedia({
  width: "100%",
  border: t ? `1px solid ${e.styleguideColors.contentRed}` : "none"
})), Lv = S.input.withConfig({
  displayName: "searchable-dropdown__StyledInput",
  componentId: "sc-14ny1jx-2"
})(({
  theme: e,
  fontSize: t,
  icon: n
}) => ({
  lineHeight: "1.5",
  fontSize: t,
  height: "36px",
  borderRadius: e.borderRadius.base,
  outline: "none",
  padding: n ? "0 12px" : "0 16px",
  transition: "all 200ms ease",
  width: "100%",
  color: e.styleguideColors.contentPrimary,
  border: "none",
  background: e.styleguideColors.fillSecondary,
  ":hover": {
    cursor: "pointer"
  }
})), _v = S.div.withConfig({
  displayName: "searchable-dropdown__ItemContainer",
  componentId: "sc-14ny1jx-3"
})(({
  theme: e,
  isOpen: t,
  height: n,
  fontSize: r,
  maxHeight: i
}) => ({
  display: t ? "block" : "none",
  borderRadius: e.borderRadius.base,
  fontSize: r,
  paddingLeft: "6px",
  background: e.styleguideColors.fillSecondary,
  boxShadow: "0 1px 0 rgba(0, 0, 0, 0.06)",
  marginTop: "4px",
  height: n,
  maxHeight: i,
  overflowY: "auto",
  position: "absolute",
  top: "100%",
  width: "100%",
  zIndex: "1000"
})), Mv = S.div.withConfig({
  displayName: "searchable-dropdown__Item",
  componentId: "sc-14ny1jx-4"
})(({
  theme: e,
  selected: t
}) => ({
  display: "block",
  cursor: "pointer",
  padding: "8px 10px",
  color: e.styleguideColors.contentPrimary,
  ":hover, :active": {
    background: e.styleguideColors.fillSecondaryBlueHover
  },
  fontWeight: t ? 600 : 400
})), Sv = S(ve).withConfig({
  displayName: "searchable-dropdown__ArrowSvg",
  componentId: "sc-14ny1jx-5"
})(({
  theme: e
}) => ({
  marginRight: "16px",
  path: {
    fill: e.styleguideColors.contentPrimary
  }
})), wa = S.div.withConfig({
  displayName: "searchable-dropdown__CustomIcon",
  componentId: "sc-14ny1jx-6"
})(({
  inLoop: e
}) => ({
  margin: e ? "0 12px 0 0" : "0 0 0 16px",
  display: "inline",
  position: "relative",
  bottom: e ? "0" : "1px"
})), GC = ({
  items: e,
  value: t,
  height: n,
  isError: r,
  fontSize: i,
  maxHeight: o,
  onSelect: s,
  placeholder: a
}) => {
  const [l, c] = fe(""), [u, d] = fe(!1), [f, p] = fe(!1), [y, m] = fe(null), g = ce(null), {
    ref: _
  } = g2({
    callback: () => {
      d(!1);
    }
  });
  le(() => {
    t.icon && m(t.icon);
  }, [t]), le(() => {
    u !== f && p(u);
  }, [u]);
  const C = (O) => {
    c(""), s(O), d((V) => !V), d(!u), m(O.icon);
  }, v = (O) => {
    d(!0);
  }, w = () => l || (t ? t.label : ""), I = ((O, V) => O.filter((A) => A.label.toLowerCase().indexOf(V.toLowerCase()) > -1))(e, l);
  return /* @__PURE__ */ z(bv, { ref: _, children: [
    /* @__PURE__ */ h(J, { align: "center", justify: "space-between", onClick: v, children: /* @__PURE__ */ z(xv, { justify: "space-around", align: "center", error: r, children: [
      y && /* @__PURE__ */ h(wa, { children: y }),
      /* @__PURE__ */ h(Lv, { ref: g, placeholder: a, value: w(), onChange: (O) => {
        c(O.target.value), s({});
      }, fontSize: i, icon: !!y }),
      /* @__PURE__ */ h(Sv, { src: f ? Gn : A2 })
    ] }) }),
    /* @__PURE__ */ h(_v, { isOpen: u, height: n, fontSize: i, maxHeight: o, children: I.map((O, V) => /* @__PURE__ */ z(Mv, { onClick: () => C(O), selected: O.value === t.value, children: [
      O.icon && /* @__PURE__ */ h(wa, { inLoop: !0, children: O.icon }),
      O.label
    ] }, V)) })
  ] });
};
var Jr = /* @__PURE__ */ ((e) => (e.HASH = "hash-", e.CONTRACT = "contract-", e.UREF = "uref-", e.DEPLOY = "deploy-", e.ERA_INFO_PREFIX = "era-", e.BALANCE_PREFIX = "balance-", e.BID_PREFIX = "bid-", e.WITHDRAW_PREFIX = "withdraw-", e.DICTIONARY_PREFIX = "dictionary-", e.ACCOUNT_HASH = "account-hash-", e.CONTRACT_PACKAGE = "contract-package-", e))(Jr || {});
const ba = new RegExp(`(${Object.values(Jr).join("|")})(?=[0-9a-fA-F])`, "i"), Iv = (e) => typeof e == "string" && Object.values(Jr).some((t) => (e || "").includes(t)), zC = (e) => Iv(e) && e.match(ba) ? e.match(ba)[0] : "", Ev = 320, Pv = 1176, xa = {
  minWidth: Ev,
  maxWidth: Pv,
  withMedia: fg,
  zIndex: {
    dropdown: 10,
    modal: 15,
    tooltip: 20
  },
  typography: {
    fontFamily: {
      primary: '"Inter", sans-serif',
      mono: '"JetBrains Mono", serif'
    },
    fontWeight: {
      // thin: 100,
      // extraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800
      // black: 900,
    }
  },
  borderRadius: {
    base: 4
  },
  padding: {
    1: "1.25em",
    2: "2em"
  },
  animations: {
    fadeIn: La(["0%{opacity:0;}100%{opacity:1;}"])
  }
}, KC = {
  dark: {
    ...xa,
    colorSpecialCase: {
      blueBanner: "#294ACC",
      blueBanner2: "#2A5DB2"
    },
    styleguideColors: {
      backgroundPrimary: "#161D3B",
      backgroundSecondary: "#0F1429",
      backgroundTertiary: "#131933",
      backgroundQuaternary: "#0F1429",
      borderPrimary: "#1A2347",
      borderSecondary: "#5C6073",
      backgroundOverlay: "#0E1126A0",
      borderRed: "#FF8680",
      fillPrimaryRed: "#B2332D",
      fillPrimaryRedHover: "#932F30",
      fillPrimaryRedClick: "#742A33",
      fillPrimaryBlue: "#294ACC",
      fillPrimaryBlueHover: "#112A8C",
      fillPrimaryBlueClick: "#14266D",
      fillSecondary: "#1B254A",
      fillSecondaryRedHover: "#FF868029",
      fillSecondaryRedClick: "#FF868014",
      fillSecondaryBlueHover: "#7490FF29",
      fillSecondaryBlueClick: "#7490FF14",
      fillTertiary: "#293667",
      fillGreen: "#2DCC85",
      fillVioletGradient: "linear-gradient(266.5deg, #A880FF 9.3%, #8B5BF1 94.39%)",
      fillBlueGradient: "linear-gradient(89.56deg, #0021A5 0%, #2C53EF 75.01%)",
      fillLoadingInTable: "linear-gradient(90deg, #1B254A 43.6%, rgba(22, 29, 59, 0) 100%)",
      contentPrimary: "#DADCE5",
      contentSecondary: "#A8ADBF",
      contentTertiary: "#989DB2",
      contentQuaternary: "#8D92A6",
      contentOnFill: "#F2F2F2",
      contentBlue: "#8FA6FF",
      contentRed: "#FF8680",
      contentGreen: "#4CD99A",
      contentViolet: "#A880FF",
      contentYellow: "#E0BB38",
      contentWarmGreen: "#BDD94C",
      contentLightBlue: "#8FA6FF"
    },
    boxShadow: {
      unset: "unset",
      block: "0px 2px 4px #0F1429",
      dropdown: "drop-shadow(0px 2px 16px #0F1429)",
      tooltip: "0px 4px 8px #0F1429"
    },
    border: {
      base: "1px solid #5C6073",
      // borderSecondary
      separator: "1px solid #1A2347",
      // borderPrimary
      tableRowSeparator: "1px solid #1A2347"
      // borderPrimary
    },
    themeName: "dark"
  },
  light: {
    ...xa,
    colorSpecialCase: {
      blueBanner: "#294ACC",
      blueBanner2: "#2A5DB2"
    },
    styleguideColors: {
      backgroundPrimary: "#FFFFFF",
      backgroundSecondary: "#F2F3F5",
      backgroundTertiary: "#181D40",
      backgroundQuaternary: "#161A33",
      borderPrimary: "#F2F3F5",
      borderSecondary: "#D2D4D9",
      backgroundOverlay: "#0E1126A0",
      borderRed: "#E6332A",
      fillPrimaryRed: "#E6332A",
      fillPrimaryRedHover: "#D23028",
      fillPrimaryRedClick: "#BD2E27",
      fillPrimaryBlue: "#0021A5",
      fillPrimaryBlueHover: "#051F89",
      fillPrimaryBlueClick: "#081F7B",
      fillSecondary: "#F5F5F7",
      fillSecondaryRedHover: "#E6332A14",
      fillSecondaryRedClick: "#E6332A1F",
      fillSecondaryBlueHover: "#0021A514",
      fillSecondaryBlueClick: "#0021A51F",
      fillTertiary: "#FEFEFF",
      fillGreen: "#2DCC85",
      fillVioletGradient: "linear-gradient(266.5deg, #A880FF 9.3%, #8B5BF1 94.39%)",
      fillBlueGradient: "linear-gradient(89.56deg, #0021A5 0%, #2C53EF 75.01%)",
      fillLoadingInTable: "linear-gradient(90deg, #F2F3F5 0%, rgba(255, 255, 255, 0) 100%)",
      contentPrimary: "#1A1919",
      contentSecondary: "#72737A",
      contentTertiary: "#BABBBF",
      contentQuaternary: "#D2D3D9",
      contentOnFill: "#FFFFFF",
      contentBlue: "#0021A5",
      contentRed: "#D8251C",
      contentGreen: "#31DE91",
      contentViolet: "#8B5BF1",
      contentYellow: "#F1BF0B",
      contentWarmGreen: "#BBDE31",
      contentLightBlue: "#375AE9"
    },
    boxShadow: {
      unset: "unset",
      block: "0px 2px 4px rgba(143, 144, 152, 0.15)",
      dropdown: "drop-shadow(0px 4px 8px rgba(26, 25, 25, 0.16))",
      tooltip: "0px 4px 8px rgba(143, 144, 152, 0.2)"
    },
    border: {
      base: "1px solid #D2D4D9",
      separator: "1px solid #F2F3F5",
      // borderPrimary
      tableRowSeparator: "1px solid #F2F3F5"
      // borderPrimary
    },
    themeName: "light"
  }
};
export {
  kC as Accordion,
  HC as Account,
  FC as AccountInfoRow,
  uC as Address,
  zy as Alert,
  o3 as AlertStatus,
  A2 as ArrowDownIcon,
  Dv as ArrowLeftIcon,
  X2 as ArrowRightIcon,
  Gn as ArrowUpIcon,
  Rv as ArrowWithTailIcon,
  Nv as AuctionContractIcon,
  Jt as Avatar,
  en as BackgroundWrapper,
  dn as Badge,
  Av as BidContractIcon,
  ne as BodyText,
  Cn as Breakpoints,
  u2 as Button,
  xm as CEP18Token,
  bm as CSPR,
  Ot as CaptionText,
  Nl as CheckIcon,
  jf as Checkbox,
  Bl as CheckboxCheckedIcon,
  Al as CheckboxCheckedInactiveIcon,
  P1 as CheckboxFontSize,
  Fl as CheckboxIcon,
  Vl as CheckmarkIcon,
  dC as CircularIndicator,
  Gf as CircularIndicatorTextSize,
  zf as CircularIndicatorTextVariation,
  $l as ClockIcon,
  Zl as CloseIcon,
  BC as ConfirmationWindow,
  Yo as Container,
  Lu as Copy,
  E1 as CopyHash,
  Oa as CopyIcon,
  Bv as CrossIcon,
  By as CsprClickIcon,
  Ay as CsprClickLogoDarkIcon,
  Fy as CsprCloudIcon,
  Vy as CsprLiveFullIcon,
  $y as CsprLiveIcon,
  Zy as CsprMarketIcon,
  Wy as CsprNameIcon,
  Uy as CsprNftStudioIcon,
  jy as CsprWalletIcon,
  Fv as CurrencyIcon,
  Xy as DEFAULT_AMOUNT_PRECISION,
  E0 as DEFAULT_PRECISION,
  Vv as DarkModeIcon,
  $v as DefiContractIcon,
  E2 as DeleteIcon,
  Zv as DisconnectLinkIcon,
  Wv as DiscordIcon,
  jm as DismissOrigin,
  Uv as DocumentIcon,
  fC as Dropdown,
  DC as DropdownMenu,
  RC as DropdownMenuItem,
  jv as EmptyImageIcon,
  Gv as Erc20AvatarIcon,
  zn as ErrorIcon,
  vf as FULL_PRECISION,
  Wl as FacebookIcon,
  Cg as FailedToFetch,
  zv as FileIcon,
  Ey as FlagAzIcon,
  Py as FlagEnIcon,
  ky as FlagEsIcon,
  Oy as FlagFrIcon,
  Ty as FlagNlIcon,
  Hy as FlagPlIcon,
  Dy as FlagRuIcon,
  Ry as FlagUaIcon,
  Ny as FlagVtIcon,
  jn as FlexBox,
  Ee as FlexColumn,
  J as FlexRow,
  Rs as FormField,
  Yr as FormFieldStatus,
  Kv as GenericContractIcon,
  Ul as GithubIcon,
  qv as GlobeIcon,
  Pf as HashFontSize,
  jl as HashIcon,
  ot as HashLength,
  vo as HashLink,
  Xv as HeaderMenuIcon,
  hC as HeaderTabMenuItem,
  Ns as HeaderText,
  Yv as HeartIcon,
  m3 as Identicon,
  Qv as InfoColourIcon,
  zl as InfoIcon,
  Gl as InfoImportantIcon,
  Bs as Input,
  Xr as InputInteractionType,
  Mh as InputRef,
  _h as InputValidationType,
  Jv as KeyIcon,
  Kl as KeybaseIcon,
  Nf as Label,
  G2 as LabelFontSize,
  ey as LightModeIcon,
  Ja as Link,
  ty as LinkIcon,
  ql as LinkedinIcon,
  iy as LockIcon,
  ry as LockImageIcon,
  ny as LockImageSimpleIcon,
  oy as LockedIcon,
  qy as MINIMUM_SHOWING_BALANCE,
  vm as MOTES_PER_CSPR_RATE,
  gC as MainMenu,
  mC as MainMenuItem,
  Gy as MakeFullIcon,
  ay as MediaPlaceholderIcon,
  i2 as MediaQueries,
  Xl as MediumIcon,
  sy as MenuIcon,
  jC as ModalContentHeader,
  qs as ModalHeader,
  z2 as ModalPosition,
  pC as MultiSelectDropdown,
  WC as MultilineTextRow,
  UC as MultiselectDropdown,
  Jr as NamedKeyPrefix,
  vC as NavLink,
  TC as NavigationSettingsContainer,
  ly as NetworkIcon,
  cy as NftContractIcon,
  bg as OrderDirection,
  yC as PageTile,
  CC as PageTileHeader,
  wC as PageTileTabsHeader,
  EC as PaginatedTable,
  pg as Pagination,
  uy as PlusIcon,
  Fn as PrecisionCase,
  Ng as ProductItemWrapper,
  NC as ProductsMenu,
  AC as ProductsMenuItem,
  n0 as ProgressColorsRange,
  $C as ProgressLine,
  bC as RadioButton,
  Yl as RedditIcon,
  dy as RefreshIcon,
  Yy as SMALL_PRECISION,
  fy as SandClockDarkIcon,
  py as SandClockLightIcon,
  Ta as SearchIcon,
  GC as SearchableDropdown,
  hy as SettingsIcon,
  gy as SortingDownIcon,
  my as SortingUpIcon,
  ea as StyledBodyText,
  Kh as StyledTableRow,
  U2 as SubtitleText,
  Kn as SuccessIcon,
  ve as SvgIcon,
  xC as SvgIconSocial,
  _C as TabContent,
  MC as TabMenu,
  LC as TabMenuContainer,
  SC as TabMenuItem,
  Jh as Table,
  Wh as TableBody,
  Xh as TableContainer,
  jh as TableData,
  IC as TableDataHeader,
  wg as TableError,
  zh as TableHead,
  gg as TableLoader,
  qh as TableRow,
  r2 as TableRowType,
  Ql as TelegramIcon,
  p2 as Text,
  VC as TextRow,
  Hm as TextRowType,
  PC as Textarea,
  Bn as ThemeModeType,
  vy as TokenContractIcon,
  _t as Tooltip,
  S1 as TruncateBox,
  Jl as TwitterIcon,
  e3 as Twitter_xIcon,
  yy as UaHeartIcon,
  Cy as UnlockedIcon,
  wy as UserIcon,
  ZC as UserInputWindow,
  by as ValidatorStatusActiveIcon,
  xy as ValidatorStatusInactiveBidIcon,
  Ly as ValidatorStatusTriesIcon,
  _y as ValidatorStatusWasIcon,
  My as ValidatorStatusWillBeIcon,
  Lm as ValuesRow,
  Sy as VerifiedIcon,
  t3 as WarningIcon,
  Um as WarningMessage,
  n3 as WebsiteIcon,
  Iy as WebsiteLinkIcon,
  r3 as WechatIcon,
  OC as WizardTile,
  i3 as YoutubeIcon,
  ym as currencyPrecisionByCase,
  Qy as formatBigNumbers,
  Jy as formatCurrency,
  rC as formatDate,
  oC as formatDateShort,
  aC as formatDateWithMonthAndYear,
  iC as formatDateWithWeekday,
  lC as formatDeploysCount,
  G0 as formatHash,
  sC as formatISODateOnly,
  Tt as formatNumber,
  eC as formatPercentage,
  cC as formatRatesToCurrency,
  tC as formatTimestamp,
  nC as formatTimestampAge,
  zC as getNamedKeyPrefix,
  Iv as hasNamedKeyPrefix,
  ba as hashPrefixRegEx,
  mf as isBrowserSupportRelativeDateFormat,
  Ky as isSafariBrowser,
  v3 as isValidAccountHash,
  me as matchSize,
  Ha as md5,
  wm as motesToCEP18Token,
  Cm as motesToCSPR,
  mo as shortenCsprName,
  Lf as shortenString,
  KC as themeConfig,
  _f as truncateCSPRName,
  sv as useClickAndTouchAway,
  g2 as useClickAway,
  Vm as useEscapeKey,
  Os as useGetInputInteractionType,
  f2 as useMatchMedia,
  fg as withMedia
};
