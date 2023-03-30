/**
 * @param {Array} classes
 */
export const combineStyle = (classes) => {
  if (!Array.isArray(classes)) return '';
  return classes.filter(Boolean).join(' ');
};
