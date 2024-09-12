@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center font-poppins">
    <div class="text-center flex pt-[5rem] xss:mx-[3rem] xs:[3rem]">
        <h1 class="text-3xl text-black border border-gray-300 shadow-md shadow-gray-400 font-semibold bg-white mx-auto max-w-xs py-3 px-5 rounded-md">Promo</h1>
    </div>
    <section class="lg:ml-[5rem] xss:ml-[2rem] xs:ml-[2rem] mr-[1rem] grid grid-cols-1 md2:grid-cols-2 gap-4 lg:grid-cols-4 my-[5rem]">
      @foreach ($promosi as $item)          
        <div class="relative rounded-md overflow-hidden cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300 mb-[1rem]">
          <img src="{{ asset('image/public/promo/' . $item->image) }}" alt="Hanging Planters" class="w-full h-full object-cover">
          <p
            class="cursor-pointer absolute inset-0 px-5 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-20 transition ">
            {{ $item->deskripsi }}   
          </p>
        </div>
      @endforeach
    </section>
    <div class="flex justify-end fixed bottom-10 right-10 bg-gray-50 rounded-full box-border">
        <button class="flex items-center justify-center w-16 h-16 text-gray-600  hover:text-black cursor-pointer hover:bg-slate-200 hover:scale-105 duration-300 border-[1px] border-gray-500 shadow-gray-400 shadow-sm rounded-full" onclick="openModal('modelConfirm')">
            <i class='bx bx-plus text-[1.5rem]'></i>
        </button>
    </div>
        <div id="modelConfirm" class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ">
            <div class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
              <form action="{{ route('promosi.post') }}" method="post" enctype="multipart/form-data">
                @csrf
                <div class="flex flex-col items-center justify-center text-center cursor-pointer gap-1 p-[1rem]">
                    <div class="flex justify-center items-center">
                        <div class="overflow-hidden box-border flex justify-center items-center border-gray-400 border-[3px] rounded-md h-[10rem] w-[10rem]">
                            <img id="previewImage" src="" alt="" class="w-full h-full object-cover z-10" style="cursor: pointer; display: none;" onclick="document.getElementById('upload_profile').click()">
                            <div class="bg-white/90 rounded-full w-6 h-6 text-center absolute">
                                <input type="file" name="image" id="upload_profile" hidden>
                                <label for="upload_profile">
                                    <svg data-slot="icon" class="w-6 h-5 text-black" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"></path>
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </div>
                    <p class="text-black pt-1 text-sm ">Max File 2MB</p>
                    <div class="mt-4 px-[2rem] w-full">
                        <input type="text" name="deskripsi" class="rounded-[5px] block p-2.5 w-full z-20 text-sm text-gray-900 text-center shadow-gray-400" placeholder="Deskripsi singkat"/>
                    </div>
                    <div class="mt-4 mb-2">
                        <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-red-600 px-10 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-red-700 hover:scale-95 duration-300"
                                onclick="closeModal('modelConfirm')">Close</button>
                        <button type="submit" class="inline-flex items-center rounded-md border-[1px] bg-white border-red-600 px-10 py-2 text-sm leading-4 text-red-600 shadow-red-500 hover:shadow-blue-500 font-semibold hover:border-white hover:text-white shadow-sm hover:bg-blue-500 hover:scale-95 duration-300">Upload</button>
                    </div>
                </div>
            </form>
            
            </div>
        </div>
    </section>
     
    <script type="text/javascript">
      window.openModal = function(modalId) {
          document.getElementById(modalId).style.display = 'block';
      }
  
      window.closeModal = function(modalId) {
          document.getElementById(modalId).style.display = 'none';
      }
  
      document.onkeydown = function(event) {
          event = event || window.event;
          if (event.keyCode === 27) {
              let modals = document.getElementsByClassName('modal');
              Array.prototype.slice.call(modals).forEach(i => {
                  i.style.display = 'none';
              });
          }
      };
  
      // Function to preview selected image
      document.getElementById('upload_profile').addEventListener('change', function(event) {
          const file = event.target.files[0];
          if (file) {
              const reader = new FileReader();
              reader.onload = function(e) {
                  const previewImage = document.getElementById('previewImage');
                  previewImage.src = e.target.result;
                  previewImage.style.display = 'block'; // Show image when selected
              }
              reader.readAsDataURL(file);
          }
      });
  
      // Allow clicking the image to re-open the file input dialog
      document.getElementById('previewImage').addEventListener('click', function() {
          document.getElementById('upload_profile').click();
      });
  </script>
  
     
@endsection