import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const navigation = [
    { name: 'Entities', href: "/" },
    { name: 'Races', href: "races" },
    { name: 'Locations', href: "locations" },
    { name: 'About', href: "about" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
};

export function NavBar() {
    var logoURL = process.env.PUBLIC_URL + "/images/logo.png";

    const [currentLink, setCurrentLink] = useState("Entities");

    return (
        <Disclosure as="nav" className="bg-transparent">
            {({ open }) => (
                <>
                    <div className="sticky mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-zinc-700 hover:text-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <StarSolid className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <StarIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link to="/"
                                        onClick={() => { setCurrentLink("Entities") }}
                                        onTouchStart={() => { setCurrentLink("Entities") }}>
                                        <img
                                            className="h-8 w-auto"
                                            src={logoURL}
                                            alt="Limit Approaching Zero logo"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link to={item.href}
                                                key={item.name}
                                                onClick={() => { setCurrentLink(item.name) }}
                                                className={classNames(item.name === currentLink ? 'underline underline-offset-8 text-white' : 'text-gray-300 hover:bg-zinc-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium')}
                                                aria-current={item.current ? 'page' : undefined}>
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Link
                                    to={item.href}
                                    key={item.name}
                                    onClick={() => { setCurrentLink(item.name) }}
                                    onTouchStart={() => { setCurrentLink(item.name) }}
                                    className={classNames(
                                        item.current === currentLink ? 'underline underline-offset-8 bg-zinc-900 text-white' : 'text-gray-300 hover:bg-zinc-800 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
