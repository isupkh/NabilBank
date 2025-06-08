import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    let { id } = useParams();

    let product = [
        {
            id: 1,
            title: "Nabil Premium Remittance Savings Account",
            img: "https://siteadmin.nabilbank.com/assets/backend/uploads/Banners/thumbnail%20for%20savings.png",
            description: "Nabil Premium Remittance Account is a specific premium product offered to individuals who are eng...",
            btn: "Learn More",

        },

        {
            id: 2,
            title: "Nabil Dhukka Bachat Khata",
            img: "	https://siteadmin.nabilbank.com/assets/backend/uploads/RLU/Dhukka%20Bachat/352x380.png",
            description: "Nabil Dhukka Bachat Khata is brought to caters to all the needs of our valued customers.",
            btn: "Learn More",
            apply: " Apply Now"
        },

        {
            id: 3,
            title: "Nabil Dhukka Ghar Karja",
            img: "https://siteadmin.nabilbank.com/assets/backend/uploads/download/Dhukka-ghar-karja-320X320.png",
            description: "Nabil Dhukka Ghar Karja provides you with the benefit of a fixed interest rate, eliminating conce...",
            btn: "Learn More",
            calculator: "calculator"
        },

        {
            id: 4,
            title: "Nabil Instant Gold Loan",
            img: "https://siteadmin.nabilbank.com/assets/backend/uploads/download/Instant%20Gold%20Loan.png",
            description: " Nabil Instant Gold Loan is a financing solution that allows customers to leverag...",
            btn: "Learn More",
        },
    ]

    let details = product.find((a) => a.id == id);
 console.log(details)
    return (
        <>
            <section>
                <div className='container flex mx-auto w-[1000px] flex justify-between gap-11 p-5 shadow m-5'>
                    
                    <div className='w-[400px]'>
                        <img src={details.img} alt="" />
                    </div>
                    <div>
                        <h5 className='font-bold text-green-600 text-[30px] '>{details.title}</h5>
                        <p className='py-5'>{details.description}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Details
