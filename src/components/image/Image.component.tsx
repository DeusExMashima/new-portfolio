import coUnityImg from '../../assets/projects-img/co-unity.png';
import curioAppImg from '../../assets/projects-img/curio-app.png';
import devDeskImg from '../../assets/projects-img/dev-desk.png';
import restaurantPassportImg from '../../assets/projects-img/restaurant-passport.png';
import ssMiniAppImg from '../../assets/projects-img/ss-mini-app.png';
import storySquadImg from '../../assets/projects-img/story-squad.png';

import bootstrapImg from '../../assets/svg-icons/bootstrap.svg'
import css3Img from '../../assets/svg-icons/css3.svg'
import githubImg from '../../assets/svg-icons/github.svg'
import html5Img from '../../assets/svg-icons/html5.svg'
import javaScriptImg from '../../assets/svg-icons/javascript.svg'
import markdownImg from '../../assets/svg-icons/markdown.svg'
import sassImg from '../../assets/svg-icons/sass.svg'
import reactImg from '../../assets/svg-icons/react.svg'
import materialUIImg from '../../assets/svg-icons/material-ui.svg'
import nodeImg from '../../assets/svg-icons/node-dot-js.svg'
import pythonImg from '../../assets/svg-icons/python.svg'
import typescriptImg from '../../assets/svg-icons/typescript.svg'

import linkedInIcon from '../../assets/svg-icons/linkedin.svg'
import twitterIcon from '../../assets/svg-icons/twitter.svg'


export const Image: React.FC<{imgCode: string}> = ({ imgCode }) => {

    const imageCodes: ImageCodes = {
        "coUnity": coUnityImg,
        "curioApp": curioAppImg,
        "devDesk": devDeskImg,
        "restaurantPassport": restaurantPassportImg,
        "ssMini": ssMiniAppImg,
        "storySquad": storySquadImg,
        "bootstrap": bootstrapImg,
        "css": css3Img,
        "github": githubImg,
        "html": html5Img,
        "javascript": javaScriptImg,
        "markdown": markdownImg,
        "sass": sassImg,
        "react": reactImg,
        "mui": materialUIImg,
        "node": nodeImg,
        "python": pythonImg,
        "typescript": typescriptImg,
        "linkedIn": linkedInIcon,
        "twitter": twitterIcon
    }

    return (
        <>
            <img src={ imageCodes[imgCode] } />
        </>
    )
}