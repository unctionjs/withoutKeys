import reduceWithValueKey from "@unction/reducewithvaluekey";
import mergeRight from "@unction/mergeright";
import of from "@unction/of";
import fresh from "@unction/fresh";

export default function withoutKeys (keys) {
  return function withoutKeysKeys (record) {
    return reduceWithValueKey((subsetRecord) => (value) => (key) => {
      if (keys.includes(key)) {
        return subsetRecord;
      }

      return mergeRight(subsetRecord)(of(key)(value)(subsetRecord));
    })(
      fresh(record)
    )(
      record
    );
  };
}
