
import React, { Component } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';
import { Button, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';


class Like extends Component {
    state = { liked: false };
    toggle = () => {
        let localLiked = this.state.liked;

        // Toggle the state variable liked
        localLiked = !localLiked;

        this.setState({ liked: localLiked });
    };

    render() {
        return (
            <div className="container">
                <center>
                    <Button
                        className="outlined"

                        onClick={() => this.toggle()}
                    >
                        {this.state.liked === false ? (

                            <IconButton aria-label="like" size="large">
                                Like &nbsp;<ThumbUpIcon />
                            </IconButton>


                        ) : (
                            <IconButton aria-label="unlike" size="large">
                                Unlike &nbsp;<ThumbDownRoundedIcon />
                            </IconButton>
                        )}
                    </Button>
                </center>
            </div>
        );
    }
}

export default Like;