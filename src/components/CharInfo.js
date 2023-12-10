import { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { GalleryCard } from '../components/GalleryCard';
import { characters } from '../characters';
import { UserCircleIcon, UserPlusIcon, PhotoIcon, BookmarkSquareIcon, Squares2X2Icon, CogIcon } from '@heroicons/react/24/solid';

export function CharInfo() {
    const VIEWS = {
        BASE: "Base",
        INFO: "Info",
        DICE: "Dice",
        INV: "Inventory",
        REF: "Reference",
        GAL: "Gallery"
    }

    const { charName } = useParams();
    const [data] = useState(characters[charName]);
    const [view, setView] = useState(VIEWS.GAL);
    const [lightboxOpen, setLightBoxOpen] = useState(false);
    const [imageToShow, setImageToShow] = useState('');

    var bgUrl = process.env.PUBLIC_URL + "/images/" + charName + "/" + data.profile_img;
    var refUrl = process.env.PUBLIC_URL + "/images/" + charName + "/" + data.ref_img;

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    };

    function showImage(image) {
        setImageToShow(image);
        setLightBoxOpen(true);
    };

    const hideLightBox = () => { setLightBoxOpen(false) };

    return (
        <Fragment>
            <div className="App h-screen">
                <NavBar />
                <div className="container h-auto z-50">
                    <div className="my-2 sm:p-16 sm:m-2 md:p-12">
                        <div className="bg-transparent mt-96">
                            <div className="grid grid-cols-1 lg:grid-cols-3">
                                <div>
                                    <div style={{ "backgroundImage": `url("${bgUrl}")` }} className={classNames("w-96 h-96 mx-auto bg-cover order-first rounded -mt-96", data.icon_anchor)}>
                                    </div>
                                </div>
                                <div className="flex flex-row lg:place-content-center order-last lg:order-first mt-5 lg:mt-0">
                                    <div className={classNames("basis-1/6 lg:basis-1/3", (view === VIEWS.BASE ? "text-white" : "text-zinc-400"))}>
                                        <UserCircleIcon onTouchStart={() => (setView(VIEWS.BASE))} onClick={() => (setView(VIEWS.BASE))} className="h-10 m-auto" aria-hidden="true" />
                                    </div>
                                    <div className={classNames("basis-1/6 lg:basis-1/3", (view === VIEWS.INFO ? "text-white" : "text-zinc-400"))}>
                                        <UserPlusIcon onTouchStart={() => (setView(VIEWS.INFO))} onClick={() => (setView(VIEWS.INFO))} className="h-10 m-auto" aria-hidden="true" />
                                    </div>
                                    <div className={classNames("basis-1/6 lg:basis-1/3", (view === VIEWS.DICE ? "text-white" : "text-zinc-400"))}>
                                        <CogIcon onTouchStart={() => (setView(VIEWS.DICE))} onClick={() => (setView(VIEWS.DICE))} className="h-10 m-auto" aria-hidden="true" />
                                    </div>
                                </div>

                                <div className="flex flex-row place-content-end lg:place-content-center order-last -mt-10 lg:mt-0">
                                    <div className={classNames("basis-1/6 lg:basis-1/3", (view === VIEWS.INV ? "text-white" : "text-zinc-400"))}>
                                        <BookmarkSquareIcon onTouchStart={() => (setView(VIEWS.INV))} onClick={() => (setView(VIEWS.INV))} className="h-10 m-auto" aria-hidden="true" />
                                    </div>
                                    <div className={classNames("basis-1/6 lg:basis-1/3", (view === VIEWS.REF ? "text-white" : "text-zinc-400"))}>
                                        <PhotoIcon onTouchStart={() => (setView(VIEWS.REF))} onClick={() => (setView(VIEWS.REF))} className="h-10 m-auto" aria-hidden="true" />
                                    </div>
                                    <div className={classNames("basis-1/6 lg:basis-1/3", (view === VIEWS.GAL ? "text-white" : "text-zinc-400"))}>
                                        <Squares2X2Icon onTouchStart={() => (setView(VIEWS.GAL))} onClick={() => (setView(VIEWS.GAL))} className="h-10 m-auto" aria-hidden="true" />
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
                                            <div className="mt-12 flex flex-col justify-center">
                                                <p className="text-zinc-100 text-left indent-6 lg:px-16">
                                                    {data.blurb}
                                                </p>
                                            </div>
                                        </Fragment>
                                        : null
                                }

                                {
                                    view === VIEWS.INFO ?
                                        <Fragment>
                                            {data.meta_data.forEach(p => {
                                                <p>p</p>
                                            })}
                                        </Fragment>
                                        : null
                                }

                                {
                                    view === VIEWS.DICE ?
                                        <Fragment>
                                            <p>dicebox applet</p>
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
                                            <img className="mt-12 w-auto h-full bg-cover rounded mx-auto" src={refUrl} alt={""} />
                                        </Fragment>
                                        : null
                                }

                                {
                                    view === VIEWS.GAL ?
                                        <Fragment>
                                            {lightboxOpen ?
                                                <div className="lightbox grid items-center" onClick={hideLightBox}>
                                                    <img className="lightbox-img justify-self-center" src={imageToShow}></img>
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