@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200  w-screen h-screen overflow-auto font-poppins">
    <section class=" mt-[5rem] rounded-[5px] py-8 ml-[5rem] mr-[1rem] text-left flex justify-center sm:px-6 lg:px-8">
        <div class="bg-white py-8 rounded-2xl shadow-lg max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row -mx-4">
                <div class="md:flex-1 px-4">
                    <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-white mb-4">
                        <div class="flex justify-center items-center">
                            <div class="overflow-hidden box-border flex justify-center md:justify-center sm:justify-center ss:justify-center xs:justify-center xss:justify-center items-center mr-[2rem] border-black border-[2px] h-[28rem] w-[30rem]">
                                <img id="previewImage" src="" alt="" class="w-full h-full object-cover z-10" style="cursor: pointer; display: none;">
                                <div class="bg-white/90 rounded-full w-6 h-6 text-center sticky">
                                    <input type="file" name="image" id="upload_profile" hidden>
                                    <label for="upload_profile">
                                        <svg data-slot="icon" class="w-6 h-5 text-black" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"></path>
                                        </svg>
                                    </label>
                                </div>
                            </div>                                                                                            
                        </div>
                    </div>
                    <div>
                        <span class="font-bold text-black dark:text-black">Deskripsi singkat :</span>
                        <div class=" py-2 rounded-lg">
                            <div class="mt-2">
                                <textarea type="text" id="name" name="name" placeholder="Tulis Deskripsi" class="border border-gray-300 shadow p-3 h-[13.3rem] w-full rounded inline-block"></textarea>
                            </div>  
                    </div>
                    </div>
                </div>
                
                <div class="md:flex-1 px-4">
                    <h2 class="text-2xl font-bold text-gray-800 dark:text-black mb-2 sm:mt-5 xs:mt-5 sss:mt-5 xss:mt-5 ss:mt-5">Property information</h2>
                    <div>
                        <div class="grid gap-2 grid-cols-1 sm:grid-cols-2">
                        <div class="mt-2">
                            <label for="name" class="block mb-2 font-bold text-black pr-2">Kamar</label>
                            <input type="text" id="name" name="name" placeholder="......" class="border border-gray-300 shadow p-3 w-full rounded ">
                        </div>
                        <div class="mt-2">
                            <label for="name" class="block mb-2 font-bold text-black">Kamar Mandi</label>
                            <input type="text" id="name" name="name" placeholder="......" class="border border-gray-300 shadow p-3 w-full rounded ">
                        </div>
                        </div>
                        <div class="grid gap-2 grid-cols-1 sm:grid-cols-2">
                        <div class="mt-2">
                            <label for="name" class="block mb-2 font-bold text-black">Luas Tanah</label>
                            <input type="text" id="name" name="name" placeholder="......" class="border border-gray-300 shadow p-3 w-full rounded ">
                        </div>
                        <div class="mt-2">
                            <label for="name" class="block mb-2 font-bold text-black">Luas Bangunan</label>
                            <input type="text" id="name" name="name" placeholder="......" class="border border-gray-300 shadow p-3 w-full rounded ">
                        </div>
                        </div>
                        <div class="grid gap-2 grid-cols-1 sm:grid-cols-3">
                        <div class="mt-2">
                            <label for="name" class="block mb-2 font-bold text-black">Carpot</label>
                            <input type="text" id="name" name="name" placeholder="......" class="border border-gray-300 shadow p-3 w-full rounded">
                        </div>
                        <div class="mt-2">
                            <label for="name" class="block mb-2 font-bold text-black">Kamar Tidur</label>
                            <input type="text" id="name" name="name" placeholder="......" class="border border-gray-300 shadow p-3 w-full rounded ">
                        </div>
                        <div class="mt-2">
                            <label for="name" class="block mb-2 font-bold text-black">Kamar Mandi</label>
                            <input type="text" id="name" name="name" placeholder="......" class="border border-gray-300 shadow p-3 w-full rounded ">
                        </div>
                        </div>
                </div>
                    <div class="mb-4">
                        <div class="mt-2">
                            <label for="name" class="block mb-2 font-bold text-black">Alamat</label>
                            <input type="text" id="name" name="name" placeholder="......" class="border border-gray-300 shadow p-3 w-full rounded ">
                        </div>       
                        <div class="mt-2">
                            <label for="name" class="block mb-2 font-bold text-black">Harga</label>
                            <input type="text" id="name" name="name" placeholder="......" class="border border-gray-300 shadow p-3 w-full rounded ">
                        </div>       
                        <div class="mt-2">
                            <label for="name" class="block mb-2 font-bold text-black">Status</label>
                            <input type="text" id="name" name="name" placeholder="......." class="border border-gray-300 shadow p-3 w-full rounded ">
                        </div>         
                    <div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2">
                        <button class="bg-blue-200 hover:bg-blue-300 hover:scale-95 duration-200 text-black font-bold w-full py-5 text-lg rounded">Submit</button>
                        <button class="bg-red-200 hover:bg-red-300 hover:scale-95 duration-200 text-black font-bold w-full py-5 text-lg rounded">Reset</button>
                    </div>
                    </div>          
                </div>
            </div>
        </div>
    </section>
</section>
@endsection