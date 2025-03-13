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
import onel from '../assets/Home/onel.jpg';
import oner from '../assets/Home/oner.jpg';
import twol from '../assets/Home/twol.jpg';
import twor from '../assets/Home/twor.jpg';
import threel from '../assets/Home/threel.jpg';
import threer from '../assets/Home/threer.jpg';
import onesli from '../assets/Home/one.jpg';
import twosli from '../assets/Home/two.jpg';
import threesli from '../assets/Home/three.jpg';
import mobslideone from '../assets/Home/one.jpg';
import mobslidetwo from '../assets/Home/two.jpg';
import mobslidethree from '../assets/Home/three.jpg';
import arrow from '../assets/Home/arrow.png';
import trending from '../assets/Home/trending_img1.jpeg';
import trending2 from '../assets/Home/trending_img2.jpeg';
import trending3 from '../assets/Home/trending_img3.jpeg';
import footer from '../assets/Home/footer_logo.jpg';
//  Brands Logo
import brand1 from '../assets/Home/brand/1.jpg';
import brand2 from '../assets/Home/brand/2.jpg';
import brand3 from '../assets/Home/brand/3.jpg';
import brand4 from '../assets/Home/brand/4.jpg';
import brand5 from '../assets/Home/brand/5.jpg';
import brand6 from '../assets/Home/brand/6.jpg';
import brand7 from '../assets/Home/brand/7.jpg';
import brand8 from '../assets/Home/brand/8.jpg';
import brand9 from '../assets/Home/brand/9.jpg';
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


// Solution Page Image
import pay from '../assets/solution/payperclick.jpg';
import social from '../assets/solution/socialmediamarketing.jpg';
import content from '../assets/solution/contentmarketing.jpg';
import web from '../assets/solution/web.jpeg';
import email from '../assets/solution/emailmarketing.jpg';
import film from '../assets/solution/Filmproduction.jpg';
import camp from '../assets/solution/camapinplanning.jpg';
import one from '../assets/solution/one.jpg';
import two from '../assets/solution/two.jpg';
import three from '../assets/solution/three.jpg';
import four from '../assets/solution/four.jpg';
import five from '../assets/solution/five.jpg';
import six from '../assets/solution/six.jpg';
import seven from '../assets/solution/seven.jpg';
import eight from '../assets/solution/eight.jpg';


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
            imagel1: onel,
            imager1: oner,
            imagel2: twol,
            imager2: twor,
            imagel3: threel,
            imager3: threer,


            arrow: arrow,
            mobileImage1: mobslideone, // Import these new images
            mobileImage2: mobslidetwo,
            mobileImage3: mobslidethree,
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
        },
        slider: {
            image1: "/path/to/your/image1.jpg",
            image2: "/path/to/your/image2.jpg",
            image3: "/path/to/your/image3.jpg"
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
                ],
                img: pay
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
                ],
                img: social,
            },
            {
                title: "Content Marketing",
                content: "Content is king, and we make sure your brand's voice is heard. Our content marketing services focus on creating valuable, relevant content that engages your audience and drives profitable customer actions.",
                bullets: [
                    "Blog Writing & Management",
                    "Infographic Design",
                    "Email Marketing Campaigns",
                    "Content Strategy & SEO Integration"
                ],
                img: content,
            },
            {
                title: "Web Design & Development",
                content: "Your website is your digital storefront. We create sleek, responsive, and user-friendly websites that are optimized for conversions and designed to reflect your brand's identity.",
                bullets: [
                    "Custom Website Design",
                    "E-commerce Solutions",
                    "WordPress Development",
                    "UI/UX Design & Prototyping",
                    "Single Page Applications (SPAs)",
                    "Progressive Web Apps (PWAs)",
                    "Interactive & Dynamic UI"
                ],
                img: web,
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
                ],
                img: email,
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
                ],
                img: film
            },
            {
                title: "Brand Launch & Rebranding Services",
                content: "Launching a new brand or revamping an existing one requires a strategic, creative approach to make a lasting impression. At Teamworks Digital we specialize in helping businesses establish a strong brand presence, whether you're starting from scratch or refreshing an existing brand identity.",
                bullets: [
                    "Brand Strategy & Positioning",
                    "Brand Identity Design",
                    "Launch Campaign Development"
                ],
                img: camp,
            }
        ],
        blogPosts: [
    {
      "client": "Dr.Joints",
      "image":eight,
      "overview": `Performance marketing in sales is about maximizing efficiency and profitability by ensuring that every marketing rupee is driven to a result. 
                Clients main criteria is to get leads and increase the sale conversions  ,we have designed a strategy of performance marketing,where our goal was to increase sales, drive brand awareness, and create a loyal customer base.`,  
      "strategies": {
        "Targeted Social Media & Search Ads": [
          "Ran Facebook, Instagram, and Google Ads focusing on customers searching for joint pain relief, muscle relaxation, and Ayurvedic pain solutions.",
          "Used AI-driven audience targeting to reach people suffering from arthritis, back pain, and sports injuries.",
          "Retargeted users who engaged with the website but didn’t complete the purchase."
        ],
        "SEO & Content Marketing": [
          "Optimized product listings with high-ranking keywords to improve organic reach"
        ],
        "WhatsApp & Email Marketing": [
          "Used WhatsApp drip campaigns to send testimonials, discount offers, and educational content. Personalized email follow-ups with limited-time offers to boost conversions.",
        ],
        "results": [
            "✅ 150% increase in sales within three months",
            "✅ 50% lower customer acquisition cost (CAC) due to retargeting and referrals",
            "✅ 30% increase in repeat customers due to customer engagement campaigns",
            "✅ Organic traffic grew by 50%, thanks to SEO"
        ],
        "conclusion": "By leveraging performance marketing with a mix of social media ads and strategic retargeting, we positioned Dr.Joint's pain relief oil as a trusted solution. The result is higher sales, stronger brand recall, and a growing customer base.",
      },
    },
    {
      "client": "Madhu Infra’s Parkville",
      "image":one,
      "overview": "Madhu Infra’s Parkville project is a luxurious apartment in a gated community with 2 towers ,15 floors located in Tellapur . Madhu Infra was established 15 years ago but they didn’t have a digital presence.They have approached us for Digital Marketing strategies to increase their brand awareness and sales ",
      "strategies": {
        "High-Impact Social Media Campaigns": [
          "Created Facebook, Instagram, and LinkedIn ads targeting  Professionals, NRIs, and families seeking secure, luxury living.",
          "Designed eye-catching carousel ads, video walkthroughs, and customer testimonials to showcase the community’s lifestyle.",
          "Ran Google Search & Display Ads to capture leads actively searching for premium homes."
        ],
        "SEO -Strategy": [
          `Optimized the website with high-intent keywords like "best gated communities Apartments in Tellapur “`,
          "Optimized Google My Business (GMB) added new images,videos to boost local search visibility.",
          "Writing blogs on a monthly basis and increasing  the user engagement rate ,increased the website traffic"
        ],
        "Video Marketing": [
          "Created aerial drone videos , walkthrough videos the greenery, clubhouse, security features, and modern infrastructure.",
          "Promoting videos of Parkville Building ,Amenities  through  reels,shorts in  Social media to increase the user engagement "
        ],
        "Lead Nurturing via WhatsApp": [
          "Implemented WhatsApp automation for instant responses and scheduled property visits"
        ]
      },
      "results": [
        "✅ 100% increase in brand awareness",
        "✅ 2X growth in website traffic",
        "✅ 200+ high-intent leads generated within 3 months",
        "✅ 20% faster sales conversions"
      ],
      "conclusion": "By combining targeted digital marketing, compelling visuals, and strategic lead generation, we positioned the gated community as a premium, secure, and desirable living space. The result is stronger branding, higher engagement, and a steady flow of quality leads."
    },
    {
      "client": "Mulkanoor Cooperative Society",
      "image":four,
      "overview": `How We Increased Brand Awareness for Mulkanoor Cooperative Bank Through Digital Marketing
                To strengthen Mulkanoor Cooperative Bank’s brand presence and reach a wider audience, we implemented a strategic digital marketing approach. Here’s how we effectively increased brand awareness`,
      "strategies": {
        "Social Media Marketing": [
          "Established a strong presence on Facebook, Instagram, and LinkedIn to engage with the target audience.",
          "Created engaging content, including farmer success stories and financial tips. Used regional language content to connect with rural customers."
        ],
        "Search Engine Optimization (SEO)": [
          "Optimized the bank’s website with relevant keywords to improve organic search rankings.",
          "Published blog articles on financial literacy, cooperative banking benefits, and loan schemes.",
          "Improved local SEO by listing the bank on Google My Business, helping people find branch locations easily."
        ],
        "WhatsApp & SMS Marketing": [
          "Used WhatsApp Business to send personalized messages, updates on new schemes, and customer support.",
          "Sent SMS alerts with banking offers, loan application updates, and awareness campaigns."
        ],
        "Video Marketing & YouTube Campaigns": [
          "Produced short videos showcasing real Farmer success stories, banking benefits, and financial education.",
          "Created explainers on how to use digital banking services, making them accessible to rural audiences.",
          "Shared these videos on social media, WhatsApp, and YouTube to maximize reach."
        ],
        "Influencer & Community Engagement": [
          "Partnered with local influencers and financial experts to educate the community about cooperative banking.",
          "Conducted live sessions with banking professionals to address customer queries and build trust."
        ]
      },
      "conclusion": "Through a well-executed digital marketing strategy, Mulkanoor Cooperative Bank has successfully increased brand awareness and strengthened its digital presence. By leveraging social media, SEO, WhatsApp marketing, and video content, we have expanded  Mulkanoor Cooperative Society’s reach and engaged with a diverse audience, including rural communities and global audiences."
    },
    {
      "client": "Aparna Construction",
      "overview": "Enhanced 3D walkthrough video project for real estate marketing. In the highly competitive real estate market, visual storytelling plays a crucial role in attracting and engaging potential buyers. At Aparna Constructions, we have taken our 3D walkthrough videos to the next level, offering an immersive and lifelike experience that helps customers visualize their dream homes like never before.",
      "Enhancing": {
        "visuals_title": "Hyper-realistic textures and photorealistic rendering",
        "visuals_answer": `We upgraded our 3D rendering technology to create highly detailed and photorealistic visuals. Every texture, from the smoothness of marble flooring to the warmth of wooden interiors, has been meticulously crafted to enhance the realism of our walkthroughs. This ensures that viewers get an accurate representation of what their future home will look like.`,
        "camera_title": "Cinematic camera movements with smooth transitions",
        "camera_answer": `Instead of static or robotic transitions, we incorporated smooth, cinematic camera movements that mimic a real-life viewing experience. Slow pans, zoom-ins on intricate design elements, and fluid walkthroughs of rooms create a more engaging and natural visual flow.`,
        "lighting_title": "Ambient lighting with dynamic shadows",
        "lighting_answer": `To replicate real-world lighting conditions, we integrated advanced lighting techniques that adapt to different times of the day. Natural sunlight streaming through windows, soft evening glows, and realistic dynamic shadows create a more immersive experience.`,
        "interactivity_title": "Personalized & Interactive Elements",
        "interactivity_answer": `We introduced customizable features where potential buyers can see different interior options, furniture layouts, and color themes. This interactivity allows customers to tailor their vision of the property, making the walkthrough more personal and engaging.`,
        "multimedia_title": "Integrated background score and professional voiceover",
        "multimedia_answer": "A carefully curated background score enhances the emotional appeal of the walkthrough, creating a soothing and luxurious atmosphere. Additionally, a professional voiceover guides viewers through key features, highlighting important aspects of the project, amenities, and unique selling points.",
        "compatibility_title": " High-Resolution Output for Multiple Platforms",
        "compatibility_answer": "Our walkthroughs are optimized for different platforms, ensuring seamless playback on mobile devices, websites, social media, and even VR headsets. This versatility allows potential buyers to explore properties anytime, anywhere.",
      },
      "image":two,
      "impact": "With these upgrades, our 3D walkthroughs have significantly improved customer engagement and decision-making. Buyers can now experience Aparna Constructions' projects in a more detailed, interactive, and emotional way, leading to increased interest and faster conversions."
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
                city: "Hyderabad",
                image: office1,
                address: "3rd Floor, Godha Horizon, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081",
                email: "info@eteamworks.com"
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