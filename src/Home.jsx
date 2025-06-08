import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    let post = [
        {
            id: 1,
            title: "Nabil Premium Remittance Savings Account",
            img: "https://siteadmin.nabilbank.com/assets/backend/uploads/Banners/thumbnail%20for%20savings.png",
            description: "Nabil Premium Remittance Account is a specific premium product offered to individuals who are eng...",
            btn:"Learn More",

        },

        {
            id: 2,
            title: "Nabil Dhukka Bachat Khata",
            img: "	https://siteadmin.nabilbank.com/assets/backend/uploads/RLU/Dhukka%20Bachat/352x380.png",
            description: "Nabil Dhukka Bachat Khata is brought to caters to all the needs of our valued customers.",
            btn:"Learn More",
            apply:" Apply Now"
        },

        {
            id: 3,
            title: "Nabil Dhukka Ghar Karja",
            img: "https://siteadmin.nabilbank.com/assets/backend/uploads/download/Dhukka-ghar-karja-320X320.png",
            description: "Nabil Dhukka Ghar Karja provides you with the benefit of a fixed interest rate, eliminating conce...",
            btn:"Learn More",
            calculator:"calculator"
        },

        {
            id: 4,
            title: "Nabil Instant Gold Loan",
            img: "https://siteadmin.nabilbank.com/assets/backend/uploads/download/Instant%20Gold%20Loan.png",
            description: " Nabil Instant Gold Loan is a financing solution that allows customers to leverag...",
            btn:"Learn More",
        },
    ]
    return (
        
        <>
            {/* 1st section logo search */}

            <section className="container w-[1000px] mx-auto">
                <div className="px-6 pt-3">

                    <div className='flex justify-between'>
                        <div>
                            <Link to={'/'}>
                            <a href="index.html">
                                <img className="w-[175px]" src="https://siteadmin.nabilbank.com/assets/backend/uploads/logo/nabil%20logo.svg" alt />
                            </a>
                            </Link>
                        </div>
                        <div className="text-[#28A745] text-xl">
                            <i className="bi bi-search" />
                        </div>
                    </div>
                </div>

            </section>

            {/* 2ns sectn marque */}

            <section className="bg-[#EE3E43] h-[30px] items-center">
                <div className="container mx-auto w-[1000px] mt-4 flex justify-between">
                    <ul className="list-none flex text-white">
                        <li>KYC Non-Compliant Notices</li>
                    </ul>
                    <ul className="list-none flex gap-3 text-white underline">
                        <li>Read More</li>
                        <li>Email the details</li>
                        <i className="bi bi-bag-x-fill" />
                    </ul>
                </div>
            </section>

            {/* 3rd big img */}

            <section>
                <img src="https://siteadmin.nabilbank.com/assets/backend/uploads/download/website%20banner%20(2).png" alt />
            </section>

            {/* 4th sectn */}

            <section>
                <div className="container mx-auto w-[1000px] mb-14 flex justify-between items-center">
                    <div>
                        <h1 className="text-red-700 font-bold text-3xl mt-12">Start your <span className="text-[#28A745] font-bold">
                            banking journey with us.</span></h1>
                        <p className="text-gray-600 text-1xl mt-3 ">Open an account online in minutes</p>
                        <button className="h-14 p-4 mt-3 text-white rounded-lg bg-gradient-to-r from-green-600 to-green-400"> Open
                            an Account Now <i className="bi bi-caret-right-square " /></button>
                    </div>
                    <div className="flex">
                        <img className="w-[445px]" src="https://siteadmin.nabilbank.com/assets/backend/uploads/test/241009-091536.png" alt />
                    </div>
                </div>
            </section>

            {/* 5st section*/}


            <section>

                <div className="w-[1000px] mx-auto mt-11 flex my-5 py-12 ">
                    
                    {/* Left Side (Cards) */}

                        <div className="w-[650px] flex flex-wrap">
                            {/* First Row */}
                            {post.map((a) => (
                            <div className="w-[250px] h-[250px] relative m-2 shadow-lg rounded-lg overflow-hidden">
                              <Link to={`/details/${a.id}`}>
                                <img src={a.img} alt="Image 1" className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-green-600 to-transparent" />
                                <div className="absolute bottom-4 left-0 w-full text-center text-white font-semibold text-lg px-4">
                                    {a.title}
                                </div>
                                </Link>
                            </div>
                            ))}
                        </div>
                    

                    {/* Right Side (Green Box) */}
                    <div className="w-[505px] h-[524px] bg-green-600 text-white p-10 ml-10 rounded-lg relative shadow-lg pt-28 ">
                        <h2 className="text-3xl font-bold ">We can help <span className="font-extrabold">you</span> achieve your goals</h2>
                        <p className="mt-4 text-lg">Take a step towards building your dreams with us</p>
                        <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg flex items-center shadow-md">
                            Explore Products Designed For You
                        </button>
                        <div className="absolute top-0 right-0 w-full h-full bg-white opacity-5" />
                    </div>
                </div>

            </section>



            {/* 6th sectn */}

            <section>
                <div className="container mx-auto w-[1000px] mb-14 flex justify-between items-center">
                    <div className="w=[30]">
                        <h1 className="text-red-700 font-bold text-3xl ">Our Contribution <span className="text-[#28A745] font-bold">towards the Community</span></h1>
                        <button className="h-14 p-4 mt-3 text-white rounded-lg bg-gradient-to-r from-green-600 to-green-400"> Read
                            Our Stories</button>
                    </div>
                    <div className="w-[700px]">
                        <img src="https://siteadmin.nabilbank.com/assets/backend/uploads/test/241009-092038.png" alt />
                    </div>
                </div>
            </section>

            {/* 7rd section*/}

            <section>
                <div className="container mx-auto w-[1000px] mb-14 flex  items-center my-5 py-12 ">
                    <div>
                        <img className="w-[445px]" src="https://siteadmin.nabilbank.com/assets/backend/uploads/home/Individual/nBank%20Banner.png" alt />
                    </div>
                    <div className="text-1xl ml-11">
                        <h1 className="text-red-700 font-bold text-3xl mt-12">Bank from
                            <span className="text-[#28A745] font-bold">everywhere</span>
                        </h1>
                        <p className="text-gray-600 mt-4 ">Change the way with bank, with nBank</p>
                        <div className="pl-5 pt-4">
                            <ul className="flex justify-between text-gray-600 gap-10 mt-4">
                                <li><a href>
                                    <i className="bi bi-phone text-4xl " />
                                    <p>Mobile</p>
                                </a></li>
                                <li><a href>
                                    <i className="bi bi-display text-4xl" />
                                    <p>Internet</p>
                                </a></li>
                                <li><a href>
                                    <i className="bi bi-bank text-4xl" />
                                    <p>Our Branches</p>
                                </a></li>
                                <li><a href>
                                    <i className="bi bi-geo-alt text-4xl" />
                                    <p>ATM</p>
                                </a></li>
                            </ul>
                        </div>
                        <div className="mt-6 space-x-4">
                            <button className="h-14 p-4 mt-3 text-white rounded-lg bg-gradient-to-r from-green-600 to-green-400">Send to
                                Mobile Number</button>
                            <button className=" h-14 p-2 border-2 border-green-600 rounded-md ">More Info</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
