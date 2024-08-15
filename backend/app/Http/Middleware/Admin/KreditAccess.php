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

        if (!$token || !$tokenExpiry) {
            Log::info('Token tidak ditemukan atau waktu kedaluwarsa tidak ditemukan.');
            return redirect()->route('dashboard')->with('error', 'Token tidak ditemukan. Anda harus mengunjungi dashboard terlebih dahulu.');
        }
    
        if ($currentTime->greaterThan(Carbon::parse($tokenExpiry))) {
            Log::info('Token telah kedaluwarsa.');
            $request->session()->forget('kredit_access_token');
            $request->session()->forget('kredit_access_expiry');
            return redirect()->route('dashboard')->with('error', 'Token Anda telah kedaluwarsa. Anda harus mengunjungi dashboard terlebih dahulu.');
        }

        return $next($request);
    }    
}
