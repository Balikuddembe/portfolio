import React from 'react';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'


const Contact = () => {
    return (
        <section className=' bg-black'>
            <div className=' ml-72'>
                <div className=' text-white pt-24 flex font-semibold space-x-2'>
                    <span className="text-rose-700 text-3xl">|</span>
                    <h2 className='text-3xl'>Contact</h2>
                </div>
                <div className=' mt-8'>
                    <h2 className='text-2xl font-bold text-white'>Get in Touch</h2>
                    <p className='mt-4 max-w-sm text-slate-400'>
                        If you have an exciting application you're eager to develop, a specific feature 
                        that requires skilled implementation, or a project that demands coding expertise,
                        I would be delighted to offer my assistance and contribute to its success.
                    </p>
                    <div>
                        <div>
                            <div>
                                <AiOutlinePhone size={25} className=' text-rose-700'/>
                            </div>
                            <p className='text-slate-400'>+256 777 923 074</p>

                            <div>
                                <AiOutlineMail size={25} className=' text-rose-700'/>
                            </div>
                            <p className='text-slate-400'>+256 777 923 074</p>

                            <div>
                                <MdLocationOn size={25} className=' text-rose-700' />
                            </div>
                            <p className='text-slate-400'>Uganda</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Contact;