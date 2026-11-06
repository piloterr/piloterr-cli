// Generated from the Piloterr OpenAPI document. Do not edit by hand.

import type { CommandDefinition } from "./types.js";

export const COMMANDS: readonly CommandDefinition[] = [
  {
    command: "aboutyou-product",
    operation: "aboutyou_product",
    path: "/v2/aboutyou/product",
    methods: ["GET", "POST"],
    summary: "About You Product",
    description:
      "Read one About You product from a product URL or a keyword. A keyword opens the first search hit. Set region when the query does not already name the shop.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product URL or keyword. A keyword opens the first search result.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Shop code. Default is fr. A full link in query picks the shop, and a conflicting region returns 400.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Return the rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "aboutyou-search",
    operation: "aboutyou_search",
    path: "/v2/aboutyou/search",
    methods: ["GET", "POST"],
    summary: "About You Search",
    description:
      "Search an About You shop with a keyword or a search URL. Pick the country with region, or let a full link choose the shop. Cards include brand, price, and the product link.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or About You search, category, or brand URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Shop code. Default is fr. A full link in query picks the shop, and a conflicting region returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Only page 1 is available.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Return the rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "action-product",
    operation: "action_product",
    path: "/v2/action/product",
    methods: ["GET", "POST"],
    summary: "Action Product",
    description:
      "Action Product API: fetch full product page data from a product ID or URL on Action.com. Returns pricing, specs, images, breadcrumbs and availability via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Action product ID or full product URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Locale (fr-fr, de-de, pt-pt, …) or country code (fr, de, pt). Default: fr-fr.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "action-search",
    operation: "action_search",
    path: "/v2/action/search",
    methods: ["GET", "POST"],
    summary: "Action Search",
    description:
      "Action Search API: search product listings by keyword or URL on Action.com across European locales. Returns prices, images, locale, currency and pagination via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full Action.com search URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Locale (fr-fr, de-de, pt-pt, …) or country code (fr, de, pt). Default: fr-fr.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "1-based page number (default: 1).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "aldi-product",
    operation: "aldi_product",
    path: "/v2/aldi/product",
    methods: ["GET", "POST"],
    summary: "Aldi Product",
    description:
      "Aldi Product API: fetch full product page data from an Aldi URL or path slug. Returns pricing, images, description, category and cooling flags.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Aldi product page URL or site path slug.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Target country when query is a path only (default: fr). Ignored for full product URLs.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "aldi-search",
    operation: "aldi_search",
    path: "/v2/aldi/search",
    methods: ["GET", "POST"],
    summary: "Aldi Search",
    description:
      "Aldi Search API: list products from an Aldi category page URL or path across FR, DE, NL and Canarias shops. Returns prices, thumbnails and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Aldi category page URL or site path.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "Target country when query is a path only (default: fr).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number override (default: read from URL or 1).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "alibaba-product",
    operation: "alibaba_product",
    path: "/v2/alibaba/product",
    methods: ["GET", "POST"],
    summary: "Alibaba Product",
    description:
      "Alibaba Product API. Fetch a full B2B product page by URL or product ID with optional locale subdomain. Browser rendering returns tiered pricing, seller profile and lead times.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Alibaba product URL or numeric product ID.",
      },
      {
        name: "subdomain",
        type: "string",
        required: false,
        description:
          "Locale subdomain when query is a bare product ID, or to override the host on a product URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the rendered HTML as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "alibaba-search",
    operation: "alibaba_search",
    path: "/v2/alibaba/search",
    methods: ["GET", "POST"],
    summary: "Alibaba Search",
    description:
      "Alibaba Search API. Query B2B product listings by keyword or search URL across 17 locale subdomains. Request mode returns prices, MOQ, seller data and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full Alibaba search URL.",
      },
      {
        name: "subdomain",
        type: "string",
        required: false,
        description:
          "Locale subdomain for keyword searches when query is not a full URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "1-based page number (20 results per page). Default: 1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw open-s JSON as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "aliexpress-product",
    operation: "aliexpress_product",
    path: "/v2/aliexpress/product",
    methods: ["GET", "POST"],
    summary: "AliExpress Product",
    description:
      "AliExpress Product API: scrape live /item/ product pages from a full URL. Get title, images, seller identity, pricing, specs, delivery, and FAQs as JSON via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full AliExpress product page URL (/item/{id}.html).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of parsed JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "aliexpress-product-reviews",
    operation: "aliexpress_product_reviews",
    path: "/v2/aliexpress/product/reviews",
    methods: ["GET", "POST"],
    summary: "AliExpress Reviews",
    description:
      "AliExpress Reviews API: list buyer reviews for a product id or item URL. Each review includes author, star rating, text, date, and photos when the buyer attached them.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "AliExpress product id or item URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, starting at 1. Defaults to 1. The feed returns up to 20 reviews per page. pagination.next is the next page URL, or null on the last page.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw feed body as {"result": "..."} instead of parsed JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "aliexpress-search",
    operation: "aliexpress_search",
    path: "/v2/aliexpress/search",
    methods: ["GET", "POST"],
    summary: "AliExpress Search",
    description:
      "AliExpress Search API: search by keyword or wholesale URL and get product listings with prices, ratings, sold counts, and pagination as JSON via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full AliExpress search results URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "aliexpress-store-product",
    operation: "aliexpress_store_product",
    path: "/v2/aliexpress/store/product",
    methods: ["GET", "POST"],
    summary: "AliExpress Store Product",
    description:
      "AliExpress Store Product API: list products from an AliExpress seller store by URL or store ID. Returns store metadata and product cards (~40 SSR items) as JSON via browser rendering. Pagination is not supported.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "AliExpress store URL or numeric store ID.",
      },
      {
        name: "sort",
        type: "string",
        required: false,
        description: "Optional sort alias for the store all-items page.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "allegro-product",
    operation: "allegro_product",
    path: "/v2/allegro/product",
    methods: ["GET", "POST"],
    summary: "Allegro Product",
    description:
      "Allegro Product API. Extract full product page data from allegro.pl by URL (/produkt/, /oferta/, /ogloszenie/). Browser rendering, 3 credits per call. Pair with Allegro Search (3 credits) for listing discovery.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full allegro.pl product or offer URL to extract structured PDP data.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "allegro-search",
    operation: "allegro_search",
    path: "/v2/allegro/search",
    methods: ["GET", "POST"],
    summary: "Allegro Search",
    description:
      "Allegro Search API. Query product listings by keyword, optional page number, or full allegro.pl listing URL. Returns results with prices, sellers, sponsorship flags and pagination. 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full Allegro listing URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number for keyword searches (default 1).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "amazon-product",
    operation: "amazon_product",
    path: "/v2/amazon/product",
    methods: ["GET", "POST"],
    summary: "Amazon Product",
    description:
      "Efficiently extract product details from Amazon for dynamic retail insights, including price, stock, features, and seller data.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Amazon product ASIN (Amazon Standard Identification Number) to retrieve full product details for.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Amazon domain extension to query. Controls which Amazon marketplace is targeted.",
        default: "com",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "amazon-product-offer",
    operation: "amazon_product_offer",
    path: "/v2/amazon/product/offer",
    methods: ["GET", "POST"],
    summary: "Amazon Product Offer",
    description:
      "Efficiently extract details of third-party seller offers for any Amazon product across multiple marketplaces.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Amazon product ASIN (Amazon Standard Identification Number) to retrieve third-party seller offers for.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Amazon domain extension to query. Controls which Amazon marketplace is targeted.",
        default: "com",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number for paginated offer results.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "amazon-search",
    operation: "amazon_search",
    path: "/v2/amazon/search",
    methods: ["GET", "POST"],
    summary: "Amazon Search",
    description:
      "Efficiently scrape Amazon search results for real-time product data and insights across multiple Amazon marketplaces.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or phrase to search for products on Amazon.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Amazon domain extension to query. Controls which Amazon marketplace is searched.",
        default: "com",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number for paginated search results. Each page returns up to 60 results.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "apartments-property",
    operation: "apartments_property",
    path: "/v2/apartments/property",
    methods: ["GET", "POST"],
    summary: "Apartments Property",
    description:
      "Extract a full Apartments.com rental listing from a property URL, including amenities, gallery, description, geolocation, and unit details via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Apartments.com property listing URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "apartments-search",
    operation: "apartments_search",
    path: "/v2/apartments/search",
    methods: ["GET", "POST"],
    summary: "Apartments Search",
    description:
      "Search Apartments.com rentals from a full city or browse URL and retrieve prices, photos, addresses, phone numbers, and pagination via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Apartments.com search or city browse URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "argenprop-property",
    operation: "argenprop_property",
    path: "/v2/argenprop/property",
    methods: ["GET", "POST"],
    summary: "Argenprop Property",
    description:
      "Read one Argenprop listing from its URL or id. You get price, address, rooms, expenses, and the agent when the page shows them.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The full listing page on argenprop.com. Copy it from results[].url on [Argenprop Search](https://www.piloterr.com/library/argenprop-search). The listing id is the number after the double dash.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "argenprop-search",
    operation: "argenprop_search",
    path: "/v2/argenprop/search",
    methods: ["GET", "POST"],
    summary: "Argenprop Search",
    description:
      "Search Argenprop by neighbourhood or city. Set operation to venta or alquiler, and property_type such as departamentos or casas. Page with pagina.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "The place to search, or a full Argenprop results page.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Which page of the list to open. The first page is 1. The placeholder is 2.",
        default: 1,
      },
      {
        name: "operation",
        type: "string",
        required: false,
        description:
          "Sale or rent, when query is a place name. The placeholder is venta, which means for sale. alquiler is a long-term rental. alquiler-temporal is a short stay. sale, buy, and rent are accepted as aliase…",
        default: "venta",
      },
      {
        name: "property_type",
        type: "string",
        required: false,
        description:
          "The kind of home, when query is a place name. The placeholder is departamentos, which means apartments. Also accepted: casas (houses), ph, terrenos, locales, oficinas, and quintas. casa and house map…",
        default: "departamentos",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "argos-product",
    operation: "argos_product",
    path: "/v2/argos/product",
    methods: ["GET", "POST"],
    summary: "Argos Product",
    description:
      "Argos Product API: one UK product by id or URL. Browser rendering (2 credits).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Argos product id or product URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return raw HTML.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "argos-search",
    operation: "argos_search",
    path: "/v2/argos/search",
    methods: ["GET", "POST"],
    summary: "Argos Search",
    description:
      "Search the Argos UK catalogue by keyword and page the results. Prices are in pounds. A one-word query that Argos turns into a brand page with no product cards returns no results.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or Argos UK search URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number from 1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: 'When true, return raw HTML as {"result": "..."}.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "arxiv-paper",
    operation: "arxiv_paper",
    path: "/v2/arxiv/paper",
    methods: ["GET", "POST"],
    summary: "arXiv Paper",
    description: "Fetch one arXiv paper by id or by an abs, pdf, or html URL.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. arXiv id or an abs, pdf, or html URL. Example: 2201.00978 or https://arxiv.org/abs/cond-mat/0011267v1.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "arxiv-search",
    operation: "arxiv_search",
    path: "/v2/arxiv/search",
    methods: ["GET", "POST"],
    summary: "arXiv Search",
    description:
      "Search arXiv papers by keyword, author query such as au:einstein, or arXiv id. A paper URL returns 400. Page through results when the match count is large.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Keyword, fielded query such as au:einstein, arXiv id, or an arxiv.org search URL. Example: electron. A paper URL such as https://arxiv.org/abs/2201.00978 returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number from 1. Example: 2. Defaults to 1. Each page has 10 papers.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "auchan-product",
    operation: "auchan_product",
    path: "/v2/auchan/product",
    methods: ["GET", "POST"],
    summary: "Auchan Product",
    description:
      "Effortlessly extract product details from Auchan for dynamic business insights, including nutritional information, ingredients, ratings, and reviews.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "URL of the Auchan product page to extract data from.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "auchan-search",
    operation: "auchan_search",
    path: "/v2/auchan/search",
    methods: ["GET", "POST"],
    summary: "Auchan Search",
    description:
      "Extract Auchan product listings from keyword searches for insightful market analysis and competitive edge.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search keyword or Auchan search URL to retrieve product listings.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number for paginated search results.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "autodoc-product",
    operation: "autodoc_product",
    path: "/v2/autodoc/product",
    methods: ["GET", "POST"],
    summary: "Autodoc Product",
    description:
      "Scrape Autodoc product pages: price, specs, EAN, images, compatibility, and TecDoc-related vehicle data via the Related endpoint.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "HTTPS URL of an Autodoc product page.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "autodoc-product-related",
    operation: "autodoc_product_related",
    path: "/v2/autodoc/product/related",
    methods: ["GET", "POST"],
    summary: "Autodoc Product Related",
    description:
      "Vehicle fitment lines per maker for an Autodoc product. All parameters from Product fetch.params are required.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Same HTTPS product page URL as Product.",
      },
      {
        name: "maker_id",
        type: "number",
        required: true,
        description:
          "TecDoc maker id from compatibility.cars[] / compatibility.trucks[], e.g. 93 for RENAULT.",
      },
      {
        name: "vehicle_type",
        type: "string",
        required: true,
        description:
          "Required. pkw (passenger cars) or lkw (commercial). Must match the compatibility row.",
        default: "pkw",
      },
      {
        name: "maker_name",
        type: "string",
        required: true,
        description:
          "Required maker label from compatibility, e.g. RENAULT. Used to parse vehicle lines.",
      },
      {
        name: "product_id",
        type: "number",
        required: true,
        description:
          "Required article id from Product response or URL path, e.g. 7999541.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "autodoc-search",
    operation: "autodoc_search",
    path: "/v2/autodoc/search",
    methods: ["GET", "POST"],
    summary: "Autodoc Search",
    description:
      "Search Autodoc by URL: keyword pages use /search?keyword=… (e.g. frein on auto-doc.fr). Extract product cards, prices, and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Autodoc search/listing URL, or path only when domain sets the shop.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Regional shop hostname without https:// or www. (e.g. auto-doc.fr, autodoc.de). Omit to default to autodoc.de.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "autoeurope-result",
    operation: "autoeurope_result",
    path: "/v2/autoeurope/result",
    methods: ["GET", "POST"],
    summary: "Auto Europe Result",
    description:
      "Read one vehicle from an Auto Europe quote. Pass the offer id from Search, with the same pickup and dates. You get the supplier, the SIPP code, and the package prices.",
    params: [
      {
        name: "offer_id",
        type: "string",
        required: true,
        description:
          "Vehicle id from search results[].id, or a package id of that vehicle.",
      },
      {
        name: "pickup",
        type: "string",
        required: true,
        description: "Same pickup place as the search. Example: CDG",
      },
      {
        name: "pickup_date",
        type: "string",
        required: true,
        description:
          "Same pickup date as the search, YYYY-MM-DD. Example: 2026-11-06",
      },
      {
        name: "dropoff_date",
        type: "string",
        required: true,
        description:
          "Same return date as the search, YYYY-MM-DD, after pickup_date. Example: 2026-11-09",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Country site used for the search. Default fr. Example: fr. There is no page parameter.",
      },
      {
        name: "dropoff",
        type: "string",
        required: false,
        description: "Return place when it differs from pickup.",
      },
      {
        name: "pickup_time",
        type: "string",
        required: false,
        description: "Pickup time HH:MM. Default 10:00.",
        default: "10:00",
      },
      {
        name: "dropoff_time",
        type: "string",
        required: false,
        description: "Return time HH:MM. Default 10:00.",
        default: "10:00",
      },
      {
        name: "driver_age",
        type: "number",
        required: false,
        description: "Driver age from 18 to 99. Default 40.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return the raw quote HTML instead of JSON.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "autoeurope-search",
    operation: "autoeurope_search",
    path: "/v2/autoeurope/search",
    methods: ["GET", "POST"],
    summary: "Auto Europe Search",
    description:
      "Quote a rental car on Auto Europe. Pass pickup, pickup date, and dropoff date. Region chooses the country site and its currency. The whole quote comes back on one page.",
    params: [
      {
        name: "pickup",
        type: "string",
        required: true,
        description: "Pickup place or airport code.",
      },
      {
        name: "pickup_date",
        type: "string",
        required: true,
        description: "Pickup date, YYYY-MM-DD.",
      },
      {
        name: "dropoff_date",
        type: "string",
        required: true,
        description: "Return date, YYYY-MM-DD, after pickup_date.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Country site. Default fr. Example: fr. A code such as de or uk, or a full Auto Europe URL. There is no page parameter.",
      },
      {
        name: "dropoff",
        type: "string",
        required: false,
        description: "Return place when it differs from pickup.",
      },
      {
        name: "pickup_time",
        type: "string",
        required: false,
        description: "Pickup time HH:MM. Default 10:00.",
        default: "10:00",
      },
      {
        name: "dropoff_time",
        type: "string",
        required: false,
        description: "Return time HH:MM. Default 10:00.",
        default: "10:00",
      },
      {
        name: "driver_age",
        type: "number",
        required: false,
        description: "Driver age from 18 to 99. Default 40.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return the raw quote HTML instead of JSON.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "autoscout24-ad",
    operation: "autoscout24_ad",
    path: "/v2/autoscout24/ad",
    methods: ["GET", "POST"],
    summary: "AutoScout24 Ad",
    description:
      "Read one AutoScout24 listing, including an inactive ad that still exposes the listing. Price, vehicle, seller, and location. (1 credit)",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full AutoScout24 listing URL. An inactive listing that still contains script#__NEXT_DATA__ is returned with status Inactive. A page without that selector returns 404.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "autoscout24-search",
    operation: "autoscout24_search",
    path: "/v2/autoscout24/search",
    methods: ["GET", "POST"],
    summary: "AutoScout24 Search",
    description:
      "Search AutoScout24 listings from a search URL. Each card has make, model, numeric price, mileage, and the listing URL. (1 credit)",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full AutoScout24 search URL. Filters and page in the URL are kept. page starts at 1. A page with no cards returns 404.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "autotrader-ad",
    operation: "autotrader_ad",
    path: "/v2/autotrader/ad",
    methods: ["GET", "POST"],
    summary: "Autotrader Ad",
    description:
      "Extract full vehicle details from an AutoTrader UK car-details URL, including price, specs, gallery, seller, and description via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full AutoTrader UK car details URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "autotrader-search",
    operation: "autotrader_search",
    path: "/v2/autotrader/search",
    methods: ["GET", "POST"],
    summary: "Autotrader Search",
    description:
      "Search AutoTrader UK listings from a car-search URL and retrieve prices, specs, photos, seller info, and pagination via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full AutoTrader UK car search URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "bestbuy-product",
    operation: "bestbuy_product",
    path: "/v2/bestbuy/product",
    methods: ["GET", "POST"],
    summary: "Best Buy Product",
    description:
      "Get a Best Buy US or Canada product page: title, price, brand, stock, images, categories and specs via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Best Buy product URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return rendered HTML as {"result": "..."} instead of JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "bestbuy-product-reviews",
    operation: "bestbuy_product_reviews",
    path: "/v2/bestbuy/product/reviews",
    methods: ["GET", "POST"],
    summary: "Best Buy Reviews",
    description:
      "Get customer reviews for a Best Buy product URL: rating, review text, author, photos and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Best Buy product URL or reviews URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, starting at 1. Default 1. A value above 1 overrides page on the Best Buy URL. If this stays at 1, a page already on the URL is kept.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, return the rendered HTML instead of JSON. Default false.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "bestbuy-search",
    operation: "bestbuy_search",
    path: "/v2/bestbuy/search",
    methods: ["GET", "POST"],
    summary: "Best Buy Search",
    description:
      "Search Best Buy US or Canada by keyword or search URL. Returns product listings with price, rating and pagination via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or full Best Buy search URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Best Buy country when query is not a full URL (default: com).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number (default: 1).",
      },
      {
        name: "sort",
        type: "string",
        required: false,
        description: "Sort order (default: best_selling).",
        default: "best_selling",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return rendered HTML as {"result": "..."} instead of JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "bhphotovideo-product",
    operation: "bhphotovideo_product",
    path: "/v2/bhphotovideo/product",
    methods: ["GET", "POST"],
    summary: "B&H Photo Video Product",
    description:
      "Read a B&H Photo Video product from its URL or id. Returns price, rating, specifications, and box contents.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product URL or id.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, return the raw HTML. The string false stays false.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "bhphotovideo-search",
    operation: "bhphotovideo_search",
    path: "/v2/bhphotovideo/search",
    methods: ["GET", "POST"],
    summary: "B&H Photo Video Search",
    description:
      "Search B&H Photo Video by keyword or search URL. Returns BH numbers, dollar prices, and a next page URL.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or a bhphotovideo.com search URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, starting at 1. Example: 2.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, return the raw HTML. The string false stays false.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "bing-search",
    operation: "bing_search",
    path: "/v2/bing/search",
    methods: ["GET", "POST"],
    summary: "Bing Search",
    description:
      "Scrape real-time Bing search results with full control over location, language, and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The search query to execute on Bing. Supports all Bing advanced search operators.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number of results to retrieve. Used for pagination.",
      },
      {
        name: "num",
        type: "number",
        required: false,
        description: "Number of results per page. Minimum: 10, Maximum: 50.",
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "City or region from which the search should originate. If multiple locations match, the most popular one is selected.",
      },
      {
        name: "lat",
        type: "number",
        required: false,
        description: "GPS latitude coordinate for the search origin.",
      },
      {
        name: "lon",
        type: "number",
        required: false,
        description: "GPS longitude coordinate for the search origin.",
      },
      {
        name: "mkt",
        type: "string",
        required: false,
        description:
          "Market code combining language and country, in the form <language>-<country>. Defines where the results come from.",
      },
      {
        name: "cc",
        type: "string",
        required: false,
        description:
          "Two-letter ISO 3166-1 country code defining the country to search from.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "bitiba-product",
    operation: "bitiba_product",
    path: "/v2/bitiba/product",
    methods: ["GET", "POST"],
    summary: "Bitiba Product",
    description:
      "Read one product from a live Bitiba shop, including the selected variant price and the pack list.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product URL, shop path, or product number. Example: 75036. A search link returns 400.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Shop used when query is a number or a path. de is Germany (default).",
        default: "de",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Set to true to get the raw HTML in result.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "bitiba-search",
    operation: "bitiba_search",
    path: "/v2/bitiba/search",
    methods: ["GET", "POST"],
    summary: "Bitiba Search",
    description:
      "Search a live Bitiba country shop. Germany is the default. www.bitiba.com is closed and returns 400.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "What to look for. A word such as hundefutter, or a Bitiba search link. A product link returns 400. www.bitiba.com returns 400.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Country shop. de is Germany (default), fr is France, uk is the United Kingdom. gb means uk.",
        default: "de",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, starting at 1. Page 2 uses p=2.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Set to true to get the raw HTML in result.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "bol-product",
    operation: "bol_product",
    path: "/v2/bol/product",
    methods: ["GET", "POST"],
    summary: "Bol Product",
    description:
      "Read one bol.com product by URL or product id, in nl, be-nl, or be-fr. You get the selling price, the list price, and the seller.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product URL or numeric product id.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Shop. Use nl for the Netherlands in Dutch, be-nl for Belgium in Dutch, or be-fr for Belgium in French. Leave empty for nl. A full URL picks the shop from the path.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: 'When true, return the raw HTML as {"result": "..."}.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "bol-search",
    operation: "bol_search",
    path: "/v2/bol/search",
    methods: ["GET", "POST"],
    summary: "Bol Search",
    description:
      "Search bol.com by keyword. Region is nl, be-nl, or be-fr. Page the product cards. Sponsored ads can repeat across pages.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword or full bol.com search URL. A product URL is rejected.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Shop. Use nl for the Netherlands in Dutch, be-nl for Belgium in Dutch, or be-fr for Belgium in French. Leave empty for nl. A full URL picks the shop from /nl/nl/, /be/nl/, or /be/fr/.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, starting at 1. Page 2 asks bol for the next screen of the same search.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: 'When true, return the raw HTML as {"result": "..."}.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "boulanger-product",
    operation: "boulanger_product",
    path: "/v2/boulanger/product",
    methods: ["GET", "POST"],
    summary: "Boulanger Product",
    description:
      "Read one Boulanger product from its URL or product id. You get price, brand, rating, seller, and specifications.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product URL /ref/{id}, or the numeric product id.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, returns the raw HTML instead of the parsed JSON. The response shape is {"result": "<html>..."}. Default false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "boulanger-search",
    operation: "boulanger_search",
    path: "/v2/boulanger/search",
    methods: ["GET", "POST"],
    summary: "Boulanger Search",
    description:
      "Search Boulanger by keyword and page the product grid. Cards include price, brand, seller, and the product URL.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword, a Boulanger /resultats URL, or a /c/ category URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, from 1. Default is 1. Page 2 is sent as numPage=2 and returns different product ids.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, returns the raw HTML instead of the parsed JSON. The response shape is {"result": "<html>..."}. Default false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "brave-search",
    operation: "brave_search",
    path: "/v2/brave/search",
    methods: ["GET", "POST"],
    summary: "Brave Search",
    description:
      "Access the Brave search engine results directly through our efficient Piloterr service for reliable data scraping.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The search query to execute on Brave Search. Supports all standard Brave search operators.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number of results to retrieve. Used for pagination.",
        default: 1,
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description: "Country code, for example us, fr, gb, de.",
        default: "us",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description: "Language code, for example en, fr, de.",
        default: "en",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "bricodepot-product",
    operation: "bricodepot_product",
    path: "/v2/bricodepot/product",
    methods: ["GET", "POST"],
    summary: "Brico Dépôt Product",
    description:
      "Read one Brico Dépôt product from its product URL. You get price, brand, SKU, and availability.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product URL /p/{ean}/{slug}.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "bricodepot-search",
    operation: "bricodepot_search",
    path: "/v2/bricodepot/search",
    methods: ["GET", "POST"],
    summary: "Brico Dépôt Search",
    description:
      "Search Brico Dépôt with a /produits/ listing URL, not a keyword box. Page 2 is the same path with /2 at the end.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Brico Dépôt listing URL under /produits/.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page from 1. Page 2 is the /2 path suffix.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "bricorama-product",
    operation: "bricorama_product",
    path: "/v2/bricorama/product",
    methods: ["GET", "POST"],
    summary: "Bricorama Product",
    description:
      "Read one Bricorama product from its URL. You get price, brand, and the product details.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product URL /p/{slug}/{ean}.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "bricorama-search",
    operation: "bricorama_search",
    path: "/v2/bricorama/search",
    methods: ["GET", "POST"],
    summary: "Bricorama Search",
    description:
      "Search Bricorama by keyword or search URL and page the home-improvement grid.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword, or a Bricorama /search URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page from 1. Sent as ?page= on the listing.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "carrefour-product",
    operation: "carrefour_product",
    path: "/v2/carrefour/product",
    methods: ["GET", "POST"],
    summary: "Carrefour Product",
    description:
      "Read one Carrefour.fr product from its page URL. Every product returns the same keys: price, brand, pack size, Nutriscore, categories, unit price, and customer reviews.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product page URL on www.carrefour.fr. The path starts with /p/.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "carrefour-search",
    operation: "carrefour_search",
    path: "/v2/carrefour/search",
    methods: ["GET", "POST"],
    summary: "Carrefour Search",
    description:
      "Search for products on Carrefour by keyword or URL, returning structured listings with prices, ratings, and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full Carrefour search page URL.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description: "Carrefour domain to search on.",
        default: "fr",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number to retrieve.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "carrefour-suggest",
    operation: "carrefour_suggest",
    path: "/v2/carrefour/suggest",
    methods: ["GET", "POST"],
    summary: "Carrefour Suggest",
    description:
      "Get product suggestions from Carrefour by keyword or EAN, returning matching products with pricing, availability, and product details.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search keyword or EAN code to get product suggestions from Carrefour.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "castorama-product",
    operation: "castorama_product",
    path: "/v2/castorama/product",
    methods: ["GET", "POST"],
    summary: "Castorama Product",
    description:
      "Read one Castorama product from its URL. You get price, brand, and specifications.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product URL ending in _CAFR.prd.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "castorama-search",
    operation: "castorama_search",
    path: "/v2/castorama/search",
    methods: ["GET", "POST"],
    summary: "Castorama Search",
    description:
      "Search Castorama by keyword or search URL and page the DIY listings. Cards include title, price, and product link.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword, or a Castorama listing URL (/search or a .cat category).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page from 1. Sent as ?page= on the listing.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "cdiscount-product",
    operation: "cdiscount_product",
    path: "/v2/cdiscount/product",
    methods: ["GET", "POST"],
    summary: "Cdiscount Product",
    description:
      "Extract full product details from a Cdiscount product page, including price, seller, ratings, specifications, and offers.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Cdiscount product page URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "cdiscount-product-offer",
    operation: "cdiscount_product_offer",
    path: "/v2/cdiscount/product/offer",
    methods: ["GET", "POST"],
    summary: "Cdiscount Product Offer",
    description:
      "Retrieve all marketplace seller offers for a Cdiscount product, including prices, seller ratings, shipping costs, and availability.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Cdiscount product offer page URL. Pass the multiple_offer_url value returned by the Cdiscount Product API.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "cdiscount-search",
    operation: "cdiscount_search",
    path: "/v2/cdiscount/search",
    methods: ["GET", "POST"],
    summary: "Cdiscount Search",
    description:
      "Extract product listings from Cdiscount search results or category pages for market intelligence and competitive analysis.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Cdiscount search results page URL. Use any URL from a search or category browse on cdiscount.com.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "centris-property",
    operation: "centris_property",
    path: "/v2/centris/property",
    methods: ["GET", "POST"],
    summary: "Centris Property",
    description:
      "Read one Centris property from its URL or listing id. You get price, address, rooms, and the broker.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Centris listing URL, in English or French.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "centris-search",
    operation: "centris_search",
    path: "/v2/centris/search",
    methods: ["GET", "POST"],
    summary: "Centris Search",
    description:
      "Search Centris listings by city or by a full results URL. Use the English or French path. Page through properties for sale.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Place name or a full Centris results URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, starting at 1. Default is 1.",
        default: 1,
      },
      {
        name: "language",
        type: "string",
        required: false,
        description:
          "Results language when query is a place name. Default is en.",
        default: "en",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "chewy-product",
    operation: "chewy_product",
    path: "/v2/chewy/product",
    methods: ["GET", "POST"],
    summary: "Chewy Product",
    description:
      "Read one Chewy product by URL or numeric id. The default mode is expert and returns the historical product cache. simple returns one snake_case product.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Which product to read. A Chewy product URL such as https://www.chewy.com/purina-pro-plan-adult-sensitive-skin/dp/128666, or just the numeric id 128666. A search link, a keyword, or another website re…",
      },
      {
        name: "mode",
        type: "string",
        required: false,
        description: "Which JSON to return. Default expert.",
        default: "expert",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Set to true to get the rendered HTML in result instead of JSON. Default false. The string false stays false and still returns JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "chewy-search",
    operation: "chewy_search",
    path: "/v2/chewy/search",
    methods: ["GET", "POST"],
    summary: "Chewy Search",
    description:
      "Search Chewy by keyword or listing URL. The default mode is expert and returns the historical listing objects. simple returns short snake_case cards.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "What to search for. A keyword such as salmon kibble, or a Chewy search or category link such as https://www.chewy.com/s?query=dog+food. A product link (a URL that contains /dp/) returns 400. Another…",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Which page to fetch, starting at 1. Leave this empty for page 1. If query is a listing link that already has page=2, this value replaces that page. In simple mode, pagination.page is this page and pa…",
      },
      {
        name: "mode",
        type: "string",
        required: false,
        description: "Which JSON to return. Default expert.",
        default: "expert",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Set to true to get the rendered HTML in result instead of JSON. Default false. The string false stays false and still returns JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "clearedjobs-job",
    operation: "clearedjobs_job",
    path: "/v2/clearedjobs/job",
    methods: ["GET", "POST"],
    summary: "ClearedJobs Job",
    description:
      "Fetch one cleared job by its URL or by a slug that ends in the numeric id.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Job URL or slug ending in the numeric id. Example: analyst-washington-district-of-columbia-1902823.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "clearedjobs-search",
    operation: "clearedjobs_search",
    path: "/v2/clearedjobs/search",
    methods: ["GET", "POST"],
    summary: "ClearedJobs Search",
    description:
      "Search cleared jobs by keyword. Only the first HTML page is available, so pagination.next is null and page 2 returns 404.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Keyword or a clearedjobs.net jobs URL. Example: analyst. A job URL returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Only page 1 is available. Example: 1. page=2 returns 404. pagination.next is always null.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "company",
    operation: "company",
    path: "/v2/company",
    methods: ["GET", "POST"],
    summary: "Company Database",
    description:
      "Retrieve comprehensive company data including financials, technologies, social profiles, and location by domain name.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The domain name of the company to look up. Accepts multiple formats:",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "coolblue-product",
    operation: "coolblue_product",
    path: "/v2/coolblue/product",
    methods: ["GET", "POST"],
    summary: "Coolblue Product",
    description:
      "Read one Coolblue product by article id or product URL, in the region of that shop.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product link, or the article number.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "Shop for a bare article number.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "coolblue-search",
    operation: "coolblue_search",
    path: "/v2/coolblue/search",
    methods: ["GET", "POST"],
    summary: "Coolblue Search",
    description:
      "Search Coolblue with a product keyword. Region defaults to Belgium. Also use nl or de. Page through product cards.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search words, or a Coolblue listing link.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, from 1.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "Shop, when query is words rather than a full link.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "copart-lot",
    operation: "copart_lot",
    path: "/v2/copart/lot",
    methods: ["GET", "POST"],
    summary: "Copart Lot",
    description:
      "Copart Lot API: retrieve structured auction lot data by lot number or URL. Specs, damage, bids, photos, yard location and sale status across regional Copart sites.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Copart lot number or full lot URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Regional Copart site when query is a lot number only. Defaults to US.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "copart-search",
    operation: "copart_search",
    path: "/v2/copart/search",
    methods: ["GET", "POST"],
    summary: "Copart Search",
    description:
      "Copart Search API: search auction lots by keyword or URL across Copart regional sites. Returns lot listings and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full Copart search URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Copart regional site when query is a keyword or lot number only. Defaults to US.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number (default: 1).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "costco-product",
    operation: "costco_product",
    path: "/v2/costco/product",
    methods: ["GET", "POST"],
    summary: "Costco Product",
    description:
      "Costco Product API: fetch full product page data from a product ID or URL across regional Costco sites. Returns pricing, availability, ratings, images and breadcrumbs via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Costco product ID or full product URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Regional Costco site. Accepts a region code (us, fr, ca, uk, …) or full host (www.costco.fr). Defaults to US (www.costco.com) when omitted.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "costco-search",
    operation: "costco_search",
    path: "/v2/costco/search",
    methods: ["GET", "POST"],
    summary: "Costco Search",
    description:
      "Costco Search API: search product listings by keyword or URL across 13 regional Costco sites. Returns prices, availability, review counts and pagination via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full regional search URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Regional Costco site. Accepts a region code (us, fr, ca, uk, …) or full host (www.costco.fr). Defaults to US (www.costco.com) when omitted.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number override. Uses currentPage (most regions) or page (UK) when rebuilding pagination URLs.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "crunchbase-company-info",
    operation: "crunchbase_company_info",
    path: "/v2/crunchbase/company/info",
    methods: ["GET", "POST"],
    summary: "Crunchbase Company Info",
    description:
      "Convert URLs into detailed Crunchbase profiles for immediate company insights.",
    params: [
      {
        name: "query",
        type: "string",
        required: false,
        description:
          "Search for a company by its name, permalink, or full Crunchbase URL.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Perform a reverse lookup by domain name to find the associated Crunchbase company profile.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "crunchbase-event",
    operation: "crunchbase_event",
    path: "/v2/crunchbase/event",
    methods: ["GET", "POST"],
    summary: "Crunchbase Event",
    description:
      "Retrieve detailed Crunchbase event profiles with speakers, sponsors, exhibitors, and press timelines.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Retrieve event data using its Crunchbase permalink or full URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "crunchbase-funding-round",
    operation: "crunchbase_funding_round",
    path: "/v2/crunchbase/funding_round",
    methods: ["GET", "POST"],
    summary: "Crunchbase Funding Round",
    description:
      "Retrieve full details of a specific Crunchbase funding round including investors and press timeline.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The permalink of the specific funding round to retrieve. This is the unique identifier found in the Crunchbase funding round URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "crunchbase-funding-rounds",
    operation: "crunchbase_funding_rounds",
    path: "/v2/crunchbase/funding_rounds",
    methods: ["GET", "POST"],
    summary: "Crunchbase Funding Rounds",
    description:
      "Monitor funding history and financial milestones of companies with Crunchbase data.",
    params: [
      {
        name: "days_since_announcement",
        type: "number",
        required: false,
        description: "Filter funding rounds announced within the last N days.",
        default: 1,
      },
      {
        name: "investment_type",
        type: "string",
        required: false,
        description: "Filter by funding round type. Accepted values:",
      },
      {
        name: "investor_identifiers",
        type: "string",
        required: false,
        description:
          "Filter rounds by a specific investor using their Crunchbase UUID.",
      },
      {
        name: "funded_organization_identifier",
        type: "string",
        required: false,
        description:
          "Filter rounds by a specific funded organization using their Crunchbase UUID.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "crunchbase-people-info",
    operation: "crunchbase_people_info",
    path: "/v2/crunchbase/people/info",
    methods: ["GET", "POST"],
    summary: "Crunchbase People Info",
    description:
      "Retrieve detailed Crunchbase profiles for individuals including career history, investments, and board positions.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search for a person by their name, Crunchbase permalink, or full Crunchbase profile URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "crunchbase-search",
    operation: "crunchbase_search",
    path: "/v2/crunchbase/search",
    methods: ["GET", "POST"],
    summary: "Crunchbase Search",
    description:
      "Search Crunchbase for companies and people by keyword and retrieve their profiles and Crunchbase identifiers.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The search keyword or phrase to query across Crunchbase. Searches both organizations and people.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "cultura-product",
    operation: "cultura_product",
    path: "/v2/cultura/product",
    methods: ["GET", "POST"],
    summary: "Cultura Product",
    description:
      "Read one Cultura product from its URL or SKU. You get price, EAN, seller, condition, and stock wording.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Link of the Cultura product page.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "cultura-search",
    operation: "cultura_search",
    path: "/v2/cultura/search",
    methods: ["GET", "POST"],
    summary: "Cultura Search",
    description:
      "Search Cultura by keyword and page through books, games, and culture products. Cards include title, price, availability, and the product link.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Words to search for on Cultura, or the search page link.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, starting at 1. For example, 2 returns the next page of results.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "darty-product",
    operation: "darty_product",
    path: "/v2/darty/product",
    methods: ["GET", "POST"],
    summary: "Darty Product",
    description:
      "Read one Darty product sheet from a product URL or a Darty product id. You get price, brand, availability, rating, and specifications.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product URL on www.darty.com. The path is under /nav/achat/ and ends in .html.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "darty-search",
    operation: "darty_search",
    path: "/v2/darty/search",
    methods: ["GET", "POST"],
    summary: "Darty Search",
    description:
      "Search Darty by keyword or search URL and page through the listing. Each card has title, price, brand, seller, and product link.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or a Darty search URL on www.darty.com.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number. Defaults to 1. Page 2 returns the next 30 products.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "datasets-linkedin-company",
    operation: "datasets_linkedin_company",
    path: "/v2/datasets/linkedin/company",
    methods: ["POST"],
    summary: "Dataset Linkedin Company",
    description:
      "Query the LinkedIn company dataset with Elasticsearch Query DSL. Filter by name, domain, industry, headcount, and country. POST-only, 1 credit per row returned.",
    params: [
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "decathlon-product",
    operation: "decathlon_product",
    path: "/v2/decathlon/product",
    methods: ["GET", "POST"],
    summary: "Decathlon Product",
    description:
      "Read one Decathlon product from a product URL, a product path, or a keyword. A keyword uses the first search hit. Set region when the query does not already name the shop.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product link, a /p/... or /products/... path, or a keyword. A keyword opens the first search hit. A search link returns 400.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Country shop when query is a keyword or a path. Default is fr. A full product link picks the shop.",
        default: "fr",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Set to true to get the raw page body in result.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "decathlon-search",
    operation: "decathlon_search",
    path: "/v2/decathlon/search",
    methods: ["GET", "POST"],
    summary: "Decathlon Search",
    description:
      "Search a Decathlon shop with a keyword or a search URL. Choose the country with region, or let a full link pick the shop, then page through titles, prices, and product links.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword, or a Decathlon search link.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Country shop. Default is fr. A full link in query picks the shop, and a conflicting region returns 400.",
        default: "fr",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number starting at 1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Set to true to get the raw HTML in result.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "digikey-product",
    operation: "digikey_product",
    path: "/v2/digikey/product",
    methods: ["GET", "POST"],
    summary: "DigiKey Product",
    description:
      "Get a DigiKey product page: part numbers, manufacturer, price tiers, stock, images, datasheet and specs via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full DigiKey product detail URL, or relative path.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "DigiKey country TLD when query is a relative path.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return rendered HTML as {"result": "..."} instead of JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "digikey-search",
    operation: "digikey_search",
    path: "/v2/digikey/search",
    methods: ["GET", "POST"],
    summary: "DigiKey Search",
    description:
      "Search DigiKey country sites by keyword or result/filter URL. Returns category branches or product listings with pagination via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword, DigiKey result/filter URL, or relative path.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "DigiKey country TLD when query is not a full URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return rendered HTML as {"result": "..."} instead of JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "doaj-article",
    operation: "doaj_article",
    path: "/v2/doaj/article",
    methods: ["GET", "POST"],
    summary: "DOAJ Article",
    description:
      "Fetch one DOAJ article by its id or by a doaj.org article URL.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Article id or a doaj.org/article URL. Example: 000004687a3a411cb466625281f2ceb0.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "doaj-journal",
    operation: "doaj_journal",
    path: "/v2/doaj/journal",
    methods: ["GET", "POST"],
    summary: "DOAJ Journal",
    description:
      "Fetch one DOAJ journal by ISSN, journal id, or a doaj.org toc URL.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Journal ISSN, journal id, or a doaj.org/toc URL. Example: 2747-173X.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "doaj-search",
    operation: "doaj_search",
    path: "/v2/doaj/search",
    methods: ["GET", "POST"],
    summary: "DOAJ Search",
    description:
      "Search DOAJ articles or journals. kind is article (default) or journal. Article ids and journal ISSNs are the detail keys.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Keyword or a doaj.org search URL. Example: climate. An article or journal URL returns 400.",
      },
      {
        name: "kind",
        type: "string",
        required: false,
        description:
          "Optional. article or journal. Example: journal. Defaults to article.",
        default: "article",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number from 1. Example: 2. Defaults to 1. Each page has 10 records.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "domain-dnsbl",
    operation: "domain_dnsbl",
    path: "/v2/domain/dnsbl",
    methods: ["GET", "POST"],
    summary: "Domain DNSBL",
    description:
      "Check if a domain or IP address is listed in DNS-based blacklists (DNSBL), with detailed provider-level detection and category information.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A domain name or IP address to check against DNS-based blacklists (DNSBL).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "domain-malicious",
    operation: "domain_malicious",
    path: "/v2/domain/malicious",
    methods: ["GET", "POST"],
    summary: "Domain Malicious",
    description:
      "Check if a domain or IP address has been flagged as malicious across multiple threat intelligence feeds, with source attribution.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A domain name or IP address to check for malicious activity across multiple threat intelligence sources.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "domain-whois",
    operation: "domain_whois",
    path: "/v2/domain/whois",
    methods: ["GET", "POST"],
    summary: "Domain Whois",
    description:
      "Retrieve WHOIS registration data for any domain, including registration dates, registrar details, name servers, and contact information.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A domain name for which you want to retrieve WHOIS registration information.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "domaincomau-property",
    operation: "domaincomau_property",
    path: "/v2/domaincomau/property",
    methods: ["GET", "POST"],
    summary: "Domain.com.au Property",
    description:
      "Read one Domain.com.au listing from its URL. The response is a flat object with price, address, agency, and photos.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Domain listing URL. The path ends with the listing id.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Optional. Default false.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "domaincomau-search",
    operation: "domaincomau_search",
    path: "/v2/domaincomau/search",
    methods: ["GET", "POST"],
    summary: "Domain.com.au Search",
    description:
      "Search Domain.com.au by suburb. mode is sale, rent, or sold. page starts at 1. Each card has a dollar price and a price label rebuilt from that amount.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Suburb with state and postcode, a location slug, or a Domain search URL.",
      },
      {
        name: "mode",
        type: "string",
        required: false,
        description: "sale, rent, or sold when query is a place.",
        default: "sale",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page from 1.",
        default: 1,
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Optional. Default false.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "duckduckgo-search",
    operation: "duckduckgo_search",
    path: "/v2/duckduckgo/search",
    methods: ["GET", "POST"],
    summary: "DuckDuckGo Search",
    description:
      "Query DuckDuckGo via API and retrieve structured organic results with region and language.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search query sent to DuckDuckGo Search.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number. Page 1 is the first page of results.",
        default: 1,
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description: "Country code, for example us, fr, gb, de, jp.",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description: "Language code, for example en, fr, de, ja, zh.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "ebay-product",
    operation: "ebay_product",
    path: "/v2/ebay/product",
    methods: ["GET", "POST"],
    summary: "eBay Product",
    description:
      "eBay Product API: one listing on a supported eBay site, by URL or item id (3 credits).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Item id, or an item URL on a supported eBay site.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return raw HTML.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "ebay-search",
    operation: "ebay_search",
    path: "/v2/ebay/search",
    methods: ["GET", "POST"],
    summary: "eBay Search",
    description:
      "eBay Search API: search listings on supported eBay sites. Returns price, seller, and pagination (3 credits).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword on www.ebay.com, or a search URL on a supported eBay site.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, sent as _pgn. Default 1 for a keyword. On a URL, the page already in the URL is kept when this is empty. Below 1 returns 400.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return raw HTML.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "elcorteingles-product",
    operation: "elcorteingles_product",
    path: "/v2/elcorteingles/product",
    methods: ["GET", "POST"],
    summary: "El Corte Inglés Product",
    description:
      "El Corte Inglés Product API. Fetch a full product page from elcorteingles.es by URL or product id. Returns pricing, stock, images and identifiers via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product URL or product id (A… / MP_…).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "elcorteingles-search",
    operation: "elcorteingles_search",
    path: "/v2/elcorteingles/search",
    methods: ["GET", "POST"],
    summary: "El Corte Inglés Search",
    description:
      "El Corte Inglés Search API. Search product listings on elcorteingles.es by keyword or URL. Returns prices, brands, images and pagination via webunlocker.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full El Corte Inglés search URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number. Overrides /search-nwx/{page}/ when present in the URL (default: from URL or 1).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "eleclerc-product",
    operation: "eleclerc_product",
    path: "/v2/eleclerc/product",
    methods: ["GET", "POST"],
    summary: "E.Leclerc Product",
    description:
      "Read one E.Leclerc product by EAN or product URL. Pass store_id to get that store's price and stock. Another store returns a different price and stock.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "E.Leclerc product EAN or product page URL.",
      },
      {
        name: "store_id",
        type: "string",
        required: false,
        description:
          "E.Leclerc store sign code. This selects that store's price and stock.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "eleclerc-search",
    operation: "eleclerc_search",
    path: "/v2/eleclerc/search",
    methods: ["GET", "POST"],
    summary: "E.Leclerc Search",
    description:
      "Search for products on E.Leclerc by keyword with optional store-specific filtering and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or phrase to query on E.Leclerc.",
      },
      {
        name: "store_id",
        type: "string",
        required: false,
        description: "ID of a specific E.Leclerc store to search in.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number for paginated results.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "eleclerc-suggest",
    operation: "eleclerc_suggest",
    path: "/v2/eleclerc/suggest",
    methods: ["GET", "POST"],
    summary: "E.Leclerc Suggest",
    description:
      "Get instant product autocomplete suggestions from E.Leclerc for a given keyword or EAN.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search term or EAN to get product suggestions for.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "email-analyzes",
    operation: "email_analyzes",
    path: "/v2/email/analyzes",
    methods: ["GET", "POST"],
    summary: "Email Analyzes",
    description:
      "Analyze a domain to retrieve its email infrastructure. Microsoft 365 and Google Workspace domains, SPF records, and DNS configurations.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The domain name you want to analyze for email infrastructure.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "email-finder",
    operation: "email_finder",
    path: "/v2/email/finder",
    methods: ["GET", "POST"],
    summary: "Email Finder",
    description:
      "Find verified professional email addresses by combining a person's full name with their company domain or company name.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full name of the person whose professional email address you want to find.",
      },
      {
        name: "company_domain",
        type: "string",
        required: false,
        description:
          "The company's domain name. Multiple formats are accepted:",
      },
      {
        name: "company_name",
        type: "string",
        required: false,
        description: "The company name of the person you are looking for.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "email-verify",
    operation: "email_verify",
    path: "/v2/email/verify",
    methods: ["GET", "POST"],
    summary: "Email Verify",
    description:
      "Verify whether an email address is valid and deliverable, returning a clear status to prevent bounces and maintain list hygiene.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "The email address you want to verify.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "europages-company",
    operation: "europages_company",
    path: "/v2/europages/company",
    methods: ["GET", "POST"],
    summary: "Europages Company",
    description:
      "Europages company profile with address, supplier type and the products listed on the page (1 credit).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Profile URL copied from a search card, or a slug.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Site when query is a slug. Same values as search. Default fr. Ignored when query is a URL.",
        default: "fr",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "europages-search",
    operation: "europages_search",
    path: "/v2/europages/search",
    methods: ["GET", "POST"],
    summary: "Europages Search",
    description:
      "Search Europages suppliers by keyword or category URL. Returns company cards and pagination (1 credit).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword, or a category / search URL on Europages.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Site of a keyword: fr (default), de, co.uk (en, uk, gb), es, it, nl, and the other Europages TLDs. Ignored when query is a URL. German uses /suche/.",
        default: "fr",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page from 1. Page 2 and after use /pg-N/. 30 companies per page.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "eventbrite-event",
    operation: "eventbrite_event",
    path: "/v2/eventbrite/event",
    methods: ["GET", "POST"],
    summary: "Eventbrite Event",
    description:
      "Get one Eventbrite event by detail URL or numeric id: venue, organizer, schedule, and description (1 credit).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Event detail URL or numeric id.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Country TLD when query is a bare id (fr, com, es, com.mx, …). Ignored if query is a full URL.",
        default: "fr",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "eventbrite-search",
    operation: "eventbrite_search",
    path: "/v2/eventbrite/search",
    methods: ["GET", "POST"],
    summary: "Eventbrite Search",
    description:
      "Search Eventbrite events by keyword or paste a city/category URL. Returns event cards and pagination (1 credit).",
    params: [
      {
        name: "query",
        type: "string",
        required: false,
        description:
          "Keyword, or paste a full Eventbrite city / category / search URL.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Eventbrite TLD when query is a keyword (fr, com, es, com.mx, co.uk, …). Ignored if query is a full URL.",
        default: "fr",
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "Location slug such as france--paris (keyword searches only).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "expedia-ad",
    operation: "expedia_ad",
    path: "/v2/expedia/ad",
    methods: ["GET", "POST"],
    summary: "Expedia Ad",
    description:
      "Fetch one Expedia hotel from its information URL: name, postal address, and amenity groups.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "An Expedia hotel information URL. The response is one flat hotel. hotel_id comes from .h{id}.Hotel-Information when that pattern is in the URL, and is null otherwise. A destination, a non-Expedia URL…",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "expedia-flight",
    operation: "expedia_flight",
    path: "/v2/expedia/flight",
    methods: ["GET", "POST"],
    summary: "Expedia Flight",
    description:
      "Search Expedia flights by airport route and dates, or by a flight search URL. Each offer includes the airline, times, stops, and displayed price.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A route or a full Expedia Flights-Search URL. Empty, a route without two airport codes, or a non-Expedia URL returns 400. A full URL is opened as given. price stays the label on the offer. pagination…",
      },
      {
        name: "departure_date",
        type: "string",
        required: false,
        description:
          "Departure as YYYY-MM-DD for a route. Omit it and the route uses 2026-11-15. A value that is not YYYY-MM-DD returns 400. Ignored when query is a full URL.",
      },
      {
        name: "return_date",
        type: "string",
        required: false,
        description:
          "Return date as YYYY-MM-DD. Omit it for a one-way trip. A value that is not YYYY-MM-DD returns 400. Ignored when query is a full URL.",
      },
      {
        name: "adults",
        type: "number",
        required: false,
        description:
          "Adult passengers for a route. Omit it and the request uses 1. Ignored when query is a full URL.",
      },
      {
        name: "cabin_class",
        type: "string",
        required: false,
        description:
          "Label copied onto every result as cabin_class. Omit it and each result uses economy. It does not add a cabin filter to the Expedia URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Host for a route. Omit it for www.expedia.com. Allowed: us, ca, uk, au, fr, de, es, it, nl, mx. Any other value returns 400. Ignored when query is a full URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "expedia-search",
    operation: "expedia_search",
    path: "/v2/expedia/search",
    methods: ["GET", "POST"],
    summary: "Expedia Search",
    description:
      "Execute a hotel search on Expedia using a direct search URL and receive structured hotel listings with prices, ratings, and availability.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A valid Expedia hotel search URL. Copy the URL directly from your Expedia search results page.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "fashionphile-product",
    operation: "fashionphile_product",
    path: "/v2/fashionphile/product",
    methods: ["GET", "POST"],
    summary: "Fashionphile Product",
    description:
      "Load one Fashionphile product from a handle or a product URL. Keywords and search URLs belong on the search endpoint.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product handle or a fashionphile.com product URL. The request reads products/{handle}.js and returns one flat product. price is the USD amount and price_display is that amount rebuilt as a dollar str…",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Default false. true replaces the product object with result, the raw Shopify JSON text.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "fashionphile-search",
    operation: "fashionphile_search",
    path: "/v2/fashionphile/search",
    methods: ["GET", "POST"],
    summary: "Fashionphile Search",
    description:
      "Search Fashionphile by keywords, a search URL, a collection URL, or a products.json URL. A product handle or product URL belongs on the product endpoint.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keywords, a Fashionphile search URL, a collection URL, or a products.json URL. Empty returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number starting at 1. Omit it for page 1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Default false. true replaces results and pagination with result, the raw Shopify JSON text.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "finder-chewy-products",
    operation: "finder_chewy_products",
    path: "/v2/finder/chewy-products",
    methods: ["GET", "POST"],
    summary: "Chewy Products Finder",
    description:
      "Find Chewy product URLs by product name, ID, or any combination of filters to use in product detail and rendering API calls.",
    params: [
      {
        name: "search",
        type: "string",
        required: false,
        description:
          "Free-text search across product titles and IDs. Optional if at least one filter is provided.",
      },
      {
        name: "query",
        type: "string",
        required: false,
        description: "Legacy alias of search. Kept for backward compatibility.",
      },
      {
        name: "id",
        type: "string",
        required: false,
        description:
          "Filter by one or several internal product IDs. Provide a comma-separated list to match multiple IDs.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Filter by website domain. Comma-separated values are accepted.",
      },
      {
        name: "filter",
        type: "string",
        required: false,
        description:
          "Raw filter expression for advanced filtering. Combined with the shorthand filters using AND.",
      },
      {
        name: "limit",
        type: "number",
        required: false,
        description:
          "Maximum number of results to return. Default is 10, maximum is 100.",
        default: 10,
      },
      {
        name: "offset",
        type: "number",
        required: false,
        description: "Number of results to skip for pagination. Default is 0.",
        default: 0,
      },
      {
        name: "sort",
        type: "string",
        required: false,
        description:
          "Sort the results. Provide one or several attributes with :asc or :desc, comma-separated.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to return. Defaults to all fields.",
      },
      {
        name: "count",
        type: "boolean",
        required: false,
        description:
          "When true, the response is wrapped in an object containing the total estimated count plus the hits: { count, hits }. When false or omitted, returns the raw hits array.",
        default: false,
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "finder-eleclerc-stores",
    operation: "finder_eleclerc_stores",
    path: "/v2/finder/eleclerc-stores",
    methods: ["GET", "POST"],
    summary: "Eleclerc Stores Finder",
    description:
      "Search Eleclerc stores by name or city to retrieve contact details, opening hours, and geolocation.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Filters stores based on a search string. The search is non-case-sensitive and returns all stores whose names contain the specified string.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "finder-google-countries",
    operation: "finder_google_countries",
    path: "/v2/finder/google-countries",
    methods: ["GET", "POST"],
    summary: "Google Countries Finder",
    description:
      "Search the list of Google-supported countries by name or country code to use in Google Search API requests.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Filters countries based on a search string. The search is non-case-sensitive and returns all countries whose names contain the specified string.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "finder-google-languages",
    operation: "finder_google_languages",
    path: "/v2/finder/google-languages",
    methods: ["GET", "POST"],
    summary: "Google Languages Finder",
    description:
      "Search the list of Google-supported languages by name to retrieve language codes for use in Google Search API requests.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Filters languages based on a search string. The search is non-case-sensitive and returns all languages whose names contain the specified string.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "finder-google-locations",
    operation: "finder_google_locations",
    path: "/v2/finder/google-locations",
    methods: ["GET", "POST"],
    summary: "Google Locations Finder",
    description:
      "Search Google-supported locations by name to retrieve location IDs and GPS coordinates for geo-targeted search API calls.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Restricts your search to locations that contain the supplied string.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "finder-leroymerlin-products",
    operation: "finder_leroymerlin_products",
    path: "/v2/finder/leroymerlin-products",
    methods: ["GET", "POST"],
    summary: "Leroy Merlin Products Finder",
    description:
      "Find Leroy Merlin product URLs by product name, ID, or any combination of filters to use in product detail and rendering API calls.",
    params: [
      {
        name: "search",
        type: "string",
        required: false,
        description:
          "Free-text search across product titles and IDs. Optional if at least one filter is provided.",
      },
      {
        name: "query",
        type: "string",
        required: false,
        description: "Legacy alias of search. Kept for backward compatibility.",
      },
      {
        name: "id",
        type: "string",
        required: false,
        description:
          "Filter by one or several internal product IDs. Provide a comma-separated list to match multiple IDs.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Filter by website domain. Comma-separated values are accepted.",
      },
      {
        name: "filter",
        type: "string",
        required: false,
        description:
          "Raw filter expression for advanced filtering. Combined with the shorthand filters using AND.",
      },
      {
        name: "limit",
        type: "number",
        required: false,
        description:
          "Maximum number of results to return. Default is 10, maximum is 100.",
        default: 10,
      },
      {
        name: "offset",
        type: "number",
        required: false,
        description: "Number of results to skip for pagination. Default is 0.",
        default: 0,
      },
      {
        name: "sort",
        type: "string",
        required: false,
        description:
          "Sort the results. Provide one or several attributes with :asc or :desc, comma-separated.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to return. Defaults to all fields.",
      },
      {
        name: "count",
        type: "boolean",
        required: false,
        description:
          "When true, the response is wrapped in an object containing the total estimated count plus the hits: { count, hits }. When false or omitted, returns the raw hits array.",
        default: false,
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "finder-leroymerlin-stores",
    operation: "finder_leroymerlin_stores",
    path: "/v2/finder/leroymerlin-stores",
    methods: ["GET", "POST"],
    summary: "Leroy Merlin Stores Finder",
    description:
      "Search Leroy Merlin stores by name, city or postal code to retrieve their store ID, slug, address and store locator URL.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Filters Leroy Merlin stores based on a search string. The search is non-case-sensitive and matches store names, cities, postal codes and store slugs.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "finder-linkedin-industries",
    operation: "finder_linkedin_industries",
    path: "/v2/finder/linkedin-industries",
    methods: ["GET", "POST"],
    summary: "LinkedIn Industries Finder",
    description:
      "Search LinkedIn industry taxonomy to retrieve industry IDs and hierarchies for use in LinkedIn API calls and data enrichment.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Restricts your search to industries that contain the supplied string.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "finder-mrbricolage-stores",
    operation: "finder_mrbricolage_stores",
    path: "/v2/finder/mrbricolage-stores",
    methods: ["GET", "POST"],
    summary: "Mr.Bricolage Stores Finder",
    description:
      "Search Mr.Bricolage stores by name, city or postal code to retrieve their store ID, slug, contact information and geolocation.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Filters Mr.Bricolage stores based on a search string. The search is non-case-sensitive and matches store names, cities and postal codes.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "fiverr-profile-info",
    operation: "fiverr_profile_info",
    path: "/v2/fiverr/profile/info",
    methods: ["GET", "POST"],
    summary: "Fiverr Profile Info",
    description:
      "Extract complete public profile data from any Fiverr seller, including gigs, ratings, reviews, skills, portfolio, and consultation pricing.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Fiverr profile URL of the seller you want to extract information from.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "fiverr-search",
    operation: "fiverr_search",
    path: "/v2/fiverr/search",
    methods: ["GET", "POST"],
    summary: "Fiverr Search",
    description:
      "Search Fiverr gigs using a direct search URL and receive paginated listings with seller information, gig titles, images, and seller levels.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A Fiverr search URL for gigs.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "fnac-product",
    operation: "fnac_product",
    path: "/v2/fnac/product",
    methods: ["GET", "POST"],
    summary: "Fnac Product",
    description:
      "Read one Fnac product from its URL or product id. You get the price, brand, EAN, seller, and rating.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product URL (/a{id} or /mp{id}) or the numeric Fnac id. A keyword or a search URL returns 400.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, returns the raw HTML instead of the parsed JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "fnac-search",
    operation: "fnac_search",
    path: "/v2/fnac/search",
    methods: ["GET", "POST"],
    summary: "Fnac Search",
    description:
      "Search Fnac for a keyword or a SearchResult URL. Each card has the product id, name, price, seller, and stock.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword or a Fnac SearchResult URL. A product URL returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, from 1. Default is 1. Page 2 is sent as PageIndex=2.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, returns the raw HTML instead of the parsed JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "fotocasa-ad",
    operation: "fotocasa_ad",
    path: "/v2/fotocasa/ad",
    methods: ["GET", "POST"],
    summary: "Fotocasa Property Ad",
    description:
      "Get a full Fotocasa listing by URL: price, features, coordinates, energy certificate, images, and agency (browser rendering, 2 credits).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Fotocasa ad URL (/comprar/ or /alquiler/, ending with /d).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "fotocasa-search",
    operation: "fotocasa_search",
    path: "/v2/fotocasa/search",
    methods: ["GET", "POST"],
    summary: "Fotocasa Property Search",
    description:
      "Search Fotocasa listings by city or search URL. Returns prices, rooms, area, coordinates, and agency data via browser rendering (2 credits).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "City name or full Fotocasa search URL.",
      },
      {
        name: "operation",
        type: "string",
        required: false,
        description: "Used when query is a city name (ignored for full URLs).",
        default: "buy",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number (1-based). Default: 1. Page 2 maps to /l/2.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "franchisedirect-franchise",
    operation: "franchisedirect_franchise",
    path: "/v2/franchisedirect/franchise",
    methods: ["GET", "POST"],
    summary: "Franchise Direct Franchise",
    description:
      "Read one Franchise Direct profile: cash requirement, franchise fee, investment range, and training.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. A Franchise Direct profile URL from search, or the same path beginning with /. A keyword or a listing URL returns 400.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "franchisedirect-search",
    operation: "franchisedirect_search",
    path: "/v2/franchisedirect/search",
    methods: ["GET", "POST"],
    summary: "Franchise Direct Search",
    description:
      "Search Franchise Direct listings by keyword or listing URL. Each card includes a USD cash figure and a numeric minimum.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. A keyword, or a Franchise Direct listing URL (search, directory, or category). A profile URL such as /coffee-franchises/coffeenow returns 400 on this endpoint. Send that URL to /v2/franchis…",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "fressnapf-product",
    operation: "fressnapf_product",
    path: "/v2/fressnapf/product",
    methods: ["GET", "POST"],
    summary: "Fressnapf Product",
    description:
      "Read a Fressnapf Germany product sheet from its URL. Returns sku, GTIN, euro price, unit price, and pack variants.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product URL on www.fressnapf.de.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, return the raw HTML. The string false stays false.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "fressnapf-search",
    operation: "fressnapf_search",
    path: "/v2/fressnapf/search",
    methods: ["GET", "POST"],
    summary: "Fressnapf Search",
    description:
      "Search Fressnapf Germany by keyword or category URL. Returns product cards with euro prices and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or a fressnapf.de search or category URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, starting at 1. Example: 2.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, return the raw HTML. The string false stays false.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "funda-property",
    operation: "funda_property",
    path: "/v2/funda/property",
    methods: ["GET", "POST"],
    summary: "Funda Property",
    description:
      "Read one Funda listing from its URL. You get the asking price, living area, and the feature groups.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Listing URL on www.funda.nl, under /detail/koop or /detail/huur.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "funda-search",
    operation: "funda_search",
    path: "/v2/funda/search",
    methods: ["GET", "POST"],
    summary: "Funda Search",
    description:
      "Search Funda by place. Set offering to koop for sale or huur for rent, then page the listings.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "City, area, or a Funda search URL.",
      },
      {
        name: "offering",
        type: "string",
        required: false,
        description: "Sale or rent when query is a place.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page from 1. Example: 2. Funda receives this as search_result=2. Page 1 and page 2 return different listings.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "g2-product-info",
    operation: "g2_product_info",
    path: "/v2/g2/product/info",
    methods: ["GET", "POST"],
    summary: "G2 Product Info",
    description:
      "Read a G2 product reviews page: rating, pricing, categories, alternatives, screenshots, and the reviews shown on the page.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product slug or a www.g2.com product URL.",
      },
      {
        name: "nps_score",
        type: "number",
        required: false,
        description:
          "Keep reviews of one star rating, from 1 to 5. Omit it to read the unfiltered reviews page.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Return the rendered HTML instead of the parsed product.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "github-user-info",
    operation: "github_user_info",
    path: "/v2/github/user/info",
    methods: ["GET", "POST"],
    summary: "GitHub User Info",
    description:
      "Retrieve public GitHub user profile data including bio, company, location, follower count, repositories, and associated email addresses.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A GitHub user identifier. Multiple formats are accepted:",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "glassdoor-company-info",
    operation: "glassdoor_company_info",
    path: "/v2/glassdoor/company/info",
    methods: ["GET", "POST"],
    summary: "Glassdoor Company Info",
    description:
      "Get one Glassdoor company profile by URL or employer id (2 credits).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Company URL or employer id.\\n\\nExample:\\n\\n 1692882",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description: "Glassdoor TLD when query is not a full URL.",
        default: "fr",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "glassdoor-company-search",
    operation: "glassdoor_company_search",
    path: "/v2/glassdoor/company/search",
    methods: ["GET", "POST"],
    summary: "Glassdoor Company Search",
    description:
      "Search Glassdoor employers by keyword across country sites (2 credits).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Employer keyword, or a full Glassdoor autocomplete URL.\\n\\nExample:\\n\\n airbus",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description: "Glassdoor TLD (fr, com, co.uk, …).",
        default: "fr",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "glassdoor-job-info",
    operation: "glassdoor_job_info",
    path: "/v2/glassdoor/job/info",
    methods: ["GET", "POST"],
    summary: "Glassdoor Job Info",
    description: "Get one Glassdoor job listing by URL or jl id (2 credits).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Job listing URL or jl id.\\n\\nExample:\\n\\n 1010283388161",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description: "Glassdoor TLD when query is not a full URL.",
        default: "fr",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "glassdoor-job-search",
    operation: "glassdoor_job_search",
    path: "/v2/glassdoor/job/search",
    methods: ["GET", "POST"],
    summary: "Glassdoor Job Search",
    description:
      "Search Glassdoor jobs by keyword or SEO URL, with domain and filters (2 credits).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or full Glassdoor job search URL.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description: "Glassdoor TLD when query is not a full URL.",
        default: "fr",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number.",
      },
      {
        name: "sort_by",
        type: "string",
        required: false,
        description: "Glassdoor sortBy value (e.g. date_desc).",
      },
      {
        name: "remote",
        type: "boolean",
        required: false,
        description: "When true, set remoteWorkType=1.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "goodreads-book",
    operation: "goodreads_book",
    path: "/v2/goodreads/book",
    methods: ["GET", "POST"],
    summary: "Goodreads Book",
    description:
      "Read one Goodreads book by the numeric id from search, such as 44767458 for Dune.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. The numeric Goodreads book id from search, or a /book/show/ URL. A title is not accepted.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "goodreads-search",
    operation: "goodreads_search",
    path: "/v2/goodreads/search",
    methods: ["GET", "POST"],
    summary: "Goodreads Search",
    description:
      "Search Goodreads books by keyword. pagination.next is a Goodreads search URL for the following page.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. A book keyword, or a Goodreads search URL (the path contains /search or the query contains q=).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number, starting at 1. Omitted or blank uses page 1. A value below 1 returns 400. When query is already a Goodreads search URL, this number replaces the page parameter in that URL.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "google-images",
    operation: "google_images",
    path: "/v2/google/images",
    methods: ["GET", "POST"],
    summary: "Google Images",
    description:
      "Google Images Scraper API – bringing the power of visual search to your fingertips.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "The image search query to execute on Google Images.",
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
        default: "us",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
        default: "en",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number for pagination. Images are returned in batches of 100 per page.",
        default: 1,
      },
      {
        name: "safe",
        type: "string",
        required: false,
        description:
          "Adult content filter. active enables Google SafeSearch; off disables it. Omit to use Google default.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "google-jobs",
    operation: "google_jobs",
    path: "/v2/google/jobs",
    methods: ["GET", "POST"],
    summary: "Google Jobs",
    description:
      "Extract job listings from Google Careers for enhanced recruitment and market analysis.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Job search term or keyword for querying Google job listings.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "google-maps",
    operation: "google_maps",
    path: "/v2/google/maps",
    methods: ["GET", "POST"],
    summary: "Google Maps",
    description:
      "Extract comprehensive company data from Google Maps for enhanced business insights.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Business name or keyword to search for relevant data.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "google-news",
    operation: "google_news",
    path: "/v2/google/news",
    methods: ["GET", "POST"],
    summary: "Google News",
    description:
      "Extract real-time news articles from Google News with advanced filtering by topic, location, language, and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The news search query to execute on Google News. Supports standard Google search operators.",
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "City or region from which the news search should originate. Simulates a search performed from the specified location.",
      },
      {
        name: "uule",
        type: "string",
        required: false,
        description:
          "Google-encoded location string for precise geographic targeting. Use this instead of location when you need exact control.",
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
        default: "us",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
        default: "en",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number of news results to retrieve.",
        default: 1,
      },
      {
        name: "num",
        type: "number",
        required: false,
        description: "Maximum number of results to return per page.",
        default: 10,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "google-search",
    operation: "google_search",
    path: "/v2/google/search",
    methods: ["GET", "POST"],
    summary: "Google Search",
    description:
      "Scrape real-time Google search results with organic listings, knowledge graph, related searches, and advanced filters.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The search query to execute on Google. Supports all standard Google search operators.",
      },
      {
        name: "tbs",
        type: "string",
        required: false,
        description:
          "Advanced time-range and filter string for Google Search. Used to restrict results by recency.",
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "City or region from which the search should originate. Simulates a real user's search from the specified location.",
      },
      {
        name: "uule",
        type: "string",
        required: false,
        description:
          "Google-encoded location string for precise geographic targeting.",
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
        default: "us",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
        default: "en",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number of search results to retrieve.",
        default: 1,
      },
      {
        name: "num",
        type: "number",
        required: false,
        description:
          "Maximum number of results to return per page (e.g. 10, 40, 100).",
        default: 10,
      },
      {
        name: "safe",
        type: "string",
        required: false,
        description:
          "Adult content filter. active enables Google SafeSearch; off disables it. Omit to use Google default.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "google-search-ai",
    operation: "google_search_ai",
    path: "/v2/google/search/ai",
    methods: ["GET", "POST"],
    summary: "Google AI Mode",
    description:
      "Scrape real-time Google AI Mode answers: text_blocks, references, and shopping_results.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The question or search query to send to Google AI Mode. Natural-language questions work best; advanced operators are also accepted.",
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "City or region from which the AI Mode search should originate. Simulates a real user searching from that location.",
      },
      {
        name: "uule",
        type: "string",
        required: false,
        description:
          "Google-encoded location string for precise geographic targeting. Mutually exclusive with location.",
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
        default: "us",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
        default: "en",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "google-search-autocomplete",
    operation: "google_search_autocomplete",
    path: "/v2/google/search/autocomplete",
    methods: ["GET", "POST"],
    summary: "Google Search Autocomplete",
    description:
      "Retrieve real-time Google Search autocomplete suggestions for any query, with support for language and country localization.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The partial or complete search query for which you want to retrieve autocomplete suggestions from Google.",
      },
      {
        name: "cp",
        type: "number",
        required: false,
        description:
          "Cursor position in the query string where autocomplete suggestions should be generated. Determines which part of the query is being completed.",
        default: 0,
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
        default: "us",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
        default: "en",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "google-shopping",
    operation: "google_shopping",
    path: "/v2/google/shopping",
    methods: ["GET", "POST"],
    summary: "Google Shopping",
    description:
      "Search Google Shopping and retrieve structured product listings with prices, ratings, merchants, and product IDs.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product search query on Google Shopping. Use a product name, brand, or category.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number of Shopping results. Each page returns about 20 products. There is no num parameter.",
        default: 1,
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "City or region used to localize Shopping results. Simulates a search from that location and generates the UULE parameter automatically.",
      },
      {
        name: "uule",
        type: "string",
        required: false,
        description:
          "Google-encoded location string (UULE) for precise geo-targeting. Use location instead if you do not already have an encoded value.",
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
        default: "us",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
        default: "en",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "safe",
        type: "string",
        required: false,
        description:
          "Adult content filter. active enables Google SafeSearch; off disables it. Omit to use Google default.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "google-videos",
    operation: "google_videos",
    path: "/v2/google/videos",
    methods: ["GET", "POST"],
    summary: "Google Videos",
    description:
      "Scrape video results from Google Videos search including YouTube, Reddit, and other video platforms, with location and language support.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The video search query to execute on Google Videos. Supports standard Google search operators.",
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "City or region from which the video search should originate.",
      },
      {
        name: "uule",
        type: "string",
        required: false,
        description:
          "Google-encoded location string for precise geographic targeting.",
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
        default: "us",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
        default: "en",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number of video results to retrieve.",
        default: 1,
      },
      {
        name: "num",
        type: "number",
        required: false,
        description: "Maximum number of video results to return per page.",
        default: 10,
      },
      {
        name: "safe",
        type: "string",
        required: false,
        description:
          "Adult content filter. active enables Google SafeSearch; off disables it. Omit to use Google default.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "googleadstransparency-ad",
    operation: "googleadstransparency_ad",
    path: "/v2/googleadstransparency/ad",
    methods: ["GET", "POST"],
    summary: "Google Ads Transparency Ad",
    description:
      "Get one Google Ads Transparency creative by URL: dates, impressions, platforms, regions, and the text read from the preview image (2 credits).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Creative URL from search.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "ISO alpha-2. The matching region is returned first.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "googleadstransparency-search",
    operation: "googleadstransparency_search",
    path: "/v2/googleadstransparency/search",
    methods: ["GET", "POST"],
    summary: "Google Ads Transparency Search",
    description:
      "Search the Google Ads Transparency Center by domain, advertiser, region, format, platform, and date. Returns creative cards and pagination (2 credits).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Domain name, advertiser name, advertiser id, or a full Ads Transparency URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Country. ISO alpha-2 (FR), anywhere, or a Transparency region code (2250 for France, 250 is also accepted).",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description: "Domain filter. Used when query is not already a domain.",
      },
      {
        name: "advertiser_id",
        type: "string",
        required: false,
        description: "Advertiser id, AR followed by digits.",
      },
      {
        name: "format",
        type: "string",
        required: false,
        description: "Creative format.",
      },
      {
        name: "platform",
        type: "string",
        required: false,
        description: "Comma-separated surfaces.",
      },
      {
        name: "preset_date",
        type: "string",
        required: false,
        description: "Relative window.",
      },
      {
        name: "start_date",
        type: "string",
        required: false,
        description: "Inclusive start date, YYYY-MM-DD or YYYYMMDD.",
      },
      {
        name: "end_date",
        type: "string",
        required: false,
        description:
          "Inclusive end date, YYYY-MM-DD or YYYYMMDD. A single day uses the same value as start_date.",
      },
      {
        name: "topic",
        type: "string",
        required: false,
        description: "Ad topic. Default: commercial.",
        default: "commercial",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, from 1 to 20. Default: 1.",
        default: 1,
      },
      {
        name: "per_page",
        type: "number",
        required: false,
        description: "Page size, from 1 to 100. Default: 40.",
        default: 40,
      },
      {
        name: "cursor",
        type: "string",
        required: false,
        description: "Opaque cursor copied from pagination.next.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "grainger-product",
    operation: "grainger_product",
    path: "/v2/grainger/product",
    methods: ["GET", "POST"],
    summary: "Grainger Product",
    description:
      "Get a Grainger US or Canada product page: SKU, brand, price, images, description and specs via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "SKU, full Grainger product URL, or relative /product/... path.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Grainger country when query is not a full URL (default: com).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return rendered HTML as {"result": "..."} instead of JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "grainger-search",
    operation: "grainger_search",
    path: "/v2/grainger/search",
    methods: ["GET", "POST"],
    summary: "Grainger Search",
    description:
      "Search Grainger US or Canada by keyword, category URL or SKU. Returns product listings, category branches and suggestions via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword, full Grainger search/category URL, category path, or SKU.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Grainger country when query is not a full URL (default: com).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return rendered HTML as {"result": "..."} instead of JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "greenhouse-job",
    operation: "greenhouse_job",
    path: "/v2/greenhouse/job",
    methods: ["GET", "POST"],
    summary: "Greenhouse Job",
    description:
      "Fetch one Greenhouse job by board/id, such as discord/8806482002, or by a job-boards.greenhouse.io job URL.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. board/id or a job URL. Example: discord/8806482002 or https://job-boards.greenhouse.io/discord/jobs/8806482002.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "greenhouse-search",
    operation: "greenhouse_search",
    path: "/v2/greenhouse/search",
    methods: ["GET", "POST"],
    summary: "Greenhouse Search",
    description:
      "List jobs on a Greenhouse board. query is the board token, such as discord. keyword filters title and location.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Board token or a job-boards.greenhouse.io board URL. Example: discord. A job URL returns 400.",
      },
      {
        name: "keyword",
        type: "string",
        required: false,
        description:
          "Optional. Case-insensitive filter on title and location. Example: policy. Omit it to list the whole board.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number from 1. Example: 2. Defaults to 1. Page size is 20.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "gsaelibrary-contract",
    operation: "gsaelibrary_contract",
    path: "/v2/gsaelibrary/contract",
    methods: ["GET", "POST"],
    summary: "GSA eLibrary Contract",
    description:
      "Read one GSA eLibrary contractor record from the contract URL returned by search.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. The contractorInfo.do URL from a search contract row. A contract number is also accepted, but GS-07F-0239T alone currently returns 404 because GSA needs the contractor name that search incl…",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "gsaelibrary-search",
    operation: "gsaelibrary_search",
    path: "/v2/gsaelibrary/search",
    methods: ["GET", "POST"],
    summary: "GSA eLibrary Search",
    description:
      "Search GSA eLibrary for schedule, SIN, and contract rows by keyword or by a full search URL.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. A keyword, or a full search URL on gsaelibrary.gsa.gov. The URL must contain searchResults.do or searchText=.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "homestra-ad",
    operation: "homestra_ad",
    path: "/v2/homestra/ad",
    methods: ["GET", "POST"],
    summary: "Homestra Ad",
    description:
      "Retrieve detailed property listing data from Homestra, including price, size, location, features, photos, and nearby properties.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A Homestra property URL or slug.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "homestra-search",
    operation: "homestra_search",
    path: "/v2/homestra/search",
    methods: ["GET", "POST"],
    summary: "Homestra Search",
    description:
      "Search Homestra property listings using a direct search URL with filters, returning structured results with prices, sizes, locations, and photos.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A valid Homestra search URL with optional filters.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "huggingface-model",
    operation: "huggingface_model",
    path: "/v2/huggingface/model",
    methods: ["GET", "POST"],
    summary: "Hugging Face Model",
    description:
      "Read one public Hugging Face model by an id such as google-bert/bert-base-uncased.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. A public model id (owner/name) or a huggingface.co model URL. Reserved site paths such as models, datasets, or spaces return 400.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "huggingface-search",
    operation: "huggingface_search",
    path: "/v2/huggingface/search",
    methods: ["GET", "POST"],
    summary: "Hugging Face Search",
    description:
      "Search the public Hugging Face models API by keyword and follow pagination.next to the next cursor page.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. A model keyword, a huggingface.co/models URL, or the full pagination.next cursor URL from a previous page.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "idealista-property",
    operation: "idealista_property",
    path: "/v2/idealista/property",
    methods: ["GET", "POST"],
    summary: "Idealista Property",
    description:
      "Extract full property details from an Idealista listing URL, including price, specs, photos by room, features, energy rating, and advertiser data.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Idealista property detail URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "idealista-provinces",
    operation: "idealista_provinces",
    path: "/v2/idealista/provinces",
    methods: ["GET", "POST"],
    summary: "Idealista Provinces",
    description:
      "List the 50 Spanish provinces Idealista shows for homes for sale. Each row includes the sale search URL to pass as query to Idealista Search. Madrid is madrid-provincia.",
    params: [
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "idealista-search",
    operation: "idealista_search",
    path: "/v2/idealista/search",
    methods: ["GET", "POST"],
    summary: "Idealista Search",
    description:
      "Search Idealista listings from a search URL and retrieve prices, specs, photos, agency info, and pagination. Pass a province URL from /v2/idealista/provinces (results[].url) as query. Madrid is `https://www.idealista.com/venta-vivien…",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Idealista search results URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "idealo-product",
    operation: "idealo_product",
    path: "/v2/idealo/product",
    methods: ["GET", "POST"],
    summary: "Idealo Product",
    description:
      "Get an Idealo product from Spain, France, or Germany. URL or product id. Offers, shipping, specs, and images via WebUnlocker (3 credits).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Idealo product URL, or a numeric product id.",
      },
      {
        name: "country",
        type: "string",
        required: false,
        description: "Region when query is a numeric product id.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "idealo-search",
    operation: "idealo_search",
    path: "/v2/idealo/search",
    methods: ["GET", "POST"],
    summary: "Idealo Search",
    description:
      "Search Idealo Spain, France, and Germany. Keyword or search URL. Prices, shipping, ratings, and pagination via WebUnlocker (3 credits).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword or full Idealo search URL for Spain, France, or Germany.",
      },
      {
        name: "country",
        type: "string",
        required: false,
        description: "Region when query is a keyword.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Search page. 2 appends ?page=2.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "ikea-product",
    operation: "ikea_product",
    path: "/v2/ikea/product",
    methods: ["GET", "POST"],
    summary: "IKEA Product",
    description:
      "Extract full IKEA product details from a product URL, including price, gallery, variants, dimensions, and breadcrumb.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full IKEA product page URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "ikea-search",
    operation: "ikea_search",
    path: "/v2/ikea/search",
    methods: ["GET", "POST"],
    summary: "IKEA Search",
    description:
      "Search IKEA products from a search URL and retrieve prices, ratings, dimensions, images, and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full IKEA search URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "immobilienscout24-property",
    operation: "immobilienscout24_property",
    path: "/v2/immobilienscout24/property",
    methods: ["GET", "POST"],
    summary: "ImmobilienScout24 Property",
    description:
      "Read one ImmobilienScout24 expose by URL or numeric id. You get cold rent or purchase price, address, and area.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "The expose id, or the expose page URL.",
        default: "168052908",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, return the raw HTML in result instead of the parsed expose.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "immobilienscout24-search",
    operation: "immobilienscout24_search",
    path: "/v2/immobilienscout24/search",
    methods: ["GET", "POST"],
    summary: "ImmobilienScout24 Search",
    description:
      "Search ImmobilienScout24 by region and property type. real_estate_type covers rent, buy, house, and land. Page with pagenumber.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Where to search.",
        default: "berlin/berlin",
      },
      {
        name: "real_estate_type",
        type: "string",
        required: false,
        description: "Rent or buy.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, starting at 1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, return the raw HTML in result instead of the parsed JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "immoscout24ch-search",
    operation: "immoscout24ch_search",
    path: "/v2/immoscout24ch/search",
    methods: ["GET", "POST"],
    summary: "ImmoScout24 Switzerland Search",
    description:
      "Search ImmoScout24.ch listings by city or search URL and retrieve the CHF price, rooms, living area, and address. Property pages are not available.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Swiss city or a full ImmoScout24.ch search URL.",
      },
      {
        name: "offer_type",
        type: "string",
        required: false,
        description: "rent or buy.",
      },
      {
        name: "property_type",
        type: "string",
        required: false,
        description: "apartment, house, or all.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page from 1.",
        default: 1,
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Optional. Default false.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "immowelt-property",
    operation: "immowelt_property",
    path: "/v2/immowelt/property",
    methods: ["GET", "POST"],
    summary: "Immowelt Property",
    description:
      "Extract full property details from an Immowelt listing URL, including price, specs, photo gallery, energy certificate, location, and contact data.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Immowelt property detail URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "immowelt-search",
    operation: "immowelt_search",
    path: "/v2/immowelt/search",
    methods: ["GET", "POST"],
    summary: "Immowelt Search",
    description:
      "Search Immowelt listings from a search URL and retrieve prices, specs, photos, agency info, and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Immowelt search URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "imoveisweb-property",
    operation: "imoveisweb_property",
    path: "/v2/imoveisweb/property",
    methods: ["GET", "POST"],
    summary: "ImoveisWeb Property",
    description:
      "Read one Imobiliária Aquários listing from its imoveisweb.com.br URL. price_display is rebuilt from the asking amount.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Listing URL from search.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Optional. Default false.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "imoveisweb-search",
    operation: "imoveisweb_search",
    path: "/v2/imoveisweb/search",
    methods: ["GET", "POST"],
    summary: "ImoveisWeb Search",
    description:
      "Search the Imobiliária Aquários catalog on imoveisweb.com.br. Pass a catalog name such as casas. price_display is rebuilt from the asking amount.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Catalog name or an ImoveisWeb results URL. This is Imobiliária Aquários, not ZonaProp.",
      },
      {
        name: "property_type",
        type: "string",
        required: false,
        description:
          "Optional catalog when query is not already a catalog name.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page from 1.",
        default: 1,
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Optional. Default false.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "indeed-company-info",
    operation: "indeed_company_info",
    path: "/v2/indeed/company/info",
    methods: ["GET", "POST"],
    summary: "Indeed Company Info",
    description:
      "Indeed Company Info API. Full employer profile by slug or URL. Browser rendering returns headcount, revenue, industry and FAQ or review blocks.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Indeed company slug or full /cmp/ URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML as {\\"result\\": \\"...\\"} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "indeed-company-search",
    operation: "indeed_company_search",
    path: "/v2/indeed/company/search",
    methods: ["GET", "POST"],
    summary: "Indeed Company Search",
    description:
      "Indeed Company Search API. Search fr.indeed.com employer profiles by keyword or URL. Browser rendering returns ratings, industry and profile links.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Company keyword or full Indeed companies search URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML as {\\"result\\": \\"...\\"} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "indeed-job-info",
    operation: "indeed_job_info",
    path: "/v2/indeed/job/info",
    methods: ["GET", "POST"],
    summary: "Indeed Job Info",
    description:
      "Indeed Job Info API. Fetch a full job posting by viewjob URL, sponsored click URL or job key. Browser rendering returns description and structured salary.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Indeed job URL, sponsored SERP click URL or 16-char jk job key.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML as {\\"result\\": \\"...\\"} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "indeed-job-salary",
    operation: "indeed_job_salary",
    path: "/v2/indeed/job/salary",
    methods: ["GET", "POST"],
    summary: "Indeed Job Salary",
    description:
      "Indeed Job Salary API. Career salary aggregates by job title slug or URL. Browser rendering returns median, percentiles and top paying cities.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Career salary slug, full /career/.../salaries URL or slug|location pair.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML as {\\"result\\": \\"...\\"} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "indeed-job-search",
    operation: "indeed_job_search",
    path: "/v2/indeed/job/search",
    methods: ["GET", "POST"],
    summary: "Indeed Job Search",
    description:
      "Indeed Job Search API. Search fr.indeed.com job listings by keyword or URL. Browser rendering returns cards with salary snippets and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword, Indeed /jobs URL or SEO search URL on fr.indeed.com (default domain).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "1-based page number (10 results per page). Default: 1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML as {\\"result\\": \\"...\\"} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "inet-product",
    operation: "inet_product",
    path: "/v2/inet/product",
    methods: ["GET", "POST"],
    summary: "Inet Product",
    description:
      "Read one Inet.se product by article number or URL, including SEK price, specs, and warehouse stock.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Article number or product URL. Example: 4306287. A search link returns 400.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Set to true to get the raw HTML in result.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "inet-search",
    operation: "inet_search",
    path: "/v2/inet/search",
    methods: ["GET", "POST"],
    summary: "Inet Search",
    description:
      "Search Inet.se by keyword or category. Prices are inc-VAT SEK, with the next page URL when more results exist.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "What to look for. A word such as ssd, or an Inet search or category link. A product link returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, starting at 1. Page 2 uses page=2.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Set to true to get the raw HTML in result.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "instagram-post-info",
    operation: "instagram_post_info",
    path: "/v2/instagram/post/info",
    methods: ["GET", "POST"],
    summary: "Instagram Post Info",
    description:
      "Monitor competitors and market trends by scraping Instagram posts for valuable data.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The Instagram post or reel to retrieve. Accepts a full URL or a shortcode.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "instagram-user-info",
    operation: "instagram_user_info",
    path: "/v2/instagram/user/info",
    methods: ["GET", "POST"],
    summary: "Instagram User Info",
    description:
      "Gather user insights efficiently from Instagram for targeted marketing strategies.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The Instagram user to look up. Accepts a full profile URL or a username.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "intermarche-product",
    operation: "intermarche_product",
    path: "/v2/intermarche/product",
    methods: ["GET", "POST"],
    summary: "Intermarché Product",
    description:
      "Get an Intermarché product sheet for a store (shop_id). Try an EAN or product URL with shop_id=11301. 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Intermarché product URL, or an EAN barcode.",
      },
      {
        name: "shop_id",
        type: "string",
        required: true,
        description:
          "Intermarché store id. Resolve a city with the [Stores Finder](https://www.piloterr.com/library/finder-intermarche-stores) (for example query=Paris).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "intermarche-search",
    operation: "intermarche_search",
    path: "/v2/intermarche/search",
    methods: ["GET", "POST"],
    summary: "Intermarché Search",
    description:
      "Search Intermarché products for a store (shop_id). Try query=lait and shop_id=11301. 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full Intermarché search URL.",
      },
      {
        name: "shop_id",
        type: "string",
        required: true,
        description:
          "Intermarché store id. Resolve a city with the [Stores Finder](https://www.piloterr.com/library/finder-intermarche-stores) (for example query=Paris).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number starting at 1. Use pagination.total_pages from a previous response to iterate.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "intersport-product",
    operation: "intersport_product",
    path: "/v2/intersport/product",
    methods: ["GET", "POST"],
    summary: "Intersport Product",
    description:
      "Read one Intersport product from its URL. You get price, brand, and the product details.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product URL on intersport.fr, or a root-relative path ending in -p-{id}.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, returns the raw HTML instead of the parsed JSON. The response shape is {"result": "<html>..."}. Default false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "intersport-search",
    operation: "intersport_search",
    path: "/v2/intersport/search",
    methods: ["GET", "POST"],
    summary: "Intersport Search",
    description:
      "Search Intersport by keyword and page the sports grid. Cards include title, price, and product link.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword or an intersport.fr listing URL. A product URL returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, from 1. Default is 1. Intersport's page query is zero-based, so page 2 is sent as page=1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, returns the raw HTML instead of the parsed JSON. The response shape is {"result": "<html>..."}. Default false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "jamesedition-property",
    operation: "jamesedition_property",
    path: "/v2/jamesedition/property",
    methods: ["GET", "POST"],
    summary: "JamesEdition Property",
    description: "Read one JamesEdition listing from its URL.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. JamesEdition listing URL, for example https://www.jamesedition.com/real_estate/munich-germany/alpine-panorama-above-lake-starnberg-new-build-project-near-munich-17793477. A keyword is rejec…",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "jamesedition-search",
    operation: "jamesedition_search",
    path: "/v2/jamesedition/search",
    methods: ["GET", "POST"],
    summary: "JamesEdition Search",
    description:
      "Search JamesEdition luxury homes by keyword or by a results URL.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Keyword, for example villa, or a JamesEdition results URL such as https://www.jamesedition.com/real_estate/france. A single listing URL is rejected.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number starting at 1. Example: 2. Omitted means page 1. A page already present in a results URL is kept when this is omitted or 1.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "jobs",
    operation: "jobs",
    path: "/v1/jobs/{id}",
    methods: ["GET"],
    summary: "Jobs",
    description:
      "Poll the status, progress (0–100) and result of a job started with is_async=true. Polling is free. Poll until status is terminal: CompletedJob, Error, NotFound or BadRequest.",
    params: [
      {
        name: "id",
        type: "string",
        required: true,
        description:
          "The job_id returned by an endpoint called with is_async=true.",
      },
    ],
  },
  {
    command: "kick-user-info",
    operation: "kick_user_info",
    path: "/v2/kick/user/info",
    methods: ["GET", "POST"],
    summary: "Kick User Info",
    description:
      "Retrieve complete public channel data from Kick including streamer profile, follower count, live status, and recent categories.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The Kick channel to look up. Accepts a full channel URL or a username/slug.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "kijiji-ad",
    operation: "kijiji_ad",
    path: "/v2/kijiji/ad",
    methods: ["GET", "POST"],
    summary: "Kijiji Ad",
    description:
      "Read one Kijiji ad from its id or URL. You get the asking price, the title, and the city.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Kijiji listing URL or the numeric listing id.",
      },
      {
        name: "language",
        type: "string",
        required: false,
        description:
          "Locale sent to Kijiji as the siteLocale cookie. en sets en-CA and prints $20. fr sets fr-CA and prints 20 $ on the same ad.",
        default: "en",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "kijiji-search",
    operation: "kijiji_search",
    path: "/v2/kijiji/search",
    methods: ["GET", "POST"],
    summary: "Kijiji Search",
    description:
      "Search Kijiji with a results URL or a city and category. Language can be English or French. Page through classified ads.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or full Kijiji results URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Results page, starting at 1. Page 2 of the City of Toronto bikes search returns a different set of listing ids. When page stays at 1, a page-N segment already present in the URL is kept.",
      },
      {
        name: "language",
        type: "string",
        required: false,
        description:
          "Locale sent to Kijiji as the siteLocale cookie. en sets en-CA. fr sets fr-CA. French cards print prices like 10,00 $.",
        default: "en",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "kroger-product",
    operation: "kroger_product",
    path: "/v2/kroger/product",
    methods: ["GET", "POST"],
    summary: "Kroger Product",
    description:
      "Read one Kroger product by UPC. The sheet uses the same default store as search. You get the shelf price and the previous price when Kroger shows one.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Kroger product URL or UPC.",
      },
      {
        name: "location_id",
        type: "string",
        required: false,
        description:
          "Ignored. Prices stay on the default Rolla store, 02100537 (Kroger, 605 W 4th St, Rolla, MO 65401). The response location_id is the store that was actually priced.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "kroger-search",
    operation: "kroger_search",
    path: "/v2/kroger/search",
    methods: ["GET", "POST"],
    summary: "Kroger Search",
    description:
      "Search Kroger groceries by keyword and page the results. Prices come from the default pickup store returned in the response. A location id you pass is not applied.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or a full Kroger search URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, 1-based.",
      },
      {
        name: "location_id",
        type: "string",
        required: false,
        description:
          "Ignored. Prices stay on the default Rolla store, 02100537 (Kroger, 605 W 4th St, Rolla, MO 65401). The response location_id is the store that was actually priced.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "lamudi-ad",
    operation: "lamudi_ad",
    path: "/v2/lamudi/ad",
    methods: ["GET", "POST"],
    summary: "Lamudi Ad",
    description:
      "Get a full Lamudi listing by URL: price, area, amenities, coordinates, images, and agent (browser rendering, 2 credits).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Lamudi listing URL. Accepts lamudi.com.ph (/property/) and lamudi.co.id (/properti/).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "lamudi-search",
    operation: "lamudi_search",
    path: "/v2/lamudi/search",
    methods: ["GET", "POST"],
    summary: "Lamudi Search",
    description:
      "Search Lamudi Philippines and Indonesia listings. Pass a search URL in query, or use location and filters. Prices, area, rooms, tags, and pagination via browser rendering (2 credits).",
    params: [
      {
        name: "query",
        type: "string",
        required: false,
        description:
          "Full Lamudi search URL. Used first when set. Location and path filters are ignored.",
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "City or district. Used when query is empty. Builds a Philippines URL (lamudi.com.ph). For Indonesia, pass a search URL in query.",
      },
      {
        name: "operation",
        type: "string",
        required: false,
        description: "Transaction type. Used when query is empty.",
        default: "sale",
      },
      {
        name: "property_type",
        type: "string",
        required: false,
        description:
          "Property type. Used when query is empty. Maps to Lamudi slugs (condominium → /condo/, land → /lot/).",
      },
      {
        name: "min_price",
        type: "number",
        required: false,
        description: "Minimum asking price in PHP or IDR.",
      },
      {
        name: "max_price",
        type: "number",
        required: false,
        description: "Maximum asking price in PHP or IDR.",
      },
      {
        name: "min_bedrooms",
        type: "number",
        required: false,
        description: "Minimum bedroom count.",
      },
      {
        name: "max_bedrooms",
        type: "number",
        required: false,
        description: "Maximum bedroom count.",
      },
      {
        name: "min_bathrooms",
        type: "number",
        required: false,
        description: "Minimum bathroom count.",
      },
      {
        name: "min_area",
        type: "number",
        required: false,
        description: "Minimum area in m².",
      },
      {
        name: "max_area",
        type: "number",
        required: false,
        description: "Maximum area in m².",
      },
      {
        name: "sort",
        type: "string",
        required: false,
        description: "Sort order.",
        default: "relevance",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "leboncoin-ad",
    operation: "leboncoin_ad",
    path: "/v2/leboncoin/ad",
    methods: ["GET", "POST"],
    summary: "Leboncoin Ad",
    description:
      "Extract full details from a Leboncoin ad including price, location, attributes, seller info, and images. Returns structured JSON by default, or raw HTML on demand.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Leboncoin ad ID or full ad URL. Both formats are accepted regardless of return_page_source.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Controls the response format.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "leboncoin-search",
    operation: "leboncoin_search",
    path: "/v2/leboncoin/search",
    methods: ["GET", "POST"],
    summary: "Leboncoin Search",
    description:
      "Scrape Leboncoin search results or category pages by URL, returning paginated listings with price, location, and attributes. Returns structured JSON. return_page_source is deprecated and returns 400.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Leboncoin search or category URL. Both keyword searches and category browse URLs are supported.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Deprecated. Sending true returns 400.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "leboncoin-search-api",
    operation: "leboncoin_search_api",
    path: "/v2/leboncoin/search_api",
    methods: ["POST"],
    summary: "Leboncoin Search API",
    description:
      "Search Leboncoin listings via structured POST API with advanced filters for category, location, price range, seller type, and sorting.",
    params: [
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "lenovo-product",
    operation: "lenovo_product",
    path: "/v2/lenovo/product",
    methods: ["GET", "POST"],
    summary: "Lenovo Product",
    description:
      "Extract a Lenovo product page by URL: id, name, price, currency, availability, images, and description (browser rendering, 2 credits).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Lenovo product URL (must contain /p/). Bare part numbers are rejected.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "lenovo-search",
    operation: "lenovo_search",
    path: "/v2/lenovo/search",
    methods: ["GET", "POST"],
    summary: "Lenovo Search",
    description:
      "Search Lenovo products by keyword or listing URL. Returns product id, price, currency, series, and availability via browser rendering (2 credits).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or full Lenovo search / category URL.",
      },
      {
        name: "locale",
        type: "string",
        required: false,
        description:
          "Store locale when query is a keyword (ignored for full URLs).",
        default: "fr/fr",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "leroymerlin-product",
    operation: "leroymerlin_product",
    path: "/v2/leroymerlin/product",
    methods: ["GET", "POST"],
    summary: "Leroy Merlin Product",
    description:
      "Live Leroy Merlin product detail for France and Romania from a URL or identifier: offers, currency, images, features and store context.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Leroy Merlin product URL, or an identifier (SKU / EAN / text).",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Leroy Merlin country when query is a keyword or identifier (default: fr). Ignored when query is a full Leroy Merlin URL (country is detected from the domain).",
      },
      {
        name: "store_id",
        type: "string",
        required: false,
        description:
          "Optional store id for local offer context (prices, stock, deliveries). Must exist for the active region. Returns 400 when unknown.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When set to true, returns the raw HTML of the product page instead of the parsed JSON payload. Useful for debugging or custom parsing. The response shape is {"return": "<html>..."}. Defaults to false.',
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "leroymerlin-search",
    operation: "leroymerlin_search",
    path: "/v2/leroymerlin/search",
    methods: ["GET", "POST"],
    summary: "Leroy Merlin Search",
    description:
      "Live Leroy Merlin search across France and Romania: title, URL, price, currency, brand, seller, rating and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search keyword, SKU/EAN, or full Leroy Merlin search URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Leroy Merlin country when query is a keyword or identifier (default: fr). Ignored when query is a full Leroy Merlin URL (country is detected from the domain).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number for pagination. Defaults to 1 when omitted. Use the pagination.total_pages returned by a previous call to iterate.",
      },
      {
        name: "store_id",
        type: "string",
        required: false,
        description:
          "Optional store id for local prices and availability. Must exist for the active region (FR stores with region=fr, RO stores with region=ro). Returns 400 when unknown.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When set to true, returns the raw HTML of the page instead of the parsed JSON payload. Useful for debugging or custom parsing. The response shape is {"return": "<html>..."}. Defaults to false.',
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "lidl-product",
    operation: "lidl_product",
    path: "/v2/lidl/product",
    methods: ["GET", "POST"],
    summary: "Lidl Product",
    description:
      "Lidl Product API: fetch full product page data from a Lidl URL or ERP id. Returns pricing, images, description, availability and category via Nuxt SSR parsing.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Lidl product URL or ERP id.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Target country when query is an ERP id only (default: fr). Ignored for full product URLs.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "lidl-search",
    operation: "lidl_search",
    path: "/v2/lidl/search",
    methods: ["GET", "POST"],
    summary: "Lidl Search",
    description:
      "Lidl Search API: search product listings by keyword or URL across Lidl online shops in 27 countries. Parses Nuxt SSR payload from HTML; returns prices, ratings, brand and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full Lidl search URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "Target country when query is a keyword (default: fr).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number (default: 1). Lidl paginates by offset (48 items per page).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "linkedin-company-info",
    operation: "linkedin_company_info",
    path: "/v2/linkedin/company/info",
    methods: ["GET", "POST"],
    summary: "LinkedIn Company Info",
    description:
      "LinkedIn Company Info API. Fetch firmographics by LinkedIn slug, URL, company ID, or reverse domain lookup (guideflow.com). Industry, headcount, HQ, posts, and more.",
    params: [
      {
        name: "query",
        type: "string",
        required: false,
        description:
          "LinkedIn company identifier when you already know the page.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Company website domain for reverse lookup when you do not have the LinkedIn URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "linkedin-job-count",
    operation: "linkedin_job_count",
    path: "/v2/linkedin/job/count",
    methods: ["GET", "POST"],
    summary: "LinkedIn Job Count",
    description:
      "Obtain real-time job counts on LinkedIn by industry, region, and role for strategic planning.",
    params: [
      {
        name: "keyword",
        type: "string",
        required: false,
        description: "Job title or keyword to count matching postings.",
      },
      {
        name: "experience_level",
        type: "string",
        required: false,
        description: "Filter by seniority level.",
      },
      {
        name: "job_type",
        type: "string",
        required: false,
        description: "Filter by employment type.",
      },
      {
        name: "when",
        type: "string",
        required: false,
        description: "Filter by posting recency.",
      },
      {
        name: "flexibility",
        type: "string",
        required: false,
        description: "Filter by work arrangement.",
      },
      {
        name: "distance",
        type: "number",
        required: false,
        description:
          "Maximum distance radius (in miles) from the target location (requires geo_id).",
      },
      {
        name: "geo_id",
        type: "string",
        required: false,
        description: "LinkedIn geo ID of the target location.",
      },
      {
        name: "company_id",
        type: "string",
        required: false,
        description:
          "LinkedIn numeric company ID to restrict the count to jobs posted by a specific company.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "linkedin-job-info",
    operation: "linkedin_job_info",
    path: "/v2/linkedin/job/info",
    methods: ["GET", "POST"],
    summary: "LinkedIn Job Info",
    description:
      "Dive into LinkedIn job data and trends for in-depth labor market insights.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The LinkedIn job posting to retrieve. Accepts a numeric job ID or a full job posting URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "linkedin-job-search",
    operation: "linkedin_job_search",
    path: "/v2/linkedin/job/search",
    methods: ["GET", "POST"],
    summary: "LinkedIn Job Search",
    description:
      "Experience advanced job data extraction from LinkedIn, enhancing your recruitment strategy.",
    params: [
      {
        name: "keyword",
        type: "string",
        required: false,
        description: "Job title or keyword to search for.",
      },
      {
        name: "experience_level",
        type: "string",
        required: false,
        description: "Filter by seniority level.",
      },
      {
        name: "job_type",
        type: "string",
        required: false,
        description: "Filter by employment type.",
      },
      {
        name: "when",
        type: "string",
        required: false,
        description: "Filter by posting date recency.",
      },
      {
        name: "flexibility",
        type: "string",
        required: false,
        description: "Filter by work arrangement.",
      },
      {
        name: "distance",
        type: "number",
        required: false,
        description:
          "Maximum radius in miles from the target location (requires geo_id).",
      },
      {
        name: "geo_id",
        type: "string",
        required: false,
        description:
          "LinkedIn geo ID for the target location. Default is 92000000 (worldwide).",
        default: "92000000",
      },
      {
        name: "company_id",
        type: "string",
        required: false,
        description:
          "LinkedIn numeric company ID to filter results to jobs posted by a specific company.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number for paginating through results. Default is 1. Each page returns up to 25 job listings.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "linkedin-job-suggest",
    operation: "linkedin_job_suggest",
    path: "/v2/linkedin/job/suggest",
    methods: ["GET", "POST"],
    summary: "LinkedIn Job Suggest",
    description:
      "Get personalized job suggestions based on keywords or locations to streamline your job search.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The keyword prefix to search for job title suggestions or location names.",
      },
      {
        name: "location",
        type: "boolean",
        required: false,
        description:
          "Set to true to receive location (geo) suggestions instead of keyword suggestions.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "linkedin-post-info",
    operation: "linkedin_post_info",
    path: "/v2/linkedin/post/info",
    methods: ["GET", "POST"],
    summary: "LinkedIn Post Info",
    description:
      "Simplify LinkedIn post retrieval with our efficient API for enhanced content analysis.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The LinkedIn post to retrieve. Accepts a numeric post ID or a full post URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "linkedin-product-info",
    operation: "linkedin_product_info",
    path: "/v2/linkedin/product/info",
    methods: ["GET", "POST"],
    summary: "LinkedIn Product Info",
    description:
      "Gain competitive insights with detailed LinkedIn product information for strategic advantage.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "The full LinkedIn product page URL to retrieve.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "linkedin-profile-info",
    operation: "linkedin_profile_info",
    path: "/v2/linkedin/profile/info",
    methods: ["GET", "POST"],
    summary: "LinkedIn Profile Info",
    description:
      "Streamline recruitment and business development by extracting valuable LinkedIn profile insights.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The LinkedIn profile to retrieve. Accepts a username, full profile URL, or numeric member ID.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "linkedinadlibrary-ad",
    operation: "linkedinadlibrary_ad",
    path: "/v2/linkedinadlibrary/ad",
    methods: ["GET", "POST"],
    summary: "LinkedIn Ad Library Ad",
    description:
      "Get one LinkedIn Ad Library creative by URL or id: copy, CTA, payer, impressions, and targeting (2 credits).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Ad id or detail URL from search.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "linkedinadlibrary-search",
    operation: "linkedinadlibrary_search",
    path: "/v2/linkedinadlibrary/search",
    methods: ["GET", "POST"],
    summary: "LinkedIn Ad Library Search",
    description:
      "Search the LinkedIn Ad Library by advertiser, keyword, country, and date. Returns ad cards and pagination (2 credits).",
    params: [
      {
        name: "query",
        type: "string",
        required: false,
        description:
          "Full LinkedIn Ad Library search URL, or a keyword when account_owner is empty.",
      },
      {
        name: "account_owner",
        type: "string",
        required: false,
        description: "Advertiser / company name filter (accountOwner).",
      },
      {
        name: "keyword",
        type: "string",
        required: false,
        description: "Keyword filter on ad copy.",
      },
      {
        name: "countries",
        type: "string",
        required: false,
        description: "Comma-separated ISO country codes, or ALL.",
      },
      {
        name: "date_option",
        type: "string",
        required: false,
        description:
          "Date window: last-30-days, current-month, current-year, last-year, custom-date-range.",
      },
      {
        name: "start_date",
        type: "string",
        required: false,
        description:
          "Start date YYYY-MM-DD when date_option=custom-date-range.",
      },
      {
        name: "end_date",
        type: "string",
        required: false,
        description: "End date YYYY-MM-DD when date_option=custom-date-range.",
      },
      {
        name: "cursor",
        type: "string",
        required: false,
        description: "Opaque cursor from pagination.cursor / pagination.next.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "loopnet-property",
    operation: "loopnet_property",
    path: "/v2/loopnet/property",
    methods: ["GET", "POST"],
    summary: "LoopNet Property",
    description: "Read one LoopNet commercial listing from its URL.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. LoopNet listing URL from search, for example https://www.loopnet.com/Listing/484-Amsterdam-Ave-New-York-NY/31379002/. A keyword is rejected.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "loopnet-search",
    operation: "loopnet_search",
    path: "/v2/loopnet/search",
    methods: ["GET", "POST"],
    summary: "LoopNet Search",
    description:
      "Search LoopNet commercial listings by city or by a results URL.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. City and state, for example New York, NY, or a LoopNet search URL such as https://www.loopnet.com/search/commercial-real-estate/new-york-ny/for-sale/. A listing URL is rejected.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number starting at 1. Example: 2. Omitted means page 1. A page already present in a search URL is kept when this is omitted or 1.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "maersk-tracking",
    operation: "maersk_tracking",
    path: "/v2/maersk/tracking",
    methods: ["GET", "POST"],
    summary: "Maersk Tracking",
    description:
      "Track a Maersk container or BOL: origin, destination, current milestone and full transport-plan events via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Container / BOL tracking number, or full Maersk tracking URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the rendered HTML as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "manomano-product",
    operation: "manomano_product",
    path: "/v2/manomano/product",
    methods: ["GET", "POST"],
    summary: "ManoMano Product",
    description:
      "Read a ManoMano product URL. The body is the product page: brand and seller are objects, and the current price is price.primary_price.amount_with_vat.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full ManoMano product page URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "manomano-product-offer",
    operation: "manomano_product_offer",
    path: "/v2/manomano/product/offer",
    methods: ["GET", "POST"],
    summary: "ManoMano Product Offer",
    description:
      "List the other sellers for a ManoMano product id. Each offer adds price and price_display on top of the site offer.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Numeric ManoMano product id from the product endpoint.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "ManoMano country. FR, GB, DE, ES, or IT. Default FR.",
        default: "FR",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "manomano-search",
    operation: "manomano_search",
    path: "/v2/manomano/search",
    methods: ["GET", "POST"],
    summary: "ManoMano Search",
    description:
      "Read a ManoMano category URL or keyword. Each card keeps the site fields and adds prices.main, brand_name, and image_fullpath. pagination.next is a boolean.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "ManoMano category URL or keyword. A keyword is opened on manomano.fr.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "mascus-ad",
    operation: "mascus_ad",
    path: "/v2/mascus/ad",
    methods: ["GET", "POST"],
    summary: "Mascus Ad",
    description:
      "Get full details for a Mascus used equipment listing: specs, price, seller and description.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Mascus listing URL. Usually taken from results[].url in search.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "mascus-search",
    operation: "mascus_search",
    path: "/v2/mascus/search",
    methods: ["GET", "POST"],
    summary: "Mascus Search",
    description:
      "Search used equipment listings on Mascus from a category URL, with pagination that keeps country and category filters.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Mascus category or search URL. The country site comes from the host (mascus.be, mascus.nl, mascus.de, mascus.com, …).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number (default: 1). About 40 results per page.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "mediamarkt-product",
    operation: "mediamarkt_product",
    path: "/v2/mediamarkt/product",
    methods: ["GET", "POST"],
    summary: "MediaMarkt Product",
    description:
      "Read one MediaMarkt product by id or product URL, in the region you choose. You get price, currency, EAN, and availability.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product URL or article id.  https://www.mediamarkt.ch/fr/product/_apple-iphone-15-2203371.html ",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Shop code when query is an article id. Example: ch-fr. Default ch-fr.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: 'When true, return raw HTML as {"result": "..."}.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "mediamarkt-search",
    operation: "mediamarkt_search",
    path: "/v2/mediamarkt/search",
    methods: ["GET", "POST"],
    summary: "MediaMarkt Search",
    description:
      "Search a MediaMarkt shop by keyword. Set region for Switzerland, Germany, Austria, and the other MediaMarktSaturn countries, then page the results.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or MediaMarkt URL. Example: iphone",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Shop code. Example: ch-fr or de. Default ch-fr. Ignored when query is a full URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number from 1. Example: 1",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: 'When true, return raw HTML as {"result": "..."}.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "micromania-product",
    operation: "micromania_product",
    path: "/v2/micromania/product",
    methods: ["GET", "POST"],
    summary: "Micromania Product",
    description:
      "Read one Micromania product from its URL or product id. You get the price, brand, EAN, platform, and stock.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product URL or the numeric Micromania id. A keyword or a search URL returns 400.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, returns the raw HTML instead of the parsed JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "micromania-search",
    operation: "micromania_search",
    path: "/v2/micromania/search",
    methods: ["GET", "POST"],
    summary: "Micromania Search",
    description:
      "Search Micromania for a keyword or a Search-Show URL. Each card has the product id, name, brand, EAN, price, and stock.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword or a Micromania Search-Show URL. A product URL returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, from 1. Default is 1. Page 2 is sent as page=2.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, returns the raw HTML instead of the parsed JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "mobile-ad",
    operation: "mobile_ad",
    path: "/v2/mobile/ad",
    methods: ["GET", "POST"],
    summary: "Mobile Ad",
    description:
      "Mobile Ad API. Fetch full car listing data from a mobile.de ad URL or numeric id. Returns pricing, specs, images and features via webunlocker.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Mobile ad URL or numeric ad id.",
      },
      {
        name: "locale",
        type: "string",
        required: false,
        description:
          "Language for this ad. The same numeric id stays reachable for fr, es, de, and en.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "mobile-search",
    operation: "mobile_search",
    path: "/v2/mobile/search",
    methods: ["GET", "POST"],
    summary: "Mobile Search",
    description:
      "Mobile Search API. Same mobile.de inventory for every locale. locale sets the language label and ad links, not which cars are returned. (3 credits)",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search URL or make/model code (ms=).",
      },
      {
        name: "locale",
        type: "string",
        required: false,
        description:
          "Locale label for the results. The cars themselves stay the same for de, fr, and en.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, starting at 1. Same effect as page or pageNumber in the Mobile.de URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "morele-product",
    operation: "morele_product",
    path: "/v2/morele/product",
    methods: ["GET", "POST"],
    summary: "Morele Product",
    description:
      "Read one morele.net product page. Flat JSON with PLN price, EAN, specs, and availability.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Morele product URL, or a numeric product id.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: 'When true, return the raw HTML as {"result": "..."}.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "morele-search",
    operation: "morele_search",
    path: "/v2/morele/search",
    methods: ["GET", "POST"],
    summary: "Morele Search",
    description:
      "Search morele.net by keyword or search URL. Returns product cards with PLN prices and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword or a full Morele search URL. A product URL is rejected.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number starting at 1. Page 2 asks Morele for the next screen of the same search.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: 'When true, return the raw HTML as {"result": "..."}.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "mrbricolage-suggest",
    operation: "mrbricolage_suggest",
    path: "/v2/mrbricolage/suggest",
    methods: ["GET", "POST"],
    summary: "Mr.Bricolage Suggest",
    description:
      "Live Mr.Bricolage product suggestions for a search keyword or EAN, including title, URL, image, price and currency.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search keyword or EAN used to query the Mr.Bricolage live suggest endpoint. Accepts product names, partial titles or numeric identifiers such as EAN barcodes.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "newegg-product",
    operation: "newegg_product",
    path: "/v2/newegg/product",
    methods: ["GET", "POST"],
    summary: "Newegg Product",
    description:
      "Read a Newegg product from an item number, catalog id, or URL. Returns price, specs, images, and seller.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Item number, catalog id, or product URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, return the raw HTML. The string false stays false.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "newegg-search",
    operation: "newegg_search",
    path: "/v2/newegg/search",
    methods: ["GET", "POST"],
    summary: "Newegg Search",
    description:
      "Search Newegg by keyword or search URL. Returns item numbers, dollar prices, stock, and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or a newegg.com search URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, starting at 1. Example: 2.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, return the raw HTML. The string false stays false.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "northdata-company",
    operation: "northdata_company",
    path: "/v2/northdata/company",
    methods: ["GET", "POST"],
    summary: "North Data Company",
    description:
      "North Data company profile: register, address, financials and history (1 credit).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Company name, North Data id, or a profile URL.",
      },
      {
        name: "countries",
        type: "string",
        required: false,
        description:
          "ISO alpha-2, used only when query is a name. Same form as search: FR or FR,DE.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "fr (default), com or en, de. Ignored when query is a URL.",
        default: "fr",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "northdata-search",
    operation: "northdata_search",
    path: "/v2/northdata/search",
    methods: ["GET", "POST"],
    summary: "North Data Search",
    description:
      "Search North Data companies and people by name. Returns suggestion cards and pagination (1 credit).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Company or person name, or a North Data suggest URL.",
      },
      {
        name: "countries",
        type: "string",
        required: false,
        description:
          "ISO alpha-2 codes, separated by comma, pipe or space (FR or FR,DE). Empty searches every country. A URL that already has countries wins.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Host of a name: fr (default), com or en, de. Ignored when query is a URL.",
        default: "fr",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Only 1. Below 1 returns 400. Above 1 returns 404. At most 15 rows.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "npi-provider",
    operation: "npi_provider",
    path: "/v2/npi/provider",
    methods: ["GET", "POST"],
    summary: "NPI Provider",
    description:
      "Fetch one NPPES provider or organization by 10-digit NPI or provider-view URL, including addresses and taxonomies.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. 10-digit NPI, example 1972813608, or a provider-view URL such as https://npiregistry.cms.hhs.gov/provider-view/1972813608.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "npi-search",
    operation: "npi_search",
    path: "/v2/npi/search",
    methods: ["GET", "POST"],
    summary: "NPI Search",
    description:
      "Search the NPPES NPI registry by person name, organization, or 10-digit NPI. With NPI-2, a text query is the organization name. total_results is null, and next is set only when the page is full.",
    params: [
      {
        name: "query",
        type: "string",
        required: false,
        description:
          "Optional when another criterion is set. Example: Anthony Fauci. Also a 10-digit NPI such as 1972813608, or an NPPES search URL. With enumeration_type=NPI-2 this text is the organization name, for exa…",
      },
      {
        name: "first_name",
        type: "string",
        required: false,
        description:
          "Optional. Example: Anthony. Used as the given name when you do not want query to be split.",
      },
      {
        name: "last_name",
        type: "string",
        required: false,
        description:
          "Optional. Example: Fauci. A single-word query such as Smith is used as the last name.",
      },
      {
        name: "organization_name",
        type: "string",
        required: false,
        description:
          "Optional. Example: Mayo Clinic. You can also pass that name in query with enumeration_type=NPI-2.",
      },
      {
        name: "city",
        type: "string",
        required: false,
        description: "Optional. Practice city. Example: Washington.",
      },
      {
        name: "state",
        type: "string",
        required: false,
        description:
          "Optional. Two-letter state code. Example: DC. Any other value is rejected.",
      },
      {
        name: "postal_code",
        type: "string",
        required: false,
        description: "Optional. Postal code. Example: 20016.",
      },
      {
        name: "taxonomy",
        type: "string",
        required: false,
        description:
          "Optional. Taxonomy description. Example: Internal Medicine.",
      },
      {
        name: "enumeration_type",
        type: "string",
        required: false,
        description:
          "Optional. NPI-1 for a person or NPI-2 for an organization. Example: NPI-2. NPI-2 treats a text query as an organization name.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number, starting at 1. Example: 2. Defaults to 1.",
      },
      {
        name: "limit",
        type: "number",
        required: false,
        description:
          "Optional. Page size. Example: 10. Defaults to 10 and cannot exceed 200. next is a URL only when the page contains this many rows.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "oceanio-search",
    operation: "oceanio_search",
    path: "/v2/oceanio/search",
    methods: ["GET", "POST"],
    summary: "Oceanio Search",
    description:
      "Search Ocean.io by domain or company name to find the matching company, similar companies, contacts, and people.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Domain or company name.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "olx-ad",
    operation: "olx_ad",
    path: "/v2/olx/ad",
    methods: ["GET", "POST"],
    summary: "OLX Ad",
    description:
      "Read one OLX ad from its id or URL. You get the asking price, the city, and the seller name.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "OLX listing URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Ignored when query is a full URL. The host selects the country.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return raw HTML.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "olx-product",
    operation: "olx_product",
    path: "/v2/olx/product",
    methods: ["GET", "POST"],
    summary: "OLX Product",
    description:
      "Read one OLX ad from its id or URL. You get the asking price, the city, and the seller name.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full URL of the OLX listing page to retrieve. Must be a valid olx.com.br listing URL. Example 1:",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "olx-search",
    operation: "olx_search",
    path: "/v2/olx/search",
    methods: ["GET", "POST"],
    summary: "OLX Search",
    description:
      "Search OLX Brazil classifieds by keyword and get title, price, location, seller type, and condition as structured JSON in real time.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search keyword or phrase, as you would type it in the OLX search bar. Supports Portuguese terms for Brazilian inventory.",
      },
      {
        name: "category",
        type: "string",
        required: false,
        description:
          "OLX category slug to restrict results to a specific vertical. Common values:",
      },
      {
        name: "state",
        type: "string",
        required: false,
        description:
          "Brazilian state abbreviation to filter results geographically.",
      },
      {
        name: "city",
        type: "string",
        required: false,
        description:
          "City slug to narrow results to a specific municipality. Use lowercase with hyphens.",
      },
      {
        name: "min_price",
        type: "number",
        required: false,
        description: "Minimum listing price in BRL.",
      },
      {
        name: "max_price",
        type: "number",
        required: false,
        description: "Maximum listing price in BRL.",
      },
      {
        name: "seller_type",
        type: "string",
        required: false,
        description: "Filter by seller type.",
      },
      {
        name: "sort",
        type: "string",
        required: false,
        description: "Sort order for results.",
        default: "relevance",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number for paginated results. Default: 1.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "oscaro-product",
    operation: "oscaro_product",
    path: "/v2/oscaro/product",
    methods: ["GET", "POST"],
    summary: "Oscaro Product",
    description:
      "Oscaro Product API. Fetch full auto parts product data from an Oscaro product URL. Returns pricing, brand, reference, images and availability via browser rendering and JSON-LD parsing.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Oscaro product page URL (*-{sku}-p suffix).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "oscaro-search",
    operation: "oscaro_search",
    path: "/v2/oscaro/search",
    methods: ["GET", "POST"],
    summary: "Oscaro Search",
    description:
      "Oscaro Search API. Search auto parts by keyword, search URL or category listing on oscaro.com, oscaro.es and oscaro.pt. Returns prices and pagination via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search keyword, search URL, or category listing URL (*-{id}-g).",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "Target shop when query is a keyword (default: com).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number override for category listing URLs (default: read from URL or 1). Uses ?page=2 on *-g pages.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "ovoko-ad",
    operation: "ovoko_ad",
    path: "/v2/ovoko/ad",
    methods: ["GET", "POST"],
    summary: "Ovoko Ad",
    description:
      "Extract an Ovoko listing from a SKU URL: price, currency, images, seller, quality, vehicle make, part numbers, and warranty.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Ovoko listing URL. The last path segment must be a SKU slug (example: qbb17557-95c827460c-porsche-macan-...) or a known product prefix.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "ovoko-search",
    operation: "ovoko_search",
    path: "/v2/ovoko/search",
    methods: ["GET", "POST"],
    summary: "Ovoko Search",
    description:
      "Search Ovoko used-parts listings from a search URL and retrieve title, price, OEM codes, seller, vehicle text, and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Ovoko search URL. Only search pages are accepted (not category, catalog, or offer pages).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "owler-company-info",
    operation: "owler_company_info",
    path: "/v2/owler/company/info",
    methods: ["GET", "POST"],
    summary: "Owler Company Info",
    description:
      "Retrieve detailed company intelligence from Owler, including revenue, employee count, CEO info, competitors, funding, and industry sectors.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The company to look up on Owler. Multiple formats are accepted:",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "owler-search",
    operation: "owler_search",
    path: "/v2/owler/search",
    methods: ["GET", "POST"],
    summary: "Owler Search",
    description:
      "Search for companies on Owler by name or keyword, returning a list of matching companies with slugs, logos, domains, and profile URLs.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "The company name or keyword to search for on Owler.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "pagesjaunes-page-info",
    operation: "pagesjaunes_page_info",
    path: "/v2/pagesjaunes/page/info",
    methods: ["GET", "POST"],
    summary: "PagesJaunes Page Info",
    description:
      "Retrieve detailed business information from a PagesJaunes page, including contact details, opening hours, services, payment methods, and SIREN number.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A PagesJaunes business page URL or business ID.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "pagesjaunes-search",
    operation: "pagesjaunes_search",
    path: "/v2/pagesjaunes/search",
    methods: ["GET", "POST"],
    summary: "PagesJaunes Search",
    description:
      "Search PagesJaunes for French local businesses by category and location, returning paginated results with contact details and ratings.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A valid PagesJaunes search URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "patreon-profile-info",
    operation: "patreon_profile_info",
    path: "/v2/patreon/profile/info",
    methods: ["GET", "POST"],
    summary: "Patreon Profile Info",
    description:
      "Retrieve a Patreon creator profile with patron counts, membership tiers, campaign summary, and creator metadata.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Patreon profile URL or creator vanity name.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "patreon-search",
    operation: "patreon_search",
    path: "/v2/patreon/search",
    methods: ["GET", "POST"],
    summary: "Patreon Search",
    description:
      "Search Patreon creators by keyword and retrieve campaign cards with patron counts, post counts, and profile URLs.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword to find Patreon creators.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "petsmart-product",
    operation: "petsmart_product",
    path: "/v2/petsmart/product",
    methods: ["GET", "POST"],
    summary: "PetSmart Product",
    description:
      "Read one PetSmart product URL, including the selected size, dollar price, flavor, and item number.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A PetSmart product link.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Set to true to get the raw HTML in result instead of the parsed JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "petsmart-search",
    operation: "petsmart_search",
    path: "/v2/petsmart/search",
    methods: ["GET", "POST"],
    summary: "PetSmart Search",
    description:
      "Search PetSmart by keyword or search URL. Page through pet food, litter, and supplies with dollar prices.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "What to look for. A word, or a PetSmart search link.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Which page of results, starting at 1. Page 2 returns a different set of products.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Set to true to get the raw HTML in result instead of the parsed JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "picard-product",
    operation: "picard_product",
    path: "/v2/picard/product",
    methods: ["GET", "POST"],
    summary: "Picard Product",
    description:
      "Picard Product API. Fetch full frozen food product data from a Picard URL or reference. Returns pricing, images, description, Nutri-Score, Planet-Score, breadcrumb and reviews.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Picard product URL or numeric reference.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "picard-search",
    operation: "picard_search",
    path: "/v2/picard/search",
    methods: ["GET", "POST"],
    summary: "Picard Search",
    description:
      "Picard Search API. Search frozen food listings on picard.fr by keyword or URL. Parses SFCC Search-UpdateGrid HTML; returns prices, Nutri-Score, ratings and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full Picard search URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number (24 results per page via SFCC Search-UpdateGrid). Default: 1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "pinterest-user-info",
    operation: "pinterest_user_info",
    path: "/v2/pinterest/user/info",
    methods: ["GET", "POST"],
    summary: "Pinterest User Info",
    description:
      "Access Pinterest user profiles and analytics for targeted marketing and audience insights.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The Pinterest profile to retrieve. Accepts a full profile URL or a username.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "pitchbook-company-info",
    operation: "pitchbook_company_info",
    path: "/v2/pitchbook/company/info",
    methods: ["GET", "POST"],
    summary: "PitchBook Company Info",
    description:
      "Get a PitchBook company profile: overview, funding, competitors and more via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "PitchBook company id or company profile URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "pitchbook-search",
    operation: "pitchbook_search",
    path: "/v2/pitchbook/search",
    methods: ["GET", "POST"],
    summary: "PitchBook Search",
    description:
      "Search PitchBook for companies, news and profiles by keyword or search URL via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or PitchBook search URL.",
      },
      {
        name: "page",
        type: "string",
        required: false,
        description: "Page number for content search (/search?q=...).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "pointp-product",
    operation: "pointp_product",
    path: "/v2/pointp/product",
    methods: ["GET", "POST"],
    summary: "Point.P Product",
    description:
      "Point.P Product API: scrape live /p/ product pages from a full URL. Get title, images, EAN, pricing, specifications, and breadcrumbs as JSON via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Point.P product page URL (/p/...-A{id}).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of parsed JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "pointp-search",
    operation: "pointp_search",
    path: "/v2/pointp/search",
    methods: ["GET", "POST"],
    summary: "Point.P Search",
    description:
      "Point.P Search API: search by keyword or URL and get building-material listings with prices, brands, ratings, units, and pagination as JSON via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full Point.P search results URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number for pagination. Overrides the page inferred from the URL. Defaults to 1 when omitted.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "prnewswire-article",
    operation: "prnewswire_article",
    path: "/v2/prnewswire/article",
    methods: ["GET", "POST"],
    summary: "PR Newswire Article",
    description: "Read one PR Newswire press release from its URL.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. PR Newswire release URL, for example https://www.prnewswire.com/news-releases/pumpkin-awarded-11-000-in-donations-to-veterinary-clinics-for-cost-of-care-education-302924942.html. A keyword…",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "prnewswire-search",
    operation: "prnewswire_search",
    path: "/v2/prnewswire/search",
    methods: ["GET", "POST"],
    summary: "PR Newswire Search",
    description:
      "Search PR Newswire press releases by keyword or by a news-search URL.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Keyword, for example apple, or a PR Newswire news-search URL such as https://www.prnewswire.com/search/news/?keyword=apple. A release URL is rejected.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number starting at 1. Example: 2. Omitted means page 1. A page already present in a search URL is kept when this is omitted or 1.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "producthunt-product-info",
    operation: "producthunt_product_info",
    path: "/v2/producthunt/product/info",
    methods: ["GET", "POST"],
    summary: "ProductHunt Product Info",
    description:
      "Retrieve product data from ProductHunt, including tagline, categories, screenshots, reviews rating, and social links.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A ProductHunt product URL or product slug.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "proshop-product",
    operation: "proshop_product",
    path: "/v2/proshop/product",
    methods: ["GET", "POST"],
    summary: "Proshop Product",
    description:
      "Read one proshop.dk product page. Flat JSON with DKK price, EAN, specs, and stock text.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Proshop product id, or a product URL. The id is the last path segment.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: 'When true, return the raw HTML as {"result": "..."}.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "proshop-search",
    operation: "proshop_search",
    path: "/v2/proshop/search",
    methods: ["GET", "POST"],
    summary: "Proshop Search",
    description:
      "Search proshop.dk by keyword or search URL. Returns product cards with DKK prices and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword or a full Proshop search URL with s=. A product URL is rejected.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number starting at 1. Proshop sends this as pn.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: 'When true, return the raw HTML as {"result": "..."}.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "rappi-product",
    operation: "rappi_product",
    path: "/v2/rappi/product",
    methods: ["GET", "POST"],
    summary: "Rappi Product",
    description:
      "Fetch one Rappi Mexico product, including the primary store price and the other store offers. The primary price can differ from a search card.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Product URL on rappi.com.mx, example https://www.rappi.com.mx/p/santa-clara-leche-deslactosada-semidescremada-1-l-14069, or a numeric master id such as 14069.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "rappi-search",
    operation: "rappi_search",
    path: "/v2/rappi/search",
    methods: ["GET", "POST"],
    summary: "Rappi Search",
    description:
      "Search Rappi Mexico on rappi.com.mx. The city resolves to Mexico City. Each row is one store offer, and next is null.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Keyword, example leche, or a rappi.com.mx search URL such as https://www.rappi.com.mx/search?query=leche. A product URL or another country host is rejected.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Only page 1 returns rows. Example: 1. Defaults to 1. Page 2 is rejected because the payload has no next page.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "ratemyprofessors-professor",
    operation: "ratemyprofessors_professor",
    path: "/v2/ratemyprofessors/professor",
    methods: ["GET", "POST"],
    summary: "Rate My Professors Professor",
    description:
      "Read one Rate My Professors profile, including difficulty and would-take-again when the page shows them.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. The numeric professor id from search, or a /professor/{id} URL. A name is not accepted.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "ratemyprofessors-search",
    operation: "ratemyprofessors_search",
    path: "/v2/ratemyprofessors/search",
    methods: ["GET", "POST"],
    summary: "Rate My Professors Search",
    description:
      "Search Rate My Professors by name. Cards include school, department, difficulty, and would-take-again when the card shows them.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. A professor name, or a Rate My Professors search URL whose path contains /search/professors or whose query contains q=.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "realestatecomau-search",
    operation: "realestatecomau_search",
    path: "/v2/realestatecomau/search",
    methods: ["GET", "POST"],
    summary: "realestate.com.au Search",
    description:
      "Search realestate.com.au buy, rent, or sold results. A place such as Sydney, NSW defaults to homes for sale. Each card has price, address, rooms, and a property URL.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Place or a realestate.com.au results URL.",
      },
      {
        name: "channel",
        type: "string",
        required: false,
        description: "buy, rent, or sold. Used when query is a place.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page from 1.",
        default: 1,
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Optional. Default false.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "realtor-property",
    operation: "realtor_property",
    path: "/v2/realtor/property",
    methods: ["GET", "POST"],
    summary: "Realtor Property",
    description:
      "Extract full property details from a Realtor.com listing URL, including price, specs, photos, agents, features, and location data.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Realtor.com property detail URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "realtor-search",
    operation: "realtor_search",
    path: "/v2/realtor/search",
    methods: ["GET", "POST"],
    summary: "Realtor Search",
    description:
      "Search Realtor.com listings from a search URL and retrieve prices, beds, baths, sqft, photos, and property metadata.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Realtor.com search results URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "redfin-property",
    operation: "redfin_property",
    path: "/v2/redfin/property",
    methods: ["GET", "POST"],
    summary: "Redfin Property",
    description:
      "Read one for-sale Redfin home. Pass the url from search, which already includes the market id. The response is a flat listing, the same fields as one search result.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Redfin home link. Use the url returned by search.",
      },
      {
        name: "region_id",
        type: "number",
        required: false,
        description:
          "Market id. Required only when the home link does not already include region_id.",
      },
      {
        name: "region_type",
        type: "number",
        required: false,
        description:
          "Required with region_id when the home link has no region_type.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Optional. Default false.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "redfin-search",
    operation: "redfin_search",
    path: "/v2/redfin/search",
    methods: ["GET", "POST"],
    summary: "Redfin Search",
    description:
      "Search for-sale homes on Redfin from a city, neighborhood, or county link. Each listing url includes the market id to pass to the property endpoint.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Redfin for-sale link for a city, neighborhood, or county.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page of the for-sale feed, from 1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Optional. Default false.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "reichelt-product",
    operation: "reichelt_product",
    path: "/v2/reichelt/product",
    methods: ["GET", "POST"],
    summary: "Reichelt Product",
    description:
      "Read one reichelt.de product URL, including article number, EAN, and the euro price.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A reichelt.de or reichelt.com product link. A search link returns 400.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Set to true to get the raw HTML in result.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "reichelt-search",
    operation: "reichelt_search",
    path: "/v2/reichelt/search",
    methods: ["GET", "POST"],
    summary: "Reichelt Search",
    description:
      "Search reichelt.de by keyword or category. Euro prices are rebuilt from the number, including whole-euro amounts.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "What to look for. A word such as 1n4148, or a reichelt.de search or category link. A product link returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, starting at 1. Page 2 is PAGE=1 on the shop.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Set to true to get the raw HTML in result.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "reverb-product",
    operation: "reverb_product",
    path: "/v2/reverb/product",
    methods: ["GET", "POST"],
    summary: "Reverb Product",
    description:
      "Reverb Product API: fetch full listing data from a Reverb URL or listing id. Returns pricing, specs, images, description and shop info via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Reverb listing URL or numeric listing id.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "reverb-search",
    operation: "reverb_search",
    path: "/v2/reverb/search",
    methods: ["GET", "POST"],
    summary: "Reverb Search",
    description:
      "Reverb Search API: search music gear listings by keyword, query string or marketplace URL on Reverb. Returns prices, thumbnails and pagination via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search keyword, query string, or full Reverb marketplace URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number override (default: read from URL or 1).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "rexel-product",
    operation: "rexel_product",
    path: "/v2/rexel/product",
    methods: ["GET", "POST"],
    summary: "Rexel Product",
    description:
      "Get a Rexel France product page: references, EAN, descriptions, images and specs via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Rexel France product URL containing /p/{id}.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "rexel-search",
    operation: "rexel_search",
    path: "/v2/rexel/search",
    methods: ["GET", "POST"],
    summary: "Rexel Search",
    description:
      "Search Rexel France by keyword, EAN or search URL. Returns product cards and pagination via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword, EAN, or Rexel France search URL.",
      },
      {
        name: "page",
        type: "string",
        required: false,
        description: "Page number (1-based). Page 1 omits page in the URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "rightmove-property",
    operation: "rightmove_property",
    path: "/v2/rightmove/property",
    methods: ["GET", "POST"],
    summary: "Rightmove Property",
    description:
      "Read one Rightmove property from its URL or numeric id. The response is a flat object with price, tenure, floor area, stations, and the agent.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Rightmove property URL or the numeric id.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Optional. Default false.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "rightmove-search",
    operation: "rightmove_search",
    path: "/v2/rightmove/search",
    methods: ["GET", "POST"],
    summary: "Rightmove Search",
    description:
      "Search Rightmove by a UK place name or a search URL. Each card has a numeric price, a price label rebuilt from that number, the address, the agent, and a property URL.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "UK place name or a Rightmove search URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Results page, from 1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Optional. Default false.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "rsonline-product",
    operation: "rsonline_product",
    path: "/v2/rsonline/product",
    methods: ["GET", "POST"],
    summary: "RS Online Product",
    description:
      "Read one RS Online UK product URL, including the RS stock number, manufacturer part, and pound price.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A uk.rs-online.com product link. The response is one flat product. price is the numeric pound amount and price_display is the printed string. A search link, a bare stock number, or another host retur…",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Default false. true replaces the product object with result, the rendered HTML.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "rsonline-search",
    operation: "rsonline_search",
    path: "/v2/rsonline/search",
    methods: ["GET", "POST"],
    summary: "RS Online Search",
    description:
      "Search RS Online UK by keyword or category. Pound prices keep the amount printed on the page.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A keyword, or a uk.rs-online.com search or category link. Empty, another host, or a product link returns 400. A keyword builds /web/c/?searchTerm=... and page 1 omits pn. Each card has price as a num…",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number starting at 1. Omit it for page 1. Page 2 sets pn=2, changes pagination.page, and returns the next cards. pagination.next is that next URL, or null on the last page. A value below 1 retur…",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Default false. true replaces results and pagination with result, the rendered HTML.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "seek-job",
    operation: "seek_job",
    path: "/v2/seek/job",
    methods: ["GET", "POST"],
    summary: "SEEK Job",
    description: "Read one SEEK Australia job from its URL or numeric id.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. SEEK job URL or numeric id, for example 95568355 or https://www.seek.com.au/job/95568355. A keyword is rejected.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "seek-search",
    operation: "seek_search",
    path: "/v2/seek/search",
    methods: ["GET", "POST"],
    summary: "SEEK Search",
    description: "Search SEEK Australia jobs by keyword or by a results URL.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Job keyword, for example nurse, or a SEEK results URL such as https://www.seek.com.au/nurse-jobs. A /job/<id> URL is rejected.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number starting at 1. Example: 2. Omitted means page 1. A page already present in a results URL is kept when this is omitted or 1.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "seloger-agency",
    operation: "seloger_agency",
    path: "/v2/seloger/agency",
    methods: ["GET", "POST"],
    summary: "SeLoger Agency",
    description:
      "Retrieve detailed profile information for a SeLoger real estate agency including contact details, ratings, reviews, and address.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A valid SeLoger agency profile URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "seloger-agency-rent",
    operation: "seloger_agency_rent",
    path: "/v2/seloger/agency/rent",
    methods: ["GET", "POST"],
    summary: "SeLoger Agency Rent",
    description:
      "Retrieve paginated rental property listings published by a specific SeLoger agency using its numeric agency ID.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A valid SeLoger agency ID.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number for paginating through the agency's rental listings.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "seloger-agency-sale",
    operation: "seloger_agency_sale",
    path: "/v2/seloger/agency/sale",
    methods: ["GET", "POST"],
    summary: "SeLoger Agency Sale",
    description:
      "Retrieve paginated sale property listings published by a specific SeLoger agency using its numeric agency ID.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A valid SeLoger agency ID.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number for paginating through the agency's sale listings.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "seloger-property",
    operation: "seloger_property",
    path: "/v2/seloger/property",
    methods: ["GET", "POST"],
    summary: "SeLoger Property",
    description:
      "Efficiently extract detailed data from a SeLoger real estate listing including agency info, pricing, photos, description, and property criteria.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A valid SeLoger property listing URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Whether to return the raw HTML source of the property page instead of parsed JSON data.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "seloger-search",
    operation: "seloger_search",
    path: "/v2/seloger/search",
    methods: ["GET", "POST"],
    summary: "SeLoger Search",
    description:
      "Efficiently extract real estate listings from SeLoger search pages for market insights, property management, and investment analysis.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A valid SeLoger search results URL. Any SeLoger search page URL with filters is supported: location, property type, price range, surface, and number of rooms can all be embedded in the URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Whether to return the raw HTML source of the search results page instead of parsed JSON data.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "sephora-product",
    operation: "sephora_product",
    path: "/v2/sephora/product",
    methods: ["GET", "POST"],
    summary: "Sephora Product",
    description:
      "Read one European Sephora product by id or product URL. Set region when you are not on the French shop.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A Sephora product URL. A product id such as 831955 also works.  https://www.sephora.fr/p/midnight-espresso---eau-de-parfum-au-cafe-831955.html ",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Shop when query is only an id. Use fr for France or de for Germany. Leave empty for France.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Return the rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "sephora-search",
    operation: "sephora_search",
    path: "/v2/sephora/search",
    methods: ["GET", "POST"],
    summary: "Sephora Search",
    description:
      "Search a European Sephora shop by keyword. Region defaults to France. Page through makeup and skincare cards. The US site is a different page and is not included.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A product word, for example mascara. Or paste a full Sephora search URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Shop code. Use fr for France or de for Germany. Leave empty for France. A full URL picks the shop.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, starting at 1. Use 2 for the next page of products.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Return the rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "shophouzz-product",
    operation: "shophouzz_product",
    path: "/v2/shophouzz/product",
    methods: ["GET", "POST"],
    summary: "Shophouzz Product",
    description:
      "Retrieve full product details from Shophouzz, including title, price, variants, images, vendor, and structured metadata.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full URL of the Shophouzz product page to retrieve details for.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "shopify-apps",
    operation: "shopify_apps",
    path: "/v2/shopify/apps",
    methods: ["GET", "POST"],
    summary: "Shopify Apps",
    description:
      "Retrieve structured details about any Shopify App Store listing, including title, logo, screenshots, pricing plans, categories, and description.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "URL of the Shopify App Store listing to scrape.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "shopify-catalog",
    operation: "shopify_catalog",
    path: "/v2/shopify/catalog",
    methods: ["GET", "POST"],
    summary: "Shopify Catalog",
    description:
      "List products from a Shopify shop. query is the shop domain or a URL on that shop. page and limit choose the slice.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Shop domain or a URL on that shop.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, starting at 1.",
      },
      {
        name: "limit",
        type: "number",
        required: false,
        description: "How many items to return on this page.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "shopify-collections",
    operation: "shopify_collections",
    path: "/v2/shopify/collections",
    methods: ["GET", "POST"],
    summary: "Shopify Collections",
    description:
      "List collections from a Shopify shop. query is the shop domain or a URL on that shop. page and limit choose the slice.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Shop domain or a URL on that shop.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, starting at 1.",
      },
      {
        name: "limit",
        type: "number",
        required: false,
        description: "How many items to return on this page.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "shopify-product",
    operation: "shopify_product",
    path: "/v2/shopify/product",
    methods: ["GET", "POST"],
    summary: "Shopify Product",
    description:
      "Extract full product details from any Shopify store product page, including title, variants, pricing, images, inventory, and options.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "URL of a Shopify product page to scrape.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "similarweb-domain",
    operation: "similarweb_domain",
    path: "/v2/similarweb/domain",
    methods: ["GET", "POST"],
    summary: "SimilarWeb Domain",
    description:
      "Retrieve website traffic and engagement metrics for a domain from the public Similarweb page, including visits, bounce rate, rank, keywords, and traffic sources.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A domain name to retrieve traffic and engagement metrics for.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "similarweb-search",
    operation: "similarweb_search",
    path: "/v2/similarweb/search",
    methods: ["GET", "POST"],
    summary: "Similarweb Search",
    description:
      "Search the public Similarweb page for websites, companies, and mobile apps related to a keyword.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Domain name or keyword to search for in the Similarweb database.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "snapeda-product",
    operation: "snapeda_product",
    path: "/v2/snapeda/product",
    methods: ["GET", "POST"],
    summary: "SnapEDA Product",
    description:
      "SnapEDA Product API: fetch full part page data from a SnapEDA URL or MPN/manufacturer slug. Returns CAD models, datasheet, RoHS, distributor pricing and availability via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "SnapEDA part page URL or MPN/manufacturer slug.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw rendered HTML as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "snapeda-search",
    operation: "snapeda_search",
    path: "/v2/snapeda/search",
    methods: ["GET", "POST"],
    summary: "SnapEDA Search",
    description:
      "SnapEDA Search API: search electronic parts by keyword or URL on SnapMagic Search (ex-SnapEDA). Returns MPN, manufacturer, pricing, CAD availability and pagination via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full SnapEDA / SnapMagic search URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number override (default: read from URL or 1). SnapEDA returns 20 results per page.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw rendered HTML as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "starbucks-menu",
    operation: "starbucks_menu",
    path: "/v2/starbucks/menu",
    methods: ["GET", "POST"],
    summary: "Starbucks Menu",
    description:
      "Full Starbucks menu for one café, with the default-size price of each item. Prices use browser rendering.",
    params: [
      {
        name: "store_number",
        type: "string",
        required: false,
        description:
          "Café number from Search, short (9230) or full (9230-154245).",
      },
      {
        name: "query",
        type: "string",
        required: false,
        description:
          "Same café number, or a menu URL that contains storeNumber. Used when store_number is empty.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "starbucks-product",
    operation: "starbucks_product",
    path: "/v2/starbucks/product",
    methods: ["GET", "POST"],
    summary: "Starbucks Product",
    description:
      "One Starbucks item at one café, with a price for every size. Get the café from Search first. Prices use browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product and form, or a Starbucks product URL.",
      },
      {
        name: "store_number",
        type: "string",
        required: false,
        description:
          "Café number from Search, short (9230) or full (9230-154245). Required when the product URL has no storeNumber.",
      },
      {
        name: "form_code",
        type: "string",
        required: false,
        description:
          "Form when query is only a product number. Usually hot or iced.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "starbucks-search",
    operation: "starbucks_search",
    path: "/v2/starbucks/search",
    methods: ["GET", "POST"],
    summary: "Starbucks Search",
    description:
      "Nearest Starbucks cafés from coordinates or a store-locator URL. Returns address, hours, amenities, and the store number used by Menu and Product.",
    params: [
      {
        name: "query",
        type: "string",
        required: false,
        description:
          "Store-locator URL, or a lat,lng pair. Required when lat and lng are empty.",
      },
      {
        name: "lat",
        type: "number",
        required: false,
        description:
          "Latitude. Send it with lng. If both are set, they replace any coordinates found in query.",
      },
      {
        name: "lng",
        type: "number",
        required: false,
        description: "Longitude. Send it with lat.",
      },
      {
        name: "place",
        type: "string",
        required: false,
        description:
          "Optional place label sent with the coordinates, for example New York, NY. Coordinates are still required.",
      },
      {
        name: "features",
        type: "string",
        required: false,
        description:
          "Optional amenity filter. Separate codes with commas. ON keeps cafés that offer mobile order.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "stats",
    operation: "stats",
    path: "/v2/stats",
    methods: ["GET"],
    summary: "Stats",
    description:
      "Infrastructure health for an engine or endpoint over the last hour. Not scoped to your account or tenant. Enabled per account: HTTP 403 means contact support to activate it.",
    params: [
      {
        name: "engine",
        type: "string",
        required: false,
        description:
          "API family to check, for example website. Provide at least engine or path.",
      },
      {
        name: "path",
        type: "string",
        required: false,
        description:
          "Specific endpoint to check, for example /v2/website/crawler. If you also pass engine, use an endpoint from that API.",
      },
    ],
  },
  {
    command: "stockx-product",
    operation: "stockx_product",
    path: "/v2/stockx/product",
    methods: ["GET", "POST"],
    summary: "StockX Product",
    description:
      "Retrieve detailed product information from StockX, including market prices, bid/ask data, size variants, and product metadata.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A StockX product slug.",
      },
      {
        name: "country",
        type: "string",
        required: false,
        description: "Country code for localized pricing and availability.",
        default: "US",
      },
      {
        name: "currency",
        type: "string",
        required: false,
        description: "Currency code for price display.",
        default: "USD",
      },
      {
        name: "language",
        type: "string",
        required: false,
        description: "Language code for localized content.",
        default: "en-US",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "stockx-search",
    operation: "stockx_search",
    path: "/v2/stockx/search",
    methods: ["GET", "POST"],
    summary: "StockX Search",
    description:
      "Search StockX for products by name, brand, SKU, or slug and receive a list of matching items with product IDs, slugs, images, and colorways.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search query for StockX products. Can be a product name, brand, SKU, or slug.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "stockx-trends",
    operation: "stockx_trends",
    path: "/v2/stockx/trends",
    methods: ["GET", "POST"],
    summary: "StockX Trends",
    description:
      "Retrieve trending products on StockX by category, with options to sort by featured, most active, or release date.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "StockX product category to retrieve trending items for.",
      },
      {
        name: "sort_by",
        type: "string",
        required: false,
        description: "Sort order for trending results.",
        default: "featured",
      },
      {
        name: "country",
        type: "string",
        required: false,
        description: "Country code for localized trending data.",
        default: "US",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "stubhub-event",
    operation: "stubhub_event",
    path: "/v2/stubhub/event",
    methods: ["GET", "POST"],
    summary: "StubHub Event",
    description:
      "Read one StubHub event from its URL or numeric id, including the lowest printed ticket price.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. StubHub event URL or numeric id, for example 162387399 or https://www.stubhub.com/harlem-globetrotters-marseille-tickets-3-31-2027/event/162387399/. A keyword is rejected.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "stubhub-search",
    operation: "stubhub_search",
    path: "/v2/stubhub/search",
    methods: ["GET", "POST"],
    summary: "StubHub Search",
    description:
      "Search StubHub events by keyword or by a StubHub search URL. The response is the first embedded page.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Keyword, for example nba, or a StubHub search URL such as https://www.stubhub.com/secure/search/?q=nba. An event URL is rejected.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Only page 1 returns events. Example: 1. Page 2 and above return 404 because the search document has no further page.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "target-product",
    operation: "target_product",
    path: "/v2/target/product",
    methods: ["GET", "POST"],
    summary: "Target Product",
    description:
      "Get a Target.com product page: price, description, images and variations via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Target product URL or bare TCIN.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "target-search",
    operation: "target_search",
    path: "/v2/target/search",
    methods: ["GET", "POST"],
    summary: "Target Search",
    description:
      "Search Target.com by keyword or search URL. Returns product cards with price, rating and pagination via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or Target search URL.",
      },
      {
        name: "page",
        type: "string",
        required: false,
        description: "Page number (1-based).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "tdlr-license",
    operation: "tdlr_license",
    path: "/v2/tdlr/license",
    methods: ["GET", "POST"],
    summary: "TDLR License",
    description:
      "Fetch one TDLR license by detail id or SearchResultDetail URL, including status, subtype, DBA, and notes.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Detail id, example AIRREF00000564, or the SearchResultDetail URL from search.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "tdlr-search",
    operation: "tdlr_search",
    path: "/v2/tdlr/search",
    methods: ["GET", "POST"],
    summary: "TDLR License Search",
    description:
      "Search Texas TDLR licenses by name, city, county, or ZIP. license_type such as AIRREF is required for a useful search. 25 rows per page.",
    params: [
      {
        name: "query",
        type: "string",
        required: false,
        description:
          "Optional when city, county, or postal_code is set. Person or business name, example SMITH. A detail URL is rejected.",
      },
      {
        name: "license_type",
        type: "string",
        required: false,
        description:
          "Optional on the request, required for a useful search. License type code, example AIRREF for air conditioning contractors. ALL or blank searches every type.",
      },
      {
        name: "city",
        type: "string",
        required: false,
        description:
          "Optional. Business city. Example: Austin. One of query, city, county, or postal_code is required.",
      },
      {
        name: "county",
        type: "string",
        required: false,
        description: "Optional. Business county. Example: TRAVIS.",
      },
      {
        name: "postal_code",
        type: "string",
        required: false,
        description: "Optional. Business ZIP. Example: 78701.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number starting at 1. Example: 2. Defaults to 1. Each page has 25 rows.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "ted-notice",
    operation: "ted_notice",
    path: "/v2/ted/notice",
    methods: ["GET", "POST"],
    summary: "TED Notice",
    description:
      "TED notice profile: buyer, lots, deadline, value and documents (1 credit).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Publication number, or a TED notice URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "ted-search",
    operation: "ted_search",
    path: "/v2/ted/search",
    methods: ["GET", "POST"],
    summary: "TED Search",
    description:
      "Search TED procurement notices by keyword or filters. Returns notice cards and pagination (1 credit).",
    params: [
      {
        name: "query",
        type: "string",
        required: false,
        description: "Keyword, publication number, or a TED search URL.",
      },
      {
        name: "notice_type",
        type: "string",
        required: false,
        description:
          "Notice code such as cn-standard or can-standard. Combined with AND.",
      },
      {
        name: "country",
        type: "string",
        required: false,
        description:
          "Buyer country, ISO alpha-2 or alpha-3. FR becomes FRA. A country name returns 400.",
      },
      {
        name: "place",
        type: "string",
        required: false,
        description:
          "Place of performance: country code or NUTS code such as FRK24.",
      },
      {
        name: "cpv",
        type: "string",
        required: false,
        description:
          "CPV code or prefix. Digits and an optional star, for example 72000000 or 30*.",
      },
      {
        name: "buyer",
        type: "string",
        required: false,
        description: "Buyer name, matched as a phrase.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page from 1. next is always null: pass page + 1. A page past the last one returns 404.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "thalia-product",
    operation: "thalia_product",
    path: "/v2/thalia/product",
    methods: ["GET", "POST"],
    summary: "Thalia Product",
    description:
      "Read one Thalia product from its URL. You get price, author or brand, and the product details.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product URL or Thalia article id.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, returns {"result": "<html>..."} instead of the parsed JSON. Default false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "thalia-search",
    operation: "thalia_search",
    path: "/v2/thalia/search",
    methods: ["GET", "POST"],
    summary: "Thalia Search",
    description:
      "Search Thalia by keyword and page books, media, and gifts. Cards include title, price, and the product link.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword or a thalia.de search URL (/suche or a category URL). A product URL returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, from 1. Sent to Thalia as the query parameter p. Default 1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, returns {"result": "<html>..."} instead of the parsed JSON. Default false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "thefork-restaurant",
    operation: "thefork_restaurant",
    path: "/v2/thefork/restaurant",
    methods: ["GET", "POST"],
    summary: "TheFork Restaurant",
    description:
      "Extract a full TheFork restaurant profile from a restaurant page URL, including ratings, tags, photo gallery, opening hours, and AI review summaries via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full TheFork restaurant page URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "thefork-search",
    operation: "thefork_search",
    path: "/v2/thefork/search",
    methods: ["GET", "POST"],
    summary: "TheFork Search",
    description:
      "Search TheFork restaurants from a full search or city URL and retrieve ratings, cuisine, prices, availability, review summaries, and pagination via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full TheFork search or city listing URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "thomasnet-company",
    operation: "thomasnet_company",
    path: "/v2/thomasnet/company",
    methods: ["GET", "POST"],
    summary: "Thomasnet Company",
    description:
      "Get a full Thomasnet supplier profile from a company URL, including contact details, product categories, and business information.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Thomasnet company profile URL from your browser.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "thomasnet-search",
    operation: "thomasnet_search",
    path: "/v2/thomasnet/search",
    methods: ["GET", "POST"],
    summary: "Thomasnet Search",
    description:
      "Search Thomasnet suppliers from a search or category URL and get company listings, filters, name suggestions, and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Thomasnet search URL from your browser.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "ticketmaster-event",
    operation: "ticketmaster_event",
    path: "/v2/ticketmaster/event",
    methods: ["GET", "POST"],
    summary: "Ticketmaster Event",
    description:
      "Fetch one Ticketmaster event from a slugged event URL. The slug is searched and the matching event id is returned with the venue address.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Slugged event URL, example https://www.ticketmaster.com/suns-vs-jazz-kids-day-phoenix-arizona-01-24-2027/event/19006507A7257EEA. A short /event/{discoveryId} link has no slug and cannot be…",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "ticketmaster-search",
    operation: "ticketmaster_search",
    path: "/v2/ticketmaster/search",
    methods: ["GET", "POST"],
    summary: "Ticketmaster Search",
    description:
      "Search Ticketmaster events by keyword. Returns event cards, including Ticketweb partner rows, and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Keyword, example jazz, or a ticketmaster.com search URL such as https://www.ticketmaster.com/search?q=jazz. An event URL is rejected.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number starting at 1. Example: 2. Defaults to 1. On ticketmaster.com the page query is zero-based, so API page 2 is page=1 on the site.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "tiktoktopads-ad",
    operation: "tiktoktopads_ad",
    path: "/v2/tiktoktopads/ad",
    methods: ["GET", "POST"],
    summary: "TikTok Top Ads Ad",
    description:
      "Get one TikTok Creative Center Top Ad by URL or id: creative, landing page, CTR, and engagement (1 credit).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Ad id or detail URL from search.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "tiktoktopads-search",
    operation: "tiktoktopads_search",
    path: "/v2/tiktoktopads/search",
    methods: ["GET", "POST"],
    summary: "TikTok Top Ads Search",
    description:
      "Search TikTok Creative Center Top Ads by region, objective, period, and keyword. Returns ad cards and pagination (1 credit).",
    params: [
      {
        name: "query",
        type: "string",
        required: false,
        description: "Full TikTok Top Ads search URL, or a keyword.",
      },
      {
        name: "keyword",
        type: "string",
        required: false,
        description: "Brand or product keyword.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "ISO country code (country_code).",
      },
      {
        name: "objective",
        type: "string",
        required: false,
        description: "Campaign objective id (URL param object).",
      },
      {
        name: "period",
        type: "string",
        required: false,
        description: "Lookback window: 7, 30, or 180.",
        default: "30",
      },
      {
        name: "order_by",
        type: "string",
        required: false,
        description: "Sort: for_you, reach/impression, ctr/like.",
      },
      {
        name: "industry",
        type: "string",
        required: false,
        description: "Industry key filter.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number.",
      },
      {
        name: "per_page",
        type: "number",
        required: false,
        description: "Page size (max 20).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "tradeaplane-listing",
    operation: "tradeaplane_listing",
    path: "/v2/tradeaplane/listing",
    methods: ["GET", "POST"],
    summary: "Trade-A-Plane Listing",
    description:
      "Read one Trade-A-Plane aircraft listing from its URL. You get the asking price, the airframe details, and the seller.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Listing URL that includes listing_id.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "tradeaplane-search",
    operation: "tradeaplane_search",
    path: "/v2/tradeaplane/search",
    methods: ["GET", "POST"],
    summary: "Trade-A-Plane Search",
    description:
      "Search Trade-A-Plane aircraft listings by keyword and page the results. Cards include title, price, and the listing link.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword, or a Trade-A-Plane search URL without listing_id.",
      },
      {
        name: "listing_type",
        type: "string",
        required: false,
        description:
          "aircraft or engine when query is a keyword. Ignored when query is a URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page from 1. Sent as s-page.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "trustpilot-company-info",
    operation: "trustpilot_company_info",
    path: "/v2/trustpilot/company/info",
    methods: ["GET", "POST"],
    summary: "Trustpilot Company Info",
    description:
      "Retrieve Trustpilot company profile data, including trust score, star rating, categories, contact info, and review response behavior.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A Trustpilot company URL or domain name.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "untappd-beer",
    operation: "untappd_beer",
    path: "/v2/untappd/beer",
    methods: ["GET", "POST"],
    summary: "Untappd Beer",
    description: "Read one Untappd beer, including ABV, IBU, and brewery.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. The numeric Untappd beer id from search, or a beer URL under /b/ or /beer/. A keyword is not accepted.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "untappd-search",
    operation: "untappd_search",
    path: "/v2/untappd/search",
    methods: ["GET", "POST"],
    summary: "Untappd Search",
    description:
      "Search Untappd beers by keyword. Cards include brewery, ABV, and IBU. next is null when Untappd does not expose a next page.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. A beer keyword, or an Untappd search URL whose path is /search.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "upwork-freelancer",
    operation: "upwork_freelancer",
    path: "/v2/upwork/freelancer",
    methods: ["GET", "POST"],
    summary: "Upwork Freelancer",
    description:
      "Upwork Freelancer API: fetch public freelancer profile data from a profile ID, username or URL. Returns bio, hourly rate, skills, ratings and agency info via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Upwork freelancer profile ID, username, or full profile URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "upwork-jobs",
    operation: "upwork_jobs",
    path: "/v2/upwork/jobs",
    methods: ["GET", "POST"],
    summary: "Upwork Jobs",
    description:
      "Upwork Jobs API: search freelance job listings by skill slug or URL. Returns budgets, skills, experience level and pagination via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Upwork skill slug or full freelance-jobs URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "upwork-services",
    operation: "upwork_services",
    path: "/v2/upwork/services",
    methods: ["GET", "POST"],
    summary: "Upwork Services",
    description:
      "Upwork Services API: browse Project Catalog listings by category slug or URL. Returns prices, product IDs and pagination via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Upwork Project Catalog category slug or full services URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "upwork-services-info",
    operation: "upwork_services_info",
    path: "/v2/upwork/services/info",
    methods: ["GET", "POST"],
    summary: "Upwork Services Info",
    description:
      "Upwork Services Info API: fetch Project Catalog product details from a product URL. Returns packages, pricing, seller, media and breadcrumbs via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Upwork Project Catalog product URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "usage",
    operation: "usage",
    path: "/v2/usage",
    methods: ["GET"],
    summary: "Usage",
    description:
      "Retrieve real-time usage statistics and credit balance for your Piloterr account.",
    params: [],
  },
  {
    command: "usaspending-award",
    operation: "usaspending_award",
    path: "/v2/usaspending/award",
    methods: ["GET", "POST"],
    summary: "USAspending Award",
    description:
      "Fetch one US federal award by its generated id or by a usaspending.gov award URL. Amounts are a number plus a display string.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Generated award id or a usaspending.gov/award URL. Example: CONT_AWD_GSFC0198106DNAS526555_8000_-NONE-_-NONE-.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "usaspending-search",
    operation: "usaspending_search",
    path: "/v2/usaspending/search",
    methods: ["GET", "POST"],
    summary: "USAspending Search",
    description:
      "Search US federal awards by keyword. award_type selects one group: contract (default), grant, idv, or loan. Amounts are a number plus a display string.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Keyword or a usaspending.gov search URL. Example: software. An award URL returns 400.",
      },
      {
        name: "award_type",
        type: "string",
        required: false,
        description:
          "Optional. One group: contract (default when omitted), grant, idv, or loan. Example: grant.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number from 1. Example: 2. Defaults to 1. Each page has 10 awards. total_results stays null.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "vestiairecollective-product",
    operation: "vestiairecollective_product",
    path: "/v2/vestiairecollective/product",
    methods: ["GET", "POST"],
    summary: "Vestiaire Collective Product",
    description:
      "Fetch one Vestiaire Collective listing by product URL. The response is a flat object with price, size, condition, and seller.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A vestiairecollective.com product URL ending in the item id and .shtml. The response is one flat listing. price is the number on the page and price_display is that amount as written. A keyword or a s…",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Default false. true replaces the listing with result, the rendered HTML.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "vestiairecollective-search",
    operation: "vestiairecollective_search",
    path: "/v2/vestiairecollective/search",
    methods: ["GET", "POST"],
    summary: "Vestiaire Collective Search",
    description:
      "Search Vestiaire Collective by keyword or catalog URL. Each card has brand, name, price, size, and a product link.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A keyword or a vestiairecollective.com search or category URL. Empty, another host, or a product URL returns 400. A keyword searches www.vestiairecollective.com. A full URL keeps its host. Each card…",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number starting at 1. Omit it for page 1, which has no /p-N/ segment. Page 2 requests /p-2/ and sets pagination.page to 2. pagination.next is the next catalog URL, or null on the last page. A va…",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Default false. true replaces results and pagination with result, the rendered HTML.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "vinted-item",
    operation: "vinted_item",
    path: "/v2/vinted/item",
    methods: ["GET", "POST"],
    summary: "Vinted Item",
    description:
      "Fetch a Vinted listing by item URL or numeric ID. Parses the public item page (Next.js payload), returns a normalized snake_case object with photos, attributes, shipping, pricing, and optional seller profile.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Vinted item URL or numeric item ID.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Force the Vinted domain when query is a bare item ID only.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "vinted-search",
    operation: "vinted_search",
    path: "/v2/vinted/search",
    methods: ["GET", "POST"],
    summary: "Vinted Search",
    description:
      "Search Vinted second-hand listings by keyword or catalog URL across vinted.fr, vinted.com and other domains. Returns results and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search keyword or full Vinted catalog URL. Filters from the URL query string are forwarded to the internal Vinted API.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number. Default 1.",
      },
      {
        name: "per_page",
        type: "number",
        required: false,
        description: "Results per page. Default 24.",
      },
      {
        name: "order",
        type: "string",
        required: false,
        description: "Optional sort order.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "Force the Vinted domain when query is a keyword only.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "vinted-user-info",
    operation: "vinted_user_info",
    path: "/v2/vinted/user/info",
    methods: ["GET", "POST"],
    summary: "Vinted User Info",
    description:
      "Retrieve public Vinted seller profile by member URL or user ID. Returns the raw /api/v2/users/{id} object: login, photo, feedback stats, followers, verification, bundle discounts, and listing counts.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Vinted member profile URL, direct API URL, or numeric user ID.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "vivareal-property",
    operation: "vivareal_property",
    path: "/v2/vivareal/property",
    methods: ["GET", "POST"],
    summary: "Viva Real Property",
    description:
      "Read one Viva Real property from its URL. The price follows the operation of that URL, so a sale link stays a sale price.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Viva Real listing URL under /imovel/ with an id- number.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "vivareal-search",
    operation: "vivareal_search",
    path: "/v2/vivareal/search",
    methods: ["GET", "POST"],
    summary: "Viva Real Search",
    description:
      "Search Viva Real by city and operation, sale or rent. Page with pagina. Development cards and 'from' prices are left out.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "City, City plus UF, or a Viva Real search URL.",
      },
      {
        name: "operation",
        type: "string",
        required: false,
        description: "Sale or rent when query is a city.",
        default: "sale",
      },
      {
        name: "property_type",
        type: "string",
        required: false,
        description: "Optional type when query is a city.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page from 1. Placeholder 2. Viva Real receives this as pagina=2. Page 1 and page 2 return different listings. A few featured ids can repeat. Most ids on page 2 are new.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "walmart-product",
    operation: "walmart_product",
    path: "/v2/walmart/product",
    methods: ["GET", "POST"],
    summary: "Walmart Product",
    description:
      "Extract full Walmart product page (PDP) data from a /ip/ URL: pricing, ratings, images, fulfillment, specs, badges, and availability via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Walmart product page URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "walmart-search",
    operation: "walmart_search",
    path: "/v2/walmart/search",
    methods: ["GET", "POST"],
    summary: "Walmart Search",
    description:
      "Scrape Walmart.com search result pages from a full URL and retrieve product cards with pricing, ratings, availability, and pagination via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Walmart search results URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "walmart-suggest",
    operation: "walmart_suggest",
    path: "/v2/walmart/suggest",
    methods: ["GET", "POST"],
    summary: "Walmart Suggest",
    description:
      "Get Walmart.com search autocomplete suggestions for a keyword via browser rendering, with optional US ZIP code localization.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword for Walmart autocomplete suggestions.",
      },
      {
        name: "zipcode",
        type: "string",
        required: false,
        description:
          "Optional US ZIP code to localize Walmart store and inventory context for suggestions.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "website-antibot",
    operation: "website_antibot",
    path: "/v2/website/antibot",
    methods: ["GET"],
    summary: "Website Antibot",
    description:
      "Detect which anti-bot protection protects a website before you scrape. Get the vendor, confidence level, and matching clues from a single URL check.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full URL or domain name to analyze for anti-bot protection. Must be a valid hostname.",
      },
      {
        name: "timeout",
        type: "number",
        required: false,
        description: "Maximum request timeout in seconds. Defaults to 15.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "website-crawler",
    operation: "website_crawler",
    path: "/v2/website/crawler",
    methods: ["GET", "POST"],
    summary: "Website Crawler",
    description:
      "Fetch public pages with fast HTTP crawling (no JavaScript). Best first choice for static or server-rendered HTML; use Rendering or WebUnlocker when JS or anti-bot blocks you.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A public website URL to fetch with the Crawler engine (HTTP only, no JavaScript). Must include http:// or https://.",
      },
      {
        name: "allow_redirects",
        type: "boolean",
        required: false,
        description:
          "Controls whether the crawler should follow HTTP redirects.",
        default: true,
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Controls whether the response returns the raw, unprocessed HTML source of the page.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "website-email-phone-extractor",
    operation: "website_email_phone_extractor",
    path: "/v2/website/email_phone_extractor",
    methods: ["GET", "POST"],
    summary: "Website Email Phone Extractor",
    description:
      "Extract emails and phone numbers from websites for comprehensive contact details, including social media profiles across 12+ platforms.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          'A website URL to crawl for contact information. Must include the http:// or https:// protocol. The crawler will follow internal links ("a" anchors) to find contact details across the site.',
      },
      {
        name: "country_code",
        type: "string",
        required: false,
        description:
          "An ISO 3166-1 alpha-2 country code used to improve the accuracy of phone number validation and parsing.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "website-rendering",
    operation: "website_rendering",
    path: "/v2/website/rendering",
    methods: ["GET", "POST"],
    summary: "Website Rendering",
    description:
      "Render JavaScript-heavy pages in a headless browser and return post-render HTML. Use when Crawler returns empty DOM; escalate to WebUnlocker if bot protection blocks the session.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A public website URL to render in a headless browser. Must include http:// or https://.",
      },
      {
        name: "wait_in_seconds",
        type: "number",
        required: false,
        description:
          "Number of seconds to wait after page load before returning the rendered HTML. Useful for pages with delayed rendering or animations.",
        default: 0,
      },
      {
        name: "wait_for",
        type: "string",
        required: false,
        description:
          "A CSS or XPath selector to wait for before returning the rendered HTML. The headless browser will hold the response until the specified element appears in the DOM.",
      },
      {
        name: "block_ads",
        type: "boolean",
        required: false,
        description:
          "Controls whether the headless browser should block ad requests during rendering.",
        default: false,
      },
      {
        name: "timeout",
        type: "number",
        required: false,
        description:
          "Maximum number of seconds to wait for the page to fully load before returning whatever has been rendered so far.",
        default: 30,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "website-screenshot",
    operation: "website_screenshot",
    path: "/v2/website/screenshot",
    methods: ["GET", "POST"],
    summary: "Website Screenshot",
    description:
      "Browser-like Screenshot API that captures webpages as PNG/JPEG/WebP or PDF for previews, QA, reporting, monitoring, and archiving no headless setup.",
    params: [
      {
        name: "url",
        type: "string",
        required: true,
        description:
          "The URL of the webpage to capture. Examples:  https://www.amazon.com/s?k=pokemon ",
      },
      {
        name: "format",
        type: "string",
        required: false,
        description: "The output format of the screenshot.",
        enum: ["jpeg", "jpg", "pdf", "png", "webp"],
        default: "png",
      },
      {
        name: "device",
        type: "string",
        required: false,
        description: "The device type to emulate for the screenshot.",
        enum: [
          "galaxy_fold4",
          "galaxy_s23",
          "galaxy_s23_ultra",
          "galaxy_s8",
          "huawei_mate_50_pro",
          "huawei_p60_pro",
          "ipad",
          "iphone_12",
          "iphone_13_mini",
          "iphone_13_pro_max",
          "iphone_14_pro",
          "iphone_14_pro_max",
          "iphone_x",
          "pixel_5",
          "pixel_6a",
          "pixel_7_pro",
          "redmi_note_11",
          "redmi_note_12_pro",
        ],
      },
      {
        name: "full_page",
        type: "boolean",
        required: false,
        description:
          "Capture the entire page instead of just the visible viewport.",
        default: false,
      },
      {
        name: "full_page_scroll",
        type: "boolean",
        required: false,
        description:
          "Scroll the page to fully load lazy-loaded elements before capturing a full-page screenshot.",
        default: false,
      },
      {
        name: "full_page_scroll_duration",
        type: "number",
        required: false,
        description:
          "Time in milliseconds for scrolling before capturing the full page.",
        default: 400,
      },
      {
        name: "viewport_width",
        type: "number",
        required: false,
        description: "The width of the browser viewport in pixels.",
        default: 1280,
      },
      {
        name: "viewport_height",
        type: "number",
        required: false,
        description: "The height of the browser viewport in pixels.",
        default: 1024,
      },
      {
        name: "scale_factor",
        type: "number",
        required: false,
        description: "The scale factor for high-resolution screenshots.",
        default: 1,
      },
      {
        name: "image_quality",
        type: "string",
        required: false,
        description: "Generate images with custom quality settings.",
        default: "80",
      },
      {
        name: "selector",
        type: "string",
        required: false,
        description:
          "Capture a specific element on the page instead of the full viewport.",
      },
      {
        name: "cache",
        type: "boolean",
        required: false,
        description: "Cache the response.",
        default: false,
      },
      {
        name: "cache_ttl",
        type: "number",
        required: false,
        description: "Cache the response for a custom TTL (in seconds).",
        default: 2592000,
      },
      {
        name: "remove_selectors",
        type: "string",
        required: false,
        description:
          "A comma-separated list of elements to hide before capturing (e.g., ads, popups).",
      },
      {
        name: "remove_cookie_banners",
        type: "boolean",
        required: false,
        description: "Automatically remove cookie banners before capturing.",
        default: false,
      },
      {
        name: "remove_ads",
        type: "boolean",
        required: false,
        description: "Automatically remove ads before capturing.",
        default: false,
      },
      {
        name: "block_resources",
        type: "string",
        required: false,
        description:
          "Comma-separated list of resource types to block (e.g., “image,stylesheet,font”).",
        enum: [
          "document",
          "eventsource",
          "fetch",
          "font",
          "image",
          "manifest",
          "media",
          "other",
          "script",
          "stylesheet",
          "texttrack",
          "websocket",
          "xhr",
        ],
      },
      {
        name: "block_urls",
        type: "string",
        required: false,
        description:
          "Comma-separated list of URL patterns to block (e.g., “analytics,tracking,advertisement”).",
      },
      {
        name: "delay",
        type: "number",
        required: false,
        description: "Delay in seconds before capturing the screenshot.",
        default: 0,
      },
      {
        name: "wait_until",
        type: "array",
        required: false,
        description: "Define when to capture.",
        items: "string",
        enum: ["domcontentloaded", "load", "networkidle0", "networkidle2"],
      },
      {
        name: "wait_for_selector",
        type: "string",
        required: false,
        description:
          "Wait for a specific element to appear before taking the screenshot.",
      },
      {
        name: "proxy",
        type: "string",
        required: false,
        description: "Specify a proxy server to route your request through.",
      },
      {
        name: "s3_secret_key",
        type: "string",
        required: false,
        description: "AWS S3 secret access key.",
      },
      {
        name: "s3_access_key_id",
        type: "string",
        required: false,
        description: "AWS S3 access key ID.",
      },
      {
        name: "s3_bucket",
        type: "string",
        required: false,
        description:
          "The S3 bucket name where the screenshot will be uploaded.",
      },
      {
        name: "s3_object_key",
        type: "string",
        required: false,
        description:
          "The filename for the S3 object (auto-generated if not provided).",
      },
      {
        name: "s3_region",
        type: "string",
        required: false,
        description: "AWS S3 region for storage.",
      },
      {
        name: "storage_endpoint",
        type: "string",
        required: false,
        description:
          "Leave this field empty for AWS S3. Only specify a value if required. S3-compatible storage services are supported, for example, use https://<accountId>.r2.cloudflarestorage.com for Cloudflare R2.",
      },
      {
        name: "s3_url",
        type: "boolean",
        required: false,
        description:
          "Use S3 storage for screenshots. The S3 URL will be returned in the response.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "website-technology",
    operation: "website_technology",
    path: "/v2/website/technology",
    methods: ["GET", "POST"],
    summary: "Website Technology",
    description:
      "Identify the technologies behind any website CMS, frameworks, analytics, CDN, hosting, and more, for competitive market analysis and technological insight.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A website URL to analyze for technology stack detection. Must include the http:// or https:// protocol.",
      },
      {
        name: "mode",
        type: "string",
        required: false,
        description:
          "Controls the level of detail returned in the technology detection response.",
        default: "expert",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "website-webunlocker",
    operation: "website_webunlocker",
    path: "/v2/website/webunlocker",
    methods: ["GET", "POST"],
    summary: "Website WebUnlocker",
    description:
      "Bypass advanced anti-bot systems (Cloudflare, DataDome, Akamai, PerimeterX) on whitelisted domains. Combines browser rendering and unlock tooling; use after Crawler and Rendering fail.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A public website URL to unlock with the WebUnlocker engine. Must include http:// or https://. The target domain must be on Piloterr's approved whitelist.",
      },
      {
        name: "allow_redirects",
        type: "boolean",
        required: false,
        description:
          "Controls whether the WebUnlocker engine should follow HTTP redirects.",
        default: true,
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Controls whether the response returns the raw, unprocessed HTML source of the page.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "weibo-post-info",
    operation: "weibo_post_info",
    path: "/v2/weibo/post/info",
    methods: ["GET", "POST"],
    summary: "Weibo Post Info",
    description:
      "Retrieve one public Weibo post by post id, including text, images, publish time, engagement counts, and author profile.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Weibo post id.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "weibo-search",
    operation: "weibo_search",
    path: "/v2/weibo/search",
    methods: ["GET", "POST"],
    summary: "Weibo Search",
    description:
      "Search public Weibo posts by keywords. Each post includes the author, text, publish time, engagement counts, image, and video link.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keywords to search, such as AI.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, starting at 1. Default 1. Page 2 is the next slice of the same keywords.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "welcometothejungle-company",
    operation: "welcometothejungle_company",
    path: "/v2/welcometothejungle/company",
    methods: ["GET", "POST"],
    summary: "Welcome to the Jungle Company",
    description:
      "Welcome to the Jungle company profile: headcount, offices, sectors and website (1 credit).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Slug, company name, or a Welcome to the Jungle company URL.",
      },
      {
        name: "language",
        type: "string",
        required: false,
        description:
          "fr (default) or en. en-gb and en-us count as en. Chooses the language of the profile text and URL.",
        default: "fr",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "welcometothejungle-search",
    operation: "welcometothejungle_search",
    path: "/v2/welcometothejungle/search",
    methods: ["GET", "POST"],
    summary: "Welcome to the Jungle Search",
    description:
      "Search Welcome to the Jungle jobs. Returns offer cards and pagination (1 credit).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Job keyword or a Welcome to the Jungle jobs-search URL.",
      },
      {
        name: "language",
        type: "string",
        required: false,
        description:
          "fr (default) or en. en-gb and en-us count as en. A /fr/ or /en/ path in the URL overrides this.",
        default: "fr",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page from 1, 30 offers. A page value already in the URL overrides this.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "wellfound-company-info",
    operation: "wellfound_company_info",
    path: "/v2/wellfound/company/info",
    methods: ["GET", "POST"],
    summary: "Wellfound Company Info",
    description:
      "Retrieve startup and company data from Wellfound (formerly AngelList), including description, funding, team size, hiring status, and social links.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A Wellfound company URL or company slug.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "x-post-info",
    operation: "x_post_info",
    path: "/v2/x/post/info",
    methods: ["GET", "POST"],
    summary: "X Post Info (twitter)",
    description:
      "X Post Info API: fetch public tweet data (text, likes, retweets, views, media) from a status URL or tweet ID via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "X tweet to retrieve. Accepts a full status URL or numeric tweet ID.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "x-profile-info",
    operation: "x_profile_info",
    path: "/v2/x/profile/info",
    methods: ["GET", "POST"],
    summary: "X Profile Info (twitter)",
    description:
      "X Profile Info API: fetch public X/Twitter profile data (bio, followers, verification, avatars) from a username or URL via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "X profile to look up. Accepts a username, @handle, or profile URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "yahoo-search",
    operation: "yahoo_search",
    path: "/v2/yahoo/search",
    methods: ["GET", "POST"],
    summary: "Yahoo Search",
    description:
      "Query Yahoo via API and retrieve structured organic results with country and language.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search query sent to Yahoo Search.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number. Page 1 is the first page of results.",
        default: 1,
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description: "Country code, for example us, fr, gb, de, jp.",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description: "Language code, for example en, fr, de, ja, zh.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "yellowpages-business",
    operation: "yellowpages_business",
    path: "/v2/yellowpages/business",
    methods: ["GET", "POST"],
    summary: "Yellowpages Business",
    description:
      "Extract a full Yellow Pages business profile from a listing URL, including phone, website, categories, and ratings via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Yellow Pages business listing URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "yellowpages-search",
    operation: "yellowpages_search",
    path: "/v2/yellowpages/search",
    methods: ["GET", "POST"],
    summary: "Yellowpages Search",
    description:
      "Search Yellow Pages businesses from a full search URL and retrieve names, phones, addresses, ratings, opening hours, and pagination via browser rendering.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Yellow Pages search URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "yelp-business",
    operation: "yelp_business",
    path: "/v2/yelp/business",
    methods: ["GET", "POST"],
    summary: "Yelp Business",
    description:
      "Fetch a Yelp business profile from a full business URL with phone, address, website, logo, hours, and claim status.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Yelp business URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "yelp-reviews",
    operation: "yelp_reviews",
    path: "/v2/yelp/reviews",
    methods: ["GET", "POST"],
    summary: "Yelp Reviews",
    description:
      "Fetch paginated Yelp reviews for a business with rating, text, author profile, reactions, and attached photos or videos.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Yelp business ID / encid.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number. Each page returns up to 10 reviews. Default: 1.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "yelp-search",
    operation: "yelp_search",
    path: "/v2/yelp/search",
    methods: ["GET", "POST"],
    summary: "Yelp Search",
    description:
      "Search Yelp by keyword and location and retrieve paginated business cards with ratings, categories, photos, and sponsored flags.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Yelp search URL with find_desc and find_loc query parameters.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "zapimoveis-ad",
    operation: "zapimoveis_ad",
    path: "/v2/zapimoveis/ad",
    methods: ["GET", "POST"],
    summary: "Zap Imóveis Ad",
    description:
      "Get a full Zap Imóveis listing by URL: price, IPTU, features, coordinates, images, and publisher (1 credit).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Zap Imóveis listing URL. Accepts /imovel/ and /lancamentos/.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "zapimoveis-search",
    operation: "zapimoveis_search",
    path: "/v2/zapimoveis/search",
    methods: ["GET", "POST"],
    summary: "Zap Imóveis Search",
    description:
      "Search Zap Imóveis listings by city or search URL. Returns prices, IPTU, condominium fees, rooms, and pagination (1 credit).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "City, City, UF, neighborhood, or full Zap Imóveis search URL.",
      },
      {
        name: "operation",
        type: "string",
        required: false,
        description:
          "Transaction type. Used when query is a city. Ignored as a path builder when query is a full URL.",
        default: "sale",
      },
      {
        name: "property_type",
        type: "string",
        required: false,
        description: "Property type. Used when query is a city.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number (1-based). Default: 1. Values above 1 set pagina on the URL.",
        default: 1,
      },
      {
        name: "min_price",
        type: "number",
        required: false,
        description: "Minimum asking price in BRL.",
      },
      {
        name: "max_price",
        type: "number",
        required: false,
        description: "Maximum asking price in BRL.",
      },
      {
        name: "min_area",
        type: "number",
        required: false,
        description: "Minimum area in m².",
      },
      {
        name: "max_area",
        type: "number",
        required: false,
        description: "Maximum area in m².",
      },
      {
        name: "min_bedrooms",
        type: "number",
        required: false,
        description: "Minimum bedroom count.",
      },
      {
        name: "min_bathrooms",
        type: "number",
        required: false,
        description: "Minimum bathroom count.",
      },
      {
        name: "min_parking",
        type: "number",
        required: false,
        description: "Minimum parking spaces.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "zazzle-product",
    operation: "zazzle_product",
    path: "/v2/zazzle/product",
    methods: ["GET", "POST"],
    summary: "Zazzle Product",
    description:
      "Fetch one Zazzle product by its product URL or by a slug that ends in the numeric product id.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Product URL or slug ending in the numeric product id. Example: https://www.zazzle.com/branded_logo_two_tone_coffee_mug-256528848440338952.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "zazzle-search",
    operation: "zazzle_search",
    path: "/v2/zazzle/search",
    methods: ["GET", "POST"],
    summary: "Zazzle Search",
    description:
      "Search Zazzle products by keyword. page maps to the pg parameter. Prices are a number plus a display string.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Keyword or a zazzle.com/s search URL. Example: coffee mug. A product URL returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number from 1. Example: 2. Maps to the Zazzle pg parameter. Defaults to 1.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "zillow-property",
    operation: "zillow_property",
    path: "/v2/zillow/property",
    methods: ["GET", "POST"],
    summary: "Zillow Property",
    description:
      "Extract full property details from a Zillow homedetails URL, including specs, photos, schools, tax history, and agent attribution.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Zillow homedetails URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "zillow-search",
    operation: "zillow_search",
    path: "/v2/zillow/search",
    methods: ["GET", "POST"],
    summary: "Zillow Search",
    description:
      "Search Zillow listings from a search or map URL and retrieve prices, beds, baths, coordinates, and listing status.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Zillow search or map results URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "zonaprop-property",
    operation: "zonaprop_property",
    path: "/v2/zonaprop/property",
    methods: ["GET", "POST"],
    summary: "ZonaProp Property",
    description:
      "Read one ZonaProp listing from its URL. You get the asking price in USD or ARS, the address, and the publisher.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "ZonaProp listing URL under /propiedades/clasificado/.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "zonaprop-search",
    operation: "zonaprop_search",
    path: "/v2/zonaprop/search",
    methods: ["GET", "POST"],
    summary: "ZonaProp Search",
    description:
      "Search ZonaProp for apartments or houses in an Argentine city. Page with pagina. A few featured ads can repeat. Development projects priced 'from' are left out.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Place or a ZonaProp search URL.",
      },
      {
        name: "operation",
        type: "string",
        required: false,
        description: "Sale or rent when query is a place.",
      },
      {
        name: "property_type",
        type: "string",
        required: false,
        description: "Kind of property. Default departamentos.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page from 1. ZonaProp writes this into the path as -pagina-N.html.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "zoopla-property",
    operation: "zoopla_property",
    path: "/v2/zoopla/property",
    methods: ["GET", "POST"],
    summary: "Zoopla Property",
    description:
      "Extract full property details from a Zoopla listing URL, including price, specs, photo gallery, EPC rating, coordinates, and agent data.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Zoopla property detail URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "zoopla-search",
    operation: "zoopla_search",
    path: "/v2/zoopla/search",
    methods: ["GET", "POST"],
    summary: "Zoopla Search",
    description:
      "Search Zoopla listings from a search URL and retrieve prices, specs, photos, agency info, and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Zoopla search results URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "zooplus-product",
    operation: "zooplus_product",
    path: "/v2/zooplus/product",
    methods: ["GET", "POST"],
    summary: "Zooplus Product",
    description:
      "Read one Zooplus product by id or URL, in the region of that shop. Variants keep their own price and EAN.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A product link, a /shop/.../{id} path, or the product number.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Which country shop when query is a number or a path. fr is France (default). de is Germany. uk is the United Kingdom.",
        default: "fr",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Set to true to get the raw HTML in result instead of the product.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "zooplus-search",
    operation: "zooplus_search",
    path: "/v2/zooplus/search",
    methods: ["GET", "POST"],
    summary: "Zooplus Search",
    description:
      "Search a Zooplus country shop by keyword. Region defaults to France. Page through food, litter, and accessory cards with local prices.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "What to look for. A word, or a Zooplus search link.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Which country shop. fr is France (default, www.zooplus.fr). de is Germany (www.zooplus.de). uk is the United Kingdom (www.zooplus.co.uk).",
        default: "fr",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Which page of results, starting at 1. Page 2 uses p=2 and returns different products.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Set to true to get the raw HTML in result instead of the product list.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "zoro-product",
    operation: "zoro_product",
    path: "/v2/zoro/product",
    methods: ["GET", "POST"],
    summary: "Zoro Product",
    description:
      "Get a Zoro product page: title, brand, USD price, Zoro number, manufacturer number, images, and specifications.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Zoro product URL, or a path that contains /i/G....",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the rendered HTML as {"result": "..."} instead of JSON.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "zoro-search",
    operation: "zoro_search",
    path: "/v2/zoro/search",
    methods: ["GET", "POST"],
    summary: "Zoro Search",
    description:
      "Search Zoro by keyword or category URL. Returns product cards with USD price, brand, Zoro number, and pagination.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword, or a Zoro search or category URL. Empty, another host, or a product URL returns 400. A keyword builds /search?q=.... Each card has price as a USD number and price_display as the dollar strin…",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number starting at 1. Omit it for page 1. Page 2 adds page=2, sets pagination.page to 2, and returns the next cards. pagination.next is the next page URL, or null on the last page. A value below…",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Default false. true replaces results and pagination with result, the rendered HTML.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
];
