import background from '../images/homebkg.JPG'
export default function Home(){
    return (
        <div className="home">
        <img className="bgimage" src={background}/>
            <h2> Welcome</h2>
            <h3>I'm Marie Epps</h3>
            <p> A skilled busines professional and </p>
            <p> Full Stack Developer in the making!</p>    
        </div>
    );
}