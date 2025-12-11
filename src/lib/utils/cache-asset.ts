interface ImageProxyUrlProps {
  ttl: string;
  width?: string | number;
}

export const getImageProxyUrl = (
  url: string | undefined,
  { ttl, width }: ImageProxyUrlProps,
) => {
  if (!url) {
    return undefined;
  }

  return url;

  // return config.image_proxy_url
  //   ? `${config.image_proxy_url}/${width},fit,ttl${ttl}/${url}`
  //   : url;
};
