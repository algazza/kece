<?php

namespace App\Http\Middleware\Admin;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminAkses
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        if (in_array(auth()->user()->role, $roles)) {
            return $next($request);
        }

        return redirect()->route('dashboard')->with('error', 'anda tidak di izinkan mengakses page tersebut');
    }
}
