import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/media",
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.mp3$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/media",
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
