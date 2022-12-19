/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    LOCAL: "LOCAL",
    BASE_URL: "http://localhost:3000/api",
    BASE_URL_PROD: "https://maria-caprixosa.vercel.app/api"
  }
}

module.exports = nextConfig
