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
// Header
import stars from '../assets/Home/star.png';
import se_bg from '../assets/Home/sec_bg.png'
import demo from '../assets/Home/demo.webp'
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
        }
    }
}


export default data;