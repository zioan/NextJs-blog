import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/me.png'
          alt='An image showing Ioan'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Ioan</h1>
      <p>
        I blog about web development - espesially frontend frameworks like
        React.
      </p>
    </section>
  );
}

export default Hero;
