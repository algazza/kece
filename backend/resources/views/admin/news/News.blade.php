@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center h-screen font-poppins">
  <div class="flex gap-[2rem] pt-[5rem] pb-[2rem] px-[9rem] bg-gray-200 w-screen">
  <div class="p-4 text-white dark:text-gray-300 outline-none focus:outline-none">
    <div class="relative flex">
        <select 
            class="bg-white dark:bg-gray-500 h-10 px-5 rounded-l-full text-sm focus:outline-none outline-none border-2 border-gray-500 dark:border-gray-600 border-r-1 cursor-pointer max-h-10 overflow-y-hidden">
            <option class="font-medium cursor-pointer" value="filter">filter</option>
            <option class="font-medium cursor-pointer" value="filter">kredit</option>
            <option class="font-medium cursor-pointer" value="filter">Deposit</option>
            <option class="font-medium cursor-pointer" value="filter">Tabungan</option>
            <option class="font-medium cursor-pointer" value="filter">Disc</option>
            <option class="font-medium cursor-pointer" value="filter">L</option>
        </select>
        <input 
            type="search" 
            name="search"
            placeholder="Search"
            class="bg-white dark:bg-gray-500 h-10 flex px-5 w-full rounded-r-full text-sm focus:outline-none border-2 border-l-0 border-gray-500 dark:border-gray-600"
            autocomplete="off" 
            spellcheck="false" 
            required 
            step="any" 
            autocapitalize="none" 
            autofocus />
        <button 
            type="submit" 
            class="absolute inset-y-0 right-0 mr-2 flex items-center px-2">
            <svg 
                class="h-4 w-4 fill-current dark:text-white" 
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                version="1.1" id="Capa_1" x="0px" y="0px"
                viewBox="0 0 56.966 56.966" 
                xml:space="preserve" 
                width="512px" 
                height="512px">
                    <path
                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
        </button>
    </div>
</div>
<div class="flex justify-end">
  <button id="menuButton" class="bg-gray-400 text-white px-6 py-1 rounded-full shadow-lg focus:outline-none hover:bg-gray-600 border-gray-500 border-2 transition duration-300 ease-in-out">
      Add News</button>
</div>
  </div>
  <div class="flex gap-[1.5rem] pt-[5rem] pb-[2rem] px-[10rem] bg-gray-200 w-screen">
    <img class=" bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShPq0XGv-4wIxCVB_qHi42ZqrmFr-Aw5Tl-g&s')] w-[15rem] h-[10rem] block justify-center rounded-[5px]  shadow-lg">
    <div class="bg-gray-50 w-[40rem] h-[10rem] block justify-center rounded-[5px] shadow-lg">
        <h1 class="font-bold">p</h1>
        <p class="absolute ml-[0.7] font-medium mx-5">Text</p>
    </div>
    <button class="bg-zinc-400 text-white py-2 px-4 rounded-[5px] transition-transform transform hover:scale-105 hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-white">
        Edit 
        <i class='bx bx-edit-alt'></i>
      </button>
    </div>


  
  
  
    </section>
@endsection