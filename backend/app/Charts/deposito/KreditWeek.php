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
        $startTime = $now->copy()->subWeek()->startOfDay();

        $deposito = Deposito::whereBetween('created_at', [$startTime, $now])
                         ->select('created_at')
                         ->orderBy('created_at')
                         ->get()
                         ->groupBy(function($date) {
                             $date = Carbon::parse($date->created_at);
                             return $date->format('Y-m-d'); 
                         });

        $dates = [];
        $counts = [];
        $current = $startTime->copy();
        $end = $now->copy();

        while ($current->lessThanOrEqualTo($end)) {
            $dateLabel = $current->format('d M');
            $dates[] = $dateLabel;
            $counts[] = isset($deposito[$current->format('Y-m-d')]) ? count($deposito[$current->format('Y-m-d')]) : 0;

            $current->addDay();
        }

        return $this->chart->lineChart()
            ->setTitle('Jumlah Data Yang Masuk 1 Minggu Terakhir')
            ->addData('Jumlah Entri', $counts)
            ->setHeight(260)
            ->setXAxis($dates);
    }
}
