import React from 'react'

import './Loading.scss'

/**
 * Loading Code from https://loading.io/css/
 */

export default function Loading() {
  return (
    <div className="loading">
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
