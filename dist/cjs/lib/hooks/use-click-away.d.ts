import React from 'react';
export type ClickAwayProps = {
    eventType?: 'click';
    callback: () => void;
};
export declare function useClickAway({ eventType, callback }: ClickAwayProps): {
    ref: React.RefObject<HTMLDivElement>;
};
//# sourceMappingURL=use-click-away.d.ts.map