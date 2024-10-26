export const NETFLIX_LOGO_URL =
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png";

export const NETFLIX_BG_IMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg";

export const PROFILE_PIC_URL =
  "https://avatars.githubusercontent.com/u/88373208?v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTA1MDgxYTE2ZTJlMGJiNGViMTZlYjM0MTBjNGYzOSIsIm5iZiI6MTcyOTc1MzQ5Ny43NjI5NjIsInN1YiI6IjY3MTM5ZDI0MmJiYmE2NWY3YjEwYzU3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vL9l1kOBTlUTpl7AcDYmypFCVbvrPL3gykFlZ7iOlnw",
    // Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w200";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", language: "English" },
  { identifier: "hi", language: "Hindi" },
  { identifier: "ur", language: "Urdu" },
];

export const GEMINI_KI_CHABI = "AIzaSyDYHbojfhOvABkUZ1jqCkYBkxFrklLeHrA";
// export const GEMINI_KI_CHABI = process.env.REACT_APP_GEMINI_API_KEY;
