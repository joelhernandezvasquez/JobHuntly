

import { auth } from '@/auth.config';
import React from 'react'

const dashboard = async () => {
  const session = await auth();

  return (
    <div>
      
    </div>
  )
}

export default dashboard