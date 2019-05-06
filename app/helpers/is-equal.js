import { helper } from "@ember/component/helper";

export function isEqual([val1, val2]) {
  return val1 === val2;
}

export default helper(isEqual);
