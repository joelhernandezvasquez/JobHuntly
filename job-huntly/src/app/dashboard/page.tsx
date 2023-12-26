

import { auth } from '@/auth.config';
import React from 'react'

const dashboard = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <h1>Dashboard</h1>
    </div>
  )
}

export default dashboard