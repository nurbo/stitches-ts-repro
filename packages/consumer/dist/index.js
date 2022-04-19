import React from 'react';
import provider, { styled } from '@local/provider';
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
export const a = React.createElement(Component, { kind: "a" });
export const b = React.createElement(Component, { kind: "b" });
export const a_d = React.createElement(ComponentViaDefault, { kind: "a" });
export const b_d = React.createElement(ComponentViaDefault, { kind: "b" });
//# sourceMappingURL=index.js.map