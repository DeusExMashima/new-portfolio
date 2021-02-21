import coUnityImg from '../../assets/projects-img/co-unity.png';
import curioImg from '../../assets/projects-img/curio-app.png';
import devDeskImg from '../../assets/projects-img/dev-desk.png';
import resPassImg from '../../assets/projects-img/restaurant-passport.png';
import ssMiniImg from '../../assets/projects-img/ss-mini-app.png';
import storySquadImg from '../../assets/projects-img/story-squad.png';
import bootstrapIcon from '../../assets/svg-icons/bootstrap.svg'
import css3Icon from '../../assets/svg-icons/css3.svg'
import githubIcon from '../../assets/svg-icons/github.svg'
import html5Icon from '../../assets/svg-icons/html5.svg'
import javaScriptIcon from '../../assets/svg-icons/javascript.svg'
import markdownIcon from '../../assets/svg-icons/markdown.svg'
import sassIcon from '../../assets/svg-icons/sass.svg'
import reactIcon from '../../assets/svg-icons/react.svg'
import materialUIIcon from '../../assets/svg-icons/material-ui.svg'
import nodeIcon from '../../assets/svg-icons/node-dot-js.svg'
import pythonIcon from '../../assets/svg-icons/python.svg'
import typescriptIcon from '../../assets/svg-icons/typescript.svg'
import angularIcon from '../../assets/svg-icons/angular.svg'
import emailIcon from '../../assets/svg-icons/gmail.svg'
import linkedInIcon from '../../assets/svg-icons/linkedin.svg'
import twitterIcon from '../../assets/svg-icons/twitter.svg'
import reactiveXIcon from '../../assets/svg-icons/reactivex.svg'
import reduxIcon from '../../assets/svg-icons/redux.svg'
import styledComponentsIcon from '../../assets/svg-icons/styled-components.svg'
import postgresqlIcon from '../../assets/svg-icons/postgresql.svg'
import mongodbIcon from '../../assets/svg-icons/mongodb.svg'
import jestIcon from '../../assets/svg-icons/jest.svg'
import cypressIcon from '../../assets/svg-icons/cypress.svg'
import gitIcon from '../../assets/svg-icons/git.svg'

export const Image: React.FC<{imgCode: string, altText: string}> = ({ imgCode, altText }) => {

    const imageCodes: ImageCodes = {
        "coUnity": coUnityImg,
        "curioApp": curioImg,
        "devDesk": devDeskImg,
        "restaurantPassport": resPassImg,
        "ssMini": ssMiniImg,
        "storySquad": storySquadImg,
        "bootstrap": bootstrapIcon,
        "css": css3Icon,
        "github": githubIcon,
        "html": html5Icon,
        "javascript": javaScriptIcon,
        "markdown": markdownIcon,
        "sass": sassIcon,
        "react": reactIcon,
        "mui": materialUIIcon,
        "node": nodeIcon,
        "python": pythonIcon,
        "typescript": typescriptIcon,
        "linkedin": linkedInIcon,
        "twitter": twitterIcon,
        "angular": angularIcon,
        "email": emailIcon,
        "reactivex": reactiveXIcon,
        "redux": reduxIcon,
        "styledComponents": styledComponentsIcon,
        "postgresql": postgresqlIcon,
        "mongodb": mongodbIcon,
        "jest": jestIcon,
        "cypress": cypressIcon,
        "git": gitIcon
    }

    return (
        <>
            <img src={ imageCodes[imgCode] } alt={ altText } />
        </>
    )
}