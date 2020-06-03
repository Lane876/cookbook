import React from 'react'
import { useFeedPostStyles } from '../../styles'
import UserCard from '../shared/UserCard'
import { MoreIcon, CommentIcon, ShareIcon } from '../../icons'
import { Link } from 'react-router-dom'
import { Typography, Button } from '@material-ui/core'
import HTMLEllipsis from "react-lines-ellipsis/lib/html";


const FeedPost = ({ post }) => {
    const classes = useFeedPostStyles()
    const { media, id, likes, user, caption, comments } = post
    const [showCaption, setCaption] = React.useState(false)
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
                        <span>
                            {likes === 1 ? '1 like' : `${likes} likes`}
                        </span>
                    </Typography>
                    <div className={showCaption ? classes.expanded : classes.collapsed}>
                        <Link to={`/${user.username}`}>
                            <Typography variant='subtitle2' component='span' className={classes.username}>
                                {user.username}
                            </Typography>
                        </Link>
                        {showCaption ? (
                            <Typography
                                variant='body'
                                component='span'
                                dangerouslySetInnerHTML={{ __html: caption }}

                            />
                        ) : (
                                <div className={classes.captionWrapper}>
                                    <HTMLEllipsis
                                        unsafeHTML={caption}
                                        className={classes.caption}
                                        maxLine='0'
                                        ellipsis='...'
                                        basedOn='letters'
                                    />
                                    <Button className={classes.moreButton} onClick={() => setCaption(true)}>
                                        more
                                </Button>
                                </div>

                            )
                        }
                    </div>
                    <Link to={`/p/${id}`}>
                        <Typography className={classes.commentsLink} variant='bosy2' component='div'>
                            View all  {comments.length} comments
                        </Typography>
                    </Link>
                    {comments.map(comment => (
                        <div key={commnet.id}>
                            <Link to={`/${comment.user.username}`}>
                                <Typography variant='subtitle2' component='span' className={classes.commentUsername}>
                                    {comment.user.username}
                                </Typography>{" "}
                                <Typography component='span' variant='body2'>
                                    {commnet.content}
                                </Typography>
                            </Link>
                        </div>
                    ))}
                    <Typography className={classes.datePosted} color='textSecondary'>
                        5 DAYS AGO
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


