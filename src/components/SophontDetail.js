import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { sophonts } from '../sophonts';
import { ErrorPage } from './ErrorPage';
import { TextBlurb } from './TextBlurb';
import { Subtype } from './Subtype';

export function SophontDetail() {
    const { sName } = useParams();
    const [data] = useState(sophonts[sName]);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    };

    if (!data) {
        return (<ErrorPage />);
    }

    return (
        <div className="App h-auto">
            <div className="container sm:w-screen lg:w-3/4 h-auto z-50 pb-10">
                <div className="w-full md:w-4/5 mx-auto h-auto">
                    <div className={classNames("m-5 h-40 bg-cover bg-no-repeat rounded flex flex-col-reverse", data.banner_anchor)} style={{ "backgroundImage": `url("${process.env.PUBLIC_URL + "/images/races/" + sName + "/" + data.banner_img}")` }}>
                        <h2 className="text-5xl md:ml-5 lg:ml-10 mb-2 order-last">{data.name}</h2>
                        <h2 className="text-2xl lg:text-3xl md:ml-10 lg:ml-20 mb-1">{data.subtitle}</h2>
                    </div>

                    <div className="px-10 md:px-20 lg:px-40 mt-10">
                        <blockquote className="text-xl italic font-semibold text-left text-zinc-400">
                            <p>"{data.quote}"</p>
                        </blockquote>
                        <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                            <cite className="pe-3 font-medium text-zinc-100">{data.quote_auth}</cite>
                        </div>
                    </div>

                    <hr className="mt-10 w-80 md:w-4/5 mx-auto" />

                    <div className="px-8">
                        {data.trait_desc.map((p) => (
                            <TextBlurb p={p} />
                        ))}

                        <h2 className="text-white text-3xl md:text-5xl mt-10">{data.name} Subtypes</h2>
                        <TextBlurb p={data.subtype_desc} />
                    </div>

                    {Object.entries(data.subtypes).map((sub) => (
                        <Subtype subtype={sub[1]} />
                    ))}
                </div>
            </div>
        </div>
    );
}