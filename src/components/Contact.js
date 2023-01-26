import React from 'react';

function Contact() {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700">Send us a message</h2>
      <p className="py-2 text-center text-gray-700">We're standing by!</p>
      <div className="grid md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          alt="/"
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
        />
        <form>
          <div className="grid grid-cols-2">
            <input className="p-2 m-2 border" type="text" placeholder="First" />
            <input className="p-2 m-2 border" type="text" placeholder="Last" />
            <input
              className="p-2 m-2 border"
              type="email"
              placeholder="Email"
            />
            <input className="p-2 m-2 border" type="tel" placeholder="Phone" />
            <input
              className="col-span-2 p-2 m-2 border"
              type="text"
              placeholder="Address"
            />
            <textarea
              className="col-span-2 p-2 m-2 border"
              cols="30"
              rows="10"
            ></textarea>
            <button className="col-span-2 m-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
