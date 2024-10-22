import Special from "@/components/UserComponents/HomeSections/Special"
import Category from "@/components/UserComponents/HomeSections/Category"
import Hero from "@/components/UserComponents/HomeSections/Hero"
import { Bolt, Menu, Rss, StarIcon } from "lucide-react"
import { House, PlaneIcon, ShoppingBagIcon, Utensils } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BusinessesAndServices from "@/components/UserComponents/HomeSections/BusinessesAndServices";
import LatestBusinessAndServices from "@/components/UserComponents/HomeSections/LatestBusinessAndServices";
import Blog from "@/components/UserComponents/HomeSections/Blog";

const SpecialProducts = [
    {
        id : '1',
        image : 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
        title : 'Apple',
        category : 'accessories',

    },
    {
        id : '2',
        image : 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
        title : 'Apple',
        category : 'accessories',

    },
    {
        id : '3',
        image : 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
        title : 'Apple',
        category : 'accessories',

    },
    {
        id : '4',
        image : 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
        title : 'Apple',
        category : 'accessories',

    },
];

const CategoryItems = [
    {
        id : '1',
        name : 'Restaurants',
        icon : Utensils
    },
    {
        id : '2',
        name : 'real estate',
        icon : House
    },
    {
        id : '3',
        name : 'Super Markets',
        icon : ShoppingBagIcon
    },
    {
        id : '4',
        name : 'Travel Services',
        icon : PlaneIcon
    },
    {
        id : '5',
        name : 'Shopping',
        icon : ShoppingBagIcon
    },
];

const BusinessesAndServicesItems = [

    {
        id: 2,
        title: 'Smart Home Solutions',
        description: 'We offer smart home installation services, including security systems, automation, and more.',
        category: 'services',
        images: 'https://a1garage.com/wp-content/uploads/2023/11/The-Evolution-of-Smart-Homes-copy.jpg', // Example image URL
        open: true, // This business is currently closed
        phone: '+0987654321',
        facebook: 'https://facebook.com/smarthomesolutions',
        instagram: 'https://instagram.com/smarthomesolutions',
        whatsapp: '+0987654321',
        Features: 'Smart security, automation, energy-saving solutions',
    },
    {
        id: 3,
        title: 'Smart Home Solutions',
        description: 'We offer smart home installation services, including security systems, automation, and more.',
        category: 'services',
        images: 'https://a1garage.com/wp-content/uploads/2023/11/The-Evolution-of-Smart-Homes-copy.jpg', // Example image URL
        open: false, // This business is currently closed
        phone: '+0987654321',
        facebook: 'https://facebook.com/smarthomesolutions',
        instagram: 'https://instagram.com/smarthomesolutions',
        whatsapp: '+0987654321',
        Features: 'Smart security, automation, energy-saving solutions',
    },
    {
        id: 4,
        title: 'Smart Home Solutions',
        description: 'We offer smart home installation services, including security systems, automation, and more.',
        category: 'services',
        images: 'https://a1garage.com/wp-content/uploads/2023/11/The-Evolution-of-Smart-Homes-copy.jpg', // Example image URL
        open: false, // This business is currently closed
        phone: '+0987654321',
        facebook: 'https://facebook.com/smarthomesolutions',
        instagram: 'https://instagram.com/smarthomesolutions',
        whatsapp: '+0987654321',
        Features: 'Smart security, automation, energy-saving solutions',
    },
    {
        id: 5,
        title: 'Smart Home Solutions',
        description: 'We offer smart home installation services, including security systems, automation, and more.',
        category: 'services',
        images: 'https://a1garage.com/wp-content/uploads/2023/11/The-Evolution-of-Smart-Homes-copy.jpg', // Example image URL
        open: false, // This business is currently closed
        phone: '+0987654321',
        facebook: 'https://facebook.com/smarthomesolutions',
        instagram: 'https://instagram.com/smarthomesolutions',
        whatsapp: '+0987654321',
        Features: 'Smart security, automation, energy-saving solutions',
    },
    {
        id: 5,
        title: 'Smart Home Solutions',
        description: 'We offer smart home installation services, including security systems, automation, and more.',
        category: 'services',
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DPg-MzH2uZFW7szxHtDOUupSqPPm5ozRlEiqAW2gbi-rFDgCFflBvI-1ROCqwj1s44c&usqp=CAU', // Example image URL
        open: false, // This business is currently closed
        phone: '+0987654321',
        facebook: 'https://facebook.com/smarthomesolutions',
        instagram: 'https://instagram.com/smarthomesolutions',
        whatsapp: '+0987654321',
        Features: 'Smart security, automation, energy-saving solutions',
    },
];

const LatestBusinessAndServicesItems = [
  
    {
        id: 2,
        title: 'Eco-Friendly Cleaning Services',
        description: 'Providing eco-friendly cleaning solutions for homes and offices, using non-toxic products.',
        category: 'cleaning',
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSz0TBJNPVr78ePn7q5_tFMLvJMG9LUh1i_A&s', // Replace with a valid image URL
        open: true,
        phone: '+0123456789',
        facebook: 'https://facebook.com/ecofriendlycleaning',
        instagram: 'https://instagram.com/ecofriendlycleaning',
        whatsapp: '+0123456789',
        Features: 'Eco-friendly products, residential and commercial cleaning, flexible scheduling',
    },
    {
        id: 3,
        title: 'Tech Support Services',
        description: 'Offering remote and on-site tech support for personal and business needs, specializing in troubleshooting and installations.',
        category: 'IT Services',
        images: 'https://www.voipreview.org/sites/voipreview.org/files/styles/blog_post/public/blog/featuredt_images/2019/03/best-online-tech-support-services.jpg?itok=bkbqdkFd', // Replace with a valid image URL
        open: false, // Currently closed
        phone: '+0198765432',
        facebook: 'https://facebook.com/techsupportservices',
        instagram: 'https://instagram.com/techsupportservices',
        whatsapp: '+0198765432',
        Features: '24/7 support, software installation, hardware troubleshooting',
    },
    {
        id: 4,
        title: 'Gourmet Catering Services',
        description: 'Providing gourmet catering for events, weddings, and corporate functions with customizable menus.',
        category: 'catering',
        images: 'https://img1.wsimg.com/isteam/ip/7f3a66de-7201-4776-a571-616743de36c9/5bfd78a8-233b-4ab7-939f-cf2fbe9030c5.jpg/:/cr=t:0%25,l:17.89%25,w:69.03%25,h:100%25/rs=w:365,h:365,cg:true', // Replace with a valid image URL
        open: true,
        phone: '+0543216789',
        facebook: 'https://facebook.com/gourmetcatering',
        instagram: 'https://instagram.com/gourmetcatering',
        whatsapp: '+0543216789',
        Features: 'Custom menus, dietary accommodations, event planning assistance',
    },
    {
        id: 5,
        title: 'Personal Fitness Training',
        description: 'Offering personalized fitness training sessions tailored to your individual goals and fitness levels.',
        category: 'fitness',
        images: 'https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png', // Replace with a valid image URL
        open: true,
        phone: '+0678901234',
        facebook: 'https://facebook.com/personalfitnesstraining',
        instagram: 'https://instagram.com/personalfitnesstraining',
        whatsapp: '+0678901234',
        Features: 'Personalized training plans, nutrition guidance, group classes available',
    },
];
const BlogItems = [
    {
        id: 1,
        title: 'The Future of Smart Homes',
        author: 'John Doe',
        date: '2024-10-15',
        category: 'Technology', // Added category
        content: 'As technology continues to advance, smart homes are becoming increasingly popular. This blog explores the latest innovations in smart home technology and how they can enhance your daily life.',
        image: 'https://miro.medium.com/v2/resize:fit:1400/1*vA8Y91eY9LYE5ojG6xxxtQ.png',
    },
    {
        id: 2,
        title: 'Eco-Friendly Living: Tips for a Sustainable Lifestyle',
        author: 'Jane Smith',
        date: '2024-10-20',
        category: 'Lifestyle', // Added category
        content: 'In this blog, we discuss simple ways to incorporate eco-friendly practices into your daily routine, from reducing plastic use to choosing sustainable products.',
        image: 'https://www.purecult.in/cdn/shop/articles/What_does_it_mean_to_live_an_eco-friendly_life.png?v=1582390129',
    },
    {
        id: 3,
        title: 'Tech Support: Common Issues and Solutions',
        author: 'Mike Johnson',
        date: '2024-10-25',
        category: 'Tech Support', // Added category
        content: 'This article provides insights into common tech issues faced by users and offers practical solutions to troubleshoot them effectively.',
        image: 'https://www.beacontelecom.com/wp-content/uploads/2020/07/TechSupportImage.jpeg',
    },
    {
        id: 4,
        title: 'The Importance of Nutrition in Fitness',
        author: 'Emily Brown',
        date: '2024-10-30',
        category: 'Health & Fitness', // Added category
        content: 'Nutrition plays a crucial role in achieving fitness goals. In this post, we discuss the best dietary practices for optimal performance and recovery.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OshO7MCH8nxwbNJPwlmf8LsqH39sF8iBuw&s',
    },
    {
        id: 5,
        title: 'Event Planning Made Easy: A Step-by-Step Guide',
        author: 'Sarah Davis',
        date: '2024-11-05',
        category: 'Event Planning', // Added category
        content: 'Planning an event can be overwhelming. This blog breaks down the event planning process into manageable steps to help you organize a successful event.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPyDmLwUY2pSAdAafVoL-g7VBjXGNO5fqCA&s',
    },
];




function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero section  */}
            <Hero/>
            {/* category section */}
            <section className='py-12'>
                <div className='container mx-auto px-4'>
                    <div className='grid  sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-6 '>
                        {CategoryItems && CategoryItems.length > 0 ? (
                            CategoryItems.map(productItem => (
                                <Category 
                                    key={productItem.id} 
                                    Category={productItem} 
                                />
                            ))
                        ) : null}
                    </div>
                    <div className='flex justify-center items-center mx-auto w-full mb-8 '>
                        <Button className='mt-10 bg-secondary text-primary font-extrabold text-2xl w-[300px] flex gap-2 pt-6 pb-6'>
                        <Menu className="size-7"/>
                            All Category
                        </Button>
                    </div>
                </div>
                
            </section>

            {/* activities */}
            <section className='py-12'>
                <div className='container mx-auto px-4'>
                    <div className='flex justify-center items-center mx-auto w-full mb-8'>
                        <StarIcon className='text-yellow-600 mr-4' />
                        <h2 className='text-3xl font-bold text-center'>Special</h2>
                    </div>
                    <div className='grid grid-col-1 sm:grid-col-3 md:grid-3 lg:grid-cols-4 gap-6 '>
                        {SpecialProducts && SpecialProducts.length > 0 ? (
                            SpecialProducts.map(productItem => (
                                <Special 
                                    key={productItem.id} 
                                    product={productItem} 
                                />
                            ))
                        ) : null}
                    </div>
                    
                </div>
            </section>

              {/* Businesses And Services */}
                <section className='py-12'>
                    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                        <div className='flex justify-center items-center mx-auto w-full mb-8'>
                            <StarIcon className='text-yellow-600 mr-4' />
                            <h2 className='text-3xl font-bold text-center'>Businesses And Services</h2>
                        </div>
                        <div className='grid grid-col-1 sm:grid-col-3 md:grid-3 lg:grid-cols-3 gap-6 '>
                            {BusinessesAndServicesItems && BusinessesAndServicesItems.length > 0 ? (
                                BusinessesAndServicesItems.map(productItem => (
                                    <BusinessesAndServices 
                                        key={productItem.id} 
                                        product={productItem} 
                                    />
                                ))
                            ) : null}
                        </div>
                        <div className='flex justify-center items-center mx-auto w-full mb-8 '>
                        <Button className='mt-10 bg-secondary text-primary font-extrabold text-2xl w-[300px] flex gap-2 pt-6 pb-6'>
                        <Bolt className="size-7"/>
                            All Services
                        </Button>
                    </div>
                    </div>
                </section>

            {/* Latest Business And Services */}
            <section className='py-12'>
                <div className='container mx-auto px-4'>
                    <div className='flex justify-center items-center mx-auto w-full mb-8'>
                        <StarIcon className='text-yellow-600 mr-4' />
                        <h2 className='text-3xl font-bold text-center'>Latest Business And Services</h2>
                    </div>
                    <div className='grid grid-col-1 sm:grid-col-3 md:grid-3 lg:grid-cols-4 gap-6 '>
                        {LatestBusinessAndServicesItems && LatestBusinessAndServicesItems.length > 0 ? (
                            LatestBusinessAndServicesItems.map(productItem => (
                                <LatestBusinessAndServices 
                                    key={productItem.id} 
                                    product={productItem} 
                                />
                            ))
                        ) : null}
                    </div>
                    <div className='flex justify-center items-center mx-auto w-full mb-8 '>
                        <Button className='mt-10 bg-secondary text-primary font-extrabold text-2xl w-[480px] flex gap-2 pt-6 pb-6'>
                        <Bolt className="size-7"/>
                            All Latest Business And Services
                        </Button>
                    </div>
                </div>
            </section>

             {/* Blog */}
                <section className='py-12'>
                <div className='container mx-auto px-4'>
                    <div className='flex justify-center items-center mx-auto w-full mb-8'>
                        <StarIcon className='text-yellow-600 mr-4' />
                        <h2 className='text-3xl font-bold text-center'>Blogs</h2>
                    </div>
                    <div className='grid grid-col-1 sm:grid-col-3 md:grid-3 lg:grid-cols-4 gap-6 '>
                        {BlogItems && BlogItems.length > 0 ? (
                            BlogItems.map(productItem => (
                                <Blog 
                                    key={productItem.id} 
                                    product={productItem} 
                                />
                            ))
                        ) : null}
                    </div>
                    <div className='flex justify-center items-center mx-auto w-full mb-8 '>
                        <Button className='mt-10 bg-secondary text-primary font-extrabold text-2xl w-[200px] flex gap-2 pt-6 pb-6'>
                        <Rss className="size-7"/>
                            All Blogs
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home