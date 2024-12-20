@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center font-poppins ">
   
    <section class="pt-[5rem] ml-[5rem] max-md:ml-[2rem] mr-[1rem] flex justify-center">
        <a href="{{ route ('admin') }}" class="hidden md:block xl:block">
            <i class='bx bx-arrow-back text-4xl rounded-lg font-semibold bg-white border border-gray-300  text-red-600 px-2 hover:bg-gray-300 shadow-sm duration-300 mb-2' ></i>
        </a>
    <div class="bg-white my-20 mx-8 p-4 shadow border rounded-5px w-full "> 
        <img src="{{ asset('image/admin/' . $admin->image) }}" class="mx-auto text-center  rounded-full h-32 w-32 mb-4 object-cover" alt="profile-img" title="profile-img"/>
        <h1 class="text-center text-gray-900 text-2xl">{{ $admin->name }}</h1>
        <div>
            <h1 class="text-center  font-semibold text-xl pt-3">{{ $admin->role }}</h1>
        </div>
        <a href="#"
            class="flex my-4 border-gray-300 justify-center text-center py-[2rem] border rounded text-gray-400 hover:bg-gray-500 duration-75 hover:text-white hover:border-gray-500">
            <i class='bx bx-envelope pr-2 pt-1'></i>
            <h2>{{ $admin->email }}</h2>
        </a> 
        <a href="#"
            class="flex xs:hidden my-4 border-gray-300 justify-center text-center py-[2rem] border rounded text-gray-400 hover:bg-gray-500 duration-75 hover:text-white hover:border-gray-500">
            <i class='bx bx-phone pr-2 pt-1'></i>
            <h2>{{ $admin->no_handphone }}</h2>
        </a> 
        
    </div>
    </section>
</section>
@endsection
