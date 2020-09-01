import Store from "electron-store";
import { JSONSchemaType } from "json-schema-typed";

const schema = {
  useMacOSWindowActionButtons: {
    type: JSONSchemaType.Boolean,
    default: true,
  },
  windowBounds: {
    type: JSONSchemaType.Object,
    default: {
      width: 1100,
      minWidth: 1000,
      minHeight: 600,
      height: 700,
    },
  },
};

const config = new Store({
  schema,
  watch: true,
});

console.log(config.path);

export { schema, config };
