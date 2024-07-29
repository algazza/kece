<?php

namespace App\Http\Middleware\Admin;

use Closure;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class KreditAccess
{
    public function handle($request, Closure $next)
    {
        $startTime = Carbon::now();

        $token = $request->session()->get('kredit_access_token');
        $tokenExpiry = $request->session()->get('kredit_access_expiry');
        $lastDashboardVisit = $request->session()->get('last_dashboard_visit');

        $currentTime = Carbon::now();

        Log::info('Middleware executed.');
        Log::info('Token: ' . $token);
        Log::info('Token Expiry: ' . $tokenExpiry);
        Log::info('Last Dashboard Visit: ' . $lastDashboardVisit);
        Log::info('Current Time: ' . $currentTime);

        if (!$token || $currentTime->greaterThan(Carbon::parse($tokenExpiry))) {
            Log::info('Token invalid or expired.');
            return redirect()->route('generate.token')->with('error', 'Akses halaman kredit sudah habis atau tidak valid.');
        }

        if (!$lastDashboardVisit || $currentTime->diffInSeconds(Carbon::parse($lastDashboardVisit)) > 5) {
            Log::info('Dashboard visit invalid or expired.');
            return redirect()->route('dashboard')->with('error', 'Anda harus mengunjungi dashboard terlebih dahulu.');
        }

        return $next($request);
    }
}
