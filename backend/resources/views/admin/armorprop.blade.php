@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200  w-screen h-screen overflow-auto font-poppins">
    <section class=" mt-[5rem] rounded-[5px] py-8 ml-[5rem] mr-[1rem]text-left flex justify-center sm:px-6 lg:px-8">
        <div class="bg-white py-8 rounded-2xl shadow-lg max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row -mx-4">
                <div class="md:flex-1 px-4">
                    <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                        <img class="w-full h-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sVxuDHSH8rROc-LRwCUpTHIQjf8zq7apXQ&s" alt="Product Image">
                        <h2></h2>
                    </div>
                </div>
                <div class="md:flex-1 px-4">
                    <h2 class="text-2xl font-bold text-gray-800 dark:text-black mb-2">Property information</h2>
                    <div class="flex">
                        <div>
                    <p class="text-black dark:text-black text-sm mb-4 border-b border-gray">
                        Kamar
                    </p>
                    <p class="text-black dark:text-black text-sm mb-4 border-b border-gray">
                        Kamar mandi
                    </p>
                    <p class="text-black dark:text-black text-sm mb-4 border-b border-gray">
                        luas tanah
                    </p>
                    <p class="text-black dark:text-black text-sm mb-4 border-b border-gray">
                        Luas bangunan
                    </p>
                    <p class="text-black dark:text-black text-sm mb-4 border-b border-gray">
                        Carpot
                    </p>
                        </div>
                        <div>
                    <p class="text-black dark:text-black text-sm mb-4 border-b border-gray px-3 font-semibold">
                        3
                    </p>
                    <p class="text-black dark:text-black text-sm mb-4 border-b border-gray px-3 font-semibold">
                       3
                    </p>
                    <p class="text-black dark:text-black text-sm mb-4 border-b border-gray px-3 font-semibold">
                       3
                    </p>
                    <p class="text-black dark:text-black text-sm mb-4 border-b border-gray px-3 font-semibold">
                       3
                    </p>
                    <p class="text-black dark:text-black text-sm mb-4 border-b border-gray px-3 font-semibold">
                       3
                    </p>
                        </div>
                </div>
                    <div class="flex mb-4">
                        <div class="mr-4">
                            <span class="font-bold text-black dark:text-black">Price:</span>
                            <span class="text-black dark:text-black">$29.99</span>
                        </div>
                        <div>
                            <span class="font-bold text-black dark:text-black">Availability:</span>
                            <span class="text-black dark:text-black">In Stock</span>
                        </div>
                    </div>
                    <div class="inline-block">
                        <span class="font-bold text-black dark:text-black">Product Description:</span>
                        <p class="text-gray-600 dark:text-black text-sm mt-2">
                            Hunian yang sangat keren berada di tengah kota Jakarta Pusat.  
                        </p>
                        <p class="text-gray-600 dark:text-black text-sm mt-2">
                            Dengan model clauster di lengkapi dengan Fasilitas kolam renang dan Gym  Lokasi berada di tengah tengah antara Cempaka Putih dan Percetakan negara.  Tidak banjir. 
                        </p>
                        <p class="text-gray-600 dark:text-black text-sm mt-2">
                            Hanya 5 menit ke Apart Grand Pramuka                         
                        </p>
                        <p class="text-gray-600 dark:text-black text-sm mt-2">
                            Hanya 5 menit ke Kuliner Taman Solo
                        </p>
                        <p class="text-gray-600 dark:text-black text-sm mt-2">
                            Hanya 5 menit ke kantor BPOM                          
                        </p>
                        <p class="text-gray-600 dark:text-black text-sm mt-2">
                            Hanya 5 menit ke RS Islam Jakarta                           
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</section>
@endsection