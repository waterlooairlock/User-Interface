import React from 'react';
import ReadingBlock from './dashboard/ReadingBlock';
import NotifsContainer from "./dashboard/NotifsContainer";

const SAMPLE_NOTIFS = [
    {
        content: "Air pressure very high",
        date: '2020-12-17T03:24:00',
        priority: 0,
    },
    {
        content: "Cool beans",
        date: '2020-12-17T03:26:00',
        priority: 1,
    },
    {
        content: "Temperature low",
        date: '20202-12-17T03:27:00',
    }
]

function DashboardPage() {
    return(
        <div className="fade-in">
            <h1>Dashboard Page</h1>
            <ReadingBlock tempVal={123} pressureVal={22} airQualVal={87}/>
            <NotifsContainer notifs={SAMPLE_NOTIFS}/>
        </div>
    )
}

export default DashboardPage;