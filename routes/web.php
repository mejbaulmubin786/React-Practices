<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//--------------------------------------------------
// routes/web.php
Route::get('/profile/{user}', [ProfileController::class, 'show'])->name('profile.show');
Route::get('/profile/{user}/edit', [ProfileController::class, 'edit'])->name('profile.edit');
Route::post('/profile/{user}', [ProfileController::class, 'update'])->name('profile.update');
// routes/web.php
Route::get('/exchange', [ExchangeController::class, 'create'])->name('exchange.create');
Route::post('/exchange', [ExchangeController::class, 'store'])->name('exchange.store');
// routes/web.php
Route::get('/mentorship', [MentorshipController::class, 'index'])->name('mentorship.index');
Route::post('/mentorship', [MentorshipController::class, 'store'])->name('mentorship.store');
// routes/web.php
Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
Route::post('/projects', [ProjectController::class, 'store'])->name('projects.store');
// routes/web.php
Route::post('/ratings', [RatingController::class, 'store'])->name('ratings.store');

require __DIR__ . '/auth.php';
