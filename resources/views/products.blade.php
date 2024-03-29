@extends(layouts.app)

@section('content')
    <h1>Products</h1>
    @if(count($products) > 0)
        @foreach($products as $product)
            <div class="well">
                <h3><a href="/products/{{$product->id}}">{{$product->name}}</a></h3>
                <small>Written on {{$product->created_at}}</small>
            </div>
        @endforeach
@else
        <p>No products found</p>
@endif