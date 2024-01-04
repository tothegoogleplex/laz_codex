import { attributes } from "./attributes";

export const races = {
    human: {
        name: "Humanity",
        subtitle: "Survivors of the Sol System",
        banner_img: "",

        quote: "The universe serves a grand sea between Humanity, their ancestors scattered and lost upon the stars just as waves break against stoneface. There may never be a unified Humanity; Terra has been abandoned.",
        quote_auth: "Isyyo Amara, Past Dictum of Aethon",

        description: [
            "Approximately three thousand and fifty standard Sol ago, Humanity was divided in an attempt to avoid extinction in the face of climate collapse. As Earth's climate began to undergo rapid decay, seedships fled to the distant Cygnus constellation, seeking out the exoplanet Kepler-22b. A few hundred Sol later, those left on Earth tried to manifest safety on the desolate surface of Mars. Fractured and at unending war with themselves, Humanity is the newest ascended race to take to the stars, and find themselves held at a contemptuous distance from the people of the cosmos.",
        ],

        trait_desc: [
            "Humans are notorious for appearing quite fragile and being deceivingly hardy. While prone to many field hazards and especially hard to transport through space, Humans are determined and resilient, and Humans can be found in all corners of the known universe. Humans are an Uncommon race, considered endangered after the decline of Earth's biosphere.",
            "Humans are a Medium sized species with an average height of 5'10”(178 cm), and they occupy one unit space. The Aethen subspecies of Human tends to be slightly smaller, averaging a height of 5'1”(154 cm). Humans live about 120 Sol, but Aethens modified by the Splice may live up towards 300 Sol.",
        ],

        equip_slots: {},

        subtypes: {
            desc: "Humanity is splintered, and can be found as multiple subtypes, diverging over a few thousand Sol.",

            aethen: {
                name: "Aethen Human",
                subtitle: "Kepler's Starchildren",

                detail: [
                    "A hermit society of distant Humans, Aethens are an oddity upon the stars, exceedingly rare and just as mysterious. Most Aethens are born on Aethon and die on Aethon, never leaving their comfortable home. A technocratic, post-scarcity society, Aethon is run by those who step up to move society. Their social structure is defined by intelligence, willingness to serve and give, and the pursuit of their studies and interests. Aethens want for nothing and live free, fulfilling lives of privilege. It is believed by researchers that the influence of the Aalasar Alliance is what swayed the disposition and culture of Aethen Humans as Sylvans have, throughout their history, been very collectivist by nature and lack an aggressive biological urge.",
                    "Through a ritual(and quite boisterous festival) known as Departure, in which one is educated and prepared before being sent away from Aethon, some Aethens choose to leave their comfortable life and venture out to the stars. They are not allowed to return. Ostracised(and often preyed upon due to their naivety of the cosmos), Aethens are not welcome in many communities, but their cooperative nature and skills make them highly sought after for starship crews. They may be seen as pathetic, spoiled or oblivious in stereotype, but they are some of the most space-ready go-getters."
                ],

                attributes: [
                    attributes.COLLECTIVIST,
                    attributes.SOCIAL_SAFETY,
                    attributes.AETHEN_ADVANCE
                ],

                stats: {
                    self: {
                        "Stunt": 2
                    },
                    nav: {
                        "Land": 5,
                        "Swim": 4
                    },
                    base: {
                        "Wit": 1,
                        "Pres": 1
                    },
                    env: {
                        "Bio": -1,
                        "Cos": 2
                    }
                },

                start_gear: [
                    "Hailing from a wealthy, post-scarcity society, Aethens are well equipped by their government before being sent to the stars. Aethens start with the following equipped: 1 UPD Aethen Dao-Blade, a CAA Aethen Exoplanetary Suit, and 1 UPD Aethen Pulse Pistol. They also start with compact and complete rations for 2 weeks and no credits.",
                    "Aethens speak Human [Aethen], a dialect of Human spoken on Kalvis and Aethon. It is a rare language deviated from Old Human spoken long ago on Earth. Those who speak Human [Terran] may understand small fragments of Aethen speech, but the two languages are not compatible. Unless an Aethen was planning to leave the surface, either to leave Aethon(known as Departure) or in service of Aethon offworld, they are not taught Galactic Common."
                ],

                quote: "Mother Kepler shine upon us."
            },

            terran: {
                name: "Terran Human",
                subtitle: "Descendants of a Dead Earth",

                detail: [
                    "Those left by the Aethen seedships found harsh survival on a poisoned Earth. Now their distant descendants live volatile lives of upheaval, corporate warfare and cultural whiplash. Many Terrans have left their homeworld, and many more are born on far-off colonies and stations, never knowing the Sol system. Terran history is fraught with civil war. Ruled by a corporate oligarchy instead of a formal government, Terran culture is defined by fierce individualism and patriotism for their corporations and Earth. Martian and Terran Humans are not known to get along, but Terrans raised offworld are less conscious of the tension between Mars and Earth.",
                    "Terrans are known as keen brokers. Their social structures encourage the hoarding of resources: knowledge, food, items, anything that can have use. Locations that catch Terran fancy are quickly developed and consumed by start-up colonies, even though many Terrans do not stay put for long."
                ],

                attributes: [
                    attributes.HUMAN_SPIRIT,
                    attributes.TERRAN_HARDSHIP
                ],

                stats: {
                    self: {
                        "Stunt": 2
                    },
                    nav: {
                        "Land": 5,
                        "Swim": 4
                    },
                    base: {
                        "Fort": 1,
                        "Pres": 1
                    },
                    env: {
                        "Heat": 1,
                        "Cold": 1,
                        "Bio": -1
                    }
                },

                start_gear: [
                    "Terrans start with 300 credits, or equivalent worth of supply. They also carry 1 uncommon item of their choice.",
                    "Terrans speak Human [Terran], a dialect of Human spoken by almost all spacefaring, as well as Earth-bound Humans, an uncommon language deviated from Old Human spoken long ago on Earth. Those who speak Human [Aethen] may understand small fragments of Terran speech, but the two languages are not compatible. Terrans almost always know Galactic Common."
                ],

                quote: "For Terra's glory and Sol's light!"
            },

            martian: {
                name: "Martian Human",
                subtitle: "People of the New Earth",

                detail: [
                    "When rifts formed between Aethon and Earth, Humanity once again tried to start anew. This time, a strain of Humanity took up the challenge of transforming the Martian landscape. The Red Sands made for hardy and tenacious people. After being exploited by one-sided trade deals by their origin Earth, Martian Humans have developed an independence bolstered by a militant society. Military and political standing define their social structures, and valour in service of Mars is considered the height of Martian achievement.",
                    "With an economy, and sovereignty from Earth, hinging on military strength, all Martians are required to undergo training if not serve when they come of age. Marian Humans are often found wandering alone, but are often sought for dirty jobs that require grit and determination."
                ],

                attributes: [
                    attributes.MARTIAN_ENG,
                    attributes.RED_WASTES,
                    attributes.MARTIAN_MILITARY,
                    attributes.DUNERUNNER
                ],

                stats: {
                    self: {
                        "Stunt": 2
                    },
                    nav: {
                        "Land": 5,
                        "Swim": 4
                    },
                    base: {
                        "Fort": 1,
                        "Pres": 1
                    },
                    env: {
                        "Heat": 1,
                        "Cold": 1,
                        "Bio": -1
                    }
                },

                start_gear: [
                    "Martians start with 250 credits, or equivalent worth of supply. They also carry 2 weapons worth a total of 300 credits.",
                    "Martian Humans speak Human [Terran] peppered with Martian slang and terminology. Almost all Martian Humans speak Galactic Common, as it is an official language on Mars."
                ],

                quote: "With fury of red winds and vile cunning; fleet across the ruby desert."
            },
        }
    }
};