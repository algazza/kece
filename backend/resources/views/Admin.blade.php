@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center h-screen font-poppins overflow-hidden">
    <section class="bg-gray-50 h-[77%] w-[60%] mt-[8%] ml-[9%] rounded-[5px] py-[3rem] text-left justify-center flex flex-col">
        <main class="flex-1 p-8">
            <h1 class="text-3xl font-semibold mb-6 text-gray-900">User Profile</h1>
    
            <!-- Profile Card -->
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div class="flex items-center space-x-6 mb-6">
                    <!-- Profile Picture -->
                    <img src="https://i.ytimg.com/vi/C6hPRgBvRVA/hqdefault.jpg" alt="User Profile Picture" class="w-24 h-24 rounded-full border-4 border-black">
                </div>
                <div class="PT">
                    <h2 class="text-3xl font-bold text-gray-800">Wahitukam</h2>
                    <p class="text-gray-600 text-lg">Admin suki</p>
                </div>
    
                <!-- Profile Information -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-[2rem]">
                    <div>
                        <h3 class="text-xl font-semibold mb-3 text-gray-800">Identity</h3>
                        <p class="text-gray-700"><strong>Name:</strong> Wahitukam</p>
                        <p class="text-gray-700"><strong>Email:</strong> Wahitukam@gmail.com</p>
                        <p class="text-gray-700"><strong>Password:</strong> 081564646546</p>
                    </div>
                    
                </div>
    
                <!-- Edit Button -->
                <div class="mt-6 flex justify-end">
                    <button class="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-300">
                        Save
                    </button>
                </div>
            </div>
        </main>
    </section>
</section>
@endsection
