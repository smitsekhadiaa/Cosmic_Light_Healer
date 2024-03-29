import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.jpg";
import benefitTwoImg from "../public/img/benefit-two.jpg";

const benefitOne = {
  title: "Soni Sandhu",
  desc: "Soni is a certified empowerment and a spiritual coach, passionate healer, certified reiki master, certified yoga teacher, Law of attraction practitioner, Zen practitioner and a mindfulness mediation guide. Since Childhood she was always intrigued by this vast creation. She always wondered What is the purpose of existence and what is the essence of life. This eventually turned her inward to become a seeker for the truth. Her seeking revealed her the essence of our very existence is compassion, we are here to love and be loved. The unlimited power is packed in each of us within our heart chakra. Her presence is to guide souls into the sacred remembrance of their own inner power. She is the mirror where they see and discover their own unlimited inner potential. This opens up the channels for them to manifest the life of their wildest dreams while releasing blockages and limiting beliefs. This powerful transformational work happens within the sacred space of divine energy.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Yogi Vinu",
  desc: "A Yogi and a Warrior. Vinu has a master’s degree in yoga and the science of mind, Thai Chi trainer, Martial art trainer, Spiritual Guide, passionate Healer, Zen practitioner and a mindfulness mediation guide. Being of a very different and high energy intensity at young age, he was drawn towards Martial arts, Thai chi and Yoga. This made him experience the importance of mind, body and soul alignment through continuous practices of 22 years. He further accomplished the master’s degree in yoga, but it did not satisfy his quest for answers. While surfing through the hard waves of life he was turned inward. He became an ardent spiritual seeker. As he says by the blessings of divine mother and masters, he walked through different paths being blessed and accepted by masters of different traditions. He experienced the real essence of these paths inside himself through initiations into secret practices. On the physical dimension wisdom of many lineages and masters operate through him. He channelizes the energy of cosmos through healings, meditations and spiritual teachings.\n He was invited as a speaker at national consciousness program at National Institute of Advanced Studies (NIAS), Banglore.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
