

import { auth } from '@/auth.config';

export const dashboard = async () => {
  const session = await auth();

  return (
    <div>
     <h1></h1>
    </div>
  )
}

export default dashboard