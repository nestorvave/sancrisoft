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

export const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length === 0) return "";
  const part1 = numbers.substring(0, 3);
  const part2 = numbers.substring(3, 6);
  const part3 = numbers.substring(6, 10);

  if (numbers.length <= 3) return `(${part1}`;
  if (numbers.length <= 6) return `(${part1}) ${part2}`;
  return `(${part1}) ${part2}-${part3}`;
};
