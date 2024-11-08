import Formnav from '@/components/Navigation/formnav'
import React from 'react'

function layout({children}:any) {
  return (
    <div >
        <Formnav/>
      {children}
    </div>
  )
}

export default layout
