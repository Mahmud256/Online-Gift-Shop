import React from 'react';

const Footer = () => {
    return (
        <footer className="">
            <div className='lg:flex'>
                <div className="right flex justify-center bg-[#1F2937] p-4 text-white lg:w-1/2">
                    <div>
                        <h2>Contact US</h2>
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>

                <div className="left flex justify-center bg-[#111827] p-4 text-white lg:w-1/2">
                    <div>
                        <h2 className='text-center'>Follow US</h2>
                        <h2>Join us on social media</h2>
                        <div className='flex justify-center my-1'>
                        <div className="grid grid-flow-col gap-3">
                            <a href="https://youtube.com/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center p-4 bg-[#151515] text-white text-base">
                <p>Copyright © 2023 - All right reserved by OGS</p>
            </div>
        </footer>
    );
};

export default Footer;
