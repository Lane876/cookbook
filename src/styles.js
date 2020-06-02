import { makeStyles } from '@material-ui/core'



export const useLayoutStyles = makeStyles((theme) => ({

    section: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        minHeight: "100%",
        overflow: "hidden",
    },
    main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        flexShrink: 0,
        position: "relative",
        padding: 0,
        order: 4,
    },
    childrenWrapper: {
        paddingTop: 30,
        display: "flex",
        margin: "0 auto",
        flexFlow: "row nowrap",
        maxWidth: "935px !important",
    },
    children: {
        width: "100%",
    },

}))

export const useNavbarStyles = makeStyles((theme) => ({
    appBar: {
        background: "#ffffff !important",
        color: "#000000",
        display: "flex",
        alignItems: "center",
        order: 0,
        zIndex: "100 !important",
    },
    section: {
        alignItems: "center",
        display: "flex",
        height: 54,
        maxWidth: 975,
        width: "100%",
        justifyContent: "center",
        padding: "0px 20px",
    },
    logoContainer: {
        display: "flex",
        flex: "1 9999 0%",
        minWidth: 40,
    },
    logoWrapper: {
        flex: "0 0 auto",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "stretch",
    },
    logo: {
        marginTop: 7,
        maxHeight: "100%",
        maxWidth: "100%",
        objectFit: "contain",
    },
    input: {
        height: 28,
        fontSize: "14px !important",
        background: "rgba(var(--b3f,250,250,250),1)",
        border: "solid 1px rgba(var(--b6a,219,219,219),1)",
        borderRadius: 3,
        color: "rgba(var(--i1d,38,38,38),1)",
        outline: 0,
        padding: "3px 3px 3px 26px",
        zIndex: 2,
    },
    linksContainer: {
        alignContent: "center",
        alignItems: "center",
        display: "flex",
        flex: "1 0 0%",
        flexWrap: "wrap",
        justifyContent: "flex-end",
    },
    linksWrapper: {
        display: "flex",
        paddingLeft: 24,
        [theme.breakpoints.down("xs")]: {
            paddingLeft: 0,
        },
        alignItems: "center",
        whiteSpace: "nowrap",
        "&>*:not(:last-child)": {
            marginRight: 22,
        },
    },
    resultContainer: { width: 215 },
    resultWrapper: {
        display: "flex",
        alignItems: "center",
        height: "50px",
        padding: "8px 16px",
    },
    avatarWrapper: {
        margin: "0 10px 0 0",
    },
    nameWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    icon: {
        position: "relative",
        "&:not(:first-child)": {
            marginLeft: 22,
        },
    },
    clearIcon: {
        // backgroundImage: `url(${IconSheet})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-250px -98px",
        height: 20,
        width: 20,
        cursor: "pointer",
    },
    searchIcon: {
        // backgroundImage: `url(${IconSheet})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-167px -306px",
        height: 10,
        width: 10,
        left: 11,
        position: "absolute",
        top: 9,
        zIndex: 2,
    },
    notifications: {
        position: "relative",
        "&::after": {
            right: 10,
            width: 4,
            bottom: "-5px",
            height: 4,
            margin: "0 auto",
            position: "absolute",
            background: "#ed4956",
            transition: "bottom .2s ease-in-out",
            borderRadius: 2,
            content: '""',
        },
    },
    profileActive: {
        border: "1px solid rgba(var(--i1d,38,38,38),1)",
        borderRadius: "50%",
        height: 28,
        marginLeft: "-3px",
        marginTop: "-3px",
        position: "absolute",
        width: "28px !important",
    },
    profileImage: {
        width: "22px !important",
        height: "22px !important",
        marginBottom: "5px !important",
    },
    followers: {
        // backgroundImage: `url(${IconSheet})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-249px -160px",
        height: 16,
        width: 16,
        margin: "0 5px",
        display: "block",
    },
    likes: {
        // backgroundImage: `url(${IconSheet})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-385px -126px",
        height: 18,
        width: 18,
        margin: "0 5px",
        display: "block",
    },
    tooltipContainer: {
        display: "flex",
        alignItems: "center",
        "& div": {
            margin: "0 5px",
        },
    },
    tooltip: {
        display: "flex",
        alignItems: "center",
    },
    resultLink: {
        background: "#fafafa",
        width: "100%",
        borderBottom: "solid 1px rgba(var(--b38,219,219,219),1)",
        "&:hover": {
            background: "rgba(var(--b3f,250,250,250),1)",
        },
    },
    progressBar: {
        top: 0,
        zIndex: 1031,
        left: 0,
        height: 3,
        background:
            "#27c4f5 linear-gradient(to right,#27c4f5,#a307ba,#fd8d32,#70c050,#27c4f5)",
        backgroundSize: "500%",
        animation:
            "2s linear infinite $LoadingBarProgress,.5s ease-out $LoadingBarEnter",
        transformOrigin: "left",
        width: "100%",
    },
    progressContainer: {
        position: "absolute",
        zIndex: 2000,
        width: "100%",
        pointerEvents: "none",
    },
    progressBackground: {
        boxShadow: "0 0 10px #29d, 0 0 5px #29d",
        display: "block",
        height: "100%",
        opacity: 1,
        position: "absolute",
        right: 0,
        transform: "rotate(3deg) translate(0px, -4px)",
        width: 100,
    },
    "@keyframes LoadingBarProgress": {
        "0%": {
            backgroundPosition: "0% 0",
        },
        to: {
            backgroundPosition: "125% 0",
        },
    },
    "@keyframes LoadingBarEnter": {
        "0%": {
            transform: "scaleX(0)",
        },
        to: {
            transform: "scaleX(1)",
        },
    },


}));



export const useLoginPageStyles = makeStyles((theme) => ({
    section: {
        display: "grid",
        placeItems: "center",
        height: "100vh",
    },
    card: {
        maxWidth: 348,
        padding: "16px 40px",
        marginBottom: 10,
    },
    cardHeader: {
        // backgroundImage: `url(${IconSheet})`,
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "-98px 0",
        height: 51,
        width: 175,
        margin: "0 auto",
    },
    textField: {
        marginBottom: 6,
    },
    button: {
        margin: "8px 0px",
    },
    orContainer: {
        margin: "10px 0px",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        gridGap: 18,
        placeItems: "center",
    },
    orLine: {
        justifySelf: "stretch",
        height: 1,
        background: "#e6e6e6",
    },
    signUpCard: {
        maxWidth: 348,
        padding: "16px 40px",
        marginBottom: 10,
        display: "grid",
        alignItems: "center",
        gridTemplateColumns: "2fr 1fr",
    },
    facebookIcon: {
        height: 16,
        width: 16,
        marginRight: 8,
    },
}))

export const useSignUpPageStyles = makeStyles({
    section: {
        display: "grid",
        placeItems: "center",
        height: "100vh",
    },
    card: {
        maxWidth: 348,
        padding: "16px 40px",
        marginBottom: 10,
    },
    cardHeader: {
        // backgroundImage: `url(${IconSheet})`,
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "-98px 0",
        height: 51,
        width: 175,
        margin: "0 auto",
    },
    cardHeaderSubHeader: {
        textAlign: "center",
        fontWeight: "bold !important",
        lineHeight: 1.2,
        color: "#999",
        margin: "0 0 20px",
    },
    orContainer: {
        margin: "10px 0px",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        gridGap: 18,
        placeItems: "center",
    },
    orLine: {
        justifySelf: "stretch",
        height: 1,
        background: "#e6e6e6",
    },
    textField: {
        marginBottom: 6,
    },
    loginCard: {
        maxWidth: 348,
        padding: "16px 40px",
        marginBottom: 10,
        display: "grid",
        alignItems: "center",
        gridTemplateColumns: "3fr 2fr",
    },
    loginButton: {
        justifySelf: "start",
    },
})


export const useFeedPageStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'minmax(auto, 600px) 300px',
        gridGap: 35,
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "minmax(auto, 600px)",
            justifyContent: "center",
        },
        "&.slickSlider": {
            display: "grid",
        },
    },
    sidebarContainer: {
        display: "grid",
        margin: "0px 28px 24px",
        justifyContent: "center",
        gridTemplateColumns: "minmax(auto, 300px)",
    },
    sidebarWrapper: { position: "fixed", width: 293 },


}))


export const useFeedPostStyles = makeStyles((theme) => ({
    article: {
        border: "1px solid #e6e6e6",
        background: "#ffffff",
        marginBottom: 60,
        [theme.breakpoints.down("xs")]: {
            border: "unset",
            marginBottom: 0,
        },
    },
    postHeader: {
        borderBottom: "1px solid rgba(var(--ce3,239,239,239),1)",
        display: "grid",
        gridAutoFlow: "column",
        gridTemplateColumns: "auto minmax(auto, 20px)",
        gridGap: 10,
        alignItems: "center",
        padding: 16,
    },
    moreIcon: {
        height: 24,
        width: 18,
        justifySelf: "center",
        "&:hover": {
            cursor: "pointer",
        },
    },
    image: {
        width: "100%",
    },
    postButtons: {
        display: "grid",
        gridAutoFlow: "column",
        gridTemplateColumns: "24px 24px 24px minmax(24px, auto)",
        gridGap: 16,
        padding: "6px 0px !important",
        // cursor: "pointer",
    },
    postButtonsWrapper: {
        padding: "0px 16px 8px !important",
    },
}))