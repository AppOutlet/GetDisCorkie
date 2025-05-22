export default `<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>DisCorkie</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <style>@font-face{font-family:'Montserrat';font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUQjIg1_i6t8kCHKm459WxRxC7mw9c.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Montserrat';font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUQjIg1_i6t8kCHKm459WxRzS7mw9c.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Montserrat';font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUQjIg1_i6t8kCHKm459WxRxi7mw9c.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Montserrat';font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUQjIg1_i6t8kCHKm459WxRxy7mw9c.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Montserrat';font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUQjIg1_i6t8kCHKm459WxRyS7m.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}</style>
  <style>@font-face{font-family:'Material Symbols Rounded';font-style:normal;font-weight:100 700;src:url(https://fonts.gstatic.com/s/materialsymbolsrounded/v245/sykg-zNym6YjUruM-QrEh7-nyTnjDwKNJ_190Fjzag.woff2) format('woff2');}.material-symbols-rounded{font-family:'Material Symbols Rounded';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased;}</style>
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/regular/style.css"/>

  <!-- Google tag (gtag.js) -->
  <script async="" src="https://www.googletagmanager.com/gtag/js?id=G-0YVP3FFV9V"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-0YVP3FFV9V');
  </script>

<link rel="stylesheet" href="styles-HEQXX6OT.css"></head>

<body class="mat-typography"><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script>
  <app-root></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-NXTBSWDO.js" type="module"></script></body>

</html>
`;