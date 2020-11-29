import reduceWithValueKey from "@unction/reducewithvaluekey";
import mergeRight from "@unction/mergeright";
import of from "@unction/of";
import fresh from "@unction/fresh";

export default function withoutKeys<A, B> (keys: Array<A>) {
  return function withoutKeysKeys (record: Record<string | number | symbol, B> | Map<A, B>): Record<string | number | symbol, B> | Map<A, B> {
    return reduceWithValueKey((subsetRecord: Record<string | number | symbol, B> | Map<A, B>) => (value: B) => (key: A): Record<string | number | symbol, B> | Map<A, B> => {
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
