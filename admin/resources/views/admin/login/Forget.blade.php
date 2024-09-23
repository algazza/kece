<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lupa Password</title>
    @vite('resources/css/app.css')
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="bg-gray-100 font-[sans-serif]">
        <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
            <div class="max-w-md w-full">
                <div class="p-8 rounded-2xl bg-transparent shadow-md">
                    <h2 class="text-gray-800 text-center pb-3 text-2xl font-bold">Lupa Password?</h2>
                    <a href="javascript:void(0)"><img src="{{ asset('image/admin/LOGO-AM-CORAL-BARU.svg') }}" alt="logo" class='w-20 mx-auto block' /></a>
                    @if ($errors->any())
                        <div class="alert alert-danger">
                            <ul>
                                @foreach ($errors->all() as $item)
                                    <li>{{ $item }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif
                    <form action="{{ route('find.email') }}" method="POST" class="mt-4 space-y-4">
                        @csrf
                        <div>
                            <label class="text-gray-800 text-sm mb-2 block">Masukkan Email Anda</label>
                            <div class="relative flex items-center">
                                <input name="email" type="text" required class="w-full text-slate-500 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="!mt-8">
                            <button type="submit" class="bg-blue-600 text-white w-full font-normal text-md py-3 px-4 rounded-[5px] shadow-md hover:bg-blue-800 active:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 transition-colors duration-300 ease-in-out">
                                Temukan!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
