import * as S from 'components/MediaMatch/styles'

import { MediaMatchProps } from './types'

const MediaMatch: React.FC<MediaMatchProps> = ({
  lessThan,
  greaterThan,
  children
}) => (
  <S.Wrapper lessThan={lessThan} greaterThan={greaterThan}>
    {children}
  </S.Wrapper>
)

export default MediaMatch
