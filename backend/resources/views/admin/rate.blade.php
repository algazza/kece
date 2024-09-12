@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center font-poppins">
    <div class="justify-center flex pt-[5rem] xss:mx-[3rem] xs:[3rem]">
        <h1 class="text-3xl text-black border border-gray-300 shadow-md shadow-gray-400 font-semibold bg-white py-3 px-5 rounded-md">Rate Discount</h1>
    </div>
    <section class="lg:ml-[5rem] xss:ml-[1rem] xs:ml-[1rem] mr-[1rem] grid grid-cols-1 gap-4 lg:grid-cols-2 my-[5rem]">
        <div class="shadow-lg rounded-lg h-[41rem] overflow-auto mx-4 md:mx-10">
            <table class="w-auto table-fixed">
                <div>
                <h2 class="bg-gray-100 w-auto drop-shadow-md text-pretty py-2 text-base font-semibold">Kredit </h2>
                <input type="text"
                    class= "p-4 w-auto  my-1 border-2 rounded-lg dark:text-black text-base dark:border-gray-200 dark:bg-white"
                    placeholder="add disc" name="discount">>
                </div>
                <thead>
                    <tr class="bg-gray-100">
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">Plafon</th>
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">12 bulan</th>
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">24 bulan</th>
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">36 bulan</th>
                    </tr>
                </thead>
                <tbody class="bg-white">
                    <tr> 
                        <td class="py-4 px-6 border-b border-gray-200">Rp.100.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> 
                        <td class="py-4 px-6 border-b border-gray-200">Rp.200.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> 
                        <td class="py-4 px-6 border-b border-gray-200">Rp.300.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> 
                        <td class="py-4 px-6 border-b border-gray-200">Rp.400.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> 
                        <td class="py-4 px-6 border-b border-gray-200">Rp.500.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> 
                        <td class="py-4 px-6 border-b border-gray-200">Rp.600.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> 
                        <td class="py-4 px-6 border-b border-gray-200">Rp.600.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> 
                        <td class="py-4 px-6 border-b border-gray-200">Rp.600.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> 
                        <td class="py-4 px-6 border-b border-gray-200">Rp.600.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> >
                        <td class="py-4 px-6 border-b border-gray-200">Rp.600.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> >
                        <td class="py-4 px-6 border-b border-gray-200">Rp.600.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> >
                        <td class="py-4 px-6 border-b border-gray-200">Rp.600.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> >
                        <td class="py-4 px-6 border-b border-gray-200">Rp.600.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="shadow-lg rounded-lg h-[41rem] overflow-auto mx-4 md:mx-10 mb-[1rem]">
            <table class="w-auto table-fixed">
                <h2 class="bg-gray-100 drop-shadow-md text-pretty py-2 text-base font-semibold">Deposit</h2>
                <input type="text"
                class= "p-4 w-auto  my-1 border-2 rounded-lg dark:text-black text-base dark:border-gray-200 dark:bg-white"
                placeholder="add disc">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">Plafon</th>
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">12 bulan</th>
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">24 bulan</th>
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">36 bulan</th>
                    </tr>
                </thead>
                <tbody class="bg-white">
                    <tr> 
                        <td class="py-4 px-6 border-b border-gray-200">Rp.100.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> 
                        <td class="py-4 px-6 border-b border-gray-200">Rp.200.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> 
                        <td class="py-4 px-6 border-b border-gray-200">Rp.300.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> 
                        <td class="py-4 px-6 border-b border-gray-200">Rp.400.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> 
                        <td class="py-4 px-6 border-b border-gray-200">Rp.500.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> 
                        <td class="py-4 px-6 border-b border-gray-200">Rp.600.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> 
                        <td class="py-4 px-6 border-b border-gray-200">Rp.600.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> 
                        <td class="py-4 px-6 border-b border-gray-200">Rp.600.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> 
                        <td class="py-4 px-6 border-b border-gray-200">Rp.600.000.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.5.234.000</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.2.243.534</span>
                        </td>
                    </tr>
                    <tr> >
                        <td class="py-4 px-6 border-b border-gray-200">Rp.600.000.000</td>
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