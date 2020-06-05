import React from 'react'
import { useFeedPostStyles } from '../../styles'
import UserCard from '../shared/UserCard'
import { MoreIcon, CommentIcon, ShareIcon, UnlikeIcon, LikeIcon, RemoveIcon, SaveIcon } from '../../icons'
import { Link } from 'react-router-dom'
import { Typography, Button, Divider, Hidden, TextField } from '@material-ui/core'
import HTMLEllipsis from "react-lines-ellipsis/lib/html";


const FeedPost = ({ post }) => {
    const classes = useFeedPostStyles()
    const { media, id, likes, user, caption, comments } = post
    const [showCaption, setCaption] = React.useState(false)
    return (
        <div>
            <article className={classes.article}>
                <div className={classes.postHeader}>
                    <UserCard user={user} />
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
                        <Link to={`/${user.username}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <Typography
                                variant="subtitle2"
                                component="span"
                                className={classes.username}
                            >
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
                    <Link to={`/p/${id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <Typography className={classes.commentsLink} variant='body2' component='div'>
                            View all  {comments.length} comments
                        </Typography>
                    </Link>
                    {comments.map(comment => (
                        <div key={comment.id}>
                            <Link to={`/${comment.user.username}`}>
                                <Typography variant='subtitle2' component='span' className={classes.commentUsername}>
                                    {comment.user.username}
                                </Typography>{" "}
                                <Typography component='span' variant='body2'>
                                    {comment.content}
                                </Typography>
                            </Link>
                        </div>
                    ))}
                    <Typography className={classes.datePosted} color='textSecondary'>
                        5 DAYS AGO
                    </Typography>
                </div>
                <Hidden xsDown>
                    <Divider />
                    <Comment />
                </Hidden>
            </article>

        </div>
    )
}


function LikeButton() {
    const classes = useFeedPostStyles()
    const [liked, setLiked] = React.useState(false)
    const Icon = liked ? UnlikeIcon : LikeIcon
    const className = liked ? classes.liked : classes.like
    const onClick = liked ? handleUnlike : handleLike

    function handleLike() {
        setLiked(true)
    }
    function handleUnlike() {
        setLiked(false)
    }

    return (
        <Icon className={className} onClick={onClick} />
    )
}


function SaveButton() {
    const classes = useFeedPostStyles()
    const [saved, setSaved] = React.useState(false)
    const Icon = saved ? RemoveIcon : SaveIcon
    const onClick = saved ? handleRemove : handleSave

    function handleSave() {
        console.log('saved')
        setSaved(true)
    }
    function handleRemove() {
        console.log('remove')
        setSaved(false)
    }

    return (
        <Icon onClick={onClick} className={classes.saveIcon} />
    )
}


function Comment() {
    const classes = useFeedPostStyles()
    const [content, setContent] = React.useState('')

    return (
        <div className={classes.commentContainer}>
            <TextField
                className={classes.textField}
                fullWidth
                value={content}
                placeholder="Add a comment..."
                multiline
                rowsMax={2}
                rows={1}
                onChange={event => setContent(event.target.value)}
                InputProps={{
                    classes: {
                        root: classes.root,
                        underline: classes.underline
                    }
                }}
            />
            <Button color='primary' className={classes.commentButton} disabled={!content.trim()}>
                post
            </Button>

        </div>
    )
}

export default FeedPost
