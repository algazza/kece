@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 h-screen font-poppins overflow-x-hidden">

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 pt-[5rem] ml-[3rem] mr-[1rem]">
        <div>
            <button type="submit" class="absolute flex items-center justify-center text-2xl text-red-600 font-semibold py-2 px-4 rounded-lg">
                <i class='bx bx-trash bg-white py-2 px-3 rounded-lg hover:bg-gray-200 hover:scale-95 duration-300 shadow-md '></i>
              </button>
        <img src="https://cdn0-production-images-kly.akamaized.net/050q8aEL_dUc38Ayt5k-4857gys=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4582121/original/030715200_1695192188-skibidi_toilet__dafuq_boom_.jpg" 
        class="w-full h-full rounded-md " alt="">
        </div>
        <div>
            <button type="submit" class="absolute flex items-center justify-center text-2xl text-red-600 font-semibold py-2 px-4 rounded-lg">
                <i class='bx bx-trash bg-white py-2 px-3 rounded-lg hover:bg-gray-200 hover:scale-95 duration-300 shadow-md '></i>
              </button>
        <img src="https://cdn0-production-images-kly.akamaized.net/050q8aEL_dUc38Ayt5k-4857gys=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4582121/original/030715200_1695192188-skibidi_toilet__dafuq_boom_.jpg" 
        class="w-full h-full rounded-md " alt="">
        </div>
        <div>
            <button type="submit" class="absolute flex items-center justify-center text-2xl text-red-600 font-semibold py-2 px-4 rounded-lg">
                <i class='bx bx-trash bg-white py-2 px-3 rounded-lg hover:bg-gray-200 hover:scale-95 duration-300 shadow-md '></i>
              </button>
        <img src="https://cdn0-production-images-kly.akamaized.net/050q8aEL_dUc38Ayt5k-4857gys=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4582121/original/030715200_1695192188-skibidi_toilet__dafuq_boom_.jpg" 
        class="w-full h-full rounded-md " alt="">
        </div>
        <div>
            <button type="submit" class="absolute flex items-center justify-center text-2xl text-red-600 font-semibold py-2 px-4 rounded-lg">
                <i class='bx bx-trash bg-white py-2 px-3 rounded-lg hover:bg-gray-200 hover:scale-95 duration-300 shadow-md '></i>
              </button>
        <img src="https://cdn0-production-images-kly.akamaized.net/050q8aEL_dUc38Ayt5k-4857gys=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4582121/original/030715200_1695192188-skibidi_toilet__dafuq_boom_.jpg" 
        class="w-full h-full rounded-md " alt="">
        </div>
        <div>
            <button type="submit" class="absolute flex items-center justify-center text-2xl text-red-600 font-semibold py-2 px-4 rounded-lg">
                <i class='bx bx-trash bg-white py-2 px-3 rounded-lg hover:bg-gray-200 hover:scale-95 duration-300 shadow-md '></i>
              </button>
        <img src="https://cdn0-production-images-kly.akamaized.net/050q8aEL_dUc38Ayt5k-4857gys=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4582121/original/030715200_1695192188-skibidi_toilet__dafuq_boom_.jpg" 
        class="w-full h-full rounded-md " alt="">
        </div>

    
        </div>
      
  <div class="flex justify-end fixed bottom-10 right-10">
    <form id="image-upload-form">
      @csrf  
      <label for="upload-image" class="flex items-center justify-center w-19 h-12 cursor-pointer bg-white hover:bg-slate-200 hover:scale-105 duration-300 border-2 border-gray-400 text-black rounded-full shadow-md">
       <p class="px-3">+ Stackholder img</p>
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