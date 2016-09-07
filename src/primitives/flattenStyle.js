// @flow

import invariant from 'fbjs/lib/invariant';
import type { StyleObj } from './StyleSheetTypes';

function flattenStyle(style: ?StyleObj): ?Array<number | Object> {
  if (!style) {
    return undefined;
  }
  invariant(style !== true, 'style may be false but not true');

  if (!Array.isArray(style)) {
    return style;
  }

  const result = [];
  for (let i = 0, styleLength = style.length; i < styleLength; ++i) {
    const computedStyle = flattenStyle(style[i]);
    if (computedStyle) {
      if (Array.isArray(computedStyle)) {
        result.push(...computedStyle);
      } else {
        result.push(computedStyle);
      }
    }
  }
  return result;
}

export default flattenStyle;

// function getStyle(style) {
//   if (typeof style === 'number') {
//     return StyleRegistry.getByID(style);
//   }
//   return style;
// }

// function flattenStyle(style: ?StyleObj): ?Object {
//   // console.log(style);
//   if (!style) {
//     return undefined;
//   }
//   invariant(style !== true, 'style may be false but not true');
//
//   if (!Array.isArray(style)) {
//     return getStyle(style);
//   }
//
//   const result = {};
//   for (let i = 0, styleLength = style.length; i < styleLength; ++i) {
//     const computedStyle = flattenStyle(style[i]);
//     if (computedStyle) {
//       for (const key in computedStyle) {
//         if (result.hasOwnProperty(key) &&
//             typeof computedStyle[key] === 'object' &&
//             !Array.isArray(computedStyle[key])) {
//           result[key] = {
//             ...result[key],
//             ...computedStyle[key],
//           };
//         } else {
//           result[key] = computedStyle[key];
//         }
//       }
//     }
//   }
//   return result;
// }
