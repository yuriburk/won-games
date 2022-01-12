import styled from 'styled-components';

import { LogoProps } from '.';

export const Wrapper = styled.div<LogoProps>`
  color: ${({ theme, color }) => theme.colors[color!]};
`;
