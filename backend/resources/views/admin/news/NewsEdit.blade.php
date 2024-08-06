@extends('layout')
@section('content')
    <section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center font-poppins">
       
        <main class="flex-1 p-8 justify-center pt-[5rem] pl-[5rem]">
            <h1 class="text-3xl font-semibold mb-4">Add News</h1>
    
            <!-- Form to Add News -->
            <form class="bg-white p-6 rounded-lg shadow-md">
                <div class="mb-4">
                    <label for="title" class="block text-sm font-semibold text-gray-700">Title</label>
                    <input type="text" id="title" name="title" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter news title">
                </div>
    
                <div class="mb-4">
                    <label for="description" class="block text-sm font-semibold text-gray-700">Description</label>
                    <textarea id="description" name="description" rows="4" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter news description"></textarea>
                </div>
    
               
    
                <div class="mb-4">
                    <label for="category" class="block text-sm font-semibold text-gray-700">Category</label>
                    <select id="category" name="category" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                        <option value="">Select category</option>
                        <option value="Technology">Disc</option>
                        <option value="Business">Service</option>
                        <option value="Health">Health</option>
                        <option value="Entertainment">Entertainment</option>
                    </select>
                </div>
    
                <div class="flex justify-end">
                    <button id="menuButton" class="bg-blue-400 text-white px-8 py-2 rounded-md shadow-lg focus:outline-none hover:bg-blue-500 transition duration-300 ease-in-out">
                        Add News</button>
                </div>
            </form>
    
            <!-- Display Added News (Example) -->
            <div class="mt-8">
                <h2 class="text-2xl font-semibold mb-4">Select your image</h2>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <!-- Example News Item -->
                    <h3 class="text-xl font-semibold mb-2"> Title</h3>
                    <p class="text-gray-700 mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque natus, non, voluptate maxime doloribus autem quasi recusandae quo, nihil eveniet fugit ipsa itaque sapiente molestias error magni. Quis, rem ut.(description)</p>
                    <img src="https://i.ytimg.com/vi/C6hPRgBvRVA/hqdefault.jpg" alt="News Image" class="w-full rounded-md mb-2">
                    <p class="text-gray-500 text-sm">Category: Technology</p>
                </div>
            </div> 
        </main>
    </section>
@endsection