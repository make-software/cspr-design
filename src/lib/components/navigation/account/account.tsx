import FlexRow from "../../flex-row/flex-row";
import SubtitleText from "../../subtitle-text/subtitle-text";
import { formatHash } from "../../../utils/formatters";
import Avatar from "../../avatar/avatar";
import styled from "styled-components";

const StyledSubtitleText = styled(SubtitleText)(({ theme }) => ({
  color: theme.styleguideColors.contentTertiary,
}));

export interface AccountProps {
  hash: string;
  logo?: string;
}

export const Account = ({ hash, logo }: AccountProps) => {
  return (
    <FlexRow itemsSpacing={8} align="center">
      {logo ? (
        <Avatar src={logo} size="small" />
      ) : (
        <Avatar hash={hash} size="small" />
      )}
      <StyledSubtitleText size={2} monotype>
        {formatHash(hash)}
      </StyledSubtitleText>
    </FlexRow>
  );
};

export default Account;
