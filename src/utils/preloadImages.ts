export const preloadImages = (
  imageUrls: (string | undefined)[],
): Promise<void[]> => {
  const validUrls = imageUrls.filter((url): url is string => Boolean(url));

  return Promise.all(
    validUrls.map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => {
            // ✅ Force le navigateur à décoder l'image en arrière-plan
            if (img.decode) {
              img.decode().then(resolve).catch(resolve);
            } else {
              resolve();
            }
          };
          img.onerror = () => resolve();
        }),
    ),
  );
};
