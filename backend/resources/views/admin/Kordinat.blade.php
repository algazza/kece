@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200   h-screen font-poppins">

    <div class="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <div class="bg-white shadow-md rounded-md p-6">
                <h2 class="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Add Place
                </h2>
                <form class="space-y-6" method="POST">
    
                    <div>
                        <label for="new-Place" class="block text-sm font-medium text-gray-700">Name</label>
                        <div class="mt-1">
                            <input name="username" type="username" required
                                class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" placeholder="Name Place" />
                        </div>
                    </div>
    
                    <div>
                        <label for="Address" class="block text-sm font-medium text-gray-700">Address</label>
                        <div class="mt-1">
                            <input name="email" type="email-address" autocomplete="email-address" required
                                class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                        </div>
                    </div>
    
                    <div>
                        <label for="Url" class="block text-sm font-medium text-gray-700">Enter Url</label>
                        <div class="mt-1">
                            <input name="Url" type="Url" autocomplete="Url" required
                                class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                        </div>
                    </div>
                    <div>
                        <label for="Url" class="block text-sm font-medium text-gray-700">dari jam</label>
                        <input type="time" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                    </div>
                    <div>
                        <label for="Url" class="block text-sm font-medium text-gray-700">hingga</label>
                        <input type="time" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                    </div>
                
                    <div>
                        <button type="submit"
                            class="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
                            Add Place
                            </button>
                    </div>

                </form>
            </div>
        </div>
    </div>
@endsection