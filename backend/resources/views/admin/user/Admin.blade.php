@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center h-screen font-poppins ">
   
    <section class="pt-[5rem] px-[5rem]">
    <div class="bg-white my-20 mx-8 p-4 shadow border rounded w-full overflow-x-auto"> 
        <img src="{{ asset('image/admin/' . $admin->image) }}" class="mx-auto text-center  rounded-full h-32 w-32 mb-4 object-cover" alt="profile-img" title="profile-img"/>
        <h1 class="text-center text-gray-900 text-2xl">{{ $admin->name }}</h1>
        <h1 class="text-center font-semibold text-xl">{{ $admin->role }}</h1>
        <a href="#"
            class="flex my-4 border-gray-300 justify-center text-center py-[2rem] border rounded text-gray-400 hover:bg-gray-500 duration-75 hover:text-white hover:border-gray-500">
            <i class='bx bx-envelope pr-2 pt-1'></i>
            <h2>{{ $admin->email }}</h2>
        </a> 
        <a href="#"
            class="flex my-4 border-gray-300 justify-center text-center py-[2rem] border rounded text-gray-400 hover:bg-gray-500 duration-75 hover:text-white hover:border-gray-500">
            <i class='bx bx-phone pr-2 pt-1'></i>
            <h2>{{ $admin->no_handphone }}</h2>
        </a> 
        {{-- <a href="#"
            class="flex my-4 border-gray-300 justify-center text-center py-[2rem] border rounded text-gray-400 hover:bg-gray-500 duration-75 hover:text-white hover:border-gray-500">
            <i class='bx bx-lock-alt pr-3 pt-1' ></i>
            <h2>123456</h2>
        </a>  --}}
    </div>
    </section>
</section>
@endsection
