export const isValidURL = (url: string) => {
  if (!url) return url;

  // eslint-disable-next-line no-useless-escape
  const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  const isValid = regexp.test(url);
  
  return isValid ? url : `https://${url}`
};