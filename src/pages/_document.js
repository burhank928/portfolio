import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-US'>
        <Head>
          <link rel="icon" href={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/favicon.ico`} />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Burhan Khan - Software Engineer" />
          <meta name="description" content="Software Developer with 3+ years of experience in fintech, healthcare, and SaaS. Proficient in JavaScript, React.js, Node.js, React Native, Flutter, and Ruby on Rails. Delivered measurable improvements, including a 30% reduction in unauthorized access with MFA integration, 40% UI performance boost via framework transition, and 15% growth in app adoption through Shopify certification. Skilled in building scalable, secure solutions and enhancing user experience." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
