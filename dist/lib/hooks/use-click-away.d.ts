export type ClickAwayProps = {
    eventType?: 'click';
    callback: () => void;
};
export declare function useClickAway({ eventType, callback }: ClickAwayProps): {
    ref: import('react').RefObject<HTMLDivElement>;
};
//# sourceMappingURL=use-click-away.d.ts.map