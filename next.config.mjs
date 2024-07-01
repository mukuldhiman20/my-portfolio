/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.flabs.in',
              port: '',
              pathname: '/webassets/6dfcbbc05c598f509949.jpg',
            },
          ],
        },
      };

export default nextConfig;
