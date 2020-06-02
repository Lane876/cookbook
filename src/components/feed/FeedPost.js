import React from 'react'
import { useFeedPostStyles } from '../../styles'
import UserCard from '../shared/UserCard'
import { MoreIcon, CommentIcon, ShareIcon } from '../../icons'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'


const FeedPost = ({ post }) => {
    const classes = useFeedPostStyles()
    const { media, id } = post
    return (
        <div>
            <article className={classes.article}>
                <div className={classes.postHeader}>
                    <UserCard />
                    <MoreIcon className={classes.moreIcon} />
                </div>
                <div>
                    <img src={media} alt='post media' className={classes.image} />
                </div>
                <div className={classes.postButtonsWrapper}>
                    <div className={classes.postButtons}>
                        <LikeButton />
                        <Link to={`/p/${id}`}>
                            <CommentIcon />
                        </Link>
                        <ShareIcon />
                        <SaveButton />
                    </div>
                    <Typography className={classes.like}>

                    </Typography>
                </div>
            </article>

        </div>
    )
}


function LikeButton() {

}


function SaveButton() {

}

export default FeedPost
