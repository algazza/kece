<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Reset Password</title>
    @vite('resources/css/app.css')
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="bg-gray-100 font-[sans-serif]">
        <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
            <div class="max-w-md w-full">
                <div class="p-8 rounded-2xl bg-transparent shadow-md">
                    <h2 class="text-gray-800 text-center pb-3 text-2xl font-bold">Reset Password Anda</h2>
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
                    <form action="{{ route('reset.password') }}" method="POST" class="mt-4 space-y-4">
                        @csrf
                        <input type="hidden" name="email" value="{{ $email }}">
                        <div>
                            <label class="text-gray-800 text-sm mb-2 block">Password Baru</label>
                            <input name="password" type="password" required class="w-full text-slate-500 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" />
                        </div>
                        <div>
                            <label class="text-gray-800 text-sm mb-2 block">Konfirmasi Password</label>
                            <input name="password_confirmation" type="password" required class="w-full text-slate-500 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" />
                        </div>
                        <div class="!mt-8">
                            <button type="submit" class="bg-blue-600 text-white w-full font-normal text-md py-3 px-4 rounded-[5px] shadow-md hover:bg-blue-800 active:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 transition-colors duration-300 ease-in-out">
                                Reset Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
