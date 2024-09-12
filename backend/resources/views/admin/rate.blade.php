@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center font-poppins">
    <div class="justify-center flex pt-[5rem] xss:mx-[3rem] xs:[3rem]">
        <h1 class="text-3xl text-black border border-gray-300 shadow-md shadow-gray-400 font-semibold bg-white py-3 px-5 rounded-md">Rate Discount</h1>
    </div>
    <section class="lg:ml-[5rem] xss:ml-[1rem] xs:ml-[1rem] mr-[1rem] grid grid-cols-1 gap-4 lg:grid-cols-2 my-[5rem]">
        <div class="shadow-lg rounded-lg h-[41rem] overflow-auto mx-4 md:mx-10 mb-[1rem]">
            <table class="w-auto table-fixed">
                <h2 class="bg-gray-100 drop-shadow-md text-pretty py-2 text-base font-semibold">Deposit</h2>
                <form id="discountForm" action="{{ route('rated.deposito.update') }}" method="post">
                    @csrf
                    @method('PUT')
                    <input type="text"
                        class="p-4 w-auto my-1 border-2 rounded-lg dark:text-black text-base dark:border-gray-200 dark:bg-white"
                        placeholder="add disc" name="discount" id="discountInput">
                </form>
                <thead>
                    <tr class="bg-gray-100">
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">Plafon</th>
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">12 bulan</th>
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">24 bulan</th>
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">36 bulan</th>
                    </tr>
                </thead>
                <tbody class="bg-white">
                    @foreach ($ratedDeposito as $item)
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.{{ number_format($item['plafon'], 0, ',', '.') }}</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.{{ number_format($item['12_bulan'], 0, ',', '.') }}</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.{{ number_format($item['24_bulan'], 0, ',', '.') }}</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.{{ number_format($item['36_bulan'], 0, ',', '.') }}</span>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div> 
           
        <div class="shadow-lg rounded-lg h-[41rem] overflow-auto mx-4 md:mx-10 mb-[1rem]">
            <table class="w-auto table-fixed">
                <h2 class="bg-gray-100 drop-shadow-md text-pretty py-2 text-base font-semibold">Deposit</h2>
                <form id="discountForm" action="{{ route('rated.deposito.update') }}" method="post">
                    @csrf
                    @method('PUT')
                    <input type="text"
                        class="p-4 w-auto my-1 border-2 rounded-lg dark:text-black text-base dark:border-gray-200 dark:bg-white"
                        placeholder="add disc" name="discount" id="discountInput">
                </form>
                <thead>
                    <tr class="bg-gray-100">
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">Plafon</th>
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">12 bulan</th>
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">24 bulan</th>
                        <th class="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">36 bulan</th>
                    </tr>
                </thead>
                <tbody class="bg-white">
                    @foreach ($ratedDeposito as $item)
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.{{ number_format($item['plafon'], 0, ',', '.') }}</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.{{ number_format($item['12_bulan'], 0, ',', '.') }}</td>
                        <td class="py-4 px-6 border-b border-gray-200">Rp.{{ number_format($item['24_bulan'], 0, ',', '.') }}</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            <span class=" text-black py-1 px-2 rounded-full text-base">Rp.{{ number_format($item['36_bulan'], 0, ',', '.') }}</span>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>        
    </section>
    </section>

    <script>
        document.getElementById('discountInput').addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Mencegah form submit default
                const form = document.getElementById('discountForm');
                
                // Mengubah nilai input menjadi integer
                const inputValue = parseInt(this.value, 10);
                if (!isNaN(inputValue)) {
                    this.value = inputValue; // Mengatur nilai input menjadi integer
                    form.submit(); // Mengirimkan formulir
                } else {
                    alert('Please enter a valid number.');
                }
            }
        });
    </script>
@endsection