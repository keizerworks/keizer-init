import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: ["@repo/ui"],
};

export default withMDX(config);
