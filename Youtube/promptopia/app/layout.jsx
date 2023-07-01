import '@styles/globals.css';
import {importParser} from "@node_modules/next/dist/build/webpack/loaders/css-loader/src/plugins";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts"
}
const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
            <Provider>
                <div className="main">
                    <div className="gradient" />
                </div>

                <main className="app">
                    <Nav />
                    {children}
                </main>
            </Provider>
            </body>

        </html>
    );
}

export default RootLayout;