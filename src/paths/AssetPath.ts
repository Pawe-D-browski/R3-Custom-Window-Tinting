/**
 * Class for handling asset paths in both development and production environments
 */
import nextConfig from "../../next.config";

export class AssetPath {
  private readonly relativePath: string;
  private static readonly basePath: string = typeof nextConfig.basePath === "string" ? nextConfig.basePath : "";

  /**
   * Create a new instance
   * @param relativePath
   */
  constructor(relativePath: string) {
    // Remove leading slash if present
    this.relativePath = relativePath.startsWith("/") ? relativePath.slice(1) : relativePath;
  }

  /**
   * Convert to a string with the correct base path
   * @returns The full path including base path when in production
   */
  toString(): string {
    return `${AssetPath.basePath}/${this.relativePath}`;
  }
}
