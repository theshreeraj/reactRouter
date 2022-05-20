import React from 'react'

const Updating = () => {
  return (
    <div>
      <h2 align="center">Updating</h2><br/>
      <ul>
          <li>If there is a change in state object using setState , this cycle of update gets called. This<br/> cycle starts with shouldComponentUpdate directly because the other methods which<br/> we shown in above deals with props and here we have not changed the props.</li><br/><br/>
          <li>The call hierarchy after shouldComponentUpdate will remain same.</li><br/><br/>
          <li>The update of elements on actual DOM can be checked using browser developer tool to see<br/> the impacts or performance issues.<br/><br/>
          
          If we use F12 or inspect element and click on three vertical dots on right side of that inspect<br/> window, we can see below options.</li><br/><br/>
         
      </ul>
    </div>
  )
}

export default Updating
