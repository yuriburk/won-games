import { PropsWithChildren } from 'react'
import GlobalStyles from '@/styles/global'

const Providers = ({ children }: PropsWithChildren) => (
  <>
    <GlobalStyles />
    {children}
  </>
)

export default Providers
