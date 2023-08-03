import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Days+One&display=swap"
          rel="stylesheet"
        />
        {/* dashboard style css */}

          {/* <!-- Icons. Uncomment required icon fonts --> */}
          <link rel="stylesheet" href="/assets/dashboard/assets/vendor/fonts/boxicons.css" />

          {/* <!-- Core CSS --> */}
          <link rel="stylesheet" href="/assets/dashboard/assets/vendor/css/core.css" class="template-customizer-core-css" />
          <link rel="stylesheet" href="/assets/dashboard/assets/vendor/css/theme-default.css" class="template-customizer-theme-css" />
          <link rel="stylesheet" href="/assets/dashboard/assets/css/demo.css" />

          {/* <!-- Vendors CSS --> */}
          <link rel="stylesheet" href="/assets/dashboard/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />

        {/* dashboard style css */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
