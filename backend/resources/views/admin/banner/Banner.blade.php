@php use Carbon\Carbon; @endphp

@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 h-screen font-poppins overflow-x-hidden">
  <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:ml-[5rem] md:ml-[5rem] sm:ml-[5rem] xss:ml-[2rem] mr-[1rem] mt-20 mb-10">
    @foreach ($banner as $item)
    <article class=" relative flex flex-col justify-end overflow-hidden rounded-2xl w-full mx-auto mt-1 cursor-pointer group hover:bg-gray-200 duration-300" style="padding-top: 37.5%;">
      <img src="{{ asset('image/public/banner/' . $item->image) }}" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover">
      <div class="z-10 gap-y-1 bg-white border shadow-md rounded-md text-gray-500 overflow-hidden leading-6 absolute bottom-4 right-4 font-poppins text-sm px-3 hidden xs:block ">{{ \Carbon\Carbon::parse($item->created_at)->format('d/m/Y') }}</div>
      <div class="absolute z-20">
        <form action="{{ route('banner.delete', $item->id) }}" method="POST" onsubmit="return confirmDelete()">
          @csrf
          @method('DELETE')
              <button type="submit" class="flex items-center justify-center lg:text-2xl md:text-2xl sm:text-xl xss:text-base text-red-600 font-semibold py-2 px-4 rounded-lg">
                <i class='bx bx-trash bg-white py-2 lg:px-3 md:px-3 sm:px-3 xss:px-5 rounded-lg hover:bg-gray-200 hover:scale-95 duration-300 shadow-md'></i>
              </button>
            </form>
          </div>
          
          <div class="absolute z-10">
            <form id="image-update-form" action="{{ route('banner.update', $item->id) }}" method="POST" enctype="multipart/form-data">
              @csrf
              @method('PUT')
              <label for="update-image" class="flex items-center justify-center lg:text-2xl md:text-2xl sm:text-xl xss:text-base text-blue-600 font-semibold py-2 px-20 rounded-lg">
                <i class='bx bx-pencil bg-white py-2 lg:px-3 md:px-3 sm:px-3 xss:px-5 rounded-lg hover:bg-gray-200 hover:scale-95 duration-300 shadow-md'></i>
                <input id="update-image" type="file" class="hidden" name="image">
              </label>
            </form>
          </div>
        </article>
        
        @endforeach
      </div>
      
    </section>
    <div class="flex justify-end fixed bottom-10 right-10 z-10">
      <form id="image-upload-form" action="{{ route('banner.add') }}" method="POST" enctype="multipart/form-data">
        @csrf  
        <label for="upload-image" class="flex items-center justify-center w-19 h-12 cursor-pointer bg-white hover:bg-slate-200 hover:scale-105 duration-300 border-2 border-gray-400 text-black rounded-full shadow-md">
         <p class="px-3">+ Add Banner</p>
          <input id="upload-image" type="file" class="hidden" name="image">
        </label>
      </form>
    </div>

<script>
const uploadImageInput = document.getElementById('upload-image');
uploadImageInput.addEventListener('change', function() {
  const form = document.getElementById('image-upload-form');
  form.submit();
});

const updateImageInput = document.getElementById('update-image');
updateImageInput.addEventListener('change', function() {
  const form = document.getElementById('image-update-form');
  form.submit();
});


  function confirmDelete() {
    return confirm('Apakah Anda yakin ingin menghapus banner ini?');
  }
</script>
      
@endsection