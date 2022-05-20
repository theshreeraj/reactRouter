import React from 'react'

const Unmounting = () => {
    return (
        <div>
            <h2 align="center">Unmounting</h2><br />
            <ul>
                <li>ComponentWillUnmount is the only method that executes in unmount phase.</li><br/><br />
                <li>Component enters into this phase when there is no matching in element tree for<br/> this component.</li><br /><br />
                <li>Just before the component gets removed from actual DOM, this method gets called.
                </li><br /><br />
                <li>Once component is removed from the DOM, it gets available for the garbage collection<br/> in React.</li>
            </ul>
        </div>
    )
}

export default Unmounting
