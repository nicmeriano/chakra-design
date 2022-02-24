const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({ verbose: true })({
  reactStrictMode: true,
})
