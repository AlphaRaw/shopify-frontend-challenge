import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, CardHeader } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { LinearProgress } from "@mui/material";
import Like from "./Like";


export default class FetchNasaData extends Component {
  constructor() {
    super();
    this.state = { loading: true, data: [] };
  }

  async componentDidMount() {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?count=10&api_key=zHWg1nr3oN2kjkqClj5KbkXiVaVstauO5hkEc0Rm`);
    const json = await response.json();
    this.setState({ data: json, loading: false });
    console.log(this.state.data)
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.data ? (
          <div>
            <LinearProgress />
            <Typography variant="h1">Loading, please wait...</Typography>
          </div>

        ) : (
          <div>
            {this.state.data.map(nasa => (
              <Card sx={{ maxWidth: 345, margin: 10 }}>

                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={nasa.url}
                    alt="Picture"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      {nasa.title}
                    </Typography>
                    <Typography variant="h6">{nasa.date}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {nasa.explanation}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Like />
                </CardActions>
              </Card>
            ))}
          </div>)}
      </div>

    );
  }
}


