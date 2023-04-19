import FlexRow from "../../flex-row/flex-row";
import { formatHash } from "../../../utils/formatters";
import Avatar from "../../avatar/avatar";
import styled from "styled-components";
import BodyText from "../../body-text/body-text";

const StyledBodyText = styled(BodyText)(({ theme }) => ({
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
      <StyledBodyText size={2} monotype>
        {formatHash(hash)}
      </StyledBodyText>
    </FlexRow>
  );
};

export default Account;
