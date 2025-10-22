import styles from "./App.module.css";

interface HeaderProps {
    profilePic: string;
    name: string;
    hoursAgo: string;

}

interface ContentProps {
    content: string;
    contentImg: string;
    imgTitle: string;
    imgDes: string;
    imgLink:string;
}

interface CardProps {
    profilePic: string;
    name: string;
    hoursAgo: string;
    content: string;
    contentImg: string;
    imgTitle: string;
    imgDes: string;
    imgLink:string;
}


const Header = ({profilePic, name, hoursAgo}: HeaderProps) => {
    return (
            <div className={styles.header}>
            <div className={styles.options}>
                <i className="fa fa-chevron-down"></i>
            </div>
            <img
                className={styles.co_logo}
                src={profilePic}
            />
            <div className={styles.co_name}>
                <a href="#">{name}</a>
            </div>
            <div className={styles.time}>
                <a href="#">{hoursAgo}</a> · <i className="fa fa-globe"></i>
            </div>
            </div>
    )
}

const Content = ({content, contentImg, imgTitle, imgDes, imgLink}: ContentProps) => {
    return (
        <>
            <div className={styles.content}>
                <p>
                    {content}
                </p>
            </div>

            <div className={styles.reference}>
                <img className={styles.reference_thumb}
                     src={contentImg}/>
                <div className={styles.reference_content}>
                    <div className={styles.reference_title}>
                        {imgTitle}
                    </div>
                    <div className={styles.reference_subtitle}>
                        {imgDes}
                    </div>
                    <div className={styles.reference_font}>{imgLink}</div>
                </div>
            </div>
        </>
    )
}

/*





*/

const Footer = () => {
    return (

            <div className={styles.social}>
                <div className={styles.social_content}></div>
                <div className={styles.social_buttons}>
            <span>
              <i className="fa fa-thumbs-up"></i>Paws Up!
            </span>
                    <span>
              <i className="fa fa-comment"></i>Meow-back
            </span>
                    <span>
              <i className="fa fa-share"></i>Share the Cat-titude
            </span>
                </div>
            </div>
    )
}

const Card = ({name, profilePic, hoursAgo, content, contentImg, imgTitle, imgDes, imgLink}: CardProps) => {
    return (
        <div className={styles.f_card}>
            <Header
                name={name}
                profilePic={profilePic}
                hoursAgo={hoursAgo}
            />
            <Content
                content={content}
                contentImg={contentImg}
                imgTitle={imgTitle}
                imgDes={imgDes}
                imgLink={imgLink}
            />
            <Footer/>
        </div>
    )
}

const App = () => {
    return (
        <>
            <Card
                name="Purrfectly Pawsome"
                profilePic="https://raw.githubusercontent.com/similonap/json/refs/heads/master/images/social-cat.png"
                hoursAgo="Just 9 lives ago"
                content="Do you know why cats are excellent programmers? Because they always purr-fect their code! 😸"
                contentImg="https://raw.githubusercontent.com/similonap/json/refs/heads/master/images/social-hammock.png"
                imgTitle="The Ultimate Guide to Napping Like a Cat | CatNapTips"
                imgDes="Learn the art of napping, feline style! Just follow these simple tips."
                imgLink="catnaptips.com"
            />
            <Card
                name="Wasabi"
                profilePic="https://raw.githubusercontent.com/similonap/json/refs/heads/master/images/social-cat.png"
                hoursAgo="Just 9 lives ago"
                content="Do you know why cats are excellent programmers? Because they always purr-fect their code! 😸"
                contentImg="https://raw.githubusercontent.com/similonap/json/refs/heads/master/images/social-hammock.png"
                imgTitle="The Ultimate Guide to Napping Like a Cat | CatNapTips"
                imgDes="Learn the art of napping, feline style! Just follow these simple tips."
                imgLink="catnaptips.com"
            />
        </>
    );
};

export default App;