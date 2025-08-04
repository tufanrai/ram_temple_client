import ChariPerson from "@/public/Chairperson.png";
import TempleLook from "@/public/TempleLook.jpg";
import ShreeRamBanner from "@/public/shreeRamChandrarBanner.jpg";
import Devotee from "@/public/DeviteesOfShreeRam.jpg";
import Celebration from "@/public/ShreeRamDevotee2.jpg";
import Dashain from "@/public/Dashain.jpg";
import KrishnaJanmastami from "@/public/KrishnaJanmastami.jpg";

interface IAboutTemple {
  title: string;
  paragraphs: string[];
}

interface IJass {
  title: string;
  image: string;
  name: string;
  paragraphs: string[];
}

interface IOfferings {
  title: string;
  paragraph: string[];
}

interface IPhotoSagar {
  url: string;
}

interface IEvents {
  image: string;
  title: string;
  sub_title: string;
  paragraph: string[];
}

interface IFestivals {
  image: string;
  title: string;
  paragraph: string[];
}
// About Temple
export const AboutRamTemple: IAboutTemple[] = [
  {
    title: "About Shree Ram Chandra Mandir",
    paragraphs: [
      "The Śrī Rāmachandra Temple is unlike any other. Its sanctum houses a rare and awe-inspiring ensemble of idols crafted from sacred śāligrāma śilā (black stones): Śrī Rāma, radiating dignity; Sītā, a beacon of compassion and strength; Lakṣmaṇa, symbolizing devotion; Bharata, embodying discipline; and Śatrughna, representing vigilance. Nearby, a majestic idol of Hanumān, the supreme devotee, stands with folded hands, inspiring unwavering faith. These idols are not mere sculptures but living symbols of values that guide human life—peace, prosperity, and harmony. They invite visitors to reflect on the timeless teachings of the Rāmāyaṇa, where Śrī Rāma’s life exemplifies duty, truth, and compassion.",
      "The temple is located in Battisputali, one kilometer southwest of the Pashupatinath temple. The Ram Mandir holds great importance among Hindus. A short flight of stairs from the entrance and leads to the temple. The architecture of Ram Mandir is in Royal Gombaz architecture and has a touch of the Mughal style architecture, due to the influence of the Mughal art and architecture in Nepal in the past.",
    ],
  },
  {
    title: "Historical Roots",
    paragraphs: [
      "The temple’s origins trace back to V.S. 1928 (1871 A.D.), when Commander Colonel Sanak Singh Tandon established it on a sacred hillock in Battisputali, near the revered Pashupati Kṣetra. However, the site’s spiritual significance dates to the ancient Licchavi period, steeped in local legends. One captivating tale links the hillock to King Vikramāditya’s throne, said to have been buried here by celestial apsaras, symbolizing justice. This story inspired the name “Battisputali” (meaning “thirty-two butterflies”), reflected in the thirty-two apsara figurines adorning the temple’s dome.",
      "Sanak Singh Tandon, from a distinguished lineage tied to Nepal’s unification under Pr̥thvīnārāyaṇa Śāha, envisioned the temple as a spiritual beacon. His family’s contributions, including temples and resthouses in Arghakhanchi and Syangja, underscore their legacy of service. Archaeological finds from the Licchavi era and modern Rāmāyaṇa-themed murals on the temple walls further highlight its historical and artistic richness.",
    ],
  },
];

// About JASS
export const AboutJass: IJass[] = [
  {
    title: "Message from the Chairperson",
    image: `${ChariPerson.src}`,
    name: "- Dr. Goinda Tandon",
    paragraphs: [
      `Nestled in Battisputali, the sacred temple
of Lord Śrī Rāmachandra, accompanied
by Sītā, stands as an unparalleled and
magnificent spiritual heritage among the
Rāma temples in Nepal. Established in 1871
A.D. by Commander Colonel Sanak Singh
Tandon, this temple, built in the majestic
Rajput dome style, is a unique architectural
marvel, unmatched in Nepal. Once adorned
with vast Guthi lands, jewels, and wealth,
this temple, over time, fell into a state of
ruin. However, with the formation of the Śrī
Rāmachandra Temple Restoration and Conservation Committee in 1991
A.D., a remarkable journey of revival began. Through the committee’s
relentless efforts, meticulous planning, and the unwavering support
of devotees, the temple has been restored over the past 34 years. The
renovation, maintenance, construction of a Yāga-śālā, reconstruction of
the sattal, and kitchen facilities have all been completed, transforming the
temple into a vibrant center of spirituality and devotion.`,

      `From the serene Brahmamuhurta in the morning to the divine Āratī in
the evening, the temple resonates with sacred rituals, infusing it with an
ethereal vitality. On auspicious occasions like Śrī Rāma Navamī, Sītā Jayantī,
New Year, Sītā Prākaṭya Divasa, and Hanumān Jayantī, the temple comes
alive with the presence of thousands of devotees. Particularly during Śrī
Rāma Navamī, the influx of lakhs of devotees reflects the temple’s profound
reverence and popularity.`,

      `In Sanatana Hindu tradition, Lord Shri Rama is revered as the seventh incarnation fo Lord Vishnu. The rare Sivalinga idols of Sri Tama, Sita, Laksmana, Bharata, and Satrughna, intricately carved from Shaligram stone, are a treasure unique to this temple. These idols are not only a spiritual legacy but also a historical gem. Sri Tama, the epitome of righeteousness; Sita, the embodiment of devotion and fidelity; Laksmana, the symbol of unwavering duty; and Bharata and Satrughna, exemplars of responsibility towards family and society, inspire every soul. Their lives, deeds, and ideals serve as a timeless source of motication for humanity to walk the path of virtue and duty.`,

      `This temple is not merely a religious site; it is a confluence of unity, devotion, and culture. We express our heartfelt gratitude to all devotees who visit and pay homage here. In the future, we earnestly seek your suggestions, support, and active participation to futher enhance the temple's grandeur and divinity. Let us join hands to elevate this sacred heritage, share its glory with the world, and pass it on to future generations.`,
    ],
  },
];

// Special Offerings
export const OfferingsAndServices: IOfferings[] = [
  {
    title: "Daily Worship (Nitya Pūjā)",
    paragraph: [
      `The daily rituals at Śrī Rāmachandra Temple commence at 5:00 AM with the
ceremonial awakening of Lord Rāma. By 8:30 AM, the deity is bathed and
adorned with clean, elegant attire and ornaments, followed by the offering
of bālabhoga(morning meal). During this time, devotees visit the temple
for darśana (divine viewing), creating a vibrant atmosphere of devotion.`,
      `At 9:00 AM, the morning āratī and bhogarāga (offering of sattvic,
vegetarian food) take place. During bhogarāga, curtains are drawn, as it
is believed that the Lord’s meal should not be witnessed. Devotees gather
in the yajñamohana(prayer hall), with women standing on the northern
side and men on the southern side, ensuring no obstruction. After āratī,
devotees offer obeisance (daṇḍavat). Men perform full prostration, while
women kneel, a practice rooted in Sanātana Hindu tradition, respecting
physical differences. This act symbolizes the surrender of ego and pride.`,
      `The priest then blesses devotees by touching the Lord’s crown and sandals
to their heads. Devotees remove any head covering and slightly bow as a
sign of respect. The priest distributes tīrtha (holy water), goṣṭhī (fruits
or sweets as prasāda), which devotees consume immediately or take
home for family members. Dropping prasāda on the ground is considered
disrespectful, reflecting devotion and discipline.`,
      `Following āratī, devotional hymns and prayers are sung, culminating
in jayakāra (welfare chants). The priest leads with chants like “Bhagavān
Śrī Rāmachandra kī, ” to which devotees respond, “Jai ho!” Chants honor
various deities, the temple’s founder, and the gathered devotees, concluding
with a prayer for the welfare of all humanity—a unique Sanātana Hindu
tradition echoing Vedic ideals of universal peace (Oṃ dyauḥ śāntiḥ...). The
temple’s rituals, whether performed loudly or softly, aim for inner peace,
self-betterment, and global harmony.`,
      `The temple may open in the afternoon on special occasions or based
on devotee attendance. Evening āratī occurs at 6:00 pm in summer and
5:30 pm in winter, followed by the Lord’s rest (śukalā). The evening
meal is offered, and the āratī follows the same procedure as the morning.
Afterward, the Lord’s daytime attire is replaced with lighter clothing—
thicker in winter and thinner in summer—ensuring divine comfort.`,
    ],
  },
  {
    title: "Occasional Worship (Naimittika Pūjā)",
    paragraph: [
      `On the first day of each Nepali month (saṅkrānti), a special
trirumañjana (elaborate worship) attracts hundreds of devotees. Major
festivals like Śrī Pañcamī, Sītā Jayantī, Vivāha Pañcamī, Ekādaśī, and
Hanumān Jayantī feature grand pūjās, with the temple courtyard buzzing
with devotees’ devotion.`,
    ],
  },
  {
    title: "Music and Devotional Evening (Saṅgīta Sādhanā Sandhyā)",
    paragraph: [
      `On every new moon (auṃsī), from 5:00 pm to 7:00 pm, the Sādhanā
Sandhyā program showcases devotional and classical music. Running
for 15 years, this event features renowned Nepali devotional singers and
classical musicians. Organized by the Śrī Rāmachandra Temple Renovation
and promotion Committee, with support from Nepal Academy of Fine
Arts and the temple’s private trust, it has become a vibrant platform for
emerging and established artists.`,
      `Paused from 2076 to 2079 V.S (2019–2022 A.D) due to COVID-19, the
program was revitalized in 2080 V.S (2023 A.D) with participation from
Tribhuvan University’s Nepal Academy of Fine Arts. It has emerged as
a cultural highlight in the Kathmandu Valley, drawing crowds eager to
immerse in devotional music.`,
    ],
  },
  {
    title: "Daily Bhajan-Kīrtan Program",
    paragraph: [
      `Since 2081 V.S (2024 A.D), daily bhajan-kīrtan sessions from 4:30 pm to
6:00 pm enhance the temple’s spiritual ambiance. Regular performers
include young artists Ms. Rosha Phuyal, Mr. Roshan Phuyal, and Mr. Som
Niraula, with renowned flutist Mr. Nagendra Bikram Rai and his team
performing every Saturday. These sessions foster a deeply devotional
environment.`,
    ],
  },
  {
    title: "Children’s Spiritual Classes (Bālvihāra)",
    paragraph: [
      `To instill cultural and spiritual values in young minds, Bālvihāra classes
are held every Saturday from 4:00 pm to 5:00 pm for children aged 6 to 16.
These sessions educate and inspire the youth to embrace a spiritual path,
fostering positive life outcomes.`,
    ],
  },
  {
    title: "Training Programs",
    paragraph: [
      `The temple periodically offers training in flute, tabla, and vocal music,
enriching its cultural vibrancy and engaging the community in artistic
pursuits.`,
    ],
  },
  {
    title: "Weddings and Vratabandha Ceremonies",
    paragraph: [
      `The temple is a popular venue for weddings and bratabandha (sacred
thread ceremonies), especially during auspicious times. Comprehensive
arrangements, including vegetarian catering, make it a sought-after
location, with bookings made 5–6 months in advance. On peak days, up to
10–11 ceremonies occur simultaneously. Affordable rates and the temple’s
sacred ambiance provide relief to families, from those with modest means
to those seeking a divine setting for these sacred rites.`,
    ],
  },
];

// photoes
export const Gallery: IPhotoSagar[] = [
  {
    url: `${TempleLook.src}`,
  },
  {
    url: `${Celebration.src}`,
  },
  {
    url: `${Devotee.src}`,
  },
  {
    url: `${ShreeRamBanner.src}`,
  },
];

// Events
export const Events: IEvents[] = [
  {
    image: "",
    title: "Balram Purnima",
    sub_title: "The day when lrod Balarama decended to earth",
    paragraph: [
      "On this day our lord Balarama descended to earth to support lord Krishna.",
    ],
  },
];

// Festivals
export const Festivals: IFestivals[] = [
  {
    image: `${Dashain.src}`,
    title: "Dashain",
    paragraph: [
      "Dashain is the most significant and widely celebrated festival in Nepal, a vibrant and profound event that unites families and communities across the nation and among the global Hindu diaspora. This fifteen-day-long festival is a powerful testament to the triumph of good over evil, a theme that lies at the heart of Hindu mythology. The festival's central narrative revolves around the epic battle between the goddess Durga and the formidable buffalo demon, Mahishasura. For nine days and nights, the fierce goddess, wielding the powers of all the gods, fought tirelessly until she finally emerged victorious on the tenth day. This monumental victory symbolizes the eternal struggle of righteousness against malevolence and serves as a powerful reminder of the divine feminine's ability to protect the innocent and restore balance to the world. Dashain is not merely a celebration but a spiritual journey, a time for introspection, purification, and the reaffirmation of one's faith and cultural identity.",
      `The celebration of Dashain is a rich tapestry of rituals and customs, each day carrying its own unique significance. The festival begins with Ghatasthapana on the first day, where a kalash (a holy water pot) is filled with holy water and placed in a consecrated room. Barley seeds are sown around it, and the resulting sprouts, known as "Jamara," are meticulously tended to throughout the festival, symbolizing fertility and prosperity. The subsequent nine days, known as Navaratri, are dedicated to the worship of the nine different forms of the goddess Durga, each representing a distinct aspect of her divine power. Devotees visit various temples and "Shakti Peethas," offering prayers and performing pujas to seek her blessings. The atmosphere during this period is electric, filled with the sounds of devotional music, the aroma of incense, and the collective fervor of the faithful.`,
      `The culmination of Dashain arrives on the tenth day, Bijaya Dashami, which is considered the most important day of the festival. This day marks the official victory of Durga over Mahishasura. It is a day dedicated to family and community, where people visit their elders to receive blessings. A traditional Tika, a mixture of rice, yogurt, and red vermilion powder, is applied to the foreheads of younger family members by their elders. This act is not just a ritual but a sacred transfer of blessings, wisdom, and good fortune from one generation to the next. The Tika is often accompanied by the yellow sprouts of Jamara, which are tucked behind the ears, further symbolizing prosperity and a connection to the earth. The festivities continue with elaborate feasts featuring traditional dishes, the flying of colorful kites that fill the autumn sky, and the joyful laughter of children and adults alike enjoying traditional swings known as "Ping." This blend of spiritual reverence and joyous celebration makes Dashain a truly unforgettable experience, a time when the entire nation comes together to celebrate life, family, and the enduring victory of good.`,
    ],
  },
  {
    image: `${KrishnaJanmastami.src}`,
    title: "Krishna Janmashtami",
    paragraph: [
      `Krishna Janmashtami is not just a festival; it is a profound spiritual event, a celebration of the Supreme Personality of Godhead's divine descent into this material world. Five thousand years ago, on the eighth day of the waning moon in the month of Bhadrapada, Lord Krishna appeared to liberate His devotees, vanquish the wicked, and reestablish the principles of dharma. His birth in a prison cell to Devaki and Vasudeva, under the tyranny of the demon-king Kamsa, is a powerful symbol of how the Lord's grace can manifest even in the most impossible of circumstances. His appearance is transcendental, not like an ordinary birth. As the Lord Himself says in the Bhagavad-gita, "He appears in His own body, by His internal potency." To truly understand the nature of His birth is to be freed from the cycle of birth and death and to return to His eternal abode.`,
      `So, why should we, as Vaishnavas, celebrate this auspicious day? We celebrate it to express our immense love and devotion for our beloved Shyamsundar. By hearing and chanting about His divine pastimes, we purify our hearts and deepen our connection with Him. It is an opportunity to immerse ourselves in the blissful rasa of His lila, to remember His childhood antics in Vrindavan, His enchanting flute, and His unwavering protection of His devotees. Observing Janmashtami is a way to actively participate in the joy of His divine appearance and to receive His boundless blessings. The scriptures tell us that by observing this day, we become free from the sinful reactions of many lives and are blessed with good health, wealth, and spiritual progress. It is a day to renew our vows of service and to rededicate our lives to the lotus feet of Sri Sri Radha-Krishna.`,
      `The proper way to celebrate Janmashtami, as taught by our revered Founder-Acharya Srila Prabhupada and the Gaudiya Vaishnava tradition, is with a heart full of devotion and a focus on our relationship with the Lord. The day is marked by a strict fast until midnight, the exact moment of Krishna's appearance. Throughout the day, our focus is on hearing and chanting the glories of Krishna. We read from the sacred Tenth Canto of the Srimad Bhagavatam, which beautifully narrates His divine pastimes. The temples are a hive of spiritual activity, with continuous kirtan, bhajans, and discourses. The deities of Sri Sri Radha-Krishna are adorned in new, resplendent clothing and jewelry. As midnight approaches, the atmosphere intensifies with anticipation. A grand abhisheka, a sacred bathing ceremony, is performed for the Deities of baby Krishna with milk, yogurt, honey, ghee, and various juices, all offered with pure love. This is followed by a beautiful arati, where we offer lamps and flowers to the Lord. After the midnight celebration, the fast is broken by honoring prasadam—sanctified vegetarian food lovingly prepared for Krishna. By engaging in these activities, we not only celebrate a historical event but we also invite Krishna to appear in our own hearts. Hare Krishna.`,
    ],
  },
];
