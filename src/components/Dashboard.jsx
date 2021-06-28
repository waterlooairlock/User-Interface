import React, { useState } from 'react';
import ReadingBlock from './dashboard/ReadingBlock';


function DashboardPage() {
    return(
        <div className="fade-in">
            <h1>Dashboard Page</h1>
            <ReadingBlock tempVal={123} pressureVal={22} airQualVal={87}/>
        </div>
    )
}

export default DashboardPage;