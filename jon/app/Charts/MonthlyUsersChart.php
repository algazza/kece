<?php

namespace App\Charts;

use ArielMejiaDev\LarapexCharts\LarapexChart;

class MonthlyUsersChart
{
    protected $chart;

    public function __construct(LarapexChart $chart)
    {
        $this->chart = $chart;
    }

    public function build(): \ArielMejiaDev\LarapexCharts\LineChart
    {
        return $this->chart->lineChart()
        ->setTitle('Sales during 2021.')
        ->addData('Physical sales', [40, 93, 35, 42, 18, 82,40, 93, 35, 42, 18, 82])
        ->setHeight(170)
        ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June','January', 'February', 'March', 'April', 'May', 'June']);
    }
}
