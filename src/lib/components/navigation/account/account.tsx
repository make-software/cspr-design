import FlexRow from '../../flex-row/flex-row';
import { formatHash } from '../../../utils/formatters';
import Avatar from '../../avatar/avatar';
import styled from 'styled-components';
import BodyText from '../../body-text/body-text';

const StyledBodyText = styled(BodyText)<{ fontSize?: string }>(
  ({ theme, fontSize }) => ({
    color: theme.styleguideColors.contentTertiary,
    fontSize: fontSize ? fontSize : '13px',
  })
);

export interface AccountProps {
  hash: string;
  logo?: string;
  fontSize?: string;
}

export const Account = ({ hash, logo, fontSize }: AccountProps) => {
  return (
    <FlexRow itemsSpacing={8} align="center">
      {logo ? (
        <Avatar src={logo} size="small" />
      ) : (
        <Avatar hash={hash} size="small" />
      )}
      <StyledBodyText size={2} monotype fontSize={fontSize}>
        {formatHash(hash)}
      </StyledBodyText>
    </FlexRow>
  );
};

export default Account;
