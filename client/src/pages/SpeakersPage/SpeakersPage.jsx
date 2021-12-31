import React from 'react'
import SpeakersCard from '../../components/SpeakersCard/SpeakersCard';
import { useState, useEffect } from 'react';
import data from '../../data/data.json'
export default function SpeakersPage() {

    const [speakers, setSpeakers] = useState([])

    useEffect(() => {
        setSpeakers(data.speakers)
    }, [])

    return (
        <div >
            <h1 style={{ textAlign: "center", color: "#e62b1e", margin: '40px 0' }}>SPEAKERS</h1>
            <div className='container' >
                <div className="row p-0">
                    {
                        speakers.map(speaker => <SpeakersCard speaker={speaker} key={speaker.sno} />)
                    }
                </div>
            </div>
            <br />
        </div>
    );
}
