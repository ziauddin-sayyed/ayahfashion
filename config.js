/* Ayah Fashion — central backend config.
   Single place to define backend API URLs, used by all pages.
   - On localhost / 127.0.0.1 / file://  -> local Saleor backend (port 8000)
   - Everywhere else                     -> production backend
   Usage in pages (after <script src="config.js"></script>):
     const GRAPHQL = window.APP_CONFIG.GRAPHQL;
*/
(function () {
  var PROD_API = "https://ammikids.themanagemate.com";
  var LOCAL_API = "https://ammikids.themanagemate.com";
  // var LOCAL_API = "http://localhost:8001";
  var host = (typeof location !== "undefined" && location.hostname) || "";
  var IS_LOCAL = ["localhost", "127.0.0.1", ""].indexOf(host) !== -1;
  var API_BASE = IS_LOCAL ? LOCAL_API : PROD_API;
  window.APP_CONFIG = {
    IS_LOCAL: IS_LOCAL,
    API_BASE: API_BASE,
    GRAPHQL: API_BASE + "/graphql/",
    PHONEPE_BASE: API_BASE,
    CASHFREE_BASE: API_BASE,
    PAYMENTS_BASE: API_BASE,
    CHANNEL: "in"
  };
})();
