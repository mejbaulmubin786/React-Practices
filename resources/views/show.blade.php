<!-- resources/views/profile/show.blade.php -->
@extends('layouts.app')

@section('content')
    <h1>{{ $user->name }}</h1>
    <p>{{ $user->profile->bio }}</p>
    <h3>Skills</h3>
    <p>{{ $user->profile->skills }}</p>
@endsection