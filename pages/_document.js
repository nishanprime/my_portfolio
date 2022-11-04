import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.14.2/matter.min.js"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </Head>
      <body>
        <div id="game"></div>
        <Main />
        <NextScript />
        <script src="https://drive.google.com/file/d/1XXC3TVXEcKWkzzi0Ytb8_f3FgwKehW1U/view?usp=share_link"></script>
      </body>
    </Html>
  );
}
