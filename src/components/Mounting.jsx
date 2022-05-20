import React from 'react'

const Mounting = () => {
    return (
        <div>
            <h2 align="center">Mounting</h2><br/>
            <ul>
                <li>We can update the state here.</li><br/><br/>
                <li>Last minute optimization can be done</li><br/><br/>
                <li>This method is rarely used because it is placed between constructor and render. <br/>Whatever required by this time of life of component is already done by constructor or will be done by render method.
                </li><br/><br/>
                <li>Logging or connection to database can be established here.</li><br/><br/>
                <li>It’s a legacy method and React itself recommends for not using this method in new version starting with 17.</li>
            </ul>
        </div>
    )
}

export default Mounting
