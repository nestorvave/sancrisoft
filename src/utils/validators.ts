export const isEmpty = (prop: any) => {
  return (
    prop === false ||
    prop === null ||
    prop === undefined ||
    (Object.prototype.hasOwnProperty.call(prop, "length") &&
      prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
  );
};
export const isEmail = (email: string) => {
  if (email === "") return false;
  const x = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  if (!x) {
    return false;
  } else {
    return true;
  }
};