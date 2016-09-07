// @flow

// Taken from:
// https://github.com/necolas/react-native-web/blob/c9d68fe93eb02a547e49a66dcbf7fc2c68d42ae5/src/modules/ReactNativePropRegistry/index.js

const emptyObject = {};
const objects = {};
let uniqueID = 1;

export default class StyleRegistry {
  static register(object: Object): number {
    let id = ++uniqueID;
    if (process.env.NODE_ENV !== 'production') {
      Object.freeze(object);
    }
    objects[id] = object;
    return id;
  }

  static getByID(id: number): Object {
    if (!id) {
      // Used in the style={[condition && id]} pattern,
      // we want it to be a no-op when the value is false or null
      return emptyObject;
    }

    const object = objects[id];
    if (!object) {
      console.warn('Invalid style with id `' + id + '`. Skipping ...');
      return emptyObject;
    }
    return object;
  }
}
