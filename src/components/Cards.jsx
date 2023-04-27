//npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/material @mui/styled-engine-sc styled-components


import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cards = ({ cards }) => (
    <div class="grid-container" key={cards.id}>
        <div class="grid-item">
            <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                    component="img"
                    alt="galaxia"
                    height="140"
                    image={cards.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {cards.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {cards.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                </CardActions>
            </Card>
        </div>
    </div>
)

export default Cards;