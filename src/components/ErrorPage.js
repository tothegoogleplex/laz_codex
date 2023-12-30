import { Fragment } from 'react';

export function ErrorPage() {
    const greetings = [
        "The jumpgates of Andromeda; I observed their fabrication in my youth.",
        "Mother Kepler shine upon us!",
        "Starboard and shattered starshine; starlit sight.",
        "One degree off and we'll be lightyears away from our destination...",
        "Hey! I think we've met--back on Vasya, a few Sol ago.",
        "Tell me what you see out there on starlit seas. I'll miss you.",
        "Wh-what are you doing in my lab?!",
    ]

    return (
        <Fragment>
            <div className="App h-auto">
                <div className="container sm:w-screen lg:w-3/4 h-auto z-50">
                    <div className="w-full items-center text-center">
                        <h1 className="text-7xl my-8">404</h1>
                        <p className="m-3"><i>{greetings[Math.floor(Math.random() * greetings.length)]}</i></p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}