@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 font-poppins overflow-x-hidden">

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 pt-[5rem] lg:ml-[4rem] md:ml-[4rem] sm:ml-[4rem] xss:ml-[1rem] xs:ml-[1rem]  mr-[1rem] ">
    @foreach ($stackholder as $item)
    <div class="bg-gray-100 px-[1rem] py-2 border border-gray-500 rounded ">
        <div class="absolute z-20">
            <form action="{{ route('stackholder.delete', $item->id) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('DELETE')
                <button id="openContactForm" class="absolute flex text-2xl text-red-600 font-semibold py-2 rounded-lg lg:text-2xl md:text-2xl sm:text-xl xss:text-base hover:bg-gray-200 hover:scale-95 duration-300 shadow-md" type="submit">
                    <i class='bx bx-trash bg-white py-2 px-3 rounded-lg lg:px-3 md:px-3 sm:px-3 xss:px-5'></i>
                </button>
            </form>
        </div>

        <div class="absolute ml-[-1.5rem] z-10">
            <form id="image-update-form-{{ $item->id }}" action="{{ route('stackholder.update', $item->id) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <label for="update-image-{{ $item->id }}" class="flex text-2xl px-[1rem] items-center justify-center lg:text-2xl md:text-2xl sm:text-xl xss:text-base text-blue-600 font-semibold py-2 ml-[5rem] rounded-lg">
                    <i class='bx bx-pencil bg-white py-2 lg:px-3 md:px-3 sm:px-3 xss:px-5 rounded-lg hover:bg-gray-200 hover:scale-95 duration-300 shadow-md'></i>
                    <input id="update-image-{{ $item->id }}" type="file" class="hidden" name="image">
                </label>
            </form>
        </div>

        <img src="{{ asset('image/public/stackholder/' . $item->image) }}" class="w-full h-full rounded-md" alt="">
    </div>
@endforeach

  </div>
      

  <div class="flex justify-end fixed bottom-10 right-10">
    <form id="image-upload-form" enctype="multipart/form-data" method="post" action="{{ route('stackholder.post') }}">
      @csrf  
      <label for="upload-image" class="flex items-center justify-center w-19 h-12 cursor-pointer bg-white hover:bg-slate-200 hover:scale-105 duration-300 border-2 border-gray-400 text-black rounded-full shadow-md">
        <p class="px-3"><i class='bx bx-plus' ></i> rasio 16:9!</p>
        <input id="upload-image" type="file" class="hidden" name="image">
      </label>
    </form>
  </div>
 
</section>

<script>

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

document.querySelectorAll('[id^="update-image-"]').forEach(input => {
    input.addEventListener('change', function() {
        const id = input.id.split('-').pop(); 
        const form = document.getElementById(`image-update-form-${id}`);
        form.submit();
    });
});


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