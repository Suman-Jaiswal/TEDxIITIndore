import React, { useEffect, useState } from 'react'
import { Grid } from "@mui/material";
// import './TalksPage.css'
import TalksCard from './../../components/TalksCard/TalksCard';
import data from '../../data/data.json'

export default function TalksPage() {

    const [talks, setTalks] = useState([])

    useEffect(() => {
        setTalks(data.talks)
    }, [])

    return (
        <>
            <h1 style={{ textAlign: "center", color: "#e62b1e", margin: '40px 0' }}>TALKS</h1>
            <Grid container sx={{justifyContent: 'center'}} spacing={4}>
                {
                    talks.map(talk =>
                        <>
                            <Grid key={talk.sno} item xs={12} md={5}>
                                <TalksCard talk={talk} />
                            </Grid>
                        </>
                    )
                }
            </Grid>
            <br />
        </>

    )
}
