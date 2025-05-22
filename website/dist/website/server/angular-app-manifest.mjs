
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 12822, hash: '11111313ae6ca619a7daa9d8f2034db7c1528aa0b625a5fcd327365b59abf5df', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5579, hash: 'dc3ae4d5bd484f00eb327ba6cda5330099003f675307deab0e641c20a56388e7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-HEQXX6OT.css': {size: 59587, hash: 'L9Mla1RqBq8', text: () => import('./assets-chunks/styles-HEQXX6OT_css.mjs').then(m => m.default)}
  },
};
