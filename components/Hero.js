import classes from './Hero.module.css';
import Button from './Button';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className={classes.hero}>

            <h1>
                <p> Google Developer Student Club </p>
                <p>Medi-Caps Univeristy</p>
            </h1>

            <div className={classes.hero_logo}>
                <img src="./nakshatra.png" alt="Nakshatra Logo" />
            </div>
            <Link href="/home">
                <a>
                    <Button>Register!</Button>
                </a>
            </Link>
            <div className={classes.hero_year}>
                <img src="./2022.png" alt="2022 Neon Text" />
            </div>
        </section>
    )
}
export default Hero;