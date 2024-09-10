@php use Carbon\Carbon; @endphp

@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 h-screen font-poppins overflow-x-hidden">
<div class="grid gap-8 grid-cols-1 md:grid-cols-2 ml-[5rem] mr-[1rem] mt-20 mb-10">
  @foreach ($banner as $item)
  <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-full mx-auto mt-1 cursor-pointer group hover:bg-gray-200 hover:scale-95 duration-300" style="padding-top: 37.5%;">
    <img src="{{ asset('image/public/banner/' . $item->image) }}" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover">
    <button type="submit" class="absolute flex items-center justify-center text-4xl text-red-600 font-semibold py-2 px-4 rounded-lg">
      <i class='bx bx-trash bg-white py-2 px-3 rounded-lg hover:bg-gray-200 hover:scale-95 duration-300 shadow-md '></i>
    </button>
    <form action="{{ route('banner.delete', $item->id) }}" method="POST" onsubmit="return confirmDelete()">
      @csrf
      @method('DELETE')
      <div class="">
      </div>
      <div class="z-10 gap-y-1 bg-white border shadow-md rounded-md text-gray-500 overflow-hidden leading-6 absolute bottom-4 right-4 font-poppins text-sm px-3 block">{{ \Carbon\Carbon::parse($item->created_at)->format('d/m/Y') }}</div>
    </form>
  </article>
  @endforeach
</div>

  <div class="flex justify-end fixed bottom-10 right-10">
    <form id="image-upload-form" action="{{ route('banner.add') }}" method="POST" enctype="multipart/form-data">
      @csrf  
      <label for="upload-image" class="flex items-center justify-center w-19 h-12 cursor-pointer bg-white hover:bg-slate-200 hover:scale-105 duration-300 border-2 border-gray-400 text-black rounded-full shadow-md">
       <p class="px-3">+ Add Banner</p>
        <input id="upload-image" type="file" class="hidden" name="image">
      </label>
    </form>
  </div>
</section>

<script>
  const imageInput = document.getElementById('upload-image');
  imageInput.addEventListener('change', function() {
    const form = document.getElementById('image-upload-form');
    form.submit();
  });

  function confirmDelete() {
    return confirm('Apakah Anda yakin ingin menghapus banner ini?');
  }
</script>
      
@endsection