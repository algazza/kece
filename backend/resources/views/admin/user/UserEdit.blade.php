@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200   h-screen font-poppins">

    <div class="flex-gap-[1.5rem] pt-[5rem] px-[8rem] bg-gray-200  flex flex-col justify-start">
        <h1 class="text-xl mb-2 font-bold">Admin Edit</h1>
        <div class="w-[8rem] py-[0.3rem] mb-[1rem] rounded-[7px] text-[1.1rem] font-semibold bg-white box-border border-black shadow-lg"></div>
    </div>
    <div class="pt-[5rem] px-[39rem] justify-center">
        <div class="w-80 h-90 bg-white border rounded-md shadow-md">       
            <div class="w-full max-w-xs p-4">
                <label for="textInput" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="textInput" placeholder="Enter name you want to add" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
            <div class="w-full max-w-xs p-4">
                <label for="textInput" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="text" id="textInput" placeholder="Enter Email you want to add" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
            <div class="w-full max-w-xs p-4">
                <label for="textInput" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="text" id="textInput" placeholder="......" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
            <div class="w-full max-w-xs p-4">           
                <div class="relative">
                    <button id="menuButton" class="bg-gray-200 text-white px-4 py-2 rounded-md shadow-lg focus:outline-none hover:bg-gray-400 transition duration-300 ease-in-out">
                        Role
                        <div id="dropdownMenu" class="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg transform scale-0 opacity-0 transition-transform transition-opacity duration-300 ease-in-out">
                            <ul class="py-1">
                                <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Super Admin</a></li>
                                <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Admin kredit</a></li>
                                <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Admin Tab</a></li>
                                <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Admin dep</a></li>
                            </ul>
                        </div>
                    </button>
                </div>
                <script>
                    const menuButton = document.getElementById('menuButton');
                    const dropdownMenu = document.getElementById('dropdownMenu');
            
                    menuButton.addEventListener('click', () => {
                        dropdownMenu.classList.toggle('scale-100');
                        dropdownMenu.classList.toggle('opacity-100');
                        dropdownMenu.classList.toggle('scale-0');
                        dropdownMenu.classList.toggle('opacity-0');
                    });
            
                    // Close the dropdown if the user clicks outside of it
                    document.addEventListener('click', (event) => {
                        if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
                            dropdownMenu.classList.remove('scale-100');
                            dropdownMenu.classList.remove('opacity-100');
                            dropdownMenu.classList.add('scale-0');
                            dropdownMenu.classList.add('opacity-0');
                        }
                    });
                </script>
            </div>
            <div class="w-full max-w-xs p-4"> 
                <button id="menuButton" class="bg-blue-400 text-white px-8 py-2 rounded-md shadow-lg focus:outline-none hover:bg-blue-500 transition duration-300 ease-in-out">
                    Add</button>
            </div>
            </div>
        </div>
    
    
    </section>
@endsection