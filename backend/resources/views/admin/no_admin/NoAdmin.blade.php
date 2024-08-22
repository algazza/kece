@extends('layout')
@section('content')
<div class="bg-gray-200">
    <div class="h-full min-h-screen w-full md:p-[10rem] pl-[5rem] pr-[1rem]">
        <div class="grid gap-14 md:grid-cols-3 md:gap-5">
            <div data-aos-delay="150" class="rounded-xl bg-white p-6 text-center shadow-xl mb-[1.5rem]">
                <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-gray-50 shadow-inner shadow-gray-500 box-border border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);" class="h-8 w-8 text-white leading-3">
                        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16v2H4V6zm0 12v-6h16.001l.001 6H4z"></path>
                        <path d="M6 14h6v2H6z"></path>
                    </svg>
                </div>

                <h1 class="text-darken mb-3 mt-[-2.5rem] text-xl lg:h-14 lg:px-14 font-bold">Kredit</h1>
                
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
                        <input type="text" name="no_kredit" class="rounded-e-lg block p-2.5 w-full z-20 text-sm text-gray-900 shadow-inner shadow-gray-400" value="{{ $noAdmin->no_kredit }}" readonly />
                    </div>
                </div>
            </div>
            
            <div data-aos-delay="150" class="rounded-xl bg-white p-6 text-center shadow-xl mb-[1.5rem]">
                <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-gray-50 shadow-inner shadow-gray-500 box-border border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);" class="h-8 w-8 text-white leading-3">
                        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16v2H4V6zm0 12v-6h16.001l.001 6H4z"></path>
                        <path d="M6 14h6v2H6z"></path>
                    </svg>
                </div>

                <h1 class="text-darken mb-3 mt-[-2.5rem] text-xl lg:h-14 lg:px-14 font-bold">Deposito</h1>
                
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
                        <input type="text" name="no_kredit" class="rounded-e-lg block p-2.5 w-full z-20 text-sm text-gray-900 shadow-inner shadow-gray-400"  value="{{ $noAdmin->no_deposit }}" readonly/>
                    </div>
                </div>
            </div>

            <div data-aos-delay="150" class="rounded-xl bg-white p-6 text-center shadow-xl mb-[1.5rem]">
                <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-gray-50 shadow-inner shadow-gray-500 box-border border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);" class="h-8 w-8 text-white leading-3">
                        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16v2H4V6zm0 12v-6h16.001l.001 6H4z"></path>
                        <path d="M6 14h6v2H6z"></path>
                    </svg>
                </div>

                <h1 class="text-darken mb-3 mt-[-2.5rem] text-xl lg:h-14 lg:px-14 font-bold">Tabungan</h1>
                
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
                        <input type="text" name="no_kredit" class="rounded-e-lg block p-2.5 w-full z-20 text-sm text-gray-900 shadow-inner shadow-gray-400"  value="{{ $noAdmin->no_tabungan }}" readonly/>
                    </div>
                </div>
            </div>

            <div data-aos-delay="150" class="rounded-xl bg-white p-6 text-center shadow-xl mb-[1.5rem]">
                <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-gray-50 shadow-inner shadow-gray-500 box-border border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);" class="h-8 w-8 text-white leading-3">
                        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16v2H4V6zm0 12v-6h16.001l.001 6H4z"></path>
                        <path d="M6 14h6v2H6z"></path>
                    </svg>
                </div>

                <h1 class="text-darken mb-3 mt-[-2.5rem] text-xl lg:h-14 lg:px-10 font-bold">Armor Property</h1>
                
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
                        <input type="text" name="no_kredit" class="rounded-e-lg block p-2.5 w-full z-20 text-sm text-gray-900 shadow-inner shadow-gray-400"  value="{{ $noAdmin->no_armor_property }}" readonly/>
                    </div>
                </div>
            </div>

        </div>
        
        <a href="{{ route('noAdmin.edit', $noAdmin->first()->id) }}">
            <div class="flex justify-end fixed bottom-10 right-10 bg-gray-200 rounded-full">
              <button class="flex items-center justify-center w-12 h-12 cursor-pointer hover:bg-slate-200 hover:scale-105 duration-300 border-2 border-black text-black rounded-full shadow-md">
                <i class='bx bx-edit-alt text-[1.5rem]' ></i>
              </button>
            </div>
          </a> 
    </div>
  
@endsection