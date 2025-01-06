// Navbar
import logo from '../assets/navbar/logo.gif';
import sol_img1 from '../assets/navbar/sol_img1.png';
import sol_img2 from '../assets/navbar/sol_img2.png';
import abo_img1 from '../assets/navbar/abo_img1.png';
import abo_img2 from '../assets/navbar/abo_img2.png';
import res_img1 from '../assets/navbar/res_img1.png';
import res_img2 from '../assets/navbar/res_img2.png';
import drop from '../assets/navbar/drop.svg';
/////////////////////////////////////////////////////////////////////////////
// Home
import stars from '../assets/Home/star.png';
import se_bg from '../assets/Home/sec_bg.png';
import demo from '../assets/Home/demo.webp';
import arrow from '../assets/Home/arrow.png';
import trending from '../assets/Home/trending_img1.png';
import trending2 from '../assets/Home/trending_img2.png';
import trending3 from '../assets/Home/trending_img3.webp';
import footer from '../assets/Home/footer_logo.png';
//  Brands Logo
import brand1 from '../assets/Home/brand/1.webp';
import brand2 from '../assets/Home/brand/2.webp';
import brand3 from '../assets/Home/brand/3.webp';
import brand4 from '../assets/Home/brand/4.webp';
import brand5 from '../assets/Home/brand/5.webp';
import brand6 from '../assets/Home/brand/6.webp';
import brand7 from '../assets/Home/brand/7.webp';
import brand8 from '../assets/Home/brand/8.webp';
import brand9 from '../assets/Home/brand/9.webp';
// Partner
import partner1 from '../assets/Home/partner/partner1.png';
import partner2 from '../assets/Home/partner/partner2.png';
import partner3 from '../assets/Home/partner/partner3.png';
import partner4 from '../assets/Home/partner/partner4.png';
import partner5 from '../assets/Home/partner/partner5.png';
import partner6 from '../assets/Home/partner/partner6.png';
import partner7 from '../assets/Home/partner/partner7.png';

// Footer Icons 
import facebook from '../assets/Home/facebook_footer.webp';
import youtube from '../assets/Home/youtube_footer.webp';
import linkedin from '../assets/Home/linkedin_footer.webp';
import instagram from '../assets/Home/instagram_footer.webp';

///////////////////////////////////////////////////////////////////////////

const data = {
    navbar: {
        logo: logo,
        drop: drop,
        navbarItems: {
            work: "work",
            work_link: "#",
            solutions: {
                title: "solutions",
                items: {
                    brand: "Brand Solutions",
                    brand_link: "#",
                    tech: "Tech Solutions",
                    tech_link: "#",
                    media: "Media Solutions",
                    media_link: "#",
                    img1: sol_img1,
                    img1_link: "#",
                    img2: sol_img2,
                    img2_link: "#",
                }
            },
            about: {
                title: "About",
                items: {
                    how: "How We Work",
                    how_link: "#",
                    our: "Our Partnerships",
                    our_link: "#",
                    news: "News Center",
                    news_link: "#",
                    schbanf: "Schbang Network",
                    schbanf_link: "#",
                    csr: "CSR",
                    csr_link: "#",
                    meet: "Meet The Team",
                    meet_link: "#",
                    img1: abo_img1,
                    img1_link: "#",
                    img2: abo_img2,
                    img2_link: "#",
                }
            },
            resource: {
                title: "Resources",
                items: {
                    blog: "Blog",
                    blog_link: "#",
                    the: "The Edge",
                    the_link: "#",
                    img1: res_img1,
                    img1_link: "#",
                    img2: res_img2,
                    img2_link: "#",
                }
            },
            careers: "Careers",
            careers_link: "#",
            contact: "Contact Us",
            contact_link: "#",
            contact_img: "→",
        }
    },
    Home: {
        Headersection: {
            title: "Your Creative, Media & Technology Transformation Partner",
            subtitle: "We're a team of 1000+ Specialists delivering award-winning work for 300+ brands worldwide, 8 years and counting!",
            star: stars,
            textrotate: "It's time to create a Schbang",
        },
        secondsec: {
            title: "What defines us",
            sec_bg: se_bg,
            sectitle: "We’re brand builders at heart, creators by design, tech enthusiasts in practice, and integrated at our core.",
            subtitle: "We're on a mission to take the very best of Indian creative talent to the world. Driven by a ferocious hunger to create tangible impact for your business, we work with in-house specialists, industry partners and technology leaders to push the boundaries of creativity and put your brand on the global stage.",
            button: "Dive Into Our Culture"
        },
        thirdsec: {
            image1: demo,
            image2: demo,
            arrow: arrow,
            mobileImage1: demo, // Import these new images
            mobileImage2: demo,
            mobileImage3: demo,
        },
        services: {
            bgColors: ['#FE6427', '#FDE325', '#EFB9E2', '#01D5F2', '#43EF18'],
            content: [
                {
                    title: "Brand Solution",
                    description: "Our Strategists, Designers, Video Editors and Animators provide you with holistic solutions to grow your digital presence and achieve your business goals through both day-to-day content and integrated flagship campaigns."
                },
                {
                    title: "Tech Solution",
                    description: "Our tech experts deliver cutting-edge solutions that transform your digital presence, from web development to app creation, ensuring your brand stays ahead in the digital landscape."
                },
                {
                    title: "Media Solution",
                    description: "Strategic media planning and execution that puts your brand in front of the right audience at the right time, maximizing your reach and engagement across all platforms."
                },
                {
                    title: "Creative Solution",
                    description: "Innovative creative strategies that tell your brand story in compelling ways, combining artistic excellence with strategic thinking to create memorable brand experiences."
                },
                {
                    title: "Digital Solution",
                    description: "Comprehensive digital transformation solutions that enhance your online presence, from social media management to digital marketing campaigns that drive real results."
                }
            ]
        },
        brand: {
            brand1: brand1,
            brand2: brand2,
            brand3: brand3,
            brand4: brand4,
            brand5: brand5,
            brand6: brand6,
            brand7: brand7,
            brand8: brand8,
            brand9: brand9,
        },
        trending: {
            title: "Trending Topic",
            image: trending,
            image2: trending2,
            image3: trending3,
        },
        partner: [
            {
                title: "Our Partners",
                subtitle: "We're proud to partner with some of the world's leading brands and organizations, working together to drive innovation and create meaningful change.",
                image: partner1,
            },
            {
                title: "Our Partners",
                subtitle: "We're proud to partner with some of the world's leading brands and organizations, working together to drive innovation and create meaningful change.",
                image: partner2,
            },
            {
                title: "Our Partners",
                subtitle: "We're proud to partner with some of the world's leading brands and organizations, working together to drive innovation and create meaningful change.",
                image: partner3,
            },
            {
                title: "Our Partners",
                subtitle: "We're proud to partner with some of the world's leading brands and organizations, working together to drive innovation and create meaningful change.",
                image: partner4,
            },
            {
                title: "Our Partners",
                subtitle: "We're proud to partner with some of the world's leading brands and organizations, working together to drive innovation and create meaningful change.",
                image: partner5,
            },
            {
                title: "Our Partners",
                subtitle: "We're proud to partner with some of the world's leading brands and organizations, working together to drive innovation and create meaningful change.",
                image: partner6,
            },
            {
                title: "Our Partners",
                subtitle: "We're proud to partner with some of the world's leading brands and organizations, working together to drive innovation and create meaningful change.",
                image: partner7,
            }
        ],
        footer: {
            logo: footer,
            title: "Schbang Digital Solutions Pvt. Ltd.",
            subtitle: "A-101, 1st Floor, Everest Grande, Mahakali Caves Road, Andheri (E), Mumbai - 400093",
            email: "info@schbang",
            socialIcons:[
                facebook,
                youtube,
                linkedin,
                instagram,   
            ]
        }
    }
}


export default data;