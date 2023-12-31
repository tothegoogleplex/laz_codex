import { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GalleryCard } from '../components/GalleryCard';
import { TextBlurb } from './TextBlurb';
import { DiceBox } from './DiceBox';
import { characters } from '../characters';
import { UserCircleIcon, UserPlusIcon, PhotoIcon, BookmarkSquareIcon, Squares2X2Icon, CogIcon } from '@heroicons/react/24/solid';
import { ErrorPage } from '../components/ErrorPage';

export function CharInfo() {
    const VIEWS = {
        BASE: "Base",
        INFO: "Info",
        DICE: "Dice",
        INV: "Inventory",
        REF: "Reference",
        GAL: "Gallery"
    };

    const { charName } = useParams();
    const [data] = useState(characters[charName]);
    const [view, setView] = useState(VIEWS.BASE);
    const [lightboxOpen, setLightBoxOpen] = useState(false);
    const [imageToShow, setImageToShow] = useState('');

    if (data) {
        var bgUrl = process.env.PUBLIC_URL + "/images/" + charName + "/" + data.profile_img;
        var refUrl = process.env.PUBLIC_URL + "/images/" + charName + "/" + data.ref_img;
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    };

    function showImage(image) {
        setImageToShow(image);
        setLightBoxOpen(true);
    };

    const hideLightBox = () => { setLightBoxOpen(false) };

    if (!data) {
        return (<ErrorPage />);
    }

    return (
        <Fragment>
            <div className="App h-auto">
                <div className="container h-auto z-50">
                    <div className="my-2 sm:p-16 sm:m-2 md:p-12">
                        <div className="bg-transparent mt-80 md:mt-96">
                            <div className="grid grid-cols-2 lg:grid-cols-3">
                                <div className="mx-auto col-span-2 lg:col-span-1">
                                    <div style={{ "backgroundImage": `url("${bgUrl}")` }} className={classNames("h-80 w-80 md:w-96 md:h-96 bg-cover rounded -mt-80 md:-mt-96", data.icon_anchor)}>
                                    </div>
                                </div>

                                <div className="flex flex-row lg:place-content-center lg:order-first mt-5 lg:mt-0">
                                    <div className={classNames("basis-1/3", (view === VIEWS.BASE ? "text-white" : "text-zinc-400"))}>
                                        <UserCircleIcon onTouchStart={() => (setView(VIEWS.BASE))} onClick={() => (setView(VIEWS.BASE))} className="h-10 m-auto" />
                                    </div>
                                    <div className={classNames("basis-1/3", (view === VIEWS.INFO ? "text-white" : "text-zinc-400"))}>
                                        <UserPlusIcon onTouchStart={() => (setView(VIEWS.INFO))} onClick={() => (setView(VIEWS.INFO))} className="h-10 m-auto" />
                                    </div>
                                    <div className={classNames("basis-1/3", (view === VIEWS.DICE ? "text-white" : "text-zinc-400"))}>
                                        <CogIcon onTouchStart={() => (setView(VIEWS.DICE))} onClick={() => (setView(VIEWS.DICE))} className="h-10 m-auto" />
                                    </div>
                                </div>

                                <div className="flex flex-row order-last lg:place-content-center mt-5 lg:mt-0">
                                    <div className={classNames("basis-1/3", (view === VIEWS.INV ? "text-white" : "text-zinc-400"))}>
                                        <BookmarkSquareIcon onTouchStart={() => (setView(VIEWS.INV))} onClick={() => (setView(VIEWS.INV))} className="h-10 m-auto" />
                                    </div>
                                    <div className={classNames("basis-1/3", (view === VIEWS.REF ? "text-white" : "text-zinc-400"))}>
                                        <PhotoIcon onTouchStart={() => (setView(VIEWS.REF))} onClick={() => (setView(VIEWS.REF))} className="h-10 m-auto" />
                                    </div>
                                    <div className={classNames("basis-1/3", (view === VIEWS.GAL ? "text-white" : "text-zinc-400"))}>
                                        <Squares2X2Icon onTouchStart={() => (setView(VIEWS.GAL))} onClick={() => (setView(VIEWS.GAL))} className="h-10 m-auto" />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:mx-10 px-7 sm:px-0">
                                <div className="mt-10 text-center border-b pb-8 sm:pb-12">
                                    <h1 className="text-4xl font-medium text-white">{data.name}</h1>
                                    <p className="text-lg text-zinc-400">{data.race} | {data.pronouns}</p>
                                    <p className="text-white text-md mt-3">{data.alias}</p>
                                </div>

                                {
                                    view === VIEWS.BASE ?
                                        <Fragment>
                                            <div className="flex flex-col justify-center">
                                                <TextBlurb p={data.blurb} />
                                            </div>
                                        </Fragment>
                                        : null
                                }

                                {
                                    view === VIEWS.INFO ?
                                        <Fragment>
                                            <h2 className="text-white text-3xl md:text-5xl mt-10">Meta Data:</h2>
                                            {data.meta_data.map((p) => (
                                                <TextBlurb p={p} />
                                            ))}
                                        </Fragment>
                                        : null
                                }

                                {
                                    view === VIEWS.DICE ?
                                        <Fragment>
                                            <DiceBox self={data.stats.self} nav={data.stats.nav} base={data.stats.base} env={data.stats.env} />
                                        </Fragment>
                                        : null
                                }

                                {
                                    view === VIEWS.INV ?
                                        <Fragment>
                                            <p>inventory applet</p>
                                        </Fragment>
                                        : null
                                }

                                {
                                    view === VIEWS.REF ?
                                        <Fragment>
                                            <img className="mt-10 w-auto h-full bg-cover rounded mx-auto" src={refUrl} alt={""} />
                                            <h2 className="text-white text-3xl md:text-5xl mt-10">Physical Data:</h2>
                                            {data.physical_data.map((p) => (
                                                <TextBlurb p={p} />
                                            ))}
                                        </Fragment>

                                        : null
                                }

                                {
                                    view === VIEWS.GAL ?
                                        <Fragment>
                                            {
                                                lightboxOpen ?
                                                    <div className="lightbox grid items-center" onClick={hideLightBox}>
                                                        <img className="lightbox-img justify-self-center" src={imageToShow} alt=""></img>
                                                        <p className="text-white justify-self-center">created by {imageToShow.split("_")[1].split(".")[0]}</p>
                                                    </div>
                                                    : null
                                            }
                                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full mt-12">
                                                {
                                                    data.img_gallery.map((i) =>
                                                    (<div onClick={() => showImage(`${process.env.PUBLIC_URL + "/images/" + charName + "/" + i.url}`)}>
                                                        <GalleryCard key={i.url}
                                                            charName={charName}
                                                            i={i} />
                                                    </div>))
                                                }
                                            </div>
                                        </Fragment>
                                        : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}