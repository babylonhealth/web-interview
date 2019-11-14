import React, { FunctionComponent } from 'react'

import './bottom-bar.component.scss'

export const BottomBar: FunctionComponent = props => {
  return <div className="bottom-bar">{props.children}</div>
}
