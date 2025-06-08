import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className="bg-[#f5f5f5] py-10 px-6 text-gray-600">
                <div className="mx-auto container w-[1000px] mb-10 flex justify-between gap-8">
                    <div className="mb-6 ">
                       
                        <img className='w-[220px]' src="https://siteadmin.nabilbank.com/assets/backend/uploads/logo/nabil%20logo.svg" alt />
                        <h3 className="font-semibold mt-1 text-2xl">Customer Support</h3>
                        <p className="mt-1 flex items-center"><span className="mr-2"><i className="bi bi-envelope-fill text-gray-400" /></span> customercare@nabilbank.com</p>
                        <p className="mt-1 flex items-center"><span className="mr-2"><i className="bi bi-telephone-fill text-gray-400" /></span> +977 1 5971871, +977 1 5970015</p>
                        <p className="mt-1 flex items-center"><span className="mr-2"><i className="bi bi-telephone-fill text-gray-400" /></span> 16600-162245 (NTC Toll Free)</p>
                        <p className="mt-1 flex items-center"><span className="mr-2"><i className="bi bi-telephone-fill text-gray-400" /></span> 18102-162245 (Ncell Toll Free)</p>
                        <p className="mt-2">SWIFT: NARBNPKA</p>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAQMAAACXljzdAAAABlBMVEUAAAD///+l2Z/dAAAB90lEQVRYR+XSMaodOhADUIG2NaCtC7QtgX5x3w9Jkc63isB44FSWB/tb8A+JARrsqbLKLAb4XLJlMWduBVNly3sxY/Vo+ZiyivkdSU/mMqsqvydbVQBQgS/Jliq+41JZ229dvxMDzJ/5bXfeya+Uy8yC2/ZcDCVLUoCFtsrMc/l/WpKquGOVfUHMrUrVk2nG99PoSymgVEllbmahKu9FhWaZM1fcHVc9l1VL1lN64HpHc8/FLEAffbhTrOL0XpbNd1rvcJAhH/RcYgBHq7R8R6unPBefeky5n2Nt1jckVlkwSUrjPi99K/HJKjfLTHpQyudiGlx6B7DcYjB7LgVnKGVmGVxm5b0osXpckhTHxOBz2bLE9HFZqmTpeykNFjgA0KwYuC8IWFW+g8ptq5Z8QYCDqjJlyq3a3otSzaf5ACabwbyXUz7zNh9T4L4gq3qQuR5UGQeaz8UqsxVK71OqVj2XFKceDfXoOzBbnsssHyvf4RRrSU/vJVZ6WrLNtKpl72XxHZP4FOPAGHwuBdcD6MNxZXx37yVleifT4KdbcHsu22ZtPS7m5/5syFMxwEKxEnPGMcmeS7aUyZLFTJUZei9mqt7JYFUWwPErkvXAWevRWj5/+lx8LBhzmQ8q8162pKefWq0C3HsxwCSFypk+Zcmey9/y78h/9KkebcIJnBwAAAAASUVORK5CYII=" alt="QR Code" className="mt-4 w-20 h-20" />
                    </div>
                    <div className="mb-6">
                        <h3 className="font-semibold text-2xl">About Us</h3>
                        <ul className="mt-2 space-y-1">
                            <li><a href="#" className="hover:text-green-600">Introduction</a></li>
                            <li><a href="#" className="hover:text-green-600">Mission, Vision &amp; Values</a></li>
                            <li><a href="#" className="hover:text-green-600">Board of Directors</a></li>
                            <li><a href="#" className="hover:text-green-600">Board Committees</a></li>
                            <li><a href="#" className="hover:text-green-600">Management Team</a></li>
                            <li><a href="#" className="hover:text-green-600">Province Heads</a></li>
                            <li><a href="#" className="hover:text-green-600">Our Subsidiaries</a></li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-semibold text-2xl">Corporate Social Responsibility</h3>
                        <ul className="mt-2 space-y-1">
                            <li><a href="#" className="hover:text-green-600">CSR Report</a></li>
                            <li><a href="#" className="hover:text-green-600">NABIL School of Social Entrepreneurship</a></li>
                            <li><a href="#" className="hover:text-green-600">Giving Back to the Community</a></li>
                            <li><a href="#" className="hover:text-green-600">CSR Areas</a></li>
                            <li><a href="#" className="hover:text-green-600">CSR Activities</a></li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-semibold text-2xl">Support</h3>
                        <ul className="mt-2 space-y-1">
                            <li><a href="#" className="hover:text-green-600">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-green-600">ATMs</a></li>
                            <li><a href="#" className="hover:text-green-600">Branches</a></li>
                            <li><a href="#" className="hover:text-green-600">Branchless Banking</a></li>
                            <li><a href="#" className="hover:text-green-600">Contact Us</a></li>
                            <li><a href="#" className="hover:text-green-600">Business Hours</a></li>
                            <li><a href="#" className="hover:text-green-600">Grievance Handling</a></li>
                            <li><a href="#" className="hover:text-green-600">Downloads</a></li>
                            <li><a href="#" className="hover:text-green-600">Document Verification</a></li>
                            <li><a href="#" className="hover:text-green-600">FAQs</a></li>
                            <li><a href="#" className="hover:text-green-600">Privacy Statement</a></li>
                        </ul>
                    </div>
                    <div className="mb-6 ">
                        <h3 className="font-semibold text-2xl">Important Links</h3>
                        <ul className="mt-2 space-y-1">
                            <li><a href="#" className="hover:text-green-600">Learning and Development</a></li>
                            <li><a href="#" className="hover:text-green-600">Auction Notices</a></li>
                            <li><a href="#" className="hover:text-green-600">Correspondent Banking Details</a></li>
                            <li><a href="#" className="hover:text-green-600">Treasury</a></li>
                            <li><a href="#" className="hover:text-green-600">Investor Relations &amp; Disclosures</a></li>
                            <li><a href="#" className="hover:text-green-600">Career</a></li>
                            <li><a href="#" className="hover:text-green-600">Merchants</a></li>
                            <li><a href="#" className="hover:text-green-600">Offers</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mx-auto container w-[1000px] mt-10 flex flex-col">
                    <p className="text-gray-600 font-semibold text-2xl ">Follow us</p>
                    <div className="flex space-x-1 mt-4 ">
                        <a href="#" className="p-2 bg-white rounded-md shadow hover:bg-gray-200 hover:shadow-lg transition"><i className="bi bi-facebook text-blue-700" /></a>
                        <a href="#" className="p-2 bg-white rounded-md shadow hover:bg-gray-200 hover:shadow-lg transition"><i className="bi bi-instagram  text-pink-700" /></a>
                        <a href="#" className="p-2 bg-white rounded-md shadow hover:bg-gray-200 hover:shadow-lg transition"><i className="bi bi-twitter  text-sky-700" /></a>
                        <a href="#" className="p-2 bg-white rounded-md shadow hover:bg-gray-200 hover:shadow-lg transition"><i className="bi bi-linkedin  text-blue-700" /></a>
                        <a href="#" className="p-2 bg-white rounded-md shadow hover:bg-gray-200 hover:shadow-lg transition"><i className="bi bi-youtube  text-red-700" /></a>
                        <a href="#" className="p-2 bg-white rounded-md shadow hover:bg-gray-200 hover:shadow-lg transition"><i className="bi bi-app-indicator  text-pink-700" /></a>
                        <a href="#" className="p-2 bg-white rounded-md shadow hover:bg-gray-200 hover:shadow-lg transition"><i className="bi bi-tiktok  text-gray-800" /></a>
                    </div>
                </div>
                <div className="container mx-auto w-[1000px] mt-10 ">
                    <div className="flex  justify-between mt-3  pt-6 mb-2 ">
                        <div className="flex justify-between gap-6 mt-6">
                            <div>
                                <a href="#" className="text-gray-700 hover:text-green-600 font-semibold">Site Map</a>
                            </div>
                            <div>
                                <a href="#" className="text-gray-700 hover:text-green-600 font-semibold">Privacy Statement</a>
                            </div>
                        </div>
                       
                    </div>
                    <div className="flex  justify-between mt-3 pt-2 border-t">
                        <div className="text-center text-gray-600 text-sm mt-2">
                            <p>Copyright © 2025 Nabil Bank Limited. All Rights Reserved.</p>
                        </div>
                        <div>
                            <p className="text-gray-600 mt-2 ">Crafted by <a href="#" className="text-green-600  hover:text-green-600">AMNIL Technologies Pvt. Ltd</a></p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
