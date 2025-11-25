const Quote = () => {
    return (
        <div className="relative h-72 bg-[url('/quotebg.jpg')] bg-cover bg-center flex items-center justify-center p-4 bg-fixed">
            <div className="absolute inset-0 bg-black/50"></div>
            <p className="font-bold text-4xl text-white text-center relative max-w-3/5 uppercase"><span className="text-yellow-500">Simplicity</span> is the ultimate <span className="text-blue-500">sophistication.</span></p>
        </div>
    );
};

export default Quote;