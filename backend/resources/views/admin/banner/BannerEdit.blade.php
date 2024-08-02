@php use Carbon\Carbon; @endphp

@extends('layout')
@section('content')
    <section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center h-screen font-poppins">
        <div class="flex gap-[1.5rem] pt-[5rem] pb-[2rem] pl-[32rem] bg-gray-200 w-screen">
                <div class="bg-gray-300 w-[70rem] h-[30rem] justify-item-center  box-border border-[o.5px] rounded-[8px] border-black shadow-md"></div>
                </div>
                <button class="bg-stone-400 text-white py-2 pl-2px rounded-[5px] transition-transform transform hover:scale-105 hover:bg-stone-500 focus:outline-none focus:ring-2 focus:ring-current">
                    Edit
                  </button>             
    </section>
@endsection