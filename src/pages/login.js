import React from 'react'
import SEO from '../components/shared/Seo'
import { useLoginPageStyles } from '../styles'
import { Card, CardHeader, Typography, TextField, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import FaceBookIconBlue from '../images/facebook-icon-blue.svg'
import FaceBookIconWhite from '../images/facebook-icon-white.png'

const LoginPage = () => {
    const classes = useLoginPageStyles()
    return (
        <>
            <SEO title='Login' />
            <section className={classes.section}>
                <article>
                    <Card className={classes.card}>
                        <CardHeader className={classes.cardHeader} title='njamnjam.com' />

                        <form>
                            <TextField
                                fullWidth
                                variant='filled'
                                label='Username'
                                margin='dense'
                                className={classes.textField}
                                autoComplete='username'
                            />
                            <TextField
                                fullWidth
                                variant='filled'
                                type='password'
                                label='Password'
                                margin='dense'
                                className={classes.textField}
                                autoComplete='current-password'
                            />
                            <Button variant='contained' fullWidth color='primary' className={classes.button} type='submit'>
                                Log In
                            </Button>
                        </form>
                        <div className={classes.orContainer}>
                            <div className={classes.orLine} />
                            <div>
                                <Typography variant='body2' color='textSecondary'>
                                    OR
                                </Typography>
                            </div>
                            <div className={classes.orLine} />
                        </div>
                        <LoginWithFacebook color='secondary' iconColor="blue" />
                        <Button fullWidth color='secondary'>
                            <Typography variant='caption'>
                                Forgot password?
                            </Typography>
                        </Button>
                    </Card>
                    <Card className={classes.signUpCard}>
                        <Typography align='right' variant='body2'>
                            Don't have an account?
                        </Typography>
                        <Link to='/accounts/emailsignup'>
                            <Button color='primary' className={classes.signupButton}>
                                Sign up
                            </Button>
                        </Link>
                    </Card>
                </article>
            </section>
        </>
    )
}


export function LoginWithFacebook({ color, iconColor, variant }) {
    const classes = useLoginPageStyles()
    const facebookIcon = iconColor === 'blue' ? FaceBookIconBlue : FaceBookIconWhite


    return (
        <Button color={color} fullWidth variant={variant}>
            <img
                src={facebookIcon}
                alt='facecbook icon'
                className={classes.facebookIcon}
            />
            Log In with Facebook
        </Button>
    )
}

export default LoginPage


