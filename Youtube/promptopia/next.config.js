/** @type {import('next').NextConfig} */

// OVERRIDE THE FOLLOWING CODE

const nextConfig = {}

module.exports = nextConfig

// FROM WRITER'S GH
/*
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config
    }
}

module.exports = nextConfig

 */