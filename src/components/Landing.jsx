const Landing = () => {
  const styles = {
    landing: `
      flex 
      flex-col
      justify-center
      items-center
      w-screen
      h-screen
      bg-purple-200
      lg:flex-row
      
    `,
    imageArea: `
      h-1/2
      w-full
      flex 
      justify-center
      lg:h-full
      lg:w-1/2
    `,
    image: `
      
    `,
    title: `
      text-5xl
      md:text-6xl
    `,
    textArea: `
      h-1/2
      w-full
      flex 
      flex-col
      items-center
      gap-12
      lg:h-full
      lg:w-1/2
      lg:items-start
      lg:justify-center
    `,
    linkList: `
      text-3xl
      lg:text-2md
    `,
    link: `
      hover:underline
    `,
  };

  const imageUrl = "https://pngimg.com/uploads/owl/owl_PNG2.png";

  return (
    <div className={styles.landing}>
      <div className={styles.imageArea}>
        <img 
          src={imageUrl} 
          alt="image of an owl" 
          className={styles.image} 
        />
      </div>
      <div className={styles.textArea}>
        <h1 className={styles.title}>Juan Diego Rojas Aguilar</h1>
        <ul className={styles.linkList}>
          <li>
            <a 
              className={styles.link}
              href="https://www.linkedin.com/in/juandrojasa/"
              target="_blank"
              rel="nofollow"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a 
              className={styles.link}
              href="https://github.com/JuanRojasAguilar"
              target="_blank"
              rel="nofollow"
            >
              Github
            </a>
          </li>
          <li>
            <a 
              className={styles.link}
              href="mailto:yo217@hotmail.es"
              target="_blank"
              rel="nofollow"
            >
              E-mail
            </a>
          </li>
          <li>
            <a 
              className={styles.link}
              href="/juan_rojas_cv.pdf"
              download
            >
              Download my CV!
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Landing;
