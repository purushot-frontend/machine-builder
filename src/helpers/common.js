export function sanitizeString(str) {
  str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
  return str.trim();
}

export function onlyText(str) {
  str = str.replace(/[^a-z ]/gi, "");
  return str.trim();
}

export function onlyNumber(str) {
  return str.replace(/\D/g, "").trim();
}
