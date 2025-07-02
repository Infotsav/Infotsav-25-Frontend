// import React from 'react'

function ContactUs() {

    return (
<<<<<<< HEAD
        <main className="flex flex-col pt-[100px] w-full text-white items-center px-4 sm:px-6 b-16">
            <section className="flex flex-col w-full items-center mt-6 sm:mt-8">
                <div className="relative z-[-1]">
                    <ParticlesBackground />
                </div>
                <h1 className="sg-text text-[3.5rem] md:text-[5rem] text-white">
                    CONTACT US
                </h1>
                <h2 className="font-pixelify text-[2.5rem] md:text-[2.7rem] text-white">
                    Fill The Form
                </h2>
                <form
                    className=" h-[28rem] w-[80%] sm:w-[60%] mt-[2%] flex flex-col justify-center items-center gap-[15px] text-white"
                    onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        className="w-[100%] md:w-[80%] h-[15%] lg:w-[60%]  rounded-sm px-[15px] bg-transparent border-2 border-indigo-500"
                        placeholder="YOUR NAME"
                        onChange={handleInputChange}
                        value={formData.name}
                        name="name"
                    />
                    <input
                        type="email"
                        className="w-[100%] md:w-[80%]  h-[15%] lg:w-[60%] rounded-sm px-[15px] bg-transparent border-2 border-indigo-500"
                        placeholder="E-MAIL ADDRESS"
                        onChange={handleInputChange}
                        value={formData.email}
                        name="email"
                    />
                    <textarea
                        placeholder="MESSAGE"
                        className="w-[100%] md:w-[80%] h-[70%] lg:w-[60%] pt-3 rounded-sm px-[15px] bg-transparent border-2 border-indigo-500 resize-none"
                        onChange={handleInputChange}
                        value={formData.message}
                        name="message"
                    />
                    <button
                        type="submit"
                        className="h-[50px] w-[150px] rounded-full bg-indigo-500">
                        Send
                    </button>
                </form>
            </section>

            <section className="flex flex-col w-full items-center gap-4 mt-6 sm:mt-8">
                <h2 className=" sg-text text-[3.5rem] md:text-[5rem] ">OR</h2>
                <h2 className="xl:text-6xl md:text-3xl text-xl font-pixelify mt-6 sm:mt-8 mb-4 sm:mb8">
                    Reach Out to Us Directly
                </h2>
                <div className="grid md:grid-cols-2 w-full gap-6">
                    <Map />
                    <ContactInfo />
                </div>
            </section>
=======
        <main className="flex flex-col mt-[100px] w-full text-white items-center px-4 sm:px-6 b-16">
            ContactUs
>>>>>>> a331ce39967023072a0c96480c61ad7e851ab65d
        </main>
    );
}

export default ContactUs;