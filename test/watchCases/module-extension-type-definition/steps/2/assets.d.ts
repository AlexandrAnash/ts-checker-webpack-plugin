// Webpack compatible module definition for images resolved by file-loader

declare module "*.bmp" {
  const content: string;
  export = content;
}

declare module "*.jpg" {
  const content: string;
  export = content;
}

declare module "*.jpeg" {
  const content: string;
  export = content;
}

declare module "*.svg" {
  const content: string;
  export = content;
}
