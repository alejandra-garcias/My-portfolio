/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {nextConfig,
    assetPrefix: process.env.NODE_ENV === 'production' ? '/tu-carpeta-de-despliegue/' : ''}
