<?php

namespace App\Http\Middleware\Admin;

use Closure;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class KreditAccess
{
    public function handle($request, Closure $next)
    {
        $token = $request->session()->get('kredit_access_token');
        $tokenExpiry = $request->session()->get('kredit_access_expiry');
        $lastDashboardVisit = $request->session()->get('last_dashboard_visit');
        $currentTime = Carbon::now();

        Log::info('KreditAccess Middleware', [
            'token' => $token,
            'tokenExpiry' => $tokenExpiry,
            'lastDashboardVisit' => $lastDashboardVisit,
            'currentTime' => $currentTime,
        ]);

        // Jika token sudah kedaluwarsa
        if ($currentTime->greaterThan(Carbon::parse($tokenExpiry))) {
            $request->session()->forget('kredit_access_token');
            $request->session()->forget('kredit_access_expiry');
            return redirect()->route('dashboard')->with('error', 'Token Anda telah kedaluwarsa. Anda harus mengunjungi dashboard terlebih dahulu.');
        }

        // Jika akses melebihi 5 detik
        if ($lastDashboardVisit && $currentTime->diffInSeconds(Carbon::parse($lastDashboardVisit)) > 5) {
            $request->session()->forget('kredit_access_token');
            $request->session()->forget('kredit_access_expiry');
            return redirect()->route('dashboard')->with('error', 'Token Anda telah kedaluwarsa. Anda harus mengunjungi dashboard terlebih dahulu.');
        }

        return $next($request);
    }    
}
