import React from 'react';

const AddAdmin = () => {
  return (
    <div>
      <div className="flex items-center justify-center p-6 h-3/6">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="text-xl font-semibold text-gray-600">Add A Admin</h2>

            <div className="p-4 px-4 mb-6 bg-white rounded shadow-lg md:p-8">
              <div className="grid grid-cols-1 gap-4 text-sm gap-y-2 lg:grid-cols-3">


                <div className="lg:col-span-3">
                  <div className="grid grid-cols-1 gap-4 text-sm gap-y-2 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label>Full Name</label>
                      <input type="text" name="full_name" id="full_name" className="w-full h-10 px-4 mt-1 border rounded bg-gray-50" value="" />
                    </div>

                    <div className="md:col-span-5">
                      <label>Email Address</label>
                      <input type="text" name="email" id="email" className="w-full h-10 px-4 mt-1 border rounded bg-gray-50" value="" placeholder="email@domain.com" />
                    </div>

                    <div className="md:col-span-3">
                      <label>Address / Street</label>
                      <input type="text" name="address" id="address" className="w-full h-10 px-4 mt-1 border rounded bg-gray-50" value="" placeholder="" />
                    </div>

                    <div className="md:col-span-2">
                      <label>City</label>
                      <input type="text" name="city" id="city" className="w-full h-10 px-4 mt-1 border rounded bg-gray-50" value="" placeholder="" />
                    </div>

                    <div className="md:col-span-2">
                      <label>Country / region</label>
                      <div className="flex items-center h-10 mt-1 border border-gray-200 rounded bg-gray-50">
                        <input name="country" id="country" placeholder="Country" className="w-full px-4 text-gray-800 bg-transparent outline-none appearance-none" value="" />
                        <button className="text-gray-300 transition-all outline-none cursor-pointer focus:outline-none hover:text-red-600">
                          <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button className="text-gray-300 transition-all border-l border-gray-200 outline-none cursor-pointer focus:outline-none hover:text-blue-600">
                          <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label>State / province</label>
                      <div className="flex items-center h-10 mt-1 border border-gray-200 rounded bg-gray-50">
                        <input name="state" id="state" placeholder="State" className="w-full px-4 text-gray-800 bg-transparent outline-none appearance-none" value="" />
                        <button className="text-gray-300 transition-all outline-none cursor-pointer focus:outline-none hover:text-red-600">
                          <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button className="text-gray-300 transition-all border-l border-gray-200 outline-none cursor-pointer focus:outline-none hover:text-blue-600">
                          <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-1">
                      <label>Zipcode</label>
                      <input type="text" name="zipcode" id="zipcode" className="flex items-center w-full h-10 px-4 mt-1 transition-all border rounded bg-gray-50" placeholder="" value="" />
                    </div>

                    <div className="md:col-span-5">
                      <div className="inline-flex items-center">
                        <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                        <label className="ml-2">My billing address is different than above.</label>
                      </div>
                    </div>

                    <div className="text-right md:col-span-5">
                      <div className="inline-flex items-end">
                        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Submit</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default AddAdmin;