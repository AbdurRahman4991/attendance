@extends('layout.app')
@section('title')Home @endsection
@section('content')
@include('component.nav')
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6 m-auto">
                <div class="card">
                    <div class="card-body">
                        <form id="loginForm">
                            <!-- User Name input -->
                            <div data-mdb-input-init class="form-outline mb-4">
                                <label class="form-label" for="name">User name</label>
                                <input type="text" id="name" name="username" class="form-control" />
                            </div>

                            <!-- Password input -->
                            <div data-mdb-input-init class="form-outline mb-4">
                                <label class="form-label" for="password">Password</label>
                                <input type="password" name="password" id="password" class="form-control" />
                            </div>

                            <!-- Submit button -->
                            <button data-mdb-ripple-init type="submit" class="btn btn-primary btn-block">Sign in</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection