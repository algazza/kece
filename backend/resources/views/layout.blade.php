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
</head>
<body >
    <section class="fixed z-40 shadow flex flex-row font-poppins">
          <div class="bg-gray-50 w-screen z-50 h-[3.7rem] box-border border-black shadow-sm flex">
              <div class="pl-[0.5rem] box-border border-[0.5px] border-black w-[18rem] h-full flex">
                <div class="p-2.5 mt-1 mb-1 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-200" onclick="Openbar()">
                  <i class='bx bxl-xing text-black'></i>
                </div>
                <div class="mt-[0.8rem]  flex gap-3 pl-[2.4rem]">
                  <img src="{{ asset('images/Arto-Moro.png') }}" alt="" class="h-[2rem]">
                  <div class="text-[1rem] gap-1 flex mt-[0.2rem]">
                    <p class="font-semibold">Admin</p>
                    <p>Dashboard</p>
                  </div>
                </div>
              </div>

              <div class="mt-[0.6rem] ml-[1rem]">
                <label class="input flex items-center gap-2 rounded-[10px] bg-gray-100 box-border border-[0.5px] border-black h-[2.5rem]">
                  <input type="text" class=" rounded-[10px] h-[2rem] ml-[-0.8rem]" placeholder="Search" />
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
                </label>
              </div>

              <div class="flex right-6 absolute gap-8">
                <div class="flex gap-1 mt-[0.7rem]">
                  <div class="bg-gray-300 w-[2.3rem] h-[2.3rem] justify-center text-center items-center relative leading-[2.3rem] rounded-[5px] box-border border-[0.5px] border-black cursor-pointer">
                    <i class='bx bxs-bell text-[1.5rem] mt-[0.3rem]'></i>
                  </div>
                  <div class="bg-gray-300 w-[2.3rem] h-[2.3rem] justify-center text-center items-center relative leading-[2.2rem] rounded-[5px] box-border border-[0.5px] border-black cursor-pointer">
                    <p class="font-semibold">EN</p>
                  </div>
                </div> 
                <div class="flex gap-2">
                  <div class="bg-gray-100 w-[2.7rem] h-[2.7rem] justify-center text-center items-center relative mt-[0.5rem] leading-[2.5rem] rounded-[5px] box-border border-[0.5px] border-black">
                    <img src="{{ asset('images/coba.jpg') }}" alt="" class="h-full">
                  </div>
                  <div class="mt-[0.6rem]">
                    <p class="font-semibold">Wahitukam</p>
                    <p class="text-[0.8rem] mt-[-0.3rem]">Wujud aseli</p>
                  </div>
                </div>
              </div>
          </div>


          <div class="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000
            p-2 w-16 overflow-y-auto text-center bg-gray-50 shadow-2xl h-screen overflow-hidden font-semibold pt-[5rem] z-10">
            <div class="text-gray-100 text-xl">
              <div>
                <a href="{{ route('dashboard')}}">
                    <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200">
                      <i class='bx bxl-xing text-black'></i>
                    <span class="text-[18px] ml-6 text-black ">Dashboard</span>
                  </div>
                </a>
        
                <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-gray-200" onclick="dropDown()">
                    <i class='bx bxl-xing text-black' ></i>
                  <div class="flex justify-between w-full items-center">
                    <span class="text-[18px] ml-6 text-black">Storage</span>
                    <span class="text-sm rotate-180" id="arrow">
                      <i class="bi bi-chevron-down text-black"></i>
                    </span>
                  </div>
                </div>
                <div class=" leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto pl-[3rem]" id="submenu">
                  <a href="{{ route('kredit.index') }}">
                    <h1 class="cursor-pointer p-2 hover:bg-gray-300 rounded-md mt-1 text-black font-semibold">Kredit</h1>
                  </a>
                  <h1 class="cursor-pointer p-2 hover:bg-gray-300 rounded-md mt-1 text-black font-semibold">Personal</h1>
                  <h1 class="cursor-pointer p-2 hover:bg-gray-300 rounded-md mt-1 text-black font-semibold">Friends</h1>
                </div>
                <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600 bottom-0 w-screen mr-[1rem]">
                    <i class='bx bxl-xing' ></i>
                  <span class="text-[15px] ml-6 text-gray-200">Logout</span>
                </div>
              </div>
            </div>
          </div>
          <script>
            function dropDown() {
              document.querySelector('#submenu').classList.toggle('hidden')
              document.querySelector('#arrow').classList.toggle('rotate-0')
            }
            dropDown()
        
            function Openbar() {
              const sidebar = document.querySelector('.sidebar');
              if (sidebar.classList.contains('w-16')) {
                sidebar.classList.remove('w-16');
                sidebar.classList.add('w-72');
              } else if (sidebar.classList.contains('w-72')) {
                sidebar.classList.remove('w-72');
                sidebar.classList.add('w-16');
              } else {
                sidebar.classList.add('w-16');
              }
            }

          </script>
    </section>
    @yield('content')
</body>
</html>