<?php

namespace App\Charts\pickup;

use ArielMejiaDev\LarapexCharts\LarapexChart;
use App\Models\Pickup;
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

        $pickup = Pickup::whereBetween('created_at', [$startTime, $now])
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
            $counts[] = isset($pickup[$current->format('Y-m-d')]) ? count($pickup[$current->format('Y-m-d')]) : 0;

            $current->addDay();
        }

        return $this->chart->lineChart()
            ->setTitle('Jumlah Data Yang Masuk 1 Minggu Terakhir')
            ->addData('Jumlah Entri', $counts)
            ->setHeight(210)
            ->setXAxis($dates);
    }
}
