import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const News = ({ news }) => (
    <div class="grid-container" key={news.id}>
        <div class="grid-item">
            <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                    component="img"
                    alt="galaxia"
                    height="140"
                    image={news.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {news.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {news.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                </CardActions>
            </Card>
        </div>
    </div>
)

export default News;