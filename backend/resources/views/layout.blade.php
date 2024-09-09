<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Arto Moro</title>
    <link rel="stylesheet" href="{{ asset('public/css/style.css') }}">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    @vite('resources/css/app.css')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
</head>
<body class="bg-gray-200 h-screen">
    <section class="fixed z-40 shadow flex flex-row font-poppins">
          <div class="bg-gray-50 w-screen z-50 h-[3.7rem] box-border border-black shadow-sm flex">
              <div class="pl-[0.5rem] box-border border-r border-gray-500-[sm2:hidden] w-[18rem] h-full flex ">
                <div class="p-2.5 mt-1 mb-1 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-200" onclick="Openbar()">
                  <i class='bx bxl-xing text-black'></i>
                </div>
                <div class="mt-[0.8rem]  flex gap-3 pl-[2.4rem]">
                  <img src="{{ asset('images/Arto-Moro.png') }}" alt="" class="h-[2rem]">
                  <div class="text-[1rem] gap-1 sm:flex mt-[0.2rem] hidden ">
                    <p class="font-semibold">Admin</p>
                    <p>Dashboard</p>
                  </div>
                </div>
              </div>

              <div class="mt-[0.6rem] ml-[1rem] hidden sm:block">
                <label class="input flex items-center gap-2 rounded-[10px] bg-gray-100 box-border border-[0.5px] border-black h-[2.5rem]">
                  <form action="{{ route('dashboard.search') }}" method="post">
                    @csrf
                      <input type="text" class="rounded-[10px] h-[2rem] ml-[-0.8rem]" placeholder="Search" id="searchInput" name="query"/>
                      <button type="submit">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        class="h-5 w-5 opacity-70">
                        <path
                          fill-rule="evenodd"
                          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                          clip-rule="evenodd" />
                      </svg>
                      </button>
                  </form>
                </label>
            </div>
            

              <div class="flex right-6 absolute gap-8 pr-8">
                <div class="sm:flex gap-2 hidden">
                  <div class="bg-gray-100 w-[2.7rem] h-[2.7rem] justify-center text-center items-center relative  mt-[0.5rem] leading-[2.5rem] rounded-[5px] box-border border-[0.5px] border-black">
                    <img src="{{ asset('image/admin/' . (Auth::user()->image ?? 'profil.jpg'))  }}" class="h-full rounded-[4px]" id="userImage">
                  </div>
                  <a href="{{ route('admin.show', Auth::user()->id) }}">
                    <div class="mt-[0.6rem]">
                      <p class="font-semibold">{{ Auth::user()->name }}</p>
                      <p class="text-[0.8rem] mt-[-0.3rem]">{{ Auth::user()->role }}</p>
                    </div>   
                  </a>
                </div>
              </div>
          </div>


          <div class="sidebar fixed top-0 bottom-0 duration-1000 flex flex-col justify-between py-10
                       p-2 w-0 md:w-16 overflow-y-auto bg-gray-50 shadow-2xl h-screen overflow-hidden font-semibold pt-[5rem] z-10">
            <div class="text-gray-100 text-xl">
              <div>
                <a href="{{ route('dashboard')}}">
                    <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200">
                      <i class='bx bxs-dashboard text-black text-xl' ></i>
                    <span class="text-[18px] ml-6 text-black ">Dashboard</span>
                  </div>
                </a>  

                @if (Auth::user()->role == 'admin')
                  <a href="{{ route('laporan.index') }}">
                      <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200">
                        <i class='bx bxs-bell-ring text-black' ></i>
                      <span class="text-[18px] ml-6 text-black ">Laporan</span>
                    </div>
                  </a>  
                @endif
        
                <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-gray-200" onclick="dropDown()">
                  <i class='bx bxs-package text-black text-xl' ></i>
                  <div class="flex justify-between w-full items-center">
                    <span class="text-[18px] ml-6 text-black">Storage</span>
                    <span class="text-sm rotate-180" id="arrow">
                      <i class="bi bi-chevron-down text-black"></i>
                    </span>
                  </div>
                </div>

                <div class="leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto pl-[3rem]" id="submenu">
                  @if (Auth::user()->role == 'kredit' || Auth::user()->role == 'admin')
                      <a href="{{ route('kredit.index') }}">
                          <h1 class="cursor-pointer p-2 hover:bg-gray-300 rounded-md mt-1 text-black font-semibold">Kredit</h1>
                      </a>
                  @endif
                  @if (Auth::user()->role == 'deposito' || Auth::user()->role == 'admin')
                      <a href="{{ route('deposito.index') }}">
                          <h1 class="cursor-pointer p-2 hover:bg-gray-300 rounded-md mt-1 text-black font-semibold">Deposito</h1>
                      </a>
                  @endif
                  @if (Auth::user()->role == 'pickup' || Auth::user()->role == 'admin')
                      <a href="{{ route('pickup.index') }}">
                          <h1 class="cursor-pointer p-2 hover:bg-gray-300 rounded-md mt-1 text-black font-semibold">PickUp</h1>
                      </a>
                  @endif
                  @if (Auth::user()->role == 'tabungan' || Auth::user()->role == 'admin')
                      <a href="{{ route('tabungan.index') }}">
                          <h1 class="cursor-pointer p-2 hover:bg-gray-300 rounded-md mt-1 text-black font-semibold">Tabungan</h1>
                      </a>
                  @endif
                  @if (Auth::user()->role == 'promosi' || Auth::user()->role == 'admin')
                      <a href="{{ route('news') }}">
                          <h1 class="cursor-pointer p-2 hover:bg-gray-300 rounded-md mt-1 text-black font-semibold">News</h1>
                      </a>
                  @endif
                  @if (Auth::user()->role == 'admin')
                      <a href="{{ route('admin') }}">
                          <h1 class="cursor-pointer p-2 hover:bg-gray-300 rounded-md mt-1 text-black font-semibold">Admin</h1>
                      </a>
                  @endif
                  @if (Auth::user()->role == 'admin')
                      <a href="{{ route('noAdmin') }}">
                          <h1 class="cursor-pointer p-2 hover:bg-gray-300 rounded-md mt-1 text-black font-semibold">Nomor</h1>
                      </a>
                  @endif
                  @if (Auth::user()->role == 'promosi' || Auth::user()->role == 'admin')
                      <a href="{{ route('sponsor.index') }}">
                          <h1 class="cursor-pointer p-2 hover:bg-gray-300 rounded-md mt-1 text-black font-semibold">Sponsor</h1>
                      </a>
                  @endif
                  @if (Auth::user()->role == 'promosi' || Auth::user()->role == 'admin')
                  <a href="{{ route('penghargaan.index') }}">
                      <h1 class="cursor-pointer p-2 hover:bg-gray-300 rounded-md mt-1 text-black font-semibold">Penghargaan</h1>
                  </a>
              @endif
                  @if (Auth::user()->role == 'promosi' || Auth::user()->role == 'admin')
                  <a href="{{ route('banner') }}">
                      <h1 class="cursor-pointer p-2 hover:bg-gray-300 rounded-md mt-1 text-black font-semibold">Banner</h1>
                  </a>
              @endif
              </div>

              <a href="/logout">
                <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-black hover:text-white hover:bg-red-500 bottom-0 w-screen mr-[1rem]">
                  <i class='bx bx-log-out' ></i>
                    <div>
                      <a href="/logout" class="text-[15px] ml-6">
                        Logout
                      </a>
                    </div>
                  </div>          
                </div>
              </a>
              </a>
              </div>
              <div class="sm:hidden flex gap-2 text-black ml-[1rem]">
                <div class="relative mt-1">
                    <div class="bg-gray-100 w-[2.5rem] h-[2.5rem] flex  items-center rounded-[5px] box-border border-[0.5px] border-black shadow-inner">
                        <img src="{{ asset('image/admin/' . (Auth::user()->image ?? 'profil.jpg')) }}" class="w-full h-full object-cover rounded-[4px]" id="userImage">
                    </div>
                </div>
                <a href="{{ route('admin.show', Auth::user()->id) }}" class="ml-2 flex-1 overflow-hidden">
                    <div class="mt-[0.4rem]">
                        <p class="font-semibold truncate">{{ Auth::user()->name }}</p>
                        <p class="text-[0.8rem] mt-[-0.2rem] truncate">{{ Auth::user()->role }}</p>
                    </div>  
                </a>                 
              </div>
            </div>

          @if(session('success'))
            <div class="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
                <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-[20rem] sm:w-full"
                        role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div>
                            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div class="mt-3 text-center sm:mt-5">
                                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                    Success
                                </h3>
                                <div class="mt-2">
                                    <p class="text-sm text-gray-500">
                                        {{ session('success') }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 sm:mt-6">
                          <button
                              class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm"
                              onclick="closeModalSucces()">
                              OK
                          </button>
                      </div>
                    </div>
                </div>
            </div>
            @elseif(session('error'))
            <div class="fixed z-10 inset-0 overflow-y-auto" id="my-modal-error">
              <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>
                  <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                  <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-[20rem] sm:w-full"
                      role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                      <div>
                          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                              <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                  stroke="currentColor" aria-hidden="true">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M6 18L18 6M6 6l12 12" />
                              </svg>
                          </div>
                          <div class="mt-3 text-center sm:mt-5">
                              <div class="mt-2">
                                  <p class="text-sm text-gray-500">
                                    {{ session('error') }}
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="mt-5 sm:mt-6">
                          <button
                              class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                              onclick="closeModalError()">
                              OK
                          </button>
                      </div>
                  </div>
              </div>
            </div>
          @endif
          
        <script>
                  function dropDown() {
                    document.querySelector('#submenu').classList.toggle('hidden')
                    document.querySelector('#arrow').classList.toggle('rotate-0')
                  }
                  dropDown()
              
                  function Openbar() {
                      const sidebar = document.querySelector('.sidebar');
                      if (window.innerWidth >= 768) {
                          if (sidebar.classList.contains('md:w-16')) {
                              sidebar.classList.remove('md:w-16');
                              sidebar.classList.add('md:w-72');
                          } else if (sidebar.classList.contains('md:w-72')) {
                              sidebar.classList.remove('md:w-72');
                              sidebar.classList.add('md:w-16');
                          }
                      } else {
                          if (sidebar.classList.contains('w-0')) {
                              sidebar.classList.remove('w-0');
                              sidebar.classList.add('w-60');
                          } else if (sidebar.classList.contains('w-60')) {
                              sidebar.classList.remove('w-60');
                              sidebar.classList.add('w-0');
                          }
                      }
                  }



                  document.addEventListener('DOMContentLoaded', function() {

              var userImage = document.getElementById('userImage');
              
                  // Mengecek apakah elemen gambar ada
                  if (userImage) {
                      // Mencetak URL gambar ke konsol
                      console.log('Image URL:', userImage.src);
                  }
              });

          function closeModalSucces() {
              document.getElementById('my-modal').classList.add('hidden');
            }

            function closeModalError() {
              document.getElementById('my-modal-error').classList.add('hidden');
            }

            setTimeout(closeModalSucces, 3000);


        </script>
    </section>
    @yield('content')
</body>
</html>