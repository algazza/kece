<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{ asset('public/css/style.css') }}">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    @vite('resources/css/app.css')
    <script src="https://cdn.tailwindcss.com"></script>

</head>
<body>
    <div class="bg-gray-200">
        <div class="h-full min-h-screen w-ful md:p-[10rem] p-[2rem]">
            <form action="{{ route('noAdmin.update', $noAdmin->id) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="grid gap-14 md2:pt-[8rem] xss:pt-[8rem] md:grid-cols-2 md:gap-5">
                    <div data-aos-delay="150" class="rounded-xl bg-white p-6 text-center shadow-xl mb-[1.5rem] ">
                        <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-gray-50 shadow-inner shadow-gray-500 box-border border-black">
                            <i class='bx bx-shield text-4xl text-black'></i>
                        </div>
        
                        <h1 class="text-darken mb-3 mt-[-2.5rem] text-xl lg:h-14 lg:px-10 font-bold">No Induk</h1>
                        
                        <div class="flex items-center mt-[-0.1rem]">
                            <div id="dropdown-phone-button" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-2 text-sm font-medium text-center box-border rounded-s-lg border-black border-[1px] bg-gray-100 shadow-inner shadow-gray-300" type="button">
                                <svg fill="none" aria-hidden="true" class="h-4 w-6 me-2" viewBox="0 0 20 15">
                                    <rect width="21" height="7.5" y="0" fill="#FF0000"/>
                                    <rect width="21" height="7.5" y="7.5" fill="#FFFFFF"/>
                                </svg>                              
                                +62
                            </div>
                            <label for="phone-input" class="text-sm font-medium sr-only text-gray-900 dark:text-white">Phone number:</label>
                            <div class="relative w-full">
                                <input type="text" name="no_induk" class="rounded-e-lg block p-2.5 w-full z-20 text-sm text-gray-900 shadow-sm shadow-gray-200"  value="{{ $noAdmin->no_induk }}"/>
                            </div>
                        </div>
                    </div>
        
                    <div data-aos-delay="150" class="rounded-xl bg-white p-6 text-center shadow-xl mb-[1.5rem] ">
                        <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-gray-50 shadow-inner shadow-gray-500 box-border border-black">
                            <i class='bx bx-home text-4xl text-black'></i>
                        </div>
        
                        <h1 class="text-darken mb-3 mt-[-2.5rem] text-xl lg:h-14 lg:px-10 font-bold">No Armor</h1>
                        
                        <div class="flex items-center mt-[-0.1rem]">
                            <div id="dropdown-phone-button" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-2 text-sm font-medium text-center box-border rounded-s-lg border-black border-[1px] bg-gray-100 shadow-inner shadow-gray-300" type="button">
                                <svg fill="none" aria-hidden="true" class="h-4 w-6 me-2" viewBox="0 0 20 15">
                                    <rect width="21" height="7.5" y="0" fill="#FF0000"/>
                                    <rect width="21" height="7.5" y="7.5" fill="#FFFFFF"/>
                                </svg>                              
                                +62
                            </div>
                            <label for="phone-input" class="text-sm font-medium sr-only text-gray-900 dark:text-white">Phone number:</label>
                            <div class="relative w-full">
                                <input type="text" name="no_armor" class="rounded-e-lg block p-2.5 w-full z-20 text-sm text-gray-900 shadow-sm shadow-gray-200"  value="{{ $noAdmin->no_armor }}"/>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end fixed bottom-10 right-10 bg-gray-200 rounded-full">
                        <button type="submit" class="flex items-center justify-center w-12 h-12 cursor-pointer hover:bg-slate-200 hover:scale-105 duration-300 border-2 border-black text-black rounded-full shadow-md">
                          <i class='bx bx-check text-[2rem]'></i>
                        </button>
                    </div> 
            </form>
        </div>
    </div>
</body>
</html>