@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 font-poppins overflow-x-hidden">

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 pt-[5rem] ml-[3rem] mr-[1rem]">
        <div>
            <button id="openContactForm" class="absolute flex items-center justify-center text-2xl text-red-600 font-semibold py-2 px-4 rounded-lg">
              <i class='bx bx-trash bg-white py-2 px-3 rounded-lg hover:bg-gray-200 hover:scale-95 duration-300 shadow-md '></i>
          </button>
          <img src="https://cdn0-production-images-kly.akamaized.net/050q8aEL_dUc38Ayt5k-4857gys=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4582121/original/030715200_1695192188-skibidi_toilet__dafuq_boom_.jpg" 
          class="max-w-sm h-full rounded-md " alt="">
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
 
  <div class="flex justify-center items-center h-screen">
    <!-- Trigger Button -->
    

    <!-- Modal -->
    <div id="contactFormModal" class="fixed z-10 inset-0 overflow-y-auto hidden backdrop-blur-md duration-200">
        <div class="flex items-center justify-center min-h-screen">
            <div class="bg-white w-auto p-6 rounded shadow-md">
                <div class="flex justify-end">
                    <!-- Close Button -->
                    <button id="closeContactForm" class="text-gray-700 hover:text-red-500">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <h2 class="text-2xl font-bold mb-4">Are u sure wanna delete this?</h2>

            <form action="https://fabform.io/f/{form-id}" method="post">
                    <button type="submit"
                            class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 duration-300">
                        nah
                    </button>
                    <button type="submit"
                            class="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 duration-300">
                        Yea sure
                    </button>
                </form>
            </div>
        </div>
    </div>
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