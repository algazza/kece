@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 h-screen font-poppins overflow-auto">
<section class="py-10 my-auto">
    <div class="mt-[5rem] rounded-[5px] py-8 ml-[2rem] mr-[1rem] text-left justify-center sm:px-6 lg:px-8 my-28 flex gap-4">
        <div
            class="lg:w-[60%] md:w-[52%] sm:w-[60%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center bg-white">
            <div>
                <a href="{{ route ('admin') }}" class="hidden md:block xl:block">
                    <i class='bx bx-arrow-back text-4xl rounded-lg font-semibold bg-white border border-gray-300  text-red-600 px-2 hover:bg-gray-300 shadow-sm duration-300 mb-2' ></i>
                </a>
                <h1
                    class="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-black">
                    Promo
                </h1>
                <h2 class="text-grey text-sm mb-4 dark:text-black">Create Promo</h2>
                <form enctype="multipart/form-data">
                    @csrf
                    <div
                        class="w-full rounded-sm bg-cover bg-center bg-no-repeat items-center">
                        <div class="mx-auto flex justify-center">
                            <img src="" id="previewImage" class="mr-[-9rem] w-[141px] rounded-md h-[141px] bg-transparent border-black border-[1px] bg-cover bg-center bg-no-repeat" alt>
                            <div class="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
                                <input type="file" name="image" id="upload_profile" hidden >
                                <label for="upload_profile">
                                        <svg data-slot="icon" class="w-6 h-5 text-blue-700" fill="none"
                                            stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                            </path>
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                            </path>
                                        </svg>
                                    </label>
                            </div>
                        </div>

                    </div>
                    <h2 class="text-center mt-1 font-semibold text-black">Upload Some Image
                    </h2>
                    <div class="grid grid-cols-1 justify-center w-full">
                        <div class="w-full  mb-4 mt-6">
                            <label for="" class="mb-2 text-black">Deskripsi singkat</label>
                            <input type="text"
                                    class="mt-2 p-4 w-full border-2 rounded-lg dark:text-black font-semibold text-base text-center dark:border-gray-200 dark:bg-white"
                                    placeholder="..." name="name">
                        </div>
                    </div>

                    <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col xss:flex-col gap-2 justify-center w-full">
                        <div class="w-full">
                            <h3 class="text-black mb-2">Deskripsi</h3>
                            <textarea type="password" class="text-grey p-4 w-full border-2 rounded-lg dark:text-black dark:border-gray-200 dark:bg-white" name="password"></textarea>
                        </div>
                    </div>
                    <div class="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold cursor-pointer hover:bg-blue-600 hover:text-white duration-300">
                        <button type="submit" class="w-full p-4">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
</section>
<script>
    document.getElementById('upload_profile').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const previewImage = document.getElementById('previewImage');
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
        }
        
        reader.readAsDataURL(file);
    } else {
        previewImage.src = '';
        previewImage.style.display = 'none'; 
    }
});


document.getElementById('previewImage').addEventListener('click', function() {
    document.getElementById('upload_profile').click();
}); 
</script>
@endsection