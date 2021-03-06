export const resolvePath = (
  filePath,
  prefix = process.env.PUBLIC_URL.concat("/")
) => (filePath.startsWith("http") ? filePath : prefix.concat(filePath));

export const capitalizeFirst = str =>
str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();