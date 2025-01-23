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
            work: "Home",
            work_link: "#",
            solutions: {
                title: "About Us",
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
                title: "Solutions",
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
                title: "Blogs ",
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
            // careers: "Careers",
            // careers_link: "#",
            contact: "Contact Us",
            contact_link: "#",
            contact_img: "→",
        }
    },
    Home: {
        Headersection: {
            title: "Ready to boost your brand through digital marketing",
            // subtitle: "We're a team of 1000+ Specialists delivering award-winning work for 300+ brands worldwide, 8 years and counting!",
            star: stars,
            textrotate: "It's time to create a Teamworks Digital Strategy that works for you!",
        },
        secondsec: {
            title: "How we do",
            sec_bg: se_bg,
            // sectitle: "We’re brand builders at heart, creators by design, tech enthusiasts in practice, and integrated at our core.",
            subtitle: "We create customized digital strategies to grow your business.With 20 years of expertise in storytelling, we have honed the craft of storytelling across various mediums—whether through TVCs, digital ads & Corporate films —knowing that a well-told narrative can cut through the noise and create emotional engagement. A brand’s story isn't just about its product; it’s about the values, emotions, and experiences that resonate with the audience. In today’s digital-first world, storytelling involves creating moments that audiences can relate to and feel invested in.",
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
                    title: "Team Works Creative",
                    description: "We convey your brand promise to the audience on an emotional level, bringing your dreams to life and leaving a lasting impression.Transforming  your narrative that resonates with your audience, making them an indispensable tool in your marketing arsenal.Get an ultimate communication tool for selling the unbuilt, transforming concepts into tangible experiences through stunning, captivating visuals."
                },
                {
                    title: "Team Works Production House",
                    description: "We offer a wide range of corporate video production services tailored to meet your specific video requirements. Two decades of experience in video production ,we seamlessly integrate high-quality professional videos into your marketing strategy. Going beyond expectations, we provide comprehensive services including video production, editing, and creative marketing strategies."
                },
                {
                    title: " Teamworks Digital ",
                    description: "Ready to elevate your digital brand?  learn how our comprehensive digital marketing services can help your business thrive in the online landscape. Partner with us for strategic guidance, operational excellence, and a dedicated team that’s invested in your success."
                },
                {
                    title: "PR Strategies",
                    description: "PR strategies focus on creating a positive narrative around the brand, with media relations, influencer collaborations, and thought leadership to enhance visibility and credibility. Events serve as  platforms to engage stakeholders, showcase products or services, and build community connections. From press conferences to product launches to experiential activations and community initiatives, well-executed PR events create memorable experiences that resonate with target audiences. By combining strategic planning, impactful storytelling, and meticulous execution, PR strategies and events help brands establish trust, generate buzz, and achieve long-term success."
                },
                // {
                //     title: "Digital Solution",
                //     description: "Comprehensive digital transformation solutions that enhance your online presence, from social media management to digital marketing campaigns that drive real results."
                // }
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
            title: "TeamWorks Solutions Pvt. Ltd.",
            subtitle: "A-101, 1st Floor, Everest Grande, Mahakali Caves Road, Andheri (E), Mumbai - 400093",
            email: "info@schbang",
            socialIcons: [
                facebook,
                youtube,
                linkedin,
                instagram,
            ]
        }
    }
}


export default data;