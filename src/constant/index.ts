import hotelImg from '../assets/hotel.jpg'
import keyboardImg from '../assets/keyboard.jpg'
import gymImg from '../assets/gymImg.jpg'


interface ExperiencesList {
    icon: string;
    name: string;
}


export const FrontendList: ExperiencesList[] = [
    {
        icon: "faHtml5",
        name: "HTML",
    },
    {
        icon: "faCss3",
        name: "CSS",
    },
    {
        icon: "faSass",
        name: "SASS",
    }, {
        icon: "faJs",
        name: "JAVASCRIPT",
    }, {
        icon: "faReact",
        name: "REACTJS",
    }, {
        icon: "faVuejs",
        name: "VUEJS",
    }, {
        icon: "faCss3",
        name: "CSS",
    },
    {
        icon: "faCode",
        name: "NEXTJS",
    },
];

export const BackendList: ExperiencesList[] = [
    {
        icon: "faNodeJs",
        name: "NODEJS",
    }, {
        icon: "faDatabase",
        name: "MONGODB",
    }, {
        icon: "faCoe",
        name: "NESTJS",
    },
    {
        icon: "faCode",
        name: "EXPRESSJS",
    },
    {
        icon: "faCode",
        name: "MYSQL",
    },
]

export interface Project {
    name: string,
    image: string,
    FElink?: string,
    BElink?: string,
    demo?: string
}

export const ProjectList: Project[] = [

    {
        name: "Kicap",
        image: keyboardImg,
        FElink: "https://github.com/Aikadev27/kicap-frontend",
        BElink: "https://github.com/Aikadev27/kicap-backend",
        demo: ''
    }
    ,
    {
        name: "Hotel Booking",
        image: hotelImg,
        FElink: "https://github.com/Aikadev27/booking-app",
        BElink: "https://github.com/Aikadev27/BookingServer",
        demo: ''

    },
    {
        name: "Gym Landing",
        image: gymImg,
        demo: "https://aikadev27.github.io/gym-landingpage/",
        FElink: '',
        BElink: ''
    }
]
