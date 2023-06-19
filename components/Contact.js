import React from 'react';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'


const Contact = () => {
    return (
        <section className=' bg-black pb-40'>
            <div className=' ml-72'>
                <div className=' text-white pt-24 flex font-semibold space-x-2'>
                    <span className="text-rose-700 text-3xl">|</span>
                    <h2 className='text-3xl'>Contact</h2>
                </div>
                <div className=' mt-8 flex'>
                    <div className=' bg-zinc-950 p-7 w-1/2'>
                        <h2 className='text-2xl font-bold text-white'>Get in Touch</h2>
                        <p className='mt-4 max-w-sm text-slate-400'>
                            If you have an exciting application you're eager to develop, a specific feature
                            that requires skilled implementation, or a project that demands coding expertise,
                            I would be delighted to offer my assistance and contribute to its success.
                        </p>

                        <div className='flex space-x-4 mt-6 items-center'>
                            <div className=' flex items-center justify-center bg-rose-700 w-9 h-9'>
                                <AiOutlinePhone size={25} className=' text-white' />
                            </div>
                            <p className='text-slate-400'>+256 (0) 777-923-074</p>
                        </div>

                        <div className=' flex space-x-4 mt-3 items-center'>
                            <div className=' flex items-center justify-center bg-rose-700 w-9 h-9'>
                                <AiOutlineMail size={25} className=' text-white' />
                            </div>
                            <p className='text-slate-400'>balixemma@gmail.com</p>
                        </div>

                        <div className='flex space-x-4 mt-3 items-center'>
                            <div className=' flex items-center justify-center w-9 h-9 bg-rose-700'>
                                <MdLocationOn size={25} className=' text-white' />
                            </div>
                            <p className='text-slate-400'>Uganda - Kampala</p>
                        </div>
                    </div>

                    <div className=' ml-10 '>
                        <input type='text' placeholder='Name' className=' placeholder-shown: text-zinc-600 border border-zinc-900 pl-2 mb-3 block w-96 h-10 bg-black' />
                        <input type='email' placeholder='Email' className='placeholder-shown: text-zinc-600 pl-2 mb-3 block w-96 h-10 border border-zinc-900 bg-black' />
                        <textarea placeholder='Message' className='placeholder-shown: text-zinc-600 pl-2 mb-3 block w-96 h-32 resize-none border border-zinc-900 bg-black'/>
                        <button className=' text-white bg-rose-600 px-4 py-4 mt-4 hover:bg-black border-2 border-rose-600'>Send Message</button>
                    </div>

                </div>
            </div>
        </section>

    );
}

export default Contact;