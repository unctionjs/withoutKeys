import reduceWithValueKey from "@unction/reducewithvaluekey";
import mergeRight from "@unction/mergeright";
import of from "@unction/of";
import fresh from "@unction/fresh";

import {RecordType} from "./types";

export default function withoutKeys<A, B> (keys: Array<A>) {
  return function withoutKeysKeys (record: RecordType<A, B>): RecordType<A, B> {
    return reduceWithValueKey((subsetRecord: RecordType<A, B>) => (value: B) => (key: A): RecordType<A, B> => {
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
