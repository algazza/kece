<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase; // Menggunakan Laravel's TestCase
use App\Models\Penghargaan;

class PenghargaanUnitTest extends TestCase
{
    use RefreshDatabase; // Membersihkan database setelah setiap test

    /**
     * Test that Penghargaan is created and image is saved correctly.
     */
    public function test_create_penghargaan_with_image()
    {
        // Simulasi penyimpanan disk di "public"
        Storage::fake('public');

        // Buat file gambar palsu
        $image = UploadedFile::fake()->image('penghargaan.jpg', 100, 100);

        // Logika penyimpanan image
        $imageName = time() . '.' . $image->extension();
        $image->move(public_path('image/public/penghargaan'), $imageName);

        // Simpan Penghargaan ke database
        $penghargaan = new Penghargaan();
        $penghargaan->nama_penghargaan = 'Penghargaan Terbaik';
        $penghargaan->image = $imageName;
        $penghargaan->save();

        // Periksa apakah gambar disimpan di direktori yang benar
        $this->assertTrue(Storage::disk('public')->exists('image/public/penghargaan/' . $imageName));

        // Periksa apakah data penghargaan tersimpan di database
        $this->assertDatabaseHas('penghargaan', [
            'nama_penghargaan' => 'Penghargaan Terbaik',
            'image' => $imageName,
        ]);
    }
}
