import configuration from "../configuration/cache.json";

export const saveFile = file => {
  if ("caches" in window) {
    const fileUrl = window.URL.createObjectURL(file);
    fetch(fileUrl).then(function(response) {
      return caches.open(configuration.name).then(function(cache) {
        cache.put(`${configuration.imagesDir}/${file.id}`, response);
        return window.URL.revokeObjectURL(fileUrl);
      });
    });
  }
};

export const deleteFile = file => {
  if ("caches" in window) {
    return caches.open(configuration.name).then(function(cache) {
      cache.delete(`${configuration.imagesDir}/${file.id}`);
    });
  }
};

export const getAllCachedFiles = () => {
  if ("caches" in window) {
    return caches.open(configuration.name).then(function(cache) {
      return cache.keys().then(function(cachedRequests) {
        return cachedRequests;
      });
    });
  } else {
    return [];
  }
};

export const getFileFromCache = file => {
  return new Promise(resolve => {
    if ("caches" in window) {
      caches.open(configuration.name).then(function(cache) {
        cache.match(file.url).then(function(matchedResponse) {
          console.log(matchedResponse);
          resolve(matchedResponse);
        });
      });
    }
  });
};
