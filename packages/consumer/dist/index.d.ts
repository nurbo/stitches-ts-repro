/// <reference types="react" />
import type { ComponentProps, VariantProps } from '@local/provider';
export declare const Component: import("@stitches/react/types/styled-component").StyledComponent<"div", {
    kind?: "a" | "b" | undefined;
}, {}, import("@stitches/react/types/css-util").CSS<{}, {}, import("@stitches/react/types/config").DefaultThemeMap, {}>>;
export declare const ComponentViaDefault: import("@stitches/react/types/styled-component").StyledComponent<"div", {
    kind?: "a" | "b" | undefined;
}, {}, import("@stitches/react/types/css-util").CSS<{}, {}, import("@stitches/react/types/config").DefaultThemeMap, {}>>;
export declare type Test = ComponentProps<typeof Component>["kind"];
export declare type TestV = VariantProps<typeof Component>["kind"];
export declare type TestDefault = ComponentProps<typeof ComponentViaDefault>["kind"];
export declare type TestDefaultV = VariantProps<typeof ComponentViaDefault>["kind"];
export declare const a: JSX.Element;
export declare const b: JSX.Element;
export declare const a_d: JSX.Element;
export declare const b_d: JSX.Element;
//# sourceMappingURL=index.d.ts.map