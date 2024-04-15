export const isSubElement = (el: any, check: (el: any) => boolean): boolean => {
  if (el === null) {
    return false;
  }

  if (check(el)) {
    return true;
  }

  return isSubElement(el.parentNode, check);
};
