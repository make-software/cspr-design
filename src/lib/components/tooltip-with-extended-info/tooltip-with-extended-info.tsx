import React from 'react';
import {isValidPublicKey} from "casper-js-sdk";
import FlexColumn from "../flex-column/flex-column";
import CaptionText from "../caption-text/caption-text";
import BodyText from "../body-text/body-text";
import Tooltip from "../tooltip/tooltip";

const TooltipWithExtendedInfo = ({
  extendedLine,
  hash,
  tooltipCaption,
  children,
}: React.PropsWithChildren<{
  hash: string;
  tooltipCaption?: string;
  extendedLine?: {
    title: string | undefined;
    caption: string;
  };
}>) => {

  const hasExtendedLine = extendedLine?.title != undefined;

  const keyTooltipCaption = tooltipCaption
    ? tooltipCaption
    : isValidPublicKey(hash)
      ? 'Public Key'
      : 'Account hash';

  const title = hasExtendedLine ? extendedLine?.title : hash;
  const caption = hasExtendedLine ? extendedLine?.caption : keyTooltipCaption;

  const additionalBlock = hasExtendedLine && (
    <FlexColumn>
      <CaptionText size={1} variation={'gray'}>
        {keyTooltipCaption}
      </CaptionText>
      <BodyText scale={'xs'} lineHeight={'xs'} size={3} monotype>
        {hash}
      </BodyText>
    </FlexColumn>
  );

  return (
    <Tooltip
      monotype={!hasExtendedLine}
      tooltipContent={title}
      caption={caption}
      additionalBlock={additionalBlock}
      scale={'xs'} lineHeight={'xs'}
    >
      {children}
    </Tooltip>
  );
};

export default TooltipWithExtendedInfo;
