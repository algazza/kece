<?php

namespace App\Charts\deposito;

use ArielMejiaDev\LarapexCharts\LarapexChart;
use App\Models\Deposito;
use Carbon\Carbon;

class KreditWeek
{
    protected $chart;

    public function __construct(LarapexChart $chart)
    {
        $this->chart = $chart;
    }

    public function build(): \ArielMejiaDev\LarapexCharts\LineChart
    {
        $now = Carbon::now();
        $startTime = $now->copy()->subMinutes(7)->startOfMinute();

        $deposito = Deposito::whereBetween('created_at', [$startTime, $now])
                         ->select('created_at')
                         ->orderBy('created_at')
                         ->get()
                         ->groupBy(function($date) {
                             $date = Carbon::parse($date->created_at);
                             return $date->format('H:i');
                         });

        $intervals = [];
        $counts = [];
        for ($i = 0; $i < 8; $i++) {
            $time = $startTime->copy()->addMinutes($i)->format('H:i');
            $intervals[] = $time;
            $counts[] = isset($deposito[$time]) ? $deposito[$time]->count() : 0;
        }

        return $this->chart->lineChart()
            ->setTitle('Jumlah Entri per Minggu (7 Menit Terakhir)')
            ->addData('Jumlah Entri', $counts)
            ->setHeight(210)
            ->setXAxis($intervals);
    }
}
