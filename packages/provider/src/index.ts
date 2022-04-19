import { createStitches } from '@stitches/react';

const stitches = createStitches({ prefix: "test", theme: {} });

export type Stitches = typeof stitches;

export const config: Stitches["config"] = stitches["config"];
export const createTheme: Stitches["createTheme"] = stitches["createTheme"];
export const css: Stitches["css"] = stitches["css"];
export const getCssText: Stitches["getCssText"] = stitches["getCssText"];
export const globalCss: Stitches["globalCss"] = stitches["globalCss"];
export const keyframes: Stitches["keyframes"] = stitches["keyframes"];
export const prefix: Stitches["prefix"] = stitches["prefix"];
export const reset: Stitches["reset"] = stitches["reset"];
export const styled: Stitches["styled"] = stitches["styled"];
export const theme: Stitches["theme"] = stitches["theme"];

export default stitches;

export type { ComponentProps, VariantProps } from '@stitches/react';
