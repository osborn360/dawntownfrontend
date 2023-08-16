
export default function Card() {
  return (
    <>
      <div className="grid grid-cols-4 h-screen place-items-center bg-gray-100">
        <div className="col-span-1"></div>
          <div className="col-span-2 rounded-lg bg-white">
            <div className="grid md:grid-cols-2 sm:grid-cols-1">
              <div className="col-span-1 p-3">
                  <h1>image goes here</h1>
              </div>
              <div className="col-span-1 p-6">
                  <p className="p-2 uppercase tracking-widest text-xs text-gray-500">Perfume</p>
                  <h1 className="p-2">Gabrielle Essence Eau De Parfum</h1>
                  <p className="p-2 text-gray-500">A floral coral and voluptuous integration composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.</p>
                  <div className="p-2 flex space-x-2 place-items-center">  
                    <h1 className="text-4xl font-extrabold">$149.99</h1>
                    <p className="text-xs text-gray-500">$169.99</p>
                  </div>
                
                  <button className="w-full p-3 bg-emerald-700 rounded-lg text-white text-sm">Add to Cart</button>
                  
              </div>
            </div>
          </div>        
        <div className="col-span-1"></div>

      </div>


    </>
  
  )
}
