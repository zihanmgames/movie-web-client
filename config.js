window.__CONFIG__ = {
  // The URL for the CORS proxy, the URL must NOT end with a slash!
  VITE_CORS_PROXY_URL: "https://movie-web-proxy.notapr0xy.com.au",

  // The READ API key to access TMDB
  VITE_TMDB_READ_API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2FhZjVmNDU5OThlNDUwZTc4M2JjNjNiOWQ0NmM4OCIsInN1YiI6IjY0ZTZlNmJhYzYxM2NlMDEyY2M0NWY3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kNVfK69J_wLFxtDZDc3BBkiKDZmdLCf9RrVdKWuuu4k",

  // The DMCA email displayed in the footer, null to hide the DMCA link
  VITE_DMCA_EMAIL: "tw31122007@tuta.io",

  // Whether to disable hash-based routing, leave this as false if you don't know what this is
  VITE_NORMAL_ROUTER: false,

  // The backend URL to communicate with, defaults to the movie-web hosted one at backend.movie-web.app
  VITE_BACKEND_URL: "hhttps://backend-production-d0aa.up.railway.app",

  // A comma separated list of disallowed IDs in the case of a DMCA claim - in the format "series-<id>" and "movie-<id>"
  VITE_DISALLOWED_IDS: "",

  // If you want your users to be prompted with an onboarding screen before they start watching, enable this.
  VITE_HAS_ONBOARDING: false
};