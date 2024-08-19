@extends('layout')
@section('content')
<section class="py-10 my-auto dark:bg-gray-900">
    <div class="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
        <div
            class="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
            <!--  -->
            <div class="">
                <h1
                    class="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                    Profile
                </h1>
                <h2 class="text-grey text-sm mb-4 dark:text-gray-400">Create Profile</h2>
                <form enctype="multipart/form-data" method="post" action="{{ route('admin.post') }}">

                    @csrf
                    <!-- Cover Image -->
                    <div
                        class="w-full rounded-sm bg-cover bg-center bg-no-repeat items-center">
                        <div class="mx-auto flex justify-center">
                            <img src="" id="previewImage" class="mr-[-9rem] rounded-full w-[141px] h-[141px] bg-blue-300/20 bg-cover bg-center bg-no-repeat" alt>
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
                    <h2 class="text-center mt-1 font-semibold dark:text-gray-300">Upload Profile and Cover Image
                    </h2>
                    <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                        <div class="w-full  mb-4 mt-6">
                            <label for="" class="mb-2 dark:text-gray-300">Name</label>
                            <input type="text"
                                    class="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="First Name" name="name">
                        </div>
                        <div class="w-full  mb-4 lg:mt-6">
                            <label for="" class=" dark:text-gray-300">Email</label>
                            <input type="email"
                                    class="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Email" name="email">
                        </div>
                    </div>

                    <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                        <div class="w-full">
                            <h3 class="dark:text-gray-300 mb-2">Role</h3>
                            <select
                                    class="w-full text-grey border-2 rounded-lg p-4 pl-2 pr-2 dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800" name="role">
                                    <option disabled value="">Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="kredit">Kredit</option>
                                    <option value="deposit">Deposit</option>
                                </select>
                        </div>
                        <div class="w-full">
                            <h3 class="dark:text-gray-300 mb-2">Password</h3>
                            <input type="password" class="text-grey p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800" name="password">
                        </div>
                        <div class="w-full">
                            <h3 class="dark:text-gray-300 mb-2">No Handphone</h3>
                            <input type="text" class="text-grey p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800" name="no_handphone">
                        </div>
                    </div>
                    <div class="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                        <button type="submit" class="w-full p-4">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
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