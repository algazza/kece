@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 font-poppins overflow-x-hidden">

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 pt-[5rem] lg:ml-[4rem] md:ml-[4rem] sm:ml-[4rem] xss:ml-[1rem] xs:ml-[1rem]  mr-[1rem]">
    @foreach ($stackholder as $item)
      <div class="bg-gray-100 px-[1rem] py-2 border border-gray-500 rounded">
        <form action="{{ route('stackholder.delete', $item->id) }}" method="POST" enctype="multipart/form-data">
          @csrf
          @method('DELETE')
          <button id="openContactForm" class="absolute flex text-2xl text-red-600 font-semibold py-2 rounded-lg" type="submit">
            <i class='bx bx-trash bg-white py-2 px-3 rounded-lg hover:bg-gray-200 hover:scale-95 duration-300 shadow-md '></i>
        </button>
        </form>
        <img src="{{ asset('image/public/stackholder/' . $item->image) }}" 
        class="w-full h-full rounded-md " alt="">
      </div>
    @endforeach
  </div>
      
  <div class="flex justify-end fixed bottom-10 right-10">
    <form id="image-upload-form" enctype="multipart/form-data" method="post" action="{{ route('stackholder.post') }}">
      @csrf  
      <label for="upload-image" class="flex items-center justify-center w-19 h-12 cursor-pointer bg-white hover:bg-slate-200 hover:scale-105 duration-300 border-2 border-gray-400 text-black rounded-full shadow-md">
        <p class="px-3"><i class='bx bx-plus' ></i> max 16:9</p>
        <input id="upload-image" type="file" class="hidden" name="image">
      </label>
    </form>
  </div>
 
</section>

<script>

  // JavaScript to toggle the modal
  const openContactFormButton = document.getElementById('openContactForm');
  const closeContactFormButton = document.getElementById('closeContactForm');
  const contactFormModal = document.getElementById('contactFormModal');

  openContactFormButton.addEventListener('click', () => {
      contactFormModal.classList.remove('hidden');
  });

  closeContactFormButton.addEventListener('click', () => {
      contactFormModal.classList.add('hidden');
  });


  </script>
  
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