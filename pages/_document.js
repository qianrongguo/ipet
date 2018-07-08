
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0,viewport-fit=cover"/>
                    {/*<link rel="stylesheet" href="/_next/static/style.css" />*/}
                    <script type="application/javascript">
                        var rootV=20;
                        var normalV=375;
                        var maxV=500;
                        var docEl=document.documentElement;
                        window.clientWidth=docEl.clientWidth;
                        window.fontSize=rootV*(window.clientWidth/normalV);
                        console.log(docEl);
                        console.log(fontSize);
                    </script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

