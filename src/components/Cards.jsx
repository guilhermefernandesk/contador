//npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/material @mui/styled-engine-sc styled-components
//npm install @mui/icons-material



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
            <Card sx={{ maxWidth: 200 }}>
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
                    <Button href="#" variant="outlined" size="small">
                        Ver Notícia
                    </Button>
                </CardActions>
            </Card>
        </div>
    </div>
)

export default Cards;