@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center font-poppins">
    <div class="justify-center flex pt-[5rem] xss:mx-[3rem] xs:[3rem]">
        <h1 class="text-3xl text-black border border-gray-300 shadow-md shadow-gray-400 font-semibold bg-white py-3 px-5 rounded-md">Rate Discount</h1>
    </div>
    <section class="lg:ml-[5rem] xss:ml-[1rem] xs:ml-[1rem] mr-[1rem] grid grid-cols-1 lg:grid-cols-2 gap-4 my-[5rem]">
        <div class="shadow-lg rounded-lg h-[41rem] xxl:h-full overflow-auto mx-4 md:mx-10 mb-[1rem]">
            <table class="w-auto table-fixed">
                <h2 class="bg-gray-100 drop-shadow-md text-pretty py-2 text-base font-semibold">kredit</h2>
                <thead>
                    <tr class="bg-gray-100">
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">NO</th>
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">Plafon</th>
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">12 bulan</th>
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">24 bulan</th>
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">36 bulan</th>
                    </tr>
                </thead>
                <tbody class="bg-white">
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">1</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.100.000.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200 ">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">2</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.200.000.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200 ">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">3</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.300.000.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200 ">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">4</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.400.000.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200 ">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">5</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.500.000.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200 ">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">6</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.600.000.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200 ">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">7</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.700.000.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200 ">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">8</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.800.000.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200 ">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">9</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.900.000.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200 ">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">10</td>
                        <td contenteditable="true"td class="py-4 px-6 border border-gray-200">Rp.1.000.000.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200 ">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">11</td>
                        <td contenteditable="true"lass="py-4 px-6 border border-gray-200">Rp.1.500.000.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200 ">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">12</td>
                        <td contenteditable="true"td class="py-4 px-6 border border-gray-200">Rp.2.000.000.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200">Rp.5.234.000</td>
                        <td contenteditable="true" class="py-4 px-6 border border-gray-200 ">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="grid mx-2">
                <a type="text"
                class= "p-4 w-auto  my-1 border-2 rounded-lg dark:text-black text-base dark:border-gray-200 dark:bg-white cursor-pointer hover:bg-gray-100 duration-300 hover:border-blue-400">Accept</a>
            </div>
        </div>
        <div class="shadow-lg rounded-lg h-[41rem] xxl:h-full overflow-auto mx-4 md:mx-10 mb-[1rem]">
            <table class="w-auto table-fixed">
                <h2 class="bg-gray-100 drop-shadow-md text-pretty py-2 text-base font-semibold">Deposit</h2>
                <div class="grid mx-2">
                <input type="text"
                class= "p-4 w-auto  my-1 border-2 rounded-lg dark:text-black text-base dark:border-gray-200 dark:bg-white"
                placeholder="add disc">
            </div>
                <thead>
                    <tr class="bg-gray-100">
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">NO</th>
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">Plafon</th>
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">12 bulan</th>
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">24 bulan</th>
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">36 bulan</th>
                    </tr>
                </thead>
                <tbody class="bg-white">
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">1</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.100.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">2</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.200.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">3</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.300.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">4</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.400.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">5</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.500.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">6</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.600.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">7</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.700.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">8</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.800.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">9</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.900.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">10</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.1.000.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">11</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.1.500.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">12</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.2.000.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </section>
    </section>
@endsection