import React from 'react';
import Navbar from '../components/ui/Navbar';
import Footer2 from '../components/ui/Footer2';

function Contact() {
  return (
    <div className=" min-h-screen pt-12">
      <Navbar></Navbar>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 pt-8'>
        <div className='pt-8'>
          <div className='flex items-center justify-center'>
           <img className='rounded-full h-64' src='https://pbs.twimg.com/profile_images/1623621765896491010/jZAzCjFk_400x400.jpg'></img>
          </div>
          
          <div className='w-full flex justify-items-center flex-col pt-4'>
            <h1 className='text-xl font-bold text-center'>ジェゼ一</h1>
            <h2 className='text-center'>@ArtsJeze</h2>
            <div className='flex items-center justify-center '>
              <div className='w-3/4'>
                <p className='indent-8 text-center'> 
                Nice to meet you, my name is Jeze.
                I am currently looking for an opportunity to work as a freelance game illustrator in the game industry.
                I am passionate about game design and fan fiction illustrations, and have experience working on requests from various game companies, including "Azur Lane."
                I would love to put my skills to good use on your team!
                I would be happy to have the opportunity to use my skills to participate in your project.

                Thank you in advance.
                </p>
              </div>
              
            </div>
            
          </div>
          
        </div>
        <div className="max-w-4xl mx-auto rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            For inquiries, support, or feedback, please fill out the form below. Our team will get back to you as soon as possible.
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="mt-8 text-sm text-gray-500">
            <p>Business Hours: Monday to Friday, 9:00 AM – 6:00 PM (GMT+7)</p>
            <p>Response Time: Within 1-2 business days</p>
          </div>
        </div>
      </div>
      
      <Footer2></Footer2>
    </div>
  );
}

export default Contact;