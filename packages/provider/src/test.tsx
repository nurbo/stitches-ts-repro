import React from 'react';

import type {
  ComponentProps,
  VariantProps,
} from './index.js';
import provider, { styled } from './index.js';

export const Component = styled("div", {
  variants: {
    kind: {
      a: {},
      b: {},
    },
  },
});

export const ComponentViaDefault = provider.styled("div", {
  variants: {
    kind: {
      a: {},
      b: {},
    },
  },
});

export type Test = ComponentProps<typeof Component>["kind"];
export type TestV = VariantProps<typeof Component>["kind"];
export type TestDefault = ComponentProps<typeof ComponentViaDefault>["kind"];
export type TestDefaultV = VariantProps<typeof ComponentViaDefault>["kind"];

export const a = <Component kind="a"></Component>;
export const b = <Component kind="b"></Component>;

export const a_d = <ComponentViaDefault kind="a"></ComponentViaDefault>;
export const b_d = <ComponentViaDefault kind="b"></ComponentViaDefault>;
