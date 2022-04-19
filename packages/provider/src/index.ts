import { createStitches } from '@stitches/react';

const stitches = createStitches({ prefix: "test", theme: {} });

export const config = stitches["config"];
export const createTheme = stitches["createTheme"];
export const css = stitches["css"];
export const getCssText = stitches["getCssText"];
export const globalCss = stitches["globalCss"];
export const keyframes = stitches["keyframes"];
export const prefix = stitches["prefix"];
export const reset = stitches["reset"];
export const styled = stitches["styled"];
export const theme = stitches["theme"];

export default stitches;

export type { ComponentProps, VariantProps } from '@stitches/react';
