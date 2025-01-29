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

// About page images
import advantage1 from '../assets/about/1.webp';
import advantage2 from '../assets/about/2.webp';
import advantage3 from '../assets/about/3.webp';
import advantage4 from '../assets/about/4.webp';
import advantage5 from '../assets/about/5.webp';

// Blogs page images
import blog1 from '../assets/blog/blog1.png';
import blog2 from '../assets/blog/blog2.png';
import blog3 from '../assets/blog/blog3.png';
import blog4 from '../assets/blog/blog4.png';
import blog5 from '../assets/blog/blog5.png';
import blog6 from '../assets/blog/blog6.png';
import blog7 from '../assets/blog/blog7.png';
import blog8 from '../assets/blog/blog8.png';

// Contact page images
import contact1 from '../assets/contact/contact1.webp';
import contact2 from '../assets/contact/contact2.webp';
import contact3 from '../assets/contact/contact3.webp';
import office1 from '../assets/contact/office1.webp';
import office2 from '../assets/contact/office2.webp';
import office3 from '../assets/contact/office3.webp';
import office4 from '../assets/contact/office4.png';
import press from '../assets/contact/press.png';

///////////////////////////////////////////////////////////////////////////

const data = {
    navbar: {
        logo: logo,
        drop: drop,
        navbarItems: {
            work: "Home",
            work_link: "/",
            solutions: {
                title: "About Us",
                aboutlink: '/about'
            },
            about: {
                title: "Solutions",
                sollink: '/solution'
            },
            resource: {
                title: "Blogs ",
                bloglink: "/blogs"
            },
            // careers: "Careers",
            // careers_link: "#",
            contact: "Contact Us",
            contact_link: "/contact",
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
                    description: "PR strategies focus on creating a positive narrative around the brand, with media relations, influencer collaborations, and thought leadership to enhance visibility and credibility. Events serve as  platforms to engage stakeholders, showcase products or services, and build community connections."
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
    },
    About: {
        maintitle: "TeamworksDigital brings you one stop solution for all your marketing needs",
        sidetitle: "Our mission",
        sidecontent: `Our mission is to serve as a one-stop solution for all digital marketing, PR and video production needs, blending creativity, strategy, and innovation to deliver impactful results.
                    We strive to empower businesses with comprehensive services that include tailored marketing strategies, cutting-edge video content, and seamless execution across platforms.

                    By combining the art of storytelling with the stats of digital growth, we aim to help brands build meaningful connections, enhance visibility, and achieve measurable success in today's competitive landscape.
                    Our commitment is to provide end-to-end solutions that drive value, inspire engagement, and foster long-term growth for our clients.

                    With 20 years of expertise in storytelling, we have honed the craft of storytelling across various mediums—whether through TVCs, digital ads & Corporate films.
                    Knowing that a well-told narrative can cut through the noise and create emotional engagement.

                    A brand's story isn't just about its product; it's about the values, emotions, and experiences that resonate with the audience.
                    In today's digital-first world, storytelling involves creating moments that audiences can relate to and feel invested in.

                    Teamworks Digital creates smooth integration of creativity and data-driven tactics that enables marketers to attract significant attention.
                    We strike a balance between immediate and long-term objectives, and optimize efforts in the dynamic business environment of today.

                    Teamworks Digital is committed to assisting companies of all sizes in reaching their objectives for online expansion.
                    Since every company is different, we collaborate closely with our clients to fully grasp their objectives and target market.

                    We take delight in our data-driven strategy for digital marketing and our commitment to providing outstanding client outcomes.
                    We are enthusiastic about digital marketing and always up to date on the newest developments in the field.

                    Our digital services are intended to assist companies in enhancing their online visibility, increasing traffic and conversions.
                    We are committed to providing results for each and every one of our clients, who range in size from small startups to major enterprises.

                    Partnering With an Expert Digital Services Provider
                    At Teamworks Digital, we are committed to providing the highest level of service and support.

                    THE CORE VALUES WE BELIEVE IN
                    • Focused on growth orientation of Clients
                    • Data-driven approach to problem-solving
                    • Transparency in work

                    If you're looking to improve your online presence and drive results for your business, we would love the opportunity to work with you.
                    Contact us today to learn more about our services and how we can help your business achieve its online growth goals.`,
        horzientaltitle: "Advantages partnering with Teamworks Digital",
        advantages: [
            {
                image: advantage1,
                title: "Expertise and Experience",
                description: "Teamworks digital  as an  expert brings years of industry knowledge and skills, ensuring your campaigns are built on solid strategies that work. Partnering with Teamworks Digital can often be more affordable than hiring an in-house team, allowing you to access high-quality services at a fraction of the cost."
            },
            {
                image: advantage2,
                title: "Access to Advanced Tools and Technologies",
                description: "We use the latest tools and technologies to track performance, optimize campaigns, and ensure your marketing efforts are top-notch.By leveraging data, digital marketers can create highly targeted campaigns, ensuring you reach the right audience, at the right time, on the right platform."
            },
            {
                image: advantage3,
                title: "Scalability and Flexibility",
                description: "Whether you're a startup or an established enterprise,Teamworks Digital can easily scale your campaigns as your business grows and shifts.Digital marketing experts handle everything from strategy creation to execution, freeing up your time to focus on other important aspects of your business. With digital marketing, performance is measurable. Experts can track key metrics in real-time, allowing for more efficient budget allocation and higher returns on investment."
            },
            {
                image: advantage4,
                title: "Creative and Innovative Campaigns",
                description: "Collaborating with  Teamworks Digital allows you to tap into the creativity, giving you access to fresh ideas and innovative approaches for engaging your audience.Digital marketing improves your brand’s online presence across various channels like social media, search engines, and email, helping you reach a wider audience. Partnering with experts ensures you're always updated with the latest trends, tools, and techniques in digital marketing, keeping you competitive in your industry."
            },
            {
                image: advantage5,
                title: "Industry Experience",
                description: "Raw energy is powerful, but raw energy channeled correctly is advantageous. We internalize this to think deeply, plan purposefully, and execute fearlessly."
            }
        ]
    },
    Blogs: {
        blogPosts: [
            {
                title: "Why is Digital Marketing No Longer Optional for Modern Businesses?",
                content: `Imagine entering a busy marketplace where every brand is trying to grab attention, but your store has no sign or presence on the map. That's what it's like for a business without digital marketing today. In a world of smartphones and constant online activity, being offline isn't just a choice—it's a lost opportunity.

                Your Customers Are Searching for You – Online!
                Think about it. What's the first thing you do when you're looking for a product or service? You Google it! Your customers are doing the same. Whether it's hunting for the nearest coffee shop or comparing gadgets, their search starts online. If your business isn't showing up, you're invisible to a massive chunk of your audience.

                More Value for Your Money
                Unlike traditional advertising (think billboards or TV ads), digital marketing is cost-effective and measurable. Want to spend just money on a social media ad? Go ahead. Want to track how many people clicked, liked, or bought from that ad? You can. It's marketing that works smarter, not harder.`,
                image: blog1,
                date: "December 24, 2023",
            },
            {
                title: "Your Customers Are Searching for You – Online!",
                content: `Think about it. What’s the first thing you do when you’re looking for a product or service? You Google it! Your customers are doing the same. Whether it’s hunting for the nearest coffee shop or comparing gadgets, their search starts online. If your business isn’t showing up, you’re invisible to a massive chunk of your audience.`,
                image: blog2,
                date: "December 24, 2023",
            },
            {
                title: "It’s the Megaphone Your Business Needs",
                content: `Digital marketing amplifies your voice. Whether it’s through social media posts, search ads, or engaging blogs, it puts your brand in front of the right people at the right time. It’s like having a megaphone that says, “Hey, we’ve got what you need!`,
                image: blog3,
                date: "December 24, 2023",
            },
            {
                title: "More Value for Your Money",
                content: `Unlike traditional advertising (think billboards or TV ads), digital marketing is cost-effective and measurable. Want to spend just money on a social media ad ? Go ahead. Want to track how many people clicked, liked, or bought from that ad? You can. It’s marketing that works smarter, not harder`,
                image: blog4,
                date: "December 24, 2023",
            },
            {
                title: "Your Competitors Are Already Winning the Race",
                content: `Here’s the harsh truth: your competitors are already online, connecting with the audience you’re trying to reach. If you’re not in the game, you’re handing them the trophy. Digital marketing helps you not only stay in the race but gives you the tools to win it.`,
                image: blog5,
                date: "December 24, 2023",
            },
            {
                title: "It’s Not Just Selling – It’s Building Relationships",
                content: `Gone are the days of hard-sell tactics. Today’s customers want brands they can connect with. Digital marketing allows you to engage directly with your audience—replying to their comments, addressing their concerns, or simply entertaining them with a clever post. It’s about creating a bond, not just making a sale.`,
                image: blog6,
                date: "December 24, 2023",
            },
            {
                title: "The Future is Digital—Are You Ready?",
                content: `Trends like AI, voice search, and video content are changing how things work online. By starting digital marketing now, you’re getting your business ready to meet the needs of tomorrow’s tech-smart customers.`,
                image: blog7,
                date: "December 24, 2023",
            },
            {
                title: "Conclusion: Your Business Deserves to Be Seen",
                content: `In the end, digital marketing isn’t just about being online; it’s about being present where your audience spends their time. It’s about connecting, building trust, and growing your business in a way that aligns with today’s world.
                            So, if you're still unsure about starting, now is the time to go for it. The digital world is full of opportunities—don’t miss out on your chance to stand out`,
                image: blog8,
                date: "December 24, 2023",
            }
        ]
    },
    Solutions: {
        accordionData: [
            {
                title: "Search Engine Optimization (SEO)",
                content: "Boost your organic search visibility and drive long-term traffic to your website with our tailored SEO strategies. From keyword research to on-page optimization, link building, and content creation, we ensure that your website ranks high for relevant searches, attracting qualified visitors.",
                bullets: [
                    "Comprehensive Website Audits",
                    "Keyword Research & Strategy",
                    "On-page & Off-page SEO",
                    "Local SEO",
                    "Technical SEO",
                    "SEO Reporting & Analytics"
                ]
            },
            {
                title: "Pay-Per-Click Advertising (PPC)",
                content: "Drive instant traffic and conversions with our highly targeted PPC campaigns. We craft campaigns across Google Ads, Facebook Ads, and other platforms, optimizing your ad spend for maximum ROI.",
                bullets: [
                    "Google Ads Campaigns",
                    "Facebook, Instagram & LinkedIn Ads",
                    "Display & Retargeting Ads",
                    "Conversion Tracking & Analytics",
                    "A/B Testing & Ad Optimization"
                ]
            },
            {
                title: "Social Media Marketing",
                content: "Engage, inform, and grow your audience on social media platforms. Our social media marketing services are designed to create connections and build brand loyalty through consistent, impactful content.",
                bullets: [
                    "Social Media Strategy Development",
                    "Content Creation & Curation",
                    "Social Media Management & Monitoring",
                    "Paid Social Campaigns",
                    "Influencer Marketing"
                ]
            },
            {
                title: "Content Marketing",
                content: "Content is king, and we make sure your brand's voice is heard. Our content marketing services focus on creating valuable, relevant content that engages your audience and drives profitable customer actions.",
                bullets: [
                    "Blog Writing & Management",
                    "Infographic Design",
                    "Email Marketing Campaigns",
                    "Content Strategy & SEO Integration"
                ]
            },
            {
                title: "Web Design & Development",
                content: "Your website is your digital storefront. We create sleek, responsive, and user-friendly websites that are optimized for conversions and designed to reflect your brand's identity.",
                bullets: [
                    "Custom Website Design",
                    "E-commerce Solutions",
                    "WordPress Development",
                    "Website Maintenance & Support"
                ]
            },
            {
                title: "Email Marketing",
                content: "Stay connected with your audience through personalized and targeted email campaigns. We design and execute email marketing strategies that keep your customers engaged and informed, driving repeat business.",
                bullets: [
                    "Email Strategy Development",
                    "Automated Drip Campaigns",
                    "Newsletter Design & Content Creation",
                    "Segmentation & Personalization",
                    "Performance Analytics & Reporting"
                ]
            },
            {
                title: "Film Production, Ads and AVs",
                content: "With two decades of experience in producing high-quality TV commercials and video ads, we understand the power of visual storytelling. Our team delivers compelling video content that resonates with your target audience, boosts engagement, and drives conversions.",
                bullets: [
                    "TV Commercials (TVCs)",
                    "Corporate & Brand Videos",
                    "Product Demonstration Videos",
                    "Scriptwriting & Storyboarding",
                    "Full Video Production (Filming, Editing, Post-production)"
                ]
            },
            {
                title: "Brand Launch & Rebranding Services",
                content: "Launching a new brand or revamping an existing one requires a strategic, creative approach to make a lasting impression. At Teamworks Digital we specialize in helping businesses establish a strong brand presence, whether you're starting from scratch or refreshing an existing brand identity.",
                bullets: [
                    "Brand Strategy & Positioning",
                    "Brand Identity Design",
                    "Launch Campaign Development"
                ]
            }
        ],
        blogPosts: [
            {
                title: "Why is Digital Marketing",
                content: `Imagine entering a busy marketplace where every brand is trying to grab attention, but your store has no sign or presence on the map. That's what it's like for a business without digital marketing today. In a world of smartphones and constant online activity, being offline isn't just a choice—it's a lost opportunity.

                Your Customers Are Searching for You – Online!
                Think about it. What's the first thing you do when you're looking for a product or service? You Google it! Your customers are doing the same. Whether it's hunting for the nearest coffee shop or comparing gadgets, their search starts online. If your business isn't showing up, you're invisible to a massive chunk of your audience.

                More Value for Your Money
                Unlike traditional advertising (think billboards or TV ads), digital marketing is cost-effective and measurable. Want to spend just money on a social media ad? Go ahead. Want to track how many people clicked, liked, or bought from that ad? You can. It's marketing that works smarter, not harder.`,
                image: blog1,
                date: "December 24, 2023",
            },
            {
                title: "Your Customers ",
                content: `Think about it. What’s the first thing you do when you’re looking for a product or service? You Google it! Your customers are doing the same. Whether it’s hunting for the nearest coffee shop or comparing gadgets, their search starts online. If your business isn’t showing up, you’re invisible to a massive chunk of your audience.`,
                image: blog2,
                date: "December 24, 2023",
            },
            {
                title: "It’s the Megaphone Your Business Needs",
                content: `Digital marketing amplifies your voice. Whether it’s through social media posts, search ads, or engaging blogs, it puts your brand in front of the right people at the right time. It’s like having a megaphone that says, “Hey, we’ve got what you need!`,
                image: blog3,
                date: "December 24, 2023",
            },
            {
                title: "More Value for Your Money",
                content: `Unlike traditional advertising (think billboards or TV ads), digital marketing is cost-effective and measurable. Want to spend just money on a social media ad ? Go ahead. Want to track how many people clicked, liked, or bought from that ad? You can. It’s marketing that works smarter, not harder`,
                image: blog4,
                date: "December 24, 2023",
            },
            {
                title: "Your Competitors Are Already Winning the Race",
                content: `Here’s the harsh truth: your competitors are already online, connecting with the audience you’re trying to reach. If you’re not in the game, you’re handing them the trophy. Digital marketing helps you not only stay in the race but gives you the tools to win it.`,
                image: blog5,
                date: "December 24, 2023",
            },
            {
                title: "It’s Not Just Selling – It’s Building Relationships",
                content: `Gone are the days of hard-sell tactics. Today’s customers want brands they can connect with. Digital marketing allows you to engage directly with your audience—replying to their comments, addressing their concerns, or simply entertaining them with a clever post. It’s about creating a bond, not just making a sale.`,
                image: blog6,
                date: "December 24, 2023",
            },
            {
                title: "The Future is Digital—Are You Ready?",
                content: `Trends like AI, voice search, and video content are changing how things work online. By starting digital marketing now, you’re getting your business ready to meet the needs of tomorrow’s tech-smart customers.`,
                image: blog7,
                date: "December 24, 2023",
            },
            {
                title: "Conclusion: Your Business Deserves to Be Seen",
                content: `In the end, digital marketing isn’t just about being online; it’s about being present where your audience spends their time. It’s about connecting, building trust, and growing your business in a way that aligns with today’s world.
                            So, if you're still unsure about starting, now is the time to go for it. The digital world is full of opportunities—don’t miss out on your chance to stand out`,
                image: blog8,
                date: "December 24, 2023",
            }
        ]
    },
    Contact: {
        services: [
            "Digital Marketing",
            "Social Media Management",
            "Content Creation",
            "SEO Services",
            "Web Development",
            "Brand Strategy",
            "Video Production",
            "Graphic Design"
        ],
        hearAboutUs: [
            "Google Search",
            "Social Media",
            "Referral",
            "Event",
            "Other"
        ],
        officeLocations: [
            {
                city: "Mumbai",
                image: office1,
                address: "A-101, 1st Floor, Everest Grande, Mahakali Caves Road, Andheri (E), Mumbai - 400093",
                email: "mumbai@teamworksdigital.com"
            },
            {
                city: "Bangalore",
                image: office2,
                address: "42, 2nd Floor, Residency Road, Bangalore - 560025",
                email: "bangalore@teamworksdigital.com"
            },
            {
                city: "Delhi",
                image: office3,
                address: "Plot No. 44, Block B, Sector 27, Noida - 201301",
                email: "delhi@teamworksdigital.com"
            },
            {
                city: "London, UK",
                image: office4,
                address: "128 City Road, London EC1V 2NX",
                email: "london@teamworksdigital.com"
            },
            {
                city: "Press",
                image: press,
                address: "For Media Inquiries",
                email: "press@teamworksdigital.com"
            }
        ],
        portfolioImages: [
            {
                image: contact1,
                caption: "Creative Campaign Development"
            },
            {
                image: contact2,
                caption: "Digital Marketing Excellence"
            },
            {
                image: contact3,
                caption: "Brand Strategy & Implementation"
            }
        ]
    }
}

export default data;