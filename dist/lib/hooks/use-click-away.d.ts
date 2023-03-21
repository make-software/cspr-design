import React from 'react';
export type Props = {
    eventType?: 'click';
    callback: () => void;
};
export declare function useClickAway({ eventType, callback }: Props): {
    ref: React.RefObject<HTMLDivElement>;
};
//# sourceMappingURL=use-click-away.d.ts.map